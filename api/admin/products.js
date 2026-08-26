import { supabaseAdmin } from '../lib/supabase-admin.js';

export default async function handler(req, res) {
  // Validate admin token
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Missing authorization header' });
  
  const token = authHeader.replace('Bearer ', '');
  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
  
  if (authError || !user) return res.status(401).json({ error: 'Invalid token' });

  // Check if admin
  const { data: profile } = await supabaseAdmin.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method === 'POST') {
    // Generate variants bulk
    const { productId, colors, sizes, basePrice, baseSku } = req.body;
    
    const variants = [];
    let counter = 1;
    for (const color of colors) {
      for (const size of sizes) {
        variants.push({
          product_id: productId,
          color_name: color.name,
          color_hex: color.hex,
          size: size,
          sku: `${baseSku}-${color.name.substring(0,3).toUpperCase()}-${size}-${counter.toString().padStart(3, '0')}`,
          price: basePrice,
          stock_quantity: 0,
          active: true
        });
        counter++;
      }
    }

    const { data, error } = await supabaseAdmin.from('product_variants').insert(variants).select();
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ variants: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
