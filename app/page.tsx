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
      <FeaturesSection />
      <CloudFarmProgram />
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
