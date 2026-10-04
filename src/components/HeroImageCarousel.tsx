import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  UploadCloud, 
  ImageIcon, 
  X, 
  RefreshCw, 
  Check, 
  AlertCircle 
} from 'lucide-react';

// Vite ESM imports as reliable defaults
import defaultHeroImg from '../assets/hero section image.jpg';
import defaultLogoImg from '../assets/boss jar navigation logo.png';

interface SlideConfig {
  id: string;
  slideNumber: number;
  fileName: string;
  title: string;
  caption: string;
  tag: string;
  location: string;
  defaultSrc: string;
  fallbackPath: string;
}

const DEFAULT_SLIDES: SlideConfig[] = [
  {
    id: 'slide-1',
    slideNumber: 1,
    fileName: 'slide 1.png',
    title: 'Boss Jar on Location',
    caption: 'Real grassroots influence & everyday street comedy',
    tag: 'Location Shoot',
    location: 'Legazpi City · Mayon Volcano Backdrop',
    defaultSrc: defaultHeroImg,
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
    defaultSrc: defaultLogoImg,
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
    defaultSrc: defaultHeroImg,
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
    defaultSrc: defaultLogoImg,
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
    defaultSrc: defaultHeroImg,
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
    defaultSrc: defaultLogoImg,
    fallbackPath: '/carousel/slide 6.png',
  },
];

