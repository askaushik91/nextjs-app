'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, CONTACT_HREF } from '@/lib/constants';
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
            </ul>
          </nav>

          <div className={styles.header__cta}>
              <Button href={CONTACT_HREF} label="Contact Us" variant="outline" light />
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
