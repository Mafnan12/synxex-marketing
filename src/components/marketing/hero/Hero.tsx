import { BackgroundNoise } from "./BackgroundNoise";
import { OrbitalSystem } from "./OrbitalSystem";
import { HeroContent } from "./HeroContent";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <BackgroundNoise />
      <OrbitalSystem />
      <HeroContent />
    </section>
  );
}
