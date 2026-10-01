type WorkflowStep = { id: string; title: string; description: string };
type AgentWorkflowProps = { steps: WorkflowStep[] };

export function AgentWorkflow({ steps }: AgentWorkflowProps) {
  return <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0b]">{steps.map((step, index) => <article key={step.id} className="group grid gap-5 border-b border-white/10 p-6 transition-colors last:border-b-0 hover:bg-white/[0.025] sm:grid-cols-[80px_1fr_auto] sm:items-center sm:p-8"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff5a1f]/25 bg-[#ff5a1f]/[0.06] font-mono text-xs text-[#ff8b68]">{step.id}</div><div><h3 className="text-xl font-semibold tracking-[-0.045em] text-white">{step.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{step.description}</p></div><div className="flex items-center gap-3 sm:justify-self-end"><span className="h-px w-8 bg-white/15 transition-all duration-300 group-hover:w-14 group-hover:bg-[#ff5a1f]/70" /><span className="font-mono text-[10px] text-zinc-600">0{index + 1}</span></div></article>)}</div>;
}
