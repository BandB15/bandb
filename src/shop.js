import { ALL_PRODUCTS } from './data/products.js';
import { createIcons, X } from 'lucide';
import { fetchShopProducts } from './lib/api.js';

// Re-use createProductCardHTML from main.js if possible, or duplicate here if easier.
// Since it's not exported from main.js, I will create a scoped version for the shop to keep it independent.
function createShopProductCard(product) {
  // Wishlist state checking would need global state access.
  // To keep it simple, we'll dispatch an event or rely on main.js wishlist handler
  // But we need the HTML. We can just generate it and let main.js event delegation handle clicks.
  
  // Try to get wishlist from global state if it exists, otherwise default false.
  let isWishlisted = false;
  if (window.appState && window.appState.wishlist) {
    isWishlisted = window.appState.wishlist.has(product.id);
  }

  return `
    <article class="product-card is-revealed" data-product-id="${product.id}" data-product-slug="${product.slug}">
      <div class="product-image-wrap">
        <img 
          src="${product.image}" 
          alt="${product.brand} ${product.name}" 
          class="product-img"
          loading="lazy"
        />
        
        <button 
          class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
          aria-label="Add to Wishlist"
          data-action="wishlist"
          data-product-id="${product.id}"
        >
          <i data-lucide="heart" style="width: 18px; height: 18px; fill: ${isWishlisted ? 'var(--red-primary)' : 'none'};"></i>
        </button>

        <button 
          class="product-quick-action" 
          data-action="quickview"
          data-product-id="${product.id}"
        >
          <span>QUICK VIEW</span>
          <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
        </button>
      </div>

      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price-row">
          <span class="product-price">${product.price}</span>
          <span class="product-tag">${product.fit}</span>
        </div>
      </div>
    </article>
  `;
}

const shopState = {
  activeCategories: new Set(),
  activeSizes: new Set(),
  sortMode: 'featured'
};

const CATEGORIES = [
  { id: 'shirts', label: 'Shirts Collection', match: ['Shirts Collection', 'Shirts'] },
  { id: 'tshirts', label: 'T-Shirts', match: ['T-Shirts'] },
  { id: 'polos', label: 'Polo T-Shirts', match: ['Polo T-Shirts'] },
  { id: 'jeans', label: 'Jeans', match: ['Jeans'] },
  { id: 'sportswear', label: 'Sportswear', match: ['Sportswear'] },
  { id: 'hoodies', label: 'Sweatshirts & Hoodies', match: ['Sweatshirts & Hoodies'] }
];

const SIZES = ["S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36"];

export function initShop(queryParams = '') {
  // Reset State
  shopState.activeCategories.clear();
  shopState.activeSizes.clear();
  shopState.sortMode = 'featured';

  // Parse Query Params (e.g. "?category=tshirts")
  if (queryParams) {
    const params = new URLSearchParams(queryParams);
    const cat = params.get('category');
    if (cat) {
      shopState.activeCategories.add(cat.toLowerCase());
    }
  }

  // Bind UI Elements
  bindShopEvents();
  
  // Render Initial View
  renderFilterSidebar();
  renderActiveFilterChips();
  renderShopHeader();
  updateShopGrid();
}

