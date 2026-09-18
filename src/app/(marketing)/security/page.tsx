import type { Metadata } from "next";
import { ShieldCheck, KeyRound, Eye, ServerCog } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { FeatureCard } from "@/components/marketing/FeatureCard";

export const metadata: Metadata = { title: "Security" };

const pillars = [
  { icon: KeyRound, title: "Multi-factor by default", description: "Sign-in and sensitive actions — like adding a withdrawal address — are designed to require MFA confirmation." },
  { icon: Eye, title: "Full visibility", description: "Login history, active sessions, and device management are planned to live in one security center, always visible." },
  { icon: ServerCog, title: "Graceful degradation", description: "If one service is degraded, the rest of the platform is designed to keep working — and to tell you exactly what's affected." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Security as a visible product, not a policy page"
        description="SynxEx is designing a centralized security center so you can see and control every sensitive aspect of your account from one place."
        primaryCta={{ label: "Get Started", href: "/login" }}
        secondaryCta={{ label: "Proof of Reserves", href: "/proof-of-reserves" }}
      />

      <Section>
        <SectionHeading eyebrow="Approach" title="What the security center is designed to cover" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white">No claims we can&apos;t back up</h2>
          <p className="text-white/55">
            We don&apos;t list licenses, certifications, or audits we don&apos;t have. As real security
            infrastructure and third-party reviews are completed, they&apos;ll be disclosed here with dates and
            sources — not before.
          </p>
        </div>
      </Section>
    </>
  );
}
