"use client";

import React, { useState } from "react";

export function AgentsBentoGrid() {
  const [activeMobileTab, setActiveMobileTab] = useState<"portfolio" | "risk" | "approval">("portfolio");
  const [showApprovalInfo, setShowApprovalInfo] = useState(false);

  return (
    <div className="w-full space-y-6">
      {/* Header Bar — Clean, authoritative product navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A1F]" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF8B68] font-semibold">
              SYNXEX CORE // AGENT ORCHESTRATION GRID
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mt-1.5 flex items-center gap-3">
            Autonomous Financial Intelligence &amp; Hardware Security
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F0F12] border border-white/[0.08] text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>CONSENSUS: 99.98%</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181110] border border-[#FF5A1F]/30 text-[#FF8B68]">
            <span>LATENCY: 0.38ms</span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid Mosaic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* =========================================================================
            COLUMN 1 (LEFT): Model Pipeline + Order-Book Depth + Production Tokens
            ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          
          {/* Card 1: Multi-Agent Model Routing & Cognitive Pipeline */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] overflow-hidden p-6 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
          >
            {/* Subtle Top Gradient */}
            <div className="absolute top-0 right-0 w-64 h-32 bg-[#FF5A1F]/5 blur-3xl pointer-events-none group-hover:bg-[#FF5A1F]/10 transition-colors duration-500" />

            {/* Card Header */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                ORCHESTRATION PIPELINE // 01
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#141418] border border-white/[0.08] text-zinc-300">
                120k ticks/s
              </span>
            </div>

            {/* Real Software UI: Multi-Agent Execution Graph & Prompt Inspector */}
            <div className="relative z-10 my-auto py-4 space-y-3">
              {/* Agent Nodes Pipeline */}
              <div className="space-y-2">
                {/* Node 1: Ingestion */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111114] border border-white/[0.06] text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#1C1C22] border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-400">
                      01
                    </span>
                    <div>
                      <div className="text-white font-medium text-[11px]">Market Stream Ingest</div>
                      <div className="text-[9px] font-mono text-zinc-500">Binance · Coinbase · Uniswap v3</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    0.12ms
                  </span>
                </div>

                {/* Node 2: Reasoning Model */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#181110] border border-[#FF5A1F]/30 text-xs shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#FF5A1F] text-black font-bold flex items-center justify-center text-[10px] font-mono">
                      02
                    </span>
                    <div>
                      <div className="text-white font-medium text-[11px] flex items-center gap-1.5">
                        <span>DeepSeek R1 / Claude 3.5</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                      </div>
                      <div className="text-[9px] font-mono text-[#FF8B68]">Cross-Venue Spread Analysis</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#FF8B68] bg-[#2A0E08] border border-[#FF5A1F]/30 px-2 py-0.5 rounded">
                    PROB: 99.4%
                  </span>
                </div>

                {/* Node 3: Execution Guardrail */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111114] border border-white/[0.06] text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-[#1C1C22] border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-400">
                      03
                    </span>
                    <div>
                      <div className="text-white font-medium text-[11px]">Hardware Enclave Sign-off</div>
                      <div className="text-[9px] font-mono text-zinc-500">Zero-Slippage Policy Gate</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 bg-[#16161A] border border-white/10 px-2 py-0.5 rounded">
                    ENFORCED
                  </span>
                </div>
              </div>

              {/* Real-time telemetry log snippet */}
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/[0.04] font-mono text-[9px] text-zinc-400 flex items-center justify-between">
                <span className="text-zinc-500">[18:16:04.102]</span>
                <span className="text-zinc-300 truncate mx-2">ARB_OPP // ETH-USDC +$1,420 (14.2bps)</span>
                <span className="text-emerald-400 font-bold">DISPATCHED</span>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#FF8B68] uppercase tracking-wider block font-medium">
                  COGNITIVE PIPELINE
                </span>
                <span className="text-xs font-semibold text-white">Multi-Agent Reasoning Core</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">128K CONTEXT</span>
            </div>
          </div>

          {/* Card 2: Autonomous Orderflow & Depth Matrix */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] overflow-hidden p-6 flex flex-col justify-between min-h-[340px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                EXECUTION COCKPIT // 02
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
                LIVE TELEMETRY
              </span>
            </div>

            {/* Real Financial Depth & Orderflow Visual */}
            <div className="relative z-10 my-auto py-2 space-y-3">
              {/* Top Pair & Metric Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <div>
                  <div className="text-sm font-bold text-white font-mono">BTC / USD</div>
                  <div className="text-[10px] font-mono text-emerald-400">+$2,140.50 (+3.24%)</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">24H VOLUME</div>
                  <div className="text-xs font-mono font-semibold text-zinc-200">$482.4M</div>
                </div>
              </div>

              {/* Order Book Liquidity Visualizer */}
              <div className="h-28 w-full relative flex items-end justify-between gap-1 pt-4">
                {/* Visual Orderbook Bids (Left - Emerald/Warm) */}
                <div className="flex-1 flex items-end gap-1 h-full">
                  <div className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/40 transition-colors h-[35%] rounded-t border-t border-emerald-500/40" />
                  <div className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/40 transition-colors h-[50%] rounded-t border-t border-emerald-500/40" />
                  <div className="flex-1 bg-emerald-500/30 hover:bg-emerald-500/50 transition-colors h-[75%] rounded-t border-t border-emerald-500/60" />
                  <div className="flex-1 bg-emerald-500/40 hover:bg-emerald-500/60 transition-colors h-[90%] rounded-t border-t border-emerald-500/80" />
                </div>

                {/* Spread Divider Center Marker */}
                <div className="w-px h-full bg-[#FF5A1F]/40 relative flex items-center justify-center">
                  <span className="absolute top-0 text-[8px] font-mono text-[#FF8B68] bg-[#141418] px-1 rounded border border-[#FF5A1F]/30">
                    SPREAD: 0.8 BPS
                  </span>
                </div>

                {/* Visual Orderbook Asks (Right - Orange Accent) */}
                <div className="flex-1 flex items-end gap-1 h-full">
                  <div className="flex-1 bg-[#FF5A1F]/40 hover:bg-[#FF5A1F]/60 transition-colors h-[85%] rounded-t border-t border-[#FF5A1F]" />
                  <div className="flex-1 bg-[#FF5A1F]/30 hover:bg-[#FF5A1F]/50 transition-colors h-[65%] rounded-t border-t border-[#FF5A1F]/60" />
                  <div className="flex-1 bg-[#FF5A1F]/20 hover:bg-[#FF5A1F]/40 transition-colors h-[45%] rounded-t border-t border-[#FF5A1F]/40" />
                  <div className="flex-1 bg-[#FF5A1F]/20 hover:bg-[#FF5A1F]/40 transition-colors h-[30%] rounded-t border-t border-[#FF5A1F]/40" />
                </div>
              </div>

              {/* Execution Telemetry Footer */}
              <div className="grid grid-cols-2 gap-2 text-[9px] font-mono text-zinc-400 pt-1">
                <div className="p-1.5 rounded-lg bg-[#111114] border border-white/[0.04]">
                  <span className="text-zinc-500 block">ROUTING TIME</span>
                  <span className="text-white font-bold">0.42ms</span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#111114] border border-white/[0.04]">
                  <span className="text-zinc-500 block">SLIPPAGE GUARD</span>
                  <span className="text-emerald-400 font-bold">&lt; 0.01%</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#FF8B68] uppercase tracking-wider block font-medium">
                  ORDER ROUTING
                </span>
                <span className="text-xs font-semibold text-white">Autonomous Liquidity Engine</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                SUB-MILLISECOND
              </span>
            </div>
          </div>

          {/* Card 3: Design Tokens & System Specifications */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] p-5 transition-all duration-300 hover:border-white/20"
          >
            <div className="grid grid-cols-12 gap-3 items-stretch">
              
              {/* Specimen: Typography Tokens */}
              <div className="col-span-4 rounded-2xl bg-[#111114] border border-white/[0.06] p-3 flex flex-col justify-between">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">TYPOGRAPHY</span>
                <div className="my-1">
                  <div className="text-2xl font-black text-white leading-none tracking-tight">Aa</div>
                  <div className="text-sm font-mono text-[#FF8B68] mt-1">Geist Sans</div>
                </div>
                <span className="text-[8px] font-mono text-zinc-500">VARIABLE WEIGHT</span>
              </div>

              {/* Specimen: Color Palette Tokens */}
              <div className="col-span-4 rounded-2xl bg-[#111114] border border-white/[0.06] p-3 flex flex-col justify-between">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">PALETTE</span>
                <div className="space-y-1.5 my-1">
                  <div className="h-3.5 rounded bg-[#FF5A1F] flex items-center justify-between px-1.5 text-[7px] font-mono font-bold text-black">
                    <span>#FF5A1F</span>
                  </div>
                  <div className="h-3.5 rounded bg-[#181110] border border-[#FF5A1F]/30 flex items-center justify-between px-1.5 text-[7px] font-mono text-[#FF8B68]">
                    <span>#181110</span>
                  </div>
                  <div className="h-3.5 rounded bg-[#09090B] border border-white/10 flex items-center justify-between px-1.5 text-[7px] font-mono text-zinc-400">
                    <span>#09090B</span>
                  </div>
                </div>
                <span className="text-[8px] font-mono text-zinc-500">ZINC &amp; BLAZE</span>
              </div>

              {/* Specimen: System Status Indicator */}
              <div className="col-span-4 rounded-2xl bg-gradient-to-b from-[#181110] to-[#0A0A0C] border border-[#FF5A1F]/30 p-3 flex flex-col justify-between">
                <div className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                <div className="my-auto text-center py-1">
                  <span className="text-xs font-bold text-white block">SPEC</span>
                  <span className="text-[8px] font-mono text-[#FF8B68]">v4.8 PROD</span>
                </div>
                <span className="text-[7px] font-mono text-zinc-400 text-center">FIPS 140-3</span>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="text-[#FF8B68] font-medium">DESIGN SYSTEM // 03</span>
              <span>ENGINEERING SPEC</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2 (CENTER): Command Bar + Hardware Security Enclave + Mobile App
            ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          
          {/* Card 4: Automated Policy Rules & Command Palette */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] overflow-hidden p-6 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                POLICY ENGINE // 04
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#16161A] border border-white/10 text-zinc-300">
                ⌘ + K WORKFLOWS
              </span>
            </div>

            {/* Functional Command Palette / Policy Rule Card */}
            <div className="relative z-10 my-auto py-2 space-y-2.5">
              {/* Command Input Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111114] border border-white/[0.08] text-xs font-mono text-zinc-300 shadow-inner">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#FF8B68] font-bold">›</span>
                  <span className="text-zinc-200 truncate">Rebalance when spread &gt; 12.5 bps</span>
                </div>
                <span className="text-[9px] text-zinc-500 bg-black/50 px-1.5 py-0.5 rounded border border-white/10 shrink-0">
                  ENTER
                </span>
              </div>

              {/* Active Policy Status Strip */}
              <div className="p-3 rounded-xl bg-[#161210] border border-[#FF5A1F]/25 flex items-center justify-between">
                <div>
                  <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>Active Guardrail Policy</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 mt-0.5">
                    Max Capital Exposure: $500k · Human Sign-off above $1M
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#FF8B68] font-bold">
                  ENFORCED
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="text-[#FF8B68]">AUTONOMOUS TRIGGERS</span>
              <span>DETERMINISTIC BOUNDS</span>
            </div>
          </div>

          {/* Card 5: THE HERO CROWN JEWEL - Hardware Security Enclave & Multi-Party Computation */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.12] overflow-hidden p-6 flex flex-col justify-between min-h-[400px] shadow-2xl transition-all duration-500 hover:border-[#FF5A1F]/50 hover:shadow-[#FF5A1F]/10"
          >
            {/* Subtle Radiant Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF5A1F]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#FF5A1F]/15 transition-all duration-700" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#FF8B68] font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                SECURITY ENCLAVE // 05
              </span>
              <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#181110] text-[#FF8B68] border border-[#FF5A1F]/30 font-semibold">
                MPC QUORUM: 3/5
              </span>
            </div>

            {/* Realistic Hardware Security Enclave Architecture Component */}
            <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center space-y-4">
              {/* Central Micro-Architected Hardware Security Element */}
              <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-[#1E1E24] via-[#121216] to-[#0A0A0D] border-2 border-white/20 p-3 shadow-2xl flex flex-col items-center justify-between group-hover:border-[#FF5A1F]/60 transition-colors">
                {/* Gold Contact Pad Inset */}
                <div className="flex justify-between w-full text-[8px] font-mono text-zinc-500">
                  <span>SEC_ENCLAVE</span>
                  <span>FIPS_140-3</span>
                </div>

                {/* Central Cryptographic Processor Core */}
                <div className="w-16 h-16 rounded-xl bg-[#181110] border border-[#FF5A1F]/50 flex flex-col items-center justify-center relative shadow-lg shadow-[#FF5A1F]/15">
                  <div className="w-7 h-7 rounded-lg bg-[#FF5A1F] flex items-center justify-center font-bold text-black text-xs font-mono">
                    S
                  </div>
                  <span className="text-[7px] font-mono text-[#FF8B68] mt-1 font-bold">A17_SEC</span>
                </div>

                <div className="text-[7px] font-mono text-zinc-400 tracking-wider">
                  ED25519 · SHA-512
                </div>
              </div>

              {/* MPC Multi-Party Signing Nodes Mesh */}
              <div className="w-full space-y-2 max-w-xs">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1">
                  <span>KEY SHARES DISTRIBUTION</span>
                  <span className="text-emerald-400 font-bold">THRESHOLD MET</span>
                </div>

                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { city: "ZRH", status: "signed" },
                    { city: "TYO", status: "signed" },
                    { city: "NYC", status: "signed" },
                    { city: "LON", status: "ready" },
                    { city: "SIN", status: "ready" },
                  ].map((node) => (
                    <div
                      key={node.city}
                      className={`p-1.5 rounded-lg border text-center font-mono ${
                        node.status === "signed"
                          ? "bg-[#181110] border-[#FF5A1F]/40 text-[#FF8B68]"
                          : "bg-[#111114] border-white/[0.06] text-zinc-500"
                      }`}
                    >
                      <div className="text-[9px] font-bold">{node.city}</div>
                      <div className="text-[7px] uppercase mt-0.5">
                        {node.status === "signed" ? "● OK" : "○ SYNC"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold tracking-wide">ZERO-TRUST ENCLAVE</span>
              <span className="text-[#FF8B68] font-semibold">AIR-GAPPED EXECUTION</span>
            </div>
          </div>

          {/* Card 6: Mobile Trading & Human-in-the-Loop Gateway */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] p-6 flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
          >
            {/* Phone Selector Controls */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                MOBILE INTELLIGENCE // 06
              </span>
              <div className="flex items-center gap-1 bg-[#121216] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveMobileTab("portfolio")}
                  className={`px-2.5 py-1 rounded-lg text-[9px] font-mono transition-all cursor-pointer ${
                    activeMobileTab === "portfolio"
                      ? "bg-[#FF5A1F] text-white font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  PORTFOLIO
                </button>
                <button
                  onClick={() => setActiveMobileTab("risk")}
                  className={`px-2.5 py-1 rounded-lg text-[9px] font-mono transition-all cursor-pointer ${
                    activeMobileTab === "risk"
                      ? "bg-[#FF5A1F] text-white font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  RISK
                </button>
                <button
                  onClick={() => setActiveMobileTab("approval")}
                  className={`px-2.5 py-1 rounded-lg text-[9px] font-mono transition-all cursor-pointer ${
                    activeMobileTab === "approval"
                      ? "bg-[#FF5A1F] text-white font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  SIGN-OFF
                </button>
              </div>
            </div>

            {/* Functional Mobile UI Mockup Preview */}
            <div className="relative z-10 my-auto py-2">
              <div className="rounded-2xl bg-[#111114] border border-white/[0.08] p-3.5 space-y-3 shadow-inner">
                {/* Dynamic Screen View based on Tab */}
                {activeMobileTab === "portfolio" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-400">TOTAL CAPITAL</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">+12.4% 30D</span>
                    </div>
                    <div className="text-xl font-mono font-bold text-white">$1,842,900.00</div>
                    <div className="grid grid-cols-3 gap-1.5 pt-1 text-[9px] font-mono">
                      <div className="p-1.5 rounded bg-[#16161C] border border-white/5">
                        <span className="text-zinc-500 block">ARB POOL</span>
                        <span className="text-white font-bold">$1.2M</span>
                      </div>
                      <div className="p-1.5 rounded bg-[#16161C] border border-white/5">
                        <span className="text-zinc-500 block">HEDGES</span>
                        <span className="text-white font-bold">$480k</span>
                      </div>
                      <div className="p-1.5 rounded bg-[#16161C] border border-white/5">
                        <span className="text-zinc-500 block">COLD VAULT</span>
                        <span className="text-white font-bold">$162k</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeMobileTab === "risk" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-400">RISK SENTINEL</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">OPTIMAL</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#181110] border border-[#FF5A1F]/30">
                      <div>
                        <div className="text-xs font-bold text-white">Max Drawdown Guard</div>
                        <div className="text-[9px] font-mono text-zinc-400">Circuit Breaker at 1.5%</div>
                      </div>
                      <div className="text-sm font-mono font-bold text-[#FF8B68]">0.42% DD</div>
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 flex items-center justify-between">
                      <span>MONITORED: 18 ASSETS</span>
                      <span>LEVERAGE: 1.0X</span>
                    </div>
                  </div>
                )}

                {activeMobileTab === "approval" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-400">PENDING ACTION</span>
                      <span className="text-[10px] font-mono text-[#FF8B68] font-bold">1 REQUEST</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#141418] border border-white/[0.08] space-y-2">
                      <div className="text-xs text-white font-medium">
                        Execute $240k Arbitrage Sweep
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400">
                        Spread: 18.2 bps · Est. Profit: $436.80 · Zero MEV
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowApprovalInfo((show) => !show)}
                        aria-expanded={showApprovalInfo}
                        className="w-full py-1.5 rounded-lg bg-[#FF5A1F] hover:bg-[#e04e17] text-white text-[10px] font-mono font-bold transition-colors"
                      >
                        BIOMETRIC APPROVAL ➔
                      </button>
                      {showApprovalInfo && (
                        <p className="text-[9px] leading-relaxed text-zinc-400" role="status">
                          Informational demo only. No trade or account action is performed.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>IOS &amp; ANDROID ENTERPRISE</span>
              <span className="text-[#FF8B68] font-semibold">ZERO COMPROMISE</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COLUMN 3 (RIGHT): Institutional Custody Vault + Physical Authenticator Key
            ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          
          {/* Card 7: Institutional Vault & Custody Ledger */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] overflow-hidden p-6 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                INSTITUTIONAL CUSTODY // 07
              </span>
              <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#16161A] text-zinc-300 border border-white/10">
                SOC 2 TYPE II
              </span>
            </div>

            {/* Functional Custody Dashboard Surface */}
            <div className="relative z-10 my-auto py-3 space-y-3">
              {/* Vault Structure Distribution */}
              <div className="p-3.5 rounded-2xl bg-[#111114] border border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Sovereign Vault Allocation</span>
                  <span className="font-mono text-[#FF8B68] text-[10px]">100% AIR-GAPPED</span>
                </div>

                {/* Progress Allocation Bar */}
                <div className="h-2 w-full rounded-full bg-[#1E1E24] overflow-hidden flex gap-0.5">
                  <div className="bg-[#FF5A1F] h-full w-[65%]" title="Cold Storage (65%)" />
                  <div className="bg-[#FF8B68] h-full w-[25%]" title="MPC Hot Pool (25%)" />
                  <div className="bg-zinc-600 h-full w-[10%]" title="Reserve Buffer (10%)" />
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 pt-0.5">
                  <span>Cold: 65%</span>
                  <span>MPC Pool: 25%</span>
                  <span>Reserves: 10%</span>
                </div>
              </div>

              {/* Policy Whitelist Matrix */}
              <div className="p-3 rounded-2xl bg-[#111114] border border-white/[0.06] space-y-1.5">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  TIMELOCK &amp; ACCESS BOUNDS
                </div>
                <div className="flex items-center justify-between text-xs text-white">
                  <span>Withdrawal Timelock</span>
                  <span className="font-mono text-zinc-400">24-Hour Delay</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white">
                  <span>Address Whitelist</span>
                  <span className="font-mono text-emerald-400">Strict Enforced</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white">
                  <span>Multi-Sig Threshold</span>
                  <span className="font-mono text-[#FF8B68]">3 of 5 Keys</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-300 font-medium">AUDITED CUSTODY SPEC</span>
              <span className="text-[#FF8B68] font-semibold">INSTITUTIONAL GRADE</span>
            </div>
          </div>

          {/* Card 8: Physical Hardware Authenticator & NFC Signing */}
          <div
            className="group relative rounded-3xl bg-[#09090B] border border-white/[0.08] overflow-hidden p-6 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                HARDWARE SUITE // 08
              </span>
              <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#16161A] border border-white/10 text-zinc-400">
                TAMPER-EVIDENT
              </span>
            </div>

            {/* Precision Physical Key & Authenticator Representation */}
            <div className="relative z-10 my-auto py-3 space-y-3">
              {/* Titanium Cold Card Specimen */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1C1A1A] via-[#121111] to-[#0A0A0B] border border-white/15 space-y-3 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-5 rounded bg-[#FF5A1F] flex items-center justify-center font-bold text-[9px] text-black font-mono">
                      S
                    </div>
                    <span className="text-xs font-bold font-mono text-white tracking-wider">
                      SYNXEX TITANIUM
                    </span>
                  </div>
                  {/* Contactless symbol */}
                  <span className="text-zinc-400 text-xs font-mono">)))</span>
                </div>

                {/* EMV Microchip Mockup */}
                <div className="w-9 h-7 rounded bg-[#2D2A26] border border-[#FF8B68]/40 p-1 flex flex-col justify-between">
                  <div className="h-0.5 w-full bg-[#FF8B68]/60" />
                  <div className="h-0.5 w-full bg-[#FF8B68]/60" />
                  <div className="h-0.5 w-full bg-[#FF8B68]/60" />
                </div>

                <div className="flex items-center justify-between font-mono text-[9px] text-zinc-400 pt-1">
                  <span>SN: SYNX-8492-X</span>
                  <span className="text-[#FF8B68] font-bold">AIR-GAPPED</span>
                </div>
              </div>

              {/* Hardware Authenticator Status Card */}
              <div className="p-3 rounded-2xl bg-[#111114] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#181110] border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F] text-xs font-mono font-bold">
                    NFC
                  </div>
                  <div>
                    <div className="text-xs text-white font-semibold">Tap-to-Sign Verifier</div>
                    <div className="text-[9px] font-mono text-zinc-400">Zero Private-Key Leakage</div>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                  ARMED
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold">LEVEL-4 AUDIT KEY</span>
              <span className="text-[#FF8B68] font-semibold">PHYSICALLY SEALED</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
