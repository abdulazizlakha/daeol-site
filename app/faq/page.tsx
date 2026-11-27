import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQList from '@/components/FAQList';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQ: AEO, GEO and SEO Questions',
  description: 'Answers to common questions about answer engine optimization, generative engine optimization, timelines and pricing.',
  alternates: { canonical: '/faq' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />
      <PageHero crumb="FAQ" title="Common questions." lede="Straight answers about AEO, GEO, timelines and pricing." />
      <section className="section"><div className="wrap" style={{ maxWidth: 980 }}><FAQList items={FAQS} /></div></section>
      <CTA />
    </>
  );
}
