import { MARKET_INTELLIGENCE_ITEMS } from "@/content/ai";

export function ConnectedIntelligenceStack() {
  return (
    <div className="w-full space-y-10">
        {/* Research concept video */}
      <div className="relative w-full aspect-video rounded-[2.5rem] bg-[#09090B] border border-[#1E1E22] overflow-hidden flex items-center justify-center p-6 sm:p-12 shadow-2xl">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-contain pointer-events-none"
        >
          <source src="/tech-video-style.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/30 to-[#050505]/70 pointer-events-none" />



      </div>

      <div id="pillars" className="grid grid-cols-1 gap-6 py-6 md:grid-cols-3 md:gap-8">
        {MARKET_INTELLIGENCE_ITEMS.map((item) => (
          <article key={item.title} className="py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF5A1F]">{item.kicker}</p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#F4F4F5]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
