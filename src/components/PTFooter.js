import Link from 'next/link';

export default function PTFooter() {
  return (
    <footer className="px-4 lg:px-6 pb-28 md:pb-32 lg:pb-8">
      <div className="max-w-7xl mx-auto rounded-[28px] bg-[#110D07] px-5 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-8 text-white shadow-[0_24px_70px_rgba(17,13,7,0.18)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="mb-5">
              <span className="font-headings text-3xl font-bold block">PT</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mt-0.5">Paresh Textile</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              Premium wholesale textile sourcing in Ahmedabad for retailers, tailors, corporate buyers, and families who want trusted fabric selection and consistent supply.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/30 mb-5">Pages</p>
            <ul className="space-y-3">
              {[{ l: 'Home', h: '/' }, { l: 'Catalog', h: '/catalog' }, { l: 'About Us', h: '/about' }, { l: 'Contact', h: '/contact' }].map((item) => (
                <li key={item.h}>
                  <Link href={item.h} className="text-sm text-white/55 hover:text-primary-foreground transition-colors">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/30 mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="text-sm text-white/55">Safal 6 , Dudheshwar, Ahmedabad, Gujarat 380004</li>
              <li><a href="tel:+919327387674" className="text-sm text-white/55 hover:text-primary-foreground transition-colors">+91 9327387674</a></li>
              <li><a href="mailto:info@pareshtextile.com" className="text-sm text-white/55 hover:text-primary-foreground transition-colors">info@pareshtextile.com</a></li>
              <li>
                <a
                  href="https://www.instagram.com/pt__1994/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-primary-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>@pt__1994</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-white/20">© {new Date().getFullYear()} PT - Paresh Textile. All rights reserved.</p>
          <p className="text-[11px] text-white/20">Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
