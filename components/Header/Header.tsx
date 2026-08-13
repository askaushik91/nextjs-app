'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO, NAV_LINKS, WAITLIST_HREF } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import styles from './Header.module.scss';

/**
 * Sticky header. Transparent at top of page, solid background on scroll.
 * Mobile: hamburger menu toggles nav.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled ? `${styles.header} ${styles['header--solid']}` : styles.header;

  return (
    <header className={headerClass} role="banner">
      <div className={styles.header__container}>
        <div className={styles.header__inner}>
          <Link href="/" className={styles.header__logo} aria-label="Gill Organics home">
            <Image
            src={IMAGES.logo}
            alt="Gill Organics"
            width={198}
            height={72}
            priority
            className={styles.logoWrapper}
          />
          </Link>

          <nav
            className={`${styles.header__nav} ${menuOpen ? styles['header__nav--open'] : ''}`}
            aria-label="Main navigation"
          >
            <ul className={styles.header__navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.header__navLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={styles.header__mobileOnly}>
                <Link
                  href="#"
                  className={styles.header__navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>

            <div className={styles.header__mobileMenuFooter}>
              <div className={styles.header__mobileContact}>
                <p className={styles.header__mobileMenuLabel}>Get in touch</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                  {CONTACT_INFO.phone}
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>

              <div className={styles.header__mobileSocial}>
                <p className={styles.header__mobileMenuLabel}>Follow us</p>
                <div className={styles.header__mobileSocialLinks}>
                  <a href="https://www.facebook.com/gillorganics/" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="https://www.instagram.com/gillorganics/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </nav>

          <div className={styles.header__cta}>
            <Link href="#" className={styles.header__login}>
              Login
            </Link>
            <Button href={WAITLIST_HREF} label="Join Wait List" variant="outline" light target="_blank" />
          </div>

          <button
            type="button"
            className={styles.header__hamburger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.header__hamburgerLine} />
            <span className={styles.header__hamburgerLine} />
            <span className={styles.header__hamburgerLine} />
          </button>
        </div>
      </div>
    </header>
  );
}
