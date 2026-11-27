import Link from 'next/link';
import HeroScene from '@/components/HeroScene';
import AnswerCard from '@/components/AnswerCard';
import Marquee from '@/components/Marquee';
import ShiftTabs from '@/components/ShiftTabs';
import Industries from '@/components/Industries';
import FAQList from '@/components/FAQList';
import CTA from '@/components/CTA';
import Magnetic from '@/components/Magnetic';
import Arrow from '@/components/Arrow';
import JsonLd from '@/components/JsonLd';
import { PLATFORMS, SERVICES, STEPS, FAQS } from '@/lib/data';

export default function Home() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.slice(0, 5).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />

      <section className="hero">
        <HeroScene />
        <div className="wrap hero-in">
          <div>
            <h1 className="h1">
              <span className="l1" data-split data-delay="0.2">Be the answer.</span>
              <br />
              <span className="l2" data-split data-delay="0.55">Be the choice.</span>
            </h1>
            <div className="hero-copy">
              <p className="lede" data-fade data-delay="0.9">DAEOL is an AEO, GEO and SEO agency helping brands in the USA, Canada, the UK and Australia get discovered, understood and trusted in AI answers and search results.</p>
              <div className="hero-cta" data-fade data-delay="1.1">
                <Magnetic><Link href="/audit" className="btn">Get your free AI visibility audit <Arrow /></Link></Magnetic>
                <Link href="/services" className="btn ghost">Explore services</Link>
              </div>
            </div>
          </div>
          <AnswerCard />
        </div>
        <div className="scroll-cue" aria-hidden="true"><i />Scroll</div>
      </section>

      <Marquee items={PLATFORMS} />

      <section className="section">
        <div className="wrap">
          <p className="kicker" data-fade>The shift</p>
          <h2 className="h2" data-split style={{ maxWidth: '16ch', marginTop: 18 }}>Customers ask AI first. Is your brand in the answer?</h2>
          <p className="lede" data-fade style={{ marginTop: 24 }}>Search is no longer just ten blue links. A complete visibility plan covers classic rankings and the answers AI tools write. Pick a layer to see what we do.</p>
          <ShiftTabs />
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="svc-head">
            <h2 className="h2" data-split>Six services, one visibility system</h2>
            <p className="lede" data-fade>Each service feeds the next, so the same clear, consistent information works in search results and in AI answers.</p>
          </div>
          <div className="svc-stack">
            {SERVICES.map((s, i) => (
              <article key={s.slug} className={`svc c${i + 1}`} style={{ ['--i' as string]: i }} data-svc>
                <div className="n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div><h3>{s.title}</h3><p>{s.body}</p></div>
                <ul>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
          <div data-fade style={{ marginTop: 20 }}><Link href="/services" className="btn ghost">See all services <Arrow /></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="stats">
            <div className="stat"><b data-count="4">4</b><span>Markets served</span></div>
            <div className="stat"><b data-count="6">6</b><span>Platforms covered</span></div>
            <div className="stat"><b data-count="6">6</b><span>Core services</span></div>
            <div className="stat"><b data-count="3" data-suffix=" mo">3<em> mo</em></b><span>Minimum on Basic</span></div>
          </div>
        </div>
      </section>

      <div><section className="hproc" data-hproc>
        <div className="wrap hproc-top">
          <p className="kicker" data-fade>Process</p>
          <h2 className="h2" data-split style={{ marginTop: 18, maxWidth: '14ch' }}>From audit to action in four steps</h2>
        </div>
        <div className="hrail" data-hrail>
          {STEPS.map((s, i) => (
            <article className="step" key={s.title}>
              <i>{String(i + 1).padStart(2, '0')}</i>
              <div><h3>{s.title}</h3><p>{s.body}</p></div>
            </article>
          ))}
        </div>
        <div className="bar" aria-hidden="true"><i data-hbar /></div>
        <div style={{ height: 50 }} />
      </section></div>

      <section className="section">
        <div className="wrap">
          <p className="kicker" data-fade>Industries</p>
          <h2 className="h2" data-split style={{ marginTop: 18, maxWidth: '16ch' }}>Built around the questions your industry asks</h2>
          <Industries />
        </div>
      </section>

      <Marquee items={['Free audit', 'Basic Answer from $498/mo', 'Premium from $1,399/mo', 'No guaranteed-ranking claims']} tone="coral" />

      <section className="section paper">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="h2" data-split>Simple, transparent pricing</h2>
            <p className="lede" data-fade style={{ margin: '24px 0 32px' }}>Free audit. Basic Answer from $498/month. Premium from $1,399/month. No guaranteed-ranking claims, just honest work and reporting.</p>
            <div data-fade><Link href="/pricing" className="btn">Compare plans <Arrow /></Link></div>
          </div>
          <div data-fade><FAQList items={FAQS.slice(0, 4)} /></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
