"use client";

import Image from "next/image";
import { useState } from "react";
import MultiChainArchitecture from "@/components/web3-wallet/MultiChainArchitecture";

const ecosystemNodes = [
  {
    id: "networks",
    label: "NETWORKS",
    title: "Multiple networks",
    text: "A concept for choosing from 31 blockchain networks in one wallet interface. Network connections are not active.",
  },
  {
    id: "assets",
    label: "ASSETS",
    title: "One asset view",
    text: "A concept for viewing digital assets by network in one place.",
  },
  {
    id: "web3",
    label: "WEB3",
    title: "Web3 connectivity",
    text: "A concept for connecting a wallet to Web3 applications.",
  },
  {
    id: "security",
    label: "SECURITY",
    title: "Control by design",
    text: "Account access, connection permissions, and clear transaction review are key design considerations.",
  },
  {
    id: "future",
    label: "FUTURE",
    title: "Built for what comes next",
    text: "This wallet is a design concept. Live blockchain features have not been announced.",
  },
];


const workflow = [
  {
    stepLabel: "01",
    title: "Connect",
    description:
      "Open the wallet concept and review its available controls.",
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

  const selectedNode = ecosystemNodes[0];

  const selectedWorkflow = workflow[activeWorkflow];

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F4F4F5] selection:bg-[#FF5A1F] selection:text-[#F4F4F5] font-sans antialiased">
      {/* HERO */}
      <section id="top" className="relative isolate px-5 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="synxex-warm-hero relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-3xl border border-white/[0.12] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
              <div className="flex w-full flex-col items-center gap-7">
                <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#F4F4F5] sm:text-6xl lg:text-[64px]">
                  One wallet.<br />
                  <span className="text-[#ffb38f]">Multiple networks.</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                  A proposed interface for viewing digital assets across 31 network options and reviewing Web3 application connections.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#architecture" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#5A1720] px-6 py-3 text-sm font-medium text-[#F4F4F5] shadow-md transition-opacity hover:opacity-90">
                    Explore wallet concept <ArrowIcon />
                  </a>
                  <a href="#workflow" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#F4F4F5] transition-colors hover:border-white/30 hover:bg-white/[0.08]">
                    See how it works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {[
            {
              title: "One Interface",
              text: "A proposed view of digital assets across networks.",
              tags: ["Assets", "Networks", "Overview"],
            },
            {
              title: "31 Network Options",
              text: "A design concept; network connections are not active.",
              tags: ["Network selection", "Multi-chain", "Concept"],
            },
            {
              title: "Web3 Connectivity",
              text: "A proposed way to review application connections.",
              tags: ["Web3 apps", "Permissions", "Review"],
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="flex min-h-[320px] flex-col rounded-2xl border border-white/15 bg-[#141416] p-6 transition-colors hover:border-[#FF5A1F]/60 sm:p-7 lg:p-8"
            >
              <div className="flex items-center justify-between">
                <svg className="h-6 w-6 text-[#F4F4F5]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {index === 0 ? (
                    <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
                  ) : index === 1 ? (
                    <path d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  ) : (
                    <path d="M9.6 14.4a1 1 0 0 1 0-1.4l3.4-3.4a3 3 0 0 1 4.2 4.2l-1.8 1.8a3 3 0 0 1-4.2 0 1 1 0 0 1 1.4-1.4 1 1 0 0 0 1.4 0l1.8-1.8a1 1 0 0 0-1.4-1.4L11 14.4a1 1 0 0 1-1.4 0Zm4.8-4.8a1 1 0 0 1 0 1.4L11 14.4a3 3 0 0 1-4.2-4.2l1.8-1.8a3 3 0 0 1 4.2 0 1 1 0 0 1-1.4 1.4 1 1 0 0 0-1.4 0l-1.8 1.8a1 1 0 0 0 1.4 1.4l3.4-3.4a1 1 0 0 1 1.4 0Z" />
                  )}
                </svg>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#FF5A1F]">Concept</span>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold tracking-tight text-[#F4F4F5] sm:text-2xl">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-zinc-400">{item.text}</p>
              </div>

              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="px-5 py-20 sm:py-24 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 items-center">
          <div>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              One wallet.
              <br />
              <span className="text-[#FF5A1F]">A connected ecosystem.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
              A wallet concept for choosing a network, viewing digital assets, and reviewing Web3 application connections.
            </p>

            <div className="mt-10 rounded-r-xl border-l-2 border-[#FF5A1F] bg-gradient-to-r from-[#5A1720]/20 to-transparent p-6 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#FF5A1F] font-semibold">
                Selected Layer
              </p>

              <h3 className="mt-2 text-xl font-medium text-[#F4F4F5]">
                {selectedNode.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {selectedNode.text}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#181110] shadow-2xl">
            <video autoPlay loop muted playsInline className="block aspect-video h-auto w-full object-cover">
              <source src="/Blue%20Modern%20Business%20Video%20(2).mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* NETWORKS / MULTI-CHAIN CONCEPT */}
      <MultiChainArchitecture />

      {/* ASSET MANAGEMENT */}
      <section className="px-5 py-20 sm:py-24 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                All your digital assets.
                <br />
                <span className="text-[#FF5A1F]">One view.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
                A conceptual wallet interface designed to make asset
                organization and network visibility easier to understand.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#181110]/95 shadow-2xl">
              <Image
                src="/img.png"
                alt="SynxEx wallet dashboard concept"
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
      <section className="bg-[#09090B] px-5 py-20 sm:px-6 sm:py-24 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
              Connect to the <span className="text-[#FF5A1F]">Web3 ecosystem.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              A wallet concept for choosing networks, viewing assets, and reviewing application access.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {[
              { title: "Wallet", desc: "Account and wallet interface", tags: ["Account", "Overview"] },
              { title: "Networks", desc: "Select a network", tags: ["Network", "Selection"] },
              { title: "Web3 apps", desc: "Review application connections", tags: ["Applications", "Connections"] },
              { title: "Permissions", desc: "Review requested access", tags: ["Access", "Review"] },
            ].map((item, index) => (
              <article
                key={item.title}
                className="flex min-h-[340px] flex-col rounded-2xl border border-white/70 bg-[#181110] p-6 transition-colors hover:border-[#FF5A1F] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <svg className="h-5 w-5 text-[#F4F4F5]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    {index === 0 ? (
                      <path d="M3 4h14v12H3zM5 7h10v1.5H5zm0 4h5v1.5H5z" />
                    ) : index === 1 ? (
                      <path d="M10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                    ) : index === 2 ? (
                      <path d="M7.4 12.6a1.2 1.2 0 0 1 0-1.7l3.5-3.5a3 3 0 0 1 4.2 4.2l-1.7 1.7a3 3 0 0 1-4.2 0l1.2-1.2a1.3 1.3 0 0 0 1.8 0l1.7-1.7a1.3 1.3 0 0 0-1.8-1.8l-3.5 3.5a1.2 1.2 0 0 1-1.7 0Zm5.2-5.2a1.2 1.2 0 0 1 0 1.7l-3.5 3.5a3 3 0 0 1-4.2-4.2l1.7-1.7a3 3 0 0 1 4.2 0l-1.2 1.2a1.3 1.3 0 0 0-1.8 0L6.1 9.6a1.3 1.3 0 0 0 1.8 1.8l3.5-3.5a1.2 1.2 0 0 1 1.7 0Z" />
                    ) : (
                      <path d="M10 2 3.5 4.5v4.8c0 4 2.7 6.8 6.5 8.7 3.8-1.9 6.5-4.7 6.5-8.7V4.5L10 2Zm0 2 4.5 1.7v3.6c0 2.9-1.8 5.1-4.5 6.6-2.7-1.5-4.5-3.7-4.5-6.6V5.7L10 4Z" />
                    )}
                  </svg>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">Concept</span>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-semibold tracking-tight text-[#F4F4F5] sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.desc}</p>
                </div>

                <div className="mt-auto border-t border-white/60 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/65 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
            Concept only · Network connections and transactions are not active
          </p>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="px-5 py-20 sm:py-24 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A simpler path
                <br />
                <span className="text-[#FF5A1F]">into Web3.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
                A proposed wallet flow: choose a network, view assets, then review an application connection or transaction.
              </p>

              <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#181110]/90 p-6 backdrop-blur-xl">
                <div className="mb-3 flex justify-between text-[9px] uppercase tracking-[0.15em] text-zinc-400 font-medium">
                  <span>Current Step</span>
                  <span className="text-[#FF5A1F]">
                    {selectedWorkflow.title}
                  </span>
                </div>

                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FF2D20] transition-all duration-500 shadow-[0_0_10px_#FF5A1F]"
                    style={{
                      width: `${((activeWorkflow + 1) / workflow.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
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
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#FF5A1F] font-semibold">
                  {selectedWorkflow.title} Overview
                </div>

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
        className="bg-[#09090B]/80 px-5 py-20 backdrop-blur-xl sm:py-24 md:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built with security
                <br />
                <span className="text-[#FF5A1F]">at the core.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
                Account protection and clear permission review are part of the wallet design concept. Implementation details have not been announced.
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
                Wallet security concept
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                The concept prioritizes clear account access, permission review, and transaction review. No live wallet security features are represented here.
              </p>
              <div className="mt-8 flex items-center justify-between pt-6 text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                <span>Design concept</span>
                <span className="text-[#FF5A1F]">Not active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WALLET CONCEPT SCOPE */}
      <section id="wallet-scope" className="px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1200px] rounded-3xl border border-white/20 bg-[#181110] p-6 sm:p-9 lg:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div>
              <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF5A1F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" /> Wallet concept
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Wallet concept scope
              </h2>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-10">
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                Network selection, asset viewing, and Web3 connectivity are design concepts. Availability and active network support have not been announced.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#FF5A1F]/30 bg-[#FF5A1F]/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF5A1F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" /> Concept only
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030303] px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-xs font-bold text-[#FF5A1F]">
              S
            </div>
            <span className="text-lg font-semibold tracking-[-0.04em] text-[#F4F4F5]">
              SynxEx
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Web3 Wallet Concept
            </span>
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-600 text-center md:text-right">
            © 2026 SynxEx. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
