import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ImageIcon, 
  UploadCloud, 
  RotateCcw 
} from 'lucide-react';

// Vite eager glob imports: automatically discovers ANY .jpg or .png placed in src/assets/carousel/
// This supports both "slide 1.jpg" and "slide 1.png" with zero compile errors!
const globImages = import.meta.glob<{ default: string }>(
  '../assets/carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', 
  { eager: true }
);

interface SlideConfig {
  id: string;
  slideNumber: number;
  fileName: string;
  title: string;
  caption: string;
  tag: string;
  location: string;
  fallbackFile: string;
}

// Tailored specifically to Boss Jar's 6 authentic brand photos
const SLIDE_DEFINITIONS: SlideConfig[] = [
  {
    id: 'slide-1',
    slideNumber: 1,
    fileName: 'slide 1.jpg',
    title: 'Boss Jar at 7-Eleven Mayon',
    caption: 'Grassroots crowd pull & viral street comedy in Albay',
    tag: 'Viral Street Activation',
    location: 'Legazpi City · Mayon Volcano Backdrop',
    fallbackFile: 'slide 1.png',
  },
  {
    id: 'slide-2',
    slideNumber: 2,
    fileName: 'slide 2.jpg',
    title: '1.8 Million Facebook Followers',
    caption: 'Unmatched organic audience trust & loyal community reach',
    tag: 'Audience Power',
    location: 'PapaTantan & Boss Jar Milestone',
    fallbackFile: 'slide 2.png',
  },
  {
    id: 'slide-3',
    slideNumber: 3,
    fileName: 'slide 3.jpg',
    title: 'Resort & VIP Hospitality Night',
    caption: 'High-retention creator presence for hotel & resort getaways',
    tag: 'Hospitality & Events',
    location: 'Luxury Pavilion & Evening Social',
    fallbackFile: 'slide 3.png',
  },
  {
    id: 'slide-4',
    slideNumber: 4,
    fileName: 'slide 4.jpg',
    title: 'The Icon Clinic Brand Endorsement',
    caption: 'Driving qualified patient consultations to premium health & beauty clinics',
    tag: 'Clinic & Wellness',
    location: 'The Icon Clinic Official Visit',
    fallbackFile: 'slide 4.png',
  },
  {
    id: 'slide-5',
    slideNumber: 5,
    fileName: 'slide 5.jpg',
    title: 'Slick & Dapper Barbers Takeover',
    caption: 'Direct foot traffic and organic engagement for retail lifestyle brands',
    tag: 'Retail Store Takeover',
    location: 'Slick & Dapper Barbershop',
    fallbackFile: 'slide 5.png',
  },
  {
    id: 'slide-6',
    slideNumber: 6,
    fileName: 'slide 6.jpg',
    title: 'Sunset Chillout & Rider Convoy',
    caption: 'Big bike tours, 4x4 lifestyle, and authentic barkada camaraderie',
    tag: 'Rider & Auto Lifestyle',
    location: 'Scenic Hill Overlook · Bicol',
    fallbackFile: 'slide 6.png',
  },
];

// Helper to find the best matching image URL from glob imports
function resolveFolderImage(slideNum: number): string | null {
  const entries = Object.entries(globImages);

  // 1. Try finding exact "slide {N}.jpg" first
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
  
  // Custom images loaded from user device (persisted in browser session)
  const [customSlides, setCustomSlides] = useState<Record<number, string>>(() => {
    try {
      const stored = localStorage.getItem('boss_jar_custom_slides_v2');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Instant in-browser file picker: select slide 1.jpg up to slide 6.jpg from your device
  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newMap: Record<number, string> = { ...customSlides };
    const fileList = Array.from(files);

    fileList.forEach((file, index) => {
      let targetSlot = index + 1;
      const name = file.name.toLowerCase();

      for (let i = 1; i <= 6; i++) {
        if (
          name.includes(`slide ${i}`) || 
          name.includes(`slide${i}`) || 
          name.includes(`slide_${i}`) || 
          name.startsWith(`${i}.`) ||
          name.startsWith(`${i} `)
        ) {
          targetSlot = i;
          break;
        }
      }

      if (targetSlot >= 1 && targetSlot <= 6) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string;
          if (dataUrl) {
            newMap[targetSlot] = dataUrl;
            setCustomSlides((prev) => {
              const updated = { ...prev, [targetSlot]: dataUrl };
              try {
                localStorage.setItem('boss_jar_custom_slides_v2', JSON.stringify(updated));
              } catch (err) {
                console.warn('Storage limit reached', err);
              }
              return updated;
            });
          }
        };
        reader.readAsDataURL(file);
      }
    });

    setNotification(`Successfully synced ${fileList.length} slide image(s)!`);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleResetToFolder = () => {
    localStorage.removeItem('boss_jar_custom_slides_v2');
    setCustomSlides({});
    setNotification('Reset to folder files.');
    setTimeout(() => setNotification(null), 3000);
  };

  const currentSlide = SLIDE_DEFINITIONS[currentIndex];
  
  // Resolve image in order: 
  // 1. User uploaded in browser
  // 2. Resolved from src/assets/carousel/ (supports .jpg and .png)
  // 3. Fallback public path
  const folderResolved = resolveFolderImage(currentSlide.slideNumber);
  const activeImageSrc = customSlides[currentSlide.slideNumber] || folderResolved || `/carousel/${currentSlide.fileName}`;
  const isCustomActive = Boolean(customSlides[currentSlide.slideNumber]);

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
          
          {/* Main Slide Image */}
          <div className="w-full h-full relative">
            <img
              key={`slide-${currentSlide.slideNumber}-${activeImageSrc.slice(0, 32)}`}
              src={activeImageSrc}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-opacity duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes(currentSlide.fallbackFile)) {
                  target.src = `/carousel/${currentSlide.fallbackFile}`;
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
                  {isCustomActive && (
                    <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded font-mono font-bold">
                      Original JPG
                    </span>
                  )}
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
                {SLIDE_DEFINITIONS.map((s, idx) => {
                  const hasCustom = Boolean(customSlides[s.slideNumber]);
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentIndex(idx)}
                      type="button"
                      className={`h-1.5 rounded-full transition-all focus:outline-none ${
                        idx === currentIndex
                          ? 'w-6 bg-amber-400'
                          : hasCustom
                            ? 'w-2.5 bg-red-400'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* Carousel Footer Bar with JPG / File Sync Button */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700">
          <div className="flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-red-600 shrink-0" />
            <span className="font-bold text-slate-900">Current:</span>
            <span className="text-slate-600 font-mono text-[11px]">
              Slide {currentSlide.slideNumber} ({currentSlide.fileName})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFilesSelected} 
              multiple 
              accept=".jpg,.jpeg,.png,.webp,image/*" 
              className="hidden" 
            />
            
            <button
              onClick={() => fileInputRef.current?.click()}
              type="button"
              className="px-2.5 py-1 rounded bg-amber-400 hover:bg-amber-300 border border-amber-500 text-slate-950 font-heading font-bold text-[11px] flex items-center gap-1 shadow-2xs transition-all"
              title="Select slide 1.jpg to slide 6.jpg from your computer"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span>Select Your 6 .JPGs</span>
            </button>

            {Object.keys(customSlides).length > 0 && (
              <button
                onClick={handleResetToFolder}
                type="button"
                className="p-1 rounded text-slate-500 hover:text-red-600 transition-colors"
                title="Reset to default files"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="absolute top-4 right-4 z-40 p-2.5 rounded-lg bg-slate-900 border border-amber-400 text-white shadow-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
};
