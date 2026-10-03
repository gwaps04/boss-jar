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
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows (Crimson and Deep Charcoal) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#ff1a35]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-[450px] h-[350px] bg-[#ffd000]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HIGH-ENERGY VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Status Kicker (Anti-slop: clean unboxed metadata with dot separator) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#ff1a35]/20 border border-[#ff1a35]/40 text-[#ff4d64]">
                <Flame className="w-3.5 h-3.5 text-[#ff1a35] fill-[#ff1a35]" />
                #1 Viral Relatable Comedy
              </span>
              <span className="text-zinc-500" aria-hidden="true">·</span>
              <span className="text-zinc-300 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Now Booking Q2/Q3 Brand Campaigns
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight text-white leading-[1.08] text-balance">
              Where Viral Pinoy Comedy Means{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd000] via-[#ff9e00] to-[#ff1a35]">
                Serious Foot Traffic
              </span>{' '}
              for Your Brand.
            </h1>

            {/* Subheading / Hook */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Meet <span className="text-white font-semibold">Boss Jar</span> — the digital storyteller and comedy powerhouse trusted by <span className="text-[#ffd000] font-medium">1.8 Million+ followers</span>. Delivering high-retention skits, organic product integrations, and unforgettable commercial recall for retail, hotels, and food chains nationwide.
            </p>

            {/* Proof Metric Strip (Tabular Numerals & Zero-Pill Design) */}
            <div className="w-full grid grid-cols-3 gap-4 pt-2 pb-2 border-y border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-[#ffd000] tabular-nums">
                  {CREATOR_METRICS.followers}
                </div>
                <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                  Social Followers
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-white tabular-nums">
                  {CREATOR_METRICS.totalViews}
                </div>
                <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                  Total Impressions
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-[#ff1a35] tabular-nums">
                  {CREATOR_METRICS.engagementRate}
                </div>
                <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                  Avg. Engagement
                </div>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="min-h-[48px] px-7 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-black bg-[#ffd000] hover:bg-[#e6bc00] active:scale-95 transition-all duration-150 shadow-[0_0_25px_rgba(255,208,0,0.35)] hover:shadow-[0_0_35px_rgba(255,208,0,0.6)] flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <span>Book a Brand Collab</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onExploreVault}
                type="button"
                className="min-h-[48px] px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 hover:border-white/30 transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Play className="w-4 h-4 text-[#ff1a35] fill-[#ff1a35]" />
                <span>Explore Comedy Vault</span>
              </button>

              <button
                onClick={onOpenRateCard}
                type="button"
                className="text-xs font-semibold text-zinc-400 hover:text-white underline underline-offset-4 transition-colors py-2"
              >
                View 2026 Deliverables & Rate Card →
              </button>
            </div>

            {/* Targeted Enterprise Niches */}
            <div className="pt-2 flex items-center gap-4 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300 uppercase tracking-wider">Core Niches:</span>
              <span className="flex items-center gap-1 hover:text-zinc-200">
                <Store className="w-3.5 h-3.5 text-[#ffd000]" /> Retail & Convenience
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1 hover:text-zinc-200">
                <Hotel className="w-3.5 h-3.5 text-[#ff1a35]" /> Hotels & Resorts
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="flex items-center gap-1 hover:text-zinc-200">
                <Utensils className="w-3.5 h-3.5 text-[#ffd000]" /> Food & Dining
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: HERO VISUAL (Boss Jar attached hero section image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer Glow & Crimson Accent Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff1a35] via-[#ffd000]/40 to-transparent rounded-3xl opacity-40 blur-xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-zinc-800/80 to-zinc-950 shadow-2xl">
                
                {/* Hero Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group">
                  {!heroImgFailed ? (
                    <img
                      src="/src/assets/hero section image.png"
                      alt="Boss Jar in front of Mayon Volcano and 7-Eleven"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={() => {
                        // Try jpg if png fails
                        const imgEl = document.getElementById('hero-img-fallback-trigger') as HTMLImageElement;
                        if (imgEl && imgEl.src.endsWith('.png')) {
                          imgEl.src = '/src/assets/hero section image.jpg';
                        } else {
                          setHeroImgFailed(true);
                        }
                      }}
                      id="hero-img-fallback-trigger"
                    />
                  ) : (
                    /* High-Fidelity CSS Styled Fallback Canvas if local file is still being imported */
                    <div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black via-zinc-900 to-[#1e1315] relative">
                      {/* Atmospheric Volcano Silhouette Backing */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff1a35]/25 via-transparent to-black" />
                      
                      {/* 7-Eleven Plaza & Mayon Representation */}
                      <div className="absolute top-8 left-8 right-8 text-center space-y-2">
                        <div className="inline-block px-3 py-1 rounded bg-zinc-900/80 border border-white/10 text-xs font-bold text-zinc-300">
                          📍 Legazpi City, Albay · Mayon Volcano Backdrop
                        </div>
                        <div className="text-xs text-zinc-400">
                          Filipino Culture & Everyday Comedy Grounded in Real Communities
                        </div>
                      </div>

                      {/* Center Character Badge */}
                      <div className="relative my-auto flex flex-col items-center text-center py-12">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#ff1a35] to-[#ffd000] p-1 shadow-2xl mb-4">
                          <div className="w-full h-full rounded-full bg-[#12141a] flex items-center justify-center">
                            <span className="font-heading font-black text-3xl text-white">BJ</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-heading font-extrabold text-white">
                          BOSS JAR
                        </h2>
                        <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                          "Authentic, down-to-earth comedy that connects real Filipino people with top-tier brands."
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Gradient Scrim for readable badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Verified Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                    <span className="text-xs font-semibold text-white">Verified Creator</span>
                  </div>

                  {/* Top-Left Location Tag */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-[#ff1a35]"></span>
                    Albay, Philippines
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/15 shadow-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-xs font-semibold text-[#ffd000] uppercase tracking-wider">
                            Real Influence, Real Conversion
                          </div>
                          <div className="text-sm font-heading font-bold text-white">
                            Boss Jar Brand Impact
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#ff1a35]/20 text-[#ff4d64] px-2 py-0.5 rounded text-xs font-bold tabular-nums">
                          <TrendingUp className="w-3.5 h-3.5" />
                          +34% ROI
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-zinc-400" />
                          <span>1.8M Active Followers</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-zinc-400" />
                          <span>450M+ Organic Views</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Card Footer with Local Asset Note */}
                <div className="px-4 py-3 bg-[#11131a] border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ffd000]" />
                    Brand-Safe Comedy & Enterprise Contract Ready
                  </span>
                  <span className="text-zinc-500">v5.3 Media Kit</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
