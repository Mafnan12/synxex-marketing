"use client";

import { useState } from "react";
import MultiChainArchitecture from "@/components/web3-wallet/MultiChainArchitecture";

const COLORS = {
  orange: "#FF5A1F",
  red: "#FF2D20",
  wine: "#6E1838",
  deepWine: "#3A0D20",
  black: "#050505",
  smoke: "#151515",
  softSmoke: "#202020",
  white: "#FFFFFF",
  muted: "#A1A1AA",
};

const ecosystemNodes = [
  {
    id: "networks",
    label: "NETWORKS",
    title: "Multiple networks",
    text: "A future architecture designed to bring different blockchain networks into one connected wallet experience.",
  },
  {
    id: "assets",
    label: "ASSETS",
    title: "One asset view",
    text: "A simpler way to conceptually organize digital assets from connected networks in one interface.",
  },
  {
    id: "web3",
    label: "WEB3",
    title: "Web3 connectivity",
    text: "A future connection layer for interacting with decentralized applications and Web3 services.",
  },
  {
    id: "security",
    label: "SECURITY",
    title: "Control by design",
    text: "Security, permissions and account protection remain central to the wallet experience.",
  },
  {
    id: "future",
    label: "FUTURE",
    title: "Built for what comes next",
    text: "The architecture is designed to support future blockchain functionality as the platform evolves.",
  },
];


const workflow = [
  {
    stepLabel: "STEP 1",
    title: "Connect",
    description:
      "A future wallet connection layer brings the experience together.",
  },
  {
    stepLabel: "STEP 2",
    title: "Choose Network",
    description:
      "Select the network you want to explore within the conceptual wallet.",
  },
  {
    stepLabel: "STEP 3",
    title: "View Assets",
    description:
      "See connected digital assets through one simplified interface.",
  },
  {
    stepLabel: "STEP 4",
    title: "Manage",
    description:
      "Organize and manage assets through a future wallet experience.",
  },
  {
    stepLabel: "STEP 5",
    title: "Interact",
    description:
      "Connect with future Web3 applications and blockchain functionality.",
  },
  {
    stepLabel: "STEP 6",
    title: "Monitor",
    description:
      "Keep visibility over connected networks, assets and activity.",
  },
];

const walletTabs = ["Overview", "Networks", "Assets", "Activity"];

