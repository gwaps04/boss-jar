import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

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

  // Monitor scroll for desktop/mobile header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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

    // Give browser a moment to close drawer then smooth scroll with header offset
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <React.Fragment>
      {/* PRIMARY FIXED HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
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
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 transition-transform duration-200 group-hover:scale-105">
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

            {/* ZONE 2: DESKTOP NAVIGATION LINKS */}
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

            {/* ZONE 3: DESKTOP PRIMARY ACTIONS */}
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
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-label="Open mobile navigation menu"
                className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-colors focus:outline-none ${
                  isScrolled
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-900'
                    : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-white'
                }`}
              >
                <Menu className="w-5 h-5 text-amber-400" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE OVERLAY & NAVIGATION DRAWER (z-[70] for foolproof touch isolation) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[70] flex flex-col bg-slate-950 text-white animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Bar inside Drawer with Logo and Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-[#051329]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 shrink-0">
                <img
                  src={logoSrc}
                  alt="Boss Jar Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  BOSS JAR
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600"></span>
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Navigation Menu
                </div>
              </div>
            </div>

            {/* Prominent Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-red-400" />
            </button>
          </div>

          {/* Navigation Links Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">
              Browse Sections
            </div>

            <nav className="space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 active:bg-slate-800 border border-slate-800/60 text-base font-heading font-bold text-slate-100 hover:text-amber-400 transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-5 border-t border-slate-800/90 bg-[#051329]/90 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-heading font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] shadow-md transition-all border border-amber-300"
            >
              <span>Collab With Me Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRateCard();
              }}
              type="button"
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>View 2026 Media Kit & Rate Card</span>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
