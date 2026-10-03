import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  Hotel, 
  Utensils, 
  Bike, 
  TrendingUp, 
  CheckCircle, 
  FileText, 
  Award,
  ArrowRight
} from 'lucide-react';
import { PARTNERSHIPS_LIST, TRUSTED_BRANDS, AUDIENCE_DEMOGRAPHICS } from '../data/portfolioData';

interface PartnershipsSectionProps {
  onOpenBooking: () => void;
  onOpenRateCard: () => void;
}

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ 
  onOpenBooking, 
  onOpenRateCard 
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = [
    { label: 'All Industries', value: 'All' },
    { label: 'Retail & Convenience', value: 'Retail', icon: Store },
    { label: 'Hotels & Hospitality', value: 'Hotels & Resorts', icon: Hotel },
    { label: 'Food & Dining', value: 'Food & Dining', icon: Utensils },
    { label: 'Automotive & Gear', value: 'Automotive & Gear', icon: Bike },
  ];

  const filteredCases = selectedIndustry === 'All'
    ? PARTNERSHIPS_LIST
    : PARTNERSHIPS_LIST.filter((item) => item.industry === selectedIndustry);

  return (
    <section id="partnerships" className="py-20 md:py-28 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#ff1a35] uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-[#ff1a35]" />
            Enterprise Proven Track Record
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Partnerships & Brand ROI
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
            Boss Jar doesn't just create laughing reactions — he drives physical store visits, resort reservations, and viral product awareness with enterprise-grade campaign execution.
          </p>
        </div>

        {/* TRUSTED BY LOGO / TICKER STRIP */}
        <div className="mb-16 p-6 rounded-2xl bg-[#12141c] border border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center justify-between">
            <span>Collaborated with Leaders in Retail, Hospitality & Food</span>
            <span className="text-[#ffd000]">120+ Completed Campaigns</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUSTED_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/5 flex flex-col justify-center items-center text-center transition-all hover:border-white/20 hover:bg-zinc-800/80"
              >
                <span className="text-sm font-heading font-bold text-white tracking-wide">
                  {brand.name}
                </span>
                <span className="text-[11px] text-zinc-400 mt-0.5">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRY FILTER TABS */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {industries.map((ind) => {
            const isActive = selectedIndustry === ind.value;
            const Icon = ind.icon;
            return (
              <button
                key={ind.value}
                onClick={() => setSelectedIndustry(ind.value)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000] ${
                  isActive
                    ? 'bg-[#ffd000] text-black shadow-md shadow-yellow-500/20'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* CASE STUDY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#14161f] border border-white/10 hover:border-[#ff1a35]/60 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#ff1a35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#ffd000] tracking-wider uppercase">
                    {item.industry}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400 bg-white/5 px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#ffd000] transition-colors">
                    {item.brandName}
                  </h3>
                  <div className="text-sm font-medium text-[#ff4d64] mt-0.5">
                    Campaign: {item.campaignTitle}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Concrete Metric Callout */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-black text-[#ffd000] tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">
                    {item.metricLabel}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ff1a35]/15 flex items-center justify-center text-[#ff1a35]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Deliverables Info */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span className="truncate pr-2">
                  <span className="text-zinc-200 font-semibold">Scope:</span> {item.deliverables}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="shrink-0 text-white font-semibold flex items-center gap-1 hover:text-[#ffd000] transition-colors"
                >
                  Book Similar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* AUDIENCE DEMOGRAPHICS BREAKDOWN (Proves enterprise value) */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#151822] to-[#0f1118] border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffd000] uppercase tracking-wider mb-1">
                <Award className="w-4 h-4 text-[#ffd000]" />
                Audience Quality & Reach
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                Who Watches Boss Jar?
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                A high-spending demographic of young professionals, families, students, and motorbike enthusiasts.
              </p>
            </div>

            <button
              onClick={onOpenRateCard}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white border border-white/20 transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <FileText className="w-4 h-4 text-[#ffd000]" />
              <span>Full Analytics PDF</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Age Distribution */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                Age Brackets
              </div>
              <div className="space-y-3">
                {AUDIENCE_DEMOGRAPHICS.age.map((a) => (
                  <div key={a.label}>
                    <div className="flex justify-between text-xs text-zinc-300 mb-1">
                      <span>{a.label} years old</span>
                      <span className="font-bold text-white">{a.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#ffd000] to-[#ff1a35]"
                        style={{ width: `${a.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gender Split */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                  Gender Ratio
                </div>
                <div className="grid grid-cols-2 gap-3 text-center my-4">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-white/5">
                    <div className="text-3xl font-heading font-black text-white">62%</div>
                    <div className="text-xs text-zinc-400 mt-1">Male Viewers</div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-white/5">
                    <div className="text-3xl font-heading font-black text-white">38%</div>
                    <div className="text-xs text-zinc-400 mt-1">Female Viewers</div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal">
                Strong balance between motorcycle/lifestyle enthusiasts and family/food lovers.
              </p>
            </div>

            {/* Top Geographic Hubs */}
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                Top Geographic Concentration
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                {AUDIENCE_DEMOGRAPHICS.topRegions.map((region) => (
                  <li key={region} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#ffd000] shrink-0" />
                    <span>{region}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
