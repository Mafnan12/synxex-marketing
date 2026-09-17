import { signatureFont } from "./signatureFont";
import { cn } from "@/utils/cn";

/**
 * Wordmark rendered in a cursive signature face, roughed up at the edges by
 * the `sx-ink-rough` SVG filter (defined once in the root layout) so it reads
 * like hand-inked signage rather than typeset text.
 */
export function SignatureLogo({ className, size = 30 }: { className?: string; size?: number }) {
  return (
    <span
      className={cn(signatureFont.className, "inline-block select-none text-white", className)}
      style={{ fontSize: size, lineHeight: 1, filter: "url(#sx-ink-rough)" }}
    >
      Synx<span style={{ color: "#ff6a2b" }}>Ex</span>
    </span>
  );
}
