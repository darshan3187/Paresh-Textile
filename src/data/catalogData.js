/*
 * ============================================================
 *  CATALOG DATA — PT Paresh Textile
 * ============================================================
 *
 *  HOW TO ADD A NEW PRODUCT:
 *  1. Add a new object to the `products` array below.
 *  2. Make sure the `brand` field matches one of the keys in `BRANDS`.
 *  3. Give it a unique `id` (e.g., "AB-105", "DN-203").
 *  4. Add color variants in the `colorVariants` array.
 *  5. Place a product image in /public/ and reference it (e.g., "/my-image.png").
 *     If you don't have an image yet, leave `image` as null and a placeholder will show.
 *
 *  HOW TO ADD A NEW BRAND:
 *  1. Add a new entry in the `BRANDS` object below.
 *  2. Then add products with that brand name in the `products` array.
 *
 * ============================================================
 */

// ─── Brand definitions ──────────────────────────────────────
export const BRANDS = {
  Absoluto: {
    name: 'Absoluto',
    logo: '/Absoluto_logo.webp',
    website: 'https://www.absolutoworld.com/',
    instagramUrl: 'https://www.instagram.com/absolutoofficial/',
    tagline: 'Premium suiting & celebration wear',
    tone: 'from-[#FFF7EC] via-[#FFFDF9] to-[#F4ECE0]',
    accentColor: '#A6792B',
    reels: [
      { id: 'DPDa_cdE7LV', title: 'Absoluto Collection 1' },
      { id: 'DHnxrU4SxJv', title: 'Absoluto Collection 2' },
      { id: 'DH8uO2GyEfA', title: 'Absoluto Collection 3' },
      { id: 'Dau_phQhbEl', title: 'Absoluto Collection 4' },
      { id: 'DanS_M_hUWs', title: 'Absoluto Collection 5' }
    ]
  },
  Donear: {
    name: 'Donear',
    logo: '/Donear_logo.webp',
    website: 'https://www.donear.com/',
    instagramUrl: 'https://www.instagram.com/donearsuitingshirting/',
    tagline: 'Suited for success, since 1971',
    tone: 'from-[#FFF0F2] via-[#FFFDF9] to-[#ECF6FF]',
    accentColor: '#C0392B',
    reels: [
      { id: 'DaprBK6jDYB', title: 'Donear Collection 1' },
      { id: 'Dapq49tDKDn', title: 'Donear Collection 2' },
      { id: 'DapqvNkDKX2', title: 'Donear Collection 3' },
      { id: 'DapqbU6DJcM', title: 'Donear Collection 4' },
      { id: 'DapqP9wDOOH', title: 'Donear Collection 5' },
      { id: 'DaXGQEAjPsq', title: 'Donear Collection 6' }
    ]
  },
  Meetra: {
    name: 'Meetra',
    logo: '/Meetra_logo.webp',
    website: null,
    instagramUrl: null,
    tagline: 'Shirting range',
    tone: 'from-[#F7F2FF] via-[#FFFDF9] to-[#EEF8F2]',
    accentColor: '#6C5CE7',
    // Meetra has no Instagram link and no reels to display
  },
  Pravar: {
    name: 'Pravar',
    logo: '/Pravar_logo.webp',
    website: null,
    instagramUrl: 'https://www.instagram.com/pravar_ethnics/',
    tagline: 'Occasion fabrics',
    tone: 'from-[#FFF6EC] via-[#FFFDF9] to-[#F4F0E8]',
    accentColor: '#E67E22',
    reels: [
      { id: 'DJtQXMSv2S1', title: 'Pravar Collection 1' },
      { id: 'Cz8Y-PJxiwt', title: 'Pravar Collection 2' },
      { id: 'Cxz9bhgRpLm', title: 'Pravar Collection 3' },
      { id: 'CvHWMkRRyt1', title: 'Pravar Collection 4' },
      { id: 'CvHWXgKR1F7', title: 'Pravar Collection 5' }
    ]
  },
};

// ─── Category options ────────────────────────────────────────
export const CATEGORIES = [
  'Premium Suitings',
  'Luxury Shirtings',
  'Fine Linen',
  'Sherwani & Traditional',
  'Tweed & Jackets',
];

