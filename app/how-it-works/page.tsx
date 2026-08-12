import type { Metadata } from 'next';
import BannerSection from '@/components/BannerSection/BannerSection';
import { FeaturesSection } from '@/components/FeaturesSection/FeaturesSection';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how Gill Organics takes your chosen plot from natural cultivation to fresh home delivery.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <BannerSection
        bannerImage={IMAGES.howworksinner}
        bannerImageAlt="Gill Organics farm process"
        title="From Our Soil to Your Table."
        description="See how your seasonal organic vegetables are grown, harvested and delivered fresh to your home."
        btnText="Get Started"
        btnPath="/contact"
      />
      <FeaturesSection />
    </main>
  );
}
