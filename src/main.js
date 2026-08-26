import {
  createIcons,
  Search,
  User,
  ShoppingBag,
  Heart,
  ArrowRight,
  ArrowLeft,
  Ruler,
  ZoomIn,
  Star,
  ShieldCheck,
  RotateCcw,
  Lock,
  Truck,
  X,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Menu,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide';

import { 
  PRODUCTS, 
  SHIRTS_COLLECTION, 
  JEANS_COLLECTION, 
  TSHIRTS_COLLECTION,
  POLOS_COLLECTION,
  SPORTS_COLLECTION,
  HOODIES_COLLECTION,
  CAMPAIGN_SLIDES, 
} from './data/products.js';

import { initShop } from './shop.js';
import { initAuth, signIn, signUp, signOut, authState } from './auth.js';
import { submitCheckout } from './checkout.js';

// Application Global State
const state = {
  currentRoute: 'home',
  activeSlideIndex: 0,
  sliderInterval: null,
  cart: [
    {
      ...PRODUCTS[0],
      selectedSize: "M",
      selectedColor: "Charcoal Black",
      quantity: 1
    }
  ],
  wishlist: new Set(["hoodie-bb-01", "linen-zara-01", "jeans-levis-01"]),
  currentPdpProduct: PRODUCTS[0],
  currentPdpImageIndex: 0,
  currentPdpColor: "Charcoal Black",
  currentPdpSize: "M",
  currentQuickViewProduct: null,
  selectedQuickViewSize: "M"
};

// Initialize Lucide Icons
function initIcons() {
  createIcons({
    icons: {
      Search,
      User,
      ShoppingBag,
      Heart,
      ArrowRight,
      ArrowLeft,
      Ruler,
      ZoomIn,
      Star,
      ShieldCheck,
      RotateCcw,
      Lock,
      Truck,
      X,
      Plus,
      Minus,
      Check,
      ChevronRight,
      Menu,
      Sparkles,
      Instagram,
      Facebook,
      Twitter,
      Youtube
    }
  });
}

// Toast Notification System
function showToast(message, iconName = 'check') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="toast-icon" style="width: 18px; height: 18px;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initIcons();

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// Render Product Card HTML
function createProductCardHTML(product, isSearchResult = false) {
  const isWishlisted = state.wishlist.has(product.id);
  const revealClass = isSearchResult ? 'is-revealed' : 'reveal-on-scroll';

  return `
    <article class="product-card ${revealClass}" data-product-id="${product.id}" data-product-slug="${product.slug}">
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

// Render Homepage Catalog
import { fetchProductsByCategory } from './lib/api.js';

async function renderHomeCatalog() {
  const linenGrid = document.getElementById('linen-shirts-grid');
  const tshirtsGrid = document.getElementById('t-shirts-grid');
  const polosGrid = document.getElementById('polo-tshirts-grid');
  const jeansGrid = document.getElementById('jeans-grid');
  const sportswearGrid = document.getElementById('sportswear-grid');

  if (linenGrid) {
    const products = await fetchProductsByCategory('shirts', 4);
    linenGrid.innerHTML = (products.length ? products : SHIRTS_COLLECTION).map(p => createProductCardHTML(p)).join('');
  }

  if (tshirtsGrid) {
    const products = await fetchProductsByCategory('tshirts', 4);
    tshirtsGrid.innerHTML = (products.length ? products : TSHIRTS_COLLECTION).map(p => createProductCardHTML(p)).join('');
  }

  if (polosGrid) {
    const products = await fetchProductsByCategory('polos', 4);
    polosGrid.innerHTML = (products.length ? products : POLOS_COLLECTION).map(p => createProductCardHTML(p)).join('');
  }

  if (jeansGrid) {
    const products = await fetchProductsByCategory('jeans', 4);
    jeansGrid.innerHTML = (products.length ? products : JEANS_COLLECTION).map(p => createProductCardHTML(p)).join('');
  }

  if (sportswearGrid) {
    const products = await fetchProductsByCategory('sportswear', 4);
    sportswearGrid.innerHTML = (products.length ? products : SPORTS_COLLECTION).map(p => createProductCardHTML(p)).join('');
  }

  initIcons();
  if (typeof setupScrollReveal === 'function') setupScrollReveal();
}

// ==================== ROUTING SYSTEM ====================
function navigateToRoute(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  const hash = window.location.hash || '#/';
  const homeView = document.getElementById('home-view');
  const pdpView = document.getElementById('product-view');
  const checkoutView = document.getElementById('checkout-view');
  const shopView = document.getElementById('shop-view');
  const header = document.getElementById('site-header');
  const footer = document.querySelector('.site-footer');
  const backBtn = document.getElementById('nav-back-btn');

  // Update Nav Active Links
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active');
  });

  if (hash.startsWith('#/checkout')) {
    if (homeView) homeView.style.display = 'none';
    if (pdpView) pdpView.style.display = 'none';
    if (shopView) shopView.style.display = 'none';
    if (checkoutView) checkoutView.style.display = 'block';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    renderCheckoutSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  else if (hash.startsWith('#/product/')) {
    const slug = hash.replace('#/product/', '').split('?')[0];
    renderProductDetailPage(slug);
    
    if (homeView) homeView.style.display = 'none';
    if (pdpView) pdpView.style.display = 'block';
    if (shopView) shopView.style.display = 'none';
    if (checkoutView) checkoutView.style.display = 'none';
    if (header) header.style.display = '';
    if (footer) footer.style.display = '';
    if (backBtn) backBtn.style.display = 'inline-flex';
    
    const newInLink = document.querySelector('[data-nav="newin"]');
    if (newInLink) newInLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  else if (hash.startsWith('#/shop')) {
    const queryStr = hash.split('?')[1] || '';
    if (homeView) homeView.style.display = 'none';
    if (pdpView) pdpView.style.display = 'none';
    if (checkoutView) checkoutView.style.display = 'none';
    if (shopView) shopView.style.display = 'block';
    if (header) header.style.display = '';
    if (footer) footer.style.display = '';
    if (backBtn) backBtn.style.display = 'none';

    initShop('?' + queryStr);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  else if (hash.startsWith('#/category/')) {
    // Fallback for any old category links
    const cat = hash.replace('#/category/', '');
    navigateToRoute(`#/shop?category=${cat}`);
  } 
  else {
    // Home View
    if (homeView) homeView.style.display = 'block';
    if (pdpView) pdpView.style.display = 'none';
    if (shopView) shopView.style.display = 'none';
    if (checkoutView) checkoutView.style.display = 'none';
    if (header) header.style.display = '';
    if (footer) footer.style.display = '';
    if (backBtn) backBtn.style.display = 'none';

    const homeLink = document.querySelector('[data-nav="home"]');
    if (homeLink) homeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initIcons();
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-products-list');
  const countEl = document.getElementById('checkout-summary-count');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');
  const mobileTotalEl = document.getElementById('checkout-mobile-total');
  const successTotalEl = document.getElementById('success-total');

  if (!container) return;

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.priceRaw * item.quantity), 0);
  const tax = subtotal * 0.18; // assuming 18% tax
  const shipping = subtotal > 999 ? 0 : 150;
  const total = subtotal + tax + shipping;

  if (countEl) countEl.textContent = `(${totalItems} ITEMS)`;
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  document.getElementById('checkout-tax').textContent = `₹${tax.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  document.getElementById('checkout-shipping').textContent = shipping === 0 ? '₹0.00' : `₹${shipping.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  const totalStr = `₹${total.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  if (totalEl) totalEl.textContent = totalStr;
  if (mobileTotalEl) mobileTotalEl.textContent = totalStr;
  if (successTotalEl) successTotalEl.textContent = totalStr;

  if (state.cart.length === 0) {
    container.innerHTML = `<div style="color: #777; text-align: center; padding: 20px;">Your cart is empty</div>`;
    return;
  }

  container.innerHTML = state.cart.map((item, index) => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${item.name}" class="checkout-item-img" />
      <div class="checkout-item-details">
        <div class="checkout-item-header">
          <span class="checkout-item-name">${item.name}</span>
          <span class="checkout-item-price">₹${(item.priceRaw * item.quantity).toLocaleString('en-IN')}</span>
        </div>
        <span class="checkout-item-meta">Color: ${item.selectedColor || 'Default'} Size: ${item.selectedSize || 'M'}</span>
        
        <div class="checkout-item-actions">
          <div class="checkout-qty-control">
            <button class="checkout-qty-btn" data-action="checkout-decrease" data-index="${index}">-</button>
            <span class="checkout-qty-val">${item.quantity}</span>
            <button class="checkout-qty-btn" data-action="checkout-increase" data-index="${index}">+</button>
          </div>
          <div class="checkout-item-btns">
            <button class="checkout-item-action-btn" data-action="checkout-remove" data-index="${index}">
              <i data-lucide="trash-2"></i>
              <span>Remove</span>
            </button>
            <button class="checkout-item-action-btn ${state.wishlist.has(item.id) ? 'active' : ''}" data-action="wishlist" data-product-id="${item.id}">
              <i data-lucide="heart"></i>
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initIcons();
}

// ==================== PRODUCT DETAIL PAGE (PDP) CONTROLLER ====================
import { fetchProductBySlug } from './lib/api.js';

async function renderProductDetailPage(slug) {
  let product = await fetchProductBySlug(slug);
  if (!product) {
    product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  }
  
  state.currentPdpProduct = product;
  state.currentPdpImageIndex = 0;
  state.currentPdpColor = product.colors?.[0]?.name || "Charcoal Black";
  state.currentPdpSize = product.sizes?.[0] || "M";

  // Document Title
  document.title = `${product.brand || 'B&B'} ${product.name} | B&B Luxury Menswear`;

  // 1. Breadcrumb
  const breadcrumbEl = document.getElementById('pdp-breadcrumb');
  if (breadcrumbEl) {
    const breadcrumbs = product.breadcrumb || ['Home', product.categories?.name || 'Shop', product.name];
    breadcrumbEl.innerHTML = breadcrumbs.map((crumb, idx) => {
      const isLast = idx === breadcrumbs.length - 1;
      if (isLast) {
        return `<span class="breadcrumb-current">${crumb}</span>`;
      }
      return `
        <a href="#/" class="breadcrumb-link">${crumb}</a>
        <span class="breadcrumb-separator">/</span>
      `;
    }).join('');
  }

  // 2. Main Gallery Thumbnails
  const thumbsListEl = document.getElementById('pdp-thumbnails-list');
  const mainImgEl = document.getElementById('pdp-main-img');
  const counterEl = document.getElementById('pdp-image-counter');
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  if (thumbsListEl) {
    thumbsListEl.innerHTML = images.map((imgSrc, idx) => `
      <button class="pdp-thumbnail-item ${idx === 0 ? 'active' : ''}" data-thumb-idx="${idx}">
        <img src="${imgSrc}" alt="${product.name} view ${idx + 1}" class="pdp-thumbnail-img" />
      </button>
    `).join('');
  }

  if (mainImgEl) {
    mainImgEl.src = images[0];
    mainImgEl.alt = `${product.brand} ${product.name}`;
  }

  if (counterEl) {
    counterEl.textContent = `01 / 0${images.length}`;
  }

  // 3. Info Panel
  const badgeEl = document.getElementById('pdp-badge');
  const titleEl = document.getElementById('pdp-title');
  const ratingScoreEl = document.getElementById('pdp-rating-score');
  const reviewsLinkEl = document.getElementById('pdp-reviews-link');
  const priceCurrentEl = document.getElementById('pdp-price-current');
  const priceOriginalEl = document.getElementById('pdp-price-original');
  const discountBadgeEl = document.getElementById('pdp-discount-badge');
  const descEl = document.getElementById('pdp-description');

  if (badgeEl) badgeEl.textContent = product.badge || (product.new_arrival ? "NEW ARRIVAL" : (product.is_sale ? "SALE" : "FEATURED"));
  if (titleEl) titleEl.textContent = product.name;
  if (ratingScoreEl) ratingScoreEl.textContent = product.rating || 4.8;
  if (reviewsLinkEl) reviewsLinkEl.textContent = `${product.reviewCount || 128} reviews`;
  if (priceCurrentEl) priceCurrentEl.textContent = product.priceFormatted || product.price;
  if (priceOriginalEl) priceOriginalEl.textContent = product.originalPriceFormatted || product.originalPrice || '';
  if (discountBadgeEl) {
    if (product.originalPriceFormatted || product.originalPrice) {
      discountBadgeEl.textContent = product.discount || 'SALE';
      discountBadgeEl.style.display = 'inline-block';
    } else {
      discountBadgeEl.style.display = 'none';
    }
  }
  if (descEl) descEl.textContent = product.description;

  // 4. Color Swatches
  const colorNameEl = document.getElementById('pdp-selected-color-name');
  const colorSwatchesEl = document.getElementById('pdp-color-swatches');
  if (colorNameEl) colorNameEl.textContent = state.currentPdpColor;

  if (colorSwatchesEl && product.colors) {
    colorSwatchesEl.innerHTML = product.colors.map((c, idx) => `
      <button class="pdp-color-swatch ${idx === 0 ? 'active' : ''}" data-color-name="${c.name}" data-color-img="${c.image}" title="${c.name}">
        <span class="pdp-color-swatch-inner" style="background-color: ${c.hex};"></span>
      </button>
    `).join('');
  }

  // 5. Size Buttons
  const sizeNameEl = document.getElementById('pdp-selected-size-name');
  const sizeGridEl = document.getElementById('pdp-size-grid');
  if (sizeNameEl) sizeNameEl.textContent = state.currentPdpSize;

  if (sizeGridEl && product.sizes) {
    sizeGridEl.innerHTML = product.sizes.map((s) => `
      <button class="pdp-size-btn ${s === state.currentPdpSize ? 'active' : ''}" data-size-val="${s}">
        ${s}
      </button>
    `).join('');
  }

  // 6. Wishlist Button on PDP
  const pdpWishlistBtn = document.getElementById('pdp-wishlist-btn');
  if (pdpWishlistBtn) {
    const isWish = state.wishlist.has(product.id);
    pdpWishlistBtn.classList.toggle('active', isWish);
    pdpWishlistBtn.innerHTML = `
      <i data-lucide="heart" style="width: 22px; height: 22px; fill: ${isWish ? 'var(--red-primary)' : 'none'}; color: ${isWish ? 'var(--red-primary)' : 'var(--text-white)'};"></i>
    `;
  }

  // 7. Tabs Content
  renderPdpTabs(product);

  // 8. Fabric Image Card
  const fabricImgEl = document.getElementById('pdp-fabric-img');
  const fabricLabelEl = document.getElementById('pdp-fabric-label');
  if (fabricImgEl) fabricImgEl.src = product.fabricImage || product.image;
  if (fabricLabelEl) fabricLabelEl.textContent = product.fabricLabel || "PREMIUM QUALITY FABRIC";

  // 9. Recommendations
  renderRecommendations(product);

  // 10. Update Mobile Sticky Bar
  const stickyTitle = document.getElementById('pdp-sticky-title');
  const stickyPrice = document.getElementById('pdp-sticky-price');
  if (stickyTitle) stickyTitle.textContent = product.name;
  if (stickyPrice) stickyPrice.textContent = product.price;

  initIcons();
  setupStickyBarObserver();
}

function renderPdpTabs(product) {
  // Tab 1: Details Bullets
  const detailsListEl = document.getElementById('pdp-tab-details-list');
  if (detailsListEl) {
    const bullets = product.detailsBullets || [
      "Oversized relaxed streetwear silhouette",
      "Heavyweight 460 GSM organic French terry cotton",
      "Double-layered structured hood with discreet eyelets",
      "Reinforced ribbed cuffs and waistband for shape retention",
      "Ultra-soft brushed fleece interior lining"
    ];
    detailsListEl.innerHTML = bullets.map(b => `
      <li class="pdp-bullet-item">
        <i data-lucide="check" class="pdp-bullet-icon" style="width: 16px; height: 16px;"></i>
        <span>${b}</span>
      </li>
    `).join('');
  }

  // Tab 2: Materials
  const materialsTableEl = document.getElementById('pdp-tab-materials-table');
  if (materialsTableEl && product.materials) {
    materialsTableEl.innerHTML = `
      <div class="pdp-material-row">
        <span class="pdp-material-title">Fabric Composition</span>
        <span class="pdp-material-val">${product.materials.fabric}</span>
      </div>
      <div class="pdp-material-row">
        <span class="pdp-material-title">Garment Weight</span>
        <span class="pdp-material-val">${product.materials.weight}</span>
      </div>
      <div class="pdp-material-row">
        <span class="pdp-material-title">Finish &amp; Feel</span>
        <span class="pdp-material-val">${product.materials.finish}</span>
      </div>
      <div class="pdp-material-row">
        <span class="pdp-material-title">Care Instructions</span>
        <span class="pdp-material-val">${product.materials.care}</span>
      </div>
    `;
  }

  // Tab 3: Size & Fit
  const modelStatsEl = document.getElementById('pdp-model-stats');
  const fitTypeEl = document.getElementById('pdp-fit-type-desc');
  const sizeTableEl = document.getElementById('pdp-tab-size-table');

  if (product.sizeFit) {
    if (modelStatsEl) {
      modelStatsEl.innerHTML = `
        <i data-lucide="user" style="width: 16px; height: 16px; color: var(--red-primary);"></i>
        <span>${product.sizeFit.modelStats}</span>
      `;
    }
    if (fitTypeEl) fitTypeEl.textContent = product.sizeFit.fitType;

    if (sizeTableEl && product.sizeFit.table) {
      const headers = Object.keys(product.sizeFit.table[0]);
      sizeTableEl.innerHTML = `
        <thead>
          <tr>
            ${headers.map(h => `<th>${h.toUpperCase()}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${product.sizeFit.table.map(row => `
            <tr>
              ${headers.map(h => `<td>${row[h]}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      `;
    }
  }

  // Tab 4: Shipping
  const shippingListEl = document.getElementById('pdp-tab-shipping-list');
  if (shippingListEl && product.shippingInfo) {
    shippingListEl.innerHTML = `
      <li class="pdp-bullet-item">
        <i data-lucide="truck" class="pdp-bullet-icon" style="width: 16px; height: 16px;"></i>
        <span>${product.shippingInfo.freeShipping}</span>
      </li>
      <li class="pdp-bullet-item">
        <i data-lucide="shield-check" class="pdp-bullet-icon" style="width: 16px; height: 16px;"></i>
        <span>${product.shippingInfo.deliveryTime}</span>
      </li>
      <li class="pdp-bullet-item">
        <i data-lucide="rotate-ccw" class="pdp-bullet-icon" style="width: 16px; height: 16px;"></i>
        <span>${product.shippingInfo.returns}</span>
      </li>
    `;
  }
}

function renderRecommendations(currentProduct) {
  const recGridEl = document.getElementById('pdp-recommendations-grid');
  if (!recGridEl) return;

  const relatedSlugs = currentProduct.relatedProductSlugs || ["minimal-hoodie", "classic-sweatshirt", "zip-up-hoodie", "essential-hoodie-cream"];
  const relatedProducts = relatedSlugs
    .map(slug => PRODUCTS.find(p => p.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  // If less than 4, fill with other products
  if (relatedProducts.length < 4) {
    const extras = PRODUCTS.filter(p => p.id !== currentProduct.id && !relatedProducts.includes(p)).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...extras);
  }

  recGridEl.innerHTML = relatedProducts.map(p => createProductCardHTML(p, true)).join('');
  initIcons();
}

// Setup Mobile Sticky Purchase Bar Observer
function setupStickyBarObserver() {
  const addCartBtn = document.getElementById('pdp-add-cart-btn');
  const stickyBar = document.getElementById('pdp-mobile-sticky-bar');
  if (!addCartBtn || !stickyBar) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyBar.classList.remove('visible');
      } else {
        // When user scrolls down past the main CTA
        if (window.scrollY > 300) {
          stickyBar.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.1 });

  observer.observe(addCartBtn);
}

// ==================== HERO CAMPAIGN SLIDER ====================
function setupHeroSlider() {
  const sliderNav = document.getElementById('hero-slider-nav');
  const headlineLine1 = document.getElementById('hero-headline-1');
  const headlineLine2 = document.getElementById('hero-headline-2');
  const heroEyebrow = document.getElementById('hero-eyebrow');
  const heroDesc = document.getElementById('hero-description');
  const heroModelImg = document.getElementById('hero-model-img');
  const heroCtaBtn = document.getElementById('hero-cta-btn');

  if (!sliderNav) return;

  function updateSlide(index) {
    state.activeSlideIndex = index;
    const slide = CAMPAIGN_SLIDES[index];

    const indicatorButtons = sliderNav.querySelectorAll('.slider-indicator-btn');
    indicatorButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    if (heroEyebrow) heroEyebrow.textContent = slide.eyebrow;
    if (headlineLine1) headlineLine1.textContent = slide.headlineLine1;
    if (headlineLine2) headlineLine2.textContent = slide.headlineLine2;
    if (heroDesc) heroDesc.textContent = slide.description;
    if (heroCtaBtn) {
      heroCtaBtn.innerHTML = `
        <span>${slide.cta}</span>
        <i data-lucide="arrow-right" class="btn-arrow" style="width: 16px; height: 16px;"></i>
      `;
    }

    if (heroModelImg) {
      heroModelImg.style.opacity = '0.2';
      heroModelImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        heroModelImg.src = slide.image;
        heroModelImg.style.opacity = '1';
        heroModelImg.style.transform = 'scale(1)';
      }, 200);
    }

    initIcons();
  }

  sliderNav.addEventListener('click', (e) => {
    const btn = e.target.closest('.slider-indicator-btn');
    if (!btn) return;
    const index = parseInt(btn.getAttribute('data-slide-index'), 10);
    clearInterval(state.sliderInterval);
    updateSlide(index);
    startAutoSlide();
  });

  function startAutoSlide() {
    state.sliderInterval = setInterval(() => {
      const nextIndex = (state.activeSlideIndex + 1) % CAMPAIGN_SLIDES.length;
      updateSlide(nextIndex);
    }, 7000);
  }

  startAutoSlide();
}

