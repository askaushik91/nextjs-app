import type { Metadata } from 'next';
import BannerSection from '@/components/BannerSection/BannerSection';
import { FAQSection } from '@/components/FAQSection/FAQSection';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to common questions about Gill Organics cloud farms, subscriptions, and deliveries.',
};

export default function FaqsPage() {
  return (
    <>
      <BannerSection
        bannerImage={IMAGES.howworksinner}
        bannerImageAlt="Fresh organic vegetables growing on a Gill Organics farm"
        title="Frequently Asked Questions"
        description="Everything you need to know about your Gill Organics cloud farm."
      />
      <FAQSection showAll />
    </>
  );
}
