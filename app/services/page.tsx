import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Arrow from '@/components/Arrow';
import JsonLd from '@/components/JsonLd';
import { SERVICES } from '@/lib/data';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AEO, GEO & SEO Services',
  description: 'Six services that work as one system: AI visibility audits, AEO, GEO, technical SEO and schema, answer-first content and monthly reporting.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Service', name: s.title, description: s.body, provider: { '@type': 'Organization', name: 'DAEOL', url: SITE.url } } })) }} />
      <PageHero crumb="Services" title="Six services, one visibility system." lede="From the first AI visibility audit to monthly reporting, every service feeds the next." />
      <section className="section">
        <div className="wrap">
          <div className="svc-stack">
            {SERVICES.map((s, i) => (
              <article key={s.slug} id={s.slug} className={`svc c${i + 1}`} style={{ ['--i' as string]: i }} data-svc>
                <div className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div><h2 className="h3" style={{ fontSize: 'clamp(1.7rem,3.2vw,2.8rem)', marginBottom: 14 }}>{s.title}</h2><p>{s.body}</p></div>
                <ul>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
          <div data-fade><Link href="/pricing" className="btn ghost">See pricing <Arrow /></Link></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
