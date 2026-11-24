"use client";
import { useState } from "react";
const sel = (n: string, label: string, opts: string[], req = false) => (
  <label className="block text-sm">{label}{req && " *"}
    <select name={n} required={req} className="mt-1 w-full rounded-xl border border-line bg-white p-3"><option value="">Select</option>{opts.map(o => <option key={o}>{o}</option>)}</select></label>);
const inp = (n: string, label: string, type = "text", req = false) => (
  <label className="block text-sm">{label}{req && " *"}<input name={n} type={type} required={req} className="mt-1 w-full rounded-xl border border-line bg-white p-3" /></label>);
export default function AuditForm() {
  const [s, setS] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setS("sending");
    const r = await fetch("/api/audit", { method: "POST", body: new FormData(e.currentTarget) }).catch(() => null);
    setS(r?.ok ? "ok" : "err");
  }
  if (s === "ok") return <p role="status" className="rounded-2xl bg-white p-8 font-display text-xl">Request received. We’ll review your site and email your audit.</p>;
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-line bg-white p-8 md:grid-cols-2">
      {inp("name", "Full name", "text", true)}{inp("email", "Work email", "email", true)}
      {inp("company", "Company name")}{inp("website", "Website URL", "text", true)}
      {sel("industry", "Industry", ["SaaS & Technology", "Professional Services", "Marketing & Creative", "E-commerce & Retail", "Healthcare & Wellness", "Home & Local Services", "Other"])}
      {sel("market", "Target market", ["USA", "Canada", "United Kingdom", "Australia", "Other"], true)}
      <div className="md:col-span-2">{sel("objective", "Main objective", ["Appear in AI answers", "Grow Google rankings", "Both search and AI visibility", "Not sure yet"])}</div>
      <label className="block text-sm md:col-span-2">Additional information<textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border border-line p-3" /></label>
      <div className="md:col-span-2">
        <button disabled={s === "sending"} className="rounded-full bg-coral px-7 py-3.5 font-medium text-navy transition hover:-translate-y-0.5 disabled:opacity-60">{s === "sending" ? "Sending…" : "Request My Free Audit"}</button>
        {s === "err" && <p role="alert" className="mt-3 text-sm text-red-700">Something went wrong. Please email team@daeol.si.</p>}
      </div>
    </form>);
}
