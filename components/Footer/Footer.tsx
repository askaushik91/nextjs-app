import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  HEADER_NAV_LINKS,
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
            Copyright 2026 Gill Organics  |  Design &amp; Developed By:
            <span className={styles.footer__credit}> <a href="https://thedigitalpanthers.com/" target="_blank" rel="noopener noreferrer">The Digital Panthers</a></span>
          </p>
        </div>

        {/* MIDDLE */}
        <div className={styles.footer__column}>
          <h3 className={styles.footer__columnTitle}>Useful Links</h3>

          <ul className={styles.footer__links}>
            {HEADER_NAV_LINKS.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.footer__column}>
          <h3 className={styles.footer__columnTitle}>Social Media</h3>

          <ul className={styles.footer__links}>
            <li><Link href="https://www.facebook.com/gillorganics/" target="_blank">Facebook</Link></li>
            <li><Link href="https://www.instagram.com/gillorganics/" target="_blank">Instagram</Link></li>
          </ul>

          <h3 className={`${styles.footer__columnTitle} ${styles.footer__policyTitle}`}>Policy</h3>

          <ul className={styles.footer__links}>
            <li><Link href="/refund-policy">Refund Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>
      </div>
    </footer>
  );
}
