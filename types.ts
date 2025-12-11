export interface NavItem {
  label: string;
  path: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
  location: string;
}

export interface ProgramFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CaregiverProfile {
  id: number;
  name: string;
  role: string;
  experience: string;
  badges: string[];
  imageUrl: string;
}