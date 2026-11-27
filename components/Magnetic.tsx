'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Wraps a link/button so it leans toward the cursor.
export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = ref.current!;
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1,.5)' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1,.5)' });
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.3);
      y((e.clientY - (r.top + r.height / 2)) * 0.4);
    };
    const leave = () => { x(0); y(0); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, []);
  return <span ref={ref} style={{ display: 'inline-block' }}>{children}</span>;
}
