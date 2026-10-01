import styles from "./hero.module.css";

function Chip() {
  return <span className={styles.chip} aria-hidden="true" />;
}

export function OrbitalSystem() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.scene}>
        <div className={styles.laptop}>
          <div className={styles.screenShell}>
            <div className={styles.screen}>
              <div className={styles.dashboardTop}>
                <span className={styles.brandMark}>S</span>
                <span className={styles.dashboardBrand}>SynxEx</span>
                <span className={styles.dashboardNav}>Markets&nbsp;&nbsp; Wallet&nbsp;&nbsp; Activity</span>
                <span className={styles.avatar}>SX</span>
              </div>
              <div className={styles.dashboardBody}>
                <div className={styles.dashboardCopy}>
                  <span className={styles.dashboardKicker}>PORTFOLIO OVERVIEW</span>
                  <strong>Markets at a glance</strong>
                  <span className={styles.dashboardBalance}>$48,290.68 <i>+8.42%</i></span>
                </div>
                <div className={styles.chart}>
                  <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
                </div>
                <div className={styles.marketRows}>
                  <span><b className={styles.btcDot}>₿</b> Bitcoin <i>$67,420</i></span>
                  <span><b className={styles.ethDot}>◆</b> Ethereum <i>$3,521</i></span>
                  <span><b className={styles.fxDot}>€</b> EUR / USD <i>1.0842</i></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.laptopBase}>
            <div className={styles.keyboard}>
              {Array.from({ length: 48 }, (_, index) => <i key={index} />)}
            </div>
            <span className={styles.trackpad} />
          </div>
          <div className={styles.laptopLip} />
        </div>

        <article className={`${styles.card} ${styles.cardBlack}`}>
          <div className={styles.cardEdge} />
          <div className={styles.cardFace}>
            <div className={styles.cardTop}><span className={styles.brandMark}>S</span><b>SynxEx</b><span className={styles.cardContact}>◖</span></div>
            <div className={styles.cardSymbol}>₿</div>
            <div className={styles.cardDetails}><Chip /><span>PREMIUM DIGITAL ASSET</span></div>
            <div className={styles.cardBottom}><span>BITCOIN •••• 4821</span><b>VISA</b></div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardWeb3}`}>
          <div className={styles.cardEdge} />
          <div className={styles.cardFace}>
            <div className={styles.cardTop}><span className={styles.brandMark}>S</span><b>SynxEx</b><span className={styles.cardContact}>◖</span></div>
            <div className={styles.web3Pattern}>◇</div>
            <div className={styles.cardDetails}><Chip /><span>WEB3 • SELF CUSTODY</span></div>
            <div className={styles.cardBottom}><span>ETHEREUM •••• 0924</span><b>∞</b></div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardOrange}`}>
          <div className={styles.cardEdge} />
          <div className={styles.cardFace}>
            <div className={styles.cardTop}><span className={styles.brandMark}>S</span><b>SynxEx</b><span className={styles.cardContact}>◖</span></div>
            <div className={styles.orangePattern} />
            <div className={styles.cardDetails}><Chip /><span>ONE ACCOUNT. EVERY MARKET.</span></div>
            <div className={styles.cardBottom}><span>GLOBAL •••• 6108</span><b>VISA</b></div>
          </div>
        </article>
        <div className={styles.groundGlow} />
      </div>
    </div>
  );
}
