/**
 * Cocobliss Chocolate - Core Frontend Application
 * Handles product filtering, quick-view modal, bespoke tasting box builder,
 * responsive mobile navigation, interactive inquiries, and smooth animations.
 */

// ============================================================================
// 1. Curated Artisanal Product Catalog Data
// ============================================================================
const PRODUCTS_DATA = [
  // --- Dark Chocolates ---
  {
    id: 'dark-85',
    category: 'dark',
    categoryName: 'Dark Chocolate',
    badge: '85% Single-Origin Ghana',
    badgeClass: 'badge-dark',
    name: 'Midnight Velvet 85%',
    shortDesc: 'Deep, full-bodied dark chocolate with delicate undertones of wild blackberry and toasted espresso.',
    pricePiece: '₹45 / piece',
    priceKg: '₹1,400 / kg',
    price: '₹45',
    unit: 'Per Piece & Per Kg',
    notes: 'Blackberry & Espresso',
    origin: 'Suame Cooperative, Ashanti Region, Ghana',
    cacao: '85% Pure Trinitario Cacao',
    dietary: 'Vegan, Dairy-Free, Gluten-Free',
    pairing: 'Cabernet Sauvignon or single-malt Scotch',
    ingredients: 'Ghanaian Cocoa Mass, Cocoa Butter, Organic Cane Sugar, Madagascar Bourbon Vanilla Pod.',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dark-sea-salt',
    category: 'dark',
    categoryName: 'Dark Chocolate',
    badge: '72% Single-Origin Ecuador',
    badgeClass: 'badge-dark',
    name: 'Breton Fleur de Sel 72%',
    shortDesc: 'Silky dark chocolate harmoniously balanced with hand-harvested French sea salt crystals for a crunchy mineral contrast.',
    pricePiece: '₹40 / piece',
    priceKg: '₹1,300 / kg',
    price: '₹40',
    unit: 'Per Piece & Per Kg',
    notes: 'Floral, Salted Caramel',
    origin: 'Esmeraldas Rainforest, Ecuador',
    cacao: '72% Arriba Nacional Cacao',
    dietary: 'Vegan-Friendly, Gluten-Free',
    pairing: 'Aged Tawny Port or Earl Grey Tea',
    ingredients: 'Ecuadorian Cacao, Pure Cocoa Butter, Unrefined Cane Sugar, Guérande Fleur de Sel, Natural Vanilla.',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dark-orange',
    category: 'dark',
    categoryName: 'Dark Chocolate',
    badge: '70% Madagascar Blend',
    badgeClass: 'badge-dark',
    name: 'Blood Orange & Candied Ginger 70%',
    shortDesc: 'Sun-ripened Sicilian blood orange oil paired with warming bits of organic crystallized spicy ginger.',
    pricePiece: '₹45 / piece',
    priceKg: '₹1,400 / kg',
    price: '₹45',
    unit: 'Per Piece & Per Kg',
    notes: 'Citrus Zest & Warm Spice',
    origin: 'Sambirano Valley, Madagascar',
    cacao: '70% Criollo & Trinitario Blend',
    dietary: 'Vegan, Gluten-Free',
    pairing: 'Lapsang Souchong or Spiced Rum',
    ingredients: 'Madagascar Cocoa Beans, Organic Sugar, Candied Ginger, Cold-Pressed Blood Orange Oil, Cocoa Butter.',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80'
  },

  // --- Milk Chocolates ---
  {
    id: 'milk-hazelnut',
    category: 'milk',
    categoryName: 'Milk Chocolate',
    badge: '45% Alpine Velvet',
    badgeClass: 'badge-milk',
    name: 'Alpine Silk & Roasted Hazelnut',
    shortDesc: 'Decadent 45% milk chocolate folded with whole slow-roasted Piedmont IGP hazelnuts and fragrant acacia honey.',
    pricePiece: '₹50 / piece',
    priceKg: '₹1,500 / kg',
    price: '₹50',
    unit: 'Per Piece & Per Kg',
    notes: 'Nutty Honeycomb & Cream',
    origin: 'Swiss Alpine Grass-Fed Milk & Java Cocoa',
    cacao: '45% Creamy Milk Chocolate',
    dietary: 'Vegetarian, Gluten-Free',
    pairing: 'Flat White Coffee or Amaretto',
    ingredients: 'Pure Cocoa Butter, Whole Milk Powder, Piedmont Hazelnuts (28%), Cane Sugar, Acacia Honey Essence.',
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'milk-caramel',
    category: 'milk',
    categoryName: 'Milk Chocolate',
    badge: 'Artisan Soft Center',
    badgeClass: 'badge-milk',
    name: 'Bourbon Vanilla Salted Caramel Bar',
    shortDesc: 'Slow-simmered artisanal golden caramel infused with Tahitian vanilla beans, enveloped in luscious milk chocolate.',
    pricePiece: '₹45 / piece',
    priceKg: '₹1,350 / kg',
    price: '₹45',
    unit: 'Per Piece & Per Kg',
    notes: 'Buttery Toffee & Cream',
    origin: 'Colombian Cocoa & Jersey Dairy',
    cacao: '42% Milk Chocolate Shell',
    dietary: 'Vegetarian',
    pairing: 'Chai Latte or Bourbon Whiskey',
    ingredients: 'Milk Chocolate, Cream, Sugar, Butter, Tahitian Vanilla Bean, Sea Salt, Glucose.',
    image: 'https://images.unsplash.com/photo-1575372587186-50020b0a0456?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'milk-pistachio',
    category: 'milk',
    categoryName: 'Milk Chocolate',
    badge: 'Botanical Infusion',
    badgeClass: 'badge-milk',
    name: 'Iranian Pistachio & Cardamom',
    shortDesc: 'Emerald pistachio shards and freshly crushed green cardamom pods swirled through velvet milk chocolate.',
    pricePiece: '₹50 / piece',
    priceKg: '₹1,500 / kg',
    price: '₹50',
    unit: 'Per Piece & Per Kg',
    notes: 'Cardamom & Roasted Pistachio',
    origin: 'Dominican Republic & Iranian Wild Pistachio',
    cacao: '48% Dark Milk Chocolate',
    dietary: 'Vegetarian, Gluten-Free',
    pairing: 'Cardamom Turkish Coffee or Jasmine Tea',
    ingredients: 'Cocoa Beans, Sugar, Whole Milk Powder, Roasted Pistachios, Green Cardamom, Vanilla Bean.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80'
  },

  // --- Truffles ---
  {
    id: 'truffle-royale',
    category: 'truffles',
    categoryName: 'Artisan Truffles',
    badge: 'Signature Grand Cru',
    badgeClass: 'badge-truffle',
    name: 'Royale Dark Ganache Truffles',
    shortDesc: 'Melt-in-your-mouth whipped 75% dark chocolate ganache, hand-rolled and dusted in pure raw Dutch cocoa powder.',
    pricePiece: '₹40 / piece',
    priceKg: '₹1,400 / kg',
    price: '₹40',
    unit: 'Per Piece & Per Kg',
    notes: 'Silky Cocoa & Dark Molasses',
    origin: 'Blend of Venezuelan and Peruvian Criollo',
    cacao: '75% Dark Truffle Shell',
    dietary: 'Vegetarian, Gluten-Free',
    pairing: 'Espresso or Pinot Noir',
    ingredients: 'Grand Cru Cocoa Mass, Fresh Dairy Cream, Butter, Raw Dutch Cocoa Powder, Cane Sugar.',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'truffle-champagne',
    category: 'truffles',
    categoryName: 'Artisan Truffles',
    badge: '24K Edible Gold Leaf',
    badgeClass: 'badge-truffle',
    name: 'Golden Vintage Champagne Truffles',
    shortDesc: 'A celebratory heart of French Champagne and white chocolate cream ganache, crowned with flakes of genuine 24k gold.',
    pricePiece: '₹60 / piece',
    priceKg: '₹1,800 / kg',
    price: '₹60',
    unit: 'Per Piece & Per Kg',
    notes: 'Crisp Champagne & Vanilla',
    origin: 'Reims Champagne & Ivory Coast Cacao',
    cacao: 'White & Milk Chocolate Ganache',
    dietary: 'Vegetarian',
    pairing: 'Dry Champagne or Prosecco Superiore',
    ingredients: 'White Chocolate, Vintage Marc de Champagne (5%), Heavy Cream, 24k Edible Gold Leaf.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'truffle-raspberry',
    category: 'truffles',
    categoryName: 'Artisan Truffles',
    badge: 'Fresh Fruit Reduction',
    badgeClass: 'badge-truffle',
    name: 'Wild Raspberry & Rosé Truffles',
    shortDesc: 'Tangy organic raspberry purée infused with Damascus rose water, shielded in a crisp dark chocolate sphere.',
    pricePiece: '₹50 / piece',
    priceKg: '₹1,500 / kg',
    price: '₹50',
    unit: 'Per Piece & Per Kg',
    notes: 'Tart Berry & Floral Rose',
    origin: 'Ecuadorian Cocoa & Alpine Wild Berries',
    cacao: '68% Dark Chocolate Shell',
    dietary: 'Vegetarian, Gluten-Free',
    pairing: 'Sparkling Rosé or Hibiscus Iced Tea',
    ingredients: 'Dark Chocolate, Wild Raspberry Pulp, Rose Water, Cocoa Butter, Organic Cane Sugar.',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80'
  },

  // --- Gift Boxes ---
  {
    id: 'box-signature-16',
    category: 'gift-boxes',
    categoryName: 'Gift Boxes',
    badge: 'Bestseller Presentation',
    badgeClass: 'badge-gift',
    name: 'The Signature Velvet Gift Box',
    shortDesc: '16 curated master pieces including truffles, single-origin medallions, and praline bonbons in an embossed chocolate velvet box.',
    pricePiece: '₹650 / box',
    priceKg: '₹40/pc • ₹1,400/kg',
    price: '₹650',
    unit: '16 Artisan Pieces Box',
    notes: 'Diverse Tasting Journey',
    origin: 'Artisanal Global Estate Selection',
    cacao: 'Assorted 45% - 85% Cacao',
    dietary: 'Vegetarian-Friendly Assortment',
    pairing: 'Celebrations, Corporate Tokens, Anniversaries',
    ingredients: 'Curated selection of our master chocolate recipes, hand-packed with gold protective cushioning.',
    image: 'https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'box-wooden-24',
    category: 'gift-boxes',
    categoryName: 'Gift Boxes',
    badge: 'Keepsake Edition',
    badgeClass: 'badge-gift',
    name: 'The Connoisseur Wooden Treasure Chest',
    shortDesc: 'A handcrafted pine treasure box with brass latch, lined in satin and filled with 24 signature chocolate jewels.',
    pricePiece: '₹950 / box',
    priceKg: '₹40/pc • ₹1,500/kg',
    price: '₹950',
    unit: '24 Luxury Pieces Chest',
    notes: 'Ultimate Connoisseur Assortment',
    origin: 'Hand-finished with love',
    cacao: 'Complete Tasting Library',
    dietary: 'Vegetarian Assortment',
    pairing: 'Milestone Celebrations & Luxury Gifting',
    ingredients: '24 handcrafted confections, custom wooden chest reusable for jewelry or keepsakes.',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'box-favor-mini',
    category: 'gift-boxes',
    categoryName: 'Gift Boxes',
    badge: 'Event & Wedding Favors',
    badgeClass: 'badge-gift',
    name: 'Petite Celebration Favor Set',
    shortDesc: 'Set of 6 charming mini gold-foil stamped boxes, each cradling 4 delicate truffles with custom personalized satin ribbons.',
    pricePiece: '₹750 / set',
    priceKg: '₹35/pc • ₹1,300/kg',
    price: '₹750',
    unit: 'Set of 6 Favor Boxes (24 truffles)',
    notes: 'Tailored for Tables & Events',
    origin: 'Freshly tempered to order',
    cacao: 'Customized Selection Available',
    dietary: 'Customizable Dietary Preferences',
    pairing: 'Weddings, Receptions, VIP Dinners',
    ingredients: 'Handcrafted truffles in individual keepsake presentation boxes.',
    image: 'https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?auto=format&fit=crop&w=800&q=80'
  },

  // --- Customised Hampers ---
  {
    id: 'hamper-grand',
    category: 'hampers',
    categoryName: 'Customised Hampers',
    badge: 'Artisanal Wicker Trunk',
    badgeClass: 'badge-hamper',
    name: 'The Grand Celebration Hamper',
    shortDesc: 'Deluxe hand-woven basket featuring 3 tablet bars, 16-pc truffle collection, cocoa-dusted almonds, and heritage hot cocoa tin.',
    pricePiece: '₹1,800 / hamper',
    priceKg: '₹1,400 / kg rate',
    price: '₹1,800',
    unit: 'Complete Banquet Hamper',
    notes: 'Grandeur & Variety',
    origin: 'Curated by Founder Kunal Badera',
    cacao: 'Multi-Estate Assortment',
    dietary: 'Vegetarian-Friendly',
    pairing: 'Holiday Festivities, Family Banquets, VIP Clients',
    ingredients: 'Hand-woven natural willow basket, French satin ribbon, custom parchment card, assorted luxury confections.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hamper-royal',
    category: 'hampers',
    categoryName: 'Customised Hampers',
    badge: 'Bespoke Luxury Trunk',
    badgeClass: 'badge-hamper',
    name: 'The Royal Sovereign Leatherette Trunk',
    shortDesc: 'A regal emerald & gold faux-leather trunk with brass padlock, carrying 24 truffles, chocolate discs, and artisan candle.',
    pricePiece: '₹2,500 / trunk',
    priceKg: '₹1,600 / kg rate',
    price: '₹2,500',
    unit: 'Heirloom Gifting Trunk',
    notes: 'Rich, Warm & Opulent',
    origin: 'Cocobliss Signature Reserve',
    cacao: 'Single-Origin Reserve Collection',
    dietary: 'Vegetarian',
    pairing: 'Executive Gifting & Lifetime Occasions',
    ingredients: 'Leatherette trunk, soy cocoa bean candle, 24 artisan truffles, 3 single-estate tablets, wax-sealed card.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hamper-bespoke',
    category: 'hampers',
    categoryName: 'Customised Hampers',
    badge: '100% Customizable',
    badgeClass: 'badge-hamper',
    name: 'Bespoke Wedding & Corporate Hamper',
    shortDesc: 'Tailor-made with your custom ribbon palette, embossed monograms, chosen flavor pairings, and personalized note.',
    pricePiece: '₹35 - ₹50 / pc',
    priceKg: '₹1,200 - ₹1,500 / kg',
    price: '₹1,200+',
    unit: 'Customized as per order',
    notes: 'Personalized to Your Celebration',
    origin: 'Crafted to Client Specifications',
    cacao: 'Selection of Your Favorite Cacaos',
    dietary: 'Formulated to your event requirements',
    pairing: 'Weddings, Corporate Branding, Gala Events',
    ingredients: 'Fully customizable selection crafted in collaboration with our gifting concierge.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  }
];

// ============================================================================
// 2. Application State & Storage
// ============================================================================
const state = {
  activeFilter: 'all',
  tastingBox: [], // Array of items added to inquiry box
  customHamperConfig: {
    boxType: 'Signature Royal Velvet',
    ribbonColor: 'Champagne Gold',
    message: ''
  }
};

// ============================================================================
// 3. DOM Elements Cache
// ============================================================================
const dom = {
  productsGrid: document.getElementById('products-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  tastingBoxBtn: document.getElementById('tasting-box-btn'),
  tastingBoxDrawer: document.getElementById('tasting-box-drawer'),
  drawerBackdrop: document.getElementById('drawer-backdrop'),
  closeDrawerBtn: document.getElementById('close-drawer-btn'),
  drawerItemsList: document.getElementById('drawer-items-list'),
  drawerEmptyState: document.getElementById('drawer-empty-state'),
  boxCountBadge: document.getElementById('box-count-badge'),
  drawerTotalItems: document.getElementById('drawer-total-items'),
  exportWhatsappBtn: document.getElementById('export-whatsapp-btn'),
  copyInquiryBtn: document.getElementById('copy-inquiry-btn'),
  
  // Quick View Modal
  quickViewModal: document.getElementById('quick-view-modal'),
  closeModalBtn: document.getElementById('close-modal-btn'),
  modalImg: document.getElementById('modal-img'),
  modalCategory: document.getElementById('modal-category'),
  modalTitle: document.getElementById('modal-title'),
  modalPrice: document.getElementById('modal-price'),
  modalDesc: document.getElementById('modal-desc'),
  modalOrigin: document.getElementById('modal-origin'),
  modalCacao: document.getElementById('modal-cacao'),
  modalDietary: document.getElementById('modal-dietary'),
  modalPairing: document.getElementById('modal-pairing'),
  modalIngredients: document.getElementById('modal-ingredients'),
  modalAddToBoxBtn: document.getElementById('modal-add-to-box-btn'),

  // Hamper Builder Modal
  hamperModal: document.getElementById('hamper-modal'),
  openHamperModalBtn: document.getElementById('open-hamper-modal-btn'),
  openHeroHamperBtn: document.getElementById('hero-hamper-btn'),
  closeHamperModalBtn: document.getElementById('close-hamper-modal-btn'),
  hamperBoxOptions: document.querySelectorAll('.hamper-box-option'),
  hamperRibbonSelect: document.getElementById('hamper-ribbon-select'),
  hamperMessageInput: document.getElementById('hamper-message-input'),
  hamperSubmitWhatsappBtn: document.getElementById('hamper-submit-whatsapp'),

  // Mobile Menu
  mobileMenuToggle: document.getElementById('mobile-nav-toggle'),
  mobileMenu: document.getElementById('mobile-menu'),
  mobileMenuOverlay: document.getElementById('mobile-menu-overlay'),
  closeMobileMenuBtn: document.getElementById('close-mobile-menu-btn'),
  mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),

  // Contact & Newsletter Forms
  contactForm: document.getElementById('contact-form'),
  newsletterForm: document.getElementById('newsletter-form'),

  // Utilities
  toastNotice: document.getElementById('toast-notice'),
  toastMessage: document.getElementById('toast-message'),
  scrollTopBtn: document.getElementById('scroll-top-btn'),
  siteHeader: document.getElementById('site-header')
};

// ============================================================================
// 4. Products Rendering & Filtering
// ============================================================================
function renderProducts(category = 'all') {
  if (!dom.productsGrid) return;
  
  const filtered = category === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === category);

  dom.productsGrid.innerHTML = '';

  filtered.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    card.innerHTML = `
      <div class="product-media">
        <span class="product-badge ${product.badgeClass}">${product.badge}</span>
        <img 
          src="${product.image}" 
          alt="${product.name} - Cocobliss Chocolate" 
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80';"
        />
        <button class="quick-view-overlay-btn" data-action="quick-view" data-id="${product.id}" title="Quick Tasting Notes">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Quick View
        </button>
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span>${product.categoryName}</span>
          <span class="product-notes">${product.notes}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-footer">
          <div class="product-price-stack">
            <span class="price-main">${product.pricePiece}</span>
            <span class="price-sub">${product.priceKg}</span>
          </div>
          <button class="add-tasting-btn" data-action="add-to-box" data-id="${product.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Add to Box
          </button>
        </div>
      </div>
    `;

    dom.productsGrid.appendChild(card);
  });
}

