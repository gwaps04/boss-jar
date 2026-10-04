import { SkitVideo, PartnershipCase } from '../types';

export const CREATOR_METRICS = {
  followers: '1.8M+',
  avgViewsPerHit: '1.2M+',
  engagementRate: '9.4%',
  brandPartners: '45+',
  monthlyReach: '12M+',
  activePlatforms: 'TikTok & FB'
};

export const VIRAL_SKITS: SkitVideo[] = [
  {
    id: 'skit-1',
    title: 'Kapag si Boss Jar Nag-Grab Driver pero Galit sa Traffic',
    category: 'Everyday Relatable',
    views: '2.4M',
    likes: '240K',
    comments: '8.4K',
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
    views: '3.1M',
    likes: '315K',
    comments: '12.2K',
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
    views: '1.8M',
    likes: '185K',
    comments: '6.9K',
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
    views: '1.4M',
    likes: '142K',
    comments: '5.1K',
    duration: '01:30',
    date: '2 months ago',
    description: 'How a Pinoy Boss attempts to negotiate late checkout at a seaside resort using unmatched charm and humor.',
    thumbnailUrl: '/assets/skits/skit-4.jpg',
    clientTieIn: 'Resort Weekend Staycation Campaign'
  },
  {
    id: 'skit-5',
    title: 'Big Bike Rider vs Barangay Humpty Dumpty Speed Bumps',
    category: 'Motorcycle & Trips',
    views: '2.1M',
    likes: '210K',
    comments: '7.8K',
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
    views: '1.6M',
    likes: '168K',
    comments: '6.3K',
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
    metricLabel: 'Foot Traffic Spikes in Target Outlets',
    description: 'A viral reel campaign showing Boss Jar stopping by mid-ride to grab signature ready-to-eat meals, driving real in-store check-ins and customer visits.',
    deliverables: '2 Dedicated Reels + 3 IG Stories + Store Appearance',
    badge: 'Retail Case Study'
  },
  {
    id: 'case-2',
    brandName: 'Boutique Seaside Resorts & Eco-Hotels',
    industry: 'Hotels & Resorts',
    campaignTitle: '"Boss Goes Vacation Mode" Tourism Series',
    metric: 'Fully Booked',
    metricLabel: 'Weekend Promo Bookings Sold Out',
    description: 'Hilarious yet visually breathtaking staycation showcase pairing luxury resort amenities with Boss Jar’s high-energy comedic pool and dining skits.',
    deliverables: '1 Travel Vlog + 2 TikTok Parodies + Promo Voucher Code',
    badge: 'Hospitality ROI'
  },
  {
    id: 'case-3',
    brandName: 'Fast-Casual Food & Grill Franchises',
    industry: 'Food & Dining',
    campaignTitle: 'The Spicy Rice Platter Boss Challenge',
    metric: '1.8M+',
    metricLabel: 'Targeted Organic Views & In-Store Footfall',
    description: 'Boss Jar took his motorcycle crew to test the newest flaming spicy chicken menu, turning lunch into a trending comedic taste-test challenge.',
    deliverables: 'Food Taste Test Skit + Brand Jingle Collab + TikTok Sound',
    badge: 'F&B Viral Growth'
  },
  {
    id: 'case-4',
    brandName: 'Moto Gear & Protective Apparel',
    industry: 'Automotive & Gear',
    campaignTitle: 'Safety Meets Swag: Rider Awareness Drive',
    metric: '950K+',
    metricLabel: 'Rider Community Reach & Engagement',
    description: 'Demonstrating how looking like a true boss on two wheels starts with proper safety gear, certified helmets, and street etiquette with heavy punchlines.',
    deliverables: '3 Short-Form Videos + Motovlog Feature + Co-Branded Promo',
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
