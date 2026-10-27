import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./platform-guide-section.module.css";

const marketTopics = ["Crypto", "Forex", "Stocks"];
const platformTopics = ["Banking", "Remittance", "Web3 · AI"];

function TopicPanel({ side, eyebrow, title, topics }: {
  side: "left" | "right";
  eyebrow: string;
  title: ReactNode;
  topics: string[];
}) {
  return (
    <article className={`${styles.topicPanel} ${styles[side]}`} aria-label={`${eyebrow}: ${topics.join(", ")}`}>
      <div className={styles.topicBrand}><span>SX</span></div>
      <span className={styles.panelEyebrow}>{eyebrow}</span>
      <h3>{title}</h3>
      <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
    </article>
  );
}

export function PlatformGuideSection() {
  return (
    <section className={styles.section} aria-label="Explore the SynxEx platform">
      <div className={styles.gridLines} aria-hidden="true" />
      <div className={styles.composition}>
        <TopicPanel side="left" eyebrow="MARKET GUIDE" title={<>Explore<br />the markets.</>} topics={marketTopics} />

        <article className={styles.centerPanel}>
          <div className={styles.screenTop}>
            <span className={styles.screenMark}>S</span>
            <span>PLATFORM GUIDE</span>
            <i />
          </div>
          <div className={styles.screenContent}>
            <span className={styles.screenEyebrow}>SYNXEX / OVERVIEW</span>
            <h2>One platform.<br /><em>Every market.</em></h2>
            <p>One connected place to explore financial services and digital markets.</p>
            <div className={styles.brandOrbit} aria-hidden="true">
              <span className={styles.orbitRing} />
              <span className={styles.orbitRing} />
              <span className={styles.orbitCore}>SX</span>
              <i className={styles.orbitDotOne} />
              <i className={styles.orbitDotTwo} />
            </div>
          </div>
          <div className={styles.screenFooter}>MARKETS · SERVICES · DIGITAL</div>
        </article>

        <TopicPanel side="right" eyebrow="PLATFORM GUIDE" title={<>Connected<br />ideas.</>} topics={platformTopics} />

        <Link className={styles.infoCard} href="/about">
          <span className={styles.infoIcon}><Info size={21} strokeWidth={1.7} /></span>
          <span><small>Platform guide</small><b>Explore the topics</b></span>
          <ArrowUpRight className={styles.infoArrow} size={18} strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
