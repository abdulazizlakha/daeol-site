import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/sora";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import Nav from "@/components/Nav";
import JsonLd from "@/components/JsonLd";
import { Progress, Cursor } from "@/components/FX";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import { SITE, PAGES } from "@/lib/content";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "DAEOL | AEO & GEO Agency: AI Search Optimization", template: "%s | DAEOL" },
  description: "Get found and cited in ChatGPT, Gemini, Perplexity and Google. DAEOL is an AEO, GEO and SEO agency serving the USA, Canada, UK and Australia. Free audit.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg" }, { url: "/icon.png", sizes: "512x512" }],
    apple: "/apple-icon.png",
    other: [{ rel: "icon", url: "/favicon.ico", sizes: "32x32" }],
  },
  openGraph: { siteName: "DAEOL", type: "website", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", site: "@daeol", creator: "@daeol" },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = { "@context":"https://schema.org","@graph":[
    { "@type":"Organization","@id":`${SITE.url}/#org`,name:SITE.name,url:SITE.url,email:SITE.email,logo:`${SITE.url}/icon.png`,areaServed:["US","CA","GB","AU"],sameAs:[] /* TODO: add LinkedIn, X, Crunchbase */ },
    { "@type":"WebSite",name:SITE.name,url:SITE.url,publisher:{"@id":`${SITE.url}/#org`} }] };
  return (
      <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        <JsonLd data={org} /><Progress /><Cursor /><Nav />{children}
        <Footer site={SITE} pages={PAGES} />
      </body></html>);
}
