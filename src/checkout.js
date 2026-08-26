export async function submitCheckout(cart, formData, paymentMethod, userId, guestEmail) {
  const payload = {
    cartItems: cart.map(item => ({
      product_id: item.id,
      variant_id: item.variant_id || item.variants?.[0]?.id || null, // Best effort fallback
      quantity: item.quantity
    })),
    shippingAddress: {
      firstName: formData.get('shipping-fn'),
      lastName: formData.get('shipping-ln'),
      address: formData.get('shipping-address'),
      city: formData.get('shipping-city'),
      state: formData.get('shipping-state'),
      zip: formData.get('shipping-zip'),
      country: formData.get('shipping-country'),
      phone: formData.get('shipping-phone')
    },
    paymentMethod,
    userId,
    guestEmail
  };

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || 'Checkout failed');
  }

  return result;
}
