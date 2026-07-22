'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FileText, Download, ExternalLink, MessageCircle, Eye, BookOpen, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const BRAND_PDF_CATALOGS = {
  absoluto: [
    {
      id: 'absoluto-pechaan-5',
      name: 'Absoluto - Pechaan 5 Catalog',
      fileName: 'Absoluto - Pechaan 5 Catalog.pdf',
      fileSize: '8.9 MB',
      description: 'Our flagship suiting and celebration wear collections. Features premium textures, self-designs, structured fabrics, and premium classic wholesale shades.',
      whatsAppText: 'Hi PT Paresh Textile, I am interested in fabrics from the Absoluto - Pechaan 5 Catalog. Please share availability and wholesale pricing details.',
    },
    {
      id: 'absoluto-kurta',
      name: 'Absoluto Kurta Catalog',
      fileName: 'Absoluto_Kurta_Catalog_Final.pdf',
      fileSize: '26.3 MB',
      description: 'Traditional wear collection featuring premium kurta fabrics, luxury sherwani bases, art silks, and custom ceremony fabrics.',
      whatsAppText: 'Hi PT Paresh Textile, I am interested in fabrics from the Absoluto Kurta Catalog. Please share availability and wholesale pricing details.',
    }
  ],
  pravar: [
    {
      id: 'pravar-jacket',
      name: 'Pravar Jacket Catalogue',
      fileName: 'PRAVAR_JACKET CATALOGUE.pdf',
      fileSize: '83.7 MB',
      description: 'Premium collection of suiting, jacketings, designer checks, and custom structured fabrics for high-end styling and jackets.',
      whatsAppText: 'Hi PT Paresh Textile, I am interested in fabrics from the Pravar Jacket Catalogue. Please share availability and wholesale pricing details.',
    },
    {
      id: 'pravar-kurta',
      name: 'Pravar Kurta Catalogue',
      fileName: 'PRAVAR_KURTA CATALOGUE.pdf',
      fileSize: '37.0 MB',
      description: 'Exquisite traditional fabrics, fine prints, and plain & textured kurtas crafted for elegant celebration and festive wear.',
      whatsAppText: 'Hi PT Paresh Textile, I am interested in fabrics from the Pravar Kurta Catalogue. Please share availability and wholesale pricing details.',
    }
  ]
};

export default function PDFCatalogViewer({ brandSlug = 'absoluto' }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentPreviewPage, setCurrentPreviewPage] = useState(1);

  const catalogs = BRAND_PDF_CATALOGS[brandSlug.toLowerCase()] || [];
  const activePdf = catalogs[activeTab] || {};

  useEffect(() => {
    setActiveTab(0);
    setCurrentPreviewPage(1);
  }, [brandSlug]);

  useEffect(() => {
    setCurrentPreviewPage(1);
  }, [activeTab]);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getWhatsAppLink = (text) => {
    return `https://wa.me/919327387674?text=${encodeURIComponent(text)}`;
  };

  if (catalogs.length === 0) {
    return (
      <div className="rounded-[28px] border border-border bg-card/95 p-8 text-center text-muted-foreground">
        No catalogs found for this brand.
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-border bg-card/95 p-5 sm:p-6 lg:p-8 shadow-[0_16px_50px_var(--border)]">
      {/* Catalog Selector Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 border-b border-[#EDE7DC] pb-5 mb-6">
        {catalogs.map((pdf, idx) => (
          <button
            key={pdf.id}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              idx === activeTab
                ? 'bg-primary text-white shadow-md'
                : 'border border-border bg-secondary text-foreground hover:border-[#1A1209]'
            }`}
          >
            <BookOpen size={16} />
            <span>{pdf.name}</span>
          </button>
        ))}
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-stretch">
        
        {/* Info panel */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText size={12} />
              Full PDF Catalog
            </div>
            
            <h3 className="font-headings text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {activePdf.name}
            </h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              {activePdf.description}
            </p>

            <div className="rounded-2xl bg-secondary border border-border p-4 mb-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                <span>Format</span>
                <span>File Size</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  Adobe PDF Document
                </span>
                <span>{activePdf.fileSize}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={getWhatsAppLink(activePdf.whatsAppText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry for Catalog
            </a>
            
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`/${activePdf.fileName}`}
                download
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-xs font-semibold text-foreground hover:border-[#1A1209] transition-all"
              >
                <Download size={14} />
                Download PDF
              </a>
              <a
                href={`/${activePdf.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-xs font-semibold text-foreground hover:border-[#1A1209] transition-all"
              >
                <ExternalLink size={14} />
                Open Fullscreen
              </a>
            </div>
          </div>
        </div>

        {/* PDF viewer panel */}
        <div className="relative min-h-[450px] lg:min-h-[580px] rounded-2xl border border-border overflow-hidden bg-secondary shadow-sm flex flex-col">
          {!isMounted ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#FDFBF7] text-muted-foreground text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 font-semibold text-gold mb-2">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
                Initializing Viewer...
              </span>
            </div>
          ) : isMobile ? (
            <div className="flex-1 flex flex-col bg-[#FDFBF7]">
              {/* Header inside viewer */}
              <div className="bg-secondary/40 border-b border-border/40 px-4 py-2 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5 font-semibold text-gold">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
                  Preview Mode (First 3 Pages)
                </span>
                <span>Page {currentPreviewPage} of 3</span>
              </div>
              
              {/* Image Carousel Area */}
              <div className="flex-1 relative min-h-[340px] flex items-center justify-center p-4">
                <div className="relative aspect-[3/4] h-full max-h-[360px] w-auto shadow-md rounded-lg overflow-hidden border border-border bg-white">
                  <Image
                    src={`/previews/${activePdf.id}-page-${currentPreviewPage}.webp`}
                    alt={`${activePdf.name} page ${currentPreviewPage}`}
                    fill
                    sizes="(max-width: 768px) 80vw, 350px"
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentPreviewPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPreviewPage === 1}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-white/90 hover:bg-white text-foreground disabled:opacity-30 disabled:cursor-not-allowed shadow-md z-10 cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCurrentPreviewPage(prev => Math.min(3, prev + 1))}
                  disabled={currentPreviewPage === 3}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full border border-border bg-white/90 hover:bg-white text-foreground disabled:opacity-30 disabled:cursor-not-allowed shadow-md z-10 cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-1.5 pb-4">
                {[1, 2, 3].map((pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => setCurrentPreviewPage(pageIndex)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      pageIndex === currentPreviewPage
                        ? 'bg-amber-600 w-4'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                    }`}
                    aria-label={`Go to page ${pageIndex}`}
                  />
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="p-4 border-t border-border/40 bg-secondary/30 flex flex-col gap-2">
                <a
                  href={`/${activePdf.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-semibold text-white shadow-sm hover:bg-black"
                >
                  <Eye size={14} />
                  Open Full PDF in New Tab
                </a>
                <a
                  href={`/${activePdf.fileName}`}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 text-xs font-semibold text-foreground hover:border-black"
                >
                  <Download size={14} />
                  Download Full PDF ({activePdf.fileSize})
                </a>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              <div className="bg-secondary border-border/40/60 px-4 py-2 border-b border-border flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Interactive Viewer Active
                </span>
                <span>Use controls below or open fullscreen</span>
              </div>
              <iframe
                src={`/${activePdf.fileName}#toolbar=0&navpanes=0`}
                className="w-full flex-1 border-0"
                title={activePdf.name}
              />
              <div className="bg-secondary border-border/40/30 px-4 py-2.5 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                <AlertCircle size={13} className="text-gold shrink-0" />
                <span>Tip: Hover near the top of the viewer to print or zoom.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
