import Reveal from "./Reveal";
import Pricing from "./Pricing";
import AuditForm from "./AuditForm";
import { Card3D, Timeline } from "./FX";
import { Block, FAQS } from "@/lib/content";
export default function Sections({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((b, i) => {
    if (b.k === "pricing") return <Pricing key={i} />;
    if (b.k === "form") return <AuditForm key={i} />;
    if (b.k === "faq") return <div key={i} className="divide-y divide-line rounded-3xl border border-line bg-white">{FAQS.map(([q, a]) =>
      <details key={q} className="group p-6"><summary className="flex cursor-pointer list-none justify-between font-display text-lg">{q}<span className="text-coral transition group-open:rotate-45">+</span></summary><p className="mt-3 text-muted">{a}</p></details>)}</div>;
    if (b.k === "steps") return <div key={i} className="-mx-6 rounded-3xl bg-navy px-6 py-14 text-cream md:mx-0 md:px-14"><Timeline items={b.items} /></div>;
    return <div key={i}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {b.items.map((c, j) => <Reveal key={c.t} delay={j * 80} className="h-full"><Card3D className="h-full rounded-3xl border border-line bg-white p-8 hover:shadow-[0_24px_50px_rgba(20,33,61,.12)]">
          {c.tag && <span className="relative mb-3 block text-xs uppercase tracking-[.16em] text-coral">{c.tag}</span>}
          <h2 className="relative mb-2 font-display text-xl">{c.t}</h2><p className="relative text-[15px] text-muted">{c.d}</p></Card3D></Reveal>)}
      </div>
      {b.note && <p className="mt-8 max-w-[70ch] text-sm text-muted">{b.note}</p>}
    </div>;
  })}</>;
}
