import styles from "./hero.module.css";

export function BackgroundNoise() {
  return (
    <>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.petal} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
    </>
  );
}
