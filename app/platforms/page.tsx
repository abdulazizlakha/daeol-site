import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Marquee from '@/components/Marquee';
import { PLATFORMS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI Search Platforms We Cover',
  description: 'We optimize for ChatGPT, Perplexity, Google Gemini, Google Search, Microsoft Bing and Copilot. We do not claim partnerships with any platform.',
  alternates: { canonical: '/platforms' },
};

const COPY: Record<string, string> = {
  'ChatGPT': 'Conversational answers that name a few brands. We check selected prompts and improve the pages and facts it can draw from.',
  'Perplexity': 'Answers with visible citations. Clear, quotable pages and consistent facts give it something reliable to cite.',
  'Google Gemini': 'Generative answers built on a wide web picture of your brand. Entity clarity and topical coverage matter most.',
  'Google Search': 'Classic rankings plus AI summaries. Technical foundations, intent-matched pages and structured data.',
  'Microsoft Bing': 'The index behind several assistants. Clean crawling, sitemaps and fast, well-labelled pages.',
  'Copilot': 'Answers inside Microsoft products. Answer-first content and consistent business information.',
};

export default function Page() {
  return (
    <>
      <PageHero crumb="Platforms" title="Every place your customers ask." lede="Buyers research across search engines and AI assistants. We cover the six that matter most today." />
      <Marquee items={PLATFORMS} />
      <section className="section">
        <div className="wrap">
          <div className="plat">
            {PLATFORMS.map((p, i) => (
              <article className="card" key={p} data-fade data-delay={(i % 3) * 0.08}>
                <span className="orb" aria-hidden="true" />
                <div><b>{p}</b><p style={{ marginTop: 10 }}>{COPY[p]}</p></div>
              </article>
            ))}
          </div>
          <p className="note" data-fade>We don’t control these platforms or claim partnerships with them.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
