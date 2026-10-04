import React from 'react';
import { 
  ArrowUpRight, 
  Flame, 
  Play, 
  Store, 
  Hotel, 
  Utensils,
  Sparkles
} from 'lucide-react';
import { CREATOR_METRICS } from '../data/portfolioData';
import { HeroImageCarousel } from './HeroImageCarousel';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenRateCard: () => void;
  onExploreVault: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenRateCard,
  onExploreVault,
}) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#051329] via-[#092244] to-[#040f20] border-b border-slate-700/60 text-white overflow-hidden"
    >
      {/* Ocean Gradient & Metallic Silver Atmospheric Lighting */}
      {/* Deep Ocean Blue Radial Ambient */}
      <div 
        className="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      
      {/* Oceanic Cobalt & Sapphire Glow */}
      <div 
        className="absolute top-1/3 -right-24 w-[40rem] h-[40rem] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Metallic Silver / Platinum Specular Highlight */}
      <div 
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-44 bg-gradient-to-b from-slate-200/10 via-cyan-300/5 to-transparent blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Ocean Caustic / Radial Vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(148,163,184,0.12),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: REALISTIC & PUNCHY VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Status Kicker with Silver & Ocean Glass Styling */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-400/30 text-cyan-300 shadow-sm backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Relatable Pinoy Comedy
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Now Booking Q2/Q3 Brand Campaigns
              </span>
            </div>

            {/* Main Headline with Silver & Cyan Shimmer */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-white leading-[1.08] text-balance">
              Where Viral Pinoy Comedy Means{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-slate-200 underline decoration-amber-400 decoration-4 underline-offset-8">
                Serious Foot Traffic
              </span>{' '}
              for Your Brand.
            </h1>

            {/* Subheading in Platinum Silver Tone */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              Meet <span className="text-white font-bold">Boss Jar</span> — the digital storyteller and comedy powerhouse trusted by{' '}
              <span className="bg-cyan-950/70 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 rounded font-bold shadow-xs">
                1.8 Million+ followers
              </span>. Delivering high-retention skits, organic product integrations, and genuine customer recall for retail, hotels, and food chains nationwide.
            </p>

            {/* Frosted Ocean & Silver Metallic Metric Strip */}
            <div className="w-full grid grid-cols-3 gap-4 py-4 border border-slate-300/20 bg-slate-950/60 backdrop-blur-xl px-5 rounded-2xl shadow-2xl">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-white tabular-nums tracking-tight">
                  {CREATOR_METRICS.followers}
                </div>
                <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  Social Followers
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-cyan-400 tabular-nums tracking-tight">
                  {CREATOR_METRICS.avgViewsPerHit}
                </div>
                <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  Avg Views / Hit Skit
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-amber-400 tabular-nums tracking-tight">
                  {CREATOR_METRICS.engagementRate}
                </div>
                <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  Avg. Engagement
                </div>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={onOpenBooking}
                type="button"
                className="min-h-[48px] px-7 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-150 shadow-lg shadow-amber-400/25 border border-amber-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Book a Brand Collab</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onExploreVault}
                type="button"
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-400/30 hover:border-slate-300/60 shadow-sm backdrop-blur-md transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Explore Comedy Vault</span>
              </button>

              <button
                onClick={onOpenRateCard}
                type="button"
                className="text-xs font-bold text-slate-300 hover:text-cyan-300 underline underline-offset-4 transition-colors py-2 flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>View 2026 Deliverables & Rate Card →</span>
              </button>
            </div>

            {/* Targeted Enterprise Niches */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
              <span className="font-bold text-white uppercase tracking-wider">Proven In:</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Store className="w-4 h-4 text-cyan-400" /> Retail & Convenience
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Hotel className="w-4 h-4 text-amber-400" /> Hotels & Resorts
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Utensils className="w-4 h-4 text-cyan-400" /> Food & Dining
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: HERO CAROUSEL COMPONENT */}
          <div className="lg:col-span-5 relative">
            <HeroImageCarousel />
          </div>

        </div>
      </div>
    </section>
  );
};
