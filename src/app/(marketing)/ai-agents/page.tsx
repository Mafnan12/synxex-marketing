"use client";

import { AgentsBentoGrid } from "@/components/ai/AgentsBentoGrid";
import { AutomatedMarketAnalysis } from "@/components/ai/AutomatedMarketAnalysis";
import { AgenticWorkflowInfographic } from "@/components/ai/AgenticWorkflowInfographic";
import { ConnectedIntelligenceStack } from "@/components/ai/ConnectedIntelligenceStack";
import { FutureRoadmapCarousel } from "@/components/ai/FutureRoadmapCarousel";
import { FutureRoadmapCards } from "@/components/ai/FutureRoadmapCards";
import { AgentCard } from "@/components/ai/AgentCard";
import { AgentWorkflow } from "@/components/ai/AgentWorkflow";
import { Section } from "@/components/ai/Section";
import { TradingAgentCard } from "@/components/ai/TradingAgentCard";
import { AI_AGENT_CARDS, AI_ROADMAP, AI_WORKFLOW_STEPS, MARKET_INTELLIGENCE_ITEMS, TRADING_AGENT_DATA } from "@/content/ai";

export default function AIAgentsPage() {
  return <main className="min-h-screen overflow-hidden bg-[#090909] font-sans text-white selection:bg-[#ff6a2b] selection:text-white">
    <section id="top" className="relative isolate px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-20 bg-[#090909]" />
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#09090B] px-6 pb-12 pt-20 sm:px-12 sm:pb-16 sm:pt-28 lg:min-h-[600px] lg:px-20 lg:pb-16 lg:pt-32">
          {/* Subtle, restrained warm ambient illumination */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-[#ff6a2b]/10 blur-[130px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="max-w-3xl text-4xl sm:text-6xl lg:text-[76px] font-semibold leading-[1.02] tracking-tight text-white">
              Intelligence for the <span className="text-[#ffb38f]">next financial era.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              SynxEx is exploring AI systems that help people understand complex signals, review context, and make better-informed decisions—with human control at every stage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#agents" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ff6a2b] to-[#e2321f] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 shadow-md">
                Explore AI systems <span className="ml-2 text-base leading-none">↘</span>
              </a>
              <a href="#workflow" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08] hover:border-white/25">
                How it works
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex flex-wrap items-center justify-center lg:justify-between gap-6 border-t border-white/[0.06] pt-8">
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6a2b]" /> Research</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Signals</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Guardrails</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Oversight</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">Autonomous Core v5.4</span>
          </div>
        </div>
      </div>
    </section>

    <div className="relative"><div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#ff6a2b]/30 to-transparent" />
      <Section id="agents" number="01" eyebrow="AI trading agents" title="Specialized intelligence, one governed system." description="Each conceptual module is designed around a focused responsibility: research, risk context, and approved workflow coordination.">
        <div className="space-y-10">
          <AgentsBentoGrid />
          <div className="pt-16 sm:pt-20 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
                Core Autonomous Agent Modules
              </h3>
              
              {/* Centered Action Pill Buttons (Matching Reference) */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 pb-4">
                <a
                  href="#agents"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff6a2b] to-[#e2321f] text-white text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:opacity-90"
                >
                  Get started
                </a>
                <a
                  href="#workflow"
                  className="px-6 py-2.5 rounded-full bg-transparent hover:bg-white/[0.05] border border-white/20 hover:border-white/40 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer"
                >
                  Discover our plans
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8">
              {AI_AGENT_CARDS.map((agent, index) => (
                <AgentCard key={agent.id} agent={agent} featured={index === 0} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <section id="trading" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36 bg-[#090909]">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-6 font-mono text-xs text-[#ffb38f]">
            02 <span className="ml-2 inline-block h-px w-8 align-middle bg-[#ff6a2b]/60" />
            <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffb38f]">
              Automated market analysis
            </span>
          </div>
          <AutomatedMarketAnalysis />
        </div>
      </section>
      <section id="workflow" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36 bg-[#090909]">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-6 font-mono text-xs text-[#ffb38f]">
            03 <span className="ml-2 inline-block h-px w-8 align-middle bg-[#ff6a2b]/60" />
            <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffb38f]">
              Agentic workflows
            </span>
          </div>
          <AgenticWorkflowInfographic />
        </div>
      </section>
      <section id="intelligence" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-36 bg-[#090909]">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-6 font-mono text-xs text-[#ffb38f]">
            04 <span className="ml-2 inline-block h-px w-8 align-middle bg-[#ff6a2b]/60" />
            <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffb38f]">
              AI technology
            </span>
          </div>
          <ConnectedIntelligenceStack />
        </div>
      </section>
      <FutureRoadmapCards />
    </div>

    <footer className="border-t border-white/10 bg-[#090909] px-6 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left"><p className="text-sm font-semibold tracking-[-0.04em] text-white">SYNXEX <span className="text-[#ff6a2b]">AI</span></p><p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">Conceptual product experience · No live trading or AI agents</p></div></footer>
  </main>;
}
