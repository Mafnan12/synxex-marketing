export type AssetIconKey =
  | "fox"
  | "tether"
  | "hex"
  | "triangle"
  | "star"
  | "tangle"
  | "cross"
  | "diamond"
  | "ring";

export interface OrbitalAssetConfig {
  id: string;
  label: string;
  icon: AssetIconKey;
  /** Initial phase, degrees (0 = 3 o'clock, measured clockwise) */
  angle: number;
  /** Orbit radius as a fraction of the stage's half-width/half-height */
  rxFactor: number;
  ryFactor: number;
  /** Full orbit period, seconds — slow and cinematic */
  periodSeconds: number;
  /** Orbit direction */
  direction: 1 | -1;
  /** Base depth 0 (far) .. 1 (near), blended with orbital position for the 3D illusion */
  depth: number;
  /** Coin size in px at depth 1, before responsive clamping */
  size: number;
  /** Smallest breakpoint this asset appears at, to thin the field on mobile */
  minBreakpoint: "base" | "sm" | "md" | "lg";
}

/**
 * Data-driven orbital field. Deliberately irregular — angles, radii, periods,
 * and depths are all offset per-asset so the system never looks synchronized
 * or perfectly symmetrical (see OrbitalSystem for how these compose at runtime).
 */
export const orbitalAssets: OrbitalAssetConfig[] = [
  { id: "shib", label: "SHIB", icon: "fox", angle: -58, rxFactor: 0.86, ryFactor: 0.74, periodSeconds: 95, direction: 1, depth: 0.8, size: 92, minBreakpoint: "base" },
  { id: "usdt", label: "USDT", icon: "tether", angle: -8, rxFactor: 0.95, ryFactor: 0.7, periodSeconds: 120, direction: 1, depth: 0.9, size: 100, minBreakpoint: "base" },
  { id: "link", label: "LINK", icon: "hex", angle: 38, rxFactor: 1.0, ryFactor: 0.8, periodSeconds: 112, direction: 1, depth: 0.55, size: 78, minBreakpoint: "md" },
  { id: "avax", label: "AVAX", icon: "triangle", angle: -102, rxFactor: 0.82, ryFactor: 0.72, periodSeconds: 132, direction: 1, depth: 0.6, size: 84, minBreakpoint: "sm" },
  { id: "xlm", label: "XLM", icon: "star", angle: 205, rxFactor: 0.75, ryFactor: 0.66, periodSeconds: 104, direction: 1, depth: 0.42, size: 70, minBreakpoint: "lg" },
  { id: "iota", label: "IOTA", icon: "tangle", angle: 158, rxFactor: 0.9, ryFactor: 0.76, periodSeconds: 142, direction: 1, depth: 0.68, size: 88, minBreakpoint: "sm" },
  { id: "xrp", label: "XRP", icon: "cross", angle: 120, rxFactor: 1.0, ryFactor: 0.82, periodSeconds: 100, direction: 1, depth: 0.78, size: 96, minBreakpoint: "base" },
  { id: "ton", label: "TON", icon: "diamond", angle: -152, rxFactor: 0.88, ryFactor: 0.7, periodSeconds: 150, direction: 1, depth: 0.5, size: 80, minBreakpoint: "md" },
  { id: "hbar", label: "HBAR", icon: "ring", angle: 82, rxFactor: 1.05, ryFactor: 0.78, periodSeconds: 126, direction: 1, depth: 0.4, size: 74, minBreakpoint: "lg" },
];
