import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { BookingFormState } from '../types';

interface CollabBookingSectionProps {
  onOpenRateCard: () => void;
}

export const CollabBookingSection: React.FC<CollabBookingSectionProps> = ({ onOpenRateCard }) => {
  const [formData, setFormData] = useState<BookingFormState>({
    brandName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: 'Retail & Convenience',
    campaignType: 'Dedicated Sponsored Skit / Reel',
    budgetRange: '₱150,000 - ₱350,000',
    timeline: 'Within 2 - 4 Weeks',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to talent management
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setInquiryId(`BJ-COLLAB-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      brandName: '',
      contactPerson: '',
      email: '',
      phone: '',
      industry: 'Retail & Convenience',
      campaignType: 'Dedicated Sponsored Skit / Reel',
      budgetRange: '₱150,000 - ₱350,000',
      timeline: 'Within 2 - 4 Weeks',
      message: '',
    });
  };

  return (
    <section id="collab" className="py-20 md:py-24 bg-[#f8f9fa] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: COLLABORATION VALUE & DIRECT CONTACT */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                Brand Partnership Inquiry
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                Collab With Me
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Ready to introduce your brand to 1.8 Million engaged fans? Let's develop a comedy concept that resonates authentically with Filipino consumers.
              </p>
            </div>

            {/* Response Time & Guarantee Banner */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-slate-900">
                    24-Hour Response Guarantee
                  </div>
                  <div className="text-xs text-slate-600">
                    Boss Jar's management team reviews all brand briefs within 1 business day.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Formal Contract & Official Receipt</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> BIR Registered
                </span>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Direct Management Channels
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <Mail className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Official Brand Bookings</div>
                    <div className="text-slate-900 font-mono font-bold">bookings@bossjar.ph</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Talent Manager (Viber / WhatsApp)</div>
                    <div className="text-slate-900 font-mono font-bold">+63 (917) 888-BOSS (2677)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <MapPin className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Base Studios</div>
                    <div className="text-slate-700 font-medium">Metro Manila & Legazpi City, Bicol</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Media Kit Button */}
            <div className="pt-2">
              <button
                onClick={onOpenRateCard}
                type="button"
                className="text-xs font-bold text-slate-700 hover:text-red-600 flex items-center gap-2 underline underline-offset-4 transition-colors"
              >
                Download standard campaign packages & deliverables matrix →
              </button>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE BOOKING FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="font-heading font-extrabold text-xl text-slate-900">
                      Campaign Brief & Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out your campaign parameters below for an expedited proposal.
                    </p>
                  </div>

                  {/* Brand & Contact Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Brand / Business Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="brandName"
                        required
                        value={formData.brandName}
                        onChange={handleChange}
                        placeholder="e.g., 7-Eleven, Maya Cafe, Luxe Resort"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Contact Person & Role <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g., Maria Santos (Marketing Lead)"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Business Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="maria@company.ph"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone / Viber Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 917 123 4567"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Industry & Campaign Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Industry / Category
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      >
                        <option value="Retail & Convenience">Retail & Convenience Store</option>
                        <option value="Hotels & Resorts">Hotels, Resorts & Tourism</option>
                        <option value="Food & Beverage">Food, Dining & Franchises</option>
                        <option value="Automotive & Moto">Motorcycle, Gear & Auto</option>
                        <option value="Consumer Tech & Apps">Consumer Tech, Fintech & Apps</option>
                        <option value="Small Business">Local Small Business / MSME</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Desired Collaboration Format
                      </label>
                      <select
                        name="campaignType"
                        value={formData.campaignType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      >
                        <option value="Dedicated Sponsored Skit / Reel">Dedicated Viral Comedy Skit (Reel + TikTok)</option>
                        <option value="Store Visit & Grand Opening">Branch Visit, Tasting & Store Opening</option>
                        <option value="Resort Weekend Vlog">Resort / Hotel Travel Staycation Series</option>
                        <option value="Brand Ambassadorship">Quarterly / Annual Brand Ambassador</option>
                        <option value="Live Event Host / Rider Appearance">Live Event Appearance & Host</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Range & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Estimated Budget Bracket
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      >
                        <option value="₱50,000 - ₱150,000">₱50,000 - ₱150,000 (MSME Starter)</option>
                        <option value="₱150,000 - ₱350,000">₱150,000 - ₱350,000 (Standard Branded Skit)</option>
                        <option value="₱350,000 - ₱750,000">₱350,000 - ₱750,000 (Multi-Platform Blitz)</option>
                        <option value="₱750,000+">₱750,000+ (Full Campaign / Tour Series)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Campaign Target Date
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      >
                        <option value="Immediate (Within 1-2 Weeks)">Immediate (Within 1-2 Weeks)</option>
                        <option value="Within 2 - 4 Weeks">Within 2 - 4 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Next Quarter Planning">Next Quarter Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Campaign Objectives & Product Brief <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Boss Jar about your product, branch locations, target audience, or any funny skit scenario you have in mind..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-4 px-6 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all duration-150 shadow-sm border border-amber-500/50 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Transmitting Proposal to Boss Jar Management...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Booking Inquiry</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-medium">
                    All proposals are kept strictly confidential under standard non-disclosure.
                  </p>

                </form>
              ) : (
                /* SUBMISSION SUCCESS CARD */
                <div className="py-8 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                      Reference: {inquiryId}
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-slate-950 mt-1">
                      Inquiry Received, Boss!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-slate-950 font-bold">{formData.contactPerson}</span>. We received the brief for <span className="text-red-600 font-bold">{formData.brandName}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-slate-600">
                      <span>Category:</span>
                      <span className="text-slate-950 font-bold">{formData.industry}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Campaign Format:</span>
                      <span className="text-slate-950 font-bold">{formData.campaignType}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Budget Tier:</span>
                      <span className="text-red-600 font-bold">{formData.budgetRange}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Target Timeline:</span>
                      <span className="text-slate-950 font-bold">{formData.timeline}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    A dedicated campaign coordinator from Boss Jar Media will contact you at <span className="text-slate-900 font-bold">{formData.email}</span> within 24 hours with concept storyboards and scheduling options.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-900 transition-all border border-slate-200"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      onClick={onOpenRateCard}
                      type="button"
                      className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-xs font-bold text-slate-950 transition-all shadow-xs"
                    >
                      Review Deliverables Matrix
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
