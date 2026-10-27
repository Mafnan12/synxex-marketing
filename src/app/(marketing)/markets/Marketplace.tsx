"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight, Globe2, Layers3, Search, SlidersHorizontal, Sparkles, Rotate3D, Activity, Network, Compass } from "lucide-react";
import { assets, markets, price, series, line } from "./market-data";
import styles from "./marketplace.module.css";

type Timeline = { to: (target: unknown, vars: Record<string, unknown>, position?: number | string) => Timeline };
type GSAP = { registerPlugin: (plugin: unknown) => void; context: (fn: () => void, scope: HTMLElement) => { revert: () => void }; timeline: (vars: Record<string, unknown>) => Timeline; from: (target: unknown, vars: Record<string, unknown>) => void };
type AnimationWindow = Window & { gsap?: GSAP; ScrollTrigger?: { refresh: () => void } };

function Sparkline({ seed = 1, large = false }: { seed?: number; large?: boolean }) {
  return <svg className={large ? styles.panelSpark : styles.sparkline} viewBox="0 0 600 200" fill="none" aria-hidden="true"><path d={line(series(seed))} stroke="currentColor" strokeWidth={large ? 3 : 7} pathLength="1" /></svg>;
}

function Amount({ value }: { value: number }) {
  const ref = useRef<HTMLOutputElement>(null);
  const previous = useRef(value);
  useEffect(() => {
    const from = previous.current; let frame = 0; const start = performance.now();
    const draw = (now: number) => { const p = matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : Math.min(1, (now - start) / 550); const v = from + (value - from) * (1 - (1 - p) ** 3); if (ref.current) ref.current.textContent = price(v); previous.current = v; if (p < 1) frame = requestAnimationFrame(draw); };
    frame = requestAnimationFrame(draw); return () => cancelAnimationFrame(frame);
  }, [value]);
  return <output ref={ref} aria-label={price(value)}>{price(value)}</output>;
}

