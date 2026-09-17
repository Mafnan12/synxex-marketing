import type { Metadata } from "next";
import { WalletMinimal, Network, TagIcon, Fuel } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "Web3 Wallet" };

const capabilities = [
  { icon: Network, title: "30+ networks, one interface", description: "EVM chains, the Bitcoin family, and select non-EVM and memo-based networks — managed through one wallet screen." },
  { icon: TagIcon, title: "Memo/tag protection", description: "For assets like XRP, Stellar, and TON, a mandatory confirmation step prevents deposits that would otherwise be lost." },
  { icon: Fuel, title: "Gas tier selection", description: "Choose between economy, standard, and fast network fees, with the estimated arrival time shown for each." },
];

export default function WalletPage() {
  return (
    <>
      <PageHero
        eyebrow="Web3 Wallet"
        title="One wallet, dozens of networks"
        description="Rather than a separate wallet app per chain, SynxEx is building a single multi-chain wallet interface that sits on the same account as everything else."
        primaryCta={{ label: "Get Started", href: "/login" }}
        secondaryCta={{ label: "Explore SynxEx", href: "/#products" }}
      />

      <Section>
        <SectionHeading eyebrow="Wallet design" title="Built around fund safety" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {capabilities.map((c) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
            <WalletMinimal className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Deposit and withdrawal, step by step</h2>
          <p className="text-white/55">
            Select an asset, select a network, confirm any memo or tag requirement, review the address, and track
            status from pending through confirmation to completion.
          </p>
          <p className="text-xs text-white/35">
            On-chain deposits and withdrawals are not yet connected. No addresses shown on this site should be used
            to send funds.
          </p>
        </div>
      </Section>
    </>
  );
}
