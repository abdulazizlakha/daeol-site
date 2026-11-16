import type { Metadata } from "next";
import { SITE, PageData } from "./content";
export const meta = (p: PageData): Metadata => ({
  title: p.title, description: p.desc, alternates: { canonical: `/${p.slug}` },
  openGraph: { title: p.title, description: p.desc, url: `/${p.slug}`, siteName: SITE.name, type: "website", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image" },
});
export const crumbs = (p: PageData) => ({ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem",position:1,name:"Home",item:SITE.url},{"@type":"ListItem",position:2,name:p.h1,item:`${SITE.url}/${p.slug}`}]});
