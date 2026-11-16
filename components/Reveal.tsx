"use client";
import { useEffect, useRef, ReactNode } from "react";
export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = r.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); o.disconnect(); } }, { threshold: 0.15 });
    o.observe(el); return () => o.disconnect();
  }, []);
  return <div ref={r} style={{ transitionDelay: `${delay}ms` }} className={`rv ${className}`}>{children}</div>;
}
