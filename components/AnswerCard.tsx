'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PARTS: { t: string; mark?: boolean }[] = [
  { t: 'Look for an agency that fixes the structure behind your content first. ' },
  { t: 'Your Brand', mark: true },
  { t: ' publishes clear answers to buyer questions, keeps facts consistent across the web, adds structured data, and checks a fixed set of prompts every month.' },
];
const FULL = PARTS.map((p) => p.t).join('');

export default function AnswerCard() {
  const out = useRef<HTMLParagraphElement>(null);
  const src = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const render = (n: number) => {
      let left = n, html = '';
      for (const p of PARTS) {
        const s = p.t.slice(0, Math.max(0, left)); left -= p.t.length;
        html += p.mark && s ? `<mark>${s}</mark>` : s;
      }
      if (out.current) out.current.innerHTML = html + (n < FULL.length ? '<span style="opacity:.5">▍</span>' : '');
    };
    if (reduce) { render(FULL.length); if (src.current) src.current.style.opacity = '1'; return; }
    const o = { n: 0 };
    const tl = gsap.timeline({ delay: 2.0 });
    tl.fromTo(card.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'expo.out' }, 0)
      .to(o, { n: FULL.length, duration: 5.2, ease: 'none', onUpdate: () => render(Math.floor(o.n)) }, 0.9)
      .to(src.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
    return () => { tl.kill(); };
  }, []);

  return (
    <div className="chat" ref={card} style={{ opacity: 0 }}>
      <div className="chat-q">Which agency should I hire to show up in AI answers?</div>
      <p className="sr">{FULL}</p>
      <p className="chat-a" ref={out} aria-hidden="true" />
      <div className="chat-src" ref={src}><span>Sources</span><span>yourbrand.com/faq</span><span>yourbrand.com/services</span></div>
      <p className="chat-note">Illustrative AI answer. Demo only. Not a guaranteed result.</p>
    </div>
  );
}
