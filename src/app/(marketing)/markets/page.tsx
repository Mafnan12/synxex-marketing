import type { Metadata } from "next";
import { Bitcoin, LineChart, TrendingUp, BarChart3, Gauge, ListOrdered } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "Markets" };

const markets = [
  { icon: Bitcoin, title: "Crypto", description: "Spot trading across major and emerging digital assets, from a single unified balance." },
  { icon: LineChart, title: "Forex", description: "Major and minor currency pairs, traded alongside every other asset class you hold." },
  { icon: TrendingUp, title: "Stocks", description: "Equities access without opening or funding a separate brokerage account." },
];

const capabilities = [
  { icon: BarChart3, title: "One order-entry experience", description: "A consistent trading interface for market, limit, and stop orders — regardless of asset class." },
  { icon: Gauge, title: "Shared collateral, shared margin", description: "Assets across your account can back positions through a common margin framework." },
  { icon: ListOrdered, title: "Unified order & trade history", description: "Every order and fill, across every market, in one searchable history." },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Crypto, forex, and stocks in one venue"
        description="SynxEx is being built so you can move between crypto, forex, and stocks without switching accounts, balances, or interfaces."
        primaryCta={{ label: "Get Started", href: "/login" }}
        secondaryCta={{ label: "Explore SynxEx", href: "/#products" }}
      />

      <Section>
        <SectionHeading eyebrow="Asset classes" title="Every market, one account" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {markets.map((m) => (
            <FeatureCard key={m.title} icon={m.icon} title={m.title} description={m.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading
          eyebrow="Platform design"
          title="Built for cross-asset trading, from day one"
          description="The trading experience is designed around shared infrastructure rather than three bolted-together products."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {capabilities.map((c) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/35">
          Live order execution and market data are not yet connected. This page describes the market structure
          SynxEx is designing toward.
        </p>
      </Section>
    </>
  );
}