// ==================== CART DRAWER & CHECKOUT ====================
function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.priceRaw * item.quantity), 0);

  if (cartBadge) {
    cartBadge.textContent = totalItems;
    cartBadge.classList.add('pulse');
    setTimeout(() => cartBadge.classList.remove('pulse'), 300);
  }

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
  }

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <i data-lucide="shopping-bag" class="cart-empty-icon"></i>
        <h4 style="font-size: 17px; color: var(--text-white);">Your bag is empty</h4>
        <p style="font-size: 13px;">Discover our new arrivals.</p>
        <button class="btn-primary" style="margin-top: 12px;" onclick="document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('modal-backdrop').classList.remove('open');">
          CONTINUE SHOPPING
        </button>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <span class="cart-item-brand">${item.brand}</span>
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-size">Size: ${item.selectedSize} • ${item.selectedColor || item.color || ''}</span>
          <span class="cart-item-price">${item.price}</span>
          <div class="cart-qty-control">
            <button class="cart-qty-btn" data-action="decrease-qty" data-index="${index}">-</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" data-action="increase-qty" data-index="${index}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-action="remove-item" data-index="${index}" aria-label="Remove item">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
    `).join('');
  }

  initIcons();
}

function addToCart(product, size = "M", color = "") {
  const chosenColor = color || product.colors?.[0]?.name || product.color || "Default";
  const existingItem = state.cart.find(
    item => item.id === product.id && item.selectedSize === size && item.selectedColor === chosenColor
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      ...product,
      selectedSize: size,
      selectedColor: chosenColor,
      quantity: 1
    });
  }

  updateCartUI();
  showToast(`${product.name} (${chosenColor}, Size ${size}) added to cart.`, 'shopping-bag');
  openCartDrawer();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

// ==================== QUICK VIEW MODAL ====================
function openQuickView(product) {
  state.currentQuickViewProduct = product;
  state.selectedQuickViewSize = product.sizes[0] || "M";

  const modal = document.getElementById('quickview-modal');
  const backdrop = document.getElementById('modal-backdrop');

  if (!modal || !backdrop) return;

  const imgEl = modal.querySelector('.quickview-img');
  const brandEl = modal.querySelector('.quickview-brand');
  const nameEl = modal.querySelector('.quickview-name');
  const priceEl = modal.querySelector('.quickview-price');
  const descEl = modal.querySelector('.quickview-desc');
  const sizeOptionsEl = modal.querySelector('.size-options');
  const wishBtn = modal.querySelector('.quickview-wish-btn');

  if (imgEl) imgEl.src = product.image;
  if (brandEl) brandEl.textContent = product.brand;
  if (nameEl) nameEl.textContent = product.name;
  if (priceEl) priceEl.textContent = product.price;
  if (descEl) descEl.textContent = product.description;

  if (sizeOptionsEl) {
    sizeOptionsEl.innerHTML = product.sizes.map((s, idx) => `
      <button class="size-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
    `).join('');
  }

  if (wishBtn) {
    const isWish = state.wishlist.has(product.id);
    wishBtn.innerHTML = `
      <i data-lucide="heart" style="width: 20px; height: 20px; fill: ${isWish ? 'var(--red-primary)' : 'none'}; color: ${isWish ? 'var(--red-primary)' : 'var(--text-white)'};"></i>
    `;
  }

  const searchModal = document.getElementById('search-modal');
  if (searchModal) searchModal.classList.remove('open');

  initIcons();
  modal.classList.add('open');
  backdrop.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

// ==================== WISHLIST HANDLER ====================
function toggleWishlist(productId) {
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast(`Removed ${product.name} from your Wishlist`, 'heart');
  } else {
    state.wishlist.add(productId);
    showToast(`Added ${product.name} to Wishlist`, 'heart');
  }

  // Update product card heart icons
  document.querySelectorAll(`[data-product-id="${productId}"]`).forEach(card => {
    const heartBtn = card.querySelector('.product-wishlist-btn');
    if (heartBtn) {
      const isWish = state.wishlist.has(productId);
      heartBtn.classList.toggle('active', isWish);
      const icon = heartBtn.querySelector('i');
      if (icon) {
        icon.style.fill = isWish ? 'var(--red-primary)' : 'none';
        icon.style.color = isWish ? 'var(--red-primary)' : 'var(--text-secondary)';
      }
    }
  });

  // Update PDP wishlist button if open
  const pdpWishBtn = document.getElementById('pdp-wishlist-btn');
  if (pdpWishBtn && state.currentPdpProduct?.id === productId) {
    const isWish = state.wishlist.has(productId);
    pdpWishBtn.classList.toggle('active', isWish);
    pdpWishBtn.innerHTML = `
      <i data-lucide="heart" style="width: 22px; height: 22px; fill: ${isWish ? 'var(--red-primary)' : 'none'}; color: ${isWish ? 'var(--red-primary)' : 'var(--text-white)'};"></i>
    `;
    initIcons();
  }

  // Update quick view heart if open
  const qvWishBtn = document.querySelector('.quickview-wish-btn');
  if (qvWishBtn && state.currentQuickViewProduct?.id === productId) {
    const isWish = state.wishlist.has(productId);
    qvWishBtn.innerHTML = `
      <i data-lucide="heart" style="width: 20px; height: 20px; fill: ${isWish ? 'var(--red-primary)' : 'none'}; color: ${isWish ? 'var(--red-primary)' : 'var(--text-white)'};"></i>
    `;
    initIcons();
  }
}

// ==================== SEARCH MODAL ====================
function setupSearch() {
  const searchBtn = document.getElementById('nav-search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input-field');
  const searchResultsGrid = document.getElementById('search-results-grid');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (!searchBtn || !searchModal) return;

  function openSearch() {
    searchModal.classList.add('open');
    backdrop.classList.add('open');
    setTimeout(() => searchInput?.focus(), 150);
    renderSearchResults('');
  }

  function closeSearch() {
    searchModal.classList.remove('open');
    backdrop.classList.remove('open');
    if (searchInput) searchInput.value = '';
  }

  function renderSearchResults(query) {
    if (!searchResultsGrid) return;
    const term = query.toLowerCase().trim();
    const filtered = term === '' 
      ? ALL_PRODUCTS.slice(0, 4) 
      : ALL_PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(term) || 
          p.brand.toLowerCase().includes(term) || 
          p.category.toLowerCase().includes(term) ||
          (p.colors && p.colors.some(c => c.name.toLowerCase().includes(term)))
        );

    if (filtered.length === 0) {
      searchResultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p>No products found matching "${query}".</p>
        </div>
      `;
    } else {
      searchResultsGrid.innerHTML = filtered.map(p => createProductCardHTML(p, true)).join('');
      initIcons();
    }
  }

  searchBtn.addEventListener('click', openSearch);
  searchCloseBtn?.addEventListener('click', closeSearch);

  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });
}

