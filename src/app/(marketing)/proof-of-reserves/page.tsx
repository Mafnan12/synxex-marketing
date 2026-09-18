import type { Metadata } from "next";
import { ScrollText } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";

export const metadata: Metadata = { title: "Proof of Reserves" };

export default function ProofOfReservesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof of Reserves"
        title="Verification data, only when it's real"
        description="SynxEx will publish reserve, liability, and verification data here once real audit and on-chain verification infrastructure is connected — not before, and never estimated."
      />

      <Section>
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
            <ScrollText className="h-6 w-6" />
          </span>
          <h2 className="mt-4 text-lg font-semibold text-white">No reserve data to show yet</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            This page is reserved for verified reserve totals, liabilities, reserve ratio, allocation, and
            verification methodology once a real auditor or on-chain verification integration is in place. Figures
            are never fabricated or estimated.
          </p>
        </div>
      </Section>
    </>
  );
}
