"use client";
import { useState } from "react";
import { sendGAEvent } from "@/lib/analytics";
import { SITE, FORM_ENDPOINT } from "@/lib/content";

const sel = (n: string, label: string, opts: string[], req = false) => (
  <label className="block text-sm">{label}{req && " *"}
    <select name={n} required={req} className="mt-1 w-full rounded-xl border border-line bg-white p-3"><option value="">Select</option>{opts.map(o => <option key={o}>{o}</option>)}</select></label>);
const inp = (n: string, label: string, type = "text", req = false) => (
  <label className="block text-sm">{label}{req && " *"}<input name={n} type={type} required={req} className="mt-1 w-full rounded-xl border border-line bg-white p-3" /></label>);

export default function AuditForm() {
  const [s, setS] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrMsg("");
    setS("sending");

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const website = String(fd.get("website") ?? "").trim();
    const industry = String(fd.get("industry") ?? "");
    const market = String(fd.get("market") ?? "");
    const objective = String(fd.get("objective") ?? "");
    const notes = String(fd.get("notes") ?? "").trim();
    const gotcha = String(fd.get("_gotcha") ?? "");

    // Honeypot: if filled, pretend success and don't send
    if (gotcha) {
      setS("ok");
      (e.currentTarget as HTMLFormElement).reset();
      return;
    }

    // Client-side validation
    if (!name) { setErrMsg("Full name is required"); setS("err"); return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrMsg("Valid work email is required"); setS("err"); return; }
    if (website && !/^https?:\/\/.+/.test(website)) { setErrMsg("Website must be a valid URL (e.g. https://example.com)"); setS("err"); return; }
    if (name.length > 100) { setErrMsg("Name is too long (max 100 characters)"); setS("err"); return; }
    if (email.length > 150) { setErrMsg("Email is too long (max 150 characters)"); setS("err"); return; }
    if (company.length > 100) { setErrMsg("Company name is too long (max 100 characters)"); setS("err"); return; }
    if (website.length > 200) { setErrMsg("Website URL is too long (max 200 characters)"); setS("err"); return; }
    if (notes.length > 2000) { setErrMsg("Additional information is too long (max 2000 characters)"); setS("err"); return; }

    const payload = {
      email,
      _subject: `New DAEOL audit request: ${company || name}`,
      name,
      company,
      website,
      industry,
      market,
      objective,
      notes,
    };

    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (r.ok) {
        setS("ok");
        (e.currentTarget as HTMLFormElement).reset();
        if (typeof window !== "undefined" && typeof sendGAEvent === "function") {
          sendGAEvent("generate_lead", { form: "audit" });
        }
      } else {
        // Try to parse Formspree errors
        const data = await r.json().catch(() => ({}));
        if (data.errors) {
          console.error("Formspree errors:", data.errors);
        }
        setErrMsg(`Something went wrong. Please email ${SITE.email} directly.`);
        setS("err");
      }
    } catch {
      setErrMsg(`Something went wrong. Please email ${SITE.email} directly.`);
      setS("err");
    }
  }

  if (s === "ok") return (
    <p role="status" className="rounded-2xl bg-white p-8 font-display text-xl text-navy">
      Thanks, we&apos;ll send your audit within 24 hours
    </p>
  );

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-line bg-white p-8 md:grid-cols-2">
      {/* Honeypot field - Formspree convention: _gotcha, visually hidden */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      {inp("name", "Full name", "text", true)}
      {inp("email", "Work email", "email", true)}
      {inp("company", "Company name")}
      {inp("website", "Website URL", "text", true)}
      {sel("industry", "Industry", ["SaaS & Technology", "Professional Services", "Marketing & Creative", "E-commerce & Retail", "Healthcare & Wellness", "Home & Local Services", "Other"])}
      {sel("market", "Target market", ["USA", "Canada", "United Kingdom", "Australia", "Other"], true)}
      <div className="md:col-span-2">{sel("objective", "Main objective", ["Appear in AI answers", "Grow Google rankings", "Both search and AI visibility", "Not sure yet"])}</div>
      <label className="block text-sm md:col-span-2">Additional information<textarea name="notes" rows={4} className="mt-1 w-full rounded-xl border border-line p-3" /></label>
      <div className="md:col-span-2">
        <button disabled={s === "sending"} className="rounded-full bg-coral px-7 py-3.5 font-medium text-navy transition hover:-translate-y-0.5 disabled:opacity-60">{s === "sending" ? "Sending…" : "Request My Free Audit"}</button>
        {(s === "err" || errMsg) && <p role="alert" className="mt-3 text-sm text-red-700">{errMsg || `Something went wrong. Please email ${SITE.email}.`}</p>}
      </div>
    </form>
  );
}