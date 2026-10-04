import React from 'react';
import { 
  Play, 
  Flame, 
  Heart, 
  Sparkles, 
  ExternalLink,
  Clapperboard,
  Film
} from 'lucide-react';
import { VIRAL_SKITS } from '../data/portfolioData';
import { SkitVideo } from '../types';

// Eager glob import: automatically discovers any images placed in src/assets/thumbnails/
const globThumbnails = import.meta.glob<{ default: string }>(
  '../assets/thumbnails/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', 
  { eager: true }
);

interface ComedyVaultProps {
  onSelectSkit: (skit: SkitVideo) => void;
}

// Helper to resolve thumbnail from src/assets/thumbnails/
function resolveThumbnailFromAssets(slotNum: number): string | null {
  const entries = Object.entries(globThumbnails);
  const match = entries.find(([path]) => {
    const lower = path.toLowerCase();
    return (
      lower.includes(`thumail ${slotNum}`) ||
      lower.includes(`thumail${slotNum}`) ||
      lower.includes(`thumail_${slotNum}`) ||
      lower.includes(`thumbnail ${slotNum}`) ||
      lower.includes(`thumbnail${slotNum}`) ||
      lower.includes(`thumbnail_${slotNum}`) ||
      lower.includes(`reel ${slotNum}`) ||
      lower.includes(`reel_${slotNum}`) ||
      lower.includes(`reel${slotNum}`) ||
      lower.includes(`slide ${slotNum}`)
    );
  });
  return match ? match[1].default : null;
}

export const ComedyVault: React.FC<ComedyVaultProps> = ({ onSelectSkit }) => {
  return (
    <section id="comedy-vault" className="py-20 md:py-24 bg-gradient-to-b from-[#f0f5fa] via-[#f8fafc] to-[#ffffff] border-b border-slate-200/90 relative overflow-hidden">
      {/* Subtle atmospheric ambient glow matching ocean blue theme */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none translate-y-1/3" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Perfectly Centered Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-red-600 uppercase tracking-wider mb-4 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
            <span>Certified Viral Hits · Multi-Million Views</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
            The Boss Jar Comedy Vault: Certified Viral Hits That Drive Real Pinoy Audiences
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            From unscripted street banter and Bicol road trips to high-converting brand takeovers — experience the authentic grassroots comedy that captivates 1.8M+ loyal followers.
          </p>
        </div>

        {/* Video Grid: Authentic Vertical Facebook Reels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {VIRAL_SKITS.map((skit, index) => {
            const slotNum = index + 1;
            
            // Resolve image: 
            // 1. Resolved from src/assets/thumbnails/
            // 2. Fallback to public path or slide
            const assetThumbnail = resolveThumbnailFromAssets(slotNum);
            const activeThumbnail = assetThumbnail || skit.thumbnailUrl;

            return (
              <div
                key={skit.id}
                onClick={() => onSelectSkit({ ...skit, thumbnailUrl: activeThumbnail })}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-red-600 transition-all duration-200 overflow-hidden cursor-pointer flex flex-col shadow-xs hover:shadow-xl hover:-translate-y-1"
              >
                {/* Media Thumbnail Container with Authentic Facebook Reel Styling */}
                <div className="relative aspect-[9/13] w-full bg-slate-950 overflow-hidden">
                  
                  {/* Real Facebook Reel Thumbnail Image */}
                  <img
                    src={activeThumbnail}
                    alt={skit.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/carousel/slide ${slotNum}.jpg`;
                    }}
                  />

                  {/* Gradient Scrim for readable badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 group-hover:via-transparent/20 transition-all" />

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Top Header Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-[11px] font-bold text-amber-400 flex items-center gap-1 shadow-sm">
                      <Film className="w-3 h-3" />
                      FB Reel #{slotNum}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-red-600 text-white font-heading font-extrabold text-xs shadow-md">
                      {skit.views}
                    </span>
                  </div>

                  {/* Bottom Reel Caption Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[11px] font-semibold text-slate-200 truncate max-w-[200px]">
                      {skit.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded">
                      {skit.date}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                      {skit.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {skit.description}
                    </p>
                  </div>

                  {/* Commercial Tie-In Badge */}
                  {skit.clientTieIn && (
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{skit.clientTieIn}</span>
                    </div>
                  )}

                  {/* Engagement Metrics & Click-to-Play Trigger */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                        {skit.likes}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-heading font-bold text-red-600 group-hover:translate-x-0.5 transition-transform text-xs">
                      Play Reel <Play className="w-3 h-3 fill-red-600 ml-0.5" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Footer / View Full Reel Channel Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/reel/1695508678832031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <Clapperboard className="w-4 h-4 text-amber-400" />
            <span>Explore All Videos on Official Facebook Page</span>
            <ExternalLink className="w-4 h-4 ml-1 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
