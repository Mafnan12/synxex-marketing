type AgentCardProps = {
  agent: { id: string; name: string; role: string; description: string; accent: string; tags: string[] };
};

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <article className="py-4">
      <h3 className="text-xl font-semibold tracking-tight text-[#F4F4F5] sm:text-2xl">
        {agent.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-zinc-400">{agent.role}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        {agent.description}
      </p>
    </article>
  );
}
