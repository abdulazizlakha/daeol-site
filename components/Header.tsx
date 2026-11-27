'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/site';
import Arrow from './Arrow';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    let last = 0;
    const on = () => {
      const y = window.scrollY;
      setStuck(y > 20);
      setHide(y > last && y > 320);
      last = y;
    };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`hdr${hide && !open ? ' hide' : ''}${stuck ? ' stuck' : ''}`}>
        <div className="hdr-in">
          <Link href="/" className="logo" aria-label="DAEOL home"><img src="/logo-dark.png" alt="DAEOL" width={110} height={22} /></Link>
          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={path === n.href || path.startsWith(n.href + '/') ? 'page' : undefined}>{n.label}</Link>
            ))}
          </nav>
          <Link href="/audit" className="btn sm">Free audit <Arrow /></Link>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </header>
      <div className={`menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {NAV.map((n) => <Link key={n.href} href={n.href} tabIndex={open ? 0 : -1}>{n.label}</Link>)}
        <Link href="/audit" tabIndex={open ? 0 : -1} className="coral">Get a free audit</Link>
      </div>
    </>
  );
}
