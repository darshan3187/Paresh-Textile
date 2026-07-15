'use client';
import { Search, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PTNavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme from localStorage, defaulting to 'light' (Classic)
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/82 backdrop-blur-xl border-b border-border shadow-[0_10px_30px_rgba(26,18,9,0.06)]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-18 py-2">

          {/* Brand / Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 sm:static sm:left-auto sm:translate-x-0 flex items-center gap-3 flex-shrink-0 group z-10"
          >
              <img src="/PT_1.png" alt="Paresh Textile Logo" className="h-15 w-auto sm:h-18 dark:invert transition-all duration-300" />
          </Link>

          {/* Right Side: Links & Theme Toggle */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
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
                        ? 'text-foreground bg-card/90 shadow-sm font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-full border border-border bg-card/60 hover:bg-card hover:border-foreground/30 transition-all text-foreground cursor-pointer z-10 flex items-center justify-center shadow-xs"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <span className="flex items-center gap-2 text-xs font-semibold px-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                  </svg>
                  <span className="hidden sm:inline text-muted-foreground/80 font-medium">Contrast</span>
                </span>
              ) : (
                <span className="flex items-center gap-2 text-xs font-semibold px-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/>
                    <path d="m19.07 4.93-1.41 1.41"/>
                  </svg>
                  <span className="hidden sm:inline text-muted-foreground/80 font-medium">Classic</span>
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
