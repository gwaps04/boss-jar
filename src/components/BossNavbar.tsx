import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface BossNavbarProps {
  onOpenRateCard: () => void;
  onOpenBooking: () => void;
}

export const BossNavbar: React.FC<BossNavbarProps> = ({ onOpenRateCard, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoadFailed, setLogoLoadFailed] = useState(false);

  // Monitor scroll for subtle translucent backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Comedy Vault', href: '#comedy-vault' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'About the Boss', href: '#about-boss' },
    { name: 'Collab With Me', href: '#collab' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* ZONE 1: BRAND LOGO (References local src/assets folder as instructed) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000] rounded-lg p-1"
            aria-label="Boss Jar Official Portfolio Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform duration-200 group-hover:scale-105">
              {/* Local asset folder reference with graceful vector fallback */}
              {!logoLoadFailed ? (
                <img
                  src="/src/assets/boss jar navigation logo.png"
                  alt="Boss Jar Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,26,53,0.5)]"
                  onError={() => {
                    // Fallback to SVG asset in src/assets
                    setLogoLoadFailed(true);
                  }}
                />
              ) : (
                <img
                  src="/src/assets/logo.svg"
                  alt="Boss Jar Logo Vector Fallback"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,26,53,0.5)]"
                />
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none flex items-center gap-1.5">
                BOSS JAR
                <span className="inline-block w-2 h-2 rounded-full bg-[#ff1a35] animate-pulse"></span>
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-zinc-400">
                1.8M Followers · Comedy Boss
              </span>
            </div>
          </a>

          {/* ZONE 2: 5 CLEAN TEXT NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors duration-150 relative py-1 focus:outline-none focus-visible:text-[#ffd000] group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff1a35] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* ZONE 3: PRIMARY ACTIONS */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRateCard}
              type="button"
              className="text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffd000]" />
              <span className="whitespace-nowrap">Media Kit</span>
            </button>

            <button
              onClick={onOpenBooking}
              type="button"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#ffd000] hover:bg-[#e6bc00] active:scale-95 transition-all duration-150 rounded-lg shadow-[0_0_15px_rgba(255,208,0,0.3)] hover:shadow-[0_0_20px_rgba(255,208,0,0.5)] flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <span className="whitespace-nowrap">Collab With Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON (Touch target >= 44px) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff1a35]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE FLYOUT DRAWER WITH BACKDROP LOCK */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#0b0c10]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 border-b border-white/10 overflow-y-auto">
          <div className="space-y-4 pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xl font-heading font-bold text-white hover:text-[#ffd000] transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 pb-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRateCard();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/15 text-sm font-semibold text-white bg-zinc-900"
            >
              <Sparkles className="w-4 h-4 text-[#ffd000]" />
              View 2026 Media Kit & Rate Card
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#ffd000] shadow-lg shadow-yellow-500/20"
            >
              Collab With Me Now
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
