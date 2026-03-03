import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import styles from './WhyUsSection.module.scss';

import { IMAGES } from '@/lib/images';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M11.25 3.75L10.1925 4.8075L13.6275 8.25H1.5V9.75H13.6275L10.185 13.1925L11.25 14.25L16.5 9L11.25 3.75Z"
      fill="white"
    />
  </svg>
);

const FEATURES = [
  { text: "100% Organic & Chemical-Free", icon: <ArrowIcon /> },
  { text: "Transparent Farming Process", icon: <ArrowIcon /> },
  { text: "Seasonal & Fresh Harvest", icon: <ArrowIcon /> },
  { text: "Direct Farm-to-Home Delivery", icon: <ArrowIcon /> },
  { text: "Sustainable & Eco-Friendly Practices", icon: <ArrowIcon /> },
  { text: "Trusted by Families & Health-Conscious Individuals", icon: <ArrowIcon /> },
  { text: "Dedicated Customer Support", icon: <ArrowIcon /> }
];

export function WhyUsSection() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <span className={styles.section__deco} aria-hidden>
        Why Us
      </span>
      <div className={styles.section__container}>
        <div className={styles.section__grid}>
          <div className={styles.section__imageWrap}>
            <Image
              src={IMAGES.whyUs}
              alt="Lush organic crops growing naturally"
              width={600}
              height={800}
              className={styles.section__image}
            />
          </div>
          <div className={styles.section__content}>
            <h5 className={styles.section__subheading}>
              WHY CHOOSE US?
            </h5>
            <h2 id="why-heading" className={styles.section__heading}>
              Naturally Grown. Honestly Delivered.
            </h2>
            <p className={styles.section__text}>
              We combine transparent organic farming with reliable doorstep delivery, giving you fresh seasonal vegetables grown on professionally managed leased farmland — pure, chemical-free, and handled with care from soil to home.
            </p>
            <ul className={styles.section__textlist}>
              {FEATURES.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <h3 className={styles.section__textHighlight}>We don’t just grow vegetables — we grow health and trust.</h3>
          </div>
        </div>
      </div>

      <div className={styles.ctaBar}>
        <div className={styles.ctaBar__container}>
          <div className={styles.ctaBar__text}>
            <div className={styles.ctaBar__texticon}>👋</div>
            <span>Start Your Organic <br />Farming Journey Today!</span>
          </div>
          <Button href="/contact" label="Get Started" variant="primary" />
          </div>
      </div>
    </section>
  );
}
