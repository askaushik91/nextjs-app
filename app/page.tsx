import { Hero } from '@/components/Hero/Hero';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';
import { WhyUsSection } from '@/components/WhyUsSection/WhyUsSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection/FAQSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
