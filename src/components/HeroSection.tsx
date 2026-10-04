import React from 'react';
import { 
  ArrowUpRight, 
  Flame, 
  Play, 
  Store, 
  Hotel, 
  Utensils 
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
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#f8fafc] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: REALISTIC & PUNCHY VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Status Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-100/70 border border-red-200 text-red-700">
                <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                Relatable Pinoy Comedy
              </span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className="text-slate-700 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Now Booking Q2/Q3 Brand Campaigns
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-slate-950 leading-[1.08] text-balance">
              Where Viral Pinoy Comedy Means{' '}
              <span className="text-red-600 underline decoration-amber-400 decoration-4 underline-offset-6">
                Serious Foot Traffic
              </span>{' '}
              for Your Brand.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Meet <span className="text-slate-950 font-bold">Boss Jar</span> — the digital storyteller and comedy powerhouse trusted by <span className="bg-amber-100 text-slate-950 px-1.5 py-0.5 rounded font-bold">1.8 Million+ followers</span>. Delivering high-retention skits, organic product integrations, and genuine customer recall for retail, hotels, and food chains nationwide.
            </p>

            {/* Realistic Creator Metric Strip (450M+ Removed as requested) */}
            <div className="w-full grid grid-cols-3 gap-4 py-4 border-y border-slate-200 bg-white px-5 rounded-xl shadow-2xs">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-slate-950 tabular-nums">
                  {CREATOR_METRICS.followers}
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Social Followers
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-red-600 tabular-nums">
                  {CREATOR_METRICS.avgViewsPerHit}
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Avg Views / Hit Skit
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-amber-600 tabular-nums">
                  {CREATOR_METRICS.engagementRate}
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Avg. Engagement
                </div>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={onOpenBooking}
                type="button"
                className="min-h-[48px] px-7 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-150 shadow-sm border border-amber-500/50 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Book a Brand Collab</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onExploreVault}
                type="button"
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-2xs transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <Play className="w-4 h-4 text-red-600 fill-red-600" />
                <span>Explore Comedy Vault</span>
              </button>

              <button
                onClick={onOpenRateCard}
                type="button"
                className="text-xs font-bold text-slate-600 hover:text-red-600 underline underline-offset-4 transition-colors py-2"
              >
                View 2026 Deliverables & Rate Card →
              </button>
            </div>

            {/* Targeted Enterprise Niches */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
              <span className="font-bold text-slate-900 uppercase tracking-wider">Proven In:</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <Store className="w-4 h-4 text-amber-600" /> Retail & Convenience
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <Hotel className="w-4 h-4 text-red-600" /> Hotels & Resorts
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <Utensils className="w-4 h-4 text-amber-600" /> Food & Dining
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