function bindShopEvents() {
  const sidebar = document.getElementById('shop-filter-sidebar');
  const toggleBtn = document.getElementById('shop-filter-toggle-btn');
  const closeBtn = document.getElementById('shop-filter-close-btn');
  const applyBtn = document.getElementById('shop-apply-filters-btn');
  const clearAllBtn = document.getElementById('shop-clear-all-filters-btn');
  const sortSelect = document.getElementById('shop-sort-select');

  // Drawer Toggle
  if (toggleBtn && sidebar) {
    // Clone node to remove old listeners in case of multiple inits
    const newToggle = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newToggle, toggleBtn);
    newToggle.addEventListener('click', () => {
      sidebar.classList.add('open');
      document.getElementById('modal-backdrop')?.classList.add('open');
    });
  }

  if (closeBtn && sidebar) {
    const newClose = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newClose, closeBtn);
    newClose.addEventListener('click', () => {
      sidebar.classList.remove('open');
      document.getElementById('modal-backdrop')?.classList.remove('open');
    });
  }

  if (applyBtn && sidebar) {
    const newApply = applyBtn.cloneNode(true);
    applyBtn.parentNode.replaceChild(newApply, applyBtn);
    newApply.addEventListener('click', () => {
      sidebar.classList.remove('open');
      document.getElementById('modal-backdrop')?.classList.remove('open');
    });
  }

  // Empty State Clear Filters
  if (clearAllBtn) {
    const newClear = clearAllBtn.cloneNode(true);
    clearAllBtn.parentNode.replaceChild(newClear, clearAllBtn);
    newClear.addEventListener('click', () => {
      shopState.activeCategories.clear();
      shopState.activeSizes.clear();
      renderFilterSidebar();
      renderActiveFilterChips();
      renderShopHeader();
      updateShopGrid();
    });
  }

  // Sort
  if (sortSelect) {
    const newSort = sortSelect.cloneNode(true);
    sortSelect.parentNode.replaceChild(newSort, sortSelect);
    newSort.value = shopState.sortMode;
    newSort.addEventListener('change', (e) => {
      shopState.sortMode = e.target.value;
      updateShopGrid();
    });
  }
}

function renderShopHeader() {
  const titleEl = document.getElementById('shop-title');
  const subtitleEl = document.getElementById('shop-subtitle');
  const breadcrumbEl = document.getElementById('shop-breadcrumb');

  if (!titleEl || !subtitleEl || !breadcrumbEl) return;

  if (shopState.activeCategories.size === 1) {
    const catId = Array.from(shopState.activeCategories)[0];
    const catDef = CATEGORIES.find(c => c.id === catId);
    
    if (catDef) {
      titleEl.textContent = catDef.label.toUpperCase();
      subtitleEl.textContent = `Explore our curated selection of premium ${catDef.label.toLowerCase()}.`;
      breadcrumbEl.innerHTML = `
        <a href="#/">HOME</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">${catDef.label.toUpperCase()}</span>
      `;
    } else {
      titleEl.textContent = "COLLECTION";
      subtitleEl.textContent = "Discover our collection of premium menswear.";
      breadcrumbEl.innerHTML = `<a href="#/">HOME</a><span class="breadcrumb-separator">/</span><span class="breadcrumb-current">COLLECTION</span>`;
    }
  } else {
    titleEl.textContent = "ALL PRODUCTS";
    subtitleEl.textContent = "Discover our entire collection of premium menswear.";
    breadcrumbEl.innerHTML = `<a href="#/">HOME</a><span class="breadcrumb-separator">/</span><span class="breadcrumb-current">ALL PRODUCTS</span>`;
  }
}

function renderFilterSidebar() {
  const catListEl = document.getElementById('filter-category-list');
  const sizeGridEl = document.getElementById('filter-size-grid');

  if (catListEl) {
    catListEl.innerHTML = CATEGORIES.map(cat => {
      const isChecked = shopState.activeCategories.has(cat.id);
      
      // Calculate count for this category
      const count = ALL_PRODUCTS.filter(p => cat.match.includes(p.category)).length;

      return `
        <li class="filter-item">
          <label class="filter-label">
            <input type="checkbox" class="filter-checkbox" data-filter-type="category" data-value="${cat.id}" ${isChecked ? 'checked' : ''}>
            <span>${cat.label}</span>
            <span class="filter-count">(${count})</span>
          </label>
        </li>
      `;
    }).join('');
  }

  if (sizeGridEl) {
    sizeGridEl.innerHTML = SIZES.map(size => {
      const isActive = shopState.activeSizes.has(size);
      return `
        <li>
          <button class="size-filter-btn ${isActive ? 'active' : ''}" data-filter-type="size" data-value="${size}">
            ${size}
          </button>
        </li>
      `;
    }).join('');
  }

  // Attach event listeners dynamically to the newly created elements
  document.querySelectorAll('.filter-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const val = e.target.getAttribute('data-value');
      if (e.target.checked) {
        shopState.activeCategories.add(val);
      } else {
        shopState.activeCategories.delete(val);
      }
      renderActiveFilterChips();
      renderShopHeader();
      updateShopGrid();
    });
  });

  document.querySelectorAll('.size-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = e.currentTarget.getAttribute('data-value');
      if (shopState.activeSizes.has(val)) {
        shopState.activeSizes.delete(val);
        e.currentTarget.classList.remove('active');
      } else {
        shopState.activeSizes.add(val);
        e.currentTarget.classList.add('active');
      }
      renderActiveFilterChips();
      updateShopGrid();
    });
  });
}

