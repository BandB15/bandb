import { supabaseAdmin } from './lib/supabase-admin.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      cartItems, 
      shippingAddress, 
      userId = null, 
      paymentMethod = 'credit_card',
      guestEmail = null 
    } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // 1. Fetch current prices & stock for all items
    const variantIds = cartItems.map(item => item.variant_id);
    const { data: variants, error: variantsError } = await supabaseAdmin
      .from('product_variants')
      .select('*, products(*)')
      .in('id', variantIds)
      .eq('active', true);

    if (variantsError) throw variantsError;
    if (!variants || variants.length === 0) {
      return res.status(400).json({ error: 'Some products are no longer available.' });
    }

    let subtotal = 0;
    const finalOrderItems = [];

    // 2. Validate stock and calculate totals
    for (const item of cartItems) {
      const variant = variants.find(v => v.id === item.variant_id);
      if (!variant) {
        return res.status(400).json({ error: `Variant ${item.variant_id} is unavailable.` });
      }

      if (variant.stock_quantity < item.quantity) {
        return res.status(400).json({ 
          error: `Not enough stock for ${variant.products.name} (${variant.size}). Available: ${variant.stock_quantity}` 
        });
      }

      // Use the server's price, not the client's
      const unitPrice = variant.price || variant.products.price;
      const itemTotal = unitPrice * item.quantity;
      subtotal += itemTotal;

      finalOrderItems.push({
        product_id: variant.product_id,
        variant_id: variant.id,
        product_name: variant.products.name,
        brand_name: 'B&B', // You could join brands to get this
        size: variant.size,
        color: variant.color_name,
        sku: variant.sku,
        quantity: item.quantity,
        unit_price: unitPrice,
        total_price: itemTotal,
        image_url: variant.products.image_url // Simplified
      });
    }

    // 3. Calculate Tax & Shipping
    const taxAmount = subtotal * 0.18; // 18% tax
    const shippingAmount = subtotal > 999 ? 0 : 150;
    const totalAmount = subtotal + taxAmount + shippingAmount;

    // Generate Order Number
    const orderNumber = `BB-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // 4. Create Order (Using an RPC for transaction safety would be best, but we'll do it sequentially here with admin privileges)
    const { data: order, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert({
        user_id: userId,
        order_number: orderNumber,
        status: 'confirmed',
        payment_status: paymentMethod === 'cod' ? 'pending' : 'paid', // Fake successful payment for MVP
        subtotal,
        shipping_amount: shippingAmount,
        tax_amount: taxAmount,
        discount_amount: 0,
        total_amount: totalAmount,
        shipping_address: shippingAddress,
        billing_address: shippingAddress
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // 5. Create Order Items
    const itemsToInsert = finalOrderItems.map(item => ({
      ...item,
      order_id: order.id
    }));

    const { error: itemsError } = await supabaseAdmin
      .from('order_items')
      .insert(itemsToInsert);

    if (itemsError) {
      // Manual rollback if this fails
      await supabaseAdmin.from('orders').delete().eq('id', order.id);
      throw itemsError;
    }

    // 6. Decrement Stock
    for (const item of cartItems) {
      const variant = variants.find(v => v.id === item.variant_id);
      await supabaseAdmin
        .from('product_variants')
        .update({ stock_quantity: variant.stock_quantity - item.quantity })
        .eq('id', variant.id);
    }

    return res.status(200).json({ success: true, order });

  } catch (error) {
    console.error("Checkout Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