function initFilters() {
  dom.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      state.activeFilter = category;
      renderProducts(category);
    });
  });
}

// ============================================================================
// 5. Quick View Modal Functionality
// ============================================================================
let currentModalProductId = null;

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  dom.modalImg.src = product.image;
  dom.modalImg.alt = product.name;
  dom.modalCategory.textContent = product.categoryName;
  dom.modalTitle.textContent = product.name;
  dom.modalPrice.innerHTML = `<span style="font-size:1.45rem; font-weight:700; color:var(--c-cocoa-900);">${product.pricePiece}</span> <span style="font-size:0.95rem; color:var(--c-gold-600); font-weight:600; margin-left:0.4rem;">(${product.priceKg})</span>`;
  dom.modalDesc.textContent = product.shortDesc;
  dom.modalOrigin.textContent = product.origin;
  dom.modalCacao.textContent = product.cacao;
  dom.modalDietary.textContent = product.dietary;
  dom.modalPairing.textContent = product.pairing;
  dom.modalIngredients.textContent = product.ingredients;

  dom.quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  dom.quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
  currentModalProductId = null;
}

// ============================================================================
// 6. Tasting Box & Hamper Inquiry Drawer
// ============================================================================
function addToTastingBox(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.tastingBox.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.tastingBox.push({
      id: product.id,
      name: product.name,
      pricePiece: product.pricePiece,
      priceKg: product.priceKg,
      price: product.pricePiece,
      unit: product.unit,
      categoryName: product.categoryName,
      quantity: 1
    });
  }

  updateTastingBoxUI();
  showToast(`🍫 Added "${product.name}" to your Tasting Box`);

  // Animate badge
  if (dom.boxCountBadge) {
    dom.boxCountBadge.style.transform = 'scale(1.35)';
    setTimeout(() => {
      dom.boxCountBadge.style.transform = 'scale(1)';
    }, 250);
  }
}

