import PTNavBar from '@/components/PTNavBar';
import PTBottomNav from '@/components/PTBottomNav';
import PTFooter from '@/components/PTFooter';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Sourcing – PT - Paresh Textile | Wholesale Fabrics',
  description: 'Get in touch with PT - Paresh Textile in Ahmedabad for bulk fabric sourcing, showroom visits, or queries. Enquire via WhatsApp or our contact form.',
  alternates: {
    canonical: 'https://pareshtextile.com/contact',
  },
  openGraph: {
    type: 'website',
    title: 'Contact Sourcing – PT - Paresh Textile | Wholesale Fabrics',
    description: 'Get in touch with PT - Paresh Textile in Ahmedabad for bulk fabric sourcing, showroom visits, or queries. Enquire via WhatsApp or our contact form.',
    url: 'https://pareshtextile.com/contact',
    siteName: 'PT - Paresh Textile',
    images: [
      {
        url: 'https://pareshtextile.com/hero.png',
        width: 1200,
        height: 630,
        alt: 'Contact PT - Paresh Textile',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sourcing – PT - Paresh Textile | Wholesale Fabrics',
    description: 'Get in touch with PT - Paresh Textile in Ahmedabad for bulk fabric sourcing, showroom visits, or queries. Enquire via WhatsApp or our contact form.',
    images: ['https://pareshtextile.com/hero.png'],
  },
};

export default function ContactPage() {
  const whatsappLink =
    'https://wa.me/919327387674?text=Hi%20Paresh%20Textile%2C%20I%20would%20like%20to%20enquire%20about%20your%20fabrics.';

  return (
    <div className="min-h-screen bg-transparent">
      <PTNavBar />

      <main className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="section-pill mb-4">Get in touch</p>
            <h1 className="font-headings text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">Contact Paresh Textile</h1>
            <p className="text-sm lg:text-base text-muted-foreground leading-7 mb-6">Reach out for showroom visits, bulk enquiries, pricing, and custom sourcing. We typically respond within one business day for wholesale enquiries.</p>

            <div className="rounded-[18px] border border-border bg-card/90 p-6 mb-6">
              <h3 className="font-semibold text-foreground mb-3">Contact details</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><strong>Address:</strong> Safal 6 , Dudheshwar, Ahmedabad, Gujarat 380004</li>
                <li><strong>Phone:</strong> <a href="tel:+919327387674" className="text-foreground">+91 9327387674</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@pareshtextile.com" className="text-foreground">info@pareshtextile.com</a></li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/pt__1994/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">@pt__1994</a></li>
                <li><strong>Hours:</strong> Mon–Sat 9:00 AM – 7:00 PM</li>
              </ul>
            </div>

            <div className="rounded-[18px] border border-border bg-card/90 p-6">
              <h3 className="font-semibold text-foreground mb-3">Quick enquiry (WhatsApp)</h3>
              <p className="text-sm text-muted-foreground mb-4">Send your fabric category, quantity and timeline and we'll reply with options and availability.</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white">Start WhatsApp Enquiry</a>
            </div>
          </div>

          <div>
            <div className="rounded-[18px] border border-border bg-card/90 p-6 mb-6">
              <h3 className="font-semibold text-foreground mb-3">Send us a message</h3>
              <form className="space-y-3">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Name</label>
                  <input className="w-full rounded-md border border-border px-3 py-2" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Company / Role</label>
                  <input className="w-full rounded-md border border-border px-3 py-2" placeholder="Company or role" />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Phone or WhatsApp</label>
                  <input className="w-full rounded-md border border-border px-3 py-2" placeholder="+91 9xxxxxxxxx" />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">Message</label>
                  <textarea className="w-full rounded-md border border-border px-3 py-2 h-28" placeholder="Tell us what you need (category, quantity, timeline)" />
                </div>
                <div className="flex gap-3">
                  <button type="button" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">Send message</button>
                  <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/75 px-5 py-3 text-sm font-semibold text-foreground">Back to home</Link>
                </div>
              </form>
            </div>

            <div className="rounded-[18px] border border-border bg-card/90 p-6">
              <h3 className="font-semibold text-foreground mb-3">Find us on map</h3>
              <div className="w-full aspect-[16/9] bg-[#F5F2EE] rounded-md overflow-hidden">
                <iframe
                  title="PT - Paresh Textile location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.7719994294616!2d72.58167507520074!3d23.046493979156942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85238eb2b46b%3A0x7c6963785dfb5cd9!2sParesh%20Textile!5e1!3m2!1sen!2sin!4v1783948932901!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0 w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12" />
      </main>

      <PTFooter />
      <PTBottomNav />
    </div>
  );
}
