import type { Metadata } from "next";
import Link from "next/link";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import JsonLd from "@/components/JsonLd";
import Logo from "@/components/Logo";
import { Progress, Cursor } from "@/components/FX";
import { SITE, PAGES } from "@/lib/content";
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["300", "400", "500"] });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "DAEOL | AEO & GEO Agency: AI Search Optimization",
  description: "Get found and cited in ChatGPT, Gemini, Perplexity and Google. DAEOL is an AEO, GEO and SEO agency serving the USA, Canada, UK and Australia. Free audit.",
  alternates: { canonical: "/" }, icons: { icon: "/favicon.svg" },
  openGraph: { siteName: "DAEOL", type: "website", images: ["/og-image.png"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = { "@context":"https://schema.org","@graph":[
    { "@type":"Organization","@id":`${SITE.url}/#org`,name:SITE.name,url:SITE.url,email:SITE.email,logo:`${SITE.url}/favicon.svg`,areaServed:["US","CA","GB","AU"],sameAs:[] /* TODO: add LinkedIn, X, Crunchbase */ },
    { "@type":"WebSite",name:SITE.name,url:SITE.url,publisher:{"@id":`${SITE.url}/#org`} }] };
  return (
    <html lang="en" className={`${sora.variable} ${dm.variable}`}><body>
      <JsonLd data={org} /><Progress /><Cursor /><Nav />{children}
      <footer className="bg-navy px-6 py-14 text-sm text-cream/75"><div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-3">
        <div><Logo className="h-8 text-cream" /><p className="mt-3">DAEOL is an AI search optimization agency helping businesses in the USA, Canada, the UK and Australia become easier to discover, understand, and trust across AI-powered and traditional search.</p></div>
        <nav aria-label="Footer"><p className="mb-3 text-cream">Explore</p><ul className="space-y-2">{PAGES.map(p => <li key={p.slug}><Link href={`/${p.slug}`} className="hover:text-white">{p.nav}</Link></li>)}</ul></nav>
        <div><p className="mb-3 text-cream">Contact</p><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} DAEOL. DAEOL does not claim partnerships with or endorsements from Google, OpenAI, Perplexity, or Microsoft.</p></div>
      </div></footer>
    </body></html>);
}
