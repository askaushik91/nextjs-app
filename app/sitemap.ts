import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/about',
  '/contact',
  '/faqs',
  '/how-it-works',
  '/services',
  '/testimonials',
  '/privacy-policy',
  '/refund-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gillorganics.com';
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
