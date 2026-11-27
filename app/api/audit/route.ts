import { NextResponse } from 'next/server';

// Sends the audit request to your inbox through Resend when RESEND_API_KEY is set.
// Without a key it logs to the server console so the form still works in development.
export async function POST(req: Request) {
  let d: Record<string, string>;
  try { d = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (d.company_website) return NextResponse.json({ ok: true }); // honeypot
  const name = String(d.name || '').slice(0, 120), email = String(d.email || '').slice(0, 160), website = String(d.website || '').slice(0, 200);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !website) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 422 });

  const text = Object.entries(d).filter(([k]) => k !== 'company_website').map(([k, v]) => `${k}: ${String(v).slice(0, 1000)}`).join('\n');
  const key = process.env.RESEND_API_KEY;
  if (!key) { console.log('[audit request]\n' + text); return NextResponse.json({ ok: true }); }

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.AUDIT_FROM || 'DAEOL <onboarding@resend.dev>', to: [process.env.AUDIT_TO || 'team@daeol.si'], reply_to: email, subject: `New audit request: ${website}`, text }),
  });
  return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}
