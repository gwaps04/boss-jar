import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  Hotel, 
  Utensils, 
  Sparkles,
  TrendingUp, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { PARTNER_BRANDS, PartnerBrand } from './PartnerLogos';

interface PartnershipsSectionProps {
  onOpenBooking: () => void;
  onOpenRateCard: () => void;
}

// Case studies grounded in Boss Jar's actual commercial brand partners
const REAL_PARTNERSHIP_CASES = [
  {
    id: 'case-1',
    brandName: 'Papa Tan Tan Apartelle & Misibis Bay',
    industry: 'Hospitality & Resorts',
    campaignTitle: 'Bicol Staycation & VIP Resort Takeover',
    metric: 'Fully Booked',
    metricLabel: 'Peak Weekend Inquiries & Booking Spikes',
    description: 'A blend of luxury island relaxation at Misibis Bay and cozy getaway vibes at Papa Tan Tan Apartelle. Turned travel humor into tangible hotel inquiries.',
    deliverables: '2 Dedicated Facebook Reels + In-Room Comedy Skit + Booking Promo Code',
    badge: 'Hospitality & Staycation'
  },
  {
    id: 'case-2',
    brandName: 'Midea Windmax & Ilaw atbpa.',
    industry: 'Retail & Appliances',
    campaignTitle: 'Ultimate Home Comfort & Summer Cooling Makeover',
    metric: '+38%',
    metricLabel: 'Showroom Foot Traffic & Retail Inquiries',
    description: 'Relatable summer heat comedy showcasing Midea Windmax cooling power paired with Ilaw atbpa. modern home aesthetic lighting fixtures.',
    deliverables: 'Dedicated Store Walkthrough Reel + Viral Skit + Story Mentions',
    badge: 'Retail & Commercial'
  },
  {
    id: 'case-3',
    brandName: 'Bulawlohan & Kuya Boy Halo Halo',
    industry: 'Food & Dining',
    campaignTitle: 'Hot Bulalo & Overflowing Halo-Halo Road Trip',
    metric: '2.5M+',
    metricLabel: 'Total Video Views Across Bicol Foodies',
    description: 'Boss Jar took the motorcycle convoy to feast on Bulawlohan savory broth followed by Kuya Boy giant halo-halo cooling dessert, turning lunch into a trending viral stop.',
    deliverables: 'Food Review Comedy Skit + Store Visit + Menu Highlight',
    badge: 'Food & Dining Hit'
  },
  {
    id: 'case-4',
    brandName: 'Slick & Dapper Barbershop & OwnStyle Graphics',
    industry: 'Lifestyle & Services',
    campaignTitle: 'Fresh Cuts & Boss Swag Merchandising Collab',
    metric: '100% Sold',
    metricLabel: 'Limited Edition Collab Merch Out of Stock',
    description: 'On-site barbershop skit featuring Slick & Dapper signature grooming styles paired with custom print-on-demand jerseys manufactured by OwnStyle Graphics.',
    deliverables: 'Barbershop Skit + Apparel Showcase + Direct Customer Link',
    badge: 'Grooming & Apparel'
  }
];

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ 
  onOpenBooking, 
  onOpenRateCard 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All Partners (11)', value: 'All' },
    { label: 'Hospitality & Lodging', value: 'Hospitality', icon: Hotel },
    { label: 'Retail & Appliances', value: 'Retail & Tech', icon: Store },
    { label: 'Food & Dining', value: 'Food & Dining', icon: Utensils },
    { label: 'Health & Clinics', value: 'Health & Clinics', icon: Sparkles },
    { label: 'Lifestyle & Services', value: 'Lifestyle & Services', icon: Building2 },
  ];

  const filteredBrands: PartnerBrand[] = selectedCategory === 'All'
    ? PARTNER_BRANDS
    : PARTNER_BRANDS.filter((brand) => brand.category === selectedCategory);

  return (
    <section id="partnerships" className="py-20 md:py-24 bg-gradient-to-b from-[#ffffff] via-[#f1f6fb] to-[#e8f1f8] border-b border-slate-200 relative overflow-hidden">
      {/* Subtle ocean theme ambient accents */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200/80 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-red-600" />
            <span>Proven Commercial Track Record</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
            Commercial Brand Partners & Client Roster
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From premier island resorts and cooling appliances to specialty food diners and wellness clinics — Boss Jar converts organic audience laughter into genuine foot traffic, inquiries, and brand trust.
          </p>
        </div>

        {/* 11 BRAND PARTNERS WITH MINIMALIST LOGOS */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Official Brand Collaborations
              </span>
              <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-heading font-extrabold text-[11px]">
                11 Trusted Brands
              </span>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto max-w-full shadow-2xs">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    type="button"
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean 11-Brand Grid with Minimalist Vector Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-900 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Minimalist Logo Header */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center min-h-[58px] mb-4 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                    {brand.logo}
                  </div>

                  {/* Brand Meta */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                        {brand.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-slate-950 group-hover:text-red-600 transition-colors leading-snug">
                      {brand.name}
                    </h3>

                    <p className="text-xs font-semibold text-slate-700">
                      {brand.tagline}
                    </p>

                    <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Verified Partner</span>
                  <span className="text-amber-500 font-bold">★ Endorsement</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROVEN CAMPAIGN CASE STUDIES */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Measurable Impact
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-slate-950 mt-1">
                Campaign Case Studies & Real Results
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {REAL_PARTNERSHIP_CASES.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-red-500 transition-all duration-200 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-md relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-600 tracking-wider uppercase">
                      {item.industry}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.brandName}
                    </h4>
                    <div className="text-sm font-semibold text-slate-600 mt-1">
                      Campaign: {item.campaignTitle}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Concrete Metric Callout */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-black text-red-600 tabular-nums">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      {item.metricLabel}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Deliverables Breakdown */}
                <div className="text-xs font-medium text-slate-500 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Deliverables: {item.deliverables}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIENCE DEMOGRAPHICS (Enterprise Media Kit Proof) */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Audience Data & Media Kit
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Who Watches & Buys From Boss Jar?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A fiercely loyal, high-converting purchasing audience concentrated in high-spending 18-34 young professionals, motorists, family breadwinners, and Bicolano diaspora.
              </p>
            </div>

            {/* Demographic Bars */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Age */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Core Age Bracket
                </span>
                <div className="text-2xl font-heading font-extrabold text-white">
                  78%
                </div>
                <div className="text-xs text-slate-300">
                  Ages 18–34 (Young Professionals & Families)
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-amber-400 h-full w-[78%]" />
                </div>
              </div>

              {/* Gender */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Gender Split
                </span>
                <div className="text-2xl font-heading font-extrabold text-white">
                  62% M / 38% F
                </div>
                <div className="text-xs text-slate-300">
                  Strong Automotive, Retail & Dining affinity
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-red-500 h-full w-[62%]" />
                </div>
              </div>

              {/* Geographic Core */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Geographic Footprint
                </span>
                <div className="text-2xl font-heading font-extrabold text-white">
                  Nationwide
                </div>
                <div className="text-xs text-slate-300">
                  Bicol (Albay, Sorsogon, CamSur) + Mega Manila & OFWs
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-emerald-400 h-full w-[85%]" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Banner at bottom of Partnerships */}
        <div className="mt-12 p-8 rounded-2xl bg-amber-400 border-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-heading font-black text-slate-950">
              Want your brand featured on Boss Jar's viral channels?
            </h4>
            <p className="text-xs sm:text-sm text-slate-900 font-medium">
              Lock in your campaign slot today with transparent pricing, full production, and performance reporting.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRateCard}
              type="button"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xs border border-slate-900 transition-all"
            >
              View Rate Card
            </button>

            <button
              onClick={onOpenBooking}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all"
            >
              <span>Book Brand Collab</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
