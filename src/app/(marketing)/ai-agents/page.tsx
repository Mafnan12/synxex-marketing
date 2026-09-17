import type { Metadata } from "next";
import { Bot, ShieldAlert, LineChart, FileCheck2 } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "AI Agents" };

const principles = [
  { icon: LineChart, title: "Transparent performance", description: "Historical return, volatility, drawdown, and Sharpe ratio are shown together — never a single headline number." },
  { icon: FileCheck2, title: "Paper trading, clearly labeled", description: "New strategies are validated in paper trading before any live-verified track record is shown." },
  { icon: ShieldAlert, title: "Risk before returns", description: "Every agent surfaces its risk level and position limits alongside its results, not below them." },
];

export default function AiAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Agents"
        title="AI-managed strategies, with the risk shown up front"
        description="SynxEx is building a marketplace of AI-managed trading agents you can browse, subscribe to, and monitor — with performance reported honestly, including the downside."
        primaryCta={{ label: "Get Started", href: "/login" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
      />

      <Section>
        <SectionHeading
          eyebrow="How agents are presented"
          title="No guaranteed-profit claims"
          description="Past performance does not guarantee future results. Every agent profile is designed around that principle."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
            <Bot className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white">What you&apos;ll be able to do</h2>
          <p className="text-white/55">
            Browse and filter agents by strategy and asset class, review historical performance and risk metrics,
            subscribe with configurable position limits, and pause or adjust any agent at any time.
          </p>
          <p className="text-xs text-white/35">
            AI agent subscriptions and live execution are not yet available. This describes the marketplace as it is
            being designed.
          </p>
        </div>
      </Section>
    </>
  );
}
