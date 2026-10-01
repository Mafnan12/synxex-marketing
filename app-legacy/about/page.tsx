import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "About SynxEx",
  description: "Meet SynxEx: one connected platform for crypto, forex, stocks, payments, and digital assets.",
};

const principles = [
  ["One clear view", "Bring the pieces of your financial life together so every decision starts with context."],
  ["Markets in reach", "Move between global markets and everyday money tools from one connected experience."],
  ["Designed around you", "Useful information, considered tools, and a calmer way to manage what matters."],
];

export default function About() {
  return <>
    <SiteHeader />
    <main>
      <PageHero eyebrow="About SynxEx" title="A clearer way to move across every market." intro="SynxEx brings crypto, forex, stocks, banking, cards, remittance, Web3, and AI tools into one connected financial platform." />
      <section className="content-section wrap split">
        <div><p className="eyebrow">Our idea</p><h2>One account should open more possibilities.</h2></div>
        <div><p>Money moves across markets, borders, and new digital worlds. The SynxEx platform concept brings these topics together in one informational overview.</p><p>This website describes areas such as traditional markets, digital assets, and financial services. References here are informational and do not confirm product availability or the provision of financial services.</p><Link className="text-link" href="/#products">Explore the topics <b aria-hidden="true">→</b></Link></div>
      </section>
      <section className="dark-section"><div className="wrap"><p className="eyebrow">What guides us</p><div className="three-grid">{principles.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="content-section wrap split">
        <div><p className="eyebrow">Built for what connects</p><h2>From a global market to money at home.</h2></div>
        <div><p>Follow crypto, forex, and stocks. Connect those markets to banking, cards, and international transfers. Keep digital assets in a Web3 wallet and get help making sense of the details with AI agents.</p><p>Each part has a role. Together, they make a more connected account experience.</p><Link className="text-link" href="/contact">Talk with SynxEx <b aria-hidden="true">→</b></Link></div>
      </section>
      <section className="cta"><div className="wrap"><p className="eyebrow">SynxEx overview</p><h2>One platform concept.<br />Many connected topics.</h2><Link className="button light" href="/">Explore the information <b aria-hidden="true">→</b></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
