import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE.url, priority: 1 }, ...PAGES.map(p => ({ url: `${SITE.url}/${p.slug}`, priority: 0.8 }))];
}
