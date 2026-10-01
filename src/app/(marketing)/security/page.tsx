'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SecurityPage() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const securityLayers = [
    {
      title: "Identity Verification",
      subtitle: "Authentication & Access Control",
      description: "Future architecture may incorporate multi-factor verification mechanisms to establish secure user identity bounds before granting platform access.",
      status: "Concept Phase"
    },
    {
      title: "Secure Transport",
      subtitle: "Encrypted Data Channels",
      description: "Designed to utilize standard transport-layer protocols and cryptographic controls intended to protect data in transit against interception.",
      status: "Planned Architecture"
    },
    {
      title: "Protected Processing",
      subtitle: "Isolated Execution Environments",
      description: "Exploration into segregated processing environments designed to handle sensitive information with minimized exposure risks.",
      status: "Under Review"
    },
    {
      title: "Controlled Access",
      subtitle: "Granular Permissions",
      description: "Future permission frameworks aimed at enforcing strict least-privilege principles across platform interactions and data management.",
      status: "Concept Phase"
    }
  ];

  const monitoringMetrics = [
    { label: "Account State", value: "Protected Status", detail: "Conceptual oversight model" },
    { label: "Activity Logs", value: "Real-time Signals", detail: "Designed for continuous evaluation" },
    { label: "Risk Assessment", value: "Automated Triggers", detail: "Exploring anomaly detection" },
    { label: "System Alerts", value: "Ready Infrastructure", detail: "Incident response framework" }
  ];

  const architectureStack = [
    { name: "User Interface", role: "Client-side interaction & authenticated portals" },
    { name: "Identity & Access", role: "Multi-layered authentication concepts & session governance" },
    { name: "Secure Transport", role: "Encrypted communication channels & data protection" },
    { name: "Processing Core", role: "Isolated business logic & secure data handling" },
    { name: "Monitoring & Threat Detection", role: "Continuous signal evaluation & audit logging" },
    { name: "Governance & Oversight", role: "Human-in-the-loop review & compliance verification" }
  ];

  const principles = [
    {
      title: "Privacy",
      description: "Respecting user information by design, minimizing data collection, and prioritizing strict confidentiality frameworks."
    },
    {
      title: "Protection",
      description: "Safeguarding accounts, information, and assets through layered defense concepts and rigorous access boundaries."
    },
    {
      title: "Transparency",
      description: "Making security operations and architectural intentions clear, understandable, and open to user comprehension."
    },
    {
      title: "Control",
      description: "Keeping permissions and access tightly defined, ensuring users and administrators maintain appropriate oversight."
    },
    {
      title: "Monitoring",
      description: "Continuously evaluating security signals and system health to identify potential risks before they materialize."
    },
    {
      title: "Governance",
      description: "Embedding robust human oversight and compliance-first thinking into the core of future system development."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-[#E25822]/30 selection:text-white">
      
      {/* SECTION 01 — HERO */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/[0.06]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#E25822]/10 via-[#8B0000]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
            Security built around <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#E25822]">trust.</span>
          </h1>

          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Synxe is exploring a security-first approach designed to protect accounts, information, assets, and future financial infrastructure through advanced architectural concepts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#principles"
              className="px-6 py-3 rounded-lg bg-[#E25822] hover:bg-[#c94b1a] text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-[#E25822]/20 flex items-center space-x-2"
            >
              <span>Explore Security</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#future-architecture"
              className="px-6 py-3 rounded-lg bg-[#101010] hover:bg-[#141414] border border-white/10 text-zinc-300 text-sm font-medium transition-all duration-200"
            >
              Future Architecture
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 02 — SECURITY PHILOSOPHY */}
      <section id="principles" className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.06] bg-[#070707]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">Security by design.</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              The core philosophy governing Synxe’s approach to financial technology centers on proactive defense, strict data minimization, and unwavering human oversight.
            </p>
          </div>

          {/* Timeline workflow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              { title: "Protect", desc: "Establishing strict perimeter controls and access boundaries." },
              { title: "Verify", desc: "Validating user identity and authentication parameters." },
              { title: "Monitor", desc: "Continuously observing activity signals for unexpected patterns." },
              { title: "Respond", desc: "Deploying automated and human-led threat mitigation protocols." },
              { title: "Improve", desc: "Iterating architecture based on threat intelligence and reviews." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0D0D0D] border border-white/[0.06] p-6 rounded-xl relative group hover:border-[#E25822]/40 transition-colors">
                <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — ACCOUNT PROTECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">Protecting access to your account.</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Account protection concepts focus on securing every interaction point. Future account architecture may include multi-layer verification, device awareness, and suspicious-activity detection models.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300 font-light">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E25822]" />
                <span>Future multi-factor authentication frameworks</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E25822]" />
                <span>Device-aware session protection mechanisms</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E25822]" />
                <span>Exploration into anomaly-based risk scoring</span>
              </li>
            </ul>
          </div>

          {/* Interactive Security Dashboard Concept */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-white/[0.06] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="text-xs font-mono text-zinc-400">Interactive Concept Preview</span>
              <span className="text-xs font-mono text-[#E25822] bg-[#E25822]/10 px-2.5 py-1 rounded">Simulation</span>
            </div>

            <div className="space-y-3">
              {securityLayers.map((layer, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeLayer === idx
                      ? 'bg-[#141414] border-[#E25822]/50 shadow-md'
                      : 'bg-[#101010] border-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{layer.title}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{layer.status}</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-light">{layer.subtitle}</div>
                  {activeLayer === idx && (
                    <p className="mt-3 text-xs text-zinc-300 font-light pt-3 border-t border-white/[0.06]">
                      {layer.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — DATA & ENCRYPTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.06] bg-[#070707]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">Protecting information at every layer.</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Future architecture may incorporate encryption and secure data-handling mechanisms appropriate to the information being protected, ensuring comprehensive privacy throughout the lifecycle.
            </p>
          </div>

          {/* Layered Data Protection Visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "User Data", detail: "Information input & management" },
              { label: "Secure Transport", detail: "Encrypted transmission paths" },
              { label: "Protected Processing", detail: "Segregated environment handling" },
              { label: "Controlled Access", detail: "Least-privilege authorization" },
              { label: "Secure Storage", detail: "Restricted data repositories" }
            ].map((node, idx) => (
              <div key={idx} className="bg-[#0D0D0D] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-medium text-white mb-1">{node.label}</h4>
                </div>
                <p className="text-xs text-zinc-400 font-light mt-4 pt-3 border-t border-white/[0.04]">{node.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — SECURITY MONITORING */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">Designed to detect. Designed to respond.</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Continuous monitoring concepts are intended to observe system health, risk signals, and anomaly patterns to ensure rapid awareness and incident mitigation.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              Note: Monitoring frameworks are conceptual models planned for future platform iterations.
            </p>
          </div>

          {/* Conceptual Interface Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {monitoringMetrics.map((metric, idx) => (
              <div key={idx} className="bg-[#0D0D0D] border border-white/[0.06] p-6 rounded-xl space-y-2">
                <div className="text-xs font-mono text-zinc-400">{metric.label}</div>
                <div className="text-lg font-medium text-white">{metric.value}</div>
                <div className="text-xs text-[#E25822] font-light">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — FUTURE SECURITY ARCHITECTURE */}
      <section id="future-architecture" className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.06] bg-[#070707]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">A security architecture designed for the future.</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              As Synxe evolves, security architecture is planned to expand across multiple layers of identity, transaction verification, threat detection, and governance.
            </p>
          </div>

          {/* Architectural Stack */}
          <div className="space-y-3">
            {architectureStack.map((item, idx) => (
              <div key={idx} className="bg-[#0D0D0D] border border-white/[0.06] p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/15 transition-colors">
                <div className="flex items-center space-x-4">
                  <h4 className="text-base font-medium text-white">{item.name}</h4>
                </div>
                <span className="text-xs text-zinc-400 font-light">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 & 08 — TRUST & SECURITY PRINCIPLES */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">Trust should be visible.</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Financial platforms require clear visibility into what is protected, how access works, and where human oversight is maintained.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="bg-[#0D0D0D] border border-white/[0.06] p-8 rounded-xl space-y-3 hover:border-white/15 transition-colors">
                <h4 className="text-lg font-medium text-white">{p.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — FUTURE / COMING SOON */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#070707]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl md:text-5xl font-light tracking-tight">Security evolves with the platform.</h3>

          <p className="text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
            Future Synxe development may introduce advanced security architecture, monitoring frameworks, risk controls, and trust verification systems as the platform scales.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/ai"
              className="px-6 py-3 rounded-lg bg-[#E25822] hover:bg-[#c94b1a] text-white text-sm font-medium transition-all shadow-lg shadow-[#E25822]/20"
            >
              Explore AI Capabilities
            </Link>
            <Link
              href="/web3"
              className="px-6 py-3 rounded-lg bg-[#101010] hover:bg-[#141414] border border-white/10 text-zinc-300 text-sm font-medium transition-all"
            >
              Explore Web3 Vision
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}