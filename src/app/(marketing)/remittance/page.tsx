import type { Metadata } from "next";
import { Send, Route, Receipt, ShieldHalf } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "Remittance" };

const principles = [
  { icon: Route, title: "Provider routing", description: "Transfers are designed to route through the best-suited provider for each corridor, shown transparently." },
  { icon: Receipt, title: "Itemized fees", description: "Network fee, platform fee, FX spread, and provider fee — broken out, not bundled into one number." },
  { icon: ShieldHalf, title: "FX-hedged delivery", description: "For crypto-to-fiat transfers, the plan is to lock a conversion rate for the settlement window so volatility doesn't erode what arrives." },
];

export default function RemittancePage() {
  return (
    <>
      <PageHero
        eyebrow="Remittance"
        title="Global transfers, priced honestly"
        description="SynxEx is designing a remittance flow that supports crypto-to-fiat, fiat-to-fiat, and fiat-to-crypto transfers — with every fee shown before you send."
        primaryCta={{ label: "Get Started", href: "/login" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
      />

      <Section>
        <SectionHeading eyebrow="Principles" title="What we're designing toward" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {principles.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
            <Send className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Sender to recipient, in clear steps</h2>
          <p className="text-white/55">
            Currency and amount, destination, provider routing, FX and fees, confirmation, settlement, and delivery
            to the recipient — each step visible, not hidden inside a single &ldquo;send&rdquo; button.
          </p>
          <p className="text-xs text-white/35">
            Live remittance corridors and settlement are not yet available. Pricing shown in the future product will
            reflect real provider quotes, never estimates presented as final.
          </p>
        </div>
      </Section>
    </>
  );
}
