import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { POSTS } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/why-daeol', '/services', '/platforms', '/process', '/industries', '/pricing', '/faq', '/audit', '/blog'];
  return [
    ...pages.map((p) => ({ url: SITE.url + p, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 })),
    ...POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
