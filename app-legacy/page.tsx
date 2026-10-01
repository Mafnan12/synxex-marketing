import type { Metadata } from "next";
import Link from "next/link";
import "./home.css";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "One Platform. Every Market.",
  description: "SynxEx brings markets, money movement, wallets, and intelligent tools into one connected account.",
};

const markets = [
  { number: "01", name: "Crypto", eyebrow: "Digital assets", copy: "Trade major assets and discover the next market move from a single, clear view.", symbol: "BTC", tone: "lime" },
  { number: "02", name: "Forex", eyebrow: "Global currencies", copy: "Move across currency pairs with market access that keeps pace with the world.", symbol: "FX", tone: "mint" },
  { number: "03", name: "Stocks", eyebrow: "Equities", copy: "Build conviction across leading companies, sectors, and global opportunities.", symbol: "EQ", tone: "blue" },
  { number: "04", name: "Banking & Cards", eyebrow: "Everyday finance", copy: "Spend, save, and manage your money with tools made for daily momentum.", symbol: "SC", tone: "coral" },
  { number: "05", name: "Remittance", eyebrow: "Money in motion", copy: "Send value across borders with a simpler route from your account to theirs.", symbol: "RW", tone: "yellow" },
  { number: "06", name: "Web3 Wallet", eyebrow: "Your digital keys", copy: "Keep your assets close with a wallet designed for the next internet economy.", symbol: "W3", tone: "violet" },
  { number: "07", name: "AI Agents", eyebrow: "Intelligence on demand", copy: "Turn signals into clearer decisions with intelligent assistance built into your flow.", symbol: "AI", tone: "peach" },
];

export default function Home() {
  return <><SiteHeader /><main className="synx-home">
    <section className="synx-hero"><div className="wrap synx-hero-grid"><div className="synx-hero-copy">
      <p className="synx-kicker"><span /> The connected financial universe</p><h1>One Platform.<br /><em>Every Market.</em></h1>
      <p className="synx-hero-lead">SynxEx brings investing, money movement, digital assets, and intelligent tools together in one account built for how the world moves now.</p>
      <div className="synx-actions"><Link className="synx-button" href="/contact">Get Started <span aria-hidden="true">&#8599;</span></Link><a className="synx-link" href="#markets">Explore SynxEx <span aria-hidden="true">&#8594;</span></a></div>
      <div className="synx-market-ticker" aria-label="Example market snapshot"><span><b>BTC</b> $68,420 <i>+2.84%</i></span><span><b>EUR/USD</b> 1.0846 <i>+0.32%</i></span></div>
    </div><div className="synx-terminal" aria-label="SynxEx platform preview"><div className="synx-terminal-top"><span>SynxEx / Portfolio</span><span className="synx-live"><i /> Live</span></div><div className="synx-terminal-balance"><span>Total balance</span><strong>$124,892.40</strong><b>+ $3,842.14 <small>this month</small></b></div><div className="synx-chart" aria-hidden="true"><svg viewBox="0 0 480 190" preserveAspectRatio="none"><path d="M0 158 C36 146 38 130 73 138 S111 119 140 128 S172 83 204 100 S237 88 266 62 S300 78 332 55 S365 47 391 63 S428 26 480 12" /><path className="synx-chart-fill" d="M0 158 C36 146 38 130 73 138 S111 119 140 128 S172 83 204 100 S237 88 266 62 S300 78 332 55 S365 47 391 63 S428 26 480 12 V190 H0Z" /></svg></div><div className="synx-terminal-assets"><div><span>BTC</span><b>$68,420.10</b><i>+2.84%</i></div><div><span>USD</span><b>$26,208.38</b><i>+0.12%</i></div><div><span>NVDA</span><b>$14,762.20</b><i>+1.46%</i></div></div></div></div></section>
    <section className="synx-intro wrap"><p className="synx-kicker"><span /> A new standard for access</p><div><h2>Less switching. More possibility.</h2><p>One secure identity opens a world of markets, payments, and emerging technology. SynxEx is designed to make managing your financial life feel connected, not fragmented.</p></div></section>
    <section className="synx-markets" id="markets"><div className="wrap"><div className="synx-section-head"><div><p className="synx-kicker"><span /> Everything, connected</p><h2>Built around<br />your ambition.</h2></div><p>Explore the tools that let your capital travel further, think faster, and work across every part of your financial world.</p></div><div className="synx-product-grid">{markets.map((market) => <article className={`synx-product synx-product-${market.tone}`} key={market.name}><div className="synx-product-top"><span>{market.number}</span><b>{market.symbol}</b></div><div><p>{market.eyebrow}</p><h3>{market.name}</h3><p className="synx-product-copy">{market.copy}</p></div><a href="#unified" aria-label={`Learn more about ${market.name}`}><span aria-hidden="true">&#8594;</span></a></article>)}</div></div></section>
    <section className="synx-unified wrap" id="unified"><div className="synx-unified-visual" aria-hidden="true"><div className="synx-ring synx-ring-one" /><div className="synx-ring synx-ring-two" /><div className="synx-core">SX</div><div className="synx-orbit synx-orbit-a">BTC</div><div className="synx-orbit synx-orbit-b">FX</div><div className="synx-orbit synx-orbit-c">AI</div><div className="synx-orbit synx-orbit-d">W3</div></div><div className="synx-unified-copy"><p className="synx-kicker"><span /> One secure account</p><h2>Every move, in one place.</h2><p>From your first deposit to your next opportunity, SynxEx gives you a single, seamless home for every part of your financial world.</p><ul><li><span>01</span> One identity across every service</li><li><span>02</span> A complete view of your assets</li><li><span>03</span> Built-in intelligence when you need it</li></ul><Link className="synx-link" href="/contact">Learn More <span aria-hidden="true">&#8594;</span></Link></div></section>
    <section className="synx-statement"><div className="wrap"><p className="synx-kicker"><span /> The future is interconnected</p><h2>More than a place<br />to trade.</h2><p>SynxEx is a platform for a financial life without borders.</p></div></section>
    <section className="synx-cta"><div className="wrap synx-cta-inner"><div><p className="synx-kicker"><span /> Your next move starts here</p><h2>Make the world<br /><em>your market.</em></h2></div><div><p>Open your SynxEx account and step into a more connected way to invest, spend, and move.</p><Link className="synx-button synx-button-light" href="/contact">Get Started <span aria-hidden="true">&#8599;</span></Link></div></div></section>
  </main><SiteFooter /></>;
}
