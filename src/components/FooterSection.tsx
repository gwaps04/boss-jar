import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';

interface FooterSectionProps {
  onOpenRateCard: () => void;
  onOpenBooking: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ 
  onOpenRateCard, 
  onOpenBooking 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Comedy Vault', href: '#comedy-vault' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'About the Boss', href: '#about-boss' },
    { name: 'Collab With Me', href: '#collab' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#051329] via-[#040e1f] to-[#020710] border-t border-cyan-950/60 pt-16 pb-12 text-slate-300 text-xs relative overflow-hidden">
      {/* Ambient Ocean Lighting in Footer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0">
                <img
                  src="/boss-jar-logo.png"
                  alt="Boss Jar Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/logo.svg';
                  }}
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                BOSS JAR
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              The Philippines' premier relatable comedy creator and viral brand storytelling partner. Turning everyday street culture into enterprise-grade marketing impact.
            </p>

            <div className="flex items-center gap-2 text-cyan-300 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Brand-Safe Organic Content & Registered Talent</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 text-slate-300 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Platforms & Management */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Official Channels
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-white">
                <div className="text-slate-200 font-bold">TikTok</div>
                <div className="text-cyan-400 font-mono font-bold">1.8M Followers</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-white">
                <div className="text-slate-200 font-bold">Facebook</div>
                <div className="text-amber-400 font-mono font-bold">950K Community</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-white">
                <div className="text-slate-200 font-bold">YouTube</div>
                <div className="text-slate-300 font-mono font-bold">620K Subscribers</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-white">
                <div className="text-slate-200 font-bold">Instagram</div>
                <div className="text-slate-300 font-mono font-bold">410K Followers</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all border border-amber-300 shadow-sm"
              >
                Book Collab
              </button>
              <button
                onClick={onOpenRateCard}
                type="button"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white font-heading font-semibold text-xs hover:bg-slate-700 transition-all border border-slate-700 shadow-2xs"
              >
                Media Kit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Boss Jar Media Management. All rights reserved. Built for retail, hospitality & F&B campaigns.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> bookings@bossjar.ph
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center border border-slate-700 transition-colors shadow-2xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
