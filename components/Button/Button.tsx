'use client';

import Link from 'next/link';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'outline';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: 'button' | 'submit';
  className?: string;
  /** For outline buttons on dark backgrounds (e.g. header) */
  light?: boolean;
  target?: '_blank';
}

/**
 * Reusable button. Renders as next/link when href is provided, otherwise as <button>.
 */
export function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  light = false,
  target,
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    label === 'Join Wait List' ? styles['button--waitlist'] : '',
    light ? styles['button--light'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link
        href={href}
        className={classNames}
        aria-label={label}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
      >
        <span className={styles.button__label}>{label}</span>
        <span className={styles.button__arrow} aria-hidden>
          →
        </span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      aria-label={label}
    >
      <span className={styles.button__label}>{label}</span>
      <span className={styles.button__arrow} aria-hidden>
        →
      </span>
    </button>
  );
}
