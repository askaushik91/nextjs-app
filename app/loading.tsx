import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading} aria-live="polite" aria-busy="true">
      <div className={styles.loading__spinner} />
      <p className={styles.loading__text}>Loading…</p>
    </div>
  );
}
