"use client";

import React, { useState, useEffect } from "react";

export interface RoadmapSlide {
  status: string;
  title: string;
  description: string;
  tag: string;
  features: string[];
}

const ROADMAP_SLIDES: RoadmapSlide[] = [
  {
    status: "Exploring",
    title: "Research workspaces",
    description:
      "A planned environment for reviewing structured context, source material, and analytical notes.",
    tag: "CONTEXT & SYNTHESIS",
    features: [
      "Structured contextual note compilation",
      "Financial filing & transcript synthesis",
      "Automated provenance & source citation tracking",
    ],
  },
  {
    status: "Planned",
    title: "Governed automations",
    description:
      "Future workflow tooling designed around explicit policies, approvals, and clear human control.",
    tag: "POLICY & GOVERNANCE",
    features: [
      "Deterministic parameter boundaries",
      "Mandatory human-in-the-loop sign-off gates",
      "Tamper-evident cryptographically signed audit logs",
    ],
  },
  {
    status: "Future",
    title: "Personalized intelligence",
    description:
      "A coming-soon vision for interfaces that adapt presentation and context to defined user preferences.",
    tag: "ADAPTIVE INTERFACE",
    features: [
      "Dynamic risk appetite & threshold modeling",
      "Custom market signal dashboards & notifications",
      "Natural language multi-agent query orchestration",
    ],
  },
];

export function FutureRoadmapCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ROADMAP_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % ROADMAP_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + ROADMAP_SLIDES.length) % ROADMAP_SLIDES.length);
  };

  const slide = ROADMAP_SLIDES[currentSlide];

  return (
    <div
      className="w-full space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Navigation Header Bar (Without any numbers) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E1E22] pb-4">
        {/* Status Pill Tabs (Without numbers) */}
        <div className="flex items-center gap-2">
          {ROADMAP_SLIDES.map((item, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={item.title}
                onClick={() => setCurrentSlide(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/20"
                    : "bg-[#121214] text-zinc-400 hover:text-white border border-[#222226]"
                }`}
              >
                {item.status}
              </button>
            );
          })}
        </div>

        {/* Previous / Next Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous roadmap slide"
            className="w-9 h-9 rounded-full bg-[#121214] border border-[#222226] text-zinc-300 hover:text-white hover:border-[#FF5A1F] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next roadmap slide"
            className="w-9 h-9 rounded-full bg-[#121214] border border-[#222226] text-zinc-300 hover:text-white hover:border-[#FF5A1F] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
          >
            →
          </button>
        </div>
      </div>

      {/* Main Slide Card Container (Slides one by one smoothly) */}
      <div className="relative overflow-hidden w-full rounded-[2.5rem] bg-[#070708] border border-[#202024] p-7 sm:p-12 shadow-2xl">
        {/* Ambient Backlight Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A1F]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3A0D20]/20 blur-[80px] pointer-events-none" />

        {/* Slide Content Track */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Area: Status, Title, Description, and Feature List (No numbering!) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#3A0D20] text-[#FF8B68] border border-[#6E1838] text-[10px] font-mono font-bold uppercase tracking-widest">
                {slide.status}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                {slide.tag}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {slide.title}
            </h3>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-4 border-t border-[#1C1C20]">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF8B68] block">
                PLANNED CAPABILITIES
              </span>
              {slide.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Area: Interactive Visual Demonstration for Active Slide */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0F0F12] border border-[#24242A] p-6 space-y-4 shadow-xl">
            {/* Visual 1: Research Workspaces */}
            {slide.title === "Research workspaces" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-[#202026] pb-2">
                  <span className="text-white font-bold">Research Studio Preview</span>
                  <span className="text-[#FF8B68]">EXPLORING</span>
                </div>
                {/* Search / Ingestion input mock */}
                <div className="p-3 rounded-xl bg-[#09090B] border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                  <span>Q: Synthesize Q3 10-K filings for cloud revenue...</span>
                  <span className="text-[#FF5A1F] text-[10px] font-mono font-bold">AI SCAN</span>
                </div>
                {/* Source chips */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#18181C] text-[10px] font-mono text-zinc-300 border border-zinc-700">
                    SEC Form 10-K
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#18181C] text-[10px] font-mono text-zinc-300 border border-zinc-700">
                    Earnings Call Audio
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A0D20] text-[10px] font-mono text-[#FF8B68] border border-[#6E1838]">
                    Macro Vectors
                  </span>
                </div>
                {/* Synthesis Output box */}
                <div className="p-3.5 rounded-xl bg-[#141418] border border-[#24242A] text-xs text-zinc-300 leading-relaxed italic border-l-2 border-[#FF5A1F]">
                  "Normalized operational margins expanded by 140 bps with cloud workload retention reaching multi-year highs."
                </div>
              </div>
            )}

            {/* Visual 2: Governed Automations */}
            {slide.title === "Governed automations" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-[#202026] pb-2">
                  <span className="text-white font-bold">Policy Boundary Gate</span>
                  <span className="text-emerald-400">PLANNED</span>
                </div>
                <div className="p-3 rounded-xl bg-[#09090B] border border-zinc-800 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">Maximum Drawdown Cap</span>
                    <span className="text-white font-bold">2.00% HARD LIMIT</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="w-[45%] h-full bg-gradient-to-r from-emerald-500 to-[#FF5A1F]" />
                  </div>
                </div>
                {/* Human sign-off gate */}
                <div className="p-3.5 rounded-xl bg-[#1A100C] border border-[#FF5A1F]/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">HUMAN APPROVAL GATE</span>
                  <span className="text-[#FF8B68] font-bold">REQUIRED</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#09090B] text-center text-[10px] font-mono text-zinc-400">
                  Cryptographic Signature Verified (Ed25519)
                </div>
              </div>
            )}

            {/* Visual 3: Personalized Intelligence */}
            {slide.title === "Personalized intelligence" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-[#202026] pb-2">
                  <span className="text-white font-bold">Adaptive Profile Engine</span>
                  <span className="text-[#FFD18A]">FUTURE</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-zinc-400">
                    <span>Portfolio Volatility Preference</span>
                    <span className="text-[#FF8B68]">Moderate (Level 3)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="w-[60%] h-full bg-gradient-to-r from-[#FF5A1F] to-[#FFD18A]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-xl bg-[#09090B] border border-zinc-800 text-[10px] font-mono text-zinc-300">
                    Dynamic Heatmaps
                  </div>
                  <div className="p-2 rounded-xl bg-[#09090B] border border-zinc-800 text-[10px] font-mono text-zinc-300">
                    Voice Context Q&amp;A
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#141418] border border-[#222228] text-[10px] font-mono text-zinc-400 text-center">
                  Autonomous Multi-Agent Query Synchronization
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Dot Indicators (Without numbers) */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {ROADMAP_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx
                ? "w-8 h-2 bg-[#FF5A1F] shadow-md shadow-[#FF5A1F]/30"
                : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