export const HeroImageCarousel: React.FC = () => {
  // Store custom uploaded slide image URLs (persisted in localStorage)
  const [customSlideImages, setCustomSlideImages] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('boss_jar_carousel_slides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);

  const bulkInputRef = useRef<HTMLInputElement>(null);
  const singleInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  // Auto-advance slides every 5.5s unless hovered or modal open
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEFAULT_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen]);

  // Persist custom slides to localStorage
  const saveCustomImages = (newMap: Record<number, string>) => {
    setCustomSlideImages(newMap);
    try {
      localStorage.setItem('boss_jar_carousel_slides', JSON.stringify(newMap));
    } catch (e) {
      console.warn('Storage limit reached, saved to active session only', e);
    }
  };

  // Handle single slide upload
  const handleSingleUpload = (slideNumber: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        const updated = { ...customSlideImages, [slideNumber]: result };
        saveCustomImages(updated);
        showUploadSuccess(`Slide ${slideNumber} (${file.name}) updated successfully!`);
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle bulk upload of up to 6 slides
  const handleBulkUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const updated = { ...customSlideImages };
    let filesProcessed = 0;

    Array.from(files).forEach((file) => {
      // Try to match file name: "slide 1", "slide1", "1.png", etc.
      let matchedNumber: number | null = null;
      const lower = file.name.toLowerCase();
      
      for (let i = 1; i <= 6; i++) {
        if (
          lower.includes(`slide ${i}`) || 
          lower.includes(`slide${i}`) || 
          lower.includes(`slide_${i}`) ||
          lower.includes(`slide-${i}`) ||
          lower.startsWith(`${i}.`)
        ) {
          matchedNumber = i;
          break;
        }
      }

      // If no number in name, assign to next empty slot or based on index
      if (!matchedNumber && filesProcessed < 6) {
        matchedNumber = filesProcessed + 1;
      }

      if (matchedNumber && matchedNumber >= 1 && matchedNumber <= 6) {
        const reader = new FileReader();
        const targetSlot = matchedNumber;
        reader.onload = (e) => {
          const res = e.target?.result as string;
          if (res) {
            updated[targetSlot] = res;
            saveCustomImages({ ...updated });
          }
        };
        reader.readAsDataURL(file);
      }
      filesProcessed++;
    });

    showUploadSuccess(`Imported ${filesProcessed} slide(s) into carousel!`);
  };

  const showUploadSuccess = (msg: string) => {
    setUploadSuccessMessage(msg);
    setTimeout(() => setUploadSuccessMessage(null), 4000);
  };

  const handleResetSlides = () => {
    localStorage.removeItem('boss_jar_carousel_slides');
    setCustomSlideImages({});
    showUploadSuccess('Restored default slide artwork.');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? DEFAULT_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DEFAULT_SLIDES.length);
  };

  const currentSlide = DEFAULT_SLIDES[currentIndex];
  const activeImageSrc = customSlideImages[currentSlide.slideNumber] || currentSlide.fallbackPath;
  const hasCustomUpload = Boolean(customSlideImages[currentSlide.slideNumber]);

  return (
    <div 
      className="relative mx-auto max-w-[430px] lg:max-w-none w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Clean Framing (Red, White, Yellow, Black Palette) */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 bg-white shadow-xl">
        
        {/* Aspect Ratio Container (3/4 portrait ratio) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900 group">
          
          {/* Main Slide Image */}
          <div className="w-full h-full relative">
            <img
              key={`slide-${currentSlide.slideNumber}-${activeImageSrc.slice(0, 30)}`}
              src={activeImageSrc}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-opacity duration-300"
              onError={(e) => {
                // Cascading Fallback chain
                const target = e.target as HTMLImageElement;
                if (target.src !== currentSlide.defaultSrc) {
                  target.src = currentSlide.defaultSrc;
                } else if (target.src !== '/hero-image.jpg') {
                  target.src = '/hero-image.jpg';
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
              <span>Slide {currentSlide.slideNumber} of {DEFAULT_SLIDES.length}</span>
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
                  {hasCustomUpload && (
                    <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded font-mono font-bold">
                      Active Asset
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
                {DEFAULT_SLIDES.map((s, idx) => {
                  const isCustom = Boolean(customSlideImages[s.slideNumber]);
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentIndex(idx)}
                      type="button"
                      className={`h-1.5 rounded-full transition-all focus:outline-none ${
                        idx === currentIndex
                          ? 'w-6 bg-amber-400'
                          : isCustom 
                            ? 'w-2.5 bg-red-400 hover:bg-red-300'
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

        {/* Carousel Footer Bar & Manage Modal Trigger */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-red-600" />
            <span className="font-bold text-slate-900">Carousel:</span>
            <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">slide 1.png – slide 6.png</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs border border-amber-500/50"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span>Attach / Sync 6 Slides</span>
            </button>
          </div>
        </div>

      </div>

      {/* SUCCESS TOAST */}
      {uploadSuccessMessage && (
        <div className="absolute top-4 right-4 z-40 p-3 rounded-xl bg-slate-900 border border-amber-400 text-white shadow-xl flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-top">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{uploadSuccessMessage}</span>
        </div>
      )}

      {/* MANAGE / SYNC SLIDES MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                  <UploadCloud className="w-4 h-4 text-red-600" />
                  Hero Carousel Asset Manager
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-950">
                  Attach Slide 1.png to Slide 6.png
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Upload your 6 photos from your computer. They will immediately render live in the carousel.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shadow-2xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Quick Bulk Dropzone */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border-2 border-dashed border-amber-400 text-center space-y-3">
                <input
                  type="file"
                  ref={bulkInputRef}
                  onChange={(e) => handleBulkUpload(e.target.files)}
                  multiple
                  accept="image/*"
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 mx-auto flex items-center justify-center shadow-xs">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-950">
                    Upload All 6 Slides at Once
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Select your files named <span className="font-mono font-bold text-red-600">slide 1.png</span> through <span className="font-mono font-bold text-red-600">slide 6.png</span>
                  </p>
                </div>
                <button
                  onClick={() => bulkInputRef.current?.click()}
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-black text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  Choose Images from Device
                </button>
              </div>

              {/* 6 Individual Slide Slots Grid */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Individual Slide Slots (1 to 6)
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DEFAULT_SLIDES.map((slide) => {
                    const isCustom = Boolean(customSlideImages[slide.slideNumber]);
                    const preview = customSlideImages[slide.slideNumber] || slide.fallbackPath;

                    return (
                      <div 
                        key={slide.id}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                          isCustom ? 'bg-red-50/40 border-red-300' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-14 rounded-lg bg-slate-200 overflow-hidden shrink-0 border border-slate-300">
                            <img
                              src={preview}
                              alt={`Slot ${slide.slideNumber}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = slide.defaultSrc;
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-heading font-bold text-slate-900">
                                Slide {slide.slideNumber}
                              </span>
                              {isCustom && (
                                <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.2 rounded">
                                  Synced
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] font-mono text-slate-500 truncate">
                              {slide.fileName}
                            </div>
                          </div>
                        </div>

                        <div>
                          <input
                            type="file"
                            ref={(el) => {
                              singleInputRefs.current[slide.slideNumber] = el;
                            }}
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) handleSingleUpload(slide.slideNumber, f);
                            }}
                            accept="image/*"
                            className="hidden"
                          />
                          <button
                            onClick={() => singleInputRefs.current[slide.slideNumber]?.click()}
                            type="button"
                            className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition-all shadow-2xs whitespace-nowrap"
                          >
                            {isCustom ? 'Change' : 'Upload'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Helpful Hint on Git & Vercel */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold text-slate-900">Git & Vercel Sync:</span> When pushing to GitHub/Vercel, images placed in <span className="font-mono text-red-600 font-bold">src/assets/carousel/</span> or <span className="font-mono text-red-600 font-bold">public/carousel/</span> will be automatically built and bundled into production. Uploading here previews them immediately in your active browser session.
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={handleResetSlides}
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Done & View Carousel</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
