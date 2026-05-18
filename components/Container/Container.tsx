import type { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centered max-width wrapper with horizontal padding.
 * Use for consistent content width across sections.
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {children}
    </div>
  );
}
