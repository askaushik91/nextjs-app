/**
 * Gill Organics – shared constants
 * Used by Header, Footer, and for SEO metadata.
 */

export const SITE_NAME = 'Gill Organics';
export const SITE_DESCRIPTION =
  'Lease your own organic farmland and receive fresh seasonal vegetables delivered straight to your door. No chemicals. No compromise.';

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Testimonials', href: '/testimonials' },
];

export const CONTACT_HREF = '/contact';

export const FOOTER_QUICK_LINKS = [...NAV_LINKS, { label: 'Contact Us', href: CONTACT_HREF }];

export const CONTACT_INFO = {
  address: '123 Farm Road, Green Valley, Countryside',
  phone: '+1 (555) 123-4567',
  email: 'hello@gillorganics.com',
};

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
];
