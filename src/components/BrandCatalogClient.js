'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search, X, ChevronDown, MessageCircle, Package, ArrowLeft, ExternalLink,
} from 'lucide-react';
import {
  BRANDS,
  getProductsForBrand,
} from '@/data/catalogData';
import PDFCatalogViewer from '@/components/PDFCatalogViewer';

function getProductWhatsAppLink(product, colorVariant) {
  const text = `Hi PT Paresh Textile, I'm interested in:\n\n*${product.name}*\nBrand: ${product.brand}\nColor: ${colorVariant?.colorName || 'Default'}\nCategory: ${product.category}\nPrice: ₹${product.pricePerMeter}/meter\n\nPlease share availability and bulk pricing details.`;
  return `https://wa.me/919327387674?text=${encodeURIComponent(text)}`;
}

// ─── Product Card ────────────────────────────────────────────
function ProductCard({ product }) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const activeColor = product.colorVariants[selectedColorIdx] || {};

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[22px] border border-[#E6DDD0] bg-white/92 shadow-[0_8px_28px_rgba(26,18,9,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(26,18,9,0.10)]">
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
              <span className="inline-block rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase text-[#5F5449] backdrop-blur-md">
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
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#5C5248] mb-1.5 font-medium">
          {product.brand} · {product.category}
        </span>

        <h3 className="font-headings text-lg font-bold text-[#1A1209] leading-snug line-clamp-2 h-12">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#4E443A] line-clamp-2 h-10">
          {product.description}
        </p>

        {/* Specs Row */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 h-14 overflow-hidden content-start">
          <span className="rounded-lg border border-[#E6DDD0] bg-[#FBF8F4] px-2 py-1 text-[11px] font-medium text-[#4E443A]">
            {product.pattern}
          </span>
          <span className="rounded-lg border border-[#E6DDD0] bg-[#FBF8F4] px-2 py-1 text-[11px] font-medium text-[#4E443A]">
            {product.composition}
          </span>
          <span className="rounded-lg border border-[#E6DDD0] bg-[#FBF8F4] px-2 py-1 text-[11px] font-medium text-[#4E443A]">
            {product.thanLength}m/than
          </span>
        </div>

        {/* Color Swatches */}
        <div className="mt-4 flex items-center gap-2 h-8">
          <span className="text-xs uppercase tracking-[0.16em] text-[#5C5248] font-medium mr-1">Colors:</span>
          {product.colorVariants.map((cv, idx) => (
            <button
              key={cv.colorName}
              onClick={() => setSelectedColorIdx(idx)}
              title={cv.colorName}
              className={`h-6 w-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                idx === selectedColorIdx
                  ? 'border-[#1A1209] ring-2 ring-[#A6792B]/30 scale-110'
                  : 'border-[#E6DDD0]'
              }`}
              style={{ backgroundColor: cv.colorHex }}
            />
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-[#EDE7DC] mt-4">
          <div>
            <span className="block font-headings text-xl font-bold text-[#1A1209]">
              ₹{product.pricePerMeter}
            </span>
            <span className="text-[11px] text-[#5C5248] font-medium uppercase tracking-wider">per meter</span>
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


// ─── Brand Catalog Client ────────────────────────────────────
export default function BrandCatalogClient({ brandSlug }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [patternFilter, setPatternFilter] = useState('All');
  const [lifecycleFilter, setLifecycleFilter] = useState('All');

  const brandInfo = BRANDS[Object.keys(BRANDS).find(
    (k) => k.toLowerCase() === brandSlug.toLowerCase()
  )] || {};
  const brandName = brandInfo.name || brandSlug;

  const [shuffledReels, setShuffledReels] = useState([]);

  useEffect(() => {
    if (brandInfo.reels && brandInfo.reels.length > 0) {
      const reelsCopy = [...brandInfo.reels];
      for (let i = reelsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [reelsCopy[i], reelsCopy[j]] = [reelsCopy[j], reelsCopy[i]];
      }
      setShuffledReels(reelsCopy.slice(0, 3));
    } else {
      setShuffledReels([]);
    }
  }, [brandInfo.reels]);

  const reelsSection = shuffledReels.length > 0 ? (
    <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20 border-t border-[#E6DDD0]/40 pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="section-pill mb-3">Instagram Showcase</p>
            <h2 className="font-headings text-2xl sm:text-3xl font-bold text-[#1A1209]">
              {brandName} Collection Reels
            </h2>
            <p className="text-sm text-[#6F655B] mt-1">
              Watch live texture close-ups and design highlights from our showroom.
            </p>
          </div>
          <a
            href={brandInfo.instagramUrl || "https://www.instagram.com/pt__1994/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#D9D0C2] bg-white/75 px-5 py-2.5 text-xs font-semibold text-[#1A1209] transition-all hover:border-[#1A1209] hover:bg-white shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-500 mr-0.5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            Follow @{brandInfo.instagramUrl ? brandInfo.instagramUrl.split('/').filter(Boolean).pop() : 'pt__1994'}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-6 justify-center">
          {shuffledReels.map((reel) => (
            <div
              key={reel.id}
              className="group relative overflow-hidden rounded-[24px] border border-[#E6DDD0] bg-white p-2.5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black/5 shadow-inner">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;

  if (brandSlug.toLowerCase() === 'absoluto' || brandSlug.toLowerCase() === 'pravar') {
    return (
      <div>
        {/* Brand Hero Header */}
        <section className="px-4 lg:px-6 pt-6 sm:pt-8 lg:pt-12 pb-6">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#7D7366] hover:text-[#1A1209] transition-colors mb-5"
            >
              <ArrowLeft size={15} />
              Back to full catalog
            </Link>

            <div className={`rounded-[28px] border border-white/70 bg-gradient-to-r ${brandInfo.tone || 'from-white to-white'} p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(26,18,9,0.06)]`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {brandInfo.logo ? (
                  <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl border border-[#E6DDD0] bg-white px-4 shadow-sm">
                    <Image
                      src={brandInfo.logo}
                      alt={`${brandName} logo`}
                      width={120}
                      height={56}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 bg-white/80 text-3xl font-bold text-[#1A1209] shadow-sm"
                    style={{ borderColor: brandInfo.accentColor || '#DDD4C6' }}
                  >
                    {brandName.slice(0, 1)}
                  </div>
                )}

                <div className="flex-1">
                  <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1209] leading-tight tracking-tight">
                    {brandName}
                  </h1>
                  {brandInfo.tagline && (
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#9A8E80]">
                      {brandInfo.tagline}
                    </p>
                  )}
                  {brandInfo.description && (
                    <p className="mt-3 text-sm text-[#6F655B] max-w-2xl leading-relaxed">
                      {brandInfo.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 shrink-0">
                  {brandInfo.website && (
                    <a
                      href={brandInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D0C2] bg-white/80 px-5 py-2.5 text-xs font-semibold text-[#1A1209] transition-all hover:border-[#A6792B] hover:bg-white shadow-sm"
                    >
                      <ExternalLink size={13} />
                      Official Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Catalog Viewer Section */}
        <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <PDFCatalogViewer brandSlug={brandSlug} />
          </div>
        </section>

        {reelsSection}
      </div>
    );
  }

  const allProducts = useMemo(() => getProductsForBrand(brandSlug), [brandSlug]);
  const allCategories = useMemo(() => [...new Set(allProducts.map((p) => p.category))], [allProducts]);
  const allPatterns = useMemo(() => [...new Set(allProducts.map((p) => p.pattern))], [allProducts]);

  // Filter
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.composition.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.colorVariants.some((cv) => cv.colorName.toLowerCase().includes(query));

      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesPattern = patternFilter === 'All' || p.pattern === patternFilter;
      const matchesLifecycle = lifecycleFilter === 'All' || p.lifecycleStatus === lifecycleFilter;

      return matchesSearch && matchesCategory && matchesPattern && matchesLifecycle;
    });
  }, [allProducts, searchQuery, categoryFilter, patternFilter, lifecycleFilter]);

  const hasActiveFilters =
    categoryFilter !== 'All' || patternFilter !== 'All' || lifecycleFilter !== 'All';

  const clearAllFilters = () => {
    setSearchQuery('');
    setCategoryFilter('All');
    setPatternFilter('All');
    setLifecycleFilter('All');
  };

  return (
    <div>
      {/* ─── Brand Hero Header ────────────────────────────── */}
      <section className="px-4 lg:px-6 pt-6 sm:pt-8 lg:pt-12 pb-6">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7D7366] hover:text-[#1A1209] transition-colors mb-5"
          >
            <ArrowLeft size={15} />
            Back to full catalog
          </Link>

          <div className={`rounded-[28px] border border-white/70 bg-gradient-to-r ${brandInfo.tone || 'from-white to-white'} p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(26,18,9,0.06)]`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {brandInfo.logo ? (
                <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl border border-[#E6DDD0] bg-white px-4 shadow-sm">
                  <Image
                    src={brandInfo.logo}
                    alt={`${brandName} logo`}
                    width={120}
                    height={56}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 bg-white/80 text-3xl font-bold text-[#1A1209] shadow-sm"
                  style={{ borderColor: brandInfo.accentColor || '#DDD4C6' }}
                >
                  {brandName.slice(0, 1)}
                </div>
              )}

              <div className="flex-1">
                <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1209] leading-tight tracking-tight">
                  {brandName}
                </h1>
                {brandInfo.tagline && (
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#9A8E80]">
                    {brandInfo.tagline}
                  </p>
                )}
                {brandInfo.description && (
                  <p className="mt-3 text-sm text-[#6F655B] max-w-2xl leading-relaxed">
                    {brandInfo.description}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 shrink-0">
                {brandInfo.website && (
                  <a
                    href={brandInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D0C2] bg-white/80 px-5 py-2.5 text-xs font-semibold text-[#1A1209] transition-all hover:border-[#A6792B] hover:bg-white shadow-sm"
                  >
                    <ExternalLink size={13} />
                    Official Website
                  </a>
                )}
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="rounded-full border border-[#E6DDD0] bg-white/70 px-3.5 py-1.5 text-[#5F5449] font-medium">
                {allProducts.length} {allProducts.length === 1 ? 'product' : 'products'} total
              </span>
              <span className="rounded-full border border-[#E6DDD0] bg-white/70 px-3.5 py-1.5 text-[#5F5449] font-medium">
                {allCategories.length} {allCategories.length === 1 ? 'category' : 'categories'}
              </span>
              <span className="rounded-full border border-[#E6DDD0] bg-white/70 px-3.5 py-1.5 text-[#5F5449] font-medium">
                {allProducts.filter((p) => p.lifecycleStatus === 'New').length} new arrivals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Search & Filter ──────────────────────────────── */}
      <div className="sticky top-16 sm:top-18 z-40 px-4 lg:px-6 py-3 bg-background/70 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A8E80]" />
              <input
                type="text"
                placeholder={`Search ${brandName} fabrics by name, color, or composition...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[#DDD4C6] bg-white/90 pl-11 pr-4 py-3 text-sm text-[#1A1209] placeholder:text-[#9A8E80] focus:outline-none focus:border-[#A6792B] focus:ring-2 focus:ring-[#A6792B]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8E80] hover:text-[#1A1209] transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Inline Filters */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="appearance-none rounded-full border border-[#DDD4C6] bg-white/90 px-4 py-3 pr-8 text-sm text-[#1A1209] focus:outline-none focus:border-[#A6792B] cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  {allCategories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8E80] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={patternFilter}
                  onChange={(e) => setPatternFilter(e.target.value)}
                  className="appearance-none rounded-full border border-[#DDD4C6] bg-white/90 px-4 py-3 pr-8 text-sm text-[#1A1209] focus:outline-none focus:border-[#A6792B] cursor-pointer"
                >
                  <option value="All">All Patterns</option>
                  {allPatterns.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8E80] pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={lifecycleFilter}
                  onChange={(e) => setLifecycleFilter(e.target.value)}
                  className="appearance-none rounded-full border border-[#DDD4C6] bg-white/90 px-4 py-3 pr-8 text-sm text-[#1A1209] focus:outline-none focus:border-[#A6792B] cursor-pointer"
                >
                  <option value="All">All Status</option>
                  <option value="New">★ New</option>
                  <option value="Carryover">Carryover</option>
                  <option value="Phaseout">Clearance</option>
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8E80] pointer-events-none" />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1209] px-4 py-3 text-xs font-medium text-white transition-all hover:bg-[#2a200f]"
                >
                  <X size={12} />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Results Summary ──────────────────────────────── */}
      <div className="px-4 lg:px-6 pt-6 pb-2">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-[#7D7366]">
            Showing <span className="font-semibold text-[#1A1209]">{filteredProducts.length}</span>{' '}
            of {allProducts.length} {brandName} {allProducts.length === 1 ? 'product' : 'products'}
            {hasActiveFilters && ' (filtered)'}
          </p>
        </div>
      </div>

      {/* ─── Product Grid ─────────────────────────────────── */}
      {filteredProducts.length === 0 ? (
        <div className="px-4 lg:px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FBF8F4] border border-[#E6DDD0] mb-6">
              <Package size={32} className="text-[#9A8E80]" />
            </div>
            <h3 className="font-headings text-2xl font-bold text-[#1A1209] mb-3">
              No {brandName} products found
            </h3>
            <p className="text-sm text-[#6F655B] max-w-md mx-auto mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1209] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Clear all filters
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}

      {reelsSection}
    </div>
  );
}
