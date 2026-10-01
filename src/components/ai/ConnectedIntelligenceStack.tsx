"use client";

import React, { useState } from "react";
import { MARKET_INTELLIGENCE_ITEMS } from "@/content/ai";

export function ConnectedIntelligenceStack() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <div className="w-full space-y-10">
      {/* ================= HERO CINEMATIC 3D DEVICE SHOWCASE ================= */}
      <div className="relative w-full rounded-[2.5rem] bg-[#050505] border border-[#1E1E22] overflow-hidden min-h-[500px] sm:min-h-[580px] flex items-center justify-center p-6 sm:p-12 shadow-2xl">
        {/* Ambient Dark Room Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5A1F]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#3A0D20]/25 blur-[120px] pointer-events-none" />

        {/* ---------------- 3D ANGLED SMARTPHONES IN BACKGROUND ---------------- */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-55 sm:opacity-70">
          {/* Phone 1: Top Left Angled Phone (Screen Face) */}
          <div
            className="absolute -top-16 -left-12 sm:left-4 w-[280px] sm:w-[320px] h-[520px] rounded-[3rem] bg-[#0C0C0E] border-2 border-zinc-700/50 shadow-2xl p-3"
            style={{
              transform: "perspective(1000px) rotateX(24deg) rotateY(-22deg) rotateZ(-12deg)",
            }}
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="w-full h-full rounded-[2.5rem] bg-[#050506] border border-zinc-800 p-4 space-y-3 overflow-hidden">
              <div className="w-20 h-4 rounded-full bg-black mx-auto mb-2 border border-zinc-800" />
              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                <span>09:41</span>
                <span className="text-[#FF8B68]">LIVE TICK</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#121214] border border-[#202024] space-y-2">
                <span className="text-[9px] font-mono text-[#FF5A1F]">DATA INGESTION</span>
                <div className="h-2 rounded bg-zinc-700 w-3/4" />
                <div className="h-2 rounded bg-zinc-800 w-1/2" />
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full border-2 border-t-[#FF5A1F] border-r-[#FF8B68] border-b-[#3A0D20] border-l-zinc-800" />
                  <div className="space-y-1 text-[8px] font-mono text-zinc-400">
                    <div>120k ticks/sec</div>
                    <div className="text-white font-bold">Latency: 2.8ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2: Center-Right Angled Phone (Screen Face) */}
          <div
            className="absolute -top-10 -right-16 sm:right-6 w-[290px] sm:w-[340px] h-[540px] rounded-[3rem] bg-[#0C0C0E] border-2 border-zinc-700/50 shadow-2xl p-3"
            style={{
              transform: "perspective(1000px) rotateX(28deg) rotateY(18deg) rotateZ(8deg)",
            }}
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="w-full h-full rounded-[2.5rem] bg-[#060608] border border-zinc-800 p-4 space-y-3 overflow-hidden">
              <div className="w-20 h-4 rounded-full bg-black mx-auto mb-2 border border-zinc-800" />
              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                <span>09:41</span>
                <span className="text-emerald-400">MODEL INFERENCE</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#141416] border border-[#242428] space-y-2">
                <div className="flex justify-between text-[9px] font-mono">
                  <span className="text-white font-bold">LLM Synthesis</span>
                  <span className="text-[#FF8B68]">ACTIVE</span>
                </div>
                <div className="h-16 rounded-xl bg-[#09090B] p-2 flex items-end justify-between gap-1 border border-zinc-800">
                  <div className="w-2 h-6 rounded-t bg-[#FF5A1F]" />
                  <div className="w-2 h-10 rounded-t bg-[#FF8B68]" />
                  <div className="w-2 h-4 rounded-t bg-[#3A0D20]" />
                  <div className="w-2 h-12 rounded-t bg-[#FF5A1F]" />
                  <div className="w-2 h-8 rounded-t bg-emerald-500" />
                  <div className="w-2 h-14 rounded-t bg-[#FF8B68]" />
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3: Bottom Center Camera Island Phone */}
          <div
            className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[340px] sm:w-[400px] h-[340px] rounded-[3.5rem] bg-gradient-to-b from-[#18181A] to-[#080808] border-2 border-zinc-600/50 shadow-2xl p-5"
            style={{
              transform: "perspective(1000px) rotateX(45deg) rotateY(0deg) rotateZ(0deg)",
            }}
          >
            <div className="w-32 h-32 rounded-[2rem] bg-[#121214] border border-zinc-700 p-3 shadow-inner relative flex flex-wrap items-center justify-center gap-2">
              <div className="w-11 h-11 rounded-full bg-[#050505] border-2 border-zinc-600 flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#000] via-[#1A0E0B] to-[#FF5A1F]/30 border border-zinc-700 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF8B68]/60 blur-[1px]" />
                </div>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#050505] border-2 border-zinc-600 flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#000] via-[#100806] to-[#FF5A1F]/30 border border-zinc-700 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF8B68]/60 blur-[1px]" />
                </div>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#050505] border-2 border-zinc-600 flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#000] via-[#150A07] to-[#FF5A1F]/30 border border-zinc-700 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF8B68]/60 blur-[1px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- CENTER HERO TYPOGRAPHY OVERLAY ---------------- */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#151515]/90 border border-[#262626] backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF8B68] uppercase">
              AI TECHNOLOGY
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            SYNXEX<span className="text-[#FF5A1F]">.AI</span>
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 drop-shadow-md">
            A connected intelligence stack.
          </h3>

          <p className="text-xs sm:text-sm lg:text-base text-[#D4D4D8] leading-relaxed max-w-xl drop-shadow-md">
            Context, reasoning, controls, and traceability are designed as a single system rather than disconnected features.
          </p>

          <div className="pt-2">
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-white hover:text-[#FF8B68] transition-colors border-b border-white/40 pb-1 hover:border-[#FF8B68]"
            >
              EXPLORE ARCHITECTURE STACK <span className="text-sm">↘</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 hidden sm:flex">
          <a
            href="#top"
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF5A1F] border border-white/20 hover:border-[#FF5A1F] backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg cursor-pointer"
          >
            <span className="text-base font-bold leading-none">↑</span>
          </a>
        </div>
      </div>

      {/* ================= 4 ARCHITECTURAL PILLAR CARDS ================= */}
      <div id="pillars" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MARKET_INTELLIGENCE_ITEMS.map((item, index) => {
          const isActive = index === activeChapter;
          return (
            <div
              key={item.title}
              onClick={() => setActiveChapter(index)}
              className={`group relative rounded-3xl p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between min-h-[220px] ${
                isActive
                  ? "bg-gradient-to-b from-[#1E0D09] to-[#0A0A0A] border-[#FF5A1F] shadow-xl shadow-[#FF5A1F]/15 scale-[1.02]"
                  : "bg-[#0A0A0C] border-[#1E1E22] hover:border-zinc-600 opacity-80 hover:opacity-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#FF8B68] font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-[#161618] border border-[#252528] text-zinc-400">
                    {item.kicker}
                  </span>
                </div>

                <h4 className="text-lg font-bold tracking-tight text-white mb-1.5">
                  {item.title}
                </h4>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-[10px] font-mono">
                <span className={isActive ? "text-[#FF5A1F] font-bold" : "text-zinc-500"}>
                  {item.kicker} LAYER
                </span>
                <span
                  className={`block h-1 rounded-full transition-all duration-300 ${
                    isActive ? "w-10 bg-[#FF5A1F]" : "w-4 bg-zinc-800"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
