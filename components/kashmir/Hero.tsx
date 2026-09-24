"use client";

import { siteConfig, telHref, waHref } from "@/lib/site-config";
import { useQuoteModal } from "./QuoteModalProvider";
import VerticalVideo from "./VerticalVideo";

export default function Hero() {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Background banner with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.webp"
          alt="Kashmir valley at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-14 pt-10 text-center sm:pb-20 sm:pt-12">
        {/* Logo */}
        <img
          src="/images/logo-light.svg"
          alt={siteConfig.brand}
          className="mb-5 h-14 w-auto sm:h-16"
        />

        {/* Grey eyebrow text, 10-12 words */}
        <p className="mb-3 max-w-md text-xs font-medium tracking-wide text-neutral-400 sm:text-sm">
          Kashmir & Ladakh trips planned honestly, priced fairly, run by people who live here.
        </p>

        {/* Heading, white, 5-7 words */}
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">
          Your Kashmir Trip, Planned Right.
        </h1>

        {/* Long description */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          Private cabs, handpicked hotels, and a local coordinator who actually
          answers the phone. No hidden charges, no forced shopping stops, no
          driver switched on you halfway through the trip — just a well-run
          Kashmir holiday from the moment you land to the moment you fly home.
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => openModal()}
          className="mt-7 flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold shadow-lg shadow-orange-900/30 transition hover:bg-orange-700 sm:text-base"
        >
          Get a Free Quote Now
          <span aria-hidden>→</span>
        </button>

        {/* Vertical video */}
        <div className="mt-8">
          <VerticalVideo src={siteConfig.heroVideoSrc} poster={siteConfig.heroVideoPoster} />
          <p className="mt-2 text-[11px] text-neutral-500">Tap to watch — 30 sec trip preview</p>
        </div>

        {/* Call button */}
        <a
          href={telHref}
          className="mt-6 flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
        >
          Call Us Now at {siteConfig.phoneDisplay}
          <span aria-hidden>→</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.87 9.87 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
          </svg>
          Chat with Live Support Agent
        </a>
      </div>
    </section>
  );
}
