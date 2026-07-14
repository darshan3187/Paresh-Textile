'use client';
import { Search, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PTNavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/82 backdrop-blur-xl border-b border-white/70 shadow-[0_10px_30px_rgba(26,18,9,0.06)]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-18 py-2">

          {/* Brand / Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 sm:static sm:left-auto sm:translate-x-0 flex items-center gap-3 flex-shrink-0 group"
          >
              <img src="/PT_1.png" alt="Paresh Textile Logo" className="h-15 w-auto sm:h-18" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-1">
            {[
              { label: 'Home', href: '/' },
              { label: 'Catalog', href: '/catalog' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#1A1209] bg-white/90 shadow-sm font-semibold'
                      : 'text-[#6F655B] hover:text-[#1A1209] hover:bg-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
