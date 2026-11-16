"use client";
import Link from "next/link";
import { useState } from "react";
import { PLANS } from "@/lib/content";
export default function Pricing() {
  const [six, setSix] = useState(true);
  return (<>
    <div className="mb-8 inline-flex rounded-full border border-line bg-white p-1 text-sm" role="group" aria-label="Premium term">
      {[[true, "6 months"], [false, "3 months"]].map(([v, l]) => <button key={String(v)} aria-pressed={six === v} onClick={() => setSix(v as boolean)}
        className={`rounded-full px-5 py-2 transition ${six === v ? "bg-navy text-cream" : "text-muted"}`}>{l as string}</button>)}
    </div>
    <div className="grid gap-5 md:grid-cols-3">
      {PLANS.map((p, i) => <div key={p.n} className={`rounded-3xl border p-8 ${i === 2 ? "border-navy bg-navy text-cream" : "border-line bg-white"}`}>
        {i === 2 && <span className="text-xs tracking-widest text-coral">{six ? "BEST VALUE" : "3-MONTH TERM"}</span>}
        <h2 className="font-display text-2xl">{p.n}</h2>
        <p className="mt-2 font-display text-4xl">{i === 2 ? (six ? "$1,399" : "$1,899") : p.p}{i > 0 && <span className="text-base opacity-70"> /month</span>}</p>
        <p className={`mt-3 text-sm ${i === 2 ? "text-cream/80" : "text-muted"}`}>{p.d}</p>
        <ul className="my-6 space-y-2 text-sm">{p.f.map(x => <li key={x} className="flex gap-2"><span className="mt-2 size-2 shrink-0 rounded-full bg-coral" />{x}</li>)}</ul>
        <Link href="/audit" className="inline-block rounded-full bg-coral px-6 py-3 text-sm font-medium text-navy transition hover:-translate-y-0.5">{p.cta} →</Link>
      </div>)}
    </div>
    <p className="mt-8 max-w-[70ch] text-sm text-muted">Prices in USD. We agree the scope before you start. Results take time, and we commit to the work and honest reporting, not guaranteed rankings.</p>
  </>);
}
