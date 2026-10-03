import React, { useState } from 'react';
import { 
  Play, 
  Flame, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  ExternalLink,
  Clapperboard
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
    'Everyday Relatable',
    'Retail & Stores',
    'Food & Street',
    'Motorcycle & Trips',
  ];

  const filteredSkits = activeFilter === 'All'
    ? VIRAL_SKITS
    : VIRAL_SKITS.filter((s) => s.category === activeFilter);

  return (
    <section id="comedy-vault" className="py-20 md:py-28 bg-[#0e1017] border-y border-white/5 relative">
      {/* Background Subtle Flare */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff1a35]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ffd000] uppercase tracking-wider mb-2">
              <Clapperboard className="w-4 h-4 text-[#ffd000]" />
              The Viral Portfolio
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              The Comedy Vault
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              High-retention skits that turn everyday street situations into organic comedy gold and measurable brand engagement.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons per anti-slop rules) */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900/90 border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  type="button"
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000] ${
                    isActive
                      ? 'bg-[#ff1a35] text-white shadow-md shadow-red-900/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkits.map((skit) => (
            <div
              key={skit.id}
              onClick={() => onSelectSkit(skit)}
              className="group relative bg-[#13161f] rounded-2xl border border-white/10 hover:border-[#ffd000]/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video w-full bg-zinc-900 overflow-hidden">
                {/* Fallback stylized video canvas */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-[#1e1416] flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#ffd000] tracking-wider uppercase">
                      {skit.category}
                    </span>
                    <h4 className="text-white font-heading font-bold text-sm line-clamp-2">
                      {skit.title}
                    </h4>
                  </div>
                </div>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:bg-black/20 transition-all" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-zinc-300">
                  {skit.duration}
                </div>

                {/* Client / Sponsor Tag */}
                {skit.clientTieIn && (
                  <div className="absolute top-3 left-3 bg-[#ff1a35]/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 text-[#ffd000]" />
                    <span>Branded Collab</span>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#ffd000] text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,208,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-black ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <span className="text-[#ffd000] font-medium">{skit.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{skit.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[#ffd000] transition-colors leading-snug">
                    {skit.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {skit.description}
                  </p>
                </div>

                {/* Bottom Proof Metrics */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-white font-bold tabular-nums">
                      <Flame className="w-3.5 h-3.5 text-[#ff1a35] fill-[#ff1a35]" />
                      <span>{skit.views}</span>
                    </div>

                    <div className="flex items-center gap-1 text-zinc-400 tabular-nums">
                      <Heart className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{skit.likes}</span>
                    </div>

                    <div className="flex items-center gap-1 text-zinc-400 tabular-nums">
                      <MessageCircle className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{skit.comments}</span>
                    </div>
                  </div>

                  <span className="text-[#ffd000] font-semibold text-xs flex items-center gap-0.5 group-hover:underline">
                    Watch Reel <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Vault Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#181a24] to-zinc-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-base text-white">
              Want a custom comedy skit tailored to your business or product?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Boss Jar produces organic storyline integrations that fit your exact brand tone and guidelines.
            </p>
          </div>
          <a
            href="#collab"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white border border-white/20 transition-all flex items-center gap-1.5"
          >
            <span>Request Pitch Concept</span>
          </a>
        </div>

      </div>
    </section>
  );
};
