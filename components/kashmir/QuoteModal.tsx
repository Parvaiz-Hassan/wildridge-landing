"use client";

import { useState, useEffect, FormEvent } from "react";
import { siteConfig, telHref, waHref } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

// How long the "Thank you!" message stays in the popup before we redirect
// to /thank-you/ — long enough to read, short enough not to feel stuck.
const REDIRECT_DELAY_MS = 2500;

export default function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [agreed, setAgreed] = useState(false);

  // On a successful submit, hold the popup open just long enough to show
  // the confirmation, then send the visitor to /thank-you/ — a real page
  // load there is what lets GTM fire Google Ads / Meta conversion tags
  // reliably (a JS event inside the modal can be missed if the tab closes
  // or an ad blocker interferes).
  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => {
      window.location.href = "/thank-you/";
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [status]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot field — real users never fill this, bots often do.
    if (data.get("company")) return;

    setStatus("submitting");
    try {
      const res = await fetch(siteConfig.leadEndpoint, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-neutral-200"
        >
          ✕
        </button>

        <div className="mb-5 flex items-start gap-3 pr-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-2xl">
            🏔️
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Get A Free Quote Now</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Tell us your travel dates — we&apos;ll reply with a custom itinerary.
            </p>
          </div>
        </div>

        {status === "success" ? (
          <div className="rounded-xl bg-green-50 p-5 text-center">
            <p className="text-lg font-semibold text-green-700">Thank you!</p>
            <p className="mt-1 text-sm text-green-700/80">
              We&apos;ve received your details and will reach out shortly. For a faster
              response, you can also message us directly on WhatsApp.
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-green-700/70">
              <span
                className="h-3 w-3 animate-spin rounded-full border-2 border-green-700/30 border-t-green-700"
                aria-hidden
              />
              Redirecting you to a confirmation page...
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Honeypot — hidden from real users via CSS, not display:none
                (some bots skip hidden fields). */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">
                  Full Name *
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">
                  Phone Number *
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">
                  Arrival Date *
                </label>
                <input
                  required
                  name="arrivalDate"
                  type="date"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-neutral-600">
                  How Many People? *
                </label>
                <input
                  required
                  name="travellers"
                  type="number"
                  min={1}
                  placeholder="e.g. 4"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 pt-1 text-xs text-neutral-500">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5"
                required
              />
              <span>
                I agree to the{" "}
                <a href="/terms" className="text-orange-600 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-orange-600 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {status === "error" && (
              <p className="text-xs text-red-600">
                Something went wrong sending your request. Please try WhatsApp or
                call us directly below.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Request Free Quote"}
              {status !== "submitting" && <span aria-hidden>→</span>}
            </button>

            <a
              href={telHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 py-3 text-sm font-semibold text-neutral-800"
            >
              📞 Call Now
            </a>
          </form>
        )}
      </div>
    </div>
  );
}
