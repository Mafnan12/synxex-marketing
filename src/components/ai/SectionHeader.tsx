type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-[#ff5a00] to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff5a00]">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#a3a3a3]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
