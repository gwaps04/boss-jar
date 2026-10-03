import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Flame, 
  Play, 
  TrendingUp, 
  Users, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  Store, 
  Hotel, 
  Utensils 
} from 'lucide-react';
import { CREATOR_METRICS } from '../data/portfolioData';

// Direct Vite asset import: bundles file correctly in Vercel & Production builds
import defaultHeroImg from '../assets/hero section image.jpg';

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
  const [heroImgSrc, setHeroImgSrc] = useState<string>(defaultHeroImg);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white via-[#f8f9fa] to-white border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle, clean architectural grid lines instead of AI glow blobs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HIGH-ENERGY VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Status Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700">
                <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                #1 Viral Relatable Comedy
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

            {/* Proof Metric Strip (Tabular Numerals & Zero-Pill Design) */}
            <div className="w-full grid grid-cols-3 gap-4 py-4 border-y border-slate-200 bg-white/70 px-4 rounded-xl shadow-2xs">
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
                  {CREATOR_METRICS.totalViews}
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Total Impressions
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

          {/* RIGHT COLUMN: HERO VISUAL (Boss Jar attached hero section image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[430px] lg:max-w-none">
              
              {/* Clean Framed Card (No cheesy AI glows) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 bg-white shadow-xl">
                
                {/* Hero Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 group">
                  {!heroImgFailed ? (
                    <img
                      src={heroImgSrc}
                      alt="Boss Jar in front of Mayon Volcano and 7-Eleven"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      onError={() => {
                        // Fallback: Try public static path
                        if (heroImgSrc !== '/hero-image.jpg') {
                          setHeroImgSrc('/hero-image.jpg');
                        } else {
                          setHeroImgFailed(true);
                        }
                      }}
                    />
                  ) : (
                    /* High-Fidelity CSS Styled Fallback Canvas */
                    <div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-950 relative text-white">
                      <div className="relative my-auto flex flex-col items-center text-center py-10">
                        <div className="w-24 h-24 rounded-full bg-red-600 border-4 border-amber-400 flex items-center justify-center mb-3 shadow-lg">
                          <span className="font-heading font-black text-2xl text-white">BJ</span>
                        </div>
                        <h2 className="text-2xl font-heading font-extrabold text-white">
                          BOSS JAR
                        </h2>
                        <p className="text-xs text-slate-300 mt-1 max-w-xs">
                          Filipino Comedy Influencer & Brand Partner
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Top-Right Verified Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">Verified Creator</span>
                  </div>

                  {/* Top-Left Location Tag */}
                  <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-white shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Legazpi City · Mayon Volcano
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-4 rounded-xl bg-slate-950/95 backdrop-blur-md border border-white/10 text-white shadow-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                            Real Influence, Real Conversion
                          </div>
                          <div className="text-sm font-heading font-bold text-white">
                            Boss Jar Brand Impact
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-red-600/30 text-red-300 px-2.5 py-0.5 rounded text-xs font-bold tabular-nums border border-red-500/30">
                          <TrendingUp className="w-3.5 h-3.5" />
                          +34% Foot Traffic
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-amber-400" />
                          <span>1.8M Active Followers</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-red-400" />
                          <span>450M+ Organic Views</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Card Footer */}
                <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Brand-Safe Commercial Storyteller
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">Media Kit 2026</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
