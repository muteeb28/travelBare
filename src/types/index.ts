// Core travel types
export interface UmrahPackage {
  id: string;
  name: string;
  price: number;
  duration: number; // in days
  description: string;
  features: string[];
  hotelRating: 3 | 4 | 5;
  isPopular?: boolean;
  includes: ServiceInclusion[];
  excludes?: string[];
  images?: string[];
}

export interface ServiceInclusion {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface TravelService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'transport' | 'accommodation' | 'guidance' | 'booking';
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
  packageId?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Component props interfaces
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  packageInterest?: string;
  message: string;
}

export interface BookingFormData extends ContactFormData {
  packageId: string;
  preferredDates: {
    departure: Date;
    return: Date;
  };
  numberOfPilgrims: number;
  roomPreference: 'single' | 'double' | 'triple' | 'quad';
  specialRequirements?: string;
}