function pointerGlow(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = event.currentTarget, b = el.getBoundingClientRect(), x = (event.clientX - b.left) / b.width, y = (event.clientY - b.top) / b.height;
  el.style.setProperty("--mx", `${x * 100}%`); el.style.setProperty("--my", `${y * 100}%`);
  el.style.setProperty("--rx", `${(.5 - y) * 5}deg`); el.style.setProperty("--ry", `${(x - .5) * 5}deg`);
}
function resetTilt(event: PointerEvent<HTMLElement>) { event.currentTarget.style.setProperty("--rx", "0deg"); event.currentTarget.style.setProperty("--ry", "0deg"); }
function Action({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link href={href} className={`${styles.button} ${secondary ? styles.secondary : ""}`} onPointerMove={event => {
    if (event.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const b = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--bx", `${(event.clientX - b.left - b.width / 2) * .1}px`); event.currentTarget.style.setProperty("--by", `${(event.clientY - b.top - b.height / 2) * .15}px`);
  }} onPointerLeave={event => { event.currentTarget.style.setProperty("--bx", "0px"); event.currentTarget.style.setProperty("--by", "0px"); }}>{children}<ArrowUpRight size={17} /></Link>;
}
function Heading({ number, label, title, description }: { number: string; label: string; title: React.ReactNode; description?: string }) {
  return <div className={styles.heading} data-reveal><div className={styles.eyebrow}><span>{number} /</span> {label}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function Globe() {
  return <div className={styles.ecosystem} aria-label="Animated global financial ecosystem" onPointerMove={pointerGlow} onPointerLeave={resetTilt}>
    <div className={styles.orbitOne} /><div className={styles.orbitTwo} />
    <div className={styles.globe}><div className={styles.globeGrid}>{Array.from({ length: 8 }, (_, i) => <i key={i} style={{ "--angle": `${i * 22.5}deg` } as CSSProperties} />)}{[15, 30, 46, 63, 80].map(y => <b key={y} style={{ top: `${y}%` }} />)}</div><svg viewBox="0 0 400 400" className={styles.continents} aria-hidden="true"><path d="M70 94 99 62 137 53 167 76 155 105 130 114 116 140 91 127 78 152 54 123ZM132 154 159 164 173 198 165 225 155 256 145 288 125 263 118 231 106 212 109 180ZM222 81 250 65 263 91 303 83 332 106 344 136 325 161 304 146 286 176 266 155 256 120 230 125 213 110ZM217 143 249 136 274 172 260 205 247 236 223 218 205 187ZM298 257 326 248 350 267 340 288 305 282Z" /></svg><div className={styles.globeShine} /></div>
    <div className={`${styles.coin} ${styles.bitcoin}`}>₿</div><div className={`${styles.coin} ${styles.ethereum}`}>◇</div>
    <div className={`${styles.floatingPanel} ${styles.btcPanel}`}><span><i /> BITCOIN / USD</span><strong>$67,432<span>+2.34%</span></strong><Sparkline large /></div>
    <div className={`${styles.floatingPanel} ${styles.fxPanel}`}><span>GLOBAL CURRENCIES</span><strong>EUR / USD <small>1.0842</small></strong><div className={styles.dataBars}>{[30, 52, 38, 70, 58, 90, 76, 100].map((h, i) => <i key={i} style={{ height: `${h}%`, animationDelay: `${i * .2}s` }} />)}</div></div>
    <div className={styles.networkBadge}><Globe2 size={15} /><span>ILLUSTRATIVE GLOBAL ECOSYSTEM</span></div>
    {[0, 1, 2, 3, 4, 5].map(i => <span key={i} className={styles.particle} style={{ "--i": i } as CSSProperties} />)}
  </div>;
}

function FlipCard({ market, index }: { market: typeof markets[number]; index: number }) {
  const [flipped, setFlipped] = useState(false); const [hovered, setHovered] = useState(false); const open = flipped || hovered;
  return <article className={`${styles.flipCard} ${open ? styles.flipped : ""}`} onMouseEnter={() => { if (matchMedia("(hover: hover)").matches) setHovered(true); }} onMouseLeave={() => setHovered(false)} data-reveal>
    <div className={styles.flipInner}>
      <div className={styles.cardFront} aria-hidden={open}><Image unoptimized src={`/marketplace/${market.slug}.webp`} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" /><div className={styles.cardShade} /><span className={styles.cardIndex}>0{index + 1} / MARKET</span><div className={styles.cardTitle}><span>{market.tag}</span><h3>{market.name}</h3></div><span className={styles.flipHint}><Rotate3D size={15} /> Explore the other side</span></div>
      <div className={styles.cardBack} aria-hidden={!open} inert={!open}><span className={styles.backSymbol}>{market.symbol}</span><span className={styles.eyebrow}>0{index + 1} / DISCOVER</span><h3>{market.name}</h3><p>{market.description}</p><span className={styles.instruments}>{market.instruments}</span><Link href="#overview" onClick={() => window.dispatchEvent(new CustomEvent("marketplace-filter", { detail: market.name }))}>Explore Market <ArrowUpRight size={17} /></Link></div>
    </div>
    <button className={styles.flipToggle} aria-label={`${open ? "Close" : "Explore"} ${market.name} details`} aria-expanded={open} onClick={() => { setHovered(false); setFlipped(!flipped); }}><Rotate3D size={18} /></button>
  </article>;
}

function Showcase({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null); const [active, setActive] = useState(0); const [staticStory, setStaticStory] = useState(true); const [backVisible, setBackVisible] = useState(false);
  useEffect(() => { const frame = requestAnimationFrame(() => (window as AnimationWindow).ScrollTrigger?.refresh()); return () => cancelAnimationFrame(frame); }, [staticStory]);
  useEffect(() => {
    const el = root.current, g = (window as AnimationWindow).gsap;
    if (!el || !ready || !g) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)"); let context: { revert: () => void } | undefined;
    const setup = () => {
      context?.revert(); const staticMode = media.matches || innerWidth < 761; setStaticStory(staticMode); if (staticMode) return;
      context = g.context(() => {
        const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-story-card]"));
        const timeline = g.timeline({ scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: .7, onUpdate: (self: { progress: number }) => { const phase = self.progress * 6; setActive(Math.min(5, Math.floor(phase))); setBackVisible(phase % 1 > .5 && phase % 1 < .95); } } });
        cards.forEach((card, i) => {
          const inner = card.querySelector("[data-story-inner]");
          timeline.to(card, { opacity: 1, x: 0, z: 0, scale: 1, duration: .32 }, i)
            .to(inner, { rotateY: 180, duration: .36 }, i + .32)
            .to(card, { opacity: 0, z: -350, scale: .72, x: -100, duration: .3 }, i + .7);
        });
      }, el);
    };
    setup(); media.addEventListener("change", setup); window.addEventListener("resize", setup);
    return () => { context?.revert(); media.removeEventListener("change", setup); window.removeEventListener("resize", setup); };
  }, [ready]);
  return <section ref={root} className={`${styles.story} ${staticStory ? styles.staticStory : ""}`} id="market-journey"><div className={styles.storySticky}>
    <div className={styles.storyCopy}><Heading number="02" label="A WORLD OF OPPORTUNITY" title={<>Six perspectives.<br /><em>One connected world.</em></>} description="From digital frontiers to the foundations of global economies. Scroll to discover your next perspective." /><div className={styles.storySteps}>{markets.map((m, i) => <a key={m.slug} href={`#story-${m.slug}`} className={active === i ? styles.activeStep : ""} onClick={event => { if (innerWidth > 760 && !matchMedia("(prefers-reduced-motion: reduce)").matches) { event.preventDefault(); const b = root.current!.getBoundingClientRect(); window.scrollTo({ top: scrollY + b.top + (root.current!.offsetHeight - innerHeight) * (i + .5) / 6, behavior: "smooth" }); } }}><span>0{i + 1}</span>{m.name}<ArrowUpRight size={14} /></a>)}</div><span className={styles.scrollCue}><ArrowDown size={14} /> SCROLL TO EXPLORE</span></div>
    <div className={styles.storyStage}>{markets.map((m, i) => <div key={m.slug} id={`story-${m.slug}`} data-story-card inert={!staticStory && (active !== i || !backVisible)} aria-hidden={!staticStory && (active !== i || !backVisible)} className={styles.storyCard} style={{ "--card-number": i } as CSSProperties}><div data-story-inner className={styles.storyInner}><div className={styles.storyFront}><Image unoptimized src={`/marketplace/${m.slug}.webp`} alt={`${m.name} cinematic market visual`} fill sizes="(max-width: 760px) 95vw, 50vw" /><div className={styles.cardShade} /><span>0{i + 1} / SYNXEX MARKETS</span><h3>{m.name}</h3></div><div className={styles.storyBack}><span className={styles.backSymbol}>{m.symbol}</span><h3>{m.name}</h3><p>{m.description}</p><span className={styles.instruments}>{m.instruments}</span><Action href="#overview">Explore Market</Action></div></div></div>)}</div>
  </div></section>;
}

