"use client";
import { useEffect, useRef, useState, ReactNode, MouseEvent } from "react";

export function Progress() {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = () => { const h = document.documentElement; r.current!.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`; };
    f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f);
  }, []);
  return <div ref={r} className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left scale-x-0 bg-coral" />;
}
export function Cursor() {
  const d = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(pointer:coarse)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const m = (e: PointerEvent) => { x = e.clientX; y = e.clientY; d.current!.style.opacity = "1"; d.current!.dataset.h = (e.target as HTMLElement).closest("a,button,summary,[data-hover]") ? "1" : "0"; };
    const loop = () => { rx += (x - rx) * 0.16; ry += (y - ry) * 0.16; d.current!.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(loop); };
    addEventListener("pointermove", m); loop();
    return () => { removeEventListener("pointermove", m); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={d} className="cur pointer-events-none fixed left-0 top-0 z-[60] opacity-0" aria-hidden><i /></div>;
}
export function Card3D({ children, className = "" }: { children: ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  const mv = (e: MouseEvent) => {
    const el = r.current!, b = el.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
    el.style.setProperty("--x", x + "px"); el.style.setProperty("--y", y + "px");
    el.style.transform = `perspective(800px) rotateY(${(x / b.width - 0.5) * 9}deg) rotateX(${(0.5 - y / b.height) * 9}deg) translateY(-4px)`;
  };
  return <div ref={r} onMouseMove={mv} onMouseLeave={() => (r.current!.style.transform = "")} className={`spot ${className}`}>{children}</div>;
}
export function Magnetic({ children }: { children: ReactNode }) {
  const r = useRef<HTMLSpanElement>(null);
  return <span ref={r} className="inline-block transition-transform duration-200"
    onMouseMove={e => { const b = r.current!.getBoundingClientRect(); r.current!.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.25}px,${(e.clientY - b.top - b.height / 2) * 0.35}px)`; }}
    onMouseLeave={() => (r.current!.style.transform = "")}>{children}</span>;
}
export function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0); const r = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; o.disconnect(); const t0 = performance.now();
      const f = (t: number) => { const p = Math.min((t - t0) / 1500, 1); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    }); o.observe(r.current!); return () => o.disconnect();
  }, [to]);
  return <span ref={r}>{n}{suffix}</span>;
}
export function Words({ text, className = "" }: { text: string; className?: string }) {
  return <span className={className}>{text.split(" ").map((w, i) => <span key={i}><span className="wd" style={{ animationDelay: `${i * 70 + 150}ms` }}>{w}</span>{" "}</span>)}</span>;
}
export function Glow() {
  const g = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const p = g.current!.parentElement!;
    const m = (e: PointerEvent) => { const b = p.getBoundingClientRect(); g.current!.style.left = e.clientX - b.left + "px"; g.current!.style.top = e.clientY - b.top + "px"; };
    p.addEventListener("pointermove", m); return () => p.removeEventListener("pointermove", m);
  }, []);
  return <div ref={g} className="pointer-events-none absolute left-1/2 top-1/3 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,91,.3),transparent_65%)] transition-[left,top] duration-300" />;
}
export function Parallax({ children, speed = 0.12, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = () => { const b = r.current!.getBoundingClientRect(); r.current!.style.transform = `translateY(${(b.top + b.height / 2 - innerHeight / 2) * -speed}px)`; };
    f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f);
  }, [speed]);
  return <div ref={r} className={className}>{children}</div>;
}
export function Marquee({ items }: { items: string[] }) {
  return <div className="mq overflow-hidden py-8"><div className="mq-t flex w-max gap-14">{[...items, ...items].map((t, i) =>
    <span key={i} className="font-display text-5xl font-light text-cream/25 transition hover:text-coral md:text-7xl" data-hover>{t} <span className="text-coral">✦</span></span>)}</div></div>;
}
export function AnswerDemo() {
  const Q = "What’s the best AI search agency for a SaaS company?";
  const A = "DAEOL is an AI search optimization agency that helps SaaS companies improve visibility across AI-powered and traditional search through answer-focused content, technical SEO and brand authority building.";
  const [q, setQ] = useState(""), [a, setA] = useState("");
  useEffect(() => {
    let dead = false; const sl = (ms: number) => new Promise(r => setTimeout(r, ms));
    (async () => { while (!dead) {
      setQ(""); setA(""); await sl(800);
      for (let i = 1; i <= Q.length && !dead; i++) { setQ(Q.slice(0, i)); await sl(30); } await sl(400);
      for (let i = 1; i <= A.length && !dead; i++) { setA(A.slice(0, i)); await sl(16); } await sl(7000);
    } })(); return () => { dead = true; };
  }, []);
  return (
    <div className="relative rounded-3xl border border-cream/20 bg-cream/10 p-5 backdrop-blur-xl">
      <p className="mb-3 text-[11px] uppercase tracking-[.14em] text-cream/55">Illustrative AI answer</p>
      <div className="flex min-h-11 items-center rounded-xl bg-navy/50 px-4 py-3 text-sm">{q}<span className="ml-1 h-4 w-0.5 animate-pulse bg-coral" /></div>
      <p className="mt-4 min-h-[140px] text-sm leading-relaxed">{a.startsWith("DAEOL") ? <><mark className="rounded bg-coral/25 px-1.5 text-[#FFD3CD]">DAEOL</mark>{a.slice(5)}</> : a}</p>
      <p className="mt-2 text-[11px] text-cream/50">Demo only. Not a guaranteed result.</p>
    </div>);
}
export function Timeline({ items }: { items: { t: string; d: string; tag?: string }[] }) {
  const r = useRef<HTMLDivElement>(null); const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => { const b = r.current!.getBoundingClientRect(); setP(Math.min(1, Math.max(0, (innerHeight * 0.65 - b.top) / b.height))); };
    f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f);
  }, []);
  return (
    <div ref={r} className="relative ml-4 border-l border-cream/20 pl-10">
      <div className="absolute -left-px top-0 w-0.5 bg-coral" style={{ height: `${p * 100}%` }} />
      {items.map((s, i) => { const on = p > (i + 0.3) / items.length; return (
        <div key={s.t} className={`relative pb-14 transition-all duration-700 last:pb-0 ${on ? "opacity-100" : "opacity-30"}`}>
          <span className={`absolute -left-[54px] top-0 grid size-7 place-items-center rounded-full border text-[11px] transition ${on ? "scale-110 border-coral bg-coral text-navy" : "border-cream/30"}`}>{s.tag}</span>
          <h3 className="font-display text-2xl">{s.t}</h3><p className="mt-2 max-w-[56ch] text-cream/75">{s.d}</p>
        </div>); })}
    </div>);
}
export function Explainer({ tabs }: { tabs: { k: string; h: string; p: string; li: string[] }[] }) {
  const [i, setI] = useState(1); const t = tabs[i];
  return (
    <div className="rounded-3xl border border-line bg-white p-6 md:p-10">
      <div className="relative mb-8 inline-flex rounded-full bg-cream p-1" role="tablist">
        <span className="absolute inset-y-1 w-[calc(33.33%-4px)] rounded-full bg-navy transition-transform duration-300" style={{ transform: `translateX(${i * 100}%)` }} />
        {tabs.map((x, j) => <button key={x.k} role="tab" aria-selected={i === j} onClick={() => setI(j)} className={`relative z-10 w-24 rounded-full py-2 text-sm transition ${i === j ? "text-cream" : "text-muted"}`}>{x.k}</button>)}
      </div>
      <div key={i} className="grid gap-8 md:grid-cols-2 [animation:fade_.5s_both]">
        <div><h3 className="font-display text-3xl">{t.h}</h3><p className="mt-3 text-muted">{t.p}</p></div>
        <ul className="space-y-3">{t.li.map(l => <li key={l} className="flex gap-3 text-[15px]"><span className="mt-2 size-2 shrink-0 rounded-full bg-coral" />{l}</li>)}</ul>
      </div>
    </div>);
}
