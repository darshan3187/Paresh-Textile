import PTNavBar from '@/components/PTNavBar';
import PTBottomNav from '@/components/PTBottomNav';
import PTFooter from '@/components/PTFooter';
import CatalogClient from '@/components/CatalogClient';
import { MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Wholesale Fabric Catalog – PT - Paresh Textile | Ahmedabad',
  description: 'Explore our wholesale fabric catalog at PT - Paresh Textile in Ahmedabad. Source suiting, shirting, and linen from premium brands. Enquire via WhatsApp!',
  alternates: {
    canonical: 'https://paresh-textile.vercel.app/catalog',
  },
  openGraph: {
    type: 'website',
    title: 'Wholesale Fabric Catalog – PT - Paresh Textile | Ahmedabad',
    description: 'Explore our wholesale fabric catalog at PT - Paresh Textile in Ahmedabad. Source suiting, shirting, and linen from premium brands. Enquire via WhatsApp!',
    url: 'https://paresh-textile.vercel.app/catalog',
    siteName: 'PT - Paresh Textile',
    images: [
      {
        url: 'https://paresh-textile.vercel.app/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Fabric Catalog - PT - Paresh Textile',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Fabric Catalog – PT - Paresh Textile | Ahmedabad',
    description: 'Explore our wholesale fabric catalog at PT - Paresh Textile in Ahmedabad. Source suiting, shirting, and linen from premium brands. Enquire via WhatsApp!',
    images: ['https://paresh-textile.vercel.app/hero.webp'],
  },
};

const whatsappLink =
  'https://wa.me/919327387674?text=Hi%20PT%20Paresh%20Textile%2C%20I%20would%20like%20to%20enquire%20about%20your%20wholesale%20fabric%20collections%20and%20availability.';

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PTNavBar />

      <main className="overflow-hidden pb-28 md:pb-32 lg:pb-0">
        {/* ─── Page Hero ─────────────────────────────────── */}
        <section className="px-4 lg:px-6 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[30px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/82 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_var(--border)]">
              <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-[rgba(166,121,43,0.08)] blur-3xl pointer-events-none" />

              <p className="section-pill mb-4 sm:mb-5">B2B Fabric Catalog</p>

              <div className="max-w-3xl">
                <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.02] tracking-tight">
                  Browse our complete fabric{' '}
                  <span className="italic text-gold">collection.</span>
                </h1>

                <p className="mt-4 sm:mt-5 text-sm lg:text-base leading-7 text-muted-foreground">
                  Explore 5,000+ wholesale fabric variants organized by brand. Each product includes
                  color options, specifications, and direct WhatsApp enquiry for instant pricing and
                  availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Catalog Content (Client) ──────────────────── */}
        <CatalogClient />

        <PTFooter />
      </main>

      <PTBottomNav />
    </div>
  );
}
