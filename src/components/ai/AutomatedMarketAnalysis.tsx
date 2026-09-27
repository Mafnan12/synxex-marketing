export function AutomatedMarketAnalysis() {
  return (
    <div className="grid items-center gap-10 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-14">
      <div className="max-w-xl">
        <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" /> Market analysis concept
        </p>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#F4F4F5] sm:text-4xl">
          Market context for human review
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          A future analysis view could bring relevant market information together. It would provide context for a person to assess; it would not place trades.
        </p>
      </div>

      <div className="rounded-2xl border border-white/20 bg-[#181110] p-5 sm:p-7 lg:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4F4F5]">
            Areas for review
          </h3>
          <span className="rounded-full border border-[#FF5A1F]/35 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF5A1F]">
            Concept
          </span>
        </div>

        <div>
          {[
            ["Market movement", "A concise view of changes in the selected market."],
            ["Research sources", "Relevant reporting and source material alongside the topic."],
            ["Risk context", "Factors that may warrant closer review before a decision."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="grid gap-2 border-b border-white/20 py-5 first:pt-0 last:border-b-0 last:pb-1 sm:grid-cols-[minmax(150px,0.7fr)_1.3fr] sm:gap-8"
            >
              <h4 className="text-sm font-medium text-[#F4F4F5]">{title}</h4>
              <p className="text-sm leading-6 text-zinc-400">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
