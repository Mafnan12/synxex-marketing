import Link from "next/link";
import {
  Bitcoin,
  LineChart,
  TrendingUp,
  Landmark,
  CreditCard,
  Send,
  WalletMinimal,
  Bot,
  Fingerprint,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { Hero } from "@/components/marketing/hero/Hero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

const products = [
  { icon: Bitcoin, title: "Crypto Trading", description: "Spot trading across major and emerging digital assets, built for speed and clarity.", href: "/markets" },
  { icon: LineChart, title: "Forex", description: "Major and minor currency pairs alongside every other market, in one account.", href: "/markets" },
  { icon: TrendingUp, title: "Stocks", description: "Equities access without a separate brokerage account or balance to manage.", href: "/markets" },
  { icon: Landmark, title: "Banking & Multi-Currency Accounts", description: "Hold and move multiple fiat currencies from a single unified balance.", href: "/banking-cards" },
  { icon: CreditCard, title: "Virtual & Physical Cards", description: "Spend directly from your SynxEx balance, online or in person.", href: "/banking-cards" },
  { icon: Send, title: "International Remittance", description: "Send money globally with transparent, itemized fees at every step.", href: "/remittance" },
  { icon: WalletMinimal, title: "Multi-Chain Web3 Wallet", description: "One wallet interface designed to span dozens of blockchain networks.", href: "/wallet" },
  { icon: Bot, title: "AI Trading Agents", description: "Browse and monitor AI-managed strategies with transparent risk profiles.", href: "/ai-agents" },
  { icon: Layers, title: "Unified Account Experience", description: "One identity, one balance, one security posture across every product.", href: "/about" },
];

const pillars = [
  { icon: Fingerprint, title: "One identity", description: "A single sign-on and verification status follows you across every market and product." },
  { icon: ShieldCheck, title: "Built for trust", description: "Security, transparency, and clear disclosure are treated as product features, not afterthoughts." },
  { icon: Layers, title: "Designed to connect", description: "The interface is architected to plug into real trading, banking, and custody infrastructure as it ships." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="products">
        <SectionHeading
          eyebrow="One account, every market"
          title="Every financial vertical, unified"
          description="SynxEx is designed so you never feel like you've entered nine separate products. Explore what's coming to the platform."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} href={p.href} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading
          eyebrow="Why SynxEx"
          title="A platform built around one account, not nine"
          description="Every product on SynxEx shares the same identity, balance model, and security center — so switching between markets never feels like switching apps."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] px-6 py-14 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(255,106,43,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(92,16,35,0.35), transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ready to see where SynxEx is headed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/55">
              The full trading, banking, and wallet experience is in active development. Get started to follow along,
              or explore each product in more detail.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/login"
                className="rounded-md bg-gradient-to-r from-[#ff6a2b] via-[#e2321f] to-[#5c1023] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(226,50,31,0.3)] transition-opacity hover:opacity-90"
              >
                Get Started
              </Link>
              <Link href="/about" className="rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
