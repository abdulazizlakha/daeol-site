import Link from "next/link";
import Reveal from "./Reveal";
import { Magnetic, Parallax } from "./FX";
import { FAQS } from "@/lib/content";
export function Prose({ h, p, li, alt }: { h: string; p: string[]; li?: string[]; alt?: boolean }) {
  return (
    <section className={alt ? "bg-cream2" : ""}><div className="mx-auto grid max-w-[1160px] gap-10 px-6 py-20 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><h2 className="font-display text-3xl font-light leading-tight md:sticky md:top-28 md:text-4xl">{h}</h2></Reveal>
      <Reveal delay={120}><div className="space-y-4 text-[17px] text-muted">{p.map(x => <p key={x}>{x}</p>)}
        {li && <ul className="grid gap-3 pt-2 text-navy">{li.map(l => <li key={l} className="flex gap-3 rounded-2xl border border-line bg-white p-4 text-[15px] transition hover:translate-x-1.5 hover:border-coral"><span className="font-display text-coral">✓</span>{l}</li>)}</ul>}</div></Reveal>
    </div></section>);
}
export function PageFaq({ idx }: { idx: number[] }) {
  return (
    <section className="mx-auto max-w-[900px] px-6 py-20"><h2 className="mb-8 font-display text-3xl font-light">Common questions</h2>
      <div className="divide-y divide-line rounded-3xl border border-line bg-white">{idx.map(i => <details key={i} className="group p-6"><summary className="flex cursor-pointer list-none justify-between font-display text-lg">{FAQS[i][0]}<span className="text-coral transition group-open:rotate-45">+</span></summary><p className="mt-3 text-muted">{FAQS[i][1]}</p></details>)}</div></section>);
}
export function Cta({ title = "Find out how AI sees your brand today." }: { title?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-28 text-center text-cream">
      <Parallax speed={0.18} className="absolute left-1/4 top-0 size-[420px] rounded-full bg-coral/40 blur-[100px]"><i /></Parallax>
      <Parallax speed={-0.1} className="absolute right-[15%] top-10 size-[380px] rounded-full bg-[#3B5BA5]/50 blur-[100px]"><i /></Parallax>
      <div className="relative mx-auto max-w-3xl"><h2 className="font-display text-4xl font-light leading-tight md:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-cream/75">Free audit: website review, AI citation check across selected prompts, competitor visibility and prioritized next steps.</p>
        <div className="mt-9"><Magnetic><Link href="/audit" className="inline-block rounded-full bg-coral px-9 py-4 font-medium text-navy shadow-[0_10px_40px_rgba(255,107,91,.45)]">Get Your Free Audit →</Link></Magnetic></div></div>
    </section>);
}
