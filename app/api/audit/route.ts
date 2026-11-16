import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const d = await req.formData();
  const email = String(d.get("email") ?? ""), site = String(d.get("website") ?? "");
  if (!d.get("name") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || site.length < 4) return NextResponse.json({ ok: false }, { status: 400 });
  const url = process.env.FORM_ENDPOINT;
  if (!url) return NextResponse.json({ ok: false, error: "FORM_ENDPOINT not set" }, { status: 503 });
  const r = await fetch(url, { method: "POST", body: d, headers: { Accept: "application/json" } });
  return NextResponse.json({ ok: r.ok }, { status: r.ok ? 200 : 502 });
}
