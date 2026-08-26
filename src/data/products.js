export const PRODUCTS = [
  // 1. Flagship Hoodie (Main Featured PDP item)
  {
    id: "hoodie-bb-01",
    slug: "essential-oversized-hoodie",
    brand: "B&B",
    name: "Essential Oversized Hoodie",
    category: "Sweatshirts & Hoodies",
    breadcrumb: ["HOME", "COLLECTIONS", "SWEATSHIRTS & HOODIES", "ESSENTIAL OVERSIZED HOODIE"],
    badge: "BEST SELLER",
    price: "₹1,999",
    priceRaw: 1999,
    originalPrice: "₹2,499",
    originalPriceRaw: 2499,
    discount: "20% OFF",
    rating: 4.8,
    reviewCount: 128,
    description: "Premium heavyweight cotton hoodie designed with an oversized silhouette for everyday comfort and modern streetwear styling. Features dropped shoulders, a double-layered architectural hood, and a soft brushed interior.",
    image: "/assets/hoodie-model-1.jpg",
    images: [
      "/assets/hoodie-model-1.jpg",
      "/assets/hero-model-3.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/newsletter-model.jpg",
      "/assets/hero-model-2.jpg"
    ],
    colors: [
      { name: "Charcoal Black", hex: "#222222", image: "/assets/hoodie-model-1.jpg" },
      { name: "Jet Black", hex: "#080808", image: "/assets/hero-model-3.jpg" },
      { name: "Off-White Cream", hex: "#D4CFC5", image: "/assets/linen-zara.jpg" },
      { name: "Crimson Red", hex: "#7A0007", image: "/assets/hero-model-2.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Oversized Fit",
    detailsBullets: [
      "Oversized relaxed streetwear silhouette",
      "Heavyweight 460 GSM organic French terry cotton",
      "Double-layered structured hood with discreet eyelets",
      "Reinforced ribbed cuffs and waistband for shape retention",
      "Ultra-soft brushed fleece interior lining",
      "Unisex tailoring with dropped shoulder seams"
    ],
    materials: {
      fabric: "100% Organic Heavyweight Cotton",
      weight: "Heavyweight 460 GSM loopback fleece",
      finish: "Pre-shrunk vintage stone wash with soft brushed interior",
      care: "Machine wash cold inside out with similar colors. Hang dry recommended to preserve fleece texture."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" (185 cm), 78 kg and wearing size L for an exaggerated oversized drape.",
      fitType: "Oversized / Relaxed fit. True to size for intentional oversized look. Size down for regular fit.",
      table: [
        { size: "S", chest: "44 in", length: "27.5 in", shoulder: "21.5 in", sleeve: "24.5 in" },
        { size: "M", chest: "46 in", length: "28.5 in", shoulder: "22.5 in", sleeve: "25.0 in" },
        { size: "L", chest: "48 in", length: "29.5 in", shoulder: "23.5 in", sleeve: "25.5 in" },
        { size: "XL", chest: "51 in", length: "30.5 in", shoulder: "24.5 in", sleeve: "26.0 in" },
        { size: "XXL", chest: "54 in", length: "31.5 in", shoulder: "25.5 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free express shipping across India on orders over ₹999",
      deliveryTime: "Estimated dispatch within 24 hours. Delivery in 2–4 business days",
      returns: "Hassle-free 7-day doorstep return and exchange policy. Original tags required"
    },
    fabricImage: "/assets/newsletter-model.jpg",
    fabricLabel: "PREMIUM HEAVYWEIGHT COTTON",
    relatedProductSlugs: ["minimal-hoodie", "classic-sweatshirt", "zip-up-hoodie", "essential-hoodie-cream"]
  },

  // 2. Minimal Hoodie
  {
    id: "hoodie-rec-01",
    slug: "minimal-hoodie",
    brand: "B&B",
    name: "Minimal Hoodie",
    category: "Sweatshirts & Hoodies",
    breadcrumb: ["HOME", "COLLECTIONS", "SWEATSHIRTS & HOODIES", "MINIMAL HOODIE"],
    badge: "NEW ARRIVAL",
    price: "₹1,799",
    priceRaw: 1799,
    originalPrice: "₹2,199",
    originalPriceRaw: 2199,
    discount: "18% OFF",
    rating: 4.7,
    reviewCount: 94,
    description: "Clean, unbranded boxy hoodie engineered with clean seams and clean neckline. Pure minimalist luxury for everyday modular layering.",
    image: "/assets/hero-model-3.jpg",
    images: [
      "/assets/hero-model-3.jpg",
      "/assets/hoodie-model-1.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Jet Black", hex: "#080808", image: "/assets/hero-model-3.jpg" },
      { name: "Charcoal", hex: "#222222", image: "/assets/hoodie-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Boxy Modern Fit",
    detailsBullets: [
      "Modern boxy cropped-torso silhouette",
      "Seamless pouch-less front design",
      "380 GSM combed compact cotton",
      "Blind-stitched cuffs and hem"
    ],
    materials: {
      fabric: "100% Combed Compact Cotton",
      weight: "Mid-to-heavyweight 380 GSM",
      finish: "Carbon-brushed peach finish",
      care: "Machine wash cold. Do not tumble dry."
    },
    sizeFit: {
      modelStats: "Model is 6'0\" wearing size M.",
      fitType: "Boxy fit with standard length.",
      table: [
        { size: "S", chest: "42 in", length: "26.5 in", shoulder: "20.5 in", sleeve: "24.0 in" },
        { size: "M", chest: "44 in", length: "27.5 in", shoulder: "21.5 in", sleeve: "24.5 in" },
        { size: "L", chest: "46 in", length: "28.5 in", shoulder: "22.5 in", sleeve: "25.0 in" },
        { size: "XL", chest: "49 in", length: "29.5 in", shoulder: "23.5 in", sleeve: "25.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free express shipping on prepaid orders",
      deliveryTime: "Delivery in 3–5 business days across India",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-3.jpg",
    fabricLabel: "COMPACT COMBED COTTON",
    relatedProductSlugs: ["essential-oversized-hoodie", "classic-sweatshirt", "zip-up-hoodie", "jeans-diesel"]
  },

  // 3. Classic Sweatshirt
  {
    id: "hoodie-rec-02",
    slug: "classic-sweatshirt",
    brand: "B&B",
    name: "Classic Sweatshirt",
    category: "Sweatshirts & Hoodies",
    breadcrumb: ["HOME", "COLLECTIONS", "SWEATSHIRTS & HOODIES", "CLASSIC SWEATSHIRT"],
    badge: "ESSENTIAL",
    price: "₹1,599",
    priceRaw: 1599,
    originalPrice: "₹1,999",
    originalPriceRaw: 1999,
    discount: "20% OFF",
    rating: 4.9,
    reviewCount: 162,
    description: "Classic crewneck sweatshirt with triangular rib insert at neck, constructed with custom knit 400 GSM loopback cotton.",
    image: "/assets/hero-model-2.jpg",
    images: [
      "/assets/hero-model-2.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/hoodie-model-1.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Onyx Black", hex: "#0F0F0F", image: "/assets/hero-model-2.jpg" },
      { name: "Washed Slate", hex: "#2B2B2B", image: "/assets/hoodie-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Regular Tailored Fit",
    detailsBullets: [
      "Timeless crewneck neckline with ribbed V-insert",
      "400 GSM luxury diagonal loopback cotton",
      "Custom flatlock stitching for durability"
    ],
    materials: {
      fabric: "100% Long-Staple Cotton",
      weight: "Heavyweight 400 GSM",
      finish: "Enzyme washed for soft hand-feel",
      care: "Machine wash cold. Iron on low heat."
    },
    sizeFit: {
      modelStats: "Model is 6'2\" wearing size L.",
      fitType: "Tailored regular fit.",
      table: [
        { size: "S", chest: "40 in", length: "27.0 in", shoulder: "18.5 in", sleeve: "25.0 in" },
        { size: "M", chest: "42 in", length: "28.0 in", shoulder: "19.5 in", sleeve: "25.5 in" },
        { size: "L", chest: "45 in", length: "29.0 in", shoulder: "20.5 in", sleeve: "26.0 in" },
        { size: "XL", chest: "48 in", length: "30.0 in", shoulder: "21.5 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free standard shipping over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day easy returns"
    },
    fabricImage: "/assets/hero-model-2.jpg",
    fabricLabel: "PREMIUM LOOPBACK FLEECE",
    relatedProductSlugs: ["essential-oversized-hoodie", "minimal-hoodie", "jeans-levis", "linen-zara"]
  },

  // 4. Zip Up Hoodie
  {
    id: "hoodie-rec-03",
    slug: "zip-up-hoodie",
    brand: "B&B",
    name: "Zip Up Hoodie",
    category: "Sweatshirts & Hoodies",
    breadcrumb: ["HOME", "COLLECTIONS", "SWEATSHIRTS & HOODIES", "ZIP UP HOODIE"],
    badge: "LIMITED EDITION",
    price: "₹1,899",
    priceRaw: 1899,
    originalPrice: "₹2,299",
    originalPriceRaw: 2299,
    discount: "17% OFF",
    rating: 4.8,
    reviewCount: 88,
    description: "Heavyweight zip-through hoodie featuring a two-way matte black metal zipper, deep dual pockets, and an ergonomic tailored hood.",
    image: "/assets/newsletter-model.jpg",
    images: [
      "/assets/newsletter-model.jpg",
      "/assets/hoodie-model-1.jpg",
      "/assets/hero-model-3.jpg",
      "/assets/hero-model-1.jpg"
    ],
    colors: [
      { name: "Pitch Black", hex: "#050505", image: "/assets/newsletter-model.jpg" },
      { name: "Dark Iron", hex: "#1A1A1A", image: "/assets/hero-model-3.jpg" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    fit: "Relaxed Fit",
    detailsBullets: [
      "Custom gunmetal dual-direction heavy zipper",
      "Deep reinforced handwarmer welt pockets",
      "440 GSM dense cotton fleece construction",
      "Structured drawstring-free hood collar"
    ],
    materials: {
      fabric: "100% Combed Cotton",
      weight: "440 GSM dense fleece",
      finish: "Matte wash finish",
      care: "Close zipper before washing. Cold delicate cycle."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size L.",
      fitType: "Relaxed streetwear fit.",
      table: [
        { size: "M", chest: "44 in", length: "28.0 in", shoulder: "21.0 in", sleeve: "25.0 in" },
        { size: "L", chest: "47 in", length: "29.0 in", shoulder: "22.0 in", sleeve: "25.5 in" },
        { size: "XL", chest: "50 in", length: "30.0 in", shoulder: "23.0 in", sleeve: "26.0 in" },
        { size: "XXL", chest: "53 in", length: "31.0 in", shoulder: "24.0 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free standard shipping over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day easy returns"
    },
    fabricImage: "/assets/newsletter-model.jpg",
    fabricLabel: "HEAVY COTTON & METAL HARDWARE",
    relatedProductSlugs: ["essential-oversized-hoodie", "minimal-hoodie", "jeans-diesel", "jeans-ck"]
  },

  // 5. Essential Hoodie Cream
  {
    id: "hoodie-rec-04",
    slug: "essential-hoodie-cream",
    brand: "B&B",
    name: "Essential Hoodie (Cream)",
    category: "Sweatshirts & Hoodies",
    breadcrumb: ["HOME", "COLLECTIONS", "SWEATSHIRTS & HOODIES", "ESSENTIAL HOODIE (CREAM)"],
    badge: "POPULAR",
    price: "₹1,999",
    priceRaw: 1999,
    originalPrice: "₹2,499",
    originalPriceRaw: 2499,
    discount: "20% OFF",
    rating: 4.9,
    reviewCount: 110,
    description: "Our signature heavyweight hoodie rendered in a sophisticated raw unbleached natural cream tone with tonal embroidered branding details.",
    image: "/assets/linen-zara.jpg",
    images: [
      "/assets/linen-zara.jpg",
      "/assets/hoodie-model-1.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Raw Cream", hex: "#E8E2D5", image: "/assets/linen-zara.jpg" },
      { name: "Charcoal", hex: "#222222", image: "/assets/hoodie-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Oversized Fit",
    detailsBullets: [
      "Raw unbleached natural cotton colorway",
      "460 GSM organic French terry",
      "Seamless front pocket with bar-tack reinforcement",
      "Tonal luxury embroidery"
    ],
    materials: {
      fabric: "100% Unbleached Organic Cotton",
      weight: "Heavyweight 460 GSM",
      finish: "Natural seed fleck texture finish",
      care: "Wash with gentle detergent. Lay flat to dry."
    },
    sizeFit: {
      modelStats: "Model is 6'0\" wearing size M.",
      fitType: "Oversized drape.",
      table: [
        { size: "S", chest: "44 in", length: "27.5 in", shoulder: "21.5 in", sleeve: "24.5 in" },
        { size: "M", chest: "46 in", length: "28.5 in", shoulder: "22.5 in", sleeve: "25.0 in" },
        { size: "L", chest: "48 in", length: "29.5 in", shoulder: "23.5 in", sleeve: "25.5 in" },
        { size: "XL", chest: "51 in", length: "30.5 in", shoulder: "24.5 in", sleeve: "26.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free standard shipping over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day easy returns"
    },
    fabricImage: "/assets/linen-zara.jpg",
    fabricLabel: "RAW UNBLEACHED ORGANIC COTTON",
    relatedProductSlugs: ["essential-oversized-hoodie", "minimal-hoodie", "linen-zara", "jeans-ck"]
  },

  // 6. ZARA Linen Shirt
  {
    id: "linen-zara-01",
    slug: "zara-linen-shirt",
    brand: "ZARA",
    name: "Linen Shirt",
    category: "Shirts Collection",
    breadcrumb: ["HOME", "SHIRTS", "SHIRTS COLLECTION", "ZARA LINEN SHIRT"],
    badge: "SUMMER EDIT",
    price: "₹1,290",
    priceRaw: 1290,
    originalPrice: "₹1,690",
    originalPriceRaw: 1690,
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 142,
    description: "Relaxed-fit shirt tailored from 100% European flax linen. Breathable open collar, buttoned cuffs, and single chest patch pocket for effortless summer refinement.",
    image: "/assets/linen-zara.jpg",
    images: [
      "/assets/linen-zara.jpg",
      "/assets/linen-uniqlo.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/linen-mango.jpg"
    ],
    colors: [
      { name: "Natural Beige", hex: "#D4C5B0", image: "/assets/linen-zara.jpg" },
      { name: "Pure White", hex: "#FFFFFF", image: "/assets/linen-uniqlo.jpg" },
      { name: "Sky Blue", hex: "#9EB6C7", image: "/assets/linen-mango.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Relaxed Summer Fit",
    detailsBullets: [
      "100% European cultivated flax linen",
      "Open resort spread collar with relaxed placket",
      "Mother-of-pearl finish tonal buttons",
      "Single front chest patch pocket",
      "Pre-washed for immediate softness without shrinkage"
    ],
    materials: {
      fabric: "100% European Flax Linen",
      weight: "Lightweight 170 GSM breathable weave",
      finish: "Garment washed for textured slub finish",
      care: "Machine wash cold on gentle. Hang dry in shade. Warm iron if desired."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" (185 cm) wearing size M.",
      fitType: "Relaxed easy fit.",
      table: [
        { size: "S", chest: "40 in", length: "28.0 in", shoulder: "18.0 in", sleeve: "25.0 in" },
        { size: "M", chest: "42 in", length: "29.0 in", shoulder: "19.0 in", sleeve: "25.5 in" },
        { size: "L", chest: "45 in", length: "30.0 in", shoulder: "20.0 in", sleeve: "26.0 in" },
        { size: "XL", chest: "48 in", length: "31.0 in", shoulder: "21.0 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery across India on orders over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/linen-zara.jpg",
    fabricLabel: "100% EUROPEAN FLAX LINEN",
    relatedProductSlugs: ["hm-regular-fit-linen-shirt", "mango-linen-shirt", "uniqlo-premium-linen-shirt", "levis-bootcut-jeans"]
  },

  // 7. H&M Regular Fit Linen Shirt
  {
    id: "linen-hm-02",
    slug: "hm-regular-fit-linen-shirt",
    brand: "H&M",
    name: "Regular Fit Linen Shirt",
    category: "Shirts Collection",
    breadcrumb: ["HOME", "SHIRTS", "SHIRTS COLLECTION", "H&M REGULAR FIT LINEN SHIRT"],
    badge: "BEST SELLER",
    price: "₹1,489",
    priceRaw: 1489,
    originalPrice: "₹1,899",
    originalPriceRaw: 1899,
    discount: "21% OFF",
    rating: 4.7,
    reviewCount: 98,
    description: "Classic cut linen shirt washed for ultra-soft touch. Features a point collar, french placket, and curved hem that looks sharp tucked in or untucked.",
    image: "/assets/linen-hm.jpg",
    images: [
      "/assets/linen-hm.jpg",
      "/assets/linen-zara.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/linen-uniqlo.jpg"
    ],
    colors: [
      { name: "Sage Green", hex: "#7E8C77", image: "/assets/linen-hm.jpg" },
      { name: "Beige", hex: "#D4C5B0", image: "/assets/linen-zara.jpg" },
      { name: "White", hex: "#FFFFFF", image: "/assets/linen-uniqlo.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Regular Fit",
    detailsBullets: [
      "100% pure linen slub texture",
      "Standard point collar with structured interlining",
      "Adjustable dual-button barrel cuffs",
      "Gently curved shirttail hem"
    ],
    materials: {
      fabric: "100% Pure Linen",
      weight: "180 GSM midweight linen",
      finish: "Soft-wash garment dye",
      care: "Machine wash cold delicate. Hang dry."
    },
    sizeFit: {
      modelStats: "Model is 6'0\" wearing size M.",
      fitType: "Classic regular fit.",
      table: [
        { size: "S", chest: "39 in", length: "28.0 in", shoulder: "17.5 in", sleeve: "25.0 in" },
        { size: "M", chest: "41 in", length: "29.0 in", shoulder: "18.5 in", sleeve: "25.5 in" },
        { size: "L", chest: "44 in", length: "30.0 in", shoulder: "19.5 in", sleeve: "26.0 in" },
        { size: "XL", chest: "47 in", length: "31.0 in", shoulder: "20.5 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free shipping over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/linen-hm.jpg",
    fabricLabel: "SOFT WASHED PURE LINEN",
    relatedProductSlugs: ["zara-linen-shirt", "mango-linen-shirt", "uniqlo-premium-linen-shirt", "diesel-straight-fit-jeans"]
  },

  // 8. MANGO Linen Shirt
  {
    id: "linen-mango-03",
    slug: "mango-linen-shirt",
    brand: "MANGO",
    name: "Linen Shirt",
    category: "Shirts Collection",
    breadcrumb: ["HOME", "SHIRTS", "SHIRTS COLLECTION", "MANGO LINEN SHIRT"],
    badge: "TRENDING",
    price: "₹1,799",
    priceRaw: 1799,
    originalPrice: "₹2,299",
    originalPriceRaw: 2299,
    discount: "22% OFF",
    rating: 4.9,
    reviewCount: 215,
    description: "Contemporary lightweight shirt crafted from sustainably sourced linen. Subtle texture, spread collar, and mother-of-pearl tone buttons.",
    image: "/assets/linen-mango.jpg",
    images: [
      "/assets/linen-mango.jpg",
      "/assets/linen-zara.jpg",
      "/assets/linen-uniqlo.jpg",
      "/assets/hero-model-1.jpg"
    ],
    colors: [
      { name: "Sky Blue", hex: "#8DA7BA", image: "/assets/linen-mango.jpg" },
      { name: "Beige", hex: "#D4C5B0", image: "/assets/linen-zara.jpg" },
      { name: "White", hex: "#FFFFFF", image: "/assets/linen-uniqlo.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Modern Slim Fit",
    detailsBullets: [
      "100% sustainable Mediterranean flax linen",
      "Semi-spread Italian collar",
      "Back darts for tapered silhouette",
      "Subtle contrast cross-stitch buttoning"
    ],
    materials: {
      fabric: "100% Mediterranean Linen",
      weight: "165 GSM featherlight weave",
      finish: "Silken garment rinse",
      care: "Delicate machine wash. Low iron."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size M.",
      fitType: "Modern slim fit.",
      table: [
        { size: "S", chest: "38 in", length: "27.5 in", shoulder: "17.0 in", sleeve: "25.0 in" },
        { size: "M", chest: "40 in", length: "28.5 in", shoulder: "18.0 in", sleeve: "25.5 in" },
        { size: "L", chest: "43 in", length: "29.5 in", shoulder: "19.0 in", sleeve: "26.0 in" },
        { size: "XL", chest: "46 in", length: "30.5 in", shoulder: "20.0 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free shipping over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/linen-mango.jpg",
    fabricLabel: "SUSTAINABLE FLAX LINEN",
    relatedProductSlugs: ["zara-linen-shirt", "uniqlo-premium-linen-shirt", "calvin-klein-baggy-jeans", "lee-bootcut-jeans"]
  },

  // 9. UNIQLO Premium Linen Shirt
  {
    id: "linen-uniqlo-04",
    slug: "uniqlo-premium-linen-shirt",
    brand: "UNIQLO",
    name: "Premium Linen Shirt",
    category: "Shirts Collection",
    breadcrumb: ["HOME", "SHIRTS", "SHIRTS COLLECTION", "UNIQLO PREMIUM LINEN SHIRT"],
    badge: "PREMIUM",
    price: "₹1,990",
    priceRaw: 1990,
    originalPrice: "₹2,490",
    originalPriceRaw: 2490,
    discount: "20% OFF",
    rating: 4.9,
    reviewCount: 310,
    description: "Crafted using 100% premium French linen with long fibers for a smooth, lustrous sheen. Tailored silhouette designed for maximum comfort and durability.",
    image: "/assets/linen-uniqlo.jpg",
    images: [
      "/assets/linen-uniqlo.jpg",
      "/assets/linen-zara.jpg",
      "/assets/hero-model-1.jpg",
      "/assets/linen-mango.jpg"
    ],
    colors: [
      { name: "Pure White", hex: "#FFFFFF", image: "/assets/linen-uniqlo.jpg" },
      { name: "Beige", hex: "#D4C5B0", image: "/assets/linen-zara.jpg" },
      { name: "Sky Blue", hex: "#8DA7BA", image: "/assets/linen-mango.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fit: "Tailored Regular",
    detailsBullets: [
      "100% premium French Normandy long-staple linen",
      "Lustrous natural sheen with high tensile strength",
      "Clean edge collar stitching and french seams"
    ],
    materials: {
      fabric: "100% French Normandy Linen",
      weight: "185 GSM high density linen",
      finish: "Lustre-soft mechanical softening",
      care: "Machine wash cold. Hang dry."
    },
    sizeFit: {
      modelStats: "Model is 6'2\" wearing size L.",
      fitType: "Tailored regular.",
      table: [
        { size: "S", chest: "40 in", length: "28.5 in", shoulder: "18.0 in", sleeve: "25.0 in" },
        { size: "M", chest: "42 in", length: "29.5 in", shoulder: "19.0 in", sleeve: "25.5 in" },
        { size: "L", chest: "45 in", length: "30.5 in", shoulder: "20.0 in", sleeve: "26.0 in" },
        { size: "XL", chest: "48 in", length: "31.5 in", shoulder: "21.0 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free express delivery over ₹999",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/linen-uniqlo.jpg",
    fabricLabel: "100% FRENCH NORMANDY LINEN",
    relatedProductSlugs: ["zara-linen-shirt", "hm-regular-fit-linen-shirt", "levis-bootcut-jeans", "essential-oversized-hoodie"]
  },

  // 9b. B&B Classic Pima Cotton T-Shirt
  {
    id: "tshirt-bb-01",
    slug: "classic-pima-tshirt",
    brand: "B&B",
    name: "Classic Pima Cotton T-Shirt",
    category: "T-Shirts",
    breadcrumb: ["HOME", "TSHIRTS", "CLASSIC PIMA T-SHIRT"],
    badge: "ESSENTIAL",
    price: "₹999",
    priceRaw: 999,
    originalPrice: "₹1,499",
    originalPriceRaw: 1499,
    discount: "33% OFF",
    rating: 4.9,
    reviewCount: 86,
    description: "Tailored from ultra-soft, long-staple Peruvian Pima cotton. Breathable, durable, and designed for an immaculate fit that holds its shape wash after wash.",
    image: "/assets/hero-model-1.jpg",
    images: [
      "/assets/hero-model-1.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Jet Black", hex: "#080808", image: "/assets/hero-model-1.jpg" },
      { name: "Pure White", hex: "#FFFFFF", image: "/assets/newsletter-model.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Tailored Fit",
    detailsBullets: [
      "100% long-staple Peruvian Pima cotton",
      "Interlock knit for smooth, ultra-soft texture",
      "Reinforced ribbed crewneck collar",
      "Side-seam construction to resist twisting"
    ],
    materials: {
      fabric: "100% Pima Cotton",
      weight: "220 GSM midweight knit",
      finish: "Silky enzyme washed",
      care: "Machine wash cold. Tumble dry low. Do not bleach."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size M.",
      fitType: "Tailored classic fit.",
      table: [
        { size: "S", chest: "38 in", length: "27.5 in", shoulder: "17.0 in", sleeve: "8.0 in" },
        { size: "M", chest: "40 in", length: "28.5 in", shoulder: "17.5 in", sleeve: "8.5 in" },
        { size: "L", chest: "42 in", length: "29.5 in", shoulder: "18.0 in", sleeve: "9.0 in" },
        { size: "XL", chest: "45 in", length: "30.5 in", shoulder: "18.8 in", sleeve: "9.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free express delivery over ₹999",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-1.jpg",
    fabricLabel: "100% PERUVIAN PIMA COTTON",
    relatedProductSlugs: ["heavyweight-oversized-tee", "luxe-pique-polo", "zara-linen-shirt"]
  },

  // 9c. B&B Heavyweight Oversized Tee
  {
    id: "tshirt-bb-02",
    slug: "heavyweight-oversized-tee",
    brand: "B&B",
    name: "Heavyweight Oversized Tee",
    category: "T-Shirts",
    breadcrumb: ["HOME", "TSHIRTS", "HEAVYWEIGHT OVERSIZED TEE"],
    badge: "BEST SELLER",
    price: "₹1,299",
    priceRaw: 1299,
    originalPrice: "₹1,799",
    originalPriceRaw: 1799,
    discount: "28% OFF",
    rating: 4.8,
    reviewCount: 114,
    description: "Composed from massive 300 GSM French terry cotton. Featuring a wide-cut body, dropped shoulders, and a thick mock-neck collar for ultimate streetwear draping.",
    image: "/assets/hero-model-3.jpg",
    images: [
      "/assets/hero-model-3.jpg",
      "/assets/hoodie-model-1.jpg"
    ],
    colors: [
      { name: "Charcoal Black", hex: "#222222", image: "/assets/hero-model-3.jpg" },
      { name: "Jet Black", hex: "#080808", image: "/assets/hoodie-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Oversized Streetwear Fit",
    detailsBullets: [
      "Heavyweight 300 GSM combed cotton",
      "Distinguished thick mock-neck collar",
      "Generous dropped shoulder seams",
      "Pre-shrunk vintage stone wash"
    ],
    materials: {
      fabric: "100% Combed Cotton",
      weight: "300 GSM heavyweight jersey",
      finish: "Silicon washed for structure and comfort",
      care: "Machine wash cold inside out. Hang dry to maintain shape."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size L for exaggerated drape.",
      fitType: "Oversized / Wide fit.",
      table: [
        { size: "S", chest: "44 in", length: "27.5 in", shoulder: "21.0 in", sleeve: "9.5 in" },
        { size: "M", chest: "46 in", length: "28.5 in", shoulder: "22.0 in", sleeve: "10.0 in" },
        { size: "L", chest: "48 in", length: "29.5 in", shoulder: "23.0 in", sleeve: "10.5 in" },
        { size: "XL", chest: "51 in", length: "30.5 in", shoulder: "24.0 in", sleeve: "11.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-3.jpg",
    fabricLabel: "300 GSM HEAVYWEIGHT JURSEY",
    relatedProductSlugs: ["classic-pima-tshirt", "graphic-streetwear-tee", "essential-oversized-hoodie"]
  },

  // 9d. B&B Graphic Streetwear Tee
  {
    id: "tshirt-bb-03",
    slug: "graphic-streetwear-tee",
    brand: "B&B",
    name: "Graphic Streetwear Tee",
    category: "T-Shirts",
    breadcrumb: ["HOME", "TSHIRTS", "GRAPHIC STREETWEAR TEE"],
    badge: "LIMITED EDITION",
    price: "₹1,499",
    priceRaw: 1499,
    originalPrice: "₹1,999",
    originalPriceRaw: 1999,
    discount: "25% OFF",
    rating: 4.9,
    reviewCount: 42,
    description: "Features high-density B&B monogram editorial printing on the chest and an industrial back print. Tailored in an oversized silhouette.",
    image: "/assets/newsletter-model.jpg",
    images: [
      "/assets/newsletter-model.jpg",
      "/assets/hero-model-1.jpg"
    ],
    colors: [
      { name: "Cream White", hex: "#F5F3EE", image: "/assets/newsletter-model.jpg" },
      { name: "Matte Black", hex: "#121212", image: "/assets/hero-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Oversized Fit",
    detailsBullets: [
      "260 GSM organic cotton knit",
      "High-density ink chest printing",
      "Industrial back print layout",
      "Ribbed collar detail"
    ],
    materials: {
      fabric: "100% Organic Cotton",
      weight: "260 GSM mid-heavyweight",
      finish: "Soft carbon wash",
      care: "Iron inside out. Wash cold. Do not tumble dry."
    },
    sizeFit: {
      modelStats: "Model is 6'2\" wearing size L.",
      fitType: "Oversized boxy drape.",
      table: [
        { size: "S", chest: "43 in", length: "27.5 in", shoulder: "20.5 in", sleeve: "9.0 in" },
        { size: "M", chest: "45 in", length: "28.5 in", shoulder: "21.5 in", sleeve: "9.5 in" },
        { size: "L", chest: "47 in", length: "29.5 in", shoulder: "22.5 in", sleeve: "10.0 in" },
        { size: "XL", chest: "50 in", length: "30.5 in", shoulder: "23.5 in", sleeve: "10.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day returns"
    },
    fabricImage: "/assets/newsletter-model.jpg",
    fabricLabel: "ORGANIC COTTON ARTISANAL PRINT",
    relatedProductSlugs: ["heavyweight-oversized-tee", "vintage-wash-tee", "luxe-pique-polo"]
  },

  // 9e. B&B Vintage Wash Tee
  {
    id: "tshirt-bb-04",
    slug: "vintage-wash-tee",
    brand: "B&B",
    name: "Vintage Wash Tee",
    category: "T-Shirts",
    breadcrumb: ["HOME", "TSHIRTS", "VINTAGE WASH TEE"],
    badge: "VINTAGE",
    price: "₹1,199",
    priceRaw: 1199,
    originalPrice: "₹1,699",
    originalPriceRaw: 1699,
    discount: "29% OFF",
    rating: 4.8,
    reviewCount: 57,
    description: "Designed with a distressed neck rib and unique acid stone-washed finish. Gives a luxurious, lived-in feel with a premium heavy drape.",
    image: "/assets/hero-model-1.jpg",
    images: [
      "/assets/hero-model-1.jpg",
      "/assets/hero-model-3.jpg"
    ],
    colors: [
      { name: "Acid Black", hex: "#2A2A2A", image: "/assets/hero-model-1.jpg" },
      { name: "Acid Grey", hex: "#444444", image: "/assets/hero-model-3.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Relaxed Fit",
    detailsBullets: [
      "240 GSM pre-shrunk ring-spun cotton",
      "Hand-finished unique wash pattern",
      "Slightly distressed collar rib and cuffs",
      "Flatlocked stitching details"
    ],
    materials: {
      fabric: "100% Combed Ring-Spun Cotton",
      weight: "240 GSM premium jersey",
      finish: "Acid stone-washed & softened",
      care: "Wash separate. Cold wash. Do not use bleach."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size M.",
      fitType: "Relaxed classic fit.",
      table: [
        { size: "S", chest: "41 in", length: "27.5 in", shoulder: "18.0 in", sleeve: "8.5 in" },
        { size: "M", chest: "43 in", length: "28.5 in", shoulder: "19.0 in", sleeve: "9.0 in" },
        { size: "L", chest: "45 in", length: "29.5 in", shoulder: "20.0 in", sleeve: "9.5 in" },
        { size: "XL", chest: "48 in", length: "30.5 in", shoulder: "21.0 in", sleeve: "10.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-1.jpg",
    fabricLabel: "STONE WASHED RING-SPUN COTTON",
    relatedProductSlugs: ["classic-pima-tshirt", "graphic-streetwear-tee", "levis-bootcut-jeans"]
  },

  // 9f. B&B Luxe Pique Polo Shirt
  {
    id: "polo-bb-01",
    slug: "luxe-pique-polo",
    brand: "B&B",
    name: "Luxe Pique Polo Shirt",
    category: "Polo T-Shirts",
    breadcrumb: ["HOME", "POLOS", "LUXE PIQUE POLO"],
    badge: "NEW ARRIVAL",
    price: "₹1,499",
    priceRaw: 1499,
    originalPrice: "₹1,999",
    originalPriceRaw: 1999,
    discount: "25% OFF",
    rating: 4.8,
    reviewCount: 64,
    description: "Crafted from double-knit cotton pique for a refined texture and superior breathability. Features a structured rib-knit collar, 3-button placket, and tailored fit.",
    image: "/assets/hero-model-2.jpg",
    images: [
      "/assets/hero-model-2.jpg",
      "/assets/hero-model-3.jpg"
    ],
    colors: [
      { name: "Crimson Red", hex: "#7A0007", image: "/assets/hero-model-2.jpg" },
      { name: "Charcoal Black", hex: "#222222", image: "/assets/hero-model-3.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Athletic / Tailored Fit",
    detailsBullets: [
      "100% combed cotton pique knit",
      "Structured flat-knit collar and cuffs",
      "3-button front placket with tonal matte buttons",
      "Subtle tennis tail hem with side vents"
    ],
    materials: {
      fabric: "100% Combed Cotton Pique",
      weight: "240 GSM durable knit",
      finish: "Soft-touch pique texture",
      care: "Machine wash warm with similar colors. Flat dry recommended."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size M.",
      fitType: "Athletic tailored fit.",
      table: [
        { size: "S", chest: "39 in", length: "27.5 in", shoulder: "17.5 in", sleeve: "8.5 in" },
        { size: "M", chest: "41 in", length: "28.5 in", shoulder: "18.0 in", sleeve: "9.0 in" },
        { size: "L", chest: "43 in", length: "29.5 in", shoulder: "18.5 in", sleeve: "9.5 in" },
        { size: "XL", chest: "46 in", length: "30.5 in", shoulder: "19.2 in", sleeve: "10.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-2.jpg",
    fabricLabel: "DOUBLE KNIT COTTON PIQUE",
    relatedProductSlugs: ["mercerized-cotton-polo", "classic-pima-tshirt", "essential-oversized-hoodie"]
  },

  // 9g. B&B Mercerized Cotton Polo
  {
    id: "polo-bb-02",
    slug: "mercerized-cotton-polo",
    brand: "B&B",
    name: "Mercerized Cotton Polo",
    category: "Polo T-Shirts",
    breadcrumb: ["HOME", "POLOS", "MERCERIZED COTTON POLO"],
    badge: "PREMIUM LUXE",
    price: "₹1,899",
    priceRaw: 1899,
    originalPrice: "₹2,499",
    originalPriceRaw: 2499,
    discount: "24% OFF",
    rating: 4.9,
    reviewCount: 38,
    description: "Indulge in the silky sheen of mercerized Italian cotton. Features a collar stand for a structured neck, short cuffs, and clean concealed-button placket.",
    image: "/assets/hero-model-2.jpg",
    images: [
      "/assets/hero-model-2.jpg",
      "/assets/hero-model-1.jpg"
    ],
    colors: [
      { name: "Crimson Red", hex: "#7A0007", image: "/assets/hero-model-2.jpg" },
      { name: "True White", hex: "#FFFFFF", image: "/assets/hero-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Modern Slim Fit",
    detailsBullets: [
      "100% mercerized double-singed cotton",
      "Lustrous silky finish and deep colors",
      "Structured self-fabric collar with stand",
      "Hidden button-down placket"
    ],
    materials: {
      fabric: "100% Mercerized Cotton",
      weight: "200 GSM silk-soft knit",
      finish: "Lustrous singed finish",
      care: "Dry clean or hand wash cold. Flat dry inside out. Warm iron."
    },
    sizeFit: {
      modelStats: "Model is 6'0\" wearing size M.",
      fitType: "Tailored modern slim.",
      table: [
        { size: "S", chest: "38 in", length: "27.0 in", shoulder: "17.0 in", sleeve: "8.0 in" },
        { size: "M", chest: "40 in", length: "28.0 in", shoulder: "17.5 in", sleeve: "8.5 in" },
        { size: "L", chest: "42 in", length: "29.0 in", shoulder: "18.0 in", sleeve: "9.0 in" },
        { size: "XL", chest: "45 in", length: "30.0 in", shoulder: "18.8 in", sleeve: "9.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-2.jpg",
    fabricLabel: "100% ITALIAN MERCERIZED COTTON",
    relatedProductSlugs: ["luxe-pique-polo", "zip-collar-knit-polo", "classic-pima-tshirt"]
  },

  // 9h. B&B Zip-Collar Knit Polo
  {
    id: "polo-bb-03",
    slug: "zip-collar-knit-polo",
    brand: "B&B",
    name: "Zip-Collar Knit Polo",
    category: "Polo T-Shirts",
    breadcrumb: ["HOME", "POLOS", "ZIP-COLLAR KNIT POLO"],
    badge: "EDITORIAL EDIT",
    price: "₹1,699",
    priceRaw: 1699,
    originalPrice: "₹2,299",
    originalPriceRaw: 2299,
    discount: "26% OFF",
    rating: 4.8,
    reviewCount: 51,
    description: "Finely knit from combed cotton yarn. Features a retro-inspired polished metal zip collar and ribbed hem for a sharp, mid-century silhouette.",
    image: "/assets/hero-model-3.jpg",
    images: [
      "/assets/hero-model-3.jpg",
      "/assets/hero-model-2.jpg"
    ],
    colors: [
      { name: "Charcoal Black", hex: "#222222", image: "/assets/hero-model-3.jpg" },
      { name: "Crimson Red", hex: "#7A0007", image: "/assets/hero-model-2.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Relaxed Retro Fit",
    detailsBullets: [
      "100% combed cotton fine knit",
      "Heavy-duty silver metal zip closure",
      "Retro ribbed waistband and sleeve cuffs",
      "Clean seamless shoulders"
    ],
    materials: {
      fabric: "100% Combed Cotton Yarn",
      weight: "12-gauge premium knitwear",
      finish: "Pre-shrunk soft knit",
      care: "Hand wash cold. Do not wring. Dry flat in shade. Cool iron."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size L for a relaxed look.",
      fitType: "Relaxed classic fit.",
      table: [
        { size: "S", chest: "40 in", length: "26.5 in", shoulder: "18.0 in", sleeve: "8.5 in" },
        { size: "M", chest: "42 in", length: "27.5 in", shoulder: "19.0 in", sleeve: "9.0 in" },
        { size: "L", chest: "44 in", length: "28.5 in", shoulder: "20.0 in", sleeve: "9.5 in" },
        { size: "XL", chest: "47 in", length: "29.5 in", shoulder: "21.0 in", sleeve: "10.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day returns"
    },
    fabricImage: "/assets/hero-model-3.jpg",
    fabricLabel: "12-GAUGE COMBED COTTON KNIT",
    relatedProductSlugs: ["mercerized-cotton-polo", "stripe-resort-polo", "luxe-pique-polo"]
  },

  // 9i. B&B Stripe Resort Polo
  {
    id: "polo-bb-04",
    slug: "stripe-resort-polo",
    brand: "B&B",
    name: "Stripe Resort Polo",
    category: "Polo T-Shirts",
    breadcrumb: ["HOME", "POLOS", "STRIPE RESORT POLO"],
    badge: "SUMMER EDIT",
    price: "₹1,599",
    priceRaw: 1599,
    originalPrice: "₹2,099",
    originalPriceRaw: 2099,
    discount: "24% OFF",
    rating: 4.7,
    reviewCount: 29,
    description: "Relaxed collarless polo with striking vertical stripes. Lightweight knit structure designed for luxury seaside resort styling.",
    image: "/assets/hero-model-1.jpg",
    images: [
      "/assets/hero-model-1.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Midnight Navy", hex: "#1C2A39", image: "/assets/hero-model-1.jpg" },
      { name: "Cream White", hex: "#F5F3EE", image: "/assets/newsletter-model.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Relaxed Fit",
    detailsBullets: [
      "Polyester-cotton breathable blend",
      "Retro collarless Johnny collar",
      "Bold vertical knit stripes",
      "Split hem side detail"
    ],
    materials: {
      fabric: "60% Cotton, 40% Polyester",
      weight: "180 GSM lightweight knit",
      finish: "Soft combed finish",
      care: "Machine wash cold delicate. Tumble dry low. Cool iron."
    },
    sizeFit: {
      modelStats: "Model is 6'2\" wearing size M.",
      fitType: "Relaxed easy drape.",
      table: [
        { size: "S", chest: "41 in", length: "27.5 in", shoulder: "18.0 in", sleeve: "8.5 in" },
        { size: "M", chest: "43 in", length: "28.5 in", shoulder: "19.0 in", sleeve: "9.0 in" },
        { size: "L", chest: "45 in", length: "29.5 in", shoulder: "20.0 in", sleeve: "9.5 in" },
        { size: "XL", chest: "48 in", length: "30.5 in", shoulder: "21.0 in", sleeve: "10.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-1.jpg",
    fabricLabel: "LIGHTWEIGHT RESORT VERTICAL KNIT",
    relatedProductSlugs: ["zip-collar-knit-polo", "mercerized-cotton-polo", "zara-linen-shirt"]
  },

  // 10. LEVI'S Bootcut Jeans
  {
    id: "jeans-levis-01",
    slug: "levis-bootcut-jeans",
    brand: "LEVI'S",
    name: "Bootcut Jeans",
    category: "Jeans Collection",
    breadcrumb: ["HOME", "JEANS", "BOOTCUT", "LEVI'S BOOTCUT JEANS"],
    badge: "ICONIC FIT",
    price: "₹2,199",
    priceRaw: 2199,
    originalPrice: "₹2,799",
    originalPriceRaw: 2799,
    discount: "21% OFF",
    rating: 4.9,
    reviewCount: 420,
    description: "Heritage 527™ slim bootcut denim crafted from heavyweight organic cotton. Subtle flare through the leg with authentic whiskering and copper hardware.",
    image: "/assets/jeans-levis.jpg",
    images: [
      "/assets/jeans-levis.jpg",
      "/assets/jeans-diesel.jpg",
      "/assets/jeans-ck.jpg",
      "/assets/jeans-lee.jpg"
    ],
    colors: [
      { name: "Dark Indigo Wash", hex: "#1C2A39", image: "/assets/jeans-levis.jpg" },
      { name: "Washed Black", hex: "#1D1D1D", image: "/assets/jeans-diesel.jpg" },
      { name: "Light Acid", hex: "#6E89A5", image: "/assets/jeans-ck.jpg" }
    ],
    sizes: ["30", "32", "34", "36"],
    fit: "Bootcut Fit",
    detailsBullets: [
      "Original 527™ Slim Bootcut cut with modern leg opening",
      "13.5 oz heavy ring-spun denim with 1% elastane for mobility",
      "Authentic hand-finished whiskering and thigh honeycombs",
      "Heavy duty copper rivets and iconic leather Two-Horse patch"
    ],
    materials: {
      fabric: "99% Organic Cotton, 1% Elastane",
      weight: "Heavyweight 13.5 oz denim",
      finish: "Indigo rope-dyed with stonewash finish",
      care: "Wash sparingly. Turn inside out and wash cold. Hang dry."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing waist 32, length 32.",
      fitType: "Slim through thigh, flared from knee to hem.",
      table: [
        { size: "30", waist: "30 in", inseam: "32 in", thigh: "22.5 in", legOpening: "18.5 in" },
        { size: "32", waist: "32 in", inseam: "32 in", thigh: "23.5 in", legOpening: "19.0 in" },
        { size: "34", waist: "34 in", inseam: "32 in", thigh: "24.5 in", legOpening: "19.5 in" },
        { size: "36", waist: "36 in", inseam: "32 in", thigh: "25.5 in", legOpening: "20.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery on all denim orders",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day hassle-free return policy"
    },
    fabricImage: "/assets/jeans-levis.jpg",
    fabricLabel: "13.5 OZ RING-SPUN DENIM",
    relatedProductSlugs: ["diesel-straight-fit-jeans", "calvin-klein-baggy-jeans", "lee-bootcut-jeans", "essential-oversized-hoodie"]
  },

  // 11. DIESEL Straight Fit Jeans
  {
    id: "jeans-diesel-02",
    slug: "diesel-straight-fit-jeans",
    brand: "DIESEL",
    name: "Straight Fit Jeans",
    category: "Jeans Collection",
    breadcrumb: ["HOME", "JEANS", "STRAIGHT FIT", "DIESEL STRAIGHT FIT JEANS"],
    badge: "BEST SELLER",
    price: "₹2,499",
    priceRaw: 2499,
    originalPrice: "₹3,199",
    originalPriceRaw: 3199,
    discount: "22% OFF",
    rating: 4.8,
    reviewCount: 185,
    description: "Italian designed straight-leg jeans with artisanal stone wash and dark 3D abrasion details. Signature 5th pocket red branding tag.",
    image: "/assets/jeans-diesel.jpg",
    images: [
      "/assets/jeans-diesel.jpg",
      "/assets/jeans-levis.jpg",
      "/assets/jeans-ck.jpg",
      "/assets/hero-model-1.jpg"
    ],
    colors: [
      { name: "Washed Charcoal", hex: "#222222", image: "/assets/jeans-diesel.jpg" },
      { name: "Dark Indigo", hex: "#1C2A39", image: "/assets/jeans-levis.jpg" }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    fit: "Straight Fit",
    detailsBullets: [
      "Timeless straight leg from hip to ankle",
      "14 oz rigid Italian denim with distressed treatments",
      "Signature red Diesel industry logo coin pocket flag",
      "Custom gunmetal rivets and embossed shank button"
    ],
    materials: {
      fabric: "100% Rigid BCI Cotton",
      weight: "Heavyweight 14 oz denim",
      finish: "Sulfur black wash with laser whiskers",
      care: "Cold wash inside out. Do not tumble dry."
    },
    sizeFit: {
      modelStats: "Model is 6'2\" wearing size 32.",
      fitType: "Clean straight fit.",
      table: [
        { size: "30", waist: "30 in", inseam: "32 in", thigh: "23.0 in", legOpening: "16.5 in" },
        { size: "32", waist: "32 in", inseam: "32 in", thigh: "24.0 in", legOpening: "17.0 in" },
        { size: "34", waist: "34 in", inseam: "32 in", thigh: "25.0 in", legOpening: "17.5 in" },
        { size: "36", waist: "36 in", inseam: "32 in", thigh: "26.0 in", legOpening: "18.0 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free standard shipping over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/jeans-diesel.jpg",
    fabricLabel: "14 OZ RIGID ITALIAN DENIM",
    relatedProductSlugs: ["levis-bootcut-jeans", "calvin-klein-baggy-jeans", "essential-oversized-hoodie", "zip-up-hoodie"]
  },

  // 12. CALVIN KLEIN Baggy Jeans
  {
    id: "jeans-ck-03",
    slug: "calvin-klein-baggy-jeans",
    brand: "CALVIN KLEIN",
    name: "Baggy Jeans",
    category: "Jeans Collection",
    breadcrumb: ["HOME", "JEANS", "BAGGY FIT", "CALVIN KLEIN BAGGY JEANS"],
    badge: "STREETWEAR EDIT",
    price: "₹1,899",
    priceRaw: 1899,
    originalPrice: "₹2,399",
    originalPriceRaw: 2399,
    discount: "21% OFF",
    rating: 4.7,
    reviewCount: 260,
    description: "90s archival skate-inspired baggy fit with relaxed rise and wide leg opening. Soft rigid cotton blend with minimalist CK leather waist patch.",
    image: "/assets/jeans-ck.jpg",
    images: [
      "/assets/jeans-ck.jpg",
      "/assets/jeans-diesel.jpg",
      "/assets/jeans-levis.jpg",
      "/assets/jeans-lee.jpg"
    ],
    colors: [
      { name: "Light Acid Wash", hex: "#7B96B2", image: "/assets/jeans-ck.jpg" },
      { name: "Medium Blue", hex: "#3B5A7C", image: "/assets/jeans-lee.jpg" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    fit: "Relaxed Baggy",
    detailsBullets: [
      "90s authentic wide-leg baggy skateboard silhouette",
      "Subtle acid stonewash with soft broken-in feel",
      "Minimalist tonal monogram leather back patch",
      "Extra room through the seat and thighs"
    ],
    materials: {
      fabric: "100% Recycled & Organic Cotton",
      weight: "12.75 oz relaxed denim",
      finish: "Light blue acid enzyme bleach wash",
      care: "Machine wash cold. Line dry."
    },
    sizeFit: {
      modelStats: "Model is 6'0\" wearing size 32 for baggy fit.",
      fitType: "Relaxed baggy fit.",
      table: [
        { size: "28", waist: "29 in", inseam: "31 in", thigh: "24.0 in", legOpening: "19.0 in" },
        { size: "30", waist: "31 in", inseam: "32 in", thigh: "25.0 in", legOpening: "19.5 in" },
        { size: "32", waist: "33 in", inseam: "32 in", thigh: "26.0 in", legOpening: "20.0 in" },
        { size: "34", waist: "35 in", inseam: "32 in", thigh: "27.0 in", legOpening: "20.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free standard delivery across India",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day easy returns"
    },
    fabricImage: "/assets/jeans-ck.jpg",
    fabricLabel: "VINTAGE ACID WASH DENIM",
    relatedProductSlugs: ["essential-oversized-hoodie", "diesel-straight-fit-jeans", "minimal-hoodie", "lee-bootcut-jeans"]
  },

  // 13. LEE Bootcut Jeans
  {
    id: "jeans-lee-04",
    slug: "lee-bootcut-jeans",
    brand: "LEE",
    name: "Bootcut Jeans",
    category: "Jeans Collection",
    breadcrumb: ["HOME", "JEANS", "BOOTCUT", "LEE BOOTCUT JEANS"],
    badge: "CLASSIC",
    price: "₹1,699",
    priceRaw: 1699,
    originalPrice: "₹2,099",
    originalPriceRaw: 2099,
    discount: "19% OFF",
    rating: 4.8,
    reviewCount: 175,
    description: "Timeless mid-rise bootcut denim with iconic S-curve back pocket stitching and durable spade pockets. Designed for all-day comfort.",
    image: "/assets/jeans-lee.jpg",
    images: [
      "/assets/jeans-lee.jpg",
      "/assets/jeans-levis.jpg",
      "/assets/jeans-ck.jpg",
      "/assets/jeans-diesel.jpg"
    ],
    colors: [
      { name: "Classic Vintage Blue", hex: "#355273", image: "/assets/jeans-lee.jpg" },
      { name: "Dark Indigo", hex: "#1C2A39", image: "/assets/jeans-levis.jpg" }
    ],
    sizes: ["30", "32", "34", "36"],
    fit: "Classic Bootcut",
    detailsBullets: [
      "Authentic mid-rise bootcut contour",
      "Famous Lee Lazy-S back pocket embroidery",
      "Reinforced X-tack stitching at stress points",
      "Comfort-stretch denim for freedom of movement"
    ],
    materials: {
      fabric: "98% Cotton, 2% Spandex",
      weight: "13 oz comfort-stretch denim",
      finish: "Vintage medium rinse with natural fades",
      care: "Machine wash cold with like colors. Tumble dry low."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size 32.",
      fitType: "Regular through thigh with bootcut leg.",
      table: [
        { size: "30", waist: "30 in", inseam: "32 in", thigh: "23.0 in", legOpening: "18.0 in" },
        { size: "32", waist: "32 in", inseam: "32 in", thigh: "24.0 in", legOpening: "18.5 in" },
        { size: "34", waist: "34 in", inseam: "32 in", thigh: "25.0 in", legOpening: "19.0 in" },
        { size: "36", waist: "36 in", inseam: "32 in", thigh: "26.0 in", legOpening: "19.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free standard shipping on orders over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day easy returns"
    },
    fabricImage: "/assets/jeans-lee.jpg",
    fabricLabel: "COMFORT STRETCH RING DENIM",
    relatedProductSlugs: ["levis-bootcut-jeans", "classic-sweatshirt", "zara-linen-shirt", "essential-oversized-hoodie"]
  },

  // 14. Aero Dry-Fit Training Tee
  {
    id: "sports-bb-01",
    slug: "aero-dryfit-tee",
    brand: "B&B",
    name: "Aero Dry-Fit Training Tee",
    category: "Sports Wear",
    breadcrumb: ["HOME", "SPORTSWEAR", "AERO DRY-FIT TEE"],
    badge: "PERFORMANCE",
    price: "₹1,199",
    priceRaw: 1199,
    originalPrice: "₹1,599",
    originalPriceRaw: 1599,
    discount: "25% OFF",
    rating: 4.8,
    reviewCount: 94,
    description: "Engineered with micro-perforated knit fabric for advanced ventilation. Fast sweat-wicking dry-fit technology for peak performance.",
    image: "/assets/hero-model-1.jpg",
    images: [
      "/assets/hero-model-1.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Stealth Black", hex: "#121212", image: "/assets/hero-model-1.jpg" },
      { name: "Pure White", hex: "#FFFFFF", image: "/assets/newsletter-model.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Active Fit",
    detailsBullets: [
      "Advanced polyester-elastane dry-fit knit",
      "Anti-odor treatment for fresh workouts",
      "Ergonomic flatlock seams prevent chafing",
      "Drop-tail hem for added coverage during squats"
    ],
    materials: {
      fabric: "90% Polyester, 10% Elastane",
      weight: "160 GSM lightweight performance mesh",
      finish: "Dry-wicking anti-microbial finish",
      care: "Machine wash cold. Do not iron print. Tumble dry low."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size M.",
      fitType: "Active fit. True to size.",
      table: [
        { size: "S", chest: "38 in", length: "27.5 in", shoulder: "16.5 in", sleeve: "8.0 in" },
        { size: "M", chest: "40 in", length: "28.0 in", shoulder: "17.0 in", sleeve: "8.5 in" },
        { size: "L", chest: "42 in", length: "29.0 in", shoulder: "17.8 in", sleeve: "9.0 in" },
        { size: "XL", chest: "45 in", length: "30.0 in", shoulder: "18.5 in", sleeve: "9.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day activewear return policy"
    },
    fabricImage: "/assets/hero-model-1.jpg",
    fabricLabel: "AERO DRY-FIT PERFORMANCE MESH",
    relatedProductSlugs: ["lightweight-run-shorts", "pro-compression-tights", "classic-pima-tshirt"]
  },

  // 15. Lightweight Run Shorts
  {
    id: "sports-bb-02",
    slug: "lightweight-run-shorts",
    brand: "B&B",
    name: "Lightweight Run Shorts",
    category: "Sports Wear",
    breadcrumb: ["HOME", "SPORTSWEAR", "RUN SHORTS"],
    badge: "QUICK DRY",
    price: "₹999",
    priceRaw: 999,
    originalPrice: "₹1,399",
    originalPriceRaw: 1399,
    discount: "28% OFF",
    rating: 4.7,
    reviewCount: 68,
    description: "Ultra-lightweight stretch woven outer shell with breathable mesh inner lining. Features zip utility pockets and reflective details.",
    image: "/assets/hero-model-2.jpg",
    images: [
      "/assets/hero-model-2.jpg",
      "/assets/newsletter-model.jpg"
    ],
    colors: [
      { name: "Charcoal Grey", hex: "#2A2A2A", image: "/assets/hero-model-2.jpg" },
      { name: "Stealth Black", hex: "#121212", image: "/assets/newsletter-model.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Regular Active Fit",
    detailsBullets: [
      "Water-repellent stretch woven shell",
      "Breathable inner mesh brief lining",
      "Concealed back zip pocket for cards/keys",
      "Reflective B&B side logos for night visibility"
    ],
    materials: {
      fabric: "88% Nylon, 12% Spandex",
      weight: "120 GSM ultra-lightweight stretch shell",
      finish: "DWR water-repellent coating",
      care: "Machine wash cold. Hang dry. Do not iron DWR fabric."
    },
    sizeFit: {
      modelStats: "Model is 6'0\" wearing size M.",
      fitType: "Regular active cut. 7-inch inseam.",
      table: [
        { size: "S", waist: "30 in", length: "16.5 in", hip: "40 in", inseam: "7 in" },
        { size: "M", waist: "32 in", length: "17.0 in", hip: "42 in", inseam: "7 in" },
        { size: "L", waist: "34 in", length: "17.5 in", hip: "44 in", inseam: "7 in" },
        { size: "XL", waist: "36 in", length: "18.0 in", hip: "46 in", inseam: "7 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-2.jpg",
    fabricLabel: "DWR STRETCH WOVEN SHELL",
    relatedProductSlugs: ["aero-dryfit-tee", "pro-compression-tights", "performance-track-jacket"]
  },

  // 16. Pro Compression Tights
  {
    id: "sports-bb-03",
    slug: "pro-compression-tights",
    brand: "B&B",
    name: "Pro Compression Tights",
    category: "Sports Wear",
    breadcrumb: ["HOME", "SPORTSWEAR", "COMPRESSION TIGHTS"],
    badge: "COMPRESSION",
    price: "₹1,399",
    priceRaw: 1399,
    originalPrice: "₹1,899",
    originalPriceRaw: 1899,
    discount: "26% OFF",
    rating: 4.9,
    reviewCount: 110,
    description: "High-elastane compression knit to support muscles, improve circulation, and speed up recovery times. Four-way stretch comfort.",
    image: "/assets/hero-model-3.jpg",
    images: [
      "/assets/hero-model-3.jpg",
      "/assets/hero-model-1.jpg"
    ],
    colors: [
      { name: "Jet Black", hex: "#080808", image: "/assets/hero-model-3.jpg" },
      { name: "Slate Grey", hex: "#3A3D40", image: "/assets/hero-model-1.jpg" }
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Compression Fit",
    detailsBullets: [
      "High tension compression polyester-spandex knit",
      "Ergonomic flatlock stitching prevents friction spots",
      "Elastic jacquard waistband for secure placement",
      "Mesh zones behind knees for targeted cooling"
    ],
    materials: {
      fabric: "78% Polyester, 22% Spandex",
      weight: "260 GSM high tension compression knit",
      finish: "Moisture-wicking, brushed interior",
      care: "Gentle cold cycle. Do not bleach. Air dry only."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size M.",
      fitType: "Second-skin compression fit. Order usual size.",
      table: [
        { size: "S", waist: "28-30 in", length: "34.0 in", inseam: "28 in" },
        { size: "M", waist: "30-32 in", length: "35.0 in", inseam: "28 in" },
        { size: "L", waist: "32-34 in", length: "36.0 in", inseam: "29 in" },
        { size: "XL", waist: "34-36 in", length: "37.0 in", inseam: "29 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 3–5 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hero-model-3.jpg",
    fabricLabel: "HIGH TENSION COMPRESSION KNIT",
    relatedProductSlugs: ["aero-dryfit-tee", "lightweight-run-shorts", "performance-track-jacket"]
  },

  // 17. Performance Zip-Up Track Jacket
  {
    id: "sports-bb-04",
    slug: "performance-track-jacket",
    brand: "B&B",
    name: "Performance Zip-Up Track Jacket",
    category: "Sports Wear",
    breadcrumb: ["HOME", "SPORTSWEAR", "TRACK JACKET"],
    badge: "ALL-WEATHER",
    price: "₹2,299",
    priceRaw: 2299,
    originalPrice: "₹2,999",
    originalPriceRaw: 2999,
    discount: "23% OFF",
    rating: 4.8,
    reviewCount: 78,
    description: "Athletic fit full-zip jacket featuring ribbed cuffs and dynamic ventilation panels. Water-resistant stretch fabric for outdoor training.",
    image: "/assets/hoodie-model-1.jpg",
    images: [
      "/assets/hoodie-model-1.jpg",
      "/assets/hero-model-3.jpg"
    ],
    colors: [
      { name: "Matte Black", hex: "#1A1A1A", image: "/assets/hoodie-model-1.jpg" },
      { name: "Charcoal Grey", hex: "#2E2E2E", image: "/assets/hero-model-3.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Athletic Fit",
    detailsBullets: [
      "Midweight double-weave mechanical stretch fabric",
      "Full front lockable YKK zipper closure",
      "Concealed side zipper pockets for secure storage",
      "Dynamic underarm gussets for zero shoulder restrictions"
    ],
    materials: {
      fabric: "92% Combed Cotton, 8% Lycra",
      weight: "320 GSM fleece back knit",
      finish: "Fluorocarbon-free DWR water repellent coating",
      care: "Wash delicate cold. Use mild detergent. Do not dry clean."
    },
    sizeFit: {
      modelStats: "Model is 6'1\" wearing size L.",
      fitType: "Athletic / tailored shape.",
      table: [
        { size: "S", chest: "40 in", length: "27.5 in", shoulder: "17.5 in", sleeve: "25.0 in" },
        { size: "M", chest: "42 in", length: "28.5 in", shoulder: "18.5 in", sleeve: "25.5 in" },
        { size: "L", chest: "44 in", length: "29.5 in", shoulder: "19.5 in", sleeve: "26.0 in" },
        { size: "XL", chest: "47 in", length: "30.5 in", shoulder: "20.5 in", sleeve: "26.5 in" }
      ]
    },
    shippingInfo: {
      freeShipping: "Free delivery over ₹999",
      deliveryTime: "Delivery in 2–4 business days",
      returns: "7-day return policy"
    },
    fabricImage: "/assets/hoodie-model-1.jpg",
    fabricLabel: "ATHLETIC FLEECE BACK KNIT",
    relatedProductSlugs: ["aero-dryfit-tee", "lightweight-run-shorts", "essential-oversized-hoodie"]
  }
];

export const SHIRTS_COLLECTION = PRODUCTS.filter(p => p.category === "Shirts Collection");
export const JEANS_COLLECTION = PRODUCTS.filter(p => p.category === "Jeans Collection");
export const TSHIRTS_COLLECTION = PRODUCTS.filter(p => p.category === "T-Shirts");
export const POLOS_COLLECTION = PRODUCTS.filter(p => p.category === "Polo T-Shirts");
export const SPORTS_COLLECTION = PRODUCTS.filter(p => p.category === "Sports Wear");
export const HOODIES_COLLECTION = PRODUCTS.filter(p => p.category === "Sweatshirts & Hoodies");
export const ALL_PRODUCTS = PRODUCTS;

export const CAMPAIGN_SLIDES = [
  {
    id: "slide-01",
    index: "01",
    eyebrow: "EST. 2024",
    headlineLine1: "BUILT ON STYLE.",
    headlineLine2: "DEFINED BY YOU.",
    description: "Timeless fits. Premium fabrics. Everyday confidence. B&B brings you the best in men's fashion.",
    image: "/assets/hero-model-1.jpg",
    cta: "SHOP NOW",
    targetSection: "linen-shirts"
  },
  {
    id: "slide-02",
    index: "02",
    eyebrow: "AUTUMN / WINTER '26",
    headlineLine1: "SHARP TAILORING.",
    headlineLine2: "PURE LUXURY.",
    description: "Engineered coats, structured silhouettes, and immaculate Italian craftsmanship designed for the modern gentleman.",
    image: "/assets/hero-model-2.jpg",
    cta: "EXPLORE COLLECTION",
    targetSection: "jeans-collection"
  },
  {
    id: "slide-03",
    index: "03",
    eyebrow: "NEW DROPS WEEKLY",
    headlineLine1: "URBAN ELEVATION.",
    headlineLine2: "EFFORTLESS EDGE.",
    description: "Contemporary streetwear tailored with bespoke menswear standards. Premium materials made to endure.",
    image: "/assets/hero-model-3.jpg",
    cta: "VIEW NEW IN",
    targetSection: "linen-shirts"
  }
];
