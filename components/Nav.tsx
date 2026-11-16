"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PAGES } from "@/lib/content";
import Logo from "./Logo";
export default function Nav() {
  const [open, setOpen] = useState(false), [s, setS] = useState(false); const path = usePathname();
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <nav className={`fixed inset-x-0 top-0 z-50 text-cream backdrop-blur-md transition-all duration-300 ${s ? "bg-navy/95 shadow-lg" : "bg-navy/60"}`} aria-label="Main">
      <div className={`mx-auto flex max-w-[1160px] items-center justify-between px-6 transition-all ${s ? "h-[60px]" : "h-[72px]"}`}>
        <Link href="/" aria-label="DAEOL home" className="transition hover:scale-105"><Logo /></Link>
        <button className="rounded-lg border border-cream/35 px-3 py-2 md:hidden" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
        <div className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-4 bg-navy p-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}>
          {PAGES.filter(p => p.slug !== "audit").map(p => <Link key={p.slug} href={`/${p.slug}`} onClick={() => setOpen(false)} aria-current={path === `/${p.slug}` ? "page" : undefined}
            className="group relative text-sm text-cream/80 transition hover:text-white">{p.nav}<span className={`absolute -bottom-1 left-0 h-px bg-coral transition-all duration-300 ${path === `/${p.slug}` ? "w-full" : "w-0 group-hover:w-full"}`} /></Link>)}
          <Link href="/audit" onClick={() => setOpen(false)} className="rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-navy transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,107,91,.4)]">Get a Free Audit</Link>
        </div>
      </div>
    </nav>);
}
