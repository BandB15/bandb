import { supabase } from './supabase.js';

export async function fetchProductsByCategory(categorySlug, limit = 8) {
  // First, get the category id
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();

  if (!category) return [];

  const { data, error } = await supabase
    .from('products')
    .select(`
      id, name, slug, price, original_price, brand_id, fit, image_url,
      brands (name)
    `)
    .eq('category_id', category.id)
    .eq('active', true)
    .limit(limit);

  if (error) {
    console.error(`Error fetching products for category ${categorySlug}:`, error);
    return [];
  }

  // Map to frontend expected format
  return data.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    price: `₹${p.price.toLocaleString('en-IN')}`,
    originalPrice: p.original_price ? `₹${p.original_price.toLocaleString('en-IN')}` : null,
    brand: p.brands?.name || 'B&B',
    fit: p.fit || 'Regular Fit',
    image: p.image_url
  }));
}

export async function fetchProductBySlug(slug) {
  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      brands(name),
      categories(name),
      product_variants (id, color_name, color_hex, size, price, stock_quantity, sku),
      product_images (image_url, image_type, sort_order)
    `)
    .eq('slug', slug)
    .eq('active', true)
    .single();

  if (error || !product) {
    console.error("Error fetching product details:", error);
    return null;
  }

  // Extract unique colors and sizes from variants
  const colorMap = new Map();
  const sizesSet = new Set();
  
  product.product_variants.forEach(v => {
    if (v.stock_quantity > 0) {
      if (!colorMap.has(v.color_name)) {
        colorMap.set(v.color_name, { name: v.color_name, hex: v.color_hex });
      }
      sizesSet.add(v.size);
    }
  });

  const colors = Array.from(colorMap.values());
  const sizes = Array.from(sizesSet);

  // Extract main images
  const images = (product.product_images || [])
    .sort((a, b) => a.sort_order - b.sort_order)
    .map(img => img.image_url);

  if (images.length === 0 && product.image_url) {
    images.push(product.image_url);
  }

  return {
    ...product,
    brand: product.brands?.name,
    priceFormatted: `₹${product.price.toLocaleString('en-IN')}`,
    originalPriceFormatted: product.original_price ? `₹${product.original_price.toLocaleString('en-IN')}` : null,
    images: images.length > 0 ? images : ['/assets/placeholder.jpg'],
    image: images[0] || '/assets/placeholder.jpg',
    colors,
    sizes,
    variants: product.product_variants
  };
}

export async function fetchShopProducts(filters = {}) {
  let query = supabase
    .from('products')
    .select(`
      id, name, slug, price, original_price, brand_id, fit, image_url, created_at, featured, new_arrival, is_sale,
      brands (name),
      categories!inner(slug)
    `)
    .eq('active', true);

  if (filters.category) {
    query = query.eq('categories.slug', filters.category);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching shop products:", error);
    return [];
  }

  // The size filtering would ideally be a complex inner join on variants,
  // but for simplicity on client side (or we can just fetch and filter)
  // Let's assume we do complex filtering later or here.
  let results = data;

  if (filters.sizes && filters.sizes.length > 0) {
    // We need to fetch variants to see if size matches
    const { data: variants } = await supabase
      .from('product_variants')
      .select('product_id, size')
      .in('size', filters.sizes)
      .eq('active', true)
      .gt('stock_quantity', 0);
      
    if (variants) {
      const validProductIds = new Set(variants.map(v => v.product_id));
      results = results.filter(p => validProductIds.has(p.id));
    }
  }

  return results.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    price: `₹${p.price.toLocaleString('en-IN')}`,
    originalPrice: p.original_price ? `₹${p.original_price.toLocaleString('en-IN')}` : null,
    priceRaw: p.price,
    brand: p.brands?.name || 'B&B',
    fit: p.fit || 'Regular Fit',
    image: p.image_url,
    created_at: p.created_at,
    featured: p.featured,
    is_sale: p.is_sale,
    new_arrival: p.new_arrival
  }));
}
