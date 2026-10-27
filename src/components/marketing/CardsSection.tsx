import Link from "next/link";
import { ArrowUpRight, Wifi } from "lucide-react";
import styles from "./cards-section.module.css";

function PaymentCard({ physical }: { physical?: boolean }) {
  return (
    <div
      className={`${styles.cardVisual} ${physical ? styles.physicalCard : styles.virtualCard}`}
      aria-hidden="true"
    >
      <div className={styles.cardFace}>
        <div className={styles.cardHeader}>
          <span className={styles.brandSymbol}>S</span>
          <span className={styles.brandName}>SynxEx</span>
          <Wifi className={styles.contactless} strokeWidth={1.7} />
        </div>
        <div className={styles.cardShine} />
        <div className={styles.cardChip}><i /><i /><i /><i /></div>
        <div className={styles.cardNumber}>•••• &nbsp; •••• &nbsp; •••• &nbsp; 4821</div>
        <div className={styles.cardFooter}>
          <span>EVERY MARKET. ONE ACCOUNT.</span>
          <b>VISA</b>
        </div>
      </div>
    </div>
  );
}

export function CardsSection() {
  return (
    <section className={styles.section} aria-labelledby="synxex-cards-heading">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <span className={styles.eyebrow}>Cards</span>
          <h2 id="synxex-cards-heading">One account.<br />Two ways to pay.</h2>
          <p>Choose a virtual card for instant digital payments or a physical card for everyday spending.</p>
        </header>

        <div className={styles.products}>
          <article className={styles.product}>
            <div className={styles.visualStage}>
              <PaymentCard />
              <span className={styles.visualGlow} />
            </div>
            <div className={styles.productCopy}>
              <span className={styles.productType}>VIRTUAL CARD</span>
              <h3>Virtual Card</h3>
              <p>Ready in moments for subscriptions, online shopping, and secure digital payments.</p>
              <Link className={styles.cta} href="/banking-cards">
                Explore Virtual Card <ArrowUpRight size={17} strokeWidth={1.8} />
              </Link>
            </div>
          </article>

          <article className={styles.product}>
            <div className={styles.visualStage}>
              <PaymentCard physical />
              <span className={styles.visualGlow} />
            </div>
            <div className={styles.productCopy}>
              <span className={styles.productType}>PHYSICAL CARD</span>
              <h3>Physical Card</h3>
              <p>A premium card for daily in-person spending, with contactless convenience wherever you go.</p>
              <Link className={styles.cta} href="/banking-cards">
                Explore Physical Card <ArrowUpRight size={17} strokeWidth={1.8} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
