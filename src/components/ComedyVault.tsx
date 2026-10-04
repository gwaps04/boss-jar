import React, { useState } from 'react';
import { 
  Play, 
  Flame, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  ExternalLink,
  Clapperboard,
  Film
} from 'lucide-react';
import { VIRAL_SKITS } from '../data/portfolioData';
import { SkitVideo } from '../types';

interface ComedyVaultProps {
  onSelectSkit: (skit: SkitVideo) => void;
}

export const ComedyVault: React.FC<ComedyVaultProps> = ({ onSelectSkit }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Viral Skits',
    'Everyday Relatable',
    'Retail & Stores',
    'Food & Street',
    'Motorcycle & Trips',
  ];

  const filteredSkits = activeFilter === 'All'
    ? VIRAL_SKITS
    : VIRAL_SKITS.filter((s) => s.category === activeFilter);

  return (
    <section id="comedy-vault" className="py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Engaging Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200/80 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span>Certified Viral Hits · Multi-Million Views</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
              The Boss Jar Comedy Vault: Certified Viral Hits That Drive Real Pinoy Audiences
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              From unscripted street banter and Bicol road trips to high-converting brand takeovers — experience the authentic grassroots comedy that captivates 1.8M+ loyal followers.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  type="button"
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid: 6 Facebook Reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkits.map((skit) => (
            <div
              key={skit.id}
              onClick={() => onSelectSkit(skit)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-red-600 transition-all duration-200 overflow-hidden cursor-pointer flex flex-col shadow-xs hover:shadow-xl hover:-translate-y-1"
            >
              {/* Media Thumbnail Container with Facebook Reel Style */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                {/* Background Image / Stylized Preview */}
                <img
                  src={skit.thumbnailUrl}
                  alt={skit.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-80"
                  onError={(e) => {
                    // Fallback to hero section image if thumbnail not found
                    (e.target as HTMLImageElement).src = '/hero-image.jpg';
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/20 transition-all" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Top Badge Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/20 text-[11px] font-bold text-amber-400 flex items-center gap-1">
                    <Film className="w-3 h-3" />
                    FB Reel
                  </span>

                  <span className="px-2.5 py-1 rounded-md bg-red-600 text-white font-heading font-extrabold text-xs shadow-md">
                    {skit.views}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white z-10">
                  <span className="text-[11px] font-semibold text-slate-300 truncate max-w-[200px]">
                    {skit.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-300">
                    {skit.date}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
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
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      {skit.likes}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                      {skit.comments}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-heading font-bold text-red-600 group-hover:translate-x-0.5 transition-transform text-xs">
                    Watch Reel <Play className="w-3 h-3 fill-red-600 ml-0.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
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
