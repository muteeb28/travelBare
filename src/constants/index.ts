import { UmrahPackage, TravelService, ContactInfo, NavigationItem } from '@/types';

// Navigation configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  phone: '+91 6006031751',
  email: 'travelbareofficial@gmail.com',
  address: 'Srinagar, Kashmir',
  whatsapp: '+91 6006031751',
  socialMedia: {
    facebook: 'https://facebook.com/travelbare',
    instagram: 'https://instagram.com/travelbare__',
    twitter: 'https://twitter.com/travelbare',
  },
};

// Company information
export const COMPANY_INFO = {
  name: 'TravelBare',
  tagline: 'Kashmir & Umrah with Care',
  founded: 2019,
  experienceYears: new Date().getFullYear() - 2019,
  totalPilgrims: '50,000+',
  description:
    'TravelBare is a Srinagar-based travel company delivering premium Kashmir journeys and spiritually guided Umrah experiences with trusted local support.',
} as const;

// Sample Umrah packages data
export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: 'economy',
    name: 'Economy Package',
    price: 2999,
    duration: 14,
    description: 'Perfect for budget-conscious pilgrims',
    hotelRating: 3,
    features: [
      '14 Days Stay',
      '3-Star Hotels',
      'Group Transportation',
      'Guided Tours',
      '24/7 Support',
    ],
    includes: [
      { id: '1', name: 'Round-trip flights', description: 'Economy class flights' },
      { id: '2', name: 'Hotel accommodation', description: '3-star hotels near Haram' },
      { id: '3', name: 'Transportation', description: 'Airport transfers and group transport' },
      { id: '4', name: 'Guided tours', description: 'Religious site visits with guide' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 4999,
    duration: 14,
    description: 'Enhanced comfort and convenience',
    hotelRating: 4,
    isPopular: true,
    features: [
      '14 Days Stay',
      '4-Star Hotels',
      'Private Transportation',
      'Expert Guide',
      'All Meals Included',
      'VIP Services',
    ],
    includes: [
      { id: '1', name: 'Round-trip flights', description: 'Business class flights' },
      { id: '2', name: 'Hotel accommodation', description: '4-star hotels near Haram' },
      { id: '3', name: 'Private transportation', description: 'Private vehicle with driver' },
      { id: '4', name: 'All meals', description: 'Breakfast, lunch, and dinner included' },
      { id: '5', name: 'Expert guide', description: 'Experienced Islamic scholar' },
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury Package',
    price: 7999,
    duration: 21,
    description: 'Ultimate luxury and personalized service',
    hotelRating: 5,
    features: [
      '21 Days Stay',
      '5-Star Hotels',
      'Private Chauffeur',
      'Personal Scholar',
      'Premium Dining',
      'Exclusive Access',
    ],
    includes: [
      { id: '1', name: 'Round-trip flights', description: 'First class flights' },
      { id: '2', name: 'Hotel accommodation', description: '5-star luxury hotels' },
      { id: '3', name: 'Private chauffeur', description: 'Personal driver throughout stay' },
      { id: '4', name: 'Personal scholar', description: 'Dedicated Islamic scholar guide' },
      { id: '5', name: 'Premium dining', description: 'Fine dining at premium restaurants' },
      { id: '6', name: 'Exclusive access', description: 'VIP access to religious sites' },
    ],
  },
];

// Travel services
export const TRAVEL_SERVICES: TravelService[] = [
  {
    id: 'flights',
    title: 'Flight Booking',
    description: 'Direct flights with major airlines',
    icon: 'plane',
    category: 'booking',
  },
  {
    id: 'hotels',
    title: 'Accommodation',
    description: 'Premium hotels near Haram',
    icon: 'building',
    category: 'accommodation',
  },
  {
    id: 'transport',
    title: 'Transportation',
    description: 'Comfortable and reliable transport',
    icon: 'bus',
    category: 'transport',
  },
  {
    id: 'guidance',
    title: 'Spiritual Guidance',
    description: 'Expert scholars and guides',
    icon: 'book-open',
    category: 'guidance',
  },
];

// Theme colors for Umrah/Islamic context
export const THEME_COLORS = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // emerald-500
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  gold: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // amber-500
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
} as const;
