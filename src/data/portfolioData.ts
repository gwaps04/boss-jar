import { SkitVideo, PartnershipCase } from '../types';

export const CREATOR_METRICS = {
  followers: '1.8M+',
  totalViews: '450M+',
  engagementRate: '9.4%',
  brandPartners: '120+',
  avgWatchTime: '88%',
  monthlyReach: '32M+'
};

export const VIRAL_SKITS: SkitVideo[] = [
  {
    id: 'skit-1',
    title: 'Kapag si Boss Jar Nag-Grab Driver pero Galit sa Traffic',
    category: 'Everyday Relatable',
    views: '18.4M',
    likes: '1.2M',
    comments: '42.8K',
    duration: '01:45',
    date: '2 weeks ago',
    description: 'When the driver gives unsolicited life advice, philosophy, and snacks to his passenger in EDSA gridlock.',
    thumbnailUrl: '/assets/skits/skit-1.jpg',
    clientTieIn: 'Sponsored by RideShield Motorcycle Apparel'
  },
  {
    id: 'skit-2',
    title: '7-Eleven Midnight Trip: "Boss, May Siopao pa ba?" (Convenience Store Madness)',
    category: 'Retail & Stores',
    views: '14.7M',
    likes: '980K',
    comments: '31.2K',
    duration: '02:10',
    date: '1 month ago',
    description: 'Entering 7-Eleven at 2:30 AM looking for steamed buns with the crew, turning into an impromptu stand-up session with the cashier and customers.',
    thumbnailUrl: '/assets/skits/skit-2.jpg',
    clientTieIn: 'Convenience Retail Foot Traffic Campaign'
  },
  {
    id: 'skit-3',
    title: 'Bicol Adventure: "Mayon Volcano View Habang Umiinom ng Sili Shake"',
    category: 'Food & Street',
    views: '12.8M',
    likes: '840K',
    comments: '28.9K',
    duration: '02:30',
    date: '3 weeks ago',
    description: 'Challenging locals in Legazpi with extreme spicy Bicolano chili smoothies right in front of majestic Mayon volcano.',
    thumbnailUrl: '/assets/skits/skit-3.jpg',
    clientTieIn: 'Regional Tourism & Local Food Co-op'
  },
  {
    id: 'skit-4',
    title: 'Hotel Front Desk Negotiation: "Boss Pwede ba Extended Checkout hanggang Pasko?"',
    category: 'Hotels & Resorts',
    views: '10.2M',
    likes: '720K',
    comments: '19.4K',
    duration: '01:30',
    date: '2 months ago',
    description: 'How a Pinoy Boss attempts to negotiate late checkout at a 5-star seaside resort using unmatched charm and humor.',
    thumbnailUrl: '/assets/skits/skit-4.jpg',
    clientTieIn: 'Resort Weekend Staycation Campaign'
  },
  {
    id: 'skit-5',
    title: 'Big Bike Rider vs Barangay Humpty Dumpty Speed Bumps',
    category: 'Motorcycle & Trips',
    views: '16.1M',
    likes: '1.1M',
    comments: '36.5K',
    duration: '01:50',
    date: '1 month ago',
    description: 'Navigating superbike suspension over village obstacle courses with signature deadpan commentary.',
    thumbnailUrl: '/assets/skits/skit-5.jpg',
    clientTieIn: 'MotoCare Lubricants & Protection'
  },
  {
    id: 'skit-6',
    title: 'Food Court Ordering Protocol: Boss Jar Orders "Yung Masarap Pero Mura"',
    category: 'Food & Street',
    views: '9.8M',
    likes: '650K',
    comments: '17.3K',
    duration: '01:40',
    date: '3 weeks ago',
    description: 'Testing the patience and friendship of mall food counter attendants while treating the entire crew on a budget.',
    thumbnailUrl: '/assets/skits/skit-6.jpg',
    clientTieIn: 'Quick-Service Restaurant Launch'
  }
];

