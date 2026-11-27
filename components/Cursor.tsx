'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = box.current!;
    const dot = el.querySelector('i')!;
    const ring = el.querySelector('b')!;
    const xd = gsap.quickTo(dot, 'x', { duration: 0.08 }), yd = gsap.quickTo(dot, 'y', { duration: 0.08 });
    const xr = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), yr = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
    const move = (e: MouseEvent) => { xd(e.clientX); yd(e.clientY); xr(e.clientX); yr(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      el.classList.toggle('big', !!t.closest('a,button,[role=tab],input,select,textarea'));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);
  return <div className="cur" ref={box} aria-hidden="true"><b /><i /></div>;
}
