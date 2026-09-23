"use client";

import React, { useState } from "react";

export interface WorkflowPhase {
  stepIndex: string;
  label: string;
  title: string;
  description: string;
  directive: string;
  status: string;
  panels: {
    title: string;
    category: string;
    badge: string;
    content: React.ReactNode;
  }[];
}

export const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    stepIndex: "01",
    label: "OBSERVE",
    title: "State Observation",
    description: "Continuously ingests market orderbooks, multi-venue liquidity feeds, and real-time contextual data.",
    directive: "Ingest live multi-venue feeds across Binance, Coinbase, and Uniswap v3; compute spread volatility and orderbook imbalance.",
    status: "Active Ingestion · 0.12ms",
    panels: [
      {
        title: "Order-Book Liquidity Matrix",
        category: "Market Microstructure",
        badge: "0.8 bps spread",
        content: (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 text-[11px]">
              <span>BIDS $64,818.50</span>
              <span className="text-zinc-500">SPREAD: 0.8 BPS</span>
              <span>ASKS $64,819.30</span>
            </div>
            <div className="flex items-end gap-1.5 h-12 w-full">
              <div className="flex-1 bg-emerald-500/20 rounded-t h-[35%] border-t border-emerald-500/40" />
              <div className="flex-1 bg-emerald-500/30 rounded-t h-[60%] border-t border-emerald-500/50" />
              <div className="flex-1 bg-emerald-500/50 rounded-t h-[85%] border-t border-emerald-500/70" />
              <div className="w-px bg-white/20 h-full mx-0.5" />
              <div className="flex-1 bg-[#FF5A1F]/50 rounded-t h-[80%] border-t border-[#FF5A1F]/70" />
              <div className="flex-1 bg-[#FF5A1F]/30 rounded-t h-[50%] border-t border-[#FF5A1F]/50" />
              <div className="flex-1 bg-[#FF5A1F]/20 rounded-t h-[25%] border-t border-[#FF5A1F]/30" />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500 pt-1 border-t border-white/[0.04]">
              <span>Depth: $48.2M</span>
              <span className="text-emerald-400">Imbalance: +4.2%</span>
            </div>
          </div>
        ),
      },
      {
        title: "Multi-Venue Price Feeds",
        category: "WebSocket Stream",
        badge: "0.12ms latency",
        content: (
          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/[0.04]">
              <span className="text-white font-medium">BTC / USD</span>
              <span className="text-zinc-300">$64,820.50</span>
              <span className="text-emerald-400 font-medium">+3.24%</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/[0.04]">
              <span className="text-white font-medium">ETH / USDC</span>
              <span className="text-zinc-300">$3,482.10</span>
              <span className="text-emerald-400 font-medium">+2.81%</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/[0.04]">
              <span className="text-white font-medium">SOL / USDT</span>
              <span className="text-zinc-300">$142.90</span>
              <span className="text-emerald-400 font-medium">+5.12%</span>
            </div>
          </div>
        ),
      },
      {
        title: "News & Filings Intelligence",
        category: "NLP Extraction",
        badge: "92.4% confidence",
        content: (
          <div className="space-y-2.5">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>FED MINUTES INGESTION</span>
                <span className="text-emerald-400">POSITIVE</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Liquidity conditions remain balanced across primary settlement windows.
              </p>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>Headline Clusters: 18</span>
              <span className="text-[#FF8B68]">Signal Impact: Minimal</span>
            </div>
          </div>
        ),
      },
      {
        title: "Cross-Venue Arbitrage Spread",
        category: "Opportunity Detection",
        badge: "+14.2 bps edge",
        content: (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-[#141418] border border-white/[0.06] space-y-1">
              <div className="text-[11px] text-[#FF8B68] font-medium">Uniswap v3 ➔ Coinbase</div>
              <div className="text-white font-semibold text-sm">+14.2 bps spread ($1,420 net)</div>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500">
              <span>Est. Gas: $8.40</span>
              <span className="text-emerald-400 font-medium">Net Profitable</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    stepIndex: "02",
    label: "REASON",
    title: "Scenario Reasoning",
    description: "Simulates probabilistic spread scenarios, models risk-reward, and drafts execution paths.",
    directive: "Model multi-venue arbitrage routing paths; evaluate slippage vectors and Monte Carlo probability distribution.",
    status: "Dual-Model Consensus",
    panels: [
      {
        title: "Monte Carlo Path Simulation",
        category: "Quantitative Modeling",
        badge: "99.4% win rate",
        content: (
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>95% VaR: -$120</span>
              <span className="text-emerald-400">Exp. Return: +$1,420</span>
            </div>
            <div className="h-12 w-full flex items-center justify-center">
              <svg viewBox="0 0 160 40" className="w-full h-full" fill="none">
                <path d="M0 35 Q40 30 80 15 T160 5" stroke="#FF5A1F" strokeWidth="1.5" fill="none" />
                <path d="M0 35 Q40 32 80 22 T160 14" stroke="#A1A1AA" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.4" />
                <circle cx="160" cy="5" r="2.5" fill="#FF5A1F" />
              </svg>
            </div>
            <div className="text-[10px] text-zinc-500 flex justify-between">
              <span>Sharpe Ratio: 4.8</span>
              <span className="text-zinc-300">Zero Tail Risk</span>
            </div>
          </div>
        ),
      },
      {
        title: "Multi-Model Consensus",
        category: "Reasoning Validation",
        badge: "100% agreement",
        content: (
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] flex justify-between items-center">
              <span className="text-zinc-300">DeepSeek R1 (Math Core)</span>
              <span className="text-emerald-400 font-medium">Route Approved</span>
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] flex justify-between items-center">
              <span className="text-zinc-300">Claude 3.5 (Policy Guard)</span>
              <span className="text-emerald-400 font-medium">Policy Pass</span>
            </div>
            <div className="text-[10px] text-zinc-500 text-center pt-0.5">
              Consensus Latency: 1.4ms
            </div>
          </div>
        ),
      },
      {
        title: "Optimal Routing Allocation",
        category: "Execution Splitting",
        badge: "Slippage < 0.01%",
        content: (
          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex justify-between text-[11px]">
              <span className="text-zinc-400">Pool A (Uniswap v3 · 60%)</span>
              <span className="text-white font-medium">$144,000</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden flex">
              <div className="h-full bg-[#FF5A1F] w-[60%]" />
              <div className="h-full bg-zinc-600 w-[40%]" />
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-zinc-400">Pool B (Coinbase · 40%)</span>
              <span className="text-white font-medium">$96,000</span>
            </div>
          </div>
        ),
      },
      {
        title: "Reasoning Audit Trace",
        category: "Chain-of-Thought",
        badge: "Step 4 of 4",
        content: (
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] font-mono text-[11px] text-zinc-300 space-y-1">
            <div className="text-zinc-400">1. Spread confirmed on ETH/USDC</div>
            <div className="text-zinc-400">2. Flash liquidity validated</div>
            <div className="text-zinc-400">3. Net edge after fees: +14.2 bps</div>
            <div className="text-emerald-400 font-medium">4. Dispatched to Enclave Guard</div>
          </div>
        ),
      },
    ],
  },
  {
    stepIndex: "03",
    label: "VALIDATE",
    title: "Boundary Validation",
    description: "Enforces deterministic circuit breakers, maximum drawdown limits, and policy guardrails.",
    directive: "Verify strict drawdown bounds (< 0.5%), check hardware enclave signature authorization, and enforce zero-MEV protection.",
    status: "Guardrails Enforced",
    panels: [
      {
        title: "Hardware Enclave Sentinel",
        category: "Cryptographic Isolation",
        badge: "Enclave locked",
        content: (
          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] flex items-center justify-between">
              <span className="text-zinc-400">Enclave Core</span>
              <span className="text-white font-medium">A17_SEC · FIPS 140-3</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span>Private Keys:</span>
              <span className="text-emerald-400 font-medium">Air-Gapped / Non-Extractable</span>
            </div>
          </div>
        ),
      },
      {
        title: "Deterministic Circuit Breakers",
        category: "Capital Protection",
        badge: "0.5% max loss cap",
        content: (
          <div className="space-y-2.5 font-mono text-xs">
            <div className="flex justify-between text-[11px]">
              <span className="text-zinc-400">Loss Threshold</span>
              <span className="text-white font-medium">$1,200.00</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-[15%]" />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500">
              <span>Current Risk: 0.04%</span>
              <span className="text-emerald-400">Within Threshold</span>
            </div>
          </div>
        ),
      },
      {
        title: "MPC Multi-Signer Quorum",
        category: "Key Distribution",
        badge: "3 of 5 verified",
        content: (
          <div className="grid grid-cols-3 gap-2 font-mono text-[11px] text-center">
            <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/30 text-emerald-400">
              Zurich [OK]
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/30 text-emerald-400">
              Tokyo [OK]
            </div>
            <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/30 text-emerald-400">
              New York [OK]
            </div>
          </div>
        ),
      },
      {
        title: "Mempool & MEV Guard",
        category: "Anti-Frontrunning",
        badge: "Zero MEV exposure",
        content: (
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between text-[11px] text-zinc-300">
              <span>Relay:</span>
              <span className="text-white font-medium">Private RPC Endpoint</span>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-300">
              <span>Slippage Cap:</span>
              <span className="text-emerald-400 font-medium">Hard 0.01% Limit</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    stepIndex: "04",
    label: "ACT & AUDIT",
    title: "Execution & Auditing",
    description: "Dispatches authorized operations via Hardware Enclave and records immutable cryptographic logs.",
    directive: "Sign and broadcast transaction via Ed25519 MPC enclave; write immutable block verification receipt to audit ledger.",
    status: "Settled On-Chain",
    panels: [
      {
        title: "Transaction Broadcast",
        category: "On-Chain Dispatch",
        badge: "Confirmed · 0.38ms",
        content: (
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] text-[11px] truncate text-zinc-300">
              TXID: 0x7f4e8b19a0d2c3e4f5a6b7c8d9e0f1a2b3c4d5e6
            </div>
            <div className="flex justify-between text-[10px] text-zinc-400">
              <span>Block: #19,842,109</span>
              <span className="text-emerald-400 font-medium">Finalized</span>
            </div>
          </div>
        ),
      },
      {
        title: "Arbitrage Settlement Receipt",
        category: "Yield Accounting",
        badge: "+$1,840.20 net",
        content: (
          <div className="space-y-1.5 font-mono text-xs">
            <div className="flex justify-between text-zinc-300 text-[11px]">
              <span>Gross Gain:</span>
              <span className="text-emerald-400 font-medium">+$1,848.60</span>
            </div>
            <div className="flex justify-between text-zinc-300 text-[11px]">
              <span>Gas &amp; Network:</span>
              <span className="text-zinc-400">-$8.40</span>
            </div>
            <div className="flex justify-between text-white font-semibold text-xs border-t border-white/[0.06] pt-1 mt-1">
              <span>Net Settlement:</span>
              <span className="text-emerald-400">+$1,840.20</span>
            </div>
          </div>
        ),
      },
      {
        title: "Cryptographic Audit Record",
        category: "Provenance",
        badge: "Tamper-evident",
        content: (
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] font-mono text-[11px] text-zinc-300 space-y-1">
            <div className="text-zinc-400">Signature: Ed25519 Verified</div>
            <div className="text-zinc-400">Proof: zk-SNARK_v4_valid</div>
            <div className="text-emerald-400 font-medium">Audit Trail Hash Committed</div>
          </div>
        ),
      },
      {
        title: "Post-Trade State Reconciliation",
        category: "Portfolio Integrity",
        badge: "0.001% drift",
        content: (
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between text-[11px] text-zinc-300">
              <span>Balance Reconciled:</span>
              <span className="text-white font-medium">100.00%</span>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-300">
              <span>Circuit Status:</span>
              <span className="text-emerald-400 font-medium">Ready For Next Block</span>
            </div>
          </div>
        ),
      },
    ],
  },
];

