"use client";

import Image from "next/image";
import { useState } from "react";

const workflow = [
  {
    stepLabel: "01",
    title: "Connect",
    description:
      "Open the wallet experience and review its available controls.",
  },
  {
    stepLabel: "02",
    title: "Choose Network",
    description:
      "Choose a network from the proposed network list.",
  },
  {
    stepLabel: "03",
    title: "View Assets",
    description:
      "View digital assets associated with the selected network.",
  },
  {
    stepLabel: "04",
    title: "Review",
    description:
      "Review a connection or transaction before taking action.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M3 8H12M8.5 4.5L12 8L8.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Web3WalletPage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const selectedWorkflow = workflow[activeWorkflow];

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F4F4F5] selection:bg-[#FF5A1F] selection:text-[#F4F4F5] font-sans antialiased">
      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden px-5 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <Image
          src="/wallet-hero.jpeg"
          alt="SynxEx card on a dark studio background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-[#09090B]/90" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start text-left">
          <div className="flex w-full max-w-5xl flex-col items-start gap-7">
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#F4F4F5] sm:text-6xl lg:text-[64px]">
              One wallet.<br />
              <span className="text-[#ffb38f]">Multiple networks.</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              A proposed interface for viewing digital assets across 31 network options and reviewing Web3 application connections.
            </p>
            <div className="flex flex-col items-start justify-start gap-3 sm:flex-row">
              <a href="#assets" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#5A1720] px-6 py-3 text-sm font-medium text-[#F4F4F5] shadow-md transition-opacity hover:opacity-90">
                Explore wallet <ArrowIcon />
              </a>
              <a href="#workflow" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#F4F4F5] transition-colors hover:border-white/30 hover:bg-white/[0.08]">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            {
              title: "One Interface",
              text: "A proposed view of digital assets across networks.",
            },
            {
              title: "31 Network Options",
              text: "Explore how network selection could work in one wallet. Connections are not active.",
            },
            {
              title: "Web3 Connectivity",
              text: "Review the application connections a future wallet could support.",
            },
          ].map((item) => (
            <article key={item.title} className="max-w-md">
              <h2 className="text-xl font-semibold tracking-tight text-[#F4F4F5] sm:text-2xl">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ASSET MANAGEMENT */}
      <section id="assets" className="px-5 py-12 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                All your digital assets.
                <br />
                <span className="text-[#FF5A1F]">One view.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                A proposed wallet interface designed to make asset
                organization and network visibility easier to understand.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#181110]/95 shadow-2xl">
              <Image
                src="/img.png"
                alt="SynxEx wallet dashboard"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WEB3 CONNECTIVITY */}
      <section className="bg-[#09090B] px-5 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
              Connect to the <span className="text-[#FF5A1F]">Web3 ecosystem.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              A proposed wallet experience for choosing networks, viewing assets, and reviewing application access.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {[
              { title: "Wallet", desc: "Account and wallet interface" },
              { title: "Networks", desc: "Select a network" },
              { title: "Web3 apps", desc: "Review application connections" },
              { title: "Permissions", desc: "Review requested access" },
            ].map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-semibold tracking-tight text-[#F4F4F5] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
            Network connections and transactions are not active
          </p>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="px-5 py-12 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A simpler path
                <br />
                <span className="text-[#FF5A1F]">into Web3.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                A proposed wallet flow: choose a network, view assets, then review an application connection or transaction.
              </p>

            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#181110]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div>
                {workflow.map((step, index) => (
                  <button
                    type="button"
                    key={step.title}
                    onClick={() => setActiveWorkflow(index)}
                    aria-pressed={activeWorkflow === index}
                    className={`grid w-full grid-cols-[80px_1fr_auto] items-center gap-4 px-6 py-5 text-left transition-all md:grid-cols-[90px_1fr_90px] ${
                      activeWorkflow === index
                        ? "bg-[#FF5A1F]/[0.08] shadow-[inset_3px_0_0_0_#FF5A1F]"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`text-[9px] font-semibold tracking-[0.18em] ${
                        activeWorkflow === index
                          ? "text-[#FF5A1F]"
                          : "text-zinc-500"
                      }`}
                    >
                      {step.stepLabel}
                    </span>

                    <span
                      className={`text-sm uppercase tracking-[0.08em] font-medium ${
                        activeWorkflow === index
                          ? "text-[#F4F4F5]"
                          : "text-zinc-400"
                      }`}
                    >
                      {step.title}
                    </span>

                    <span className={`hidden text-[9px] uppercase tracking-[0.12em] md:block ${activeWorkflow === index ? "text-[#FF5A1F] font-semibold" : "text-zinc-500"}`}>
                      {activeWorkflow === index ? "Selected" : "Explore"}
                    </span>
                  </button>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#5A1720]/20 to-transparent p-6 md:p-8">
                <h3 className="mt-2 text-2xl font-medium text-[#F4F4F5]">
                  {selectedWorkflow.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-300">
                  {selectedWorkflow.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section
        id="security"
        className="bg-[#09090B]/80 px-5 py-12 backdrop-blur-xl sm:py-16 md:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built with security
                <br />
                <span className="text-[#FF5A1F]">at the core.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
                Account protection and clear permission review are design priorities. Implementation details have not been announced.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  ["Account access", "Account protection requirements remain to be defined."],
                  ["Connection review", "Review the access requested by a Web3 application."],
                  ["Transaction review", "Understand a transaction before confirming it."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.01] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-[#F4F4F5]">{title}</h4>
                      <p className="mt-1 text-xs text-zinc-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#181110]/90 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF5A1F]/10 blur-[80px]" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#FF5A1F] font-semibold">
                Security Framework
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#F4F4F5]">
                Wallet security
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                This approach prioritizes clear account access, permission review, and transaction review. No live wallet security features are represented here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WALLET SCOPE */}
      <section id="wallet-scope" className="px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1200px] rounded-3xl border border-white/20 bg-[#181110] p-6 sm:p-9 lg:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Wallet scope
              </h2>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-10">
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                Network selection, asset viewing, and Web3 connectivity are under consideration. Availability and active network support have not been announced.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
