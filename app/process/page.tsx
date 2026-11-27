import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { STEPS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Process: From Audit to Action',
  description: 'Discover, audit and prioritize, optimize, then measure and improve. A four-step AEO, GEO and SEO process with clear reporting.',
  alternates: { canonical: '/process' },
};

export default function Page() {
  return (
    <>
      <PageHero crumb="Our Process" title="From audit to action in four steps." lede="A repeatable path that turns what we learn about your brand into changes you can see and measure." />
      <section className="section dark proc-page">
        <div className="wrap two">
          {STEPS.map((s, i) => (
            <article className="step" key={s.title} data-fade data-delay={(i % 2) * 0.1}>
              <i>{String(i + 1).padStart(2, '0')}</i>
              <div><h2 className="h3" style={{ margin: '22px 0 10px', fontSize: '2rem' }}>{s.title}</h2><p>{s.body}</p></div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
