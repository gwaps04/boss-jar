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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#12141c] rounded-3xl border border-white/15 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Canvas Simulation (Left / Top) */}
        <div className="md:w-3/5 bg-black flex flex-col items-center justify-center relative aspect-video md:aspect-auto min-h-[300px] overflow-hidden group">
          
          {/* Simulated Video Player Screen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900 to-[#191012] flex items-center justify-center">
            
            {/* Play Trigger / Simulation */}
            <div className="relative text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#ffd000] text-black mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(255,208,0,0.6)] cursor-pointer hover:scale-105 transition-transform">
                <Play className="w-8 h-8 fill-black ml-1" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#ff4d64] uppercase tracking-wider">
                  Reel Preview Simulation · 1080p 60fps
                </span>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                  Clicking opens full interactive preview with Boss Jar audio reel
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Player Controls Mockup */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-mono">{skit.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#ffd000] font-semibold">{skit.category}</span>
              <span className="font-mono text-zinc-400">{skit.views} views</span>
            </div>
          </div>
        </div>

        {/* Video Metadata & Engagement Sidebar (Right / Bottom) */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto space-y-6 bg-[#12141c]">
          
          <div className="space-y-4">
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded bg-[#ff1a35]/20 text-[#ff4d64] font-bold">
                {skit.category}
              </span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400">{skit.date}</span>
            </div>

            <h3 className="font-heading font-extrabold text-xl text-white leading-snug">
              {skit.title}
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {skit.description}
            </p>

            {/* Branded Integration Note */}
            {skit.clientTieIn && (
              <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                <div className="text-[11px] font-bold text-[#ffd000] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Commercial Partnership Tie-In
                </div>
                <div className="text-xs text-zinc-200">
                  {skit.clientTieIn}
                </div>
              </div>
            )}

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
              <div>
                <div className="text-base font-heading font-bold text-white tabular-nums">
                  {skit.views}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase">Views</div>
              </div>
              <div>
                <div className="text-base font-heading font-bold text-white tabular-nums">
                  {skit.likes}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase">Likes</div>
              </div>
              <div>
                <div className="text-base font-heading font-bold text-white tabular-nums">
                  {skit.comments}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase">Comments</div>
              </div>
            </div>

            {/* Sample Audience Reactions */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Audience Reactions
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950/70 border border-white/5 text-xs text-zinc-300">
                <span className="font-semibold text-white">@pinoy_commuter:</span> "Sobrang totoo nung siopao na ubos haha! Bibili tuloy ako sa 7-Eleven mamaya!"
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950/70 border border-white/5 text-xs text-zinc-300">
                <span className="font-semibold text-white">@riders_unite_ph:</span> "Ganyan talaga kami boss jar kapag dadaan sa humps haha salute!"
              </div>
            </div>

          </div>

          {/* Action Call to Action */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                onClose();
                onBookSkit(skit.title);
              }}
              type="button"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#ffd000] hover:bg-[#e6bc00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
            >
              <span>Book a Similar Campaign</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-zinc-500 text-center">
              Custom storylines developed in collaboration with your brand guidelines.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
