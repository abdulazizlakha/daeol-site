import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Industries from '@/components/Industries';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'AEO, GEO and SEO for SaaS, professional services, marketing, e-commerce, healthcare and local services.',
  alternates: { canonical: '/industries' },
};

export default function Page() {
  return (
    <>
      <PageHero crumb="Industries" title="Built around the questions your industry asks." lede="Every industry has its own buying questions. We start there." />
      <section className="section"><div className="wrap"><Industries /></div></section>
      <CTA />
    </>
  );
}
