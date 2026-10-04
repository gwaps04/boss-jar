import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ExternalLink,
  Film
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
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!skit) return null;

  // Facebook official embed URL for videos & reels
  const fbEmbedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(skit.videoUrl)}&show_text=false&t=0&autoplay=true`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 active:scale-95 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 shadow-md"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Facebook Video Player Column */}
        <div className="md:w-3/5 bg-slate-950 flex flex-col items-center justify-center relative min-h-[380px] md:min-h-[500px] overflow-hidden">
          
          {/* Iframe Loading Skeleton */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center z-10">
              <div className="w-12 h-12 rounded-full border-3 border-amber-400 border-t-transparent animate-spin mb-3"></div>
              <p className="text-sm font-heading font-bold text-white">Loading Boss Jar Facebook Reel...</p>
              <p className="text-xs text-slate-400 mt-1">Connecting to Facebook Media CDN</p>
            </div>
          )}

          {/* Official Facebook Video Embed Player */}
          <iframe
            src={fbEmbedUrl}
            title={skit.title}
            className="w-full h-full min-h-[380px] md:min-h-[500px] border-0"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onLoad={() => setIframeLoaded(true)}
          />

          {/* Facebook Privacy & Direct App Link Banner */}
          <div className="absolute bottom-2 inset-x-2 z-20 pointer-events-none">
            <div className="p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white pointer-events-auto">
              <span className="text-[11px] text-slate-300 truncate max-w-[200px] sm:max-w-xs">
                Official FB Reel: {skit.fbReelId}
              </span>

              <a
                href={skit.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-heading font-bold text-[11px] flex items-center gap-1 transition-colors shrink-0"
              >
                <span>Watch on Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Video Metadata & Campaign Tie-In Column */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto space-y-6 bg-white">
          
          <div className="space-y-4">
            
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold flex items-center gap-1">
                <Film className="w-3 h-3 text-red-600" />
                {skit.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">{skit.date}</span>
            </div>

            {/* Video Title */}
            <h3 className="font-heading font-extrabold text-xl text-slate-950 leading-snug">
              {skit.title}
            </h3>

            {/* Video Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {skit.description}
            </p>

            {/* Branded Integration Badge */}
            {skit.clientTieIn && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 space-y-1">
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Commercial Opportunity
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
                <div className="text-[10px] text-slate-500 font-bold uppercase">Estimated Views</div>
              </div>
              <div>
                <div className="text-base font-heading font-extrabold text-red-600 tabular-nums">
                  {skit.likes}
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Reactions</div>
              </div>
              <div>
                <div className="text-base font-heading font-extrabold text-slate-950 tabular-nums">
                  {skit.comments}
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase">Comments</div>
              </div>
            </div>

            {/* Why This Format Works For Brands */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Audience Retention Insight
              </div>
              <p className="text-xs text-slate-600">
                Boss Jar's relatable comedy skits maintain high average watch times, ensuring your brand message or store location gets remembered.
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onClose();
                onBookSkit(skit.title);
              }}
              type="button"
              className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inquire Concept Like This</span>
            </button>

            <a
              href={skit.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Original Reel on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
