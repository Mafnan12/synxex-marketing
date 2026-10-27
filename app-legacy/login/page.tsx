import type { Metadata } from "next";
import Link from "next/link";
import { MarketingRoute } from "../../components/marketing-route";

export const metadata: Metadata = { title: "Account access" };

export default function AccountAccessPage() {
  return (
    <MarketingRoute>
      <main className="flex min-h-[70svh] items-center justify-center px-5 py-20">
        <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] px-7 py-12 text-center shadow-2xl sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff8a52]">SynxEx account access</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Account services are not available yet.</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            This website is an informational overview. For questions about SynxEx, contact the team.
          </p>
          <Link href="/contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#ff6a2b] via-[#e2321f] to-[#5c1023] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8a52]">
            Contact SynxEx
          </Link>
        </section>
      </main>
    </MarketingRoute>
  );
}
