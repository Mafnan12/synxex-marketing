type AgentCardProps = {
  agent: { id: string; name: string; role: string; description: string; accent: string; tags: string[] };
  featured?: boolean;
};

export function AgentCard({ agent }: AgentCardProps) {
  // Geometric minimalist icons matching the reference screenshot
  const renderIcon = (id: string) => {
    switch (id) {
      case "01":
        // Pyramid of 3 geometric shapes (triangle + 2 squares) matching Card 1 in reference
        return (
          <svg className="w-5 h-5 text-[#F4F4F5]" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2L5 9h10L10 2z" />
            <rect x="4" y="11" width="5" height="5" rx="1" />
            <rect x="11" y="11" width="5" height="5" rx="1" />
          </svg>
        );
      case "02":
        // Minimalist person / avatar silhouette matching Card 2 in reference
        return (
          <svg className="w-5 h-5 text-[#F4F4F5]" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="5.5" r="3.5" />
            <path d="M4.5 14.5C4.5 12 7 11 10 11C13 11 15.5 12 15.5 14.5V16H4.5V14.5Z" />
          </svg>
        );
      case "03":
      default:
        // Cross / node cluster matching Card 3 in reference
        return (
          <svg className="w-5 h-5 text-[#F4F4F5]" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="2.8" />
            <circle cx="10" cy="3.5" r="2" />
            <circle cx="10" cy="16.5" r="2" />
            <circle cx="3.5" cy="10" r="2" />
            <circle cx="16.5" cy="10" r="2" />
          </svg>
        );
    }
  };

  return (
    <article className="group relative rounded-2xl bg-[#141416] border border-white/[0.16] p-8 flex flex-col justify-between min-h-[340px] transition-all duration-300 hover:border-white/15 hover:shadow-2xl">
      <div>
        {/* Topic icon */}
        <div className="flex items-center justify-between">
          <div className="w-7 h-7 flex items-center justify-center">
            {renderIcon(agent.id)}
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#FF5A1F]">Concept</span>
        </div>

        {/* Title & Role */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
            {agent.name}
          </h3>
          <p className="text-sm text-zinc-400 mt-1.5 font-normal">
            {agent.role}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            {agent.description}
          </p>
        </div>
      </div>

      {/* Tags / Pills at bottom */}
      <div className="mt-8 border-t border-white/50 pt-5 flex flex-wrap gap-2">
        {agent.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
