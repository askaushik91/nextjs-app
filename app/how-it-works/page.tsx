import type { Metadata } from 'next';
import BannerSection from '@/components/BannerSection/BannerSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'How to Join',
  description: 'See how Gill Organics takes your chosen plot from natural cultivation to fresh home delivery.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <BannerSection
        bannerImage={IMAGES.howworksinner}
        bannerImageAlt="Gill Organics farm process"
        title="How to Join Gill Organics"
        description="Choose your farm experience and let us grow, harvest and deliver seasonal organic vegetables to your home."
        btnText="Join Waitlist"
        btnPath="/contact"
      />
      <FeaturesSection />
    </main>
  );
}