function Overview() {
  const [filter, setFilter] = useState("All Markets"), [query, setQuery] = useState(""), [sort, setSort] = useState("default");
  useEffect(() => { const handler = (event: Event) => setFilter((event as CustomEvent<string>).detail); window.addEventListener("marketplace-filter", handler); return () => window.removeEventListener("marketplace-filter", handler); }, []);
  const rows = assets.filter(a => (filter === "All Markets" || a.category === filter) && `${a.name} ${a.symbol}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === "price" ? b.price - a.price : sort === "change" ? b.change - a.change : 0);
  return <section id="overview" className={styles.section}><div className={styles.headingRow}><Heading number="03" label="THE BIGGER PICTURE" title={<>A pulse on <em>every market.</em></>} description="Discover assets, compare perspectives, and find what moves you." /><span className={styles.demoBadge}><i /> ILLUSTRATIVE MARKET DATA</span></div>
    <div className={styles.dashboard} data-reveal><div className={styles.dashboardTop}><div className={styles.filters} aria-label="Filter market categories">{["All Markets", ...markets.map(m => m.name)].map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? styles.activeFilter : ""} onClick={() => setFilter(f)}>{f}</button>)}</div><div className={styles.searchRow}><label className={styles.search}><Search size={16} /><input placeholder="Search assets or symbols" aria-label="Search assets or symbols" value={query} onChange={e => setQuery(e.target.value)} /></label><label className={styles.sort}><SlidersHorizontal size={16} /><select aria-label="Sort assets" value={sort} onChange={e => setSort(e.target.value)}><option value="default">Featured order</option><option value="price">Highest price</option><option value="change">Largest change</option></select></label></div></div>
      <span className={styles.srOnly} role="status">{rows.length} illustrative assets match your filters.</span><div className={styles.tableScroll}><table className={styles.table}><thead><tr><th>Asset / Symbol</th><th>Illustrative price</th><th>Change</th><th>Illustrative trend</th><th>Market</th><th><span className={styles.srOnly}>Explore</span></th></tr></thead><tbody>{rows.map((a, i) => <tr key={a.symbol} style={{ animationDelay: `${i * .04}s` }}><td><span className={styles.assetIdentity}><b>{a.mark}</b><span><strong>{a.name}</strong><small>{a.symbol}</small></span></span></td><td>{price(a.price)}</td><td className={a.change < 0 ? styles.negative : styles.positive}>{a.change > 0 ? "+" : ""}{a.change.toFixed(2)}%</td><td><Sparkline seed={a.market + 1} /></td><td><span className={styles.categoryLabel}>{a.category}</span></td><td><a href="#motion" aria-label={`Explore ${a.name} chart`} onClick={() => window.dispatchEvent(new CustomEvent("marketplace-asset", { detail: assets.indexOf(a) }))}><ArrowUpRight size={18} /></a></td></tr>)}</tbody></table></div>{!rows.length && <div className={styles.empty}>No assets match your search. <button onClick={() => { setQuery(""); setFilter("All Markets"); }}>Reset filters</button></div>}<p className={styles.tableNote}>Demonstration values only. No live feed, investment advice, or trading execution.</p></div>
  </section>;
}

function MarketChart() {
  const [assetIndex, setAssetIndex] = useState(0), [range, setRange] = useState("1W"), [point, setPoint] = useState<number | null>(null); const id = useId().replace(/:/g, "");
  useEffect(() => { const handler = (e: Event) => { setAssetIndex((e as CustomEvent<number>).detail); setPoint(null); }; window.addEventListener("marketplace-asset", handler); return () => window.removeEventListener("marketplace-asset", handler); }, []);
  const a = assets[assetIndex], ranges = ["1D", "1W", "1M", "3M", "1Y"], values = series(assetIndex * 3 + ranges.indexOf(range) * 7), path = line(values, 1000, 280);
  const current = point === null ? a.price : a.price * (.96 + (values[point] - Math.min(...values)) / (Math.max(...values) - Math.min(...values)) * .04);
  const pointY = point === null ? 0 : 280 - (values[point] - Math.min(...values) + 8) / (Math.max(...values) - Math.min(...values) + 16) * 280;
  return <section id="motion" className={styles.section}><Heading number="04" label="FOLLOW THE MOVEMENT" title={<>Markets <em>in Motion.</em></>} description="A closer look at the patterns behind the numbers. Explore our interactive chart demonstration." />
    <div className={styles.chartPanel} data-reveal><div className={styles.chartHeader}><label className={styles.assetSelect}><span>EXPLORE AN ASSET</span><select aria-label="Select chart asset" value={assetIndex} onChange={e => { setAssetIndex(Number(e.target.value)); setPoint(null); }}>{assets.map((a, i) => <option key={a.symbol} value={i}>{a.name} / {a.symbol}</option>)}</select></label><span className={styles.demoBadge}>ILLUSTRATIVE CHART</span></div><div className={styles.chartPrice}><div><Amount value={a.price} /><span className={a.change < 0 ? styles.negative : styles.positive}>{a.change > 0 ? "+" : ""}{a.change}% <small>example change</small></span></div><div className={styles.ranges} aria-label="Chart time range">{ranges.map(r => <button key={r} className={range === r ? styles.activeFilter : ""} aria-pressed={range === r} onClick={() => { setRange(r); setPoint(null); }}>{r}</button>)}</div></div>
      <div className={styles.chartCanvas}><div className={styles.axis}>{[1.02, 1, .98, .96].map(f => <span key={f}>{price(a.price * f)}</span>)}</div><svg viewBox="0 0 1000 360" role="img" aria-label={`Illustrative ${a.name} price and volume chart for ${range}`} onPointerMove={e => { const b = e.currentTarget.getBoundingClientRect(); setPoint(Math.max(0, Math.min(59, Math.round((e.clientX - b.left) / b.width * 59)))); }} onPointerLeave={() => setPoint(null)} tabIndex={0} onKeyDown={e => { if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); setPoint(Math.max(0, Math.min(59, (point ?? 30) + (e.key === "ArrowRight" ? 1 : -1)))); } if (e.key === "Escape") setPoint(null); }}>
        <defs><linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#FF5A1F" stopOpacity=".24" /><stop offset="1" stopColor="#FF5A1F" stopOpacity="0" /></linearGradient></defs>
        {[20, 100, 180, 260].map(y => <line key={y} x1="0" x2="1000" y1={y} y2={y} className={styles.gridLine} />)}
        <g key={`${a.symbol}-${range}`} className={styles.chartDrawing}><path d={`${path} L1000,280 L0,280 Z`} fill={`url(#area-${id})`} /><path d={path} fill="none" stroke="#FF5A1F" strokeWidth="2.5" pathLength="1" />{values.map((v, i) => <rect key={i} x={i / 60 * 1000} y={350 - (v % 32 + 8)} width="8" height={v % 32 + 8} fill="#6E1423" />)}</g>
        {point !== null && <g className={styles.crosshair}><line x1={point / 59 * 1000} x2={point / 59 * 1000} y1="0" y2="355" /><line x1="0" x2="1000" y1={pointY} y2={pointY} /><circle cx={point / 59 * 1000} cy={pointY} r="6" /></g>}
      </svg>{point !== null && <output className={styles.tooltip} style={{ left: `${Math.max(12, Math.min(78, point / 59 * 100))}%` }}>{price(current)}<small>Illustrative point {point + 1}</small></output>}<div className={styles.chartDates}><span>START OF {range}</span><span>ILLUSTRATIVE VOLUME</span><span>END OF {range}</span></div></div>
      <div className={styles.chartStats}>{[["Example high", price(a.price * 1.02)], ["Example low", price(a.price * .96)], ["Market category", a.category], ["Data source", "SYNXEX demonstration"]].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><p className={styles.tableNote}>Generated demonstration series. Move your pointer over the chart, or focus it and use the arrow keys to inspect points.</p>
    </div>
  </section>;
}

function Featured() {
  const ref = useRef<HTMLDivElement>(null); const [center, setCenter] = useState(1);
  const scroll = (direction: number) => ref.current?.scrollBy({ left: direction * 330, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  return <section className={`${styles.section} ${styles.featured}`}><div className={styles.headingRow}><Heading number="05" label="WORTH A CLOSER LOOK" title={<>Assets with <em>a world of possibility.</em></>} /><div className={styles.carouselArrows}><button aria-label="Previous featured assets" onClick={() => scroll(-1)}><ChevronLeft size={20} /></button><button aria-label="Next featured assets" onClick={() => scroll(1)}><ChevronRight size={20} /></button></div></div><div ref={ref} className={styles.carousel} onScroll={() => { const el = ref.current; if (el) setCenter(Math.round((el.scrollLeft + el.clientWidth / 2 - 155) / 330)); }}>{assets.slice(0, 6).map((a, i) => <article key={a.symbol} className={`${styles.featureCard} ${center === i ? styles.centerCard : ""}`} onPointerMove={pointerGlow} onPointerLeave={resetTilt}><div className={styles.featureImage}><Image unoptimized src={`/marketplace/${markets[a.market].slug}.webp`} alt="" fill sizes="310px" /><span>{a.symbol}</span></div><div className={styles.featureInfo}><span>{a.category}</span><h3>{a.name}</h3><div><strong>{price(a.price)}</strong><small className={a.change < 0 ? styles.negative : styles.positive}>{a.change > 0 ? "+" : ""}{a.change}%</small></div><Sparkline seed={i + 2} /><a href="#motion" onClick={() => window.dispatchEvent(new CustomEvent("marketplace-asset", { detail: i }))}>Explore asset <ArrowUpRight size={16} /></a><small className={styles.illustrative}>Illustrative values</small></div></article>)}</div></section>;
}

const hubs = [{ name: "New York", x: 237, y: 155, info: "Equities & capital markets" }, { name: "London", x: 472, y: 114, info: "Global currency discovery" }, { name: "Tokyo", x: 838, y: 171, info: "Asia-Pacific perspectives" }, { name: "Singapore", x: 752, y: 282, info: "Connected digital economy" }, { name: "Dubai", x: 624, y: 215, info: "A bridge between markets" }, { name: "Hong Kong", x: 784, y: 224, info: "International market gateway" }];
function GlobalNetwork() {
  const [hub, setHub] = useState(0); const [reduced, setReduced] = useState(false);
  useEffect(() => { const media = matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReduced(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update); }, []);
  return <section className={`${styles.section} ${styles.networkSection}`}><Heading number="06" label="NO BORDERS. MORE PERSPECTIVES." title={<>The world is connected.<br /><em>Your markets should be, too.</em></>} description="Discover the financial centers that shape a connected global economy." /><div className={styles.mapWrap} data-reveal><svg viewBox="0 0 1000 450" className={styles.worldMap} aria-hidden="true"><defs><pattern id="market-map-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#A3A3A3" /></pattern></defs><path fill="url(#market-map-dots)" d="M65 90 115 62 168 53 199 71 250 65 282 101 261 135 241 170 205 191 173 185 151 152 117 149 87 126ZM241 210 274 228 295 265 276 301 264 341 240 385 220 359 211 318 195 285 203 250ZM343 47 386 35 416 53 397 89 367 105 349 77ZM442 102 469 81 497 91 514 121 492 143 466 142 453 127ZM460 158 509 147 550 169 565 211 545 244 518 301 489 294 464 253 445 217ZM523 105 566 77 621 69 676 82 716 58 773 82 824 76 880 104 910 139 881 162 847 166 824 192 795 231 769 230 748 201 721 232 696 200 679 180 641 180 621 156 576 150 556 135ZM736 251 764 266 792 275 817 294 800 307 770 290 743 280ZM809 327 847 309 885 320 912 355 882 381 837 375 810 352ZM927 373 945 356 953 373 939 398Z" />{hubs.slice(1).map((h, i) => <g key={h.name}><path id={`market-connection-${i}`} d={`M237 155 Q${(237 + h.x) / 2} ${Math.min(155, h.y) - 90} ${h.x} ${h.y}`} className={styles.mapConnection} /><circle r="3" fill="#FF5A1F">{!reduced && <animateMotion dur={`${4 + i}s`} repeatCount="indefinite"><mpath href={`#market-connection-${i}`} /></animateMotion>}</circle></g>)}</svg>{hubs.map((h, i) => <button key={h.name} className={`${styles.hub} ${hub === i ? styles.activeHub : ""}`} style={{ left: `${h.x / 10}%`, top: `${h.y / 450 * 100}%` }} aria-label={`Explore ${h.name}: ${h.info}`} aria-pressed={hub === i} onClick={() => setHub(i)}><i /><span>{h.name}</span></button>)}<div className={styles.hubInfo} aria-live="polite"><Globe2 size={20} /><div><strong>{hubs[hub].name}</strong><span>{hubs[hub].info}</span></div><span className={styles.demoBadge}>GLOBAL MARKET HUB</span></div></div></section>;
}

export default function Marketplace() {
  const root = useRef<HTMLElement>(null); const [gsapLoaded, setGsapLoaded] = useState(false), [ready, setReady] = useState(false);
  useEffect(() => {
    const el = root.current; if (!el) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add(styles.entered); observer.unobserve(entry.target); } }), { threshold: .08 }); el.querySelectorAll("[data-reveal]").forEach(e => observer.observe(e)); return () => observer.disconnect();
  }, []);
  useEffect(() => { const w = window as AnimationWindow; if (ready && w.gsap && w.ScrollTrigger) w.gsap.registerPlugin(w.ScrollTrigger); }, [ready]);
  return <main ref={root} className={styles.marketplace}>
    <Script src="/marketplace/vendor/gsap.min.js" onReady={() => setGsapLoaded(true)} />{gsapLoaded && <Script src="/marketplace/vendor/ScrollTrigger.min.js" onReady={() => { const w = window as AnimationWindow; if (w.gsap && w.ScrollTrigger) w.gsap.registerPlugin(w.ScrollTrigger); setReady(true); }} />}
    <section className={styles.hero}><div className={styles.heroNoise} /><div className={styles.heroTop}><span className={styles.eyebrow}><i /> THE SYNXEX MARKETPLACE</span><span className={styles.heroEdition}>GLOBAL PERSPECTIVE / 01</span></div><div className={styles.heroGrid}><div className={styles.heroCopy}><div className={styles.heroKicker}><span /> YOUR WORLD. YOUR MARKETS.</div><h1 aria-label="Every Market. One Powerful Platform."><span>Every Market.</span><span>One Powerful</span><span className={styles.orangeText}>Platform.</span></h1><p>Explore global financial markets, discover digital assets, and access market insights through one seamless financial ecosystem.</p><div className={styles.actions}><Action href="#markets">Explore Markets</Action><Action href="#featured" secondary>Discover Assets</Action></div><div className={styles.heroTrust}><span><Globe2 size={14} /> Global by design</span><span><Layers3 size={14} /> Connected by SYNXEX</span></div></div><Globe /></div><div className={styles.heroBottom}><span><ArrowDown size={15} /> SCROLL TO DISCOVER</span><p>One ecosystem. <strong>Limitless perspectives.</strong></p><span>06 MARKET CATEGORIES</span></div></section>
    <div className={styles.ticker} aria-label="Illustrative asset snapshot"><span className={styles.tickerLabel}><i /> MARKET SNAPSHOT<small>ILLUSTRATIVE DATA</small></span><div className={styles.tickerAssets}>{assets.slice(0, 6).map(a => <span key={a.symbol}><b>{a.symbol}</b>{price(a.price)}<small className={a.change < 0 ? styles.negative : styles.positive}>{a.change > 0 ? "+" : ""}{a.change}%</small></span>)}</div></div>
    <section id="markets" className={styles.section}><div className={styles.headingRow}><Heading number="01" label="EXPLORE YOUR NEXT PERSPECTIVE" title={<>Every market has a story.<br /><em>Find yours.</em></>} description="Six markets. Endless ways to see the world. Turn a card to discover what lies beneath." /><span className={styles.turnNote}><Rotate3D size={20} /> HOVER, TAP OR PRESS ENTER<br />TO TURN A NEW PAGE</span></div><div className={styles.marketGrid}>{markets.map((m, i) => <FlipCard key={m.slug} market={m} index={i} />)}</div></section>
    <Showcase ready={ready} /><Overview /><MarketChart /><div id="featured"><Featured /></div><GlobalNetwork />
    <section className={styles.section}><Heading number="07" label="THE SYNXEX ADVANTAGE" title={<>A better way <em>to explore.</em></>} /><div className={styles.benefits}>{[{ icon: Layers3, title: "Unified Market Discovery", text: "Explore multiple financial markets through one platform." }, { icon: Activity, title: "Market Insights", text: "Discover financial information and market trends." }, { icon: Compass, title: "Intuitive Experience", text: "Navigate financial markets through a clean and accessible interface." }, { icon: Network, title: "Connected Financial Ecosystem", text: "Explore the broader SYNXEX platform." }].map((f, i) => <article key={f.title} className={styles.benefit} onPointerMove={pointerGlow} onPointerLeave={resetTilt} data-reveal><div><f.icon size={25} /><span>0{i + 1}</span></div><h3>{f.title}</h3><p>{f.text}</p><span className={styles.benefitLine} /></article>)}</div></section>
    <section className={styles.finalCta} data-reveal><span className={styles.eyebrow}><Sparkles size={14} /> A WORLD OF POSSIBILITY</span><h2>Explore the Markets.<br /><em>Discover What’s Possible.</em></h2><p>Your gateway to a connected world of financial markets.</p><div className={styles.actions}><Action href="#markets">Explore Marketplace</Action><Action href="/about" secondary>Discover SYNXEX</Action></div><div className={styles.ctaTrail} /><span className={styles.finalNote}>PHASE 1 · MARKET DISCOVERY · INFORMATIONAL EXPERIENCE</span></section>
  </main>;
}
