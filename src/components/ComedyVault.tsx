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
    'Hotels & Resorts',
  ];

  const filteredSkits = activeFilter === 'All'
    ? VIRAL_SKITS
    : VIRAL_SKITS.filter((s) => s.category === activeFilter);

  return (
    <section id="comedy-vault" className="py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
              <Clapperboard className="w-4 h-4 text-red-600" />
              The Viral Portfolio
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              The Comedy Vault
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              High-retention skits that turn everyday street situations into organic comedy gold and measurable brand engagement.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto max-w-full">
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkits.map((skit) => (
            <div
              key={skit.id}
              onClick={() => onSelectSkit(skit)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-red-600 transition-all duration-200 overflow-hidden cursor-pointer flex flex-col shadow-xs hover:shadow-lg hover:-translate-y-1"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                {/* Fallback stylized video canvas */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                      {skit.category}
                    </span>
                    <h4 className="text-white font-heading font-bold text-sm line-clamp-2">
                      {skit.title}
                    </h4>
                  </div>
                </div>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-white">
                  {skit.duration}
                </div>

                {/* Client / Sponsor Tag */}
                {skit.clientTieIn && (
                  <div className="absolute top-3 left-3 bg-red-600 px-2.5 py-1 rounded text-[10px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Branded Collab</span>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-slate-950 ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span className="text-red-600 font-bold">{skit.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{skit.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {skit.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {skit.description}
                  </p>
                </div>

                {/* Bottom Proof Metrics */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-slate-900 font-extrabold tabular-nums">
                      <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                      <span>{skit.views}</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500 tabular-nums font-semibold">
                      <Heart className="w-3.5 h-3.5 text-slate-400" />
                      <span>{skit.likes}</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500 tabular-nums font-semibold">
                      <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>{skit.comments}</span>
                    </div>
                  </div>

                  <span className="text-red-600 font-bold text-xs flex items-center gap-0.5 group-hover:underline">
                    Watch Reel <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Vault Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-base text-slate-900">
              Want a custom comedy skit tailored to your business or product?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Boss Jar produces organic storyline integrations that fit your exact brand tone and guidelines.
            </p>
          </div>
          <a
            href="#collab"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Request Pitch Concept</span>
          </a>
        </div>

      </div>
    </section>
  );
};
