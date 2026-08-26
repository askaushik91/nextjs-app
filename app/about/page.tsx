import type { Metadata } from 'next';
import BannerSection from '../../components/BannerSection/BannerSection';
import styles from './about.module.scss';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import { TeamSection } from '@/components/TeamSection/TeamSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Gill Organics—our mission, founding story, and commitment to sustainability, community, and health through organic farming.',
  openGraph: {
    title: 'About Us | Gill Organics',
    description:
      'Learn about Gill Organics—our mission, founding story, and commitment to sustainability, community, and health.',
  },
};

export default function AboutPage() {
  return (
    <div>
      <BannerSection
        bannerImage={IMAGES.aboutinner}
        bannerImageAlt="About Banner"
        title="From Our Soil to Your Table."
        description="Reclaiming the connection between people and the food they eat through sustainable, transparent, and community-driven farming."
        btnText="Get Started"
        btnPath="/contact"
      />

      <TeamSection variant="full" />

      <div className={styles.ctaBar}>
        <div className={styles.ctaBar__container}>
          <div className={styles.ctaBar__text}>
            <div className={styles.ctaBar__texticon}>👋</div>
            <span>Start Your Organic <br />Farming Journey Today!</span>
          </div>
          <Button href="/contact" label="Get Started" variant="primary" />
        </div>
      </div>
    </div>
  );
}
