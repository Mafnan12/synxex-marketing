"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./hero.module.css";

const HEADLINE = "One Platform. Every Market.";

export function HeroContent() {
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = centerRef.current;
    if (!el) return;

    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 480, 1);
        el!.style.opacity = String(1 - progress * 0.9);
        el!.style.transform = `translate3d(0, ${progress * 24}px, 0)`;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.center} ref={centerRef}>
      <span className={styles.eyebrow}>Unified Financial Infrastructure</span>

      <div className={styles.headingWrap}>
        <h1 className={styles.heading}>{HEADLINE}</h1>
      </div>

      <p className={styles.description}>
        SynxEx brings crypto, forex, stocks, banking, cards, remittance, AI trading agents, and a Web3 wallet into
        one unified account — a single identity, balance, and security posture across every market.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/login" className={`${styles.cta} ${styles.ctaPrimary}`}>
          <span className={styles.corner} data-pos="tl" />
          <span className={styles.corner} data-pos="tr" />
          <span className={styles.corner} data-pos="bl" />
          <span className={styles.corner} data-pos="br" />
          Get Started
        </Link>
        <Link
          href="#products"
          className={styles.cta}
          style={{ borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,245,240,0.92)" }}
        >
          Explore SynxEx
        </Link>
      </div>
    </div>
  );
}
