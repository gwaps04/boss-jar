import React from 'react';
import { 
  UserCheck, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  Zap, 
  Quote, 
  MapPin, 
  Radio
} from 'lucide-react';

export const AboutBossSection: React.FC = () => {
  return (
    <section id="about-boss" className="py-20 md:py-24 bg-gradient-to-b from-[#e8f1f8] via-[#f4f8fc] to-[#ffffff] border-b border-slate-200/90 relative overflow-hidden">
      {/* Subtle pearl and silver ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STORY & BIO */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-red-600" />
              Authentic & Humane
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              About the Boss: The Man Behind 1.8M Smiles
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Behind the viral laughter, motorcycle gear, and trademark swagger is someone deeply rooted in everyday Filipino life. <span className="text-slate-950 font-bold">Boss Jar</span> didn't rise through artificial PR gimmicks — he earned his massive 1.8M community by capturing the unscripted humor of everyday Pinoys in streets, eateries, convenience stores, and provincial highways.
              </p>

              <p>
                Whether he's stopping by a roadside stall in Albay with Mayon Volcano towering in the background, or walking into a seaside resort with hilarious deadpan negotiation tactics, Boss Jar remains genuinely approachable. He is the "Boss" who listens to service crews, tips generously, and turns ordinary moments into unforgettable shared memories.
              </p>

              <p>
                For enterprise partners in retail, hospitality, and dining, Boss Jar represents that rare bridge: high-volume organic viral reach combined with strict commercial discipline, brand safety, and measurable customer conversions.
              </p>
            </div>

            {/* Signature Quote Card */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 border-y border-r border-amber-200/60 relative shadow-2xs">
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-slate-900 font-medium leading-relaxed">
                "Sa comedy, hindi kailangan mang-apak ng tao para magpatawa. Ang tunay na Boss, pinapasaya ang bawat nakakasalubong — mula sa cashier hanggang sa hotel manager. Yung saya, yun ang tatatak sa customer."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-heading font-bold text-slate-950">— Boss Jar</span>
                <span className="text-slate-600 font-medium">Filipino Comedy Influencer</span>
              </div>
            </div>

            {/* 4 Professional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-950 font-heading font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-red-600" />
                  Grounded & Humane
                </div>
                <p className="text-xs text-slate-600">
                  Zero pretensions; respects service crews, store staff, and local communities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-950 font-heading font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  Brand-Safe Execution
                </div>
                <p className="text-xs text-slate-600">
                  Clean comedic themes designed for family audiences and corporate compliance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-950 font-heading font-bold text-sm">
                  <Zap className="w-4 h-4 text-amber-600" />
                  High Conversion Rate
                </div>
                <p className="text-xs text-slate-600">
                  Followers take action: testing dishes, visiting branches, and buying merchandise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-950 font-heading font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-red-600" />
                  Rapid Turnaround
                </div>
                <p className="text-xs text-slate-600">
                  Professional production team ensuring on-time delivery for seasonal campaigns.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: PHOTO / CREDENTIAL PROFILE CARD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border-2 border-slate-900 shadow-xl relative">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 p-1 shrink-0 overflow-hidden shadow-xs">
                  <img
                    src="/boss-jar-logo.png"
                    alt="Boss Jar Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/logo.svg';
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-950 flex items-center gap-1.5">
                    Boss Jar
                    <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-mono font-bold uppercase">
                      Official
                    </span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>Philippines · Nationwide Touring</span>
                  </div>
                </div>
              </div>

              {/* Verified Facts & Career Highlights */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100 font-medium">
                  <span className="text-slate-500">Total Digital Reach</span>
                  <span className="font-extrabold text-slate-950 tabular-nums">1.8M+ Followers</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100 font-medium">
                  <span className="text-slate-500">Primary Formats</span>
                  <span className="font-bold text-slate-900">Short-form Reels, TikToks & Travel Vlogs</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100 font-medium">
                  <span className="text-slate-500">Target Verticals</span>
                  <span className="font-bold text-red-600">Retail, Hotels, Food Chains, Moto Gear</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-100 font-medium">
                  <span className="text-slate-500">Production Standards</span>
                  <span className="font-bold text-slate-900">4K 60fps Cinema Mobile & Drone Rig</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 font-medium">
                  <span className="text-slate-500">Agency Collaboration</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
                    Direct Brand & Media Agency Ready
                  </span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <a
                href="#collab"
                className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Request Brand Collaboration</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
