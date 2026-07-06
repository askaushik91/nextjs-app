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
            <a href="https://www.facebook.com/gillorganics/" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_211_93540)">
              <path d="M13.25 8C13.25 7.53587 13.4345 7.09088 13.7627 6.7627C14.0909 6.43451 14.5359 6.25 15 6.25H17.25V3.75H15C13.8728 3.75 12.7921 4.19809 11.9951 4.99512C11.1981 5.79215 10.75 6.87283 10.75 8V10C10.75 10.4142 10.4142 10.75 10 10.75H7.75V13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V20.25H13.25V14C13.25 13.5858 13.5858 13.25 14 13.25H16.415L17.04 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10V8ZM14.75 9.25H18C18.2308 9.25 18.4487 9.35628 18.5908 9.53809C18.7329 9.72006 18.7835 9.95765 18.7275 10.1816L17.7275 14.1816C17.6441 14.5155 17.3442 14.75 17 14.75H14.75V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V14.75H7C6.58579 14.75 6.25 14.4142 6.25 14V10C6.25 9.58579 6.58579 9.25 7 9.25H9.25V8C9.25 6.47501 9.85624 5.0129 10.9346 3.93457C12.0129 2.85624 13.475 2.25 15 2.25H18C18.4142 2.25 18.75 2.58579 18.75 3V7C18.75 7.41421 18.4142 7.75 18 7.75H15C14.9337 7.75 14.8701 7.77636 14.8232 7.82324C14.7764 7.87013 14.75 7.9337 14.75 8V9.25Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_211_93540">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </a>
            <a href="https://www.instagram.com/gillorganics/" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_211_94070)">
              <path d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 7.5V7.51" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_211_94070">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </a>
          </div>
        </div>

        <p className={styles.hero__tagline}>Pure. Fresh. Seasonal.</p>
        <h1 className={styles.hero__headline}>From your farm to your kitchen.</h1>
        <p className={styles.hero__subtext}>
          Adopt you organic cloud-farm, we maintain it on your behalf, you pluck your own veggies anytime, or get weekly produce home-delivered. No chemicals, no compromise- pure organic farm experience.
        </p>
        <div className={styles.hero__cta}>
          <Button
            href="/contact"
            label="Join Waitlist"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
