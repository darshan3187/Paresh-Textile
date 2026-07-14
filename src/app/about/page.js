import PTNavBar from '@/components/PTNavBar';
import PTBottomNav from '@/components/PTBottomNav';
import PTAbout from '@/components/PTAbout';
import PTFooter from '@/components/PTFooter';

export const metadata = {
  title: 'Wholesale Fabric Showroom – PT - Paresh Textile | About Us',
  description: 'Learn about PT - Paresh Textile, a trusted wholesale fabric partner in Ahmedabad with 30+ years of sourcing expertise. Contact us today to visit our showroom.',
  alternates: {
    canonical: 'https://pareshtextile.com/about',
  },
  openGraph: {
    type: 'website',
    title: 'Wholesale Fabric Showroom – PT - Paresh Textile | About Us',
    description: 'Learn about PT - Paresh Textile, a trusted wholesale fabric partner in Ahmedabad with 30+ years of sourcing expertise. Contact us today to visit our showroom.',
    url: 'https://pareshtextile.com/about',
    siteName: 'PT - Paresh Textile',
    images: [
      {
        url: 'https://pareshtextile.com/hero_about.jpeg',
        width: 1200,
        height: 630,
        alt: 'About PT - Paresh Textile',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Fabric Showroom – PT - Paresh Textile | About Us',
    description: 'Learn about PT - Paresh Textile, a trusted wholesale fabric partner in Ahmedabad with 30+ years of sourcing expertise. Contact us today to visit our showroom.',
    images: ['https://pareshtextile.com/hero_about.jpeg'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <PTNavBar />
      <main>
        <PTAbout />

        <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto rounded-[28px] border border-white/70 bg-white/78 p-5 sm:p-6 lg:p-8 shadow-[0_16px_50px_rgba(26,18,9,0.06)]">
            <h2 className="font-headings text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1209] mb-4">Our Mission</h2>
            <p className="text-sm lg:text-base text-[#6F655B] leading-7">We aim to simplify wholesale fabric sourcing for Ahmedabad and Gujarat buyers by presenting curated collections, transparent pricing and showroom guidance that reduces decision time and risk.</p>
          </div>
        </section>

        <PTFooter />
      </main>

      <PTBottomNav />
    </div>
  );
}
