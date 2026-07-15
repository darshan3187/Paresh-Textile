import PTNavBar from '@/components/PTNavBar';
import PTBottomNav from '@/components/PTBottomNav';
import PTFooter from '@/components/PTFooter';
import { MessageCircle, ArrowRight, MapPin, Clock, Phone, Mail, ChevronRight, Star, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Wholesale Fabrics – PT - Paresh Textile | Ahmedabad Sourcing',
  description: 'Source premium wholesale fabrics at PT - Paresh Textile in Ahmedabad. Explore 5,000+ variants across suiting and shirting. Message us on WhatsApp to enquire!',
  alternates: {
    canonical: 'https://paresh-textile.vercel.app/',
  },
  openGraph: {
    type: 'website',
    title: 'Wholesale Fabrics – PT - Paresh Textile | Ahmedabad Sourcing',
    description: 'Source premium wholesale fabrics at PT - Paresh Textile in Ahmedabad. Explore 5,000+ variants across suiting and shirting. Message us on WhatsApp to enquire!',
    url: 'https://paresh-textile.vercel.app/',
    siteName: 'PT - Paresh Textile',
    images: [
      {
        url: 'https://paresh-textile.vercel.app/hero.png',
        width: 1200,
        height: 630,
        alt: 'PT - Paresh Textile Showroom',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Fabrics – PT - Paresh Textile | Ahmedabad Sourcing',
    description: 'Source premium wholesale fabrics at PT - Paresh Textile in Ahmedabad. Explore 5,000+ variants across suiting and shirting. Message us on WhatsApp to enquire!',
    images: ['https://paresh-textile.vercel.app/hero.png'],
  },
};

const businessHighlights = [
  'Wholesale fabric sourcing for retailers, tailors, corporates, and event buyers',
  '5000+ fabric variants across seasonal and evergreen ranges',
  'Premium brand partnerships with trusted mills and authorized labels',
  '30+ years of trust serving Ahmedabad and Gujarat',
];

const categoryCards = [
  { name: 'Suiting', desc: 'Corporate, formal, and daily-wear suiting fabrics with clean drape and dependable quality.', img: '/cat-suitings.png' },
  { name: 'Shirting', desc: 'Smart shirting fabric for uniforms, retail programs, and premium everyday wear.', img: '/cat-shirtings.png' },
  { name: 'Linen', desc: 'Natural textures with breathable comfort and a refined luxury finish.', img: '/cat-linen.png' },
  { name: 'Ethnic & Wedding', desc: 'Rich occasion fabrics for sherwani, ceremonial wear, and festive sourcing.', img: '/cat-sherwani.png' },
];

const trustPoints = [
  {
    title: 'Wholesale-first approach',
    body: 'We help buyers source in volume with consistency, repeatability, and practical lead times.',
  },
  {
    title: 'Premium sourcing network',
    body: 'Our collections are built around trusted mills and brands, so the range feels credible from the start.',
  },
  {
    title: 'Showroom guidance',
    body: 'You get direct help selecting the right fabric for the use case, budget, and finish you need.',
  },
];

const brandNames = [
  { name: 'Absoluto',
    img: '/Absoluto_logo.webp',
  },
  { name: 'Donear',
    img: '/Donear_logo.webp',
  },
  { name: 'Meetra',
    img: '/Meetra_logo.webp',
  },
  { name: 'Pravar',
    img: '/Pravar_logo.webp',
  }
];

const testimonials = [
  {
    quote: 'We use PT as a reliable sourcing partner for repeat corporate orders. The collection is strong, the advice is practical, and the service is consistent.',
  },
  {
    quote: 'The range feels premium without being overwhelming. It is easy to bring clients here and close decisions quickly.',
  },
];

const faqs = [
  {
    q: 'Who is PT - Paresh Textile best suited for?',
    a: 'We work with wholesalers, tailors, retailers, corporate uniform buyers, and occasionwear buyers looking for dependable sourcing in volume.',
  },
  {
    q: 'Do you sell retail or only wholesale?',
    a: 'Our focus is wholesale and bulk sourcing, while still supporting select premium individual and family purchases through the showroom.',
  },
  {
    q: 'How do I enquire quickly?',
    a: 'Use WhatsApp to send your fabric category, quantity, and timeline. We respond with the most relevant options and availability.',
  },
  {
    q: 'Can I visit the showroom before placing a bulk order?',
    a: 'Yes. Visiting the showroom is encouraged so you can compare textures, finishes, and collections in person.',
  },
];

const galleryShots = [
  { src: '/hero.png', alt: 'PT Paresh Textile showroom interior in Ahmedabad' },
  { src: '/cat-suitings.png', alt: 'Premium suiting fabrics at PT Paresh Textile' },
  { src: '/cat-shirtings.png', alt: 'Shirting fabric display at PT Paresh Textile' },
  { src: '/cat-linen.png', alt: 'Luxury linen fabric range at PT Paresh Textile' },
];

const whatsappLink =
  'https://wa.me/919327387674?text=Hi%20PT%20Paresh%20Textile%2C%20I%20would%20like%20to%20enquire%20about%20your%20wholesale%20fabric%20collections%20and%20availability.';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'PT - Paresh Textile',
  description:
    'Premium wholesale textile sourcing partner in Ahmedabad offering suiting, shirting, linen, ethnic, wedding and corporate fabrics.',
  url: 'https://paresh-textile.vercel.app',
  telephone: '+91 9327387674',
  email: 'info@pareshtextile.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Safal 6, Dudheshwar',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380004',
    addressCountry: 'IN',
  },
  areaServed: ['Ahmedabad', 'Gujarat', 'India'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00 Am',
      closes: '07:00 Pm',
    },
  ],
  sameAs: ['https://wa.me/919327387674'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <PTNavBar />
      <main className="overflow-hidden pb-28 md:pb-32 lg:pb-0">
        <section className="px-4 lg:px-6 pt-4 sm:pt-5 lg:pt-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-6 items-stretch">
            <article className="relative overflow-hidden rounded-[30px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/80 p-5 sm:p-6 lg:p-10 shadow-[0_24px_70px_var(--border)]">
              <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-[rgba(166,121,43,0.08)] blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-[var(--border)] blur-3xl" />

              <p className="section-pill mb-5 sm:mb-6 text-sm">Ahmedabad wholesale textile sourcing</p>

              <h1 className="font-headings text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[0.95] sm:leading-[0.92] tracking-tight max-w-3xl">
                Premium fabrics,
                <br />
                sourced for buyers who
                <br />
                value <span className="italic text-gold">trust.</span>
              </h1>

              <p className="mt-5 sm:mt-6 max-w-2xl text-sm lg:text-base leading-7 text-muted-foreground">
                PT - Paresh Textile is a premium wholesale textile sourcing partner in Ahmedabad. We help retailers,
                tailors, corporate buyers, and occasionwear clients source the right fabric faster with an edited,
                high-trust showroom experience.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_var(--border)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} />
                  WhatsApp Enquiry
                </a>
                <Link
                  href="/catalog"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-card/75 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-[#1A1209] hover:bg-card"
                >
                  View Catalog
                </Link>
              </div>

              <div className="relative mt-6 lg:hidden aspect-[4/3] overflow-hidden rounded-[26px] border border-white/70 dark:border-border/20 dark:border-border/20 shadow-[0_18px_50px_var(--border)]">
                <Image
                  src="/Hero.jpeg"
                  alt="Premium fabric showroom in Ahmedabad"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-card/15 px-2 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-xs">
                  Showroom gallery
                </div>
              </div>

              <ul className="mt-8 sm:mt-10 grid gap-3 sm:grid-cols-2">
                {businessHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-card/72 px-4 py-3 text-sm text-muted-foreground shadow-[0_8px_20px_var(--border)]">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  { n: '5000+', l: 'Fabric variants' },
                  { n: '30+', l: 'Years of trust' },
                  { n: '4', l: 'Core fabric Brands' },
                ].map((s) => (
                  <div key={s.l}>
                    <span className="block font-headings text-2xl lg:text-3xl font-bold text-foreground">{s.n}</span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</span>
                  </div>
                ))}
              </div>
            </article>
            
            {/* Dekstop Hero Section */}
            <aside className="hidden lg:grid gap-6">
              <div className="relative min-h-[240px] sm:min-h-[280px] overflow-hidden rounded-[28px] border border-white/70 dark:border-border/20 dark:border-border/20 shadow-[0_24px_70px_var(--border)]">
                <Image src="/Hero.jpeg" alt="Premium fabric showroom in Ahmedabad" fill priority className="object-cover" />
                <div className="absolute inset-0" />
                <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-card/15 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  Showroom gallery
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/25 bg-primary/70 p-4 text-white backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Private walkthroughs</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Schedule a visit to compare textures, colors, and finishes in person with guided sampling.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/78 p-5 sm:p-6 shadow-[0_16px_50px_var(--border)]">
                <p className="section-pill mb-5">Premium brand partnerships</p>
                <div className="grid grid-cols-2 gap-3">
                  {brandNames.map((brand) => (
                    <div
                      key={brand.name}
                      className="flex min-h-[150px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-secondary p-4 text-center font-semibold text-foreground"
                    >
                      {brand.img ? (
                        <Image
                          src={brand.img}
                          alt={`${brand.name} logo`}
                          width={140}
                          height={56}
                          className="h-28 w-auto object-contain"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 lg:px-6 py-12 sm:py-14 lg:py-20">
          <article className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
            <div>
              <p className="section-pill mb-4">Wholesale fabric partner</p>
              <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.02] max-w-sm">
                Built for sourcing, not browsing.
              </h2>
              <p className="mt-5 text-sm lg:text-base leading-7 text-muted-foreground max-w-sm">
                The homepage is designed to answer the buyer's question quickly: what can I source here, how much range
                is available, and how fast can I enquire?
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-border bg-card/88 p-5 sm:p-6 shadow-[0_10px_28px_var(--border)]">
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto rounded-[32px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/78 p-5 sm:p-6 lg:p-8 shadow-[0_16px_50px_var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
              <div>
                <p className="section-pill mb-4">Wholesale textile sourcing in Ahmedabad</p>
                <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.02] max-w-md">
                  A trusted Ahmedabad textile showroom for wholesale buyers.
                </h2>
              </div>

              <div className="space-y-5 text-sm lg:text-base leading-7 text-muted-foreground">
                <p>
                  PT - Paresh Textile helps businesses source premium wholesale fabrics in Ahmedabad with a clear focus on
                  quality, consistency, and fast decision-making. Our showroom is built for repeat buyers who need a
                  reliable partner for suiting fabric, shirting fabric, linen fabric, ethnic wear, wedding collections,
                  and corporate fabric requirements.
                </p>
                <p>
                  With 5000+ fabric variants and long-standing brand partnerships, we support retailers, tailors,
                  uniform buyers, and occasionwear clients who want a dependable textile sourcing partner in Gujarat.
                  Every collection is presented in a calm showroom setting so you can compare textures, colors,
                  weights, and finishes before placing an order.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {[
                    'Wholesale fabric sourcing for Ahmedabad and Gujarat',
                    'Premium suiting, shirting, linen, ethnic, and wedding fabrics',
                    'Corporate fabric and uniform fabric selection support',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto rounded-[32px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/75 p-5 sm:p-6 lg:p-8 shadow-[0_24px_60px_var(--border)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-8">
              <div>
                <p className="section-pill mb-4">Fabric collections</p>
                <h2 className="font-headings text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Core collections for wholesale buyers.</h2>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group">
                Ask for stock and pricing
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {categoryCards.map((cat) => (
                <Link key={cat.name} href="/catalog" className="group relative overflow-hidden rounded-[24px] min-h-[220px] sm:min-h-[260px] shadow-[0_14px_40px_var(--border)]">
                  <Image src={cat.img} alt={cat.alt ?? cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,18,9,0.02)_0%,rgba(26,18,9,0.78)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-headings text-2xl font-bold text-white block">{cat.name}</span>
                    <span className="mt-2 block text-sm leading-6 text-white/70">{cat.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20" id="testimonials">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div>
              <p className="section-pill mb-4">Testimonials</p>
              <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.02] max-w-sm">
                Trusted by repeat buyers.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground max-w-sm">
                Buyers come back when the range is dependable, the advice is direct, and the order process is simple.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {testimonials.map((item) => (
                <figure className="rounded-[24px] border border-border bg-card/88 p-5 sm:p-6 shadow-[0_10px_28px_var(--border)]">
                  <div className="flex gap-1 text-gold mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}
                  </div>
                  <blockquote className="text-sm leading-7 text-muted-foreground">“{item.quote}”</blockquote>
                  <figcaption className="mt-5">
                    <span className="block font-semibold text-foreground">{item.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-6 pb-12 sm:pb-16 lg:pb-20" id="enquiry">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 items-start">
            <div className="rounded-[28px] bg-primary p-5 sm:p-6 lg:p-8 text-white shadow-[0_20px_60px_rgba(26,18,9,0.22)]">
              <p className="section-pill mb-5">Easy WhatsApp enquiry</p>
              <h2 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.02] mb-5">
                Tell us your fabric requirement and we’ll guide the next step.
              </h2>

              <p className="text-sm leading-7 text-white/75 max-w-xl">
                Send your category, quantity, use case, and timeline. We’ll reply with the most relevant fabrics,
                showroom visit guidance, and availability.
              </p>

              <div className="mt-7 sm:mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Category: Suiting / Shirting / Linen / Ethnic',
                  'Quantity: Retail / bulk / corporate',
                  'Use case: uniform / formal / wedding / daily wear',
                  'Timeline: immediate / upcoming order',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-card/5 px-4 py-3 text-sm text-white/75">
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 mt-9 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={15} />
                Start WhatsApp Enquiry
              </a>
            </div>

            <div className="rounded-[28px] border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/78 p-5 sm:p-6 lg:p-8 shadow-[0_16px_50px_var(--border)]">
              <p className="section-pill mb-6">FAQs</p>
              <div className="space-y-0">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group border-b border-border py-4 cursor-pointer">
                    <summary className="flex items-center justify-between gap-4 text-sm font-semibold text-foreground list-none">
                      <span>{faq.q}</span>
                      <ChevronRight size={14} className="flex-shrink-0 text-muted-foreground group-open:rotate-90 transition-transform duration-200" />
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PTFooter />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PTBottomNav />
    </div>
  );
}