function renderActiveFilterChips() {
  const container = document.getElementById('shop-active-filters');
  if (!container) return;

  const chips = [];

  shopState.activeCategories.forEach(catId => {
    const catDef = CATEGORIES.find(c => c.id === catId);
    if (catDef) {
      chips.push({ type: 'category', value: catId, label: catDef.label });
    }
  });

  shopState.activeSizes.forEach(size => {
    chips.push({ type: 'size', value: size, label: `Size: ${size}` });
  });

  if (chips.length === 0) {
    container.innerHTML = '';
    return;
  }

  const chipsHTML = chips.map(chip => `
    <div class="active-filter-chip">
      <span>${chip.label}</span>
      <button data-type="${chip.type}" data-value="${chip.value}" aria-label="Remove filter">
        <i data-lucide="x" style="width: 12px; height: 12px;"></i>
      </button>
    </div>
  `).join('');

  container.innerHTML = `
    ${chipsHTML}
    <button class="clear-filters-link" id="chip-clear-all">Clear All</button>
  `;

  // Icons need re-init
  if (window.lucide) {
    createIcons({
      icons: { X },
      nameAttr: 'data-lucide'
    });
  }

  // Chip remove events
  container.querySelectorAll('.active-filter-chip button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = e.currentTarget.getAttribute('data-type');
      const val = e.currentTarget.getAttribute('data-value');
      if (type === 'category') shopState.activeCategories.delete(val);
      if (type === 'size') shopState.activeSizes.delete(val);
      
      renderFilterSidebar(); // update sidebar UI (checkboxes/buttons)
      renderActiveFilterChips();
      renderShopHeader();
      updateShopGrid();
    });
  });

  container.querySelector('#chip-clear-all')?.addEventListener('click', () => {
    shopState.activeCategories.clear();
    shopState.activeSizes.clear();
    renderFilterSidebar();
    renderActiveFilterChips();
    renderShopHeader();
    updateShopGrid();
  });
}

async function updateShopGrid() {
  const gridEl = document.getElementById('shop-products-grid');
  const emptyStateEl = document.getElementById('shop-empty-state');
  
  if (!gridEl || !emptyStateEl) return;

  // Show skeleton loader or something similar (optional, not implemented here)
  
  // 1. Prepare filters for Supabase
  const filters = {};
  if (shopState.activeCategories.size === 1) {
    const catId = Array.from(shopState.activeCategories)[0];
    filters.category = catId;
  }
  
  if (shopState.activeSizes.size > 0) {
    filters.sizes = Array.from(shopState.activeSizes);
  }

  // Fetch products
  let filteredProducts = await fetchShopProducts(filters);
  
  // If multiple categories are selected, we might need client-side filtering if Supabase query is limited
  if (shopState.activeCategories.size > 1) {
     const allowedCategories = Array.from(shopState.activeCategories);
     filteredProducts = filteredProducts.filter(p => allowedCategories.includes(p.category_slug));
  }

  // 3. Sort
  switch (shopState.sortMode) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.priceRaw - b.priceRaw);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.priceRaw - a.priceRaw);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      break;
    case 'featured':
    default:
      filteredProducts.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
      break;
  }

  // 4. Render
  if (filteredProducts.length === 0) {
    gridEl.style.display = 'none';
    emptyStateEl.style.display = 'block';
  } else {
    gridEl.style.display = 'grid'; // Assuming CSS handles the grid
    emptyStateEl.style.display = 'none';
    gridEl.innerHTML = filteredProducts.map(p => createShopProductCard(p)).join('');
    
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }
}

