import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

// Standard Vite Asset Imports: Guaranteed to bundle in Vercel & Production builds
import defaultNavLogo from '../assets/boss jar navigation logo.png';

interface BossNavbarProps {
  onOpenRateCard: () => void;
  onOpenBooking: () => void;
}

export const BossNavbar: React.FC<BossNavbarProps> = ({ onOpenRateCard, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>(defaultNavLogo);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3 text-slate-900'
          : 'bg-[#051329]/85 backdrop-blur-md border-b border-cyan-900/40 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* ZONE 1: BRAND LOGO */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg p-1"
            aria-label="Boss Jar Official Portfolio Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform duration-200 group-hover:scale-105">
              <img
                src={logoSrc}
                alt="Boss Jar Official Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-sm"
                onError={() => {
                  if (logoSrc !== '/boss-jar-logo.png') {
                    setLogoSrc('/boss-jar-logo.png');
                  } else {
                    setLogoSrc('/src/assets/logo.svg');
                  }
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className={`font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-none flex items-center gap-1.5 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                BOSS JAR
                <span className="inline-block w-2 h-2 rounded-full bg-red-600"></span>
              </span>
              <span className={`text-[11px] font-semibold tracking-wider uppercase mt-0.5 ${
                isScrolled ? 'text-slate-500' : 'text-slate-400'
              }`}>
                1.8M Followers · Comedy Creator
              </span>
            </div>
          </a>

          {/* ZONE 2: 5 CLEAN TEXT NAVIGATION LINKS */}
          <nav className={`hidden lg:flex items-center gap-7 text-sm font-semibold ${
            isScrolled ? 'text-slate-700' : 'text-slate-200'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-150 relative py-1 focus:outline-none group ${
                  isScrolled ? 'hover:text-red-600' : 'hover:text-amber-400'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-red-600' : 'bg-amber-400'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* ZONE 3: PRIMARY ACTIONS */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRateCard}
              type="button"
              className={`text-xs font-bold px-3.5 py-2.5 rounded-lg border transition-all flex items-center gap-1.5 shadow-xs focus:outline-none ${
                isScrolled
                  ? 'text-slate-800 hover:text-black border-slate-300 hover:border-slate-400 bg-white'
                  : 'text-white hover:text-amber-400 border-slate-700 hover:border-slate-600 bg-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="whitespace-nowrap">Media Kit</span>
            </button>

            <button
              onClick={onOpenBooking}
              type="button"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-150 rounded-lg shadow-sm border border-amber-400 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span className="whitespace-nowrap">Collab With Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON (Touch target >= 44px) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`w-11 h-11 flex items-center justify-center rounded-lg border focus:outline-none ${
                isScrolled
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-white'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE FLYOUT DRAWER WITH BACKDROP LOCK */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-slate-950/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 border-b border-slate-800 shadow-2xl overflow-y-auto text-white">
          <div className="space-y-4 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xl font-heading font-bold text-white hover:text-amber-400 transition-colors py-2 border-b border-slate-800"
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
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 text-sm font-bold text-white bg-slate-900 shadow-xs hover:border-amber-400"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              View 2026 Media Kit & Rate Card
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-sm border border-amber-400"
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
