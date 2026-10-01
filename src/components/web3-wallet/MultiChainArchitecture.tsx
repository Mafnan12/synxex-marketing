"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MultiChainArchitecture() {
  const [activeCard, setActiveCard] = useState(2); // Center card active by default

  return (
    <section
      id="networks"
      className="relative border-y border-white/[0.08] bg-[#05070B] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/4 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(92,16,35,0.5) 0%, rgba(255,106,43,0.2) 50%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF8B68] mb-6 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
            Conceptual Multi-Chain Architecture
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            One wallet. Multiple networks.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            synxex is exploring a multi-chain architecture where different
            networks can conceptually connect through one wallet layer.
          </p>

          {/* Action pill buttons matching screenshot */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#workflow"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            >
              Explore Wallet Workflow
            </a>
            <a
              href="#architecture"
              className="rounded-full border border-white/20 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/[0.08]"
            >
              Explore Architecture
            </a>
          </div>
        </div>

        {/* 5 Cards Row matching the screenshot */}
        <div className="mt-16 md:mt-20">
          <div className="flex gap-4 overflow-x-auto pb-6 pt-2 no-scrollbar md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
            {/* CARD 1: Put your assets to work (Fluted Columns) */}
            <div
              onClick={() => setActiveCard(0)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-[26px] border bg-gradient-to-b from-[#111625] via-[#0D111D] to-[#080B12] p-5 transition-all duration-300 md:min-w-0 md:min-h-[490px] cursor-pointer ${
                activeCard === 0
                  ? "border-[#FF5A1F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-white/95">
                  Put your assets to work
                </h3>
              </div>

              {/* 3D Fluted Columns Graphic */}
              <div className="relative my-6 flex h-[230px] items-end justify-center">
                <svg
                  viewBox="0 0 200 220"
                  className="h-full w-full max-w-[190px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="colG1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#252D42" />
                      <stop offset="40%" stopColor="#1B2132" />
                      <stop offset="70%" stopColor="#121624" />
                      <stop offset="100%" stopColor="#0B0E17" />
                    </linearGradient>
                    <linearGradient id="colG2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#323C56" />
                      <stop offset="35%" stopColor="#222A3E" />
                      <stop offset="70%" stopColor="#161B29" />
                      <stop offset="100%" stopColor="#0D111A" />
                    </linearGradient>
                    <linearGradient id="colRim" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5A1F" />
                      <stop offset="100%" stopColor="#3A0D20" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Left Column (Medium height) */}
                  <g>
                    {/* Body */}
                    <path
                      d="M32 90 L72 82 L72 215 L32 215 Z"
                      fill="url(#colG1)"
                      stroke="#2E374E"
                      strokeWidth="0.75"
                    />
                    {/* Flutes/ribs */}
                    <path d="M42 88 L42 215" stroke="#161B28" strokeWidth="1.5" />
                    <path d="M52 86 L52 215" stroke="#161B28" strokeWidth="1.5" />
                    <path d="M62 84 L62 215" stroke="#161B28" strokeWidth="1.5" />
                    {/* Warm accent line */}
                    <path d="M72 82 L72 215" stroke="url(#colRim)" strokeWidth="1.5" />
                    {/* Top Face */}
                    <ellipse cx="52" cy="86" rx="20" ry="7" fill="#2F3952" stroke="#48567A" strokeWidth="0.75" />
                    <ellipse cx="52" cy="86" rx="12" ry="4" fill="#1C2232" stroke="#FF5A1F" strokeWidth="0.75" strokeDasharray="2 2" />
                  </g>

                  {/* Center Column (Tallest) */}
                  <g>
                    {/* Body */}
                    <path
                      d="M80 48 L130 38 L130 215 L80 215 Z"
                      fill="url(#colG2)"
                      stroke="#424F73"
                      strokeWidth="0.75"
                    />
                    {/* Flutes/ribs */}
                    <path d="M92 46 L92 215" stroke="#1A2030" strokeWidth="2" />
                    <path d="M105 43 L105 215" stroke="#1A2030" strokeWidth="2" />
                    <path d="M118 41 L118 215" stroke="#1A2030" strokeWidth="2" />
                    {/* Glowing orange groove */}
                    <path d="M80 48 L80 215" stroke="#FF5A1F" strokeWidth="1.2" opacity="0.8" />
                    {/* Top Face */}
                    <ellipse cx="105" cy="43" rx="25" ry="9" fill="#3D4A6B" stroke="#60729F" strokeWidth="0.75" />
                    <ellipse cx="105" cy="43" rx="16" ry="5.5" fill="#20273B" stroke="#FF8B68" strokeWidth="0.75" />
                  </g>

                  {/* Right Column (Shorter) */}
                  <g>
                    {/* Body */}
                    <path
                      d="M125 125 L165 118 L165 215 L125 215 Z"
                      fill="url(#colG1)"
                      stroke="#2E374E"
                      strokeWidth="0.75"
                    />
                    {/* Flutes */}
                    <path d="M138 123 L138 215" stroke="#161B28" strokeWidth="1.5" />
                    <path d="M152 120 L152 215" stroke="#161B28" strokeWidth="1.5" />
                    {/* Top Face */}
                    <ellipse cx="145" cy="121" rx="20" ry="7" fill="#283248" stroke="#3D4A6B" strokeWidth="0.75" />
                    <ellipse cx="145" cy="121" rx="11" ry="3.8" fill="#171C2A" stroke="#FF5A1F" strokeWidth="0.75" />
                  </g>
                </svg>
              </div>

              {/* Floating Widget: Savings / Treasury */}
              <div className="rounded-2xl border border-white/10 bg-[#0A0E18]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF5A1F] text-white shadow-[0_0_12px_rgba(255,90,31,0.4)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-white">Savings</span>
                  </div>
                  <span className="text-xs font-semibold tracking-tight text-white">
                    £100,000
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2: Manage money in multiple currencies (Stacked Plates) */}
            <div
              onClick={() => setActiveCard(1)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-[26px] border bg-gradient-to-b from-[#111625] via-[#0D111D] to-[#080B12] p-5 transition-all duration-300 md:min-w-0 md:min-h-[490px] cursor-pointer ${
                activeCard === 1
                  ? "border-[#FF5A1F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-white/95">
                  Manage money in multiple currencies
                </h3>
              </div>

              {/* 3D Stacked Plates Graphic */}
              <div className="relative my-6 flex h-[230px] items-center justify-center">
                <svg
                  viewBox="0 0 200 220"
                  className="h-full w-full max-w-[190px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="plateTop" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2E374E" />
                      <stop offset="100%" stopColor="#161B28" />
                    </linearGradient>
                    <linearGradient id="plateEdge" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#48567A" />
                      <stop offset="100%" stopColor="#0D111A" />
                    </linearGradient>
                  </defs>

                  {/* Bottom Plate */}
                  <g transform="translate(0, 50)">
                    <path
                      d="M35 110 L100 80 L165 110 L100 140 Z"
                      fill="#121622"
                      stroke="#222A3C"
                      strokeWidth="1"
                    />
                    <path
                      d="M35 110 L100 140 L100 152 L35 122 Z"
                      fill="#0C0F17"
                    />
                    <path
                      d="M100 140 L165 110 L165 122 L100 152 Z"
                      fill="#151A26"
                    />
                  </g>

                  {/* Middle Plate with symbol */}
                  <g transform="translate(0, 15)">
                    <path
                      d="M35 80 L100 50 L165 80 L100 110 Z"
                      fill="#1B2232"
                      stroke="#323C54"
                      strokeWidth="1"
                    />
                    <path
                      d="M35 80 L100 110 L100 122 L35 92 Z"
                      fill="#101420"
                    />
                    <path
                      d="M100 110 L165 80 L165 92 L100 122 Z"
                      fill="#1C2334"
                    />
                    {/* Small dot on edge */}
                    <circle cx="92" cy="116" r="2.5" fill="#FF5A1F" />
                  </g>

                  {/* Top Plate with embossed Currency Symbol */}
                  <g transform="translate(0, -20)">
                    <path
                      d="M35 50 L100 20 L165 50 L100 80 Z"
                      fill="url(#plateTop)"
                      stroke="#4D5D82"
                      strokeWidth="1"
                    />
                    <path
                      d="M35 50 L100 80 L100 94 L35 64 Z"
                      fill="#131824"
                    />
                    <path
                      d="M100 80 L165 50 L165 64 L100 94 Z"
                      fill="#252F44"
                    />
                    {/* Small amber light dot on plate edge */}
                    <circle cx="92" cy="88" r="2.5" fill="#FF8B68" />

                    {/* Embossed 3D Symbol (£ / Currency glyph) */}
                    <path
                      d="M92 42 C92 36 97 32 104 32 C109 32 113 35 114 38 L108 40 C107 38 106 37 104 37 C101 37 98 39 98 43 C98 47 102 50 106 53 L114 53 L114 57 L90 57 L90 53 L96 50 C94 48 92 45 92 42 Z"
                      fill="#BAC7E5"
                      fillOpacity="0.9"
                      stroke="#35405A"
                      strokeWidth="0.5"
                    />
                    <line x1="90" y1="46" x2="106" y2="46" stroke="#BAC7E5" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>

              {/* Floating Widget: EUR -> GBP */}
              <div className="rounded-2xl border border-white/10 bg-[#0A0E18]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A365D] text-[9px] font-bold text-white ring-2 ring-[#0A0E18]">
                        🇪🇺
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7B1113] text-[9px] font-bold text-white ring-2 ring-[#0A0E18]">
                        🇬🇧
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">
                        EUR → GBP
                      </div>
                      <div className="text-[9px] text-zinc-400">
                        09:34 · C. Perez
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-semibold text-white">
                      +£10,000
                    </div>
                    <div className="text-[9px] text-zinc-400">
                      -€11,930.40
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Transfer to 150+ destinations (Earth Globe with Orbits) - CENTER HERO */}
            <div
              onClick={() => setActiveCard(2)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-[26px] border bg-gradient-to-b from-[#141A2E] via-[#0E1322] to-[#080B14] p-5 transition-all duration-300 md:min-w-0 md:min-h-[490px] cursor-pointer ${
                activeCard === 2
                  ? "border-[#FF5A1F]/60 shadow-[0_16px_50px_rgba(255,90,31,0.18)]"
                  : "border-white/[0.12] hover:border-white/25"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-white">
                  Transfer to 150+ destinations
                </h3>
              </div>

              {/* 3D Earth Globe with Glowing Orbits */}
              <div className="relative my-6 flex h-[230px] items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center">
                  {/* Subtle globe atmospheric glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1B2745] via-[#2D3F6A] to-transparent opacity-40 blur-xl" />

                  {/* Dark globe sphere */}
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-[#050811] via-[#101728] to-[#253352] shadow-2xl">
                    {/* Continents texture representation */}
                    <div className="absolute inset-0 opacity-40 mix-blend-screen">
                      <svg viewBox="0 0 160 160" className="h-full w-full">
                        <path
                          d="M30 65 Q45 55 60 70 T95 65 T125 90 T145 120"
                          stroke="#7B8DAF"
                          strokeWidth="18"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.35"
                        />
                        <path
                          d="M40 100 Q65 115 85 95 T120 135"
                          stroke="#607297"
                          strokeWidth="12"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.3"
                        />
                      </svg>
                    </div>

                    {/* Sphere specular highlight */}
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
                  </div>

                  {/* Orbital trajectory paths */}
                  <svg
                    viewBox="0 0 200 200"
                    className="pointer-events-none absolute -inset-3 h-[200px] w-[200px]"
                    fill="none"
                  >
                    {/* Orbit 1: White/Cyan delicate loop */}
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="92"
                      ry="48"
                      transform="rotate(-28 100 100)"
                      stroke="rgba(190, 215, 255, 0.45)"
                      strokeWidth="1"
                    />

                    {/* Orbit 2: Orange active routing trajectory */}
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="96"
                      ry="54"
                      transform="rotate(35 100 100)"
                      stroke="#FF5A1F"
                      strokeWidth="1.5"
                      opacity="0.85"
                    />

                    {/* Orange routing waypoint beacon on orbit */}
                    <circle
                      cx="168"
                      cy="75"
                      r="4.5"
                      fill="#FF5A1F"
                      className="shadow-[0_0_12px_#FF5A1F]"
                    />
                    <circle
                      cx="168"
                      cy="75"
                      r="9"
                      stroke="#FF5A1F"
                      strokeWidth="1"
                      opacity="0.5"
                      className="animate-ping"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Widget: 3 Action Circle Buttons */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Send or Route"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-110 hover:border-white/40 hover:bg-white/20"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Bridge or Swap"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-110 hover:border-white/40 hover:bg-white/20"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Sync Network"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-transform hover:scale-110 hover:border-white/40 hover:bg-white/20"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </button>
              </div>
            </div>

            {/* CARD 4: Make your spend stress-free (Fanned Cards) */}
            <div
              onClick={() => setActiveCard(3)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-[26px] border bg-gradient-to-b from-[#111625] via-[#0D111D] to-[#080B12] p-5 transition-all duration-300 md:min-w-0 md:min-h-[490px] cursor-pointer ${
                activeCard === 3
                  ? "border-[#FF5A1F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-white/95">
                  Make your spend stress-free
                </h3>
              </div>

              {/* 3D Titanium Fanned Cards Graphic */}
              <div className="relative my-6 flex h-[230px] items-center justify-center">
                <div className="relative h-44 w-44">
                  {/* Rear Card (Gold/Bronze) */}
                  <div
                    className="absolute right-2 top-2 h-36 w-24 rounded-xl border border-[#9A7B48]/50 bg-gradient-to-br from-[#4D3A1B] via-[#2F2312] to-[#18120A] shadow-xl"
                    style={{ transform: "rotate(18deg)" }}
                  >
                    <div className="p-2 text-[8px] font-bold text-[#E2BA72]/70 tracking-wider">
                      SYNXEX
                    </div>
                  </div>

                  {/* Middle Card (Silver/White) */}
                  <div
                    className="absolute right-7 top-4 h-36 w-24 rounded-xl border border-white/30 bg-gradient-to-br from-[#D9DFEC] via-[#8C98B2] to-[#404A60] shadow-xl"
                    style={{ transform: "rotate(6deg)" }}
                  >
                    <div className="p-2 text-[8px] font-bold text-white/90 tracking-wider">
                      SYNXEX
                    </div>
                  </div>

                  {/* Front Card (Black Titanium Metal) */}
                  <div
                    className="absolute left-3 top-5 h-36 w-24 rounded-xl border border-white/20 bg-gradient-to-br from-[#1E2330] via-[#10141D] to-[#07090E] p-2.5 shadow-2xl"
                    style={{ transform: "rotate(-8deg)" }}
                  >
                    {/* Chip */}
                    <div className="h-4 w-5 rounded bg-gradient-to-tr from-[#D1A757] to-[#F3D794] opacity-80 border border-[#8B6B2B]" />
                    <div className="mt-14 text-[8px] font-bold tracking-widest text-zinc-300">
                      SYNXEX
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget: Spend budget progress */}
              <div className="rounded-2xl border border-white/10 bg-[#0A0E18]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-white">£75,080</span>
                  <span className="text-[10px] text-zinc-400">Left of £100,000</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-[#FF5A1F]" />
                </div>
                <div className="mt-2 text-[9px] text-zinc-400">
                  Resets on the 1st of each month
                </div>
              </div>
            </div>

            {/* CARD 5: Accept payments easily, anywhere (POS Hardware) */}
            <div
              onClick={() => setActiveCard(4)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-[26px] border bg-gradient-to-b from-[#111625] via-[#0D111D] to-[#080B12] p-5 transition-all duration-300 md:min-w-0 md:min-h-[490px] cursor-pointer ${
                activeCard === 4
                  ? "border-[#FF5A1F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-white/95">
                  Accept payments easily, anywhere
                </h3>
              </div>

              {/* 3D POS Terminal on Pedestal */}
              <div className="relative my-6 flex h-[230px] items-center justify-center">
                <svg
                  viewBox="0 0 200 220"
                  className="h-full w-full max-w-[190px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Fluted Base Pedestal */}
                  <path
                    d="M40 145 L110 115 L180 145 L110 175 Z"
                    fill="#151C2C"
                    stroke="#27324B"
                    strokeWidth="1"
                  />
                  <path d="M40 145 L110 175 L110 215 L40 185 Z" fill="#0E131E" />
                  <path d="M110 175 L180 145 L180 185 L110 215 Z" fill="#1B2336" />
                  {/* Rib lines on pedestal */}
                  <line x1="60" y1="154" x2="60" y2="194" stroke="#1B2336" strokeWidth="1.5" />
                  <line x1="85" y1="164" x2="85" y2="204" stroke="#1B2336" strokeWidth="1.5" />
                  <line x1="135" y1="164" x2="135" y2="204" stroke="#253049" strokeWidth="1.5" />
                  <line x1="160" y1="154" x2="160" y2="194" stroke="#253049" strokeWidth="1.5" />

                  {/* POS Terminal handheld reader (Angled) */}
                  <g transform="translate(45, -15) rotate(14 110 80)">
                    <rect
                      x="70"
                      y="40"
                      width="52"
                      height="88"
                      rx="10"
                      fill="#0C101A"
                      stroke="#323E5C"
                      strokeWidth="1.5"
                    />
                    {/* Screen */}
                    <rect x="76" y="50" width="40" height="42" rx="4" fill="#05070C" />
                    <text x="80" y="74" fill="#8FA4CF" fontSize="6.5" fontWeight="bold" letterSpacing="0.05em">
                      SYNXEX
                    </text>
                  </g>

                  {/* Square Contactless Dock (Puck) */}
                  <g transform="translate(10, 20)">
                    <rect
                      x="45"
                      y="110"
                      width="42"
                      height="42"
                      rx="10"
                      fill="#1E273A"
                      stroke="#48567A"
                      strokeWidth="1"
                    />
                    <circle cx="66" cy="131" r="11" stroke="#3A4664" strokeWidth="1" fill="#131926" />
                    {/* Contactless symbol dots */}
                    <circle cx="66" cy="131" r="2.5" fill="#FF5A1F" />
                  </g>
                </svg>
              </div>

              {/* Floating Widget: Iced Latte payment */}
              <div className="rounded-2xl border border-white/10 bg-[#0A0E18]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-8 items-center justify-center rounded bg-[#1A1F71] text-[8px] font-black italic text-white">
                      VISA
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">
                        Iced latte · 0034
                      </div>
                      <div className="text-[9px] text-zinc-400">07:15</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white">+£5.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots matching screenshot */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 ${
                activeCard === index
                  ? "h-2 w-2 rounded-full bg-white scale-125"
                  : "h-1.5 w-1.5 rounded-full bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Button matching screenshot */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/banking-cards"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Explore Banking &amp; Cards
          </Link>
        </div>
      </div>
    </section>
  );
}
