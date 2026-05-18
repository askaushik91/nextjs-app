'use client';

import { useEffect } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h1 className={styles.error__heading}>Something went wrong</h1>
      <p className={styles.error__text}>
        We couldn’t load this page. Please try again.
      </p>
      <Button label="Try again" onClick={reset} variant="primary" />
    </div>
  );
}
