import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,82,0.35),rgba(92,16,35,0.22))] text-[#ffb38f] ring-1 ring-white/10">
          <Icon className="h-5 w-5" />
        </span>
        {href && <ArrowUpRight className="h-4 w-4 text-white/30 transition-colors group-hover:text-[#ffb38f]" />}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
    </>
  );

  const className =
    "group block h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,17,0.96),rgba(9,9,9,0.94))] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a52]/35 hover:shadow-[0_26px_80px_rgba(255,106,43,0.12)]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
