'use client';
import Link from 'next/link';
import { useState } from 'react';
import { PLANS } from '@/lib/data';
import Arrow from './Arrow';

export default function PricingTable() {
  const [six, setSix] = useState(true);
  const { audit, basic, premium } = PLANS;
  return (
    <div>
      <div className="toggle" role="group" aria-label="Premium term">
        <span className="pill" style={{ transform: `translateX(${six ? 0 : 100}%)` }} />
        <button aria-pressed={six} onClick={() => setSix(true)}>6 months</button>
        <button aria-pressed={!six} onClick={() => setSix(false)}>3 months</button>
      </div>
      <div className="plans">
        <article className="plan">
          <h3 className="h3">{audit.name}</h3>
          <div className="price">{audit.price}</div>
          <p>{audit.blurb}</p>
          <ul>{audit.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <Link href="/audit" className="btn ghost">{audit.cta} <Arrow /></Link>
        </article>
        <article className="plan">
          <h3 className="h3">{basic.name}</h3>
          <div className="price">{basic.price}<small> /month</small></div>
          <p>{basic.blurb} 3-month minimum.</p>
          <ul>{basic.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <Link href="/audit?plan=basic" className="btn">{basic.cta} <Arrow /></Link>
        </article>
        <article className="plan best">
          <span className="tag">Best value</span>
          <h3 className="h3">{premium.name}</h3>
          <div className="price">{six ? premium.price6 : premium.price3}<small> /month</small></div>
          <p>{premium.blurb} {six ? '6-month term.' : '3-month term.'}</p>
          <ul>{premium.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <Link href="/audit?plan=premium" className="btn light">{premium.cta} <Arrow /></Link>
        </article>
      </div>
    </div>
  );
}
