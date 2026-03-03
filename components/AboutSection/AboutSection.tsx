import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import styles from './AboutSection.module.scss';

import { IMAGES } from '@/lib/images';

export function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <span className={styles.section__deco} aria-hidden>
        About
      </span>
      <Container>
        <div className={styles.section__grid}>
          <div className={styles.section__content}>            
            <h2 className={styles.section__subheading}>
              About Us
            </h2>
            <h2 id="about-heading" className={styles.section__heading}>
              Growing Trust. Growing Naturally.
            </h2>
            <p className={styles.section__text}>
              Green Harvest Farms is a unique farm-to-home initiative designed for individuals and families who want fresh, safe, and naturally grown vegetables without managing farmland themselves.
            </p>
            <p className={styles.section__text}>
              We provide well-maintained agricultural land on lease, cultivate seasonal organic vegetables using sustainable practices, and deliver the harvest directly to your home or preferred address.
            </p>
            <div className={styles.section__quoteBlock}>
              <h5 className={styles.section__text}>Our mission is simple:</h5>
              <h2>Pure food. Transparent farming. Direct delivery.</h2>
              <p className={styles.section__text}>
                We provide well-maintained agricultural land on lease, cultivate seasonal organic vegetables using sustainable practices, and deliver the harvest directly to your home or preferred address.
              </p>
            </div>
            {/* <Button href="/about" label="Learn More" variant="primary" /> */}
          </div>
          <div className={styles.section__imageWrap}>
            <Image
              src={IMAGES.about}
              alt="Farmers carrying crates of fresh produce in the field"
              width={566}
              height={720}
              className={styles.section__image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
