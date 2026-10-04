import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Download, 
  Sparkles, 
  Copy, 
  CheckCircle2, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CREATOR_METRICS } from '../data/portfolioData';

interface RateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

export const RateCardModal: React.FC<RateCardModalProps> = ({ 
  isOpen, 
  onClose, 
  onSelectTier 
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const packages = [
    {
      name: 'Standard Viral Skit',
      bracket: '₱150,000 - ₱220,000',
      description: 'Ideal for product launches, F&B menu intros, and mobile app features.',
      features: [
        '1 Dedicated TikTok Skit (60-90s)',
        'Cross-posted to Facebook Reels (950K fans)',
        '3 High-Engagement Instagram Stories',
        'Natural product placement in primary punchline',
        'Full raw footage license for 60 days paid ads',
      ],
      popular: false,
      badge: 'Quick Launch',
    },
    {
      name: 'Retail & Store Takeover',
      bracket: '₱280,000 - ₱380,000',
      description: 'Built for convenience retail, restaurants, and shopping outlets needing foot traffic.',
      features: [
        'On-site branch filming with customer interactions',
        '2 Dedicated Video Reels (Story Part 1 & 2)',
        'Staff comedic banter & menu item showdown',
        'Pin location tag & promo coupon integration',
        'Guaranteed minimum 3M aggregate organic impressions',
        'Event appearance / branch ribbon cutting add-on',
      ],
      popular: true,
      badge: 'Best For Foot Traffic',
    },
    {
      name: 'Resort & Tourism Series',
      bracket: '₱450,000 - ₱650,000',
      description: 'Designed for hotels, luxury eco-resorts, and regional tourism boards.',
      features: [
        'Weekend staycation full production package',
        '1 Extended YouTube Vlog (8-12 mins 4K)',
        '3 Cut-down TikTok & IG Reels highlighting amenities',
        'Dining and scenic attraction humor storylines',
        'Direct booking link in bio + promo voucher code',
        'Drone cinematic photography b-roll inclusion',
      ],
      popular: false,
      badge: 'Hospitality Special',
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '#collab');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const element = document.createElement('a');
      const file = new Blob([
        `BOSS JAR MEDIA KIT & RATE CARD 2026\nFollowers: 1.8M+\nAvg Views / Hit: 1.2M+\nEngagement: 9.4%\nContact: bookings@bossjar.ph / +63 917 888 2677\nDirect Link: ${window.location.origin}`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Boss_Jar_Media_Kit_2026.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-red-600" />
              Official 2026 Media Kit
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
              Campaign Packages & Deliverables
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Transparent rate estimates for direct brands and creative media agencies.
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 transition-all shadow-2xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 bg-white">
          
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <div className="text-xl sm:text-2xl font-heading font-black text-slate-950 tabular-nums">
                {CREATOR_METRICS.followers}
              </div>
              <div className="text-[11px] text-slate-600 uppercase font-bold">Total Audience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-heading font-black text-red-600 tabular-nums">
                {CREATOR_METRICS.avgViewsPerHit}
              </div>
              <div className="text-[11px] text-slate-600 uppercase font-bold">Avg Views / Hit</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-heading font-black text-amber-600 tabular-nums">
                {CREATOR_METRICS.engagementRate}
              </div>
              <div className="text-[11px] text-slate-600 uppercase font-bold">Avg Engagement</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-heading font-black text-slate-950 tabular-nums">
                {CREATOR_METRICS.brandPartners}
              </div>
              <div className="text-[11px] text-slate-600 uppercase font-bold">Brands Trusted</div>
            </div>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-6 rounded-2xl border flex flex-col justify-between space-y-6 relative ${
                  pkg.popular
                    ? 'bg-amber-50/50 border-2 border-amber-400 shadow-md'
                    : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-heading font-bold text-[10px] uppercase tracking-wider py-1 px-3 rounded-full shadow-xs border border-amber-500/40">
                    Most Requested by Retailers
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      {pkg.badge}
                    </span>
                    <Zap className={`w-4 h-4 ${pkg.popular ? 'text-amber-600' : 'text-red-600'}`} />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-950">
                    {pkg.name}
                  </h3>

                  <div className="text-xl font-heading font-extrabold text-red-600 tabular-nums">
                    {pkg.bracket}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectTier(pkg.name);
                  }}
                  type="button"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    pkg.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs border border-amber-500/50'
                      : 'bg-slate-900 hover:bg-black text-white'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>

          {/* Compliance & Custom Scope Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              All packages include script approval rounds, sound copyright clearance, and analytics wrap-up report.
            </span>
            <span className="text-slate-500 font-mono">Rates subject to standard VAT & logistics</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              type="button"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-slate-800 border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <Download className="w-4 h-4 text-red-600" />
              <span>{downloading ? 'Preparing PDF...' : 'Download Rate Sheet'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              type="button"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span>{copied ? 'Link Copied!' : 'Copy Share Link'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectTier('Custom Enterprise Package');
            }}
            type="button"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xs"
          >
            Custom Enterprise Quote
          </button>
        </div>

      </div>
    </div>
  );
};
