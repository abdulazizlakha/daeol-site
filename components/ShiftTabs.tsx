'use client';
import { useState } from 'react';
import { LAYERS } from '@/lib/data';

export default function ShiftTabs() {
  const [i, setI] = useState(1);
  const L = LAYERS[i];
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setI((i + 1) % 3);
    if (e.key === 'ArrowLeft') setI((i + 2) % 3);
  };
  return (
    <div className="shift">
      <div>
        <div className="tabs" role="tablist" aria-label="Visibility layers" onKeyDown={onKey}>
          {LAYERS.map((l, n) => (
            <button key={l.key} role="tab" id={`tab-${l.key}`} aria-selected={i === n} aria-controls="shift-panel" tabIndex={i === n ? 0 : -1} className="tab" onClick={() => setI(n)}>{l.key}</button>
          ))}
        </div>
        <div className="panel" id="shift-panel" role="tabpanel" aria-labelledby={`tab-${L.key}`} key={L.key}>
          <h3 className="h3">{L.title}</h3>
          <p className="lede">{L.body}</p>
          <ul>{L.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
      <div className="stack" aria-hidden="true">
        {LAYERS.map((l, n) => (
          <div key={l.key} className={`layer${i === n ? ' on' : ''}`}>{l.key}<small>{l.title}</small></div>
        ))}
      </div>
    </div>
  );
}
