"use client";

type Gtag = (...args: unknown[]) => void;

export function sendGAEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", eventName, params);
}