"use client";

import React from "react";

export function FutureRoadmapCards() {
  return (
    <section id="future" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="mx-auto max-w-[1380px]">
        {/* Centered Header Section (Mirroring Reference Design) */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#FF8B68]">
            FUTURE / COMING SOON
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
            Built to evolve with intention.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl mx-auto font-light">
            These are planned directions for the SynxEx experience. They are not active services, agents, or financial products.
          </p>
        </div>

        {/* 3-Column Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* =========================================================================
              CARD 01: Research Workspaces
              Visual: Floating Card with Glowing Ambient Halo & Orbiting Crypto Tokens
              ========================================================================= */}
          <div className="group rounded-[2rem] bg-[#0C0C0E] border border-white/[0.06] p-8 sm:p-10 flex flex-col justify-between min-h-[480px] relative overflow-hidden transition-all duration-500 hover:border-[#FF5A1F]/40 hover:shadow-2xl hover:shadow-[#FF5A1F]/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5A1F]/5 blur-[70px] pointer-events-none group-hover:bg-[#FF5A1F]/10 transition-all duration-500" />

            {/* Top Illustration Area */}
            <div className="h-56 flex items-center justify-center my-auto w-full relative">
              <svg viewBox="0 0 280 200" className="w-full h-full max-h-[190px]" fill="none">
                <defs>
                  {/* Card Glow Filter */}
                  <filter id="cardHalo" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#FF5A1F" floodOpacity="0.28" />
                  </filter>
                  <linearGradient id="cardDarkGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2A1B16" />
                    <stop offset="50%" stopColor="#1C1310" />
                    <stop offset="100%" stopColor="#100A08" />
                  </linearGradient>
                </defs>

                {/* Floating Crypto Token 1 (Left - Blue Currency Token) */}
                <g transform="translate(68, 48)" className="transition-transform duration-700 group-hover:-translate-y-1">
                  <circle cx="16" cy="16" r="15" fill="#132B45" stroke="#2563EB" strokeWidth="1.2" />
                  <circle cx="16" cy="16" r="10" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="16" y="20" fill="#93C5FD" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">$</text>
                </g>

                {/* Floating Crypto Token 2 (Center - Orange Protocol Token) */}
                <g transform="translate(130, 30)" className="transition-transform duration-700 group-hover:-translate-y-1.5">
                  <circle cx="17" cy="17" r="16" fill="#42160C" stroke="#FF5A1F" strokeWidth="1.2" />
                  <path d="M12 18 C12 14, 22 14, 22 18 C22 22, 12 22, 12 18 Z" fill="#FF8B68" />
                  <circle cx="17" cy="17" r="3" fill="#FFFFFF" />
                </g>

                {/* Floating Crypto Token 3 (Right - Teal/Green Token) */}
                <g transform="translate(195, 42)" className="transition-transform duration-700 group-hover:-translate-y-1">
                  <circle cx="16" cy="16" r="15" fill="#0D3025" stroke="#10B981" strokeWidth="1.2" />
                  <path d="M11 14 H21 M16 14 V22" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Main Dark Floating Smart Card */}
                <g filter="url(#cardHalo)" className="transition-transform duration-500 group-hover:scale-[1.02] origin-center">
                  <rect
                    x="75"
                    y="88"
                    width="130"
                    height="80"
                    rx="12"
                    fill="url(#cardDarkGradient)"
                    stroke="#FF7A1A"
                    strokeWidth="1"
                    strokeOpacity="0.45"
                  />

                  {/* Microchip Contact Pad */}
                  <rect x="90" y="104" width="16" height="12" rx="3" fill="#3D2018" stroke="#FF8B68" strokeWidth="0.8" />
                  <line x1="90" y1="110" x2="106" y2="110" stroke="#FF8B68" strokeWidth="0.6" />
                  <line x1="98" y1="104" x2="98" y2="116" stroke="#FF8B68" strokeWidth="0.6" />

                  {/* Embossed Card Info Lines */}
                  <line x1="90" y1="148" x2="125" y2="148" stroke="#FF8B68" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
                  <line x1="90" y1="154" x2="110" y2="154" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Contactless Wave Logo */}
                  <circle cx="180" cy="148" r="4" fill="#2DD4BF" opacity="0.8" />
                  <circle cx="188" cy="148" r="4" fill="#059669" opacity="0.8" />
                </g>
              </svg>
            </div>

            {/* Bottom Content Area */}
            <div className="pt-6 relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#FF8B68] font-semibold">01</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-400 font-medium">
                  Exploring
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Research workspaces
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 font-light">
                A planned environment for reviewing structured context, source material, and analytical notes.
              </p>
            </div>
          </div>

          {/* =========================================================================
              CARD 02: Governed Automations
              Visual: Vibrant Orange Cold Card + Sleek Authorization Terminal Device
              ========================================================================= */}
          <div className="group rounded-[2rem] bg-[#0C0C0E] border border-white/[0.06] p-8 sm:p-10 flex flex-col justify-between min-h-[480px] relative overflow-hidden transition-all duration-500 hover:border-[#FF5A1F]/40 hover:shadow-2xl hover:shadow-[#FF5A1F]/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5A1F]/5 blur-[70px] pointer-events-none group-hover:bg-[#FF5A1F]/10 transition-all duration-500" />

            {/* Top Illustration Area */}
            <div className="h-56 flex items-center justify-center my-auto w-full relative">
              <svg viewBox="0 0 280 200" className="w-full h-full max-h-[190px]" fill="none">
                <defs>
                  {/* Orange Card Gradient */}
                  <linearGradient id="orangeCardGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF7A30" />
                    <stop offset="50%" stopColor="#EA580C" />
                    <stop offset="100%" stopColor="#C2410C" />
                  </linearGradient>
                  {/* Device Drop Shadow */}
                  <filter id="deviceShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Floating Angled Orange Card on Left */}
                <g
                  transform="translate(68, 70) rotate(-14)"
                  className="transition-transform duration-500 group-hover:rotate-[-10deg] origin-center"
                >
                  {/* Card Base */}
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="62"
                    rx="8"
                    fill="url(#orangeCardGrad)"
                    stroke="#FF9E66"
                    strokeWidth="1"
                    className="drop-shadow-xl"
                  />
                  {/* Chip */}
                  <rect x="12" y="14" width="14" height="10" rx="2" fill="#FED7AA" opacity="0.9" />
                  {/* Magnetic Stripe / Lines */}
                  <line x1="12" y1="36" x2="45" y2="36" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <line x1="12" y1="44" x2="30" y2="44" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Dark Security Terminal / Keypad Reader on Right */}
                <g filter="url(#deviceShadow)" transform="translate(170, 48)" className="transition-transform duration-500 group-hover:translate-y-[-2px]">
                  {/* Device Chassis */}
                  <rect
                    x="0"
                    y="0"
                    width="62"
                    height="108"
                    rx="14"
                    fill="#151518"
                    stroke="#2A2A30"
                    strokeWidth="1.5"
                  />

                  {/* Screen Display Inset */}
                  <rect
                    x="8"
                    y="10"
                    width="46"
                    height="32"
                    rx="6"
                    fill="#26120E"
                    stroke="#4D1F17"
                    strokeWidth="1"
                  />

                  {/* Keypad Dot Matrix (3x3 grid) */}
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                      <circle
                        key={`key-${row}-${col}`}
                        cx={col * 14 + 17}
                        cy={row * 14 + 56}
                        r="2.5"
                        fill="#3F3F46"
                      />
                    ))
                  )}
                </g>
              </svg>
            </div>

            {/* Bottom Content Area */}
            <div className="pt-6 relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#FF8B68] font-semibold">02</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-400 font-medium">
                  Planned
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Governed automations
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 font-light">
                Future workflow tooling designed around explicit policies, approvals, and clear human control.
              </p>
            </div>
          </div>

          {/* =========================================================================
              CARD 03: Personalized Intelligence
              Visual: Minimalist Green Sprout Growing with Orange Seed & "COMING SOON" Pill
              ========================================================================= */}
          <div className="group rounded-[2rem] bg-[#0C0C0E] border border-white/[0.06] p-8 sm:p-10 flex flex-col justify-between min-h-[480px] relative overflow-hidden transition-all duration-500 hover:border-[#FF5A1F]/40 hover:shadow-2xl hover:shadow-[#FF5A1F]/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5A1F]/5 blur-[70px] pointer-events-none group-hover:bg-[#FF5A1F]/10 transition-all duration-500" />

            {/* Top Illustration Area */}
            <div className="h-56 flex items-center justify-center my-auto w-full relative">
              <svg viewBox="0 0 280 200" className="w-full h-full max-h-[190px]" fill="none">
                {/* Subtle Ground / Base Pedestal */}
                <ellipse cx="140" cy="155" rx="38" ry="8" fill="#141416" />

                {/* Growing Slender Plant Stem */}
                <line
                  x1="140"
                  y1="155"
                  x2="140"
                  y2="75"
                  stroke="#38B26C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Left Leaf */}
                <path
                  d="M140 105 C122 105, 115 88, 126 84 C138 80, 140 98, 140 105 Z"
                  fill="#4EBE7D"
                />

                {/* Right Leaf */}
                <path
                  d="M140 92 C158 92, 165 74, 154 70 C142 66, 140 85, 140 92 Z"
                  fill="#4EBE7D"
                />

                {/* Glowing Center Orange Bud / Seed */}
                <circle cx="140" cy="95" r="4.5" fill="#FF5A1F" className="animate-pulse" />
                <circle cx="140" cy="95" r="2.5" fill="#FFD18A" />
              </svg>
            </div>

            {/* Bottom Content Area */}
            <div className="pt-6 relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-[#FF8B68] font-semibold">03</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-400 font-medium">
                  Future
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Personalized intelligence
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 font-light">
                A coming-soon vision for interfaces that adapt presentation and context to defined user preferences.
              </p>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
