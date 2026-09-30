export function SectionIndex({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
      <span className="text-[#ff8b68]">{number}</span>
      <span aria-hidden="true" className="h-px w-7 bg-[#ff5a1f]/55" />
      <span className="text-zinc-500">{label}</span>
    </div>
  );
}
