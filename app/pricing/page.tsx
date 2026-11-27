import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PricingTable from '@/components/PricingTable';
import FAQList from '@/components/FAQList';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AEO, GEO & SEO Pricing',
  description: 'Free audit, Basic Answer at $498/month, Premium from $1,399/month. Transparent USD pricing, no guaranteed rankings.',
  alternates: { canonical: '/pricing' },
};

export default function Page() {
  const offers = [
    { n: 'Audit Check', p: '0' }, { n: 'Basic Answer', p: '498' }, { n: 'Premium (6-month term)', p: '1399' },
  ];
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': offers.map((o) => ({ '@type': 'Offer', name: o.n, price: o.p, priceCurrency: 'USD' })) }} />
      <PageHero crumb="Pricing" title="Simple packages for AEO, GEO and SEO growth." lede="Three options: a free audit, Basic Answer at $498/month (3-month minimum), and Premium at $1,399/month on a 6-month term or $1,899/month on a 3-month term." />
      <section className="section">
        <div className="wrap">
          <PricingTable />
          <p className="note">Prices in USD. We agree the scope before you start. Results take time, and we commit to the work and honest reporting, not guaranteed rankings.</p>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="h2" data-split>How terms and scope work</h2>
            <p className="lede" data-fade style={{ marginTop: 24 }}>Every package is month to month after its minimum term. Scope is agreed in writing before work starts, so you know what is included. Premium costs less per month on the 6-month term because the longer commitment lets us plan bigger content and authority work.</p>
          </div>
          <ul className="checks card" data-fade><li>Prices are in USD</li><li>Audit Check is free with no obligation</li><li>Reporting is included in paid plans</li></ul>
        </div>
      </section>
      <section className="section"><div className="wrap"><h2 className="h2" data-split style={{ marginBottom: 40 }}>Common questions</h2><FAQList items={[FAQS[5], FAQS[4], FAQS[3]]} /></div></section>
      <CTA />
    </>
  );
}
