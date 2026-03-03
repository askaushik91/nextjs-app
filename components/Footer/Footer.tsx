import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  FOOTER_QUICK_LINKS,
  CONTACT_INFO,
} from '@/lib/constants';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <span className={styles.footer__deco} aria-hidden>
        {SITE_NAME.toUpperCase()}
      </span>
      <div className={styles.footer__container}>
        <div className={styles.footer__grid}>

        {/* LEFT */}
        <div className={styles.footer__brand}>
          <Link href="/" className={styles.footer__logo}>
            <Image
              src={IMAGES.logo}
              alt="Gill Organics"
              width={198}
              height={72}
              priority
              className={styles.logoWrapper}
            />
          </Link>

          <p className={styles.footer__tagline}>
            Lease fertile farmland, grow seasonal organic vegetables naturally, and enjoy farm-fresh produce delivered straight from your own soil to your home.
          </p>

          <p className={styles.footer__copyright}>
            Copyright 2026 Gill Organics  |  Design & Developed By:
            <span className={styles.footer__credit}> <Link href="/">The Digital Panthers</Link></span>
          </p>
        </div>

        {/* MIDDLE */}
        <div className={styles.footer__column}>
          <h3 className={styles.footer__columnTitle}>Useful Links</h3>

          <ul className={styles.footer__links}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.footer__column}>
          <h3 className={styles.footer__columnTitle}>Social Media</h3>

          <ul className={styles.footer__links}>
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
          </ul>
        </div>

      </div>
      </div>
    </footer>
  );
}
