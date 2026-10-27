import type { Metadata } from "next";
import { Landmark, Coins, ArrowLeftRight, CreditCard, Smartphone, Lock } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "Banking & Cards" };

const banking = [
  { icon: Landmark, title: "Multi-currency accounts", description: "Hold major fiat currencies side by side within your single SynxEx balance." },
  { icon: Coins, title: "Transparent FX conversion", description: "See the rate, fee, and total before you convert — every time, no hidden spread." },
  { icon: ArrowLeftRight, title: "Simple transfers", description: "Move funds in and out, and between currencies, without juggling separate accounts." },
];

const cards = [
  { icon: CreditCard, title: "Virtual cards", description: "Issued instantly for online spending, funded directly from your unified balance." },
  { icon: Smartphone, title: "Physical cards", description: "A physical card for everyday spending, with the same balance and controls as your virtual card." },
  { icon: Lock, title: "Spending controls", description: "Freeze a card, set limits, and manage merchant controls in one place." },
];

export default function BankingCardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Banking & Cards"
        title="Banking and cards, on the same balance as everything else"
        description="No separate bank account to fund. SynxEx is designing multi-currency banking and card issuance directly on top of your unified account."
        primaryCta={{ label: "Get Started", href: "https://synxex-app.vercel.app/pages/register.html" }}
        secondaryCta={{ label: "Explore SynxEx", href: "/#products" }}
      />

      <Section>
        <SectionHeading eyebrow="Banking" title="Multi-currency, by design" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {banking.map((b) => (
            <FeatureCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading eyebrow="Cards" title="Virtual and physical, same account" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/35">
          Banking rails and card issuance require licensed partner integrations that are not yet connected. No real
          accounts, IBANs, or cards can be issued today.
        </p>
      </Section>
    </>
  );
}
