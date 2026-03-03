import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { IMAGES } from '@/lib/images';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.hero__bg}>
        <Image
          src={IMAGES.hero}
          alt="Organic farm field with fresh vegetables"
          fill
          priority
          sizes="100vw"
          className={styles.hero__img}
        />
        <div className={styles.hero__overlay} aria-hidden />
      </div>
      <div className={styles.hero__content}>
        <div className={styles.followUs}>
          <span className={styles.followText}>Follow us</span>

          <div className={styles.socialIcons}>
            <a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.8 2.00003H16.2C19.4032 2.00003 22 4.59678 22 7.80003V16.2C22 19.4033 19.4032 22 16.2 22H7.8C4.59675 22 2 19.4033 2 16.2V7.80003C2 4.59678 4.59675 2.00003 7.8 2.00003ZM7.6 4.00001C5.61177 4.00001 4 5.61179 4 7.60001V16.4C4 18.3882 5.61177 20 7.6 20H16.4C18.3882 20 20 18.3882 20 16.4V7.60001C20 5.61179 18.3882 4.00001 16.4 4.00001H7.6ZM17.25 5.50001C17.9404 5.50001 18.5 6.05966 18.5 6.75001C18.5 7.44037 17.9404 8.00001 17.25 8.00001C16.5596 8.00001 16 7.44037 16 6.75001C16 6.05966 16.5596 5.50001 17.25 5.50001ZM12 7.00001C14.7614 7.00001 17 9.23859 17 12C17 14.7614 14.7614 17 12 17C9.23857 17 7 14.7614 7 12C7 9.23859 9.23857 7.00001 12 7.00001ZM12 9.00001C10.3431 9.00001 9 10.3432 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 9.00001 12 9.00001Z" fill="white"/>
              </svg>
            </a>
            <a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4592 6.01238C21.6896 6.35373 20.8624 6.58442 19.9944 6.68815C20.8803 6.15701 21.5609 5.31598 21.8813 4.31378C21.052 4.80564 20.1336 5.16278 19.156 5.3552C18.3732 4.52112 17.2579 4 16.0235 4C13.6534 4 11.7317 5.92147 11.7317 8.29155C11.7317 8.6279 11.7697 8.95546 11.8429 9.2696C8.2761 9.0906 5.11376 7.38203 2.9971 4.78551C2.62766 5.41935 2.41602 6.15656 2.41602 6.94309C2.41602 8.43204 3.17365 9.74563 4.32524 10.5153C3.6218 10.4929 2.95997 10.2999 2.3814 9.97846C2.38099 9.99639 2.38099 10.0143 2.38099 10.0324C2.38099 12.1118 3.86034 13.8463 5.8236 14.2406C5.4635 14.3387 5.08435 14.3912 4.69295 14.3912C4.41641 14.3912 4.14756 14.3642 3.88547 14.3142C4.43162 16.0191 6.01654 17.26 7.89455 17.2945C6.42577 18.4457 4.57528 19.1318 2.56454 19.1318C2.21813 19.1318 1.87652 19.1114 1.54078 19.0717C3.44004 20.2894 5.69592 21 8.11951 21C16.0134 21 20.3302 14.4605 20.3302 8.78918C20.3302 8.60314 20.326 8.41805 20.3177 8.23395C21.1563 7.62886 21.8839 6.87302 22.4592 6.01238Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        <p className={styles.hero__tagline}>Pure. Seasonal. Naturally Yours.</p>
        <h1 className={styles.hero__headline}>From Your Soil to Your Kitchen.</h1>
        <p className={styles.hero__subtext}>
          Lease your own organic farmland and receive fresh seasonal vegetables
          delivered straight to your door. No chemicals. No compromise.
        </p>
        <div className={styles.hero__cta}>
          <Button
            href="/contact"
            label="Reserve Your Plot & Talk to Our Farming Experts"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
