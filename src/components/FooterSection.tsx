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
    <footer className="bg-[#08090d] border-t border-white/10 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0">
                <img
                  src="/src/assets/logo.svg"
                  alt="Boss Jar Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(255,26,53,0.4)]"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                BOSS JAR
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The Philippines' premier relatable comedy creator and viral brand storytelling partner. Turning everyday street culture into enterprise-grade marketing impact.
            </p>

            <div className="flex items-center gap-2 text-zinc-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#ffd000]" />
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
                    className="hover:text-white transition-colors"
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
              Official Platforms
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                <div className="text-white font-bold">TikTok</div>
                <div className="text-[#ffd000] font-mono">1.8M Followers</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                <div className="text-white font-bold">Facebook</div>
                <div className="text-zinc-400 font-mono">950K Community</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                <div className="text-white font-bold">YouTube</div>
                <div className="text-zinc-400 font-mono">620K Subscribers</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                <div className="text-white font-bold">Instagram</div>
                <div className="text-zinc-400 font-mono">410K Followers</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-4 py-2 rounded-lg bg-[#ffd000] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#e6bc00] transition-all"
              >
                Book Collab
              </button>
              <button
                onClick={onOpenRateCard}
                type="button"
                className="px-4 py-2 rounded-lg bg-zinc-800 text-white font-heading font-semibold text-xs hover:bg-zinc-700 transition-all border border-white/10"
              >
                Media Kit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Boss Jar Media Management. All rights reserved. Built for retail, hospitality & F&B campaigns.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-400">
              <Mail className="w-3.5 h-3.5" /> bookings@bossjar.ph
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center border border-white/10 transition-colors"
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
