'use client';

import { Button } from '@/components/Button/Button';
import { WAITLIST_HREF } from '@/lib/constants';
import styles from './PricingSection.module.scss';

export function PricingSection() {
  return (
    <section className={styles.pricing} aria-labelledby="pricing-heading">
      <div className={styles.pricing__container}>
        <div className={styles.pricing__header}>
          <span className={styles.pricing__badge}>MEMBERSHIP PLANS</span>
          <h2 id="pricing-heading" className={styles.pricing__heading}>
            PRICING
          </h2>
          {/* <p className={styles.pricing__subheading}>
            Choose your location and enjoy fresh, chemical-free organic vegetables delivered straight to your doorstep every week. Pay in 3 convenient instalments.
          </p> */}
        </div>

        <div className={styles.pricing__grid}>
          {/* Card 1: Chandigarh & Ludhiana */}
          <div className={styles.pricing__card}>
            <div className={styles.pricing__cardHeader}>
              <h3 className={styles.pricing__cardTitle}>Chandigarh &amp; Ludhiana</h3>
              <div className={styles.pricing__priceContainer}>
                <span className={styles.pricing__currency}>Rs.</span>
                <span className={styles.pricing__price}>40,000</span>
                <span className={styles.pricing__slash}>/-</span>
              </div>
              <span className={styles.pricing__billing}>Per Season (6 Months)</span>
            </div>
            
            <div className={styles.pricing__cardDivider} />
            
            <ul className={styles.pricing__features}>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Dedicated ~150 sq. yd. plot</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Weekly farm-to-home delivery</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Pay in 2 instalments</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Visit and pluck veggies anytime</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>No hidden charges</span>
              </li>
            </ul>

            <div className={styles.pricing__cta}>
              <Button href={WAITLIST_HREF} label="Join Waitlist" variant="primary" target="_blank" />
            </div>
          </div>

          {/* Card 2: Patiala */}
          <div className={`${styles.pricing__card} ${styles['pricing__card--featured']}`}>
            <div className={styles.pricing__cardHeader}>
              <h3 className={styles.pricing__cardTitle}>Patiala</h3>
              <div className={styles.pricing__priceContainer}>
                <span className={styles.pricing__currency}>Rs.</span>
                <span className={styles.pricing__price}>35,000</span>
                <span className={styles.pricing__slash}>/-</span>
              </div>
              <span className={styles.pricing__billing}>Per Season (6 Months)</span>
            </div>
            
            <div className={styles.pricing__cardDivider} />
            
            <ul className={styles.pricing__features}>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Dedicated ~150 sq. yd. plot</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Weekly farm-to-home delivery</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Pay in 2 instalments</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>Visit and pluck veggies anytime</span>
              </li>
              <li>
                <span className={styles.pricing__icon}>✓</span>
                <span>No hidden charges</span>
              </li>
            </ul>

            <div className={styles.pricing__cta}>
              <Button href={WAITLIST_HREF} label="Join Waitlist" variant="primary" target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
