"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Rotate3D, MoveUpRight } from "lucide-react";
import styles from "./banking.module.css";

interface CardController {
  setPointer(x: number, y: number): void;
  setProgress(progress: number): void;
  setFlipped(flipped: boolean): void;
  setConcept(index: number): void;
  setReduced(reduced: boolean): void;
  dispose(): void;
}
interface CardModule { createCardScene(canvas: HTMLCanvasElement, options: { mode: string; reduced: boolean }): Promise<CardController> }
const concepts = ["essential", "premium", "elite"];

export default function CardStudio({ concept = 0, mode = "hero" }: { concept?: number; mode?: "hero" | "story" }) {
  const wrapper = useRef<HTMLDivElement>(null), canvas = useRef<HTMLCanvasElement>(null), controller = useRef<CardController | null>(null);
  const currentConcept = useRef(concept); currentConcept.current = concept;
  const [loaded, setLoaded] = useState(false), [flipped, setFlipped] = useState(false), [staticView, setStaticView] = useState(false);
  useEffect(() => {
    const el = wrapper.current, surface = canvas.current;
    if (!el || !surface) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false, started = false, frame = 0, visible = false;
    const configure = () => { setStaticView(media.matches || innerWidth < 761); controller.current?.setReduced(media.matches || (mode === "story" && innerWidth < 761)); };
    configure();
    const scrollSection = el.closest<HTMLElement>("[data-card-scroll]");
    const update = () => {
      frame = 0; if (!scrollSection || !controller.current || !visible) return;
      const b = scrollSection.getBoundingClientRect();
      const progress = mode === "story" ? -b.top / Math.max(1, b.height - innerHeight) : Math.max(0, -b.top / b.height);
      controller.current.setProgress(media.matches || innerWidth < 761 && mode === "story" ? 0 : progress);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const begin = async () => {
      if (started) return; started = true;
      try {
        const moduleUrl = "/banking-cards/card-scene.mjs";
        const mod = await import(/* webpackIgnore: true */ moduleUrl) as CardModule;
        if (cancelled) return;
        const scene = await mod.createCardScene(surface, { mode, reduced: media.matches || mode === "story" && innerWidth < 761 });
        if (cancelled) { scene.dispose(); return; }
        controller.current = scene; scene.setConcept(currentConcept.current); setLoaded(true); schedule();
      } catch { if (!cancelled) surface.dataset.scene = "fallback"; }
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) { void begin(); schedule(); } }, { rootMargin: "300px" }); observer.observe(el);
    const resize = () => { configure(); schedule(); };
    window.addEventListener("scroll", schedule, { passive: true }); window.addEventListener("resize", resize); media.addEventListener("change", resize);
    const lost = (event: Event) => { event.preventDefault(); setLoaded(false); controller.current?.dispose(); controller.current = null; surface.dataset.scene = "fallback"; };
    surface.addEventListener("webglcontextlost", lost);
    return () => { cancelled = true; observer.disconnect(); cancelAnimationFrame(frame); controller.current?.dispose(); controller.current = null; surface.removeEventListener("webglcontextlost", lost); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", resize); media.removeEventListener("change", resize); };
  }, [mode]);
  useEffect(() => { controller.current?.setConcept(concept); setFlipped(false); controller.current?.setFlipped(false); }, [concept]);
  const pointer = (event: PointerEvent<HTMLDivElement>) => { if (event.pointerType !== "mouse") return; const b = event.currentTarget.getBoundingClientRect(); controller.current?.setPointer((event.clientX - b.left) / b.width - .5, (event.clientY - b.top) / b.height - .5); };
  return <div ref={wrapper} className={`${styles.cardStudio} ${loaded ? styles.studioLoaded : ""} ${mode === "story" ? styles.storyStudio : ""}`} onPointerMove={pointer} onPointerLeave={() => controller.current?.setPointer(0, 0)}>
    <div className={styles.studioGlow} /><div className={styles.lightRing} /><div className={styles.cardShadow} />
    <div className={`${styles.studioFallback} ${flipped ? styles.fallbackBack : ""}`} aria-hidden="true"><Image unoptimized src={`/banking-cards/${flipped ? "card-back" : `${concepts[concept]}-front`}.webp`} alt="" fill sizes="(max-width: 760px) 90vw, 50vw" priority={mode === "hero"} /></div>
    <canvas ref={canvas} className={styles.cardCanvas} aria-label={`Three-dimensional SYNXEX ${concepts[concept]} concept card, ${flipped ? "back" : "front"} presentation`} role="img" />
    {mode === "hero" || staticView ? <button type="button" className={styles.studioFlip} aria-label={`${flipped ? "Show front" : "Show back"} of SYNXEX concept card`} aria-pressed={flipped} onClick={() => { const next = !flipped; setFlipped(next); controller.current?.setFlipped(next); }}><Rotate3D size={15} />{flipped ? "Front view" : "Turn the card"}</button> : <span className={styles.studioInstruction}><MoveUpRight size={13} /> A DIFFERENT PERSPECTIVE WITH EVERY SCROLL</span>}
    <span className={styles.studioCaption}>SYNXEX / {concepts[concept].toUpperCase()} · CONCEPT EDITION</span>
  </div>;
}
