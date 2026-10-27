import styles from "./marketplace.module.css";

export default function MarketplaceLoading() {
  return <main className={`${styles.marketplace} ${styles.loading}`} aria-busy="true" aria-label="Loading Marketplace"><span className={styles.eyebrow}>THE SYNXEX MARKETPLACE</span><div className={styles.loadingGrid}><div><div className={styles.skeleton} /><div className={styles.skeleton} /><div className={styles.skeleton} /><p>Preparing your market perspective…</p></div><div className={styles.loadingOrb} /></div></main>;
}
