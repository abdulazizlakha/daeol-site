import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/content";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: Entry = {
    url: SITE.url,
    priority: 1,
    lastModified: now,
    changeFrequency: "weekly",
  };

  const pages: Entry[] = PAGES.map((p) => ({
    url: `${SITE.url}/${p.slug}`,
    priority: p.slug === "audit" || p.slug === "services" ? 0.9 : 0.8,
    lastModified: now,
    changeFrequency: "monthly",
  }));

  return [home, ...pages];
}