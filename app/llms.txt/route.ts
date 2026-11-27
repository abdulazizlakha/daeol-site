import { SITE, NAV } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const body = `# DAEOL

> ${SITE.description}

## Pages
${NAV.map((n) => `- [${n.label}](${SITE.url}${n.href})`).join('\n')}
- [Free AI visibility audit](${SITE.url}/audit)

## Facts
- Services: AI visibility audits, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), technical SEO and schema, answer-first content, measurement and reporting.
- Markets: USA, Canada, United Kingdom, Australia.
- Pricing (USD): Audit Check free; Basic Answer $498/month (3-month minimum); Premium $1,399/month (6-month term) or $1,899/month (3-month term).
- DAEOL does not guarantee mentions in any AI tool and does not claim partnerships with Google, OpenAI, Perplexity or Microsoft.
- Contact: ${SITE.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
