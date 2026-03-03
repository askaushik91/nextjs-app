import Image from 'next/image';
import type { Metadata } from 'next';
import { Container } from '@/components/Container/Container';
import styles from './testimonials.module.scss';
import BannerSection from '../../components/BannerSection/BannerSection';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';

export default function TestimonialsPage() {
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

      <section className={styles.section}>
      <span className={styles.deco}>Testimonials</span>

      <div className={styles.section__container}>

        {/* VIDEO BLOCK */}
        <div className={styles.videoWrap}>
          <Image
            src={IMAGES.testimonials}
            alt="testimonial video"
            fill
            sizes="100vw"
            priority
            className={styles.video}
          />

          <div className={styles.videoOverlay}>
            <button type="button" className={styles.playBtn}>
              <span />
            </button>

            <p className={styles.caption}>
              See how we helped Groover to grow 11x faster
            </p>
          </div>
        </div>

        {/* TEXT TESTIMONIALS */}
        <div className={styles.textRow}>

          <div className={styles.textBlock}>
            <p>
              “The freshness is unmatched! It feels amazing to receive vegetables grown from our own leased farm.”
            </p>
            <h4>Ramesh Sharma</h4>
            <span>Product Manager at Jomanar</span>
          </div>

          <div className={styles.textBlock}>
            <p>
              “Healthy, chemical-free produce delivered right to our home. Highly recommended!”
            </p>
            <h4>Priya Mehta</h4>
            <span>Freelance UX Designer</span>
          </div>

          <div className={styles.textBlock}>
            <p>
              “Transparent process and excellent service. We can actually see what's being grown.”
            </p>
            <h4>Amit Verma</h4>
            <span>Product Designer at Martina.co</span>
          </div>

        </div>

      </div>
    </section>
    </div>
  );
}
