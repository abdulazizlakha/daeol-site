'use client';
import { useState } from 'react';
import { INDUSTRIES } from '@/lib/data';

export default function Industries() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="inds" data-fade>
      {INDUSTRIES.map((x, i) => (
        <div key={x.title} className={`ind${open === i ? ' open' : ''}`}>
          <button aria-expanded={open === i} aria-controls={`ind-${i}`} onClick={() => setOpen(open === i ? null : i)}>
            <h3 className="h3">{x.title}</h3><span className="plus" />
          </button>
          <div className="body" id={`ind-${i}`} role="region"><div><p>{x.body}</p></div></div>
        </div>
      ))}
    </div>
  );
}
