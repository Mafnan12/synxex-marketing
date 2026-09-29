import { AutomatedMarketAnalysis } from "@/components/ai/AutomatedMarketAnalysis";
import { ConnectedIntelligenceStack } from "@/components/ai/ConnectedIntelligenceStack";
import { FutureRoadmapCards } from "@/components/ai/FutureRoadmapCards";
import { AgentCard } from "@/components/ai/AgentCard";
import { AgentWorkflow } from "@/components/ai/AgentWorkflow";
import { AI_AGENT_CARDS, AI_WORKFLOW_STEPS } from "@/content/ai";

export default function AIAgentsPage() {
  return <main className="relative min-h-screen overflow-hidden bg-[#09090B] font-sans text-[#F4F4F5] selection:bg-[#FF5A1F] selection:text-[#F4F4F5]">

    <section id="top" className="relative isolate px-5 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:px-10 lg:pb-12 lg:pt-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="synxex-warm-hero relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-3xl border border-white/[0.12] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Hero content */}
          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <div className="flex w-full flex-col items-center gap-8">
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-semibold leading-[1.02] tracking-tight text-[#F4F4F5]">
                AI agents for <span className="text-[#ffb38f]">research and review.</span>
              </h1>
              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg max-w-lg">
                SynxEx is exploring tools for market research, risk context, and approved workflows. These are concepts, not active trading services.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#agents" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#5A1720] px-6 py-3 text-sm font-medium text-[#F4F4F5] transition-all duration-200 hover:opacity-90 shadow-md">
                  Explore agent concepts <span className="ml-2 text-base leading-none">↘</span>
                </a>
                <a href="#workflow" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-white/[0.08] hover:border-white/25">
                  How it works
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="relative px-5 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[#F4F4F5] sm:text-4xl">
              Research, risk context, and workflow review.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
              Planned agent roles would organize information and prepare it for human review. Financial trades are not executed by this concept.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[360px] lg:ml-auto">
            <video autoPlay loop muted playsInline className="block h-auto w-full object-contain">
              <source src="/phone-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>

    <div className="relative">
      <section id="agents" className="relative px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 bg-[#09090B]">
        <div className="mx-auto max-w-[1440px]">
        <div className="space-y-10">
          <div className="pt-4">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
                Three planned roles
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                Each role describes a possible support task. No agent makes or executes investment decisions.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 pb-4">
                <a
                  href="#workflow"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#5A1720] text-[#F4F4F5] text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:opacity-90"
                >
                  View the workflow
                </a>
                <a
                  href="#future"
                  className="px-6 py-2.5 rounded-full bg-transparent hover:bg-white/[0.05] border border-white/20 hover:border-white/40 text-[#F4F4F5] text-xs font-semibold tracking-wide transition-all cursor-pointer"
                >
                  Planned capabilities
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-6">
              {AI_AGENT_CARDS.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} featured={index === 0} />
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="market-analysis" className="relative px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <AutomatedMarketAnalysis />
        </div>
      </section>
      <section id="workflow" className="relative px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">A reviewable workflow</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">A planned sequence for gathering context, summarizing findings, and leaving decisions with a person.</p>
          </div>
          <AgentWorkflow steps={AI_WORKFLOW_STEPS} />
        </div>
      </section>
      <section id="intelligence" className="relative px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">Evidence alongside context</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">A concept for reviewing selected sources, market context, and human decisions together.</p>
          </div>
          <ConnectedIntelligenceStack />
        </div>
      </section>
      <FutureRoadmapCards />
    </div>

    <footer className="bg-[#09090B] px-6 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left"><p className="text-sm font-semibold tracking-[-0.04em] text-[#F4F4F5]">SYNXEX</p><p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">Conceptual product experience · No live trading or AI agents</p></div></footer>
  </main>;
}
