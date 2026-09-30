import React from 'react';

export default function SecurityPage() {
  const securityLayers = [
    {
      title: "Account access",
      subtitle: "Sign-in and account recovery",
      description: "The account access and recovery approach has not been announced.",
      status: "Design consideration"
    },
    {
      title: "Wallet permissions",
      subtitle: "Connections and approvals",
      description: "A wallet should make requested application permissions clear before a person approves them.",
      status: "Design consideration"
    },
    {
      title: "Transaction review",
      subtitle: "Review before confirmation",
      description: "Transaction details should be visible for review before confirmation.",
      status: "Design consideration"
    },
    {
      title: "Activity visibility",
      subtitle: "Understand account activity",
      description: "Clear activity history can help people understand wallet actions.",
      status: "Design consideration"
    }
  ];

  const architectureStack = [
    { name: "Account access", role: "Sign-in and recovery requirements" },
    { name: "Wallet permissions", role: "Application connections and approvals" },
    { name: "Transaction review", role: "Details shown before confirmation" },
    { name: "Activity history", role: "A clear record of wallet actions" }
  ];

  const principles = [
    {
      title: "Privacy",
      description: "Explain what account information is used and why."
    },
    {
      title: "Protection",
      description: "Make account access and wallet permissions clear."
    },
    {
      title: "Transparency",
      description: "Describe protection features and their current availability plainly."
    },
    {
      title: "Control",
      description: "Let people review requested access before approval."
    },
    {
      title: "Review",
      description: "Show transaction details before a person confirms an action."
    }
  ];

  return (
      <div className="min-h-screen bg-[#09090B] font-sans text-[#F4F4F5] selection:bg-[#ff5a1f]/30 selection:text-[#F4F4F5]">
      
      {/* HERO */}
      <section className="synxex-warm-hero relative isolate flex min-h-[min(760px,90svh)] items-center justify-center overflow-hidden px-5 py-24 sm:px-6 sm:py-28 lg:px-10">
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="flex w-full flex-col items-center gap-7">
                <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#F4F4F5] sm:text-6xl lg:text-[64px]">
                  Security through<br />
                  <span className="text-[#ffb38f]">clear review.</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                  SynxEx is exploring ways to make account access, wallet permissions, and transaction details easier to review. These are design priorities, not active security features.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="#principles" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#5A1720] px-6 py-3 text-sm font-medium text-[#F4F4F5] shadow-md transition-opacity hover:opacity-90">
                    Explore security priorities
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M17 7v10H7" />
                    </svg>
                  </a>
                  <a href="#future-architecture" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#F4F4F5] transition-colors hover:border-white/30 hover:bg-white/[0.08]">
                    Security architecture
                  </a>
                </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — SECURITY PHILOSOPHY */}
      <section id="principles" className="bg-[#09090B] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Security by design.</h3>
            <p className="text-zinc-400  leading-relaxed">
              The design focuses on account access, wallet permissions, and keeping people in control of approvals.
            </p>
          </div>

          {/* Timeline workflow */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Access", desc: "Understand how to access and recover an account." },
              { title: "Connect", desc: "Review an application’s requested wallet access." },
              { title: "Approve", desc: "Check transaction details before confirmation." },
              { title: "Review", desc: "Understand wallet activity." },
            ].map((item, idx) => (
              <div key={idx} className="py-3">
                <h4 className="text-lg font-medium text-[#F4F4F5] mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400  leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — ACCOUNT PROTECTION */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Protecting account access.</h3>
            <p className="text-zinc-400  leading-relaxed">
            Account protection is a design priority. The sign-in, recovery, and verification approach has not been announced.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300 ">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
                <span>Account access and recovery</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
                <span>Wallet connection permissions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
                <span>Transaction review before confirmation</span>
              </li>
            </ul>
          </div>

          {/* Interactive Security Dashboard Concept */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs font-mono text-zinc-400">Security design considerations</span>
            </div>

            <div className="space-y-3">
              {securityLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="py-4"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[#F4F4F5]">{layer.title}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{layer.status}</span>
                  </div>
                  <div className="text-xs text-zinc-400 ">{layer.subtitle}</div>
                  <p className="mt-3 pt-3 text-xs leading-5 text-zinc-300">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — DATA & ENCRYPTION */}
      <section className="bg-[#09090B] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Information and access.</h3>
            <p className="text-zinc-400  leading-relaxed">
              Security implementation details have not been announced. This concept highlights information access and wallet permissions as areas that need clear controls.
            </p>
          </div>

          {/* Layered Data Protection Visualization */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Account access", detail: "Sign-in and recovery" },
              { label: "Wallet access", detail: "Connection permissions" },
              { label: "Transaction", detail: "Review before confirmation" },
              { label: "Activity", detail: "Understand wallet actions" }
            ].map((node, idx) => (
              <div key={idx} className="py-3">
                <div>
                  <h4 className="text-base font-medium text-[#F4F4F5] mb-1">{node.label}</h4>
                </div>
                <p className="mt-4 pt-3 text-xs text-zinc-400 ">{node.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — SECURITY MONITORING */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Current security features.</h3>
            <p className="text-zinc-400  leading-relaxed">
              No wallet security or monitoring features have been announced. This page describes design considerations only.
            </p>
          </div>

          {/* Conceptual Interface Grid */}
          <div className="lg:col-span-7 space-y-3">
            {[
              ["Account recovery", "Not announced"],
              ["Wallet monitoring", "Not announced"],
              ["Security certifications", "None stated"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-6 py-3">
                <span className="text-sm text-zinc-300">{label}</span>
                <span className="text-xs text-zinc-500">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — FUTURE SECURITY ARCHITECTURE */}
      <section id="future-architecture" className="bg-[#09090B] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Security architecture.</h3>
            <p className="text-zinc-400  leading-relaxed">
              Architecture details and security commitments have not been published. Account access, wallet permissions, and transaction review remain design considerations.
            </p>
          </div>

          {/* Architectural Stack */}
          <div className="space-y-3">
            {architectureStack.map((item, idx) => (
              <div key={idx} className="flex flex-col py-4 sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <h4 className="text-base font-medium text-[#F4F4F5]">{item.name}</h4>
                </div>
                <span className="text-xs text-zinc-400 ">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST AND SECURITY PRINCIPLES */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Clear control builds trust.</h3>
            <p className="text-zinc-400  leading-relaxed">
              Explain how account access and wallet approvals work, and keep people in control of actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="space-y-3 py-3">
                <h4 className="text-lg font-medium text-[#F4F4F5]">{p.title}</h4>
                <p className="text-xs text-zinc-400  leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — FUTURE / COMING SOON */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 bg-[#09090B]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Security details will be shared as they are defined.</h3>

          <p className="text-zinc-400  max-w-xl mx-auto leading-relaxed">
            This page describes design priorities only. It does not represent an active wallet, monitoring service, security certification, or published implementation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/ai-agents"
              className="px-6 py-3 rounded-lg bg-[#ff5a1f] hover:bg-[#5A1720] text-[#F4F4F5] text-sm font-medium transition-all"
            >
              AI Agents
            </a>
            <a
              href="/wallet"
              className="px-6 py-3 rounded-lg bg-[#101010] hover:bg-[#141414] border border-white/10 text-zinc-300 text-sm font-medium transition-all"
            >
              Explore Web3 Vision
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
