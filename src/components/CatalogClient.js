'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, X, ChevronDown, MessageCircle, Package, ChevronRight, ExternalLink, FileText, Download, Eye } from 'lucide-react';
import {
  products,
  BRANDS,
  getActiveCategories,
  getActivePatterns,
} from '@/data/catalogData';

const whatsappLink =
  'https://wa.me/919327387674?text=Hi%20PT%20Paresh%20Textile%2C%20I%20would%20like%20to%20enquire%20about%20your%20wholesale%20fabric%20collections%20and%20availability.';

function getProductWhatsAppLink(product, colorVariant) {
  const text = `Hi PT Paresh Textile, I'm interested in:\n\n*${product.name}*\nBrand: ${product.brand}\nColor: ${colorVariant?.colorName || 'Default'}\nCategory: ${product.category}\nPrice: ₹${product.pricePerMeter}/meter\n\nPlease share availability and bulk pricing details.`;
  return `https://wa.me/919327387674?text=${encodeURIComponent(text)}`;
}

// ─── Product Card ────────────────────────────────────────────
function ProductCard({ product }) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const activeColor = product.colorVariants[selectedColorIdx] || {};

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border bg-card/92 shadow-[0_8px_28px_rgba(26,18,9,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_var(--border)]">
      {/* Image / Color Preview */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F7F3EC] to-[#EAE2D5]">
        {activeColor.image ? (
          <Image
            src={activeColor.image}
            alt={`${product.name} — ${activeColor.colorName}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-28 w-28 rounded-full shadow-[inset_0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: activeColor.colorHex || '#ccc' }}
            />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="inline-block rounded-full border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/60 px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase text-[#5F5449] backdrop-blur-md">
                {activeColor.colorName}
              </span>
            </div>
          </div>
        )}

        {/* Lifecycle Badge */}
        {product.lifecycleStatus === 'New' && (
          <div className="absolute top-3 left-3 rounded-full bg-[#065F46] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
            ★ New
          </div>
        )}
        {product.lifecycleStatus === 'Phaseout' && (
          <div className="absolute top-3 left-3 rounded-full bg-[#DC2626] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md">
            Clearance
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Brand pill */}
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 font-medium">
          {product.brand} · {product.category}
        </span>

        <h3 className="font-headings text-lg font-bold text-foreground leading-snug line-clamp-2 h-12">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#4E443A] line-clamp-2 h-10">
          {product.description}
        </p>

        {/* Specs Row */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 h-14 overflow-hidden content-start">
          <span className="rounded-lg border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-[#4E443A]">
            {product.pattern}
          </span>
          <span className="rounded-lg border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-[#4E443A]">
            {product.composition}
          </span>
          <span className="rounded-lg border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-[#4E443A]">
            {product.thanLength}m/than
          </span>
        </div>

        {/* Color Swatches */}
        <div className="mt-4 flex items-center gap-2 h-8">
          <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-medium mr-1">Colors:</span>
          {product.colorVariants.map((cv, idx) => (
            <button
              key={cv.colorName}
              onClick={() => setSelectedColorIdx(idx)}
              title={cv.colorName}
              className={`h-6 w-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                idx === selectedColorIdx
                  ? 'border-[#1A1209] ring-2 ring-[#A6792B]/30 scale-110'
                  : 'border-border'
              }`}
              style={{ backgroundColor: cv.colorHex }}
            />
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-[#EDE7DC] mt-4">
          <div>
            <span className="block font-headings text-xl font-bold text-foreground">
              ₹{product.pricePerMeter}
            </span>
            <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">per meter</span>
          </div>
          <a
            href={getProductWhatsAppLink(product, activeColor)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle size={13} />
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Main Catalog Client Component ───────────────────────────
export default function CatalogClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [patternFilter, setPatternFilter] = useState('All');
  const [lifecycleFilter, setLifecycleFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = useMemo(() => getActiveCategories(), []);
  const allPatterns = useMemo(() => getActivePatterns(), []);
  const brandNames = useMemo(() => Object.keys(BRANDS), []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.composition.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.colorVariants.some((cv) => cv.colorName.toLowerCase().includes(query));

      const matchesBrand = brandFilter === 'All' || p.brand === brandFilter;
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesPattern = patternFilter === 'All' || p.pattern === patternFilter;
      const matchesLifecycle = lifecycleFilter === 'All' || p.lifecycleStatus === lifecycleFilter;

      return matchesSearch && matchesBrand && matchesCategory && matchesPattern && matchesLifecycle;
    });
  }, [searchQuery, brandFilter, categoryFilter, patternFilter, lifecycleFilter]);

  // Group filtered products by brand
  const groupedProducts = useMemo(() => {
    const grouped = {};
    for (const product of filteredProducts) {
      if (!grouped[product.brand]) {
        grouped[product.brand] = [];
      }
      grouped[product.brand].push(product);
    }
    return grouped;
  }, [filteredProducts]);

  const visibleBrands = useMemo(() => {
    if (brandFilter !== 'All') {
      return [brandFilter];
    }
    const brands = [];
    const query = searchQuery.toLowerCase().trim();
    
    // Check if Absoluto matches query
    const isAbsolutoMatching = 
      !query || 
      'absoluto'.includes(query) || 
      'pechaan'.includes(query) || 
      'kurta'.includes(query) || 
      'pdf'.includes(query) || 
      'catalog'.includes(query);
      
    // Check if Pravar matches query
    const isPravarMatching =
      !query ||
      'pravar'.includes(query) ||
      'oscon'.includes(query) ||
      'jacket'.includes(query) ||
      'kurta'.includes(query) ||
      'pdf'.includes(query) ||
      'catalog'.includes(query);
      
    const hasOtherFilters = categoryFilter !== 'All' || patternFilter !== 'All' || lifecycleFilter !== 'All';
    
    if (isAbsolutoMatching && !hasOtherFilters) {
      brands.push('Absoluto');
    }
    
    if (isPravarMatching && !hasOtherFilters) {
      brands.push('Pravar');
    }
    
    Object.keys(groupedProducts).forEach((b) => {
      if (b !== 'Absoluto' && b !== 'Pravar' && !brands.includes(b)) {
        brands.push(b);
      }
    });
    
    // Sort visible brands based on BRAND_ORDER
    const BRAND_ORDER = ['Absoluto', 'Donear', 'Meetra', 'Pravar'];
    brands.sort((a, b) => BRAND_ORDER.indexOf(a) - BRAND_ORDER.indexOf(b));
    
    return brands;
  }, [brandFilter, searchQuery, categoryFilter, patternFilter, lifecycleFilter, groupedProducts]);

  const hasActiveFilters =
    brandFilter !== 'All' || categoryFilter !== 'All' || patternFilter !== 'All' || lifecycleFilter !== 'All';

  const clearAllFilters = () => {
    setSearchQuery('');
    setBrandFilter('All');
    setCategoryFilter('All');
    setPatternFilter('All');
    setLifecycleFilter('All');
  };

  return (
    <div>
      {/* ─── Search & Filter Bar ──────────────────────────── */}
      <div className="sticky top-16 sm:top-18 z-40 px-4 lg:px-6 py-3 bg-background/70 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search fabrics by name, brand, color, or composition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card/90 pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#A6792B] focus:ring-2 focus:ring-[#A6792B]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
                showFilters || hasActiveFilters
                  ? 'border-[#1A1209] bg-primary text-white'
                  : 'border-border bg-card/90 text-foreground hover:border-[#1A1209]'
              }`}
            >
              <Filter size={14} />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#A6792B] text-[10px] font-bold text-white">
                  {[brandFilter, categoryFilter, patternFilter, lifecycleFilter].filter((f) => f !== 'All').length}
                </span>
              )}
            </button>
          </div>

          {/* ─── Filter Dropdowns ─────────────────────────── */}
          {showFilters && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-[0_12px_32px_var(--border)] animate-in fade-in slide-in-from-top-2">
              {/* Brand Filter */}
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                  Brand
                </label>
                <div className="relative">
                  <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-border bg-secondary px-3 py-2.5 pr-8 text-sm text-foreground focus:outline-none focus:border-[#A6792B] cursor-pointer"
                  >
                    <option value="All">All Brands</option>
                    {brandNames.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-border bg-secondary px-3 py-2.5 pr-8 text-sm text-foreground focus:outline-none focus:border-[#A6792B] cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    {allCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" />
                </div>
              </div>

              {/* Pattern Filter */}
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                  Pattern
                </label>
                <div className="relative">
                  <select
                    value={patternFilter}
                    onChange={(e) => setPatternFilter(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-border bg-secondary px-3 py-2.5 pr-8 text-sm text-foreground focus:outline-none focus:border-[#A6792B] cursor-pointer"
                  >
                    <option value="All">All Patterns</option>
                    {allPatterns.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" />
                </div>
              </div>

              {/* Lifecycle Filter */}
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                  Status
                </label>
                <div className="relative">
                  <select
                    value={lifecycleFilter}
                    onChange={(e) => setLifecycleFilter(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-border bg-secondary px-3 py-2.5 pr-8 text-sm text-foreground focus:outline-none focus:border-[#A6792B] cursor-pointer"
                  >
                    <option value="All">All Status</option>
                    <option value="New">★ New Arrivals</option>
                    <option value="Carryover">Carryover</option>
                    <option value="Phaseout">Clearance</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" />
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <div className="col-span-2 sm:col-span-4 flex justify-end">
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A6792B] hover:text-foreground transition-colors"
                  >
                    <X size={12} />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ─── Results Summary ──────────────────────────────── */}
      <div className="px-4 lg:px-6 pt-6 pb-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span>{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
            {hasActiveFilters && ' (filtered)'}
            {' across '}
            <span className="font-semibold text-foreground">{visibleBrands.length}</span>{' '}
            {visibleBrands.length === 1 ? 'brand' : 'brands'}
          </p>
        </div>
      </div>

      {/* ─── Brand-Wise Product Sections ──────────────────── */}
      {visibleBrands.length === 0 ? (
        <div className="px-4 lg:px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-secondary border border-border mb-6">
              <Package size={32} className="text-muted-foreground/60" />
            </div>
            <h3 className="font-headings text-2xl font-bold text-foreground mb-3">No products found</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
              Try adjusting your search or filters. We have a wide range of fabrics across multiple brands.
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Clear all filters
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20 space-y-10 sm:space-y-14">
          {visibleBrands.map((brandName) => {
            const brandInfo = BRANDS[brandName] || {};
            const brandProducts = groupedProducts[brandName] || [];

            return (
              <section key={brandName} id={`brand-${brandName.toLowerCase()}`} className="max-w-7xl mx-auto scroll-mt-40">
                {/* Brand Header */}
                <div className="rounded-[24px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/82 p-5 sm:p-6 shadow-[0_12px_32px_rgba(26,18,9,0.05)] mb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {brandInfo.logo ? (
                      <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-3 shadow-sm">
                        <Image
                          src={brandInfo.logo}
                          alt={`${brandName} logo`}
                          width={100}
                          height={48}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-2xl font-bold text-foreground shadow-sm"
                           style={{ borderColor: brandInfo.accentColor + '30' }}
                      >
                        {brandName.slice(0, 1)}
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="font-headings text-2xl sm:text-3xl font-bold text-foreground">
                          {brandName}
                        </h2>
                        <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {brandName === 'Absoluto' || brandName === 'Pravar' ? '2 PDF Catalogs' : `${brandProducts.length} ${brandProducts.length === 1 ? 'item' : 'items'}`}
                        </span>
                      </div>
                      {brandInfo.tagline && (
                        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/60 mb-1">{brandInfo.tagline}</p>
                      )}
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      {brandInfo.website && (
                        <a
                          href={brandInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/75 px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-[#A6792B] hover:bg-card"
                        >
                          <ExternalLink size={12} />
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {brandName === 'Absoluto' || brandName === 'Pravar' ? (
                  brandName === 'Absoluto' ? (
                    /* Absoluto PDF Catalogs Preview */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-[22px] border border-border bg-card/92 p-6 flex flex-col justify-between shadow-[0_8px_28px_rgba(26,18,9,0.05)] transition-all duration-300 hover:-translate-y-0.5">
                        <div>
                          <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 shadow-inner">
                            <FileText size={22} />
                          </div>
                          <h4 className="font-headings text-xl font-bold text-foreground mb-2">Absoluto - Pechaan 5 Catalog</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Browse our flagship suiting and celebration wear collections including premium textures, self-designs, and classic wholesale colors.
                          </p>
                          <span className="inline-block rounded-full bg-secondary border-border/40 px-3 py-1 text-xs font-semibold text-muted-foreground mb-5 border border-border">
                            PDF Document · 8.9 MB
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href="/catalog/absoluto"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black shadow-sm"
                          >
                            <Eye size={13} />
                            View Online
                          </Link>
                          <a
                            href="/Absoluto - Pechaan 5 Catalog.pdf"
                            download
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-[#1A1209]"
                          >
                            <Download size={13} />
                            Download
                          </a>
                        </div>
                      </div>

                      <div className="rounded-[22px] border border-border bg-card/92 p-6 flex flex-col justify-between shadow-[0_8px_28px_rgba(26,18,9,0.05)] transition-all duration-300 hover:-translate-y-0.5">
                        <div>
                          <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 shadow-inner">
                            <FileText size={22} />
                          </div>
                          <h4 className="font-headings text-xl font-bold text-foreground mb-2">Absoluto Kurta Catalog</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Curated traditional wear, luxury kurtas, sherwani bases, and celebration wear fabrics for festive and occasion sourcing.
                          </p>
                          <span className="inline-block rounded-full bg-secondary border-border/40 px-3 py-1 text-xs font-semibold text-muted-foreground mb-5 border border-border">
                            PDF Document · 26.3 MB
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href="/catalog/absoluto"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black shadow-sm"
                          >
                            <Eye size={13} />
                            View Online
                          </Link>
                          <a
                            href="/Absoluto_Kurta_Catalog_Final.pdf"
                            download
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-[#1A1209]"
                          >
                            <Download size={13} />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Pravar PDF Catalogs Preview */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-[22px] border border-border bg-card/92 p-6 flex flex-col justify-between shadow-[0_8px_28px_rgba(26,18,9,0.05)] transition-all duration-300 hover:-translate-y-0.5">
                        <div>
                          <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 shadow-inner">
                            <FileText size={22} />
                          </div>
                          <h4 className="font-headings text-xl font-bold text-foreground mb-2">Pravar Jacket Catalogue</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Premium collection of suiting, jacketings, designer checks, and custom structured fabrics for high-end styling and jackets.
                          </p>
                          <span className="inline-block rounded-full bg-secondary border-border/40 px-3 py-1 text-xs font-semibold text-muted-foreground mb-5 border border-border">
                            PDF Document · 83.7 MB
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href="/catalog/pravar"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black shadow-sm"
                          >
                            <Eye size={13} />
                            View Online
                          </Link>
                          <a
                            href="/PRAVAR_JACKET CATALOGUE.pdf"
                            download
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-[#1A1209]"
                          >
                            <Download size={13} />
                            Download
                          </a>
                        </div>
                      </div>

                      <div className="rounded-[22px] border border-border bg-card/92 p-6 flex flex-col justify-between shadow-[0_8px_28px_rgba(26,18,9,0.05)] transition-all duration-300 hover:-translate-y-0.5">
                        <div>
                          <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 shadow-inner">
                            <FileText size={22} />
                          </div>
                          <h4 className="font-headings text-xl font-bold text-foreground mb-2">Pravar Kurta Catalogue</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Exquisite traditional fabrics, fine prints, and plain & textured kurtas crafted for elegant celebration and festive wear.
                          </p>
                          <span className="inline-block rounded-full bg-secondary border-border/40 px-3 py-1 text-xs font-semibold text-muted-foreground mb-5 border border-border">
                            PDF Document · 37.0 MB
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href="/catalog/pravar"
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black shadow-sm"
                          >
                            <Eye size={13} />
                            View Online
                          </Link>
                          <a
                            href="/PRAVAR_KURTA CATALOGUE.pdf"
                            download
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-[#1A1209]"
                          >
                            <Download size={13} />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  /* Other Brands Product Grid */
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {brandProducts.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <Link
                        href={`/catalog/${brandName.toLowerCase()}`}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-[#1A1209] hover:bg-primary hover:text-primary-foreground shadow-sm"
                      >
                        View all {brandName} products
                        <ChevronRight size={12} />
                      </Link>
                    </div>
                  </>
                )}

                {/* View PDF Catalogs CTA (Only for PDF catalog brands at the bottom of the section) */}
                {(brandName === 'Absoluto' || brandName === 'Pravar') && (
                  <div className="mt-8 flex justify-center">
                    <Link
                      href={`/catalog/${brandName.toLowerCase()}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-[#1A1209] hover:bg-primary hover:text-primary-foreground shadow-sm"
                    >
                      Open {brandName} PDF catalogs
                      <ChevronRight size={12} />
                    </Link>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
