import { supabase } from './lib/supabase.js';

// Setup Navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    e.target.classList.add('active');

    const targetId = e.target.getAttribute('data-target') + '-view';
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});

async function initAdmin() {
  // Check auth
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    alert("Please login via the main site first.");
    window.location.href = '/index.html';
    return;
  }

  // Check admin role
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
  if (profile?.role !== 'admin' && session.user.email !== 'sujaldesai6989@gmail.com') {
    alert("Access Denied: Admins Only.");
    window.location.href = '/index.html';
    return;
  }

  loadDashboard();
  loadProducts();
  loadOrders();
}

async function loadDashboard() {
  const { data: orders, error } = await supabase.from('orders').select('total_amount');
  if (!error && orders) {
    const totalSales = orders.reduce((sum, order) => sum + Number(order.total_amount), 0);
    document.getElementById('stat-sales').textContent = `₹${totalSales.toLocaleString('en-IN')}`;
    document.getElementById('stat-orders').textContent = orders.length;
  }
}

async function loadProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, brands(name)')
    .order('created_at', { ascending: false });

  if (error) return console.error(error);

  const tbody = document.getElementById('products-tbody');
  tbody.innerHTML = products.map(p => `
    <tr>
      <td><img src="${p.image_url}" width="40" style="border-radius:4px;" /></td>
      <td><strong>${p.name}</strong><br><small style="color:var(--text-secondary);">${p.brands?.name || 'B&B'}</small></td>
      <td>₹${p.price}</td>
      <td><span style="color: ${p.active ? '#4ade80' : '#ef4444'}">${p.active ? 'Active' : 'Inactive'}</span></td>
      <td><button class="btn" style="padding: 5px 10px; font-size: 12px;">Edit</button></td>
    </tr>
  `).join('');
}

async function loadOrders() {
  const { data: orders, error } = await supabase
    .from('orders')
    .select('id, order_number, total_amount, status, created_at, profiles(full_name)')
    .order('created_at', { ascending: false });

  if (error) return console.error(error);

  const tbody = document.getElementById('orders-tbody');
  tbody.innerHTML = orders.map(o => `
    <tr>
      <td>${o.order_number}</td>
      <td>${o.profiles?.full_name || 'Guest'}</td>
      <td>${new Date(o.created_at).toLocaleDateString()}</td>
      <td>₹${o.total_amount}</td>
      <td><span style="color: #fbbf24">${o.status.toUpperCase()}</span></td>
    </tr>
  `).join('');
}

// Handle Add Product
const addProductForm = document.getElementById('admin-add-product-form');
if (addProductForm) {
  addProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Saving...';
    btn.disabled = true;

    try {
      const title = document.getElementById('prod-title').value;
      const categorySlug = document.getElementById('prod-category').value;
      const originalPrice = parseFloat(document.getElementById('prod-original-price').value);
      const price = parseFloat(document.getElementById('prod-price').value);
      const imageInput = document.getElementById('prod-image');
      const imageFile = imageInput.files[0];
      let imageUrl = '';
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('product-images').upload(fileName, imageFile);
        if (uploadError) throw new Error("Image upload failed: " + uploadError.message);
        
        const { data: urlData } = supabase.storage.from('product-images').getPublicUrl(fileName);
        imageUrl = urlData.publicUrl;
      } else {
        throw new Error("Please select an image file.");
      }
      const desc = document.getElementById('prod-desc').value;
      const details = document.getElementById('prod-details').value;
      const materials = document.getElementById('prod-materials').value;
      const fit = document.getElementById('prod-fit').value;
      const shipping = document.getElementById('prod-shipping').value;

      // Get selected sizes
      const sizeCheckboxes = document.querySelectorAll('input[name="sizes"]:checked');
      const sizes = Array.from(sizeCheckboxes).map(cb => cb.value);

      if (sizes.length === 0) throw new Error("Please select at least one size.");

      // 1. Get Category ID
      const { data: catData, error: catErr } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', categorySlug)
        .single();
      
      if (catErr) throw new Error("Category not found in database.");

      // 2. Insert Product
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const { data: productData, error: prodErr } = await supabase
        .from('products')
        .insert({
          name: title,
          slug: slug,
          category_id: catData.id,
          original_price: originalPrice,
          price: price,
          image_url: imageUrl,
          description: desc,
          short_description: details, // Mapping details to short_description for generic use, or we can use the new fields we create
          material: materials,
          fit: fit,
          shipping_returns: shipping
        })
        .select()
        .single();

      if (prodErr) throw prodErr;

      // 3. Insert Variants
      const variants = sizes.map(size => ({
        product_id: productData.id,
        size: size,
        sku: `${slug}-${size}`.toUpperCase(),
        stock_quantity: 50,
        price: price
      }));

      const { error: varErr } = await supabase.from('product_variants').insert(variants);
      if (varErr) throw varErr;

      // Success
      alert('Product Added Successfully!');
      addProductForm.reset();
      
      // Reload products table
      loadProducts();
      
      // Switch view back to products
      document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
      document.getElementById('products-view').classList.add('active');
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.querySelector('.nav-item[data-target="products"]').classList.add('active');

    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      btn.textContent = 'Save Product';
      btn.disabled = false;
    }
  });
}

// Initialize
initAdmin();
