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
    <section id="partnerships" className="py-20 md:py-24 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-red-600" />
            Enterprise Proven Track Record
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Partnerships & Brand ROI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Boss Jar doesn't just create laughing reactions — he drives physical store visits, resort reservations, and viral product awareness with enterprise-grade campaign execution.
          </p>
        </div>

        {/* TRUSTED BY LOGO STRIP */}
        <div className="mb-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex flex-wrap items-center justify-between gap-2">
            <span>Trusted in Retail, Hospitality, Food & Motoring</span>
            <span className="text-red-600 font-extrabold">120+ Completed Campaigns</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {TRUSTED_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-center items-center text-center transition-all hover:border-red-400 hover:bg-white hover:shadow-xs"
              >
                <span className="text-sm font-heading font-bold text-slate-900 tracking-tight">
                  {brand.name}
                </span>
                <span className="text-[11px] font-medium text-slate-500 mt-0.5">
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
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
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-red-500 transition-all duration-200 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md relative group"
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
                  <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.brandName}
                  </h3>
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
                  <div className="text-xs text-slate-700 font-semibold">
                    {item.metricLabel}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Deliverables Info */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate pr-2">
                  <span className="text-slate-800 font-bold">Scope:</span> {item.deliverables}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="shrink-0 text-slate-900 font-bold flex items-center gap-1 hover:text-red-600 transition-colors"
                >
                  Book Similar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* AUDIENCE DEMOGRAPHICS BREAKDOWN */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                <Award className="w-4 h-4 text-red-600" />
                Audience Quality & Reach
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-950">
                Who Watches Boss Jar?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                A high-spending demographic of young professionals, families, students, and motorbike enthusiasts.
              </p>
            </div>

            <button
              onClick={onOpenRateCard}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider text-slate-900 border border-slate-200 transition-all flex items-center gap-2 self-start md:self-auto"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Full Analytics PDF</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Age Distribution */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                Age Brackets
              </div>
              <div className="space-y-3">
                {AUDIENCE_DEMOGRAPHICS.age.map((a) => (
                  <div key={a.label}>
                    <div className="flex justify-between text-xs text-slate-700 mb-1 font-medium">
                      <span>{a.label} years old</span>
                      <span className="font-bold text-slate-950">{a.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-red-600"
                        style={{ width: `${a.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gender Split */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                  Gender Ratio
                </div>
                <div className="grid grid-cols-2 gap-3 text-center my-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-3xl font-heading font-black text-slate-950">62%</div>
                    <div className="text-xs font-medium text-slate-600 mt-1">Male Viewers</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-3xl font-heading font-black text-slate-950">38%</div>
                    <div className="text-xs font-medium text-slate-600 mt-1">Female Viewers</div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Strong balance between motorcycle/lifestyle enthusiasts and family/food lovers.
              </p>
            </div>

            {/* Top Geographic Hubs */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                Top Geographic Concentration
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                {AUDIENCE_DEMOGRAPHICS.topRegions.map((region) => (
                  <li key={region} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />
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