function setupAuth() {
  const authModal = document.getElementById('auth-modal');
  const authCloseBtn = document.getElementById('auth-close-btn');
  const navAccountBtn = document.getElementById('nav-account-btn');
  const backdrop = document.getElementById('modal-backdrop');
  
  const authForm = document.getElementById('auth-form');
  const authEmail = document.getElementById('auth-email');
  const authPassword = document.getElementById('auth-password');
  const authName = document.getElementById('auth-name');
  const authToggleBtn = document.getElementById('auth-toggle-btn');
  const authToggleText = document.getElementById('auth-toggle-text');
  const authSubmitBtn = document.getElementById('auth-submit-btn');

  let isSignUp = false;

  function openAuth() {
    if (authState.user) {
      showToast('You are already signed in.', 'user');
      // Later we can navigate to account page
      return;
    }
    authModal.classList.add('open');
    backdrop.classList.add('open');
  }

  function closeAuth() {
    authModal.classList.remove('open');
    backdrop.classList.remove('open');
  }

  navAccountBtn?.addEventListener('click', (e) => {
    if (!authState.user) {
      e.preventDefault();
      openAuth();
    } else {
      // User is signed in, go to account page or show menu
      // Let it navigate to #account which we might implement
    }
  });

  authCloseBtn?.addEventListener('click', closeAuth);
  
  authToggleBtn?.addEventListener('click', () => {
    isSignUp = !isSignUp;
    if (isSignUp) {
      authName.style.display = 'block';
      authName.required = true;
      authSubmitBtn.textContent = 'SIGN UP';
      authToggleText.textContent = 'Already have an account?';
      authToggleBtn.textContent = 'Sign In';
      authModal.querySelector('h2').textContent = 'CREATE ACCOUNT';
    } else {
      authName.style.display = 'none';
      authName.required = false;
      authSubmitBtn.textContent = 'SIGN IN';
      authToggleText.textContent = "Don't have an account?";
      authToggleBtn.textContent = 'Sign Up';
      authModal.querySelector('h2').textContent = 'MY ACCOUNT';
    }
  });

  authForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    authSubmitBtn.disabled = true;
    authSubmitBtn.textContent = 'PLEASE WAIT...';

    const email = authEmail.value;
    const password = authPassword.value;

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, authName.value);
        if (error) throw error;
        showToast('Account created successfully!', 'check');
        closeAuth();
      } else {
        const { error } = await signIn(email, password);
        if (error) throw error;
        showToast('Welcome back!', 'check');
        closeAuth();
      }
    } catch (err) {
      showToast(err.message, 'x');
    } finally {
      authSubmitBtn.disabled = false;
      authSubmitBtn.textContent = isSignUp ? 'SIGN UP' : 'SIGN IN';
    }
  });

  // Listen to global auth state changes
  window.addEventListener('authStateChange', (e) => {
    const session = e.detail.session;
    if (session) {
      // User signed in
      navAccountBtn.innerHTML = '<i data-lucide="user-check" style="width: 20px; height: 20px;"></i>';
    } else {
      // User signed out
      navAccountBtn.innerHTML = '<i data-lucide="user" style="width: 20px; height: 20px;"></i>';
    }
    initIcons();
  });
}

