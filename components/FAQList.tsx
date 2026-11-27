'use client';
import { useState } from 'react';

export default function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map((x, i) => (
        <div key={x.q} className={`q${open === i ? ' open' : ''}`}>
          <h3 style={{ fontSize: 'inherit', letterSpacing: 'inherit', fontWeight: 'inherit' }}>
            <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>{x.q}<span className="plus" /></button>
          </h3>
          <div className="a" id={`faq-${i}`} role="region"><div><p>{x.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
