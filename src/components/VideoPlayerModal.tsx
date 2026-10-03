import React from 'react';
import { 
  X, 
  Sparkles, 
  ExternalLink,
  Play
} from 'lucide-react';
import { SkitVideo } from '../types';

interface VideoPlayerModalProps {
  skit: SkitVideo | null;
  onClose: () => void;
  onBookSkit: (skitTitle: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ 
  skit, 
  onClose, 
  onBookSkit 
}) => {
  if (!skit) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Canvas Simulation */}
        <div className="md:w-3/5 bg-slate-950 flex flex-col items-center justify-center relative aspect-video md:aspect-auto min-h-[300px] overflow-hidden group">
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-red-950 flex items-center justify-center">
            
            <div className="relative text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-amber-400 text-slate-950 mx-auto flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  Reel Preview Simulation · 1080p 60fps
                </span>
                <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                  Viral short-form comedy format with high retention
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Player Controls Mockup */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-mono">{skit.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">{skit.category}</span>
              <span className="font-mono text-slate-300">{skit.views} views</span>
            </div>
          </div>
        </div>

        {/* Video Metadata & Engagement Sidebar */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto space-y-6 bg-white">
          
          <div className="space-y-4">
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded bg-red-100 text-red-700 font-bold">
                {skit.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">{skit.date}</span>
            </div>

            <h3 className="font-heading font-extrabold text-xl text-slate-950 leading-snug">
              {skit.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              {skit.description}
            </p>

            {/* Branded Integration Note */}
            {skit.clientTieIn && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Commercial Partnership Tie-In
                </div>
                <div className="text-xs text-slate-800 font-medium">
                  {skit.clientTieIn}
                </div>
              </div>
            )}

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center">
              <div>
                <div className="text-base font-heading font-extrabold text-slate-950 tabular-nums">
                  {skit.views}
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Views</div>
              </div>
              <div>
                <div className="text-base font-heading font-extrabold text-red-600 tabular-nums">
                  {skit.likes}
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Likes</div>
              </div>
              <div>
                <div className="text-base font-heading font-extrabold text-slate-950 tabular-nums">
                  {skit.comments}
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Comments</div>
              </div>
            </div>

            {/* Sample Audience Reactions */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Audience Reactions
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                <span className="font-bold text-slate-950">@pinoy_commuter:</span> "Sobrang totoo nung siopao na ubos haha! Bibili tuloy ako sa 7-Eleven mamaya!"
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                <span className="font-bold text-slate-950">@riders_unite_ph:</span> "Ganyan talaga kami boss jar kapag dadaan sa humps haha salute!"
              </div>
            </div>

          </div>

          {/* Action Call to Action */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onClose();
                onBookSkit(skit.title);
              }}
              type="button"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-xs border border-amber-500/50"
            >
              <span>Book a Similar Campaign</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-slate-500 text-center font-medium">
              Custom storylines developed in collaboration with your brand guidelines.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
