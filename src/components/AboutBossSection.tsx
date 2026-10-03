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
    <section id="about-boss" className="py-20 md:py-28 bg-[#0e1017] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#ffd000]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STORY & BIO */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ffd000] uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-[#ffd000]" />
              Authentic & Humane
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              About the Boss: The Man Behind 1.8M Smiles
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Behind the viral laughter, motorcycle gear, and trademark swagger is someone deeply rooted in everyday Filipino life. <span className="text-white font-semibold">Boss Jar</span> didn't rise through artificial PR gimmicks — he earned his massive 1.8M community by capturing the unscripted humor of everyday Pinoys in streets, eateries, convenience stores, and provincial highways.
              </p>

              <p>
                Whether he's stopping by a roadside stall in Albay with Mayon Volcano towering in the background, or walking into a high-end seaside resort with hilarious deadpan negotiation tactics, Boss Jar remains genuinely approachable. He is the "Boss" who listens to service crews, tips generously, and turns ordinary moments into unforgettable shared memories.
              </p>

              <p>
                For enterprise partners in retail, hospitality, and dining, Boss Jar represents that rare bridge: high-volume organic viral reach combined with strict commercial discipline, brand safety, and measurable customer conversions.
              </p>
            </div>

            {/* Signature Quote Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border-l-4 border-[#ff1a35] border-y border-r border-white/10 relative shadow-lg">
              <Quote className="w-8 h-8 text-[#ff1a35]/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-zinc-200 font-medium leading-relaxed">
                "Sa comedy, hindi kailangan mang-apak ng tao para magpatawa. Ang tunay na Boss, pinapasaya ang bawat nakakasalubong — mula sa cashier hanggang sa hotel manager. Yung saya, yun ang tatatak sa customer."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-heading font-bold text-white">— Boss Jar</span>
                <span className="text-zinc-500">Filipino Comedy Creator</span>
              </div>
            </div>

            {/* 4 Professional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#ffd000]" />
                  Grounded & Humane
                </div>
                <p className="text-xs text-zinc-400">
                  Zero pretensions; respects service crews, store staff, and local communities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#ff1a35]" />
                  Brand-Safe Execution
                </div>
                <p className="text-xs text-zinc-400">
                  Clean comedic themes designed for family audiences and corporate compliance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <Zap className="w-4 h-4 text-[#ffd000]" />
                  High Conversion Rate
                </div>
                <p className="text-xs text-zinc-400">
                  Followers take action: testing dishes, visiting branches, and buying merchandise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#ff1a35]" />
                  Rapid Turnaround
                </div>
                <p className="text-xs text-zinc-400">
                  Professional production team ensuring on-time delivery for seasonal campaigns.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: PHOTO / CREDENTIAL PROFILE CARD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0f1017] border border-white/10 shadow-2xl relative">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border-2 border-[#ffd000] p-1 shrink-0 overflow-hidden shadow-md">
                  <img
                    src="/src/assets/logo.svg"
                    alt="Boss Jar Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white flex items-center gap-1.5">
                    Boss Jar
                    <span className="text-[10px] bg-[#ff1a35] text-white px-2 py-0.5 rounded font-mono font-bold uppercase">
                      Official
                    </span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ffd000]" />
                    <span>Philippines · Nationwide Touring</span>
                  </div>
                </div>
              </div>

              {/* Verified Facts & Career Highlights */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400">Total Digital Reach</span>
                  <span className="font-bold text-white tabular-nums">1.8M+ Followers</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400">Primary Formats</span>
                  <span className="font-bold text-white">Short-form Reels, TikToks & Travel Vlogs</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400">Target Verticals</span>
                  <span className="font-bold text-[#ffd000]">Retail, Hotels, Food Chains, Moto Gear</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400">Production Standards</span>
                  <span className="font-bold text-white">4K 60fps Cinema Mobile & Drone Rig</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2">
                  <span className="text-zinc-400">Agency Collaboration</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-ping" />
                    Open for Direct Brand & Media Agencies
                  </span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <a
                href="#collab"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff1a35] to-[#d90429] hover:from-[#e0112c] hover:to-[#b80c23] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-900/30"
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
