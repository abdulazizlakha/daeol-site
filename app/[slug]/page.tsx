import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Sections from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { Prose, PageFaq, Cta } from "@/components/Blocks";
import { Words, Glow } from "@/components/FX";
import { PAGES, FAQS, SITE } from "@/lib/content";
import { EXTRA } from "@/lib/extra";
import { meta, crumbs } from "@/lib/seo";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => PAGES.map(p => ({ slug: p.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params; const p = PAGES.find(x => x.slug === slug); return p ? meta(p) : {};
}
const faqLd = (idx: number[]) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: idx.map(i => ({ "@type": "Question", name: FAQS[i][0], acceptedAnswer: { "@type": "Answer", text: FAQS[i][1] } })) });
export default async function Page({ params }: P) {
  const { slug } = await params; const p = PAGES.find(x => x.slug === slug); if (!p) notFound();
  const x = EXTRA[p.slug];
  const extra = p.slug === "faq" ? faqLd(FAQS.map((_, i) => i))
    : p.slug === "services" ? { "@context": "https://schema.org", "@type": "ItemList", itemListElement: (p.blocks[0] as any).items.map((c: any, i: number) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Service", name: c.t, description: c.d, provider: { "@type": "Organization", name: SITE.name, url: SITE.url } } })) }
    : x?.faq.length ? faqLd(x.faq) : null;
  return (
    <main>
      <JsonLd data={crumbs(p)} />{extra && <JsonLd data={extra} />}
      <header className="relative overflow-hidden bg-navy px-6 pb-24 pt-40 text-cream">
        <i className="blob -left-20 -top-20 size-[480px] bg-[#3B5BA5] opacity-50" /><i className="blob right-0 top-10 size-[420px] bg-coral opacity-40 [animation-delay:-6s]" />
        <div className="grid-bg absolute inset-0" /><Glow />
        <div className="relative mx-auto max-w-[1160px]">
          <p className="mb-5 text-xs uppercase tracking-[.2em] text-coral">DAEOL / {p.nav}</p>
          <h1 className="max-w-4xl font-display text-4xl font-light leading-[1.05] md:text-7xl"><Words text={p.h1} /></h1>
          <Reveal delay={400}><p className="mt-6 max-w-[62ch] text-lg text-cream/80">{p.intro}</p></Reveal></div>
      </header>
      <div className="mx-auto max-w-[1160px] px-6 py-20"><Sections blocks={p.blocks} /></div>
      {x?.prose.map((b, i) => <Prose key={b.h} {...b} alt={i % 2 === 0} />)}
      {x && x.faq.length > 0 && p.slug !== "faq" && <PageFaq idx={x.faq} />}
      {p.slug !== "audit" && <Cta />}
    </main>);
}