function removeFromTastingBox(productId) {
  state.tastingBox = state.tastingBox.filter(item => item.id !== productId);
  updateTastingBoxUI();
}

function updateQuantity(productId, delta) {
  const item = state.tastingBox.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromTastingBox(productId);
  } else {
    updateTastingBoxUI();
  }
}

function updateTastingBoxUI() {
  const totalCount = state.tastingBox.reduce((sum, item) => sum + item.quantity, 0);

  if (dom.boxCountBadge) {
    dom.boxCountBadge.textContent = totalCount;
  }
  if (dom.drawerTotalItems) {
    dom.drawerTotalItems.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  }

  if (state.tastingBox.length === 0) {
    if (dom.drawerEmptyState) dom.drawerEmptyState.style.display = 'block';
    if (dom.drawerItemsList) dom.drawerItemsList.innerHTML = '';
  } else {
    if (dom.drawerEmptyState) dom.drawerEmptyState.style.display = 'none';
    if (dom.drawerItemsList) {
      dom.drawerItemsList.innerHTML = '';
      state.tastingBox.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'drawer-item';
        itemRow.innerHTML = `
          <div class="drawer-item-info">
            <h5>${item.name}</h5>
            <span>${item.pricePiece} • ${item.priceKg}</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <button class="btn-sm" style="padding:0.2rem 0.5rem; background:#EFE6DC; border-radius:4px; font-weight:700;" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span style="font-weight:700; font-size:0.9rem; min-width:18px; text-align:center;">${item.quantity}</span>
            <button class="btn-sm" style="padding:0.2rem 0.5rem; background:#EFE6DC; border-radius:4px; font-weight:700;" onclick="updateQuantity('${item.id}', 1)">+</button>
            <button class="remove-item-btn" onclick="removeFromTastingBox('${item.id}')" title="Remove">✕</button>
          </div>
        `;
        dom.drawerItemsList.appendChild(itemRow);
      });
    }
  }
}

