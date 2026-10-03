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
    }, 1200);
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
    <section id="collab" className="py-20 md:py-28 bg-[#0b0c10] relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff1a35]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#ffd000]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: COLLABORATION VALUE & DIRECT CONTACT */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffd000] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#ffd000]" />
                Brand Partnership Inquiry
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Collab With Me
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
                Ready to introduce your brand to 1.8 Million engaged fans? Let's develop a comedy concept that resonates authentically with Filipino consumers.
              </p>
            </div>

            {/* Response Time & Guarantee Banner */}
            <div className="p-5 rounded-2xl bg-[#131620] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffd000]/10 flex items-center justify-center text-[#ffd000]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-white">
                    24-Hour Response Guarantee
                  </div>
                  <div className="text-xs text-zinc-400">
                    Boss Jar's management team reviews all brand decks within 1 business day.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Formal Contract & Official Receipt</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> BIR Registered
                </span>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Direct Management Channels
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
                  <Mail className="w-5 h-5 text-[#ff1a35] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-zinc-400">Official Brand Bookings</div>
                    <div className="text-white font-mono font-medium">bookings@bossjar.ph</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
                  <Phone className="w-5 h-5 text-[#ffd000] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-zinc-400">Talent Manager (Viber / WhatsApp)</div>
                    <div className="text-white font-mono font-medium">+63 (917) 888-BOSS (2677)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
                  <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-zinc-400">Base Studios</div>
                    <div className="text-zinc-300">Metro Manila & Legazpi City, Bicol</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Media Kit Button */}
            <div className="pt-2">
              <button
                onClick={onOpenRateCard}
                type="button"
                className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-2 underline underline-offset-4 transition-colors"
              >
                Download standard campaign packages & deliverables matrix →
              </button>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE BOOKING FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141620] border border-white/10 shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-heading font-bold text-xl text-white">
                      Campaign Brief & Inquiry Form
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fill out your campaign parameters below for an expedited proposal.
                    </p>
                  </div>

                  {/* Brand & Contact Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Brand / Business Name <span className="text-[#ff1a35]">*</span>
                      </label>
                      <input
                        type="text"
                        name="brandName"
                        required
                        value={formData.brandName}
                        onChange={handleChange}
                        placeholder="e.g., 7-Eleven, Maya Cafe, Luxe Resort"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Contact Person & Role <span className="text-[#ff1a35]">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g., Maria Santos (Marketing Lead)"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Business Email <span className="text-[#ff1a35]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="maria@company.ph"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Phone / Viber Number <span className="text-[#ff1a35]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 917 123 4567"
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Industry & Campaign Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Industry / Category
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
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
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Desired Collaboration Format
                      </label>
                      <select
                        name="campaignType"
                        value={formData.campaignType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
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
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Estimated Budget Bracket
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
                      >
                        <option value="₱50,000 - ₱150,000">₱50,000 - ₱150,000 (MSME Starter)</option>
                        <option value="₱150,000 - ₱350,000">₱150,000 - ₱350,000 (Standard Branded Skit)</option>
                        <option value="₱350,000 - ₱750,000">₱350,000 - ₱750,000 (Multi-Platform Blitz)</option>
                        <option value="₱750,000+">₱750,000+ (Full Campaign / Tour Series)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Campaign Target Date
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors"
                      >
                        <option value="Immediate (Within 1-2 Weeks)">Immediate (Within 1-2 Weeks)</option>
                        <option value="Within 2 - 4 Weeks">Within 2 - 4 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Next Quarter Planning">Next Quarter Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details & Pitch */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Campaign Objectives & Product Brief <span className="text-[#ff1a35]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Boss Jar about your product, branch locations, target audience, or any funny skit scenario you have in mind..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] py-4 px-6 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-black bg-[#ffd000] hover:bg-[#e6bc00] active:scale-[0.98] transition-all duration-150 shadow-[0_0_25px_rgba(255,208,0,0.3)] hover:shadow-[0_0_35px_rgba(255,208,0,0.5)] flex items-center justify-center gap-2 disabled:opacity-50"
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

                  <p className="text-[11px] text-zinc-500 text-center">
                    All proposals are kept strictly confidential under non-disclosure.
                  </p>

                </form>
              ) : (
                /* SUBMISSION SUCCESS CARD */
                <div className="py-8 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-[#ffd000] uppercase tracking-wider">
                      Reference: {inquiryId}
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
                      Inquiry Received, Boss!
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.contactPerson}</span>. We received the brief for <span className="text-[#ffd000] font-semibold">{formData.brandName}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-zinc-400">
                      <span>Category:</span>
                      <span className="text-white font-medium">{formData.industry}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Campaign Format:</span>
                      <span className="text-white font-medium">{formData.campaignType}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Budget Tier:</span>
                      <span className="text-[#ffd000] font-semibold">{formData.budgetRange}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Target Timeline:</span>
                      <span className="text-white font-medium">{formData.timeline}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 max-w-md mx-auto">
                    A dedicated campaign coordinator from Boss Jar Media will contact you at <span className="text-white">{formData.email}</span> within 24 hours with concept storyboards and scheduling options.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      onClick={onOpenRateCard}
                      type="button"
                      className="px-6 py-2.5 rounded-xl bg-[#ffd000] hover:bg-[#e6bc00] text-xs font-bold text-black transition-all"
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
