import type { Metadata } from 'next';
import { Poppins, Abril_Fatface } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://gillorganics.com'
  ),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${abril.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}