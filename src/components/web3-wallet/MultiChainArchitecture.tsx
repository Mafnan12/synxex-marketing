"use client";

import React, { useState } from "react";

export default function MultiChainArchitecture() {
  const [activeCard, setActiveCard] = useState(2); // Center card active by default

  return (
    <section
      id="networks"
      className="relative overflow-hidden bg-[#09090B] py-20 sm:py-24 lg:py-28"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/4 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(58,13,32,0.7) 0%, rgba(198,74,28,0.28) 42%, transparent 76%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
            One wallet. Multiple networks.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            SynxEx is exploring a wallet concept with 31 network options. These are design concepts; network connections are not active.
          </p>

        </div>

        {/* 5 Cards Row matching the screenshot */}
        <div className="mt-16 md:mt-20">
          <div className="flex gap-4 overflow-x-auto pb-6 pt-2 no-scrollbar md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
            {/* CARD 1: Put your assets to work (Fluted Columns) */}
            <div
              onClick={() => setActiveCard(0)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border bg-[#141416] p-5 transition-colors duration-300 md:min-w-0 md:min-h-[400px] cursor-pointer ${
                activeCard === 0
                  ? "border-[#C64A1C]/70 shadow-[0_12px_40px_rgba(198,74,28,0.2)]"
                  : "border-white/[0.08] hover:border-[#C64A1C]/50"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-[#F4F4F5]/95">
                  View digital assets by network
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
                      <stop offset="0%" stopColor="#241018" />
                      <stop offset="40%" stopColor="#170B10" />
                      <stop offset="70%" stopColor="#10080B" />
                      <stop offset="100%" stopColor="#0B0708" />
                    </linearGradient>
                    <linearGradient id="colG2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#5A1720" />
                      <stop offset="35%" stopColor="#210D14" />
                      <stop offset="70%" stopColor="#1A0B10" />
                      <stop offset="100%" stopColor="#0D0709" />
                    </linearGradient>
                    <linearGradient id="colRim" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C64A1C" />
                      <stop offset="100%" stopColor="#5A1720" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Left Column (Medium height) */}
                  <g>
                    {/* Body */}
                    <path
                      d="M32 90 L72 82 L72 215 L32 215 Z"
                      fill="url(#colG1)"
                      stroke="#5A1720"
                      strokeWidth="0.75"
                    />
                    {/* Flutes/ribs */}
                    <path d="M42 88 L42 215" stroke="#1A0B10" strokeWidth="1.5" />
                    <path d="M52 86 L52 215" stroke="#1A0B10" strokeWidth="1.5" />
                    <path d="M62 84 L62 215" stroke="#1A0B10" strokeWidth="1.5" />
                    {/* Warm accent line */}
                    <path d="M72 82 L72 215" stroke="url(#colRim)" strokeWidth="1.5" />
                    {/* Top Face */}
                    <ellipse cx="52" cy="86" rx="20" ry="7" fill="#5A1720" stroke="#5A1720" strokeWidth="0.75" />
                    <ellipse cx="52" cy="86" rx="12" ry="4" fill="#170B10" stroke="#C64A1C" strokeWidth="0.75" strokeDasharray="2 2" />
                  </g>

                  {/* Center Column (Tallest) */}
                  <g>
                    {/* Body */}
                    <path
                      d="M80 48 L130 38 L130 215 L80 215 Z"
                      fill="url(#colG2)"
                      stroke="#5A1720"
                      strokeWidth="0.75"
                    />
                    {/* Flutes/ribs */}
                    <path d="M92 46 L92 215" stroke="#1A0B10" strokeWidth="2" />
                    <path d="M105 43 L105 215" stroke="#1A0B10" strokeWidth="2" />
                    <path d="M118 41 L118 215" stroke="#1A0B10" strokeWidth="2" />
                    {/* Glowing orange groove */}
                    <path d="M80 48 L80 215" stroke="#C64A1C" strokeWidth="1.2" opacity="0.9" />
                    {/* Top Face */}
                    <ellipse cx="105" cy="43" rx="25" ry="9" fill="#5A1720" stroke="#A1A1AA" strokeWidth="0.75" />
                    <ellipse cx="105" cy="43" rx="16" ry="5.5" fill="#210D14" stroke="#E07847" strokeWidth="0.75" />
                  </g>

                  {/* Right Column (Shorter) */}
                  <g>
                    {/* Body */}
                    <path
                      d="M125 125 L165 118 L165 215 L125 215 Z"
                      fill="url(#colG1)"
                      stroke="#5A1720"
                      strokeWidth="0.75"
                    />
                    {/* Flutes */}
                    <path d="M138 123 L138 215" stroke="#1A0B10" strokeWidth="1.5" />
                    <path d="M152 120 L152 215" stroke="#1A0B10" strokeWidth="1.5" />
                    {/* Top Face */}
                    <ellipse cx="145" cy="121" rx="20" ry="7" fill="#32101E" stroke="#5A1720" strokeWidth="0.75" />
                    <ellipse cx="145" cy="121" rx="11" ry="3.8" fill="#13090C" stroke="#C64A1C" strokeWidth="0.75" />
                  </g>
                </svg>
              </div>

              {/* Example asset list */}
              <div className="rounded-2xl border border-white/10 bg-[#10070A]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C64A1C] text-[#F4F4F5] shadow-[0_0_12px_rgba(198,74,28,0.45)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-[#F4F4F5]">Asset list</span>
                  </div>
                  <span className="text-xs font-semibold tracking-tight text-[#F4F4F5]">
                    Concept view
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2: Manage money in multiple currencies (Stacked Plates) */}
            <div
              onClick={() => setActiveCard(1)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border bg-[#141416] p-5 transition-colors duration-300 md:min-w-0 md:min-h-[400px] cursor-pointer ${
                activeCard === 1
                  ? "border-[#C64A1C]/70 shadow-[0_12px_40px_rgba(198,74,28,0.2)]"
                  : "border-white/[0.08] hover:border-[#C64A1C]/50"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-[#F4F4F5]/95">
                  Select a network
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
                      <stop offset="0%" stopColor="#5A1720" />
                      <stop offset="100%" stopColor="#1A0B10" />
                    </linearGradient>
                    <linearGradient id="plateEdge" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5A1720" />
                      <stop offset="100%" stopColor="#0D0709" />
                    </linearGradient>
                  </defs>

                  {/* Bottom Plate */}
                  <g transform="translate(0, 50)">
                    <path
                      d="M35 110 L100 80 L165 110 L100 140 Z"
                      fill="#10070A"
                      stroke="#210D14"
                      strokeWidth="1"
                    />
                    <path
                      d="M35 110 L100 140 L100 152 L35 122 Z"
                      fill="#0B0708"
                    />
                    <path
                      d="M100 140 L165 110 L165 122 L100 152 Z"
                      fill="#170B10"
                    />
                  </g>

                  {/* Middle Plate with symbol */}
                  <g transform="translate(0, 15)">
                    <path
                      d="M35 80 L100 50 L165 80 L100 110 Z"
                      fill="#210D14"
                      stroke="#5A1720"
                      strokeWidth="1"
                    />
                    <path
                      d="M35 80 L100 110 L100 122 L35 92 Z"
                      fill="#11080B"
                    />
                    <path
                      d="M100 110 L165 80 L165 92 L100 122 Z"
                      fill="#26101A"
                    />
                    {/* Small dot on edge */}
                    <circle cx="92" cy="116" r="2.5" fill="#C64A1C" />
                  </g>

                  {/* Top Plate with embossed Currency Symbol */}
                  <g transform="translate(0, -20)">
                    <path
                      d="M35 50 L100 20 L165 50 L100 80 Z"
                      fill="url(#plateTop)"
                      stroke="#5A1720"
                      strokeWidth="1"
                    />
                    <path
                      d="M35 50 L100 80 L100 94 L35 64 Z"
                      fill="#16090C"
                    />
                    <path
                      d="M100 80 L165 50 L165 64 L100 94 Z"
                      fill="#32101E"
                    />
                    {/* Small amber light dot on plate edge */}
                    <circle cx="92" cy="88" r="2.5" fill="#E07847" />

                    {/* Network nodes */}
                    <line x1="88" y1="43" x2="112" y2="43" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="88" cy="43" r="4" fill="#C64A1C" />
                    <circle cx="100" cy="43" r="4" fill="#FFFFFF" />
                    <circle cx="112" cy="43" r="4" fill="#C64A1C" />
                  </g>
                </svg>
              </div>

              {/* Example network selector */}
              <div className="rounded-2xl border border-white/10 bg-[#10070A]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5A1720] text-[9px] font-bold text-[#F4F4F5] ring-2 ring-[#10070A]">
                        N
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7B1113] text-[9px] font-bold text-[#F4F4F5] ring-2 ring-[#10070A]">
                        N
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#F4F4F5]">
                        Network selection
                      </div>
                      <div className="text-[9px] text-zinc-400">
                        Choose a network
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-semibold text-[#F4F4F5]">
                      Network list
                    </div>
                    <div className="text-[9px] text-zinc-400">
                      Concept only
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Review a connection */}
            <div
              onClick={() => setActiveCard(2)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border bg-[#141416] p-5 transition-colors duration-300 md:min-w-0 md:min-h-[400px] cursor-pointer ${
                activeCard === 2
                  ? "border-[#C64A1C]/80 shadow-[0_16px_50px_rgba(198,74,28,0.3)]"
                  : "border-white/[0.12] hover:border-[#C64A1C]/55"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-[#F4F4F5]">
                  Review a connection
                </h3>
              </div>

              {/* 3D Earth Globe with Glowing Orbits */}
              <div className="relative my-6 flex h-[230px] items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center">
                  {/* Subtle globe atmospheric glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5A1720] via-[#5A1720] to-transparent opacity-40 blur-xl" />

                  {/* Dark globe sphere */}
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-[#070506] via-[#10070A] to-[#5A1720] shadow-2xl">
                    {/* Continents texture representation */}
                    <div className="absolute inset-0 opacity-40 mix-blend-screen">
                      <svg viewBox="0 0 160 160" className="h-full w-full">
                        <path
                          d="M30 65 Q45 55 60 70 T95 65 T125 90 T145 120"
                          stroke="#CFD1D6"
                          strokeWidth="18"
                          strokeLinecap="round"
                          fill="none"
                          opacity="0.35"
                        />
                        <path
                          d="M40 100 Q65 115 85 95 T120 135"
                          stroke="#B0B0B8"
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
                      stroke="rgba(255, 255, 255, 0.5)"
                      strokeWidth="1"
                    />

                    {/* Orbit 2: Orange active routing trajectory */}
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="96"
                      ry="54"
                      transform="rotate(35 100 100)"
                      stroke="#C64A1C"
                      strokeWidth="1.5"
                      opacity="0.85"
                    />

                    {/* Orange routing waypoint beacon on orbit */}
                    <circle
                      cx="168"
                      cy="75"
                      r="4.5"
                      fill="#C64A1C"
                      className="shadow-[0_0_12px_#C64A1C]"
                    />
                    <circle
                      cx="168"
                      cy="75"
                      r="9"
                      stroke="#C64A1C"
                      strokeWidth="1"
                      opacity="0.5"
                      className="animate-ping"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                <span className="rounded-full border border-white/10 px-3 py-2">Network</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Asset</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Connection</span>
              </div>
            </div>

            {/* CARD 4: Make your spend stress-free (Fanned Cards) */}
            <div
              onClick={() => setActiveCard(3)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border bg-[#141416] p-5 transition-colors duration-300 md:min-w-0 md:min-h-[400px] cursor-pointer ${
                activeCard === 3
                  ? "border-[#C64A1C]/70 shadow-[0_12px_40px_rgba(198,74,28,0.2)]"
                  : "border-white/[0.08] hover:border-[#C64A1C]/50"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-[#F4F4F5]/95">
                  Review a transaction
                </h3>
              </div>

              <div className="my-6 flex h-[230px] items-center justify-center">
                <div className="w-full max-w-[240px] space-y-3 px-4">
                  {[
                    ["Network", "Selected network"],
                    ["Recipient", "Review destination"],
                    ["Permission", "Confirm before action"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 py-3 text-xs">
                      <span className="text-zinc-500">{label}</span>
                      <span className="text-zinc-200">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example transaction review */}
              <div className="rounded-2xl border border-white/10 bg-[#10070A]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-[#F4F4F5]">Transaction details</span>
                  <span className="text-[10px] text-zinc-400">Review before approval</span>
                </div>
                <div className="mt-3 pt-2 text-[9px] text-zinc-400">
                  Illustrative interface · not a live transaction
                </div>
              </div>
            </div>

            {/* CARD 5: Accept payments easily, anywhere (POS Hardware) */}
            <div
              onClick={() => setActiveCard(4)}
              className={`group relative flex min-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border bg-[#141416] p-5 transition-colors duration-300 md:min-w-0 md:min-h-[400px] cursor-pointer ${
                activeCard === 4
                  ? "border-[#C64A1C]/70 shadow-[0_12px_40px_rgba(198,74,28,0.2)]"
                  : "border-white/[0.08] hover:border-[#C64A1C]/50"
              }`}
            >
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight text-[#F4F4F5]/95">
                  Connect to Web3 applications
                </h3>
              </div>

              {/* Web3 connection diagram */}
              <div className="relative my-6 flex h-[230px] items-center justify-center">
                <svg viewBox="0 0 200 180" className="h-full w-full max-w-[190px]" fill="none" aria-hidden="true">
                  <rect x="56" y="46" width="88" height="76" rx="14" fill="#16090C" stroke="#5A1720" strokeWidth="1.5" />
                  <circle cx="100" cy="84" r="17" fill="#5A1720" stroke="#C64A1C" strokeWidth="1.5" />
                  <circle cx="100" cy="84" r="5" fill="#FF5A1F" />
                  <path d="M83 84H68M117 84h15M100 67V53M100 101v15" stroke="#A1A1AA" strokeWidth="1.5" />
                  <circle cx="62" cy="84" r="6" fill="#C64A1C" />
                  <circle cx="138" cy="84" r="6" fill="#C64A1C" />
                  <circle cx="100" cy="47" r="6" fill="#C64A1C" />
                  <circle cx="100" cy="121" r="6" fill="#C64A1C" />
                </svg>
              </div>

              {/* Example application connection */}
              <div className="rounded-2xl border border-white/10 bg-[#10070A]/85 p-3.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-8 items-center justify-center rounded bg-[#5A1720] text-[8px] font-black italic text-[#F4F4F5]">
                      DAPP
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#F4F4F5]">
                        Application connection
                      </div>
                      <div className="text-[9px] text-zinc-400">Permission review</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#F4F4F5]">Concept</span>
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

        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          Wallet interface concept · no live transactions
        </p>
      </div>
    </section>
  );
}
