"use client";
import Link from "next/link";
import { sendGAEvent } from "@/lib/analytics";
import { SITE } from "@/lib/content";

interface FooterProps {
  site: typeof SITE;
  pages: typeof import("@/lib/content").PAGES;
}

export default function Footer({ site, pages }: FooterProps) {
  return (
    <footer className="bg-navy px-6 py-14 text-sm text-cream/75">
      <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-3">
        <div>
          <p className="mt-3">DAEOL is an AI search optimization agency helping businesses in the USA, Canada, the UK and Australia become easier to discover, understand, and trust across AI-powered and traditional search.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-cream">Explore</p>
          <ul className="space-y-2">
            {pages.map(p => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="hover:text-white">{p.nav}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-cream">Contact</p>
          <a href={`mailto:${site.email}`} onClick={() => sendGAEvent("email_click")} className="hover:text-white">{site.email}</a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} DAEOL. DAEOL does not claim partnerships with or endorsements from Google, OpenAI, Perplexity, or Microsoft.</p>
        </div>
      </div>
    </footer>
  );
}