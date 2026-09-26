"use client";

import React, { useState, useEffect } from "react";

export interface ConceptModuleData {
  id: string;
  tag: string;
  agentName: string;
  cardHeadline: string;
  description: string;
  metrics: string[];
  tone: "orange" | "wine" | "amber";
}

const MODULES: ConceptModuleData[] = [
  {
    id: "01",
    tag: "01",
    agentName: "Signal Agent",
    cardHeadline: "Check, buy, and sell currencies on auto-pilot",
    description:
      "Monitors market conditions and synthesizes signals from pricing, volatility, and event-driven changes.",
    metrics: ["Trend detection", "Volatility scan", "Signal confidence"],
    tone: "orange",
  },
  {
    id: "02",
    tag: "02",
    agentName: "News Agent",
    cardHeadline: "Reconcile transactions & news in real-time",
    description:
      "Summarizes major headlines, event context, and potential implications for a portfolio or strategy.",
    metrics: ["Headline clustering", "Narrative scoring", "Impact review"],
    tone: "wine",
  },
  {
    id: "03",
    tag: "03",
    agentName: "Risk Monitor",
    cardHeadline: "Deterministic guardrails & circuit breakers",
    description:
      "Tracks exposure, policy constraints, and emerging risk across active positions and workflows.",
    metrics: ["Exposure checks", "Capital limits", "Alert routing"],
    tone: "amber",
  },
];

