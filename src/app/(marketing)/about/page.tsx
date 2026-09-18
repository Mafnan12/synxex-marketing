import type { Metadata } from "next";
import { Target, Layers, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "About" };

const values = [
  { icon: Target, title: "One account, always", description: "Every decision starts from a single identity, balance, and security posture — never a bolted-on product." },
  { icon: Layers, title: "Architecture before polish", description: "We build reusable infrastructure first, real workflows second, and visual polish third — in that order." },
  { icon: ShieldCheck, title: "No fabricated claims", description: "We don't invent licenses, reserves, performance figures, or user counts. If we don't have it yet, we say so." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SynxEx"
        title="Building one platform for every market"
        description="SynxEx exists to bring crypto, forex, stocks, banking, cards, remittance, AI agents, and Web3 into a single financial account — instead of asking you to manage nine."
        primaryCta={{ label: "Get Started", href: "/login" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <Section>
        <SectionHeading eyebrow="What we believe" title="How we're building SynxEx" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {values.map((v) => (
            <FeatureCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Where we are today</h2>
          <p className="mt-4 text-white/55">
            SynxEx is in active development. This site introduces the platform and its planned products. Trading,
            banking, wallet, card, remittance, and AI agent functionality are being built next — the interface
            you&apos;re looking at is already architected to connect to that infrastructure as it ships.
          </p>
        </div>
      </Section>
    </>
  );
}