export function AgenticWorkflowInfographic() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = WORKFLOW_PHASES[activeStepIdx];

  return (
    <div className="w-full space-y-12">
      {/* Top Header Section — Clean, confident, professional typography */}
      <div className="text-center space-y-3 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
          Autonomous Reasoning &amp; Execution Cycle
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Click any module card in the pipeline below to inspect how state observation, scenario reasoning, boundary validation, and auditing synchronize.
        </p>
      </div>

      {/* Main Grid: Left 4 Refined Workflow Cards · Right Execution Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ================= LEFT: 4 WORKFLOW STAGES ================= */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {WORKFLOW_PHASES.map((phase, idx) => {
            const isActive = idx === activeStepIdx;
            return (
              <div
                key={phase.stepIndex}
                onClick={() => setActiveStepIdx(idx)}
                className={`relative rounded-2xl p-5 border transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#141417] border-[#FF5A1F]/50 shadow-lg shadow-black/40"
                    : "bg-[#0D0D10] border-white/[0.06] hover:border-white/15 hover:bg-[#101013]"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Refined Step Number */}
                  <div
                    className={`font-mono text-sm font-semibold pt-0.5 ${
                      isActive ? "text-[#FF8B68]" : "text-zinc-500"
                    }`}
                  >
                    {phase.stepIndex}
                  </div>

                  {/* Content */}
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {phase.title}
                      </h3>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT: CONSOLE CANVAS ================= */}
        <div className="lg:col-span-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] overflow-hidden shadow-2xl flex flex-col">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0F0F12] border-b border-white/[0.06] text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white font-medium">Stage {activeStep.stepIndex}</span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-400">{activeStep.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#FF8B68] bg-[#1A1210] border border-[#FF5A1F]/20 px-2.5 py-0.5 rounded-full">
                {activeStep.status}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 space-y-6">
            
            {/* Directive Display */}
            <div className="p-3.5 rounded-xl bg-[#0F0F12] border border-white/[0.05] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                ACTIVE PIPELINE DIRECTIVE
              </span>
              <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                {activeStep.directive}
              </p>
            </div>

            {/* 2x2 Telemetry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeStep.panels.map((panel, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-xl bg-[#0F0F12] border border-white/[0.05] hover:border-white/10 transition-colors flex flex-col justify-between min-h-[140px]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-tight">
                        {panel.title}
                      </h4>
                      <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                        {panel.category}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400 bg-black/40 border border-white/[0.06] px-2 py-0.5 rounded shrink-0">
                      {panel.badge}
                    </span>
                  </div>

                  <div className="mt-auto">
                    {panel.content}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 bg-[#0D0D10] border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Deterministic Policy: Active</span>
            <span className="text-zinc-400">Zero-Deviation Hardware Gate</span>
          </div>

        </div>

      </div>
    </div>
  );
}
