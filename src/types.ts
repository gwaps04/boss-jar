export interface SkitVideo {
  id: string;
  title: string;
  category: 'Everyday Relatable' | 'Food & Street' | 'Retail & Stores' | 'Motorcycle & Trips' | 'Hotels & Resorts' | 'Viral Skits';
  views: string;
  likes: string;
  comments: string;
  duration: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  fbReelId: string;
  clientTieIn?: string;
  tagline?: string;
}

export interface PartnershipCase {
  id: string;
  brandName: string;
  industry: 'Retail' | 'Hotels & Resorts' | 'Food & Dining' | 'Automotive & Gear';
  campaignTitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  deliverables: string;
  badge: string;
}

export interface BookingFormState {
  brandName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  campaignType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
