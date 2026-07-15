'use client';
import { Home, Grid2X2, Info, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PTBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '/' },
    { icon: <Grid2X2 size={20} />, label: 'Catalog', href: '/catalog' },
    { icon: <Info size={20} />, label: 'About', href: '/about' },
    { icon: <Phone size={20} />, label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed bottom-2 left-2 right-2 z-50 rounded-2xl border border-white/70 dark:border-border/20 dark:border-border/20 bg-card/88 backdrop-blur-xl shadow-[0_12px_30px_var(--border)] lg:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item, i) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

          return (
            <Link
              key={i}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl transition-colors ${
                isActive
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.icon}
              <span className="font-body text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
