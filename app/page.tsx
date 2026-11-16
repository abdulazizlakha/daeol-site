import Link from "next/link";
import Reveal from "@/components/Reveal";
import Orbit from "@/components/Orbit";
import { Cta, PageFaq } from "@/components/Blocks";
import { AnswerDemo, Card3D, Count, Explainer, Glow, Magnetic, Marquee, Parallax, Timeline, Words } from "@/components/FX";
import { items } from "@/lib/extra";
const PLAT = ["Google", "ChatGPT", "Perplexity", "Gemini", "Bing"];
const TABS = [
 { k: "SEO", h: "Be found in search results", p: "The foundation. If crawlers can’t reach and understand your pages, nothing else works.", li: ["Technical health, crawlability and speed", "Keyword and search-intent relevance", "Helpful content and internal linking", "Organic visibility and click-through"] },
 { k: "AEO", h: "Be the direct answer", p: "Answer Engine Optimization shapes pages so tools can lift a clear, accurate answer to a customer’s question.", li: ["Answer-first page structure", "FAQ and service pages built around real questions", "Structured data that labels what each page is", "Clear, quotable definitions and facts"] },
 { k: "GEO", h: "Be understood and represented", p: "Generative Engine Optimization makes your brand’s context and facts consistent so AI describes you correctly.", li: ["Consistent brand and entity information", "Topical coverage that shows expertise", "Authority signals and ethical digital PR", "Prompt monitoring across AI platforms"] },
];
export default function Home() {
  return (<main>
    <header className="relative flex min-h-screen items-center overflow-hidden bg-navy px-6 pb-20 pt-32 text-cream">
      <i className="blob left-[38%] top-[12%] size-[560px] bg-coral opacity-45" /><i className="blob -left-[10%] -top-[10%] size-[620px] bg-[#3B5BA5] opacity-50 [animation-delay:-5s]" /><i className="blob -right-[8%] bottom-[8%] size-[420px] bg-[#7D4A7A] opacity-35 [animation-delay:-9s]" />
      <div className="grid-bg absolute inset-0" /><Glow />
      <div className="relative mx-auto grid w-full max-w-[1160px] items-center gap-12 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <span className="rounded-full border border-cream/30 px-4 py-1.5 text-xs uppercase tracking-[.14em]">AI Search Optimization · AEO · GEO</span>
          <h1 className="mt-6 font-display text-5xl font-light leading-[1.02] md:text-8xl"><Words text="Be the Answer." /><b className="block font-light text-coral"><Words text="Be the Choice." /></b></h1>
          <Reveal delay={600}><p className="mt-6 max-w-[56ch] text-lg text-cream/80">DAEOL is an AEO, GEO and SEO agency helping brands in the USA, Canada, the UK and Australia get discovered, understood and trusted in AI answers and search results.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Magnetic><Link href="/audit" className="inline-block rounded-full bg-coral px-8 py-4 font-medium text-navy shadow-[0_10px_40px_rgba(255,107,91,.4)]">Get Your Free AI Visibility Audit →</Link></Magnetic>
            <Magnetic><Link href="/services" className="inline-block rounded-full border border-cream/45 px-8 py-4 transition hover:bg-cream/10">Explore Services</Link></Magnetic></div></Reveal>
        </div>
        <Reveal delay={800}><AnswerDemo /></Reveal>
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[.3em] text-cream/50">Scroll</p>
    </header>

    <div className="bg-navy"><Marquee items={["ChatGPT", "Perplexity", "Google Gemini", "Google Search", "Microsoft Bing", "Copilot"]} /></div>

    <section className="mx-auto max-w-[1160px] px-6 py-28">
      <Reveal><p className="mb-3 text-xs uppercase tracking-[.2em] text-coral">The shift</p><h2 className="max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">Customers ask AI first. Is your brand in the answer?</h2>
        <p className="mt-5 max-w-[60ch] text-lg text-muted">Search is no longer just ten blue links. A complete visibility plan covers classic rankings and the answers AI tools write. Pick a layer to see what we do.</p></Reveal>
      <Reveal delay={150} className="mt-12"><Explainer tabs={TABS} /></Reveal>
    </section>

    <section className="bg-cream2 py-28"><div className="mx-auto max-w-[1160px] px-6">
      <Reveal><p className="mb-3 text-xs uppercase tracking-[.2em] text-coral">Services</p><h2 className="max-w-2xl font-display text-4xl font-light md:text-5xl">Six services, one visibility system</h2></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items("services").map((c, i) =>
        <Reveal key={c.t} delay={i * 80} className="h-full"><Card3D className="h-full rounded-3xl border border-line bg-white p-8 hover:shadow-[0_24px_50px_rgba(20,33,61,.12)]">
          <span className="relative mb-6 grid size-11 place-items-center rounded-xl bg-coral/15 font-display text-sm text-coral">{c.tag}</span><h3 className="relative mb-2 font-display text-xl">{c.t}</h3><p className="relative text-[15px] text-muted">{c.d}</p></Card3D></Reveal>)}</div>
      <div className="mt-10 text-center"><Link href="/services" className="text-coral underline-offset-4 hover:underline">See all services →</Link></div>
    </div></section>

    <section className="bg-navy py-24 text-cream"><div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
      {[[4, "", "Markets served"], [5, "", "Platforms covered"], [6, "", "Core services"], [3, " mo", "Minimum on Basic"]].map(([n, s, l]) =>
        <Reveal key={String(l)}><p className="font-display text-6xl font-light text-coral"><Count to={n as number} suffix={s as string} /></p><p className="mt-2 text-sm text-cream/70">{l}</p></Reveal>)}</div></section>

    <section className="relative overflow-hidden bg-navy px-6 pb-28 text-cream"><div className="mx-auto grid max-w-[1160px] items-center gap-16 md:grid-cols-2">
      <div><Reveal><p className="mb-3 text-xs uppercase tracking-[.2em] text-coral">Process</p><h2 className="mb-12 font-display text-4xl font-light md:text-5xl">From audit to action in four steps</h2></Reveal><Timeline items={items("process")} /></div>
      <Parallax speed={0.06}><Orbit items={PLAT} /><p className="mt-8 text-center text-xs text-cream/55">We don’t control these platforms or claim partnerships with them.</p></Parallax>
    </div></section>

    <section className="mx-auto max-w-[1160px] px-6 py-28">
      <Reveal><p className="mb-3 text-xs uppercase tracking-[.2em] text-coral">Industries</p><h2 className="max-w-2xl font-display text-4xl font-light md:text-5xl">Built around the questions your industry asks</h2></Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">{items("industries").map((c, i) => <Reveal key={c.t} delay={i * 60}>
        <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:bg-navy hover:text-cream" data-hover>
          <h3 className="font-display text-lg">{c.t}</h3><p className="mt-2 max-h-0 overflow-hidden text-sm opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-80">{c.d}</p><span className="mt-3 block text-coral">+</span></div></Reveal>)}</div>
    </section>

    <section className="bg-cream2 py-24 text-center"><Reveal><h2 className="font-display text-4xl font-light md:text-5xl">Simple, transparent pricing</h2>
      <p className="mx-auto mt-4 max-w-[54ch] text-muted">Free audit. Basic Answer from $498/month. Premium from $1,399/month. No guaranteed-ranking claims, just honest work and reporting.</p>
      <div className="mt-8"><Magnetic><Link href="/pricing" className="inline-block rounded-full bg-navy px-8 py-4 text-cream transition hover:shadow-xl">Compare plans →</Link></Magnetic></div></Reveal></section>

    <PageFaq idx={[0, 1, 3, 4]} />
    <Cta />
  </main>);
}
