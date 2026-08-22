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
  { label: 'How to Join', href: '/how-it-works' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
];

export const HEADER_NAV_LINKS = NAV_LINKS.filter((link) => link.href !== '/how-it-works' && link.href !== '/contact');

export const CONTACT_HREF = '/contact';
export const WAITLIST_HREF =
  'https://docs.google.com/forms/d/e/1FAIpQLSetAUBO65fr24rcCbxo4XJc-Un4gzQPMTNpqprLGasksVY3TQ/viewform';

export const FOOTER_QUICK_LINKS = [
  ...NAV_LINKS,
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Us', href: CONTACT_HREF }
];

export const CONTACT_INFO = {
  address: 'Gill Organics - Cloud Farms, Pind, New, Fatehpur, Nawan Fatehpur, Punjab 147006',
  phone: '',
  email: 'gillorganics@gmail.com',
};

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
];
