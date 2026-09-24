"use client";

import { useState, useEffect, FormEvent, SVGProps } from "react";
import { siteConfig, telHref, waHref } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

// How long the "Thank you!" message stays visible before we redirect to
// /thank-you/ — long enough to read, short enough not to feel stuck.
const REDIRECT_DELAY_MS = 2500;

// ---------------------------------------------------------------------------
// Small inline icons (no icon library installed — hand-rolled SVGs keep this
// dependency-free). All are 24x24 outline style, colored via currentColor
// so they pick up whatever text color class is applied.
// ---------------------------------------------------------------------------
function SuitcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.75" y="7.5" width="16.5" height="11.25" rx="1.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7.5V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v1.5M3.75 12.75h16.5"
      />
    </svg>
  );
}

function PersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="12" cy="7.5" r="3.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 20.25a7.25 7.25 0 0 1 14.5 0" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.75" y="5.25" width="16.5" height="15" rx="1.5" />
      <path strokeLinecap="round" d="M7.5 3v3.5M16.5 3v3.5M3.75 9.75h16.5" />
    </svg>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <circle cx="16.5" cy="9.5" r="2.25" />
      <path strokeLinecap="round" d="M3.5 20a5.5 5.5 0 0 1 11 0M14.5 20a4 4 0 0 1 6.5-3.1" />
    </svg>
  );
}

function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75 5.25 6v5.25c0 4.5 2.906 7.586 6.75 9 3.844-1.414 6.75-4.5 6.75-9V6L12 3.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.75 1.75L14.75 10" />
    </svg>
  );
}

function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 18 16.5H9l-4.5 3.75V16.5h-.75a2.25 2.25 0 0 1-2.25-2.25v-7.5Z"
      />
    </svg>
  );
}

// Today, formatted for a <input type="date"> min attribute, in local time
// (not UTC — avoids the "yesterday" off-by-one from toISOString()).
function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

const inputBase =
  "w-full rounded-lg border border-neutral-300 py-2.5 pl-9 pr-3 text-sm text-neutral-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500";
const iconBase = "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400";

// The exact same lead-capture form, used both inside the "Get a Free Quote"
// popup (QuoteModal) and embedded directly on the Contact page — one
// component, one source of truth, so the two never drift out of sync.
export default function LeadForm({
  showHeader = true,
  tourName,
}: {
  showHeader?: boolean;
  // Set when the popup was opened from a specific tour card's "Request
  // Callback" button — shown back to the visitor and sent along with the
  // rest of the form so it lands in the email too.
  tourName?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");

  // On a successful submit, hold the confirmation message just long enough
  // to be read, then send the visitor to /thank-you/ — a real page load
  // there is what lets GTM fire Google Ads / Meta conversion tags reliably
  // (a JS event fired inline can be missed if the tab closes or an ad
  // blocker interferes).
  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => {
      window.location.href = "/thank-you/";
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot field — real users never fill this, bots often do.
    if (data.get("company")) return;

    // The visible phone input only collects the 10-digit local number (the
    // +91 box next to it is fixed) — combine them into one value here.
    data.set("phone", `+91${phone}`);
    if (tourName) data.set("tourName", tourName);

    setStatus("submitting");
    try {
      const res = await fetch(siteConfig.leadEndpoint, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
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
    );
  }

  return (
    <div>
      {showHeader && (
        <div className="mb-5 flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <SuitcaseIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Get A Free Quote Now</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Tell us your travel dates — we&apos;ll reply with a custom itinerary.
            </p>
          </div>
        </div>
      )}

      {tourName && (
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700">
          <SuitcaseIcon className="h-3.5 w-3.5" />
          Enquiring about: {tourName}
        </p>
      )}

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
            <div className="relative">
              <PersonIcon className={iconBase} />
              <input required name="name" type="text" placeholder="Your Name" className={inputBase} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-600">
              Phone Number *
            </label>
            <div className="flex overflow-hidden rounded-lg border border-neutral-300 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <span className="flex select-none items-center border-r border-neutral-300 bg-neutral-50 px-2.5 text-sm font-medium text-neutral-600">
                +91
              </span>
              <input
                required
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="w-full px-3 py-2.5 text-sm text-neutral-900 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-600">
              Arrival Date *
            </label>
            <div className="relative">
              <CalendarIcon className={iconBase} />
              <input required name="arrivalDate" type="date" min={todayISO()} className={inputBase} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-600">
              How Many People? *
            </label>
            <div className="relative">
              <UsersIcon className={iconBase} />
              <input
                required
                name="travellers"
                type="number"
                min={1}
                placeholder="e.g. 4"
                className={inputBase}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <MessageIcon className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-neutral-400" />
            <textarea
              name="message"
              rows={3}
              placeholder="Message (optional)"
              className="w-full resize-none rounded-lg border border-neutral-300 py-2.5 pl-9 pr-3 text-sm text-neutral-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        <p className="flex items-start gap-2 pt-1 text-xs text-neutral-500">
          <ShieldCheckIcon className="h-4 w-4 shrink-0 text-green-600" />
          Your information is 100% safe with us — we never share it.
        </p>

        {status === "error" && (
          <p className="text-xs text-red-600">
            Something went wrong sending your request. Please try WhatsApp or call us
            directly below.
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
    </div>
  );
}