function toggleDrawer(open) {
  if (open) {
    dom.tastingBoxDrawer.classList.add('active');
    dom.drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    dom.tastingBoxDrawer.classList.remove('active');
    dom.drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Generate pre-formatted inquiry text
function generateInquiryMessage() {
  if (state.tastingBox.length === 0) {
    return 'Hello Cocobliss Chocolate! I would like to inquire about your handcrafted chocolates and custom gift hampers.';
  }

  let text = 'Hello Cocobliss Chocolate!\n\nI am interested in curating an artisan chocolate selection with the following items:\n\n';
  state.tastingBox.forEach((item, idx) => {
    text += `${idx + 1}. ${item.name} (${item.quantity}x) - ${item.pricePiece} (${item.priceKg})\n`;
  });
  text += '\nPlease share details regarding availability, custom gift wrapping, and delivery. Thank you!';
  return text;
}

function exportToWhatsApp() {
  const msg = generateInquiryMessage();
  // WhatsApp phone number
  const waUrl = `https://wa.me/917030054230?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

function copyInquiryToClipboard() {
  const msg = generateInquiryMessage();
  navigator.clipboard.writeText(msg).then(() => {
    showToast('📋 Order inquiry copied to clipboard!');
  }).catch(() => {
    showToast('Inquiry ready to share!');
  });
}

// Make helper functions available globally for inline onclicks
window.updateQuantity = updateQuantity;
window.removeFromTastingBox = removeFromTastingBox;

// ============================================================================
// 7. Bespoke Hamper Builder Modal
// ============================================================================
function initHamperBuilder() {
  if (dom.openHamperModalBtn) {
    dom.openHamperModalBtn.addEventListener('click', () => {
      dom.hamperModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (dom.openHeroHamperBtn) {
    dom.openHeroHamperBtn.addEventListener('click', () => {
      dom.hamperModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (dom.closeHamperModalBtn) {
    dom.closeHamperModalBtn.addEventListener('click', () => {
      dom.hamperModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  dom.hamperBoxOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      dom.hamperBoxOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      state.customHamperConfig.boxType = opt.getAttribute('data-box-name') || 'Signature Box';
    });
  });

  if (dom.hamperSubmitWhatsappBtn) {
    dom.hamperSubmitWhatsappBtn.addEventListener('click', () => {
      const ribbon = dom.hamperRibbonSelect ? dom.hamperRibbonSelect.value : 'Champagne Gold';
      const userMsg = dom.hamperMessageInput ? dom.hamperMessageInput.value.trim() : '';
      
      const inquiry = `Hello Cocobliss Chocolate! I would like to order a Bespoke Hamper:\n\n` +
        `• Box Style: ${state.customHamperConfig.boxType}\n` +
        `• Ribbon Trim: ${ribbon}\n` +
        `• Calligraphy Message Card: "${userMsg || 'Best Wishes'}"\n\n` +
        `Please let me know the available chocolate fillings and dispatch timeline.`;

      const waUrl = `https://wa.me/917030054230?text=${encodeURIComponent(inquiry)}`;
      window.open(waUrl, '_blank');
      dom.hamperModal.classList.remove('active');
      document.body.style.overflow = '';
      showToast('✨ Opening WhatsApp with your custom hamper configuration!');
    });
  }
}

