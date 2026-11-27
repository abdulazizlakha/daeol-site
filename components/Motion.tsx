'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window { __lenis?: Lenis; __motionReady?: boolean }
}

export default function Motion() {
  const pathname = usePathname();

  // Smooth scrolling + progress bar (once)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis: Lenis | undefined;
    let tick: ((t: number) => void) | undefined;
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
      window.__lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      tick = (t: number) => lenis!.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }
    const bar = document.querySelector<HTMLElement>('.progress');
    const st = bar
      ? ScrollTrigger.create({
          start: 0,
          end: 'max',
          onUpdate: (s) => { bar.style.transform = `scaleX(${s.progress})`; },
        })
      : undefined;
    return () => {
      st?.kill();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Per-page choreography
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    window.__motionReady = true;
    root.classList.remove('motion-failed');

    const ctx = gsap.context(() => {
      // 1. Split headline reveal (word masks)
      document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        if (!el.dataset.done) {
          const text = el.textContent || '';
          el.setAttribute('aria-label', text);
          el.innerHTML = text
            .split(/\s+/)
            .filter(Boolean)
            .map((w) => `<span class="mask" aria-hidden="true"><span>${w}</span></span>`)
            .join(' ');
          el.dataset.done = '1';
        }
        el.style.visibility = 'visible';
        if (reduce) return;
        gsap.fromTo(
          el.querySelectorAll('.mask > span'),
          { yPercent: 115, rotate: 5 },
          {
            yPercent: 0, rotate: 0, duration: 1.15, ease: 'expo.out', stagger: 0.05,
            delay: parseFloat(el.dataset.delay || '0'),
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          },
        );
      });

      // 2. Fade-up blocks, staggered in batches
      const fades = gsap.utils.toArray<HTMLElement>('[data-fade]');
      if (reduce) gsap.set(fades, { opacity: 1, y: 0 });
      else {
        ScrollTrigger.batch(fades, {
          start: 'top 92%',
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.09,
              delay: parseFloat((els[0] as HTMLElement).dataset.delay || '0'),
            }),
        });
      }

      // 3. Counters
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        const end = parseFloat(el.dataset.count || '0');
        const suffix = el.dataset.suffix || '';
        const o = { v: 0 };
        const set = () => { el.innerHTML = `${Math.round(o.v)}<em>${suffix}</em>`; };
        if (reduce) { o.v = end; set(); return; }
        set();
        gsap.to(o, { v: end, duration: 2, ease: 'power3.out', onUpdate: set, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });

      const mm = gsap.matchMedia();
      mm.add('(min-width: 1001px) and (prefers-reduced-motion: no-preference)', () => {
        // 4. Sticky stacked service cards shrink as the next one arrives
        const cards = gsap.utils.toArray<HTMLElement>('[data-svc]');
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap.fromTo(card, { scale: 1 }, {
            scale: 0.94, ease: 'none',
            scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 25%', scrub: true },
          });
        });

        // 5. Pinned horizontal process rail
        document.querySelectorAll<HTMLElement>('[data-hproc]').forEach((box) => {
          const rail = box.querySelector<HTMLElement>('[data-hrail]');
          const bar = box.querySelector<HTMLElement>('[data-hbar]');
          if (!rail) return;
          const dist = () => Math.max(0, rail.scrollWidth - window.innerWidth);
          const tl = gsap.timeline({
            scrollTrigger: { trigger: box, pin: true, scrub: 0.6, start: 'top top', end: () => '+=' + dist(), invalidateOnRefresh: true },
          });
          tl.to(rail, { x: () => -dist(), ease: 'none' }, 0);
          if (bar) tl.to(bar, { scaleX: 1, ease: 'none' }, 0);
        });
      });

      // 6. Parallax drift on decorative blobs
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          gsap.to(el, { yPercent: parseFloat(el.dataset.parallax || '-12'), ease: 'none', scrollTrigger: { trigger: el, scrub: true } });
        });
      }
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => { window.clearTimeout(refresh); ctx.revert(); };
  }, [pathname]);

  return <div className="progress" aria-hidden="true" />;
}
