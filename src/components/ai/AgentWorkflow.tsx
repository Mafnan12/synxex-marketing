type WorkflowStep = { id: string; title: string; description: string };
type AgentWorkflowProps = { steps: WorkflowStep[] };

export function AgentWorkflow({ steps }: AgentWorkflowProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#181110]">
      {steps.map((step) => (
        <article
          key={step.id}
          className="grid gap-5 p-5 transition-colors hover:bg-white/[0.02] sm:grid-cols-[56px_1fr] sm:items-start sm:p-7"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff5a1f]/25 bg-[#ff5a1f]/[0.06] font-mono text-xs text-[#FF5A1F]">
            {step.id}
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#F4F4F5]">{step.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
