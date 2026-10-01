'use client';

import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Brain, Share2, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './scroll-overview.module.css';

const panels = [
  { category: 'DIGITAL ASSETS', title: 'Crypto', body: 'An introduction to cryptocurrencies, blockchain networks, and the ideas behind digital assets.', terms: ['Bitcoin', 'Ethereum', 'Blockchain'], image: '/showcase/crypto.png', mark: 'â‚¿' },
  { category: 'GLOBAL CURRENCIES', title: 'Forex', body: 'Learn how currency pairs are quoted and how foreign exchange connects currencies around the world.', terms: ['Currency pairs', 'Exchange rates', 'Forex'], image: '/showcase/forex.png', mark: 'FX' },
  { category: 'PUBLIC MARKETS', title: 'Stocks', body: 'A plain-language guide to shares, public companies, and the vocabulary used in equity markets.', terms: ['Shares', 'Companies', 'Equities'], image: '/showcase/stocks.png', mark: 'S',
  },
  { category: 'EVERYDAY FINANCE', title: 'Banking & Cards', body: 'Understand common banking terms and the role payment cards play in everyday financial services.', terms: ['Banking', 'Payment cards', 'Accounts'], image: '/showcase/banking-cards.png', mark: 'SX' },
  { category: 'CROSS-BORDER', title: 'Remittance', body: 'An introduction to international money transfers and the language used to describe sending and receiving money.', terms: ['Sender', 'Transfer', 'Recipient'], image: '/showcase/remittance.png', mark: 'â†—' },
  { category: 'WEB3', title: 'Web3 Wallet', body: 'Explore what digital wallets do and learn about keys, networks, and Web3 terminology.', terms: ['Wallets', 'Keys', 'Networks'], image: '/showcase/web3-wallet.png', mark: 'W3' },
  { category: 'EMERGING TECHNOLOGY', title: 'AI Agents', body: 'Learn what people mean by AI agents and how these systems are discussed in the context of digital services.', terms: ['AI', 'Agents', 'Information'], image: '/showcase/ai-agents.png', mark: 'AI' },
];

export function ScrollOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const [activePanel, setActivePanel] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 120, damping: 30, restDelta: 0.001, skipInitialAnimation: true });
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : isSmallScreen ? [-1.5, 0, 1.5] : [-6, 0, 6]);
  const x = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : isSmallScreen ? [-2, 0, 2] : [-22, 0, 22]);
  const y = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : isSmallScreen ? [3, -3, 3] : [12, -20, 12]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], shouldReduceMotion ? [1, 1, 1] : isSmallScreen ? [0.97, 1, 0.97] : [0.94, 1.03, 0.94]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)');
    const updateSize = () => setIsSmallScreen(media.matches);
    updateSize();
    media.addEventListener('change', updateSize);
    return () => media.removeEventListener('change', updateSize);
  }, []);

  useEffect(() => {
    const updateFromScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const range = Math.max(1, section.offsetHeight - window.innerHeight);
      const scrolledThrough = Math.max(0, -section.getBoundingClientRect().top);
      const progress = Math.min(1, scrolledThrough / range);
      scrollProgress.set(progress);

      const nextPanel = Math.min(panels.length - 1, Math.floor(scrolledThrough / window.innerHeight));
      if (nextPanel !== activeRef.current) {
        activeRef.current = nextPanel;
        setActivePanel(nextPanel);
      }
    };

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    updateFromScroll();
    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, [scrollProgress]);

  const scrollToNextPanel = () => {
    window.scrollBy({ top: window.innerHeight * 0.92, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };
  const active = panels[activePanel];

  return (
    <section className={styles.story} id="platform-overview" ref={sectionRef} aria-label="Explore SynxEx products">
      <div className={styles.grid} data-active={activePanel}>
        <div className={styles.copy}>
          {panels.map((panel, index) => (
            <article className={styles.step} data-step={index} key={panel.title} aria-current={activePanel === index ? 'step' : undefined}>
              <div className={styles.copyCard}>
                <p className={styles.eyebrow}><span>PRODUCT</span><i aria-hidden="true" />{panel.category}</p>
                <h2>{panel.title}</h2>
                <p className={styles.body}>{panel.body}</p>
                <div className={styles.terms}>{panel.terms.map((term) => <span key={term}>{term}</span>)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.stage}>
          <div className={styles.ambient} aria-hidden="true" />
          <motion.div className={styles.composition} style={{ rotate, x, y, scale }}>
            <div className={styles.artwork} aria-hidden="true">
              {panels.map((panel, index) => (
                index === 6 ? null : (
                  <div className={styles.product} data-product={index} key={panel.image}>
                    <Image src={panel.image} alt="" fill sizes="(max-width: 700px) 96vw, 62vw" priority={index === 0} />
                  </div>
                )
              ))}
            </div>
            {activePanel === 6 && <div className={styles.aiCoreScene} aria-hidden="true">
              <div className={`${styles.aiOrbit} ${styles.aiOrbitOne}`} />
              <div className={`${styles.aiOrbit} ${styles.aiOrbitTwo}`} />
              <div className={styles.aiCoreAura} />
              <div className={styles.aiCore}>AI</div>
              <span className={styles.aiCoreDot} />
            </div>}
            {activePanel === 6 && <div className={styles.aiDecor} aria-hidden="true">
              <div className={`${styles.aiIcon} ${styles.aiSpark}`}><Sparkles /></div>
              <div className={`${styles.aiIcon} ${styles.aiBrain}`}><Brain /></div>
              <div className={`${styles.aiIcon} ${styles.aiNetwork}`}><Share2 /></div>
              <div className={`${styles.aiCard} ${styles.aiCardLeft}`}><span className={styles.aiCardGlyph}><Sparkles size={13} /></span><span><small>AI SYSTEMS</small><b>Learning</b></span></div>
              <div className={`${styles.aiCard} ${styles.aiCardRight}`}><span className={styles.aiNodes}><i /><i /><i /></span><span><small>CONNECTED</small><b>Networks</b></span></div>
            </div>}
            <div className={styles.floatCard} aria-hidden="true"><span className={styles.floatIcon}>{active.mark}</span><span><small>SYNXEX / TOPIC</small><b>{active.title}</b></span><ArrowUpRight size={15} /></div>
          </motion.div>
          <p className={styles.scrollHint}><span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" /></p>
          <button className={styles.next} type="button" onClick={scrollToNextPanel} aria-label="Scroll to the next product showcase"><ArrowDown size={17} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
