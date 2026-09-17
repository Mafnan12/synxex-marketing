"use client";

import { useEffect, useRef } from "react";
import { orbitalAssets, type OrbitalAssetConfig } from "./assets";
import { Coin } from "./Coin";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import styles from "./hero.module.css";

const breakpointClass: Record<OrbitalAssetConfig["minBreakpoint"], string> = {
  base: "",
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function OrbitalSystem() {
  const planeRef = useRef<HTMLDivElement>(null);
  const assetRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const reducedMotion = usePrefersReducedMotion();
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) return;

    let raf = 0;
    const start = performance.now();

    function frame(now: number) {
      const t = (now - start) / 1000; // seconds
      const rect = plane!.getBoundingClientRect();
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      for (const asset of orbitalAssets) {
        const el = assetRefs.current[asset.id];
        if (!el) continue;

        if (reducedMotion) {
          const angle = (asset.angle * Math.PI) / 180;
          const x = Math.cos(angle) * halfW * asset.rxFactor;
          const y = Math.sin(angle) * halfH * asset.ryFactor;
          const depth = asset.depth;
          applyTransform(el, x, y, lerp(0.75, 1.05, depth), lerp(0.4, 0.9, depth), lerp(3, 0, depth));
          continue;
        }

        const phase = (asset.angle * Math.PI) / 180;
        const angularSpeed = (2 * Math.PI) / asset.periodSeconds;
        const angle = phase + t * angularSpeed * asset.direction;

        const x = Math.cos(angle) * halfW * asset.rxFactor;
        const y = Math.sin(angle) * halfH * asset.ryFactor * 0.62;

        const orbitalDepth = (Math.sin(angle) + 1) / 2; // 0 far, 1 near
        const depth = lerp(asset.depth, orbitalDepth, 0.55);

        const bob = Math.sin(t * 0.6 + phase) * 6;

        applyTransform(
          el,
          x + mouseCurrent.current.x * (0.4 + depth * 0.6),
          y + bob + mouseCurrent.current.y * (0.4 + depth * 0.6),
          lerp(0.72, 1.18, depth),
          lerp(0.32, 0.95, depth),
          lerp(6, 0, depth)
        );
        el.style.zIndex = String(Math.round(depth * 100));
      }

      // smooth mouse-follow for the whole plane (subtle 3D tilt)
      mouseCurrent.current.x = lerp(mouseCurrent.current.x, mouseTarget.current.x, 0.04);
      mouseCurrent.current.y = lerp(mouseCurrent.current.y, mouseTarget.current.y, 0.04);
      plane!.style.transform = `rotateX(${(-mouseCurrent.current.y * 1.4).toFixed(2)}deg) rotateY(${(mouseCurrent.current.x * 1.4).toFixed(2)}deg)`;

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function onMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseTarget.current = { x: nx * 16, y: ny * 16 };
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.plane} ref={planeRef}>
        {orbitalAssets.map((asset) => (
          <div
            key={asset.id}
            ref={(el) => {
              assetRefs.current[asset.id] = el;
            }}
            className={`${styles.orbitalAsset} ${breakpointClass[asset.minBreakpoint]}`}
          >
            <Coin icon={asset.icon} label={asset.label} size={asset.size} />
          </div>
        ))}
      </div>
    </div>
  );
}

function applyTransform(
  el: HTMLDivElement,
  x: number,
  y: number,
  scale: number,
  opacity: number,
  blur: number
) {
  el.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0) scale(${scale.toFixed(3)})`;
  el.style.opacity = opacity.toFixed(2);
  el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : "none";
}
