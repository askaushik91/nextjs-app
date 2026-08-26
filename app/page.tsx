import { Hero } from '@/components/Hero/Hero';
// import { AboutSection } from '@/components/AboutSection/AboutSection';
//import { ServicesSection } from '@/components/ServicesSection/ServicesSection';
import { WhyUsSection } from '@/components/WhyUsSection/WhyUsSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
//import { TestimonialsSection } from '@/components/TestimonialsSection/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection/FAQSection';
import ImageGallerySection from '@/components/ImageGallerySection';
import { InstagramFeed } from '@/components/InstagramFeed';
import CloudFarmProgram from '@/components/CloudFarmProgram';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import { MapSection } from '@/components/MapSection/MapSection';
import { PricingSection } from '@/components/PricingSection/PricingSection';

export const metadata: Metadata = {
  title: 'Organic Cloud Farms & Seasonal Vegetable Delivery in Punjab',
  description:
    'Adopt your own organic cloud farm with Gill Organics in Patiala, Punjab. Choose seasonal vegetables and receive fresh, chemical-free produce at your doorstep.',
  alternates: {
    canonical: '/',
  },
  verification: {
    other: {
      'facebook-domain-verification': 's9ksorinxe7ywckjrw3ux23xh05hjm',
    },
  },
};


export default function HomePage() {
  return (
    <>
      {/* <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <FeaturesSection />
      <TeamSection />
      <ImageGallerySection />
      <CloudFarmProgram />
      <TestimonialsSection />
      <FAQSection />
      <MapSection /> */}

      <Hero />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      <CloudFarmProgram />
      <FeaturesSection />
      <PricingSection />
      <TeamSection />
      <ImageGallerySection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <WhyUsSection />
      <InstagramFeed />
      <MapSection />
    </>
  );
}
import type { Metadata } from 'next';