// ============================================================================
// 8. Contact Form & Newsletter Handling
// ============================================================================
function initForms() {
  if (dom.contactForm) {
    dom.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const reasonInput = document.getElementById('contact-reason');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : 'Valued Guest';

      // Simulate sending inquiry
      showToast(`✨ Thank you, ${name}! Your inquiry has been sent. We will reply within 24 hours.`);
      dom.contactForm.reset();
    });
  }

  if (dom.newsletterForm) {
    dom.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = dom.newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('🍫 Welcome to the Cocobliss Chocolate Tasting Club! Check your inbox for your 10% welcome invitation.');
        dom.newsletterForm.reset();
      }
    });
  }
}

// ============================================================================
// 9. Toast Notification System
// ============================================================================
let toastTimeout = null;

function showToast(message) {
  if (!dom.toastNotice || !dom.toastMessage) return;

  dom.toastMessage.textContent = message;
  dom.toastNotice.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    dom.toastNotice.classList.remove('show');
  }, 4200);
}

// ============================================================================
// 10. Navigation, Mobile Menu & Scroll Effects
// ============================================================================
function initNavigation() {
  // Mobile nav toggle
  if (dom.mobileMenuToggle) {
    dom.mobileMenuToggle.addEventListener('click', () => {
      dom.mobileMenu.classList.add('active');
      dom.mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMobile = () => {
    dom.mobileMenu.classList.remove('active');
    dom.mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (dom.closeMobileMenuBtn) dom.closeMobileMenuBtn.addEventListener('click', closeMobile);
  if (dom.mobileMenuOverlay) dom.mobileMenuOverlay.addEventListener('click', closeMobile);
  dom.mobileNavLinks.forEach(link => link.addEventListener('click', closeMobile));

  // Tasting Box Drawer controls
  if (dom.tastingBoxBtn) {
    dom.tastingBoxBtn.addEventListener('click', () => toggleDrawer(true));
  }
  if (dom.closeDrawerBtn) {
    dom.closeDrawerBtn.addEventListener('click', () => toggleDrawer(false));
  }
  if (dom.drawerBackdrop) {
    dom.drawerBackdrop.addEventListener('click', () => toggleDrawer(false));
  }

  if (dom.exportWhatsappBtn) {
    dom.exportWhatsappBtn.addEventListener('click', exportToWhatsApp);
  }
  if (dom.copyInquiryBtn) {
    dom.copyInquiryBtn.addEventListener('click', copyInquiryToClipboard);
  }

  // Quick View Modal Close
  if (dom.closeModalBtn) {
    dom.closeModalBtn.addEventListener('click', closeQuickView);
  }
  if (dom.quickViewModal) {
    dom.quickViewModal.addEventListener('click', (e) => {
      if (e.target === dom.quickViewModal) closeQuickView();
    });
  }

  if (dom.modalAddToBoxBtn) {
    dom.modalAddToBoxBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        addToTastingBox(currentModalProductId);
        closeQuickView();
        toggleDrawer(true);
      }
    });
  }

  // Product Grid Delegated Events
  if (dom.productsGrid) {
    dom.productsGrid.addEventListener('click', (e) => {
      const quickBtn = e.target.closest('[data-action="quick-view"]');
      if (quickBtn) {
        const id = quickBtn.getAttribute('data-id');
        openQuickView(id);
        return;
      }

      const addBtn = e.target.closest('[data-action="add-to-box"]');
      if (addBtn) {
        const id = addBtn.getAttribute('data-id');
        addToTastingBox(id);
        return;
      }
    });
  }

  // Header Scroll & Back-to-Top Listener
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling
    if (dom.siteHeader) {
      if (scrollY > 60) {
        dom.siteHeader.classList.add('scrolled');
      } else {
        dom.siteHeader.classList.remove('scrolled');
      }
    }

    // Scroll-to-top button visibility
    if (dom.scrollTopBtn) {
      if (scrollY > 500) {
        dom.scrollTopBtn.classList.add('visible');
      } else {
        dom.scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (dom.scrollTopBtn) {
    dom.scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Escape Key to close any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      toggleDrawer(false);
      closeMobile();
      if (dom.hamperModal) {
        dom.hamperModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

// ============================================================================
// 11. Initializer
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  initFilters();
  initNavigation();
  initHamperBuilder();
  initForms();
  updateTastingBoxUI();
});
