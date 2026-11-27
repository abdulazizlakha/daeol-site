import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      // Explicitly welcome AI crawlers: this is an AEO/GEO agency.
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Google-Extended', 'ClaudeBot', 'Bingbot'], allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