export const PARTNERSHIPS_LIST: PartnershipCase[] = [
  {
    id: 'case-1',
    brandName: 'National Retail & Convenience Chains',
    industry: 'Retail',
    campaignTitle: 'Late Night Snack Attack Tour',
    metric: '+34%',
    metricLabel: 'Foot Traffic Spikes in 14 Target Outlets',
    description: 'A 3-part viral reel campaign showing Boss Jar stopping by mid-ride to grab signature ready-to-eat meals, driving real in-store check-ins and customer UGC.',
    deliverables: '3 Dedicated Reels + 5 IG Stories + Store Appearance',
    badge: 'Retail Case Study'
  },
  {
    id: 'case-2',
    brandName: 'Boutique Seaside Resorts & Eco-Hotels',
    industry: 'Hotels & Resorts',
    campaignTitle: '"Boss Goes Vacation Mode" Tourism Series',
    metric: '100%',
    metricLabel: 'Weekend Bookings Sold Out in 48 Hours',
    description: 'Hilarious yet visually breathtaking staycation showcase pairing luxury resort amenities with Boss Jar’s high-energy comedic pool and dining skits.',
    deliverables: '1 YouTube Travel Vlog + 2 TikTok Parodies + Promo Voucher Code',
    badge: 'Hospitality ROI'
  },
  {
    id: 'case-3',
    brandName: 'Fast-Casual Food & Grill Franchises',
    industry: 'Food & Dining',
    campaignTitle: 'The Spicy Rice Platter Boss Challenge',
    metric: '4.8M',
    metricLabel: 'Organic Views with 68,000 Voucher Redemptions',
    description: 'Boss Jar took his motorcycle crew to test the newest flaming spicy chicken menu, turning dinner into a meme sensation trending nationwide.',
    deliverables: 'Food Taste Test Skit + Brand Jingle Collab + TikTok Sound Launch',
    badge: 'F&B Viral Growth'
  },
  {
    id: 'case-4',
    brandName: 'Moto Gear & Protective Apparel',
    industry: 'Automotive & Gear',
    campaignTitle: 'Safety Meets Swag: Rider Awareness Drive',
    metric: '2.8M',
    metricLabel: 'Reach Across PH Rider Communities',
    description: 'Demonstrating how looking like a true boss on two wheels starts with proper safety gear, certified helmets, and street etiquette with heavy punchlines.',
    deliverables: '4 Short-Form Videos + Live Motovlog Stream + Co-Branded Helmet Edition',
    badge: 'Rider Community Champion'
  }
];

export const TRUSTED_BRANDS = [
  { name: '7-Eleven PH', category: 'Retail & Convenience' },
  { name: 'Red Bull Energy', category: 'Beverage & Lifestyle' },
  { name: 'Grab Philippines', category: 'Delivery & Rides' },
  { name: 'Jollibee Foods Co.', category: 'Quick Service Dining' },
  { name: 'Mayon Vista Luxury Resort', category: 'Hotels & Hospitality' },
  { name: 'Motoworld PH', category: 'Motorcycle & Gear' },
  { name: 'Shopee Philippines', category: 'E-Commerce' },
  { name: 'GigaBite Burgers', category: 'Local Food Chain' }
];

export const AUDIENCE_DEMOGRAPHICS = {
  gender: [
    { label: 'Male', percent: 62 },
    { label: 'Female', percent: 38 }
  ],
  age: [
    { label: '18 - 24', percent: 32 },
    { label: '25 - 34', percent: 46 },
    { label: '35 - 44', percent: 16 },
    { label: '45+', percent: 6 }
  ],
  topRegions: [
    'Metro Manila & NCR (42%)',
    'CALABARZON (24%)',
    'Bicol Region (16%)',
    'Central Visayas / Cebu (11%)',
    'Overseas Filipinos / GCC (7%)'
  ]
};
