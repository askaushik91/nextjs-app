import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import BannerSection from '../../components/BannerSection/BannerSection';
import styles from './how-works.module.scss';

const FEATURES = [
  {
    title: 'Choose Your Plan',
    description: 'Select the farmland lease package suitable for your family’s needs.',
    icon: '1',
  },
  {
    title: 'We Cultivate',
    description: 'Our experienced farming team grows seasonal organic vegetables on your leased land.',
    icon: '2',
  },
  {
    title: 'Harvest & Pack',
    description: 'Once ready, vegetables are freshly harvested and carefully packed.',
    icon: '3',
  },
  {
    title: 'Home Delivery',
    description: 'Your produce is delivered straight to your doorstep.',
    icon: '4',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      <BannerSection
        bannerImage={IMAGES.howworksinner}
        bannerImageAlt="About Banner"
        title="From Our Soil to Your Table."
        description="Reclaiming the connection between people and the food they eat through sustainable, transparent, and community-driven farming."
        btnText="Get Started"
        btnPath="/contact"
      />

      <section className={styles.section} aria-labelledby="features-heading">
      <div className={styles.section__container}>
        <div className={styles.section__grid}>
          <div className={styles.section__content}>
            <h5 className={styles.section__subheading}>
              How it works
            </h5>
            <h2 id="features-heading" className={styles.section__heading}>
              Simple. Natural. Reliable.
            </h2>
            <p className={styles.section__text}>
              Choose your farmland lease plan, and our expert team takes care of everything — from soil preparation and natural cultivation to harvesting and packing. Once your seasonal vegetables are ready, we deliver the fresh produce directly to your home, ensuring a seamless farm-to-door experience without any hassle.
            </p>
            <Button href="/how-it-works" label="Get Started" variant="primary" />
          </div>
          <div className={styles.howItWorksOuter}>
            <ul className={styles.howItWorksOuter__list}>
              {FEATURES.map((item) => (
                <li key={item.title} className={styles.howItWorksOuter__item}>
                  <span className={styles.howItWorksOuter__icon} aria-hidden>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className={styles.howItWorksOuter__title}>{item.title}</h3>
                    <p className={styles.howItWorksOuter__desc}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
