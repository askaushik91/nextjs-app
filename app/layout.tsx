import type { Metadata } from 'next';
import { Poppins, Abril_Fatface, Noto_Sans_Gurmukhi } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { DevConsoleFilter } from '@/components/DevConsoleFilter/DevConsoleFilter';
import { CONTACT_INFO, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

/**
 * Optimized font loading
 * Only loading necessary weights for performance
 */

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-body',
  display: 'swap',
});

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
});

const notoSansGurmukhi = Noto_Sans_Gurmukhi({
  subsets: ['gurmukhi'],
  weight: ['400', '500', '600'],
  variable: '--font-gurmukhi',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gillorganics.com'
  ),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'organic vegetables Punjab',
    'cloud farm Patiala',
    'organic farming',
    'seasonal vegetables',
    'farm-to-door delivery',
    'chemical-free produce',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: 'Gill Organics | Your Organic Cloud Farm in Punjab',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/HeroImage.webp',
        width: 1200,
        height: 630,
        alt: 'Fresh organic vegetables from Gill Organics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gill Organics | Your Organic Cloud Farm in Punjab',
    description: SITE_DESCRIPTION,
    images: ['/images/HeroImage.webp'],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: 'https://gillorganics.com',
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  image: 'https://gillorganics.com/images/HeroImage.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gill Organics - Cloud Farms, Pind, New, Fatehpur, Nawan Fatehpur',
    addressRegion: 'Punjab',
    postalCode: '147006',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/gillorganics/',
    'https://www.instagram.com/gillorganics/',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${abril.variable} ${notoSansGurmukhi.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <DevConsoleFilter />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
