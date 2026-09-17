import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Mail, Send } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the SynxEx team"
        description="Questions about the platform, partnerships, or press — send a message and we'll get back to you."
      />

      <Section>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Email</p>
                <p className="mt-1 text-sm text-white/50">A direct inbox will be published here once support tooling is connected.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff6a2b]/15 to-[#5c1023]/25 text-[#ff8a52]">
                <Send className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Telegram</p>
                <p className="mt-1 text-sm text-white/50">Our Telegram channel link will be added here.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
