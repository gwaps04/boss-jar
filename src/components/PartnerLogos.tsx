import React from 'react';

export interface PartnerBrand {
  id: string;
  name: string;
  tagline: string;
  category: 'Hospitality' | 'Retail & Tech' | 'Food & Dining' | 'Health & Clinics' | 'Lifestyle & Services';
  description: string;
  logo: React.ReactNode;
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: 'papa-tan-tan',
    name: 'Papa Tan Tan Apartelle',
    tagline: 'Apartelle & Accommodations',
    category: 'Hospitality',
    description: 'Boutique staycation apartelle offering cozy rooms, event spaces, and comfortable travel stays in Bicol.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Arch & Keyhole Roofline */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#D97706" strokeWidth="2.5" fill="#FEF3C7" />
        <path d="M15 32V21C15 16.5817 18.5817 13 23 13C27.4183 13 31 16.5817 31 21V32" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="23" cy="22" r="2.5" fill="#B45309" />
        <path d="M23 24.5V28" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="23" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#0F172A" letterSpacing="0.04em">PAPA TAN TAN</text>
        <text x="48" y="36" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9" fill="#D97706" letterSpacing="0.16em">APARTELLE</text>
      </svg>
    ),
  },
  {
    id: 'midea-windmax',
    name: 'Midea Windmax',
    tagline: 'Aircon & Cooling Appliances',
    category: 'Retail & Tech',
    description: 'Energy-saving smart inverter air conditioners and heavy-duty household cooling appliances.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Wind Vortex Spiral */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#0284C7" strokeWidth="2.5" fill="#E0F2FE" />
        <path d="M14 20C17 16 23 15 28 17C31 18.5 32 22 29 25C26 28 20 28 17 26C15 24 16 21 19 20" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M20 25C22 27 26 27 28 25" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" fill="#0F172A" letterSpacing="0.02em">midea</text>
        <text x="48" y="36" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="10.5" fill="#0284C7" letterSpacing="0.14em">WINDMAX</text>
      </svg>
    ),
  },
  {
    id: 'ilaw-atbpa',
    name: 'Ilaw atbpa.',
    tagline: 'Residential & Commercial Lighting Shop',
    category: 'Retail & Tech',
    description: 'Premier retail destination for modern interior lighting fixtures, LED installations, and architectural lamps.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Radiant Filament Bulb */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#F59E0B" strokeWidth="2.5" fill="#FFFBEB" />
        <path d="M19 19C19 16.7909 20.7909 15 23 15C25.2091 15 27 16.7909 27 19C27 21 25.5 22.5 25.5 24.5H20.5C20.5 22.5 19 21 19 19Z" stroke="#B45309" strokeWidth="2" fill="#FDE68A" />
        <path d="M21 27.5H25" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 30H24" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <path d="M23 11V13M14 16L15.5 17.5M32 16L30.5 17.5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="23" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14" fill="#0F172A">ilaw atbpa.</text>
        <text x="48" y="36" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8" fill="#D97706" letterSpacing="0.12em">LIGHTING SPECIALIST</text>
      </svg>
    ),
  },
  {
    id: 'slick-dapper',
    name: 'Slick & Dapper',
    tagline: 'Barbershop & Grooming',
    category: 'Lifestyle & Services',
    description: 'Precision gentlemen cuts, classic hot towel shaves, and premium urban grooming care.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Razor & Comb Crest */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#1E293B" strokeWidth="2.5" fill="#0F172A" />
        {/* Crossed Minimal Shears & Comb */}
        <path d="M15 17L31 33" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 17L15 33" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="23" cy="25" r="2" fill="#F8FAFC" />
        {/* Typography */}
        <text x="48" y="22" fontFamily="serif, Georgia, sans-serif" fontWeight="800" fontSize="12.5" fill="#0F172A" letterSpacing="0.04em">SLICK & DAPPER</text>
        <text x="48" y="35" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8" fill="#64748B" letterSpacing="0.22em">BARBERSHOP</text>
      </svg>
    ),
  },
  {
    id: 'hometown-bike',
    name: 'HomeTown',
    tagline: 'Bicycle Retailer',
    category: 'Retail & Tech',
    description: 'Bicycle retail showroom stocking top-tier road bikes, mountain bikes, parts, and cycling safety accessories.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Dual Wheels & Frame */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#DC2626" strokeWidth="2.5" fill="#FEF2F2" />
        <circle cx="16" cy="28" r="5" stroke="#DC2626" strokeWidth="2" />
        <circle cx="30" cy="28" r="5" stroke="#DC2626" strokeWidth="2" />
        <path d="M16 28L22 18H27L30 28M22 18L24 28" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Typography */}
        <text x="48" y="23" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14" fill="#0F172A" letterSpacing="0.02em">HOMETOWN</text>
        <text x="48" y="36" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8" fill="#DC2626" letterSpacing="0.18em">BICYCLE RETAILER</text>
      </svg>
    ),
  },
  {
    id: 'bulawlohan',
    name: 'Bulawlohan',
    tagline: 'Specialty Pinoy Food Diner',
    category: 'Food & Dining',
    description: 'Savory authentic bulalo, bone marrow specialties, and hot comfort meals loved by motorists and foodies.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Steaming Clay Pot / Broth Bowl */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#EA580C" strokeWidth="2.5" fill="#FFF7ED" />
        <path d="M14 24C14 29 18 33 23 33C28 33 32 29 32 24H14Z" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
        <path d="M12 24H34" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 19C18 16 20 16 20 13M23 19C23 16 25 16 25 13M28 19C28 16 30 16 30 13" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="23" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="14" fill="#0F172A">BULAWLOHAN</text>
        <text x="48" y="36" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8" fill="#EA580C" letterSpacing="0.14em">PINOY FOOD DINER</text>
      </svg>
    ),
  },
  {
    id: 'ownstyle-graphics',
    name: 'OwnStyle Graphics and Design Services',
    tagline: 'Print On Demand & Creative',
    category: 'Lifestyle & Services',
    description: 'Custom silkscreen printing, DTF apparel, promo merchandising, and professional graphic design services.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Pen Tool & Diamond Swatch */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#7C3AED" strokeWidth="2.5" fill="#F5F3FF" />
        <path d="M23 13L30 20L23 27L16 20L23 13Z" stroke="#7C3AED" strokeWidth="2" fill="#DDD6FE" />
        <circle cx="23" cy="20" r="2" fill="#7C3AED" />
        <path d="M23 27V33M19 33H27" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="21" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#0F172A">OwnStyle</text>
        <text x="48" y="34" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="7.5" fill="#7C3AED" letterSpacing="0.12em">GRAPHICS & PRINT</text>
      </svg>
    ),
  },
  {
    id: 'young-skin',
    name: 'Young Skin Aesthetics and Wellness Clinic',
    tagline: 'Aesthetics & Wellness Clinic',
    category: 'Health & Clinics',
    description: 'Advanced non-invasive facial rejuvenation, laser treatments, drip bars, and dermatological wellness care.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Radiant Lotus / Droplet */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#E11D48" strokeWidth="2.5" fill="#FFF1F2" />
        <path d="M23 14C23 14 16 22 16 27C16 30.866 19.134 34 23 34C26.866 34 30 30.866 30 27C30 22 23 14 23 14Z" stroke="#E11D48" strokeWidth="1.8" fill="#FFE4E6" />
        <path d="M23 21C23 21 20 25 20 27.5C20 29.1569 21.3431 30.5 23 30.5C24.6569 30.5 26 29.1569 26 27.5C26 25 23 21 23 21Z" fill="#E11D48" />
        {/* Typography */}
        <text x="48" y="21" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#0F172A" letterSpacing="0.04em">YOUNG SKIN</text>
        <text x="48" y="34" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="7.5" fill="#E11D48" letterSpacing="0.1em">AESTHETICS & WELLNESS</text>
      </svg>
    ),
  },
  {
    id: 'enhance-dental',
    name: 'Enhance Dental Clinic',
    tagline: 'Dental Health & Smile Design',
    category: 'Health & Clinics',
    description: 'Comprehensive family oral healthcare, cosmetic smile design, orthodontic braces, and dental implants.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Geometric Tooth & Sparkle */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#0D9488" strokeWidth="2.5" fill="#F0FDFA" />
        <path d="M17 17C17 14.5 19 14 23 14C27 14 29 14.5 29 17C29 21 28 23 27 28C26.5 30.5 25 32 24 32C23 32 23 27 23 27C23 27 23 32 22 32C21 32 19.5 30.5 19 28C18 23 17 21 17 17Z" stroke="#0F766E" strokeWidth="2" fill="#CCFBF1" strokeLinejoin="round" />
        <path d="M28 14L29.5 12L31 14L33 15.5L31 17L29.5 19L28 17L26 15.5L28 14Z" fill="#0D9488" />
        {/* Typography */}
        <text x="48" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#0F172A" letterSpacing="0.04em">ENHANCE</text>
        <text x="48" y="35" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8.5" fill="#0D9488" letterSpacing="0.14em">DENTAL CLINIC</text>
      </svg>
    ),
  },
  {
    id: 'kuya-boy-halo-halo',
    name: 'Kuya Boy Halo Halo',
    tagline: 'Pinoy Halo-Halo Cooling Dessert',
    category: 'Food & Dining',
    description: 'Famous overflowing shaved ice dessert packed with ube halaya, leche flan, saba banana, and special milk blend.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Dessert Parfait Glass with Sun */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#8B5CF6" strokeWidth="2.5" fill="#F5F3FF" />
        <path d="M16 16H30L27 28H19L16 16Z" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" />
        <path d="M23 28V33M19 33H27" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        <circle cx="23" cy="14" r="3" fill="#F59E0B" />
        <path d="M18 20H28M19 24H27" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="22" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="12" fill="#0F172A" letterSpacing="0.02em">KUYA BOY</text>
        <text x="48" y="35" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="9" fill="#8B5CF6" letterSpacing="0.12em">HALO-HALO</text>
      </svg>
    ),
  },
  {
    id: 'misibis-bay',
    name: 'Misibis Bay',
    tagline: 'Hotel & Luxury Island Resort',
    category: 'Hospitality',
    description: 'Prestigious 5-star tropical hideaway on Cagraray Island, Albay, renowned for luxury villas and private white beaches.',
    logo: (
      <svg viewBox="0 0 160 50" className="w-full h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Minimalist Palm & Waves Horizon */}
        <rect x="6" y="8" width="34" height="34" rx="8" stroke="#0F172A" strokeWidth="2.5" fill="#0F172A" />
        <path d="M23 32V18C23 18 19 14 15 15C19 17 21 20 23 22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M23 20C23 20 27 15 31 16C27 18 25 21 23 23" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 31C17 29 20 29 23 31C26 33 29 33 32 31" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
        {/* Typography */}
        <text x="48" y="22" fontFamily="serif, Times, Georgia, sans-serif" fontWeight="800" fontSize="13" fill="#0F172A" letterSpacing="0.08em">MISIBIS BAY</text>
        <text x="48" y="35" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="7.5" fill="#D97706" letterSpacing="0.18em">LUXURY RESORT</text>
      </svg>
    ),
  },
];
