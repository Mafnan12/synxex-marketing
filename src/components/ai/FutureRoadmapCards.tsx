export function FutureRoadmapCards() {
  const features = [
    {
      title: "Research workspaces",
      description:
        "A planned environment for reviewing structured context, source material, and analytical notes.",
    },
    {
      title: "Governed automations",
      description:
        "Future workflow tools designed around explicit policies, approvals, and clear human control.",
    },
    {
      title: "Market insights",
      description:
        "Summaries of selected market information and relevant risk context for a person to review.",
    },
  ];

  return (
    <section
      id="future"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#09090B] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] space-y-10">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#F4F4F5] sm:text-4xl">
            Capabilities under consideration.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            These ideas are not active services. No AI agent makes investment decisions or executes trades.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/[0.16] bg-[#141416] p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#F4F4F5] sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
