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
  if (profile?.role !== 'admin') {
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

// Initialize
initAdmin();
