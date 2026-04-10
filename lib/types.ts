export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  layout: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface Testimonial {
  name: string;
  title?: string;
  quote: string;
  rating?: number;
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  navigation: NavItem[];
}