// ─── Fabric pattern options ──────────────────────────────────
export const PATTERNS = [
  'Solid',
  'Stripe',
  'Check',
  'Micro-structure',
  'Self-Textured',
  'Jacquard',
];

// ─── Lifecycle status options ────────────────────────────────
export const LIFECYCLE_STATUSES = ['New', 'Carryover', 'Phaseout'];


// ─── Products array ──────────────────────────────────────────
// Add or remove products here. Each product belongs to a brand.
export const products = [
  // ═══════════════════════════════════════════════════════════
  // ABSOLUTO products have been replaced with full catalog PDFs.

  // ═══════════════════════════════════════════════════════════
  //  DONEAR
  // ═══════════════════════════════════════════════════════════
  {
    id: 'DN-201',
    name: 'Donear Executive Suiting',
    brand: 'Donear',
    category: 'Premium Suitings',
    pattern: 'Solid',
    composition: 'Polyester Viscose',
    width: '58 inches',
    pricePerMeter: 320,
    thanLength: 30,
    description: 'Reliable executive suiting with clean drape and consistent quality, ideal for corporate uniform programs.',
    suitability: ['Suit', 'Trouser'],
    lifecycleStatus: 'Carryover',
    colorVariants: [
      { colorName: 'Jet Black', colorHex: '#0A0A0A', image: null },
      { colorName: 'Navy', colorHex: '#1F3D73', image: null },
      { colorName: 'Medium Grey', colorHex: '#808080', image: null },
      { colorName: 'Brown', colorHex: '#5C3317', image: null },
    ],
  },
  {
    id: 'DN-202',
    name: 'Donear Daily Check',
    brand: 'Donear',
    category: 'Premium Suitings',
    pattern: 'Check',
    composition: 'Polyester Viscose',
    width: '58 inches',
    pricePerMeter: 290,
    thanLength: 30,
    description: 'Smart check pattern suiting for everyday professional wear with excellent colour fastness.',
    suitability: ['Suit', 'Trouser'],
    lifecycleStatus: 'Carryover',
    colorVariants: [
      { colorName: 'Blue Check', colorHex: '#3A5BA0', image: null },
      { colorName: 'Grey Check', colorHex: '#6B6B6B', image: null },
    ],
  },
  {
    id: 'DN-203',
    name: 'Donear Premium Shirting',
    brand: 'Donear',
    category: 'Luxury Shirtings',
    pattern: 'Solid',
    composition: '100% Cotton',
    width: '58 inches',
    pricePerMeter: 240,
    thanLength: 40,
    description: 'Premium cotton shirting with smooth finish and vibrant colour retention for formal and casual shirts.',
    suitability: ['Shirt'],
    lifecycleStatus: 'New',
    colorVariants: [
      { colorName: 'Classic White', colorHex: '#FAFAFA', image: null },
      { colorName: 'Sky Blue', colorHex: '#87CEEB', image: null },
      { colorName: 'Lavender', colorHex: '#B57EDC', image: null },
      { colorName: 'Peach', colorHex: '#FFCBA4', image: null },
    ],
  },
  {
    id: 'DN-204',
    name: 'Donear Linen Blend',
    brand: 'Donear',
    category: 'Fine Linen',
    pattern: 'Self-Textured',
    composition: 'Cotton Linen Blend',
    width: '58 inches',
    pricePerMeter: 360,
    thanLength: 30,
    description: 'Breathable linen blend with natural texture, ideal for summer suiting and relaxed formal occasions.',
    suitability: ['Suit', 'Trouser', 'Kurta'],
    lifecycleStatus: 'New',
    colorVariants: [
      { colorName: 'Oat', colorHex: '#DCCCB2', image: null },
      { colorName: 'Sage', colorHex: '#9CAF88', image: null },
      { colorName: 'Sand', colorHex: '#C2B280', image: null },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  MEETRA
  // ═══════════════════════════════════════════════════════════
  {
    id: 'MT-301',
    name: 'Meetra Office Stripe Shirt',
    brand: 'Meetra',
    category: 'Luxury Shirtings',
    pattern: 'Stripe',
    composition: '100% Cotton',
    width: '58 inches',
    pricePerMeter: 210,
    thanLength: 40,
    description: 'Clean office stripe shirting, perfect for corporate uniform programs and premium retail sourcing.',
    suitability: ['Shirt'],
    lifecycleStatus: 'Carryover',
    colorVariants: [
      { colorName: 'Blue Stripe', colorHex: '#4169E1', image: null },
      { colorName: 'Grey Stripe', colorHex: '#9E9E9E', image: null },
      { colorName: 'Pink Stripe', colorHex: '#FF69B4', image: null },
    ],
  },
  {
    id: 'MT-302',
    name: 'Meetra Poplin Solid',
    brand: 'Meetra',
    category: 'Luxury Shirtings',
    pattern: 'Solid',
    composition: '100% Cotton Poplin',
    width: '58 inches',
    pricePerMeter: 195,
    thanLength: 40,
    description: 'Crisp poplin finish with a smooth hand feel, ideal for formal shirts and tailored workwear.',
    suitability: ['Shirt'],
    lifecycleStatus: 'Carryover',
    colorVariants: [
      { colorName: 'Pure White', colorHex: '#FFFFFF', image: null },
      { colorName: 'Powder Blue', colorHex: '#B0E0E6', image: null },
      { colorName: 'Cream', colorHex: '#FFFDD0', image: null },
      { colorName: 'Mint', colorHex: '#98FB98', image: null },
    ],
  },
  {
    id: 'MT-303',
    name: 'Meetra Check Casual',
    brand: 'Meetra',
    category: 'Luxury Shirtings',
    pattern: 'Check',
    composition: 'Cotton Blend',
    width: '58 inches',
    pricePerMeter: 220,
    thanLength: 40,
    description: 'Modern check pattern for casual and smart-casual shirt programs with excellent wash-and-wear quality.',
    suitability: ['Shirt'],
    lifecycleStatus: 'New',
    colorVariants: [
      { colorName: 'Teal Check', colorHex: '#008080', image: null },
      { colorName: 'Burgundy Check', colorHex: '#800020', image: null },
    ],
  },

  // PRAVAR products have been replaced with full catalog PDFs.
];


// ─── Helper: Group products by brand ─────────────────────────
export function getProductsByBrand() {
  const grouped = {};
  for (const product of products) {
    if (!grouped[product.brand]) {
      grouped[product.brand] = [];
    }
    grouped[product.brand].push(product);
  }
  return grouped;
}

// ─── Helper: Get all unique brand names from products ────────
export function getActiveBrands() {
  const brandNames = [...new Set(products.map((p) => p.brand))];
  return brandNames.map((name) => BRANDS[name] || { name, logo: null, tagline: '', description: '' });
}

// ─── Helper: Get all categories present in products ──────────
export function getActiveCategories() {
  return [...new Set(products.map((p) => p.category))];
}

// ─── Helper: Get all patterns present in products ────────────
export function getActivePatterns() {
  return [...new Set(products.map((p) => p.pattern))];
}

// ─── Helper: Get products for a specific brand ───────────────
export function getProductsForBrand(brandName) {
  return products.filter((p) => p.brand.toLowerCase() === brandName.toLowerCase());
}

// ─── Helper: Get brand info by URL slug ──────────────────────
export function getBrandBySlug(slug) {
  const brandName = Object.keys(BRANDS).find(
    (name) => name.toLowerCase() === slug.toLowerCase()
  );
  return brandName ? { key: brandName, ...BRANDS[brandName] } : null;
}

// ─── Helper: Get all brand slugs (for static generation) ─────
export function getAllBrandSlugs() {
  return Object.keys(BRANDS).map((name) => name.toLowerCase());
}

// ─── Shop's own Instagram Reels (pt__1994) ────────────────────
// These are active placeholder reels showing fabric closeups.
// You can replace these IDs with your own shop's Instagram Reel IDs.
export const SHOP_REELS = [
  { id: 'C-t7QV-uxb4', title: 'Showroom Highlights' },
  { id: 'C_FVai-MIOd', title: 'Premium Fabric Showcase' },
  { id: 'DBmCpE9z-x_', title: 'Ethnic Collection Tour' }
];
