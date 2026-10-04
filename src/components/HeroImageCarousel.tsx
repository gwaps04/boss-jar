import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

// Vite eager glob imports: automatically discovers any .jpg or .png placed in src/assets/carousel/
const globImages = import.meta.glob<{ default: string }>(
  '../assets/carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', 
  { eager: true }
);

interface SlideConfig {
  id: string;
  slideNumber: number;
  title: string;
  caption: string;
  tag: string;
  location: string;
}

// Tailored specifically to Boss Jar's 6 authentic brand photos
const SLIDE_DEFINITIONS: SlideConfig[] = [
  {
    id: 'slide-1',
    slideNumber: 1,
    title: 'Boss Jar at 7-Eleven Mayon',
    caption: 'Grassroots crowd pull & viral street comedy in Albay',
    tag: 'Viral Street Activation',
    location: 'Legazpi City · Mayon Volcano Backdrop',
  },
  {
    id: 'slide-2',
    slideNumber: 2,
    title: '1.8 Million Facebook Followers',
    caption: 'Unmatched organic audience trust & loyal community reach',
    tag: 'Audience Power',
    location: 'PapaTantan & Boss Jar Milestone',
  },
  {
    id: 'slide-3',
    slideNumber: 3,
    title: 'Resort & VIP Hospitality Night',
    caption: 'High-retention creator presence for hotel & resort getaways',
    tag: 'Hospitality & Events',
    location: 'Luxury Pavilion & Evening Social',
  },
  {
    id: 'slide-4',
    slideNumber: 4,
    title: 'The Icon Clinic Brand Endorsement',
    caption: 'Driving qualified patient consultations to premium health & beauty clinics',
    tag: 'Clinic & Wellness',
    location: 'The Icon Clinic Official Visit',
  },
  {
    id: 'slide-5',
    slideNumber: 5,
    title: 'Slick & Dapper Barbers Takeover',
    caption: 'Direct foot traffic and organic engagement for retail lifestyle brands',
    tag: 'Retail Store Takeover',
    location: 'Slick & Dapper Barbershop',
  },
  {
    id: 'slide-6',
    slideNumber: 6,
    title: 'Sunset Chillout & Rider Convoy',
    caption: 'Big bike tours, 4x4 lifestyle, and authentic barkada camaraderie',
    tag: 'Rider & Auto Lifestyle',
    location: 'Scenic Hill Overlook · Bicol',
  },
];

// Helper to resolve the best image URL from assets or public fallback
function resolveFolderImage(slideNum: number): string | null {
  const entries = Object.entries(globImages);

  // 1. Try finding "slide {N}.jpg"
  const jpgMatch = entries.find(([path]) => {
    const lower = path.toLowerCase();
    return lower.includes(`slide ${slideNum}.jpg`) || 
           lower.includes(`slide_${slideNum}.jpg`) ||
           lower.includes(`slide${slideNum}.jpg`);
  });
  if (jpgMatch) return jpgMatch[1].default;

  // 2. Try finding "slide {N}.png"
  const pngMatch = entries.find(([path]) => {
    const lower = path.toLowerCase();
    return lower.includes(`slide ${slideNum}.png`) || 
           lower.includes(`slide_${slideNum}.png`) ||
           lower.includes(`slide${slideNum}.png`);
  });
  if (pngMatch) return pngMatch[1].default;

  return null;
}

export const HeroImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Custom images loaded from device (persisted in browser session)
  const [customSlides] = useState<Record<number, string>>(() => {
    try {
      const stored = localStorage.getItem('boss_jar_custom_slides_v2');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Auto-advance slides every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_DEFINITIONS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDE_DEFINITIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_DEFINITIONS.length);
  };

  const currentSlide = SLIDE_DEFINITIONS[currentIndex];
  
  // Resolve image in order: 
  // 1. User uploaded in browser session (if any)
  // 2. Resolved from src/assets/carousel/
  // 3. Fallback path
  const folderResolved = resolveFolderImage(currentSlide.slideNumber);
  const activeImageSrc = customSlides[currentSlide.slideNumber] || folderResolved || `/carousel/slide ${currentSlide.slideNumber}.jpg`;

  return (
    <div 
      className="relative mx-auto max-w-[430px] lg:max-w-none w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Clean Framing (Red, White, Yellow, Black Palette) */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 bg-white shadow-2xl">
        
        {/* Aspect Ratio Container (3/4 portrait framed) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950 group">
          
          {/* Main Slide Image */}
          <div className="w-full h-full relative">
            <img
              key={`slide-${currentSlide.slideNumber}-${activeImageSrc.slice(0, 32)}`}
              src={activeImageSrc}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-opacity duration-300"
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
              <span>Slide {currentSlide.slideNumber} of {SLIDE_DEFINITIONS.length}</span>
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
              </div>

              <h3 className="text-sm sm:text-base font-heading font-bold text-white leading-tight">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                {currentSlide.caption}
              </p>

              {/* 6-Slide Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-3 pt-2 border-t border-white/10">
                {SLIDE_DEFINITIONS.map((s, idx) => (
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

      </div>
    </div>
  );
};
