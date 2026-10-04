import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ImageIcon 
} from 'lucide-react';

// Direct Vite ESM imports from src/assets/carousel/
// These read directly from the files in your src/assets/carousel/ folder
import slide1Img from '../assets/carousel/slide 1.png';
import slide2Img from '../assets/carousel/slide 2.png';
import slide3Img from '../assets/carousel/slide 3.png';
import slide4Img from '../assets/carousel/slide 4.png';
import slide5Img from '../assets/carousel/slide 5.png';
import slide6Img from '../assets/carousel/slide 6.png';

interface SlideConfig {
  id: string;
  slideNumber: number;
  fileName: string;
  title: string;
  caption: string;
  tag: string;
  location: string;
  imageSrc: string;
  fallbackPath: string;
}

const CAROUSEL_SLIDES: SlideConfig[] = [
  {
    id: 'slide-1',
    slideNumber: 1,
    fileName: 'slide 1.png',
    title: 'Boss Jar on Location',
    caption: 'Real grassroots influence & everyday street comedy',
    tag: 'Location Shoot',
    location: 'Legazpi City · Mayon Volcano Backdrop',
    imageSrc: slide1Img,
    fallbackPath: '/carousel/slide 1.png',
  },
  {
    id: 'slide-2',
    slideNumber: 2,
    fileName: 'slide 2.png',
    title: 'Official Boss Jar Rider Emblem',
    caption: 'High-octane motorcycle culture & authentic Pinoy humor',
    tag: 'Brand Trademark',
    location: 'Official Logo & Merch Emblem',
    imageSrc: slide2Img,
    fallbackPath: '/carousel/slide 2.png',
  },
  {
    id: 'slide-3',
    slideNumber: 3,
    fileName: 'slide 3.png',
    title: 'Everyday Pinoy Street Stories',
    caption: 'Unscripted laughs connecting people with top brands',
    tag: 'Viral Content',
    location: 'Convenience Stores & Food Stops',
    imageSrc: slide3Img,
    fallbackPath: '/carousel/slide 3.png',
  },
  {
    id: 'slide-4',
    slideNumber: 4,
    fileName: 'slide 4.png',
    title: 'Rider Culture & Tour Lifestyle',
    caption: 'Big bike adventures, road safety etiquette & comedy',
    tag: 'Motorcycle Tour',
    location: 'Provincial Highways & Mountain Passes',
    imageSrc: slide4Img,
    fallbackPath: '/carousel/slide 4.png',
  },
  {
    id: 'slide-5',
    slideNumber: 5,
    fileName: 'slide 5.png',
    title: 'Commercial Brand Takeovers',
    caption: 'Driving foot traffic to retail branches & resort getaways',
    tag: 'Brand Campaigns',
    location: 'Nationwide Branch Activations',
    imageSrc: slide5Img,
    fallbackPath: '/carousel/slide 5.png',
  },
  {
    id: 'slide-6',
    slideNumber: 6,
    fileName: 'slide 6.png',
    title: '1.8M Pinoy Community',
    caption: 'The Boss who stays humble, relatable, and hilarious',
    tag: 'Audience Power',
    location: 'Philippines · Nationwide Reach',
    imageSrc: slide6Img,
    fallbackPath: '/carousel/slide 6.png',
  },
];

export const HeroImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

  return (
    <div 
      className="relative mx-auto max-w-[430px] lg:max-w-none w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Clean Framing (Red, White, Yellow, Black Palette) */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 bg-white shadow-xl">
        
        {/* Aspect Ratio Container (3/4 portrait framed) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950 group">
          
          {/* Main Slide Image: directly loaded from src/assets/carousel/ */}
          <div className="w-full h-full relative">
            <img
              key={`slide-${currentSlide.slideNumber}-${currentSlide.imageSrc}`}
              src={currentSlide.imageSrc}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-opacity duration-300"
              onError={(e) => {
                // If primary ESM import path has an issue, fallback to public directory
                const target = e.target as HTMLImageElement;
                if (target.src !== currentSlide.fallbackPath) {
                  target.src = currentSlide.fallbackPath;
                }
              }}
            />
          </div>

          {/* Top Header Tags */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
            <div className="bg-slate-950/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold text-white shadow-md pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="truncate max-w-[180px] sm:max-w-[220px]">{currentSlide.location}</span>
            </div>

            <div className="bg-slate-950/90 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-white shadow-md pointer-events-auto">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Slide {currentSlide.slideNumber} of {CAROUSEL_SLIDES.length}</span>
            </div>
          </div>

          {/* Carousel Arrow Controls (Touch-first >= 44px) */}
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-20">
            <button
              onClick={handlePrev}
              type="button"
              className="w-11 h-11 rounded-full bg-slate-950/80 hover:bg-slate-900 active:scale-95 text-white flex items-center justify-center transition-all border border-white/20 shadow-lg pointer-events-auto opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="w-11 h-11 rounded-full bg-slate-950/80 hover:bg-slate-900 active:scale-95 text-white flex items-center justify-center transition-all border border-white/20 shadow-lg pointer-events-auto opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Content Scrim & Caption */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pt-12 pb-4 px-4 z-10 text-white">
            <div className="p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg">
              
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {currentSlide.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  {currentSlide.fileName}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-heading font-bold text-white leading-tight">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                {currentSlide.caption}
              </p>

              {/* 6-Slide Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-3 pt-2 border-t border-white/10">
                {CAROUSEL_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentIndex(idx)}
                    type="button"
                    className={`h-1.5 rounded-full transition-all focus:outline-none ${
                      idx === currentIndex
                        ? 'w-6 bg-amber-400'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Carousel Footer Bar */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-red-600" />
            <span className="font-bold text-slate-900">Active Slides:</span>
            <span className="text-slate-600 font-mono text-[11px]">
              src/assets/carousel/{currentSlide.fileName}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>6/6 Loaded</span>
          </div>
        </div>

      </div>
    </div>
  );
};
