'use client';
import { useState } from 'react';
import Arrow from './Arrow';

export default function AuditForm({ plan }: { plan?: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch('/api/audit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      setState(r.ok ? 'ok' : 'err');
      if (r.ok) e.currentTarget.reset();
    } catch { setState('err'); }
  }
  return (
    <form className="form" onSubmit={submit} noValidate={false}>
      <div className="row2">
        <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="website">Website</label><input id="website" name="website" placeholder="https://" required autoComplete="url" /></div>
        <div className="field"><label htmlFor="country">Country</label>
          <select id="country" name="country" defaultValue="USA"><option>USA</option><option>Canada</option><option>UK</option><option>Australia</option><option>Other</option></select>
        </div>
      </div>
      <div className="field"><label htmlFor="interest">Interested in</label>
        <select id="interest" name="interest" defaultValue={plan === 'premium' ? 'Premium' : plan === 'basic' ? 'Basic Answer' : 'Free audit'}>
          <option>Free audit</option><option>Basic Answer</option><option>Premium</option>
        </select>
      </div>
      <div className="field"><label htmlFor="prompts">Questions customers ask before buying (optional)</label><textarea id="prompts" name="prompts" rows={4} placeholder="e.g. best accountant for startups in Toronto" /></div>
      <input className="hp" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div><button className="btn" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Get my free audit'} <Arrow /></button></div>
      {state === 'ok' && <p className="msg ok" role="status">Thanks. We have your details and will reply by email.</p>}
      {state === 'err' && <p className="msg err" role="alert">Something went wrong. Please email team@daeol.si instead.</p>}
    </form>
  );
}