const roadmap = [
  ["Phase I", "Wallet Foundation", "EXPLORING"],
  ["Phase II", "Multi-Chain Architecture", "DESIGNING"],
  ["Phase III", "Asset Management", "PLANNED"],
  ["Phase IV", "Web3 Connectivity", "FUTURE"],
  ["Phase V", "Blockchain Interactions", "COMING SOON"],
  ["Phase VI", "Connected Ecosystem", "FUTURE"],
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

function Eyebrow({
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
      <span className="text-zinc-400">{children}</span>
    </div>
  );
}

export default function Web3WalletPage() {
  const [activeNode, setActiveNode] = useState("networks");
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [activeTab, setActiveTab] = useState("Overview");
  const [mobileMenu, setMobileMenu] = useState(false);

  const selectedNode =
    ecosystemNodes.find((node) => node.id === activeNode) ??
    ecosystemNodes[0];

  const selectedWorkflow = workflow[activeWorkflow];

  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white selection:bg-[#ff6a2b] selection:text-white font-sans antialiased">
      {/* Atmospheric background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-300px] h-[650px] w-[900px] -translate-x-1/2 opacity-25 blur-[140px] animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(255,90,31,0.32) 0%, rgba(110,24,56,0.2) 40%, transparent 70%)",
            animationDuration: "8s",
          }}
        />

        <div
          className="absolute right-[-250px] top-[35%] h-[500px] w-[500px] opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,45,32,0.35), transparent 70%)",
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#050505]/85 backdrop-blur-2xl transition-all">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-3 group"
            aria-label="synxex home"
          >
            <div className="flex h-9 w-9 items-center justify-center border border-[#ff6a2b]/30 bg-[#ff6a2b]/10 text-sm font-bold tracking-tighter text-[#ff6a2b] shadow-[0_0_20px_rgba(255,106,43,0.15)] transition-transform group-hover:scale-105">
              S
            </div>
            <span className="text-xl font-semibold tracking-[-0.04em] text-white">
              synxex
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-zinc-400 sm:block">
              Web3 Wallet
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ["Architecture", "#architecture"],
              ["Networks", "#networks"],
              ["Workflow", "#workflow"],
              ["Security", "#security"],
              ["Roadmap", "#roadmap"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[11px] uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:text-[#ff6a2b]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#future"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-white/15 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-all hover:border-[#ff6a2b]/60 hover:bg-[#ff6a2b]/10 shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Coming Soon
                <ArrowIcon />
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] text-zinc-300 hover:text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-5 bg-white transition-transform ${mobileMenu ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-white transition-opacity ${mobileMenu ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-white transition-transform ${mobileMenu ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/[0.08] bg-[#080808]/95 backdrop-blur-2xl px-5 py-6 lg:hidden shadow-2xl">
            <div className="flex flex-col gap-5">
              {[
                ["Architecture", "#architecture"],
                ["Networks", "#networks"],
                ["Workflow", "#workflow"],
                ["Security", "#security"],
                ["Roadmap", "#roadmap"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="text-xs uppercase tracking-[0.15em] text-zinc-300 hover:text-[#ff6a2b]"
                >
                  {label}
                </a>
              ))}
              <a
                href="#future"
                onClick={() => setMobileMenu(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 border border-[#FF5A1F]/40 bg-[#FF5A1F]/10 px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-[#FF5A1F]"
              >
                Coming Soon <ArrowIcon />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative px-5 pb-28 pt-36 md:px-8 lg:px-12 lg:pb-40 lg:pt-48">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a2b] animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#ff6a2b] font-semibold">
                Web3 Wallet Architecture
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Your assets.
              <br />
              <span className="bg-gradient-to-r from-white via-white to-[#ff6a2b] bg-clip-text text-transparent">
                One wallet.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
              synxex is exploring a future wallet experience designed to bring
              digital assets, multiple networks, and Web3 connectivity into
              one simple interface.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 border border-[#5c1023]/60 bg-[#5c1023]/15 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#ffb38f] backdrop-blur-sm shadow-inner">
                <span className="h-1 w-1 rounded-full bg-[#ff6a2b]" />
                Future Technology · Coming Soon
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#architecture"
                className="group flex min-w-[190px] items-center justify-center gap-3 bg-gradient-to-r from-[#ff6a2b] to-[#e2321f] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(255,106,43,0.3)] transition-all hover:opacity-90"
              >
                Explore Wallet
                <ArrowIcon />
              </a>

              <a
                href="#workflow"
                className="flex min-w-[190px] items-center justify-center border border-white/15 bg-white/[0.01] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* HERO SYSTEM VISUAL */}
          <div className="relative mx-auto mt-20 h-[380px] max-w-5xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-xl md:h-[480px] shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="absolute left-6 top-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-[#ff6a2b]/60" />
              Wallet Architecture / Concept
            </div>

            <div className="absolute right-6 top-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a2b] animate-pulse" />
              Future System
            </div>

            {/* SVG CONNECTIONS */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 480"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M180 130 L500 240"
                stroke="#5c1023"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M820 130 L500 240"
                stroke="#5c1023"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M180 350 L500 240"
                stroke="#5c1023"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M820 350 L500 240"
                stroke="#6E1838"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              <circle cx="500" cy="240" r="110" fill="none" stroke="#FF5A1F" strokeOpacity="0.18" strokeWidth="1" />
              <circle cx="500" cy="240" r="150" fill="none" stroke="#6E1838" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 8" />
            </svg>

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-[#FF5A1F]/50 bg-[#0D0D0D]/90 shadow-[0_0_60px_rgba(255,90,31,0.15)] backdrop-blur-md md:h-40 md:w-40">
              <div className="text-center">
                <div className="text-xl font-bold tracking-[-0.04em] text-white">
                  synxex
                </div>
                <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#FF5A1F]">
                  Unified Wallet
                </div>
              </div>
            </div>

            {[
              ["NETWORKS", "left-[8%] top-[20%]"],
              ["ASSETS", "right-[8%] top-[20%]"],
              ["WEB3", "left-[8%] bottom-[20%]"],
              ["SECURITY", "right-[8%] bottom-[20%]"],
            ].map(([label, position]) => (
              <div
                key={label}
                className={`absolute ${position} rounded-lg border border-white/10 bg-[#0B0B0B]/90 px-4 py-3 text-[9px] uppercase tracking-[0.18em] text-zinc-200 backdrop-blur-md shadow-lg transition-transform hover:scale-105`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-white/[0.08] bg-[#070707]/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
          {[
            ["One Interface", "A simplified view for connected digital assets."],
            ["Multiple Networks", "A future architecture designed for network flexibility."],
            ["Web3 Connectivity", "A future bridge toward decentralized applications."],
          ].map(([title, text], index) => (
            <div
              key={title}
              className={`px-6 py-8 md:px-10 lg:px-14 transition-colors hover:bg-white/[0.02] ${
                index !== 2 ? "border-b md:border-b-0 md:border-r" : ""
              } border-white/[0.08]`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                <span className="text-[9px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                  Wallet Pillar
                </span>
              </div>
              <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-xs text-xs leading-6 text-zinc-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 items-center">
          <div>
            <Eyebrow>Wallet Architecture</Eyebrow>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              One wallet.
              <br />
              <span className="text-[#FF5A1F]">A connected ecosystem.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
              The wallet concept is built around a central experience that
              connects networks, assets, Web3 applications and future services.
            </p>

            <div className="mt-10 rounded-r-xl border-l-2 border-[#FF5A1F] bg-gradient-to-r from-[#6E1838]/20 to-transparent p-6 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#FF5A1F] font-semibold">
                Selected Layer
              </p>

              <h3 className="mt-2 text-xl font-medium text-white">
                {selectedNode.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {selectedNode.text}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                Interactive System Map
              </span>
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.15em] text-[#FF5A1F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F] animate-ping" />
                Live Inspect
              </span>
            </div>

            <div className="grid sm:grid-cols-2">
              {ecosystemNodes.map((node, index) => (
                <button
                  type="button"
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  aria-pressed={activeNode === node.id}
                  className={`group min-h-[160px] border-b border-white/[0.08] p-6 text-left transition-all ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  } ${
                    activeNode === node.id
                      ? "bg-[#6E1838]/20 shadow-[inset_0_1px_0_0_rgba(255,90,31,0.3)]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#FF5A1F]">
                      0{index + 1}
                    </span>

                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        activeNode === node.id
                          ? "bg-[#FF5A1F] shadow-[0_0_10px_#FF5A1F]"
                          : "bg-zinc-700 group-hover:bg-zinc-500"
                      }`}
                    />
                  </div>

                  <div className="mt-10 text-xs font-medium uppercase tracking-[0.16em] text-white">
                    {node.label}
                  </div>

                  <div className="mt-2 text-[11px] text-zinc-400 transition group-hover:text-zinc-200 flex items-center gap-1">
                    Explore layer <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NETWORKS / MULTI-CHAIN CONCEPT */}
      <MultiChainArchitecture />

      {/* ASSET MANAGEMENT */}
      <section className="px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow>Asset Management</Eyebrow>

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                All your digital assets.
                <br />
                <span className="text-[#FF5A1F]">One view.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
                A conceptual wallet interface designed to make asset
                organization and network visibility easier to understand.
              </p>
            </div>

            {/* Dashboard */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/95 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-white/[0.02]">
                <div className="text-[10px] uppercase tracking-[0.18em] font-medium text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                  synxex / Wallet Dashboard
                </div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                  Conceptual UI v1.0
                </div>
              </div>

              <div className="grid min-h-[430px] md:grid-cols-[180px_1fr]">
                <aside className="border-b border-white/[0.08] p-4 md:border-b-0 md:border-r bg-black/40">
                  <div className="mb-6 px-3 text-[8px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                    Navigation
                  </div>

                  <div className="space-y-1.5">
                    {walletTabs.map((tab) => (
                      <button
                        type="button"
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        aria-pressed={activeTab === tab}
                        className={`block w-full rounded-lg border-l-2 px-3 py-2.5 text-left text-[10px] uppercase tracking-[0.1em] transition-all ${
                          activeTab === tab
                            ? "border-[#FF5A1F] bg-[#FF5A1F]/10 text-white font-medium shadow-sm"
                            : "border-transparent text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </aside>

                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                          Active View: {activeTab}
                        </div>
                        <div className="mt-2 text-2xl font-semibold text-white">
                          Wallet Overview
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02]">
                        <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3">
                      {[
                        { symbol: "BTC", name: "Bitcoin Treasury", protocol: "Layer 1 Native" },
                        { symbol: "ETH", name: "Ethereum Staking", protocol: "Smart Contract" },
                        { symbol: "SOL", name: "Solana Liquid Pool", protocol: "High-Throughput" },
                      ].map((asset) => (
                        <div
                          key={asset.symbol}
                          className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.01] px-5 py-4 transition-colors hover:bg-white/[0.03]"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-xs font-bold text-[#FF5A1F]">
                              {asset.symbol}
                            </div>

                            <div>
                              <div className="text-xs font-medium text-white">{asset.name}</div>
                              <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                                {asset.protocol}
                              </div>
                            </div>
                          </div>

                          <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-zinc-400">
                            Connected
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl border border-white/[0.06] bg-black/30 p-4 text-center text-[9px] uppercase tracking-[0.16em] text-zinc-400">
                    No live balances · No live transactions · Concept design only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEB3 CONNECTIVITY */}
      <section className="border-y border-white/[0.08] bg-[#070707]/80 backdrop-blur-xl px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow>Web3 Connectivity</Eyebrow>

          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
              Connect to the
              <br />
              <span className="text-[#FF5A1F]">Web3 ecosystem.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">
              The future wallet experience is designed to create a simpler
              connection between users, digital assets, networks and
              decentralized applications.
            </p>
          </div>

          <div className="mt-20 grid border-y border-white/[0.08] bg-[#0A0A0A]/60 rounded-2xl overflow-hidden md:grid-cols-4 shadow-xl">
            {[
              { title: "synxex Wallet", desc: "Native account layer" },
              { title: "Web3 Connectivity", desc: "Protocol-level bridges" },
              { title: "Decentralized Apps", desc: "Permissioned session keys" },
              { title: "Future Interactions", desc: "Autonomous agent execution" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`relative min-h-[210px] p-6 md:p-8 transition-colors hover:bg-white/[0.03] ${
                  index !== 3 ? "border-b md:border-b-0 md:border-r" : ""
                } border-white/[0.08]`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                    Architecture
                  </span>
                </div>

                <div className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8">
                  <div className="mb-3 h-0.5 w-10 bg-[#FF5A1F]" />
                  <h3 className="text-xs uppercase tracking-[0.12em] font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-zinc-400 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
            Future capability · Blockchain functionality is not active in Phase 1
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow>How It Works</Eyebrow>

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 items-start">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                A simpler path
                <br />
                <span className="text-[#FF5A1F]">into Web3.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-400">
                Explore the conceptual journey of how a future synxex wallet
                could connect users with networks, assets and Web3.
              </p>

              <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#0A0A0A]/90 p-6 backdrop-blur-xl">
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

            <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="border-t border-white/[0.08]">
                {workflow.map((step, index) => (
                  <button
                    type="button"
                    key={step.title}
                    onClick={() => setActiveWorkflow(index)}
                    aria-pressed={activeWorkflow === index}
                    className={`grid w-full grid-cols-[80px_1fr_auto] items-center gap-4 border-b border-white/[0.08] px-6 py-5 text-left transition-all md:grid-cols-[90px_1fr_90px] ${
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
                          ? "text-white"
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

              <div className="border-t border-white/[0.08] bg-gradient-to-r from-[#6E1838]/20 to-transparent p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#FF5A1F] font-semibold">
                  {selectedWorkflow.title} Overview
                </div>

                <h3 className="mt-2 text-2xl font-medium text-white">
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
        className="border-y border-white/[0.08] bg-[#070707]/80 backdrop-blur-xl px-5 py-28 md:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow>Security & Control</Eyebrow>

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                Built with security
                <br />
                <span className="text-[#FF5A1F]">at the core.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-400">
                Security, permissions, and account protection remain central to the synxex wallet experience, ensuring safe navigation across future decentralized networks.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  ["Self-Custody Design", "Designed to give users full cryptographic ownership of assets."],
                  ["Advanced Permissions", "Granular control over dApp connections and approvals."],
                  ["Encrypted Architecture", "State-of-the-art encryption standards planned for release."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.01] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-[#FF5A1F]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white">{title}</h4>
                      <p className="mt-1 text-xs text-zinc-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/90 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF5A1F]/10 blur-[80px]" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#FF5A1F] font-semibold">
                Security Framework
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Zero-Trust Architecture
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Every interaction within the synxex ecosystem is designed around zero-trust security principles. Permissions are requested explicitly and scoped per session.
              </p>
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                <span>Status: Planned</span>
                <span className="text-[#FF5A1F]">Phase 2 Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Eyebrow>Roadmap</Eyebrow>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              The Path Forward
            </h2>
            <p className="mt-4 text-sm text-zinc-400">
              Tracking our development phases from initial concept to full ecosystem deployment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roadmap.map(([phase, title, status]) => (
              <div key={phase} className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/90 p-7 backdrop-blur-xl transition-all hover:border-[#FF5A1F]/50 hover:bg-[#FF5A1F]/[0.02] shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#FF5A1F] uppercase">
                    {phase}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-zinc-400 group-hover:border-[#FF5A1F]/30 group-hover:text-[#FF5A1F] transition-colors">
                    {status}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-white">
                  {title}
                </h3>
                <div className="mt-6 h-px w-full bg-white/[0.08] group-hover:bg-[#FF5A1F]/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#030303] px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#FF5A1F]/30 bg-[#FF5A1F]/10 text-xs font-bold text-[#FF5A1F]">
              S
            </div>
            <span className="text-lg font-semibold tracking-[-0.04em] text-white">
              synxex
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Web3 Wallet Concept
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-[11px] uppercase tracking-[0.15em] text-zinc-400">
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#networks" className="hover:text-white transition-colors">Networks</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-600 text-center md:text-right">
            © 2026 synxex. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}