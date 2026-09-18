import type { AssetIconKey } from "./assets";

/**
 * Abstract, hand-drawn line-art symbols evoking each asset without
 * reproducing any brand's actual logo/mark.
 */
export function AssetIcon({ icon, className }: { icon: AssetIconKey; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "fox":
      return (
        <svg {...common}>
          <path d="M7 5 4 3l1 4.2" />
          <path d="M17 5l3-2-1 4.2" />
          <path d="M6 8c0-2 2.5-3.5 6-3.5S18 6 18 8c0 3.6-2.4 7-6 7s-6-3.4-6-7Z" />
          <path d="M9.5 9.5 12 12l2.5-2.5" />
          <circle cx="9.7" cy="8.2" r="0.4" fill="currentColor" stroke="none" />
          <circle cx="14.3" cy="8.2" r="0.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tether":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="16.5" rx="6" ry="2.2" />
          <path d="M7.5 7.5h9" />
          <path d="M12 7.5v7" />
          <path d="M9 10.7c0 .9 1.3 1.6 3 1.6s3-.7 3-1.6" />
        </svg>
      );
    case "hex":
      return (
        <svg {...common}>
          <path d="M12 3.5 19 7.7v8.6L12 20.5 5 16.3V7.7Z" />
          <path d="M12 8 15.5 10v4L12 16 8.5 14v-4Z" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 4 20 18H4Z" />
          <path d="M12 10 16.2 18H7.8Z" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 4c.4 3 2 4.6 5 5-3 .4-4.6 2-5 5-.4-3-2-4.6-5-5 3-.4 4.6-2 5-5Z" />
        </svg>
      );
    case "tangle":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="8" r="1.1" />
          <circle cx="17.5" cy="8" r="1.1" />
          <circle cx="12" cy="13" r="1.1" />
          <circle cx="7.5" cy="17" r="1.1" />
          <circle cx="16.5" cy="17" r="1.1" />
          <path d="M6.5 9.1 12 13m5.5-5-5.5 5m-4.5 4L12 13m4.5 4L12 13" />
        </svg>
      );
    case "cross":
      return (
        <svg {...common}>
          <path d="M5 5c3 2.5 4.5 4.6 4.5 7S8 16.5 5 19" />
          <path d="M19 5c-3 2.5-4.5 4.6-4.5 7s1.5 4.5 4.5 7" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M12 3.5 19.5 12 12 20.5 4.5 12Z" />
          <path d="M4.5 12h15" />
        </svg>
      );
    case "ring":
      return (
        <svg {...common}>
          <circle cx="9.5" cy="10" r="4.2" />
          <circle cx="14.5" cy="14" r="4.2" />
        </svg>
      );
    default:
      return null;
  }
}
