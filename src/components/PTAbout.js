import Image from 'next/image';
import Link from 'next/link';
import { SHOP_REELS } from '@/data/catalogData';
import InstagramReelCard from './InstagramReelCard';

export default function PTAbout() {
  return (
    <section className="px-4 lg:px-6 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-pill mb-4">About PT</p>
            <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Paresh Textile — trusted wholesale fabric partners in Ahmedabad
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground leading-7 mb-4">
              For over 30 years we have helped retailers, tailors, corporate buyers and event suppliers source premium
              fabrics in reliable volumes. Our focus is simple: consistent quality, curated collections, and prompt
              commercial support so your buying decisions are fast and dependable.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mt-6">
              <div className="rounded-2xl border border-border bg-secondary px-4 py-3">
                <h3 className="font-semibold text-foreground">Wholesale-first</h3>
                <p className="mt-1 text-sm text-muted-foreground">Volume-friendly prices, repeatable lead times.</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary px-4 py-3">
                <h3 className="font-semibold text-foreground">Curated collection</h3>
                <p className="mt-1 text-sm text-muted-foreground">Edited ranges that save you time and risk.</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary px-4 py-3">
                <h3 className="font-semibold text-foreground">Showroom support</h3>
                <p className="mt-1 text-sm text-muted-foreground">Guided sampling and selection for big orders.</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary px-4 py-3">
                <h3 className="font-semibold text-foreground">Trusted partners</h3>
                <p className="mt-1 text-sm text-muted-foreground">Longstanding mill and brand relationships.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
              >
                Browse Collections
              </Link>
              <a
                href="https://wa.me/919327387674"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/75 px-6 py-3 text-sm font-semibold text-foreground"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="rounded-[18px] overflow-hidden border border-white/70 dark:border-border/20 dark:border-border/20 shadow-[0_18px_50px_var(--border)]">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/hero_about.webp" alt="Paresh Textile showroom" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-5 bg-card">
                <p className="text-sm text-muted-foreground">
                  Visit our Ahmedabad showroom for guided sampling and bulk selection. We help buyers compare textures,
                  finishes and weights before placing orders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-7xl mx-auto">
            <p className="section-pill mb-4">Our Team</p>
            <h2 className="font-headings text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              People who run the sourcing and showroom
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Paresh Rajgor',
                  role: 'Founder & Head of Sourcing',
                  bio: '30+ years in textile sourcing and mill partnerships.',
                  image: '/paresh_rajgor.webp',
                },
                {
                  name: 'Natvar Rajgor',
                  role: 'Co-founder & Sales Manager',
                  image: '/natvarlal_rajgor.webp',
                },
                {
                  name: 'Parbhuji Purohit',
                  role: 'Working Partner & Sales Manager',
                  image: '/parbhuji_purohit.webp',
                },
                {
                  name: 'Dipak Rajgor',
                  role: 'Account Manager',
                  image: '/dipak_rajgor.webp',
                },
                {
                  name: 'Hasmukh Prajapati',
                  role: 'Sales Agent',
                  image: '/team-placeholder.webp',
                },
                {
                  name: 'Narendra Rajgor',
                  role: 'Office Worker',
                  image: '/team-placeholder.webp',
                },
              ].map((person) => (
                <div
                  key={person.name}
                  className="overflow-hidden rounded-[18px] border border-border bg-card/90 shadow-[0_12px_30px_var(--border)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full bg-secondary">
                    <Image src={person.image} alt={person.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="font-semibold text-foreground text-base sm:text-lg">{person.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{person.role}</div>
                    {person.bio ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{person.bio}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card/78 rounded-[24px] border border-border p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <div className="font-headings text-3xl font-bold text-foreground">5000+</div>
              <div className="text-sm text-muted-foreground mt-1">Fabric variants</div>
            </div>
            <div className="text-center">
              <div className="font-headings text-3xl font-bold text-foreground">30+</div>
              <div className="text-sm text-muted-foreground mt-1">Years of trust</div>
            </div>
            <div className="text-center">
              <div className="font-headings text-3xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground mt-1">Core fabric brands</div>
            </div>
          </div>
        </div>

        {/* ─── Instagram Showcase Section ─── */}
        <div className="border-t border-border/40 pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="section-pill mb-3">Instagram Showcase</p>
              <h2 className="font-headings text-2xl sm:text-3xl font-bold text-foreground">
                Reels From Our Shop
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Take a look at fabric quality, designs, and collections directly from our showroom.
              </p>
            </div>
            <a
              href="https://www.instagram.com/pt__1994/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/75 px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-[#1A1209] hover:bg-card shadow-sm"
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
              Follow @pt__1994
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-6 justify-center">
            {SHOP_REELS.map((reel) => (
              <div
                key={reel.id}
                className="group relative overflow-hidden rounded-[24px] border border-border bg-card p-2.5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <InstagramReelCard reel={reel} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