// Scroll Reveal IntersectionObserver
function setupScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// Sticky Header Blur on Scroll
function setupStickyNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile Menu Navigation
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const links = drawer?.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    toggleBtn.classList.toggle('open', !isOpen);
  });

  links?.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
    });
  });
}

// Newsletter Form Handler
function setupNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'x');
      return;
    }

    showToast('You are on the VIP list. Welcome to B&B.', 'sparkles');
    input.value = '';
  });
}

// ==================== GLOBAL EVENT DELEGATION ====================
function setupEventDelegation() {
  document.addEventListener('click', (e) => {
    // 1. Return to Catalog Button
    if (e.target.closest('#nav-back-btn')) {
      navigateToRoute('#/');
      return;
    }

    // 2. Wishlist Toggle Button (Card or PDP)
    const wishBtn = e.target.closest('[data-action="wishlist"]');
    if (wishBtn) {
      e.preventDefault();
      e.stopPropagation();
      const productId = wishBtn.getAttribute('data-product-id');
      toggleWishlist(productId);
      return;
    }

    // 3. PDP Dedicated Wishlist Button
    if (e.target.closest('#pdp-wishlist-btn')) {
      if (state.currentPdpProduct) {
        toggleWishlist(state.currentPdpProduct.id);
      }
      return;
    }

    // 4. Quick View Action on Card
    const quickViewBtn = e.target.closest('[data-action="quickview"]');
    if (quickViewBtn) {
      e.preventDefault();
      e.stopPropagation();
      const productId = quickViewBtn.getAttribute('data-product-id');
      const product = ALL_PRODUCTS.find(p => p.id === productId);
      if (product) openQuickView(product);
      return;
    }

    // 5. Direct Card Click -> Navigate to Product Detail Page!
    const productCard = e.target.closest('.product-card');
    if (productCard && !e.target.closest('button')) {
      const slug = productCard.getAttribute('data-product-slug');
      if (slug) {
        navigateToRoute(`#/product/${slug}`);
      }
      return;
    }

    // 6. PDP Gallery Thumbnail Click
    const thumbBtn = e.target.closest('.pdp-thumbnail-item');
    if (thumbBtn) {
      const idx = parseInt(thumbBtn.getAttribute('data-thumb-idx'), 10);
      state.currentPdpImageIndex = idx;
      
      document.querySelectorAll('.pdp-thumbnail-item').forEach((b, i) => {
        b.classList.toggle('active', i === idx);
      });

      const mainImg = document.getElementById('pdp-main-img');
      const counter = document.getElementById('pdp-image-counter');
      const product = state.currentPdpProduct;
      const images = product?.images || [product?.image];

      if (mainImg && images[idx]) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = images[idx];
          mainImg.style.opacity = '1';
        }, 150);
      }

      if (counter) {
        counter.textContent = `0${idx + 1} / 0${images.length}`;
      }
      return;
    }

    // 7. PDP Zoom Button -> Lightbox
    if (e.target.closest('#pdp-zoom-btn')) {
      const mainImg = document.getElementById('pdp-main-img');
      const lightbox = document.getElementById('image-zoom-lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      if (lightbox && lightboxImg && mainImg) {
        lightboxImg.src = mainImg.src;
        lightbox.classList.add('open');
      }
      return;
    }

    // 8. Close Lightbox
    if (e.target.closest('#lightbox-close-btn') || e.target.closest('#image-zoom-lightbox')) {
      document.getElementById('image-zoom-lightbox')?.classList.remove('open');
      return;
    }

    // 9. PDP Color Swatch Selection
    const swatchBtn = e.target.closest('.pdp-color-swatch');
    if (swatchBtn) {
      const colorName = swatchBtn.getAttribute('data-color-name');
      const colorImg = swatchBtn.getAttribute('data-color-img');
      state.currentPdpColor = colorName;

      document.querySelectorAll('.pdp-color-swatch').forEach(b => b.classList.remove('active'));
      swatchBtn.classList.add('active');

      const labelVal = document.getElementById('pdp-selected-color-name');
      if (labelVal) labelVal.textContent = colorName;

      // Update main showcase image
      if (colorImg) {
        const mainImg = document.getElementById('pdp-main-img');
        if (mainImg) {
          mainImg.style.opacity = '0.3';
          setTimeout(() => {
            mainImg.src = colorImg;
            mainImg.style.opacity = '1';
          }, 150);
        }
      }
      return;
    }

    // 10. PDP Size Button Selection
    const sizeBtn = e.target.closest('.pdp-size-btn');
    if (sizeBtn) {
      const sizeVal = sizeBtn.getAttribute('data-size-val');
      state.currentPdpSize = sizeVal;

      document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
      sizeBtn.classList.add('active');

      const labelVal = document.getElementById('pdp-selected-size-name');
      if (labelVal) labelVal.textContent = sizeVal;
      return;
    }

    // 11. Size Guide Modal Trigger
    if (e.target.closest('#pdp-size-guide-trigger')) {
      const modal = document.getElementById('size-guide-modal');
      const backdrop = document.getElementById('modal-backdrop');
      if (modal && backdrop) {
        modal.classList.add('open');
        backdrop.classList.add('open');
      }
      return;
    }

    // 12. Size Guide Close
    if (e.target.closest('#size-guide-close-btn')) {
      document.getElementById('size-guide-modal')?.classList.remove('open');
      document.getElementById('modal-backdrop')?.classList.remove('open');
      return;
    }

    // 13. PDP Tabs Switching
    const tabBtn = e.target.closest('.pdp-tab-btn');
    if (tabBtn) {
      const tabId = tabBtn.getAttribute('data-tab');
      document.querySelectorAll('.pdp-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.pdp-tab-panel').forEach(p => p.classList.remove('active'));

      tabBtn.classList.add('active');
      document.getElementById(`tab-panel-${tabId}`)?.classList.add('active');
      initIcons();
      return;
    }

    // 14. Main "ADD TO CART" CTA
    if (e.target.closest('#pdp-add-cart-btn') || e.target.closest('#pdp-sticky-add-btn')) {
      if (state.currentPdpProduct) {
        const btn = document.getElementById('pdp-add-cart-btn');
        const btnText = document.getElementById('pdp-add-btn-text');
        
        if (btn && btnText) {
          btn.classList.add('added');
          btnText.textContent = 'ADDED ✓';
          setTimeout(() => {
            btn.classList.remove('added');
            btnText.textContent = 'ADD TO CART';
          }, 1600);
        }

        addToCart(state.currentPdpProduct, state.currentPdpSize, state.currentPdpColor);
      }
      return;
    }

    // 15. "BUY NOW" Express Checkout
    if (e.target.closest('#pdp-buy-now-btn')) {
      if (state.currentPdpProduct) {
        addToCart(state.currentPdpProduct, state.currentPdpSize, state.currentPdpColor);
        showToast('Initiating Express Checkout...', 'lock');
      }
      return;
    }

    // 16. Cart Drawer Actions (Qty +/-, Remove)
    const incQtyBtn = e.target.closest('[data-action="increase-qty"]');
    if (incQtyBtn) {
      const idx = parseInt(incQtyBtn.getAttribute('data-index'), 10);
      if (state.cart[idx]) {
        state.cart[idx].quantity += 1;
        updateCartUI();
      }
      return;
    }

    const decQtyBtn = e.target.closest('[data-action="decrease-qty"]');
    if (decQtyBtn) {
      const idx = parseInt(decQtyBtn.getAttribute('data-index'), 10);
      if (state.cart[idx]) {
        if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity -= 1;
        } else {
          state.cart.splice(idx, 1);
        }
        updateCartUI();
      }
      return;
    }

    const removeBtn = e.target.closest('[data-action="remove-item"]');
    if (removeBtn) {
      const idx = parseInt(removeBtn.getAttribute('data-index'), 10);
      state.cart.splice(idx, 1);
      updateCartUI();
      showToast('Item removed from your bag');
      return;
    }

    // 17. Checkout specific actions
    const checkoutInc = e.target.closest('[data-action="checkout-increase"]');
    if (checkoutInc) {
      const idx = parseInt(checkoutInc.getAttribute('data-index'), 10);
      if (state.cart[idx]) {
        state.cart[idx].quantity += 1;
        updateCartUI();
        renderCheckoutSummary();
      }
      return;
    }

    const checkoutDec = e.target.closest('[data-action="checkout-decrease"]');
    if (checkoutDec) {
      const idx = parseInt(checkoutDec.getAttribute('data-index'), 10);
      if (state.cart[idx]) {
        if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity -= 1;
        } else {
          state.cart.splice(idx, 1);
        }
        updateCartUI();
        renderCheckoutSummary();
      }
      return;
    }

    const checkoutRem = e.target.closest('[data-action="checkout-remove"]');
    if (checkoutRem) {
      const idx = parseInt(checkoutRem.getAttribute('data-index'), 10);
      const row = checkoutRem.closest('.checkout-item');
      if (row) {
        row.style.opacity = '0';
        setTimeout(() => {
          state.cart.splice(idx, 1);
          updateCartUI();
          renderCheckoutSummary();
        }, 300);
      }
      return;
    }

    // 18. Quick View Modal Size Pill
    const qvSizeBtn = e.target.closest('.quickview-modal .size-btn');
    if (qvSizeBtn) {
      const parent = qvSizeBtn.parentElement;
      parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      qvSizeBtn.classList.add('active');
      state.selectedQuickViewSize = qvSizeBtn.getAttribute('data-size');
      return;
    }
  });

  // Open & Close Cart
  document.getElementById('nav-cart-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);

  // Quick View Modal
  document.getElementById('quickview-close-btn')?.addEventListener('click', closeQuickView);
  document.getElementById('quickview-add-btn')?.addEventListener('click', () => {
    if (state.currentQuickViewProduct) {
      addToCart(state.currentQuickViewProduct, state.selectedQuickViewSize);
      closeQuickView();
    }
  });

  // Backdrop click closes all modals
  document.getElementById('modal-backdrop')?.addEventListener('click', () => {
    closeCartDrawer();
    closeQuickView();
    document.getElementById('search-modal')?.classList.remove('open');
    document.getElementById('size-guide-modal')?.classList.remove('open');
    document.getElementById('auth-modal')?.classList.remove('open');
    document.getElementById('modal-backdrop')?.classList.remove('open');
  });

  // Checkout button simulation / navigation
  document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    closeCartDrawer();
    navigateToRoute('#/checkout');
  });

  // Checkout Interactions (Non-delegated)
  document.getElementById('checkout-back-btn')?.addEventListener('click', () => {
    navigateToRoute('#/');
    openCartDrawer();
  });

  document.getElementById('checkout-continue-shopping')?.addEventListener('click', () => {
    navigateToRoute('#/');
  });
  
  document.getElementById('success-continue-btn')?.addEventListener('click', () => {
    document.getElementById('checkout-success-state').style.display = 'none';
    navigateToRoute('#/');
  });

  // Promo Code
  const promoBtn = document.getElementById('promo-apply-btn');
  promoBtn?.addEventListener('click', () => {
    if (promoBtn.classList.contains('applied')) return;
    const input = document.getElementById('promo-code');
    if (input && input.value.trim().length > 0) {
      promoBtn.textContent = 'PROMO APPLIED ✓';
      promoBtn.classList.add('applied');
      showToast('Promo code applied successfully!', 'sparkles');
    }
  });

  // Place Order
  const placeOrderBtns = [
    document.getElementById('checkout-place-order-btn'),
    document.getElementById('checkout-mobile-place-btn')
  ];

  placeOrderBtns.forEach(btn => {
    btn?.addEventListener('click', async () => {
      const form = document.getElementById('checkout-shipping-form');
      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (state.cart.length === 0) return;

      btn.classList.add('disabled');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>PROCESSING...</span>';
      
      try {
        const formData = form ? new FormData(form) : new FormData();
        const paymentRadio = document.querySelector('input[name="payment_method"]:checked');
        const paymentMethod = paymentRadio ? paymentRadio.value : 'credit_card';
        const userId = authState.user ? authState.user.id : null;
        const guestEmail = !userId && form ? formData.get('shipping-email') : null;

        await submitCheckout(state.cart, formData, paymentMethod, userId, guestEmail);
        
        btn.classList.remove('disabled');
        btn.innerHTML = originalText;
        
        // Show success state and reset cart
        document.getElementById('checkout-success-state').style.display = 'flex';
        state.cart = [];
        updateCartUI();
      } catch (err) {
        console.error(err);
        showToast(err.message || 'Checkout failed', 'x');
        btn.classList.remove('disabled');
        btn.innerHTML = originalText;
      }
    });
  });

  // Payment Selection
  document.querySelectorAll('input[name="payment_method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.querySelectorAll('.payment-method-option').forEach(opt => opt.classList.remove('active'));
      e.target.closest('.payment-method-option').classList.add('active');
    });
  });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderHomeCatalog();
  setupHeroSlider();
  setupStickyNav();
  setupMobileMenu();
  setupSearch();
  setupNewsletter();
  setupEventDelegation();
  setupAuth();
  
  // Initialize auth session from Supabase
  initAuth();
  
  updateCartUI();
  initIcons();

  // Listen to router changes
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
});
