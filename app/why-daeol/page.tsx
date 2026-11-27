import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQList from '@/components/FAQList';
import CTA from '@/components/CTA';
import { FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Why DAEOL | SEO, AEO & GEO Together',
  description: 'Customers research with Google and AI tools. DAEOL runs SEO, AEO and GEO as one strategy so your brand is found and cited in both.',
  alternates: { canonical: '/why-daeol' },
};

export default function Page() {
  return (
    <>
      <PageHero crumb="Why DAEOL" title="Search is changing. Your visibility should too." lede="Customers now research products and compare services in both traditional search engines and AI tools like ChatGPT, Gemini and Perplexity. A complete visibility strategy covers both." />
      <section className="section">
        <div className="wrap two">
          <article className="card" data-fade>
            <p className="kicker">Traditional</p><h2 className="h3" style={{ margin: '14px 0' }}>SEO</h2>
            <p>Technical website foundations, search intent and keyword relevance, helpful well-structured content, internal linking and organic visibility.</p>
          </article>
          <article className="card navy" data-fade data-delay="0.1">
            <p className="kicker">AI-powered</p><h2 className="h3" style={{ margin: '14px 0' }}>AEO & GEO</h2>
            <p>Clear answer-focused content, better structure and context, relevant well-supported brand information, and improved potential to be understood by AI search.</p>
          </article>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="h2" data-split>Two discovery channels, one strategy</h2>
            <p className="lede" data-fade style={{ marginTop: 24 }}>People still search on Google, but more questions are now answered directly by AI tools that summarise the web and name a few brands. If your business is missing from those answers, you are missing from a growing share of the decision.</p>
            <p className="lede" data-fade style={{ marginTop: 16 }}>DAEOL treats search engines and answer engines as one system. The same clear, well-structured, consistent information serves both.</p>
          </div>
          <ul className="checks card" data-fade style={{ fontSize: '1.15rem' }}>
            <li>Clear answers to the questions customers really ask</li>
            <li>Technical foundations that crawlers and AI systems can read</li>
            <li>Consistent brand facts across your site and the wider web</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="card coralc" data-fade style={{ padding: 'clamp(30px,6vw,80px)' }}>
            <h2 className="h2" data-split>Honest by design</h2>
            <p style={{ marginTop: 22, fontSize: '1.25rem', maxWidth: '58ch' }}>No agency can control what ChatGPT, Gemini or Perplexity says, and we won’t pretend otherwise. We improve the signals these tools rely on, measure selected prompts over time, and report plainly what changed and what didn’t.</p>
          </div>
        </div>
      </section>
      <section className="section paper"><div className="wrap"><h2 className="h2" data-split style={{ marginBottom: 40 }}>Common questions</h2><FAQList items={FAQS.slice(0, 3)} /></div></section>
      <CTA />
    </>
  );
}
