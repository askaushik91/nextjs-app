import type { Metadata } from 'next';
import { FAQSection } from '@/components/FAQSection/FAQSection';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to common questions about Gill Organics cloud farms, subscriptions, and deliveries.',
};

export default function FaqsPage() {
  return <FAQSection showAll />;
}
