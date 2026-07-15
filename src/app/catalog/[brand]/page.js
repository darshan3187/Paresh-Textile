import { notFound } from 'next/navigation';
import PTNavBar from '@/components/PTNavBar';
import PTBottomNav from '@/components/PTBottomNav';
import PTFooter from '@/components/PTFooter';
import BrandCatalogClient from '@/components/BrandCatalogClient';
import { MessageCircle } from 'lucide-react';
import {
  getBrandBySlug,
  getAllBrandSlugs,
  getProductsForBrand,
} from '@/data/catalogData';

// ─── Generate static params for all brands ───────────────────
export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ brand: slug }));
}

// ─── Dynamic metadata ────────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const brandInfo = getBrandBySlug(resolvedParams.brand);
  if (!brandInfo) return { title: 'Brand Not Found' };

  const titleText = `${brandInfo.name} Fabrics – PT - Paresh Textile | Wholesale`;
  const descriptionText = `Browse the complete catalog of ${brandInfo.name} wholesale fabrics at PT - Paresh Textile in Ahmedabad. Message us on WhatsApp to enquire about pricing!`;

  return {
    title: titleText,
    description: descriptionText,
    alternates: {
      canonical: `https://paresh-textile.vercel.app/catalog/${resolvedParams.brand}`,
    },
    openGraph: {
      type: 'website',
      title: titleText,
      description: descriptionText,
      url: `https://paresh-textile.vercel.app/catalog/${resolvedParams.brand}`,
      siteName: 'PT - Paresh Textile',
      images: [
        {
          url: 'https://paresh-textile.vercel.app/hero.png',
          width: 1200,
          height: 630,
          alt: `${brandInfo.name} Fabrics - PT - Paresh Textile`,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: titleText,
      description: descriptionText,
      images: ['https://paresh-textile.vercel.app/hero.png'],
    },
  };
}

const whatsappLink =
  'https://wa.me/919327387674?text=Hi%20PT%20Paresh%20Textile%2C%20I%20would%20like%20to%20enquire%20about%20your%20wholesale%20fabric%20collections%20and%20availability.';

export default async function BrandCatalogPage({ params }) {
  const resolvedParams = await params;
  const brandInfo = getBrandBySlug(resolvedParams.brand);

  if (!brandInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-transparent">
      <PTNavBar />

      <main className="overflow-hidden pb-28 md:pb-32 lg:pb-0">
        {/* ─── Brand Catalog Content (Client) ──────────────── */}
        <BrandCatalogClient brandSlug={resolvedParams.brand} />

        <PTFooter />
      </main>

      <PTBottomNav />
    </div>
  );
}