export function AutomatedMarketAnalysis() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MODULES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MODULES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MODULES.length) % MODULES.length);
  };

  return (
    <div className="w-full rounded-[2.5rem] bg-[#000000] border border-[#1C1C1F] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#FF5A1F]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3A0D20]/25 blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* ================= LEFT SIDE: USER-REQUESTED TEXT & ANALYSIS LAYER ================= */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-[-0.04em] text-white leading-[1.08]">
              Signals made easier to interrogate.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-lg">
              A view of how future SynxEx intelligence could assemble market context for review—not a live trading or execution interface.
            </p>
          </div>

          {/* Analysis Layer Box */}
          <div className="rounded-2xl bg-[#0D0D0E] border border-[#202024] p-6 space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF8B68] font-bold block mb-1">
                ANALYSIS LAYER
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                A calm interface for complex information.
              </h4>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#1C1C20]">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                <span>Mock signals only</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                <span>Human review remains required</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                <span>No live feeds or execution</span>
              </div>
            </div>
          </div>

          {/* Pill Action Button matching the screenshot */}
          <div>
            <a
              href="#trading-markets"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
            >
              Open an account
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE: PEEKING SLIDESHOW CAROUSEL ================= */}
        <div
          className="lg:col-span-7 flex flex-col space-y-6 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Peeking Carousel Stage */}
          <div className="relative w-full overflow-hidden py-2">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 84}% - ${currentIndex * 1.25}rem))`,
              }}
            >
              {MODULES.map((module, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <div
                    key={module.id}
                    className="w-[88%] sm:w-[82%] flex-shrink-0 mr-5 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0.45 }}
                  >
                    <div
                      className={`rounded-[2rem] bg-[#121214] border p-7 sm:p-9 flex flex-col justify-between h-full min-h-[490px] sm:min-h-[530px] shadow-2xl relative overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "border-[#2D2D32] shadow-black/80 ring-1 ring-white/5"
                          : "border-[#1A1A1E]"
                      }`}
                    >
                      {/* Ambient card corner glow */}
                      <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5A1F]/10 blur-3xl pointer-events-none" />

                      {/* Card Header & Concept Module Tag */}
                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-[#FF8B68] font-bold uppercase tracking-[0.2em]">
                              CONCEPT MODULE
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#1C1C20] border border-[#2B2B32] text-[9px] font-mono text-zinc-300 font-bold">
                              {module.agentName}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-zinc-500 font-bold">
                            {module.tag} / 03
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                          {module.cardHeadline}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                          {module.description}
                        </p>
                      </div>

                      {/* Visual Representation Area */}
                      <div className="my-5 relative z-10 rounded-2xl bg-[#09090A] border border-[#1E1E22] p-4 sm:p-5">
                        {/* --- 01 SIGNAL AGENT: Price Graph like Screenshot --- */}
                        {module.id === "01" && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                              <span className="text-white font-bold">GBP/USD · Volatility Scan</span>
                              <span className="text-[#FF8B68] font-bold">£0.8581</span>
                            </div>

                            <div className="relative w-full h-36">
                              <svg viewBox="0 0 320 120" className="w-full h-full" fill="none">
                                <defs>
                                  <linearGradient id="chartWave" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                                  </linearGradient>
                                </defs>

                                {/* Dotted Horizontal Baseline */}
                                <line
                                  x1="10"
                                  y1="75"
                                  x2="310"
                                  y2="75"
                                  stroke="#333338"
                                  strokeWidth="1"
                                  strokeDasharray="4 4"
                                />

                                {/* Wave Fill Area */}
                                <path
                                  d="M10 70 Q30 65 45 80 T80 90 T115 55 T150 40 T190 60 T230 30 T270 55 T310 40 L310 120 L10 120 Z"
                                  fill="url(#chartWave)"
                                />

                                {/* Glowing Emerald/Orange Curve */}
                                <path
                                  d="M10 70 Q30 65 45 80 T80 90 T115 55 T150 40 T190 60 T230 30 T270 55 T310 40"
                                  stroke="#10B981"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />

                                {/* Active Signal Peak Point */}
                                <circle cx="230" cy="30" r="4" fill="#34D399" className="animate-pulse" />
                                <circle cx="230" cy="30" r="8" fill="#10B981" opacity="0.3" />
                              </svg>

                              {/* Price Marker Labels from Screenshot */}
                              <div className="absolute bottom-1 left-2 text-[10px] font-mono text-zinc-500">
                                £0.84167
                              </div>
                              <div className="absolute top-1 right-2 text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                CONFIDENCE 96.8%
                              </div>
                            </div>
                          </div>
                        )}

                        {/* --- 02 NEWS AGENT: Real-Time Rows with Avatar Circles from Screenshot --- */}
                        {module.id === "02" && (
                          <div className="space-y-2.5">
                            <div className="text-xs font-mono text-zinc-400 flex items-center justify-between mb-1">
                              <span className="text-white font-bold">Reconciled Market Transcripts</span>
                              <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-mono">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                STREAMING
                              </span>
                            </div>

                            {/* Row 1 */}
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#131316] border border-[#222226] text-xs">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#2A1713] text-[#FF8B68] font-bold text-[10px] flex items-center justify-center border border-[#FF5A1F]/30">
                                  JH
                                </div>
                                <div>
                                  <h5 className="font-semibold text-white text-xs">Jason Hammond</h5>
                                  <p className="text-[10px] text-zinc-500 font-mono">USD · A12324534646 · 124302150</p>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                RECONCILED
                              </span>
                            </div>

                            {/* Row 2 */}
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#131316] border border-[#222226] text-xs">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#182030] text-sky-400 font-bold text-[10px] flex items-center justify-center border border-sky-800">
                                  AM
                                </div>
                                <div>
                                  <h5 className="font-semibold text-white text-xs">Arthur Medler</h5>
                                  <p className="text-[10px] text-zinc-500 font-mono">GBP · B123484r646 · 849302150</p>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3A0D20] text-[#FF8B68] border border-[#6E1838]">
                                HIGH IMPACT
                              </span>
                            </div>

                            {/* Row 3 */}
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#131316] border border-[#222226] text-xs">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#1C1F1D] text-zinc-300 font-bold text-[10px] flex items-center justify-center border border-zinc-700">
                                  CL
                                </div>
                                <div>
                                  <h5 className="font-semibold text-white text-xs">Christina Lopez</h5>
                                  <p className="text-[10px] text-zinc-500 font-mono">EUR · L39483974 · 328372</p>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                                PROCESSED
                              </span>
                            </div>
                          </div>
                        )}

                        {/* --- 03 RISK MONITOR: Capital Limits & Alert Routing --- */}
                        {module.id === "03" && (
                          <div className="space-y-3.5">
                            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                              <span className="text-white font-bold">Deterministic Risk Policies</span>
                              <span className="text-[#FF8B68] font-bold">CIRCUIT ARMED</span>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1">
                                  <span>Exposure Cap Threshold</span>
                                  <span className="text-white font-bold">0.82% / 2.50%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-[#18181B] overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-emerald-500 to-[#FF5A1F] w-[32%]" />
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1">
                                  <span>Capital Limit Utilization</span>
                                  <span className="text-white font-bold">42% Allocated</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-[#18181B] overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-[#FF5A1F] to-[#FF8B68] w-[42%]" />
                                </div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#161012] border border-[#3A0D20] flex items-center justify-between text-xs font-mono">
                              <span className="text-white font-semibold">ALERT ROUTING</span>
                              <span className="text-emerald-400 font-bold">AUTO-SECURED</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Tags Strip */}
                      <div className="pt-4 border-t border-[#1C1C20] flex flex-wrap gap-2 relative z-10">
                        {module.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1 rounded-full bg-[#1A1A1E] border border-[#27272C] text-[11px] font-medium text-zinc-300 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator (Matches screenshot's exact 3 dots below cards) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {MODULES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-7 h-2 bg-white shadow-md shadow-white/30"
                    : "w-2 h-2 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          {/* Manual Control Buttons */}
          <div className="flex items-center justify-between px-2 text-xs font-mono text-zinc-500">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-xl bg-[#121214] border border-[#222] text-zinc-300 hover:text-white hover:border-[#FF5A1F] transition-all cursor-pointer"
            >
              ← PREV
            </button>
            <span>
              SLIDESHOW {isPaused ? "(PAUSED)" : "(AUTO)"}
            </span>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-xl bg-[#121214] border border-[#222] text-zinc-300 hover:text-white hover:border-[#FF5A1F] transition-all cursor-pointer"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

