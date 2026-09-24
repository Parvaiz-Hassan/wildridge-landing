"use client";

import { siteConfig, telHref, waHref } from "@/lib/site-config";
import { useQuoteModal } from "./QuoteModalProvider";

export default function FinalCtaSection() {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-neutral-950 px-4 py-14 text-center text-white sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-extrabold sm:text-4xl">
          Ready To Travel Kashmir With {siteConfig.brand}?
        </h2>
        <p className="mt-3 text-sm text-neutral-400 sm:text-base">
          Take the next step toward your dream Kashmir trip. Book your free
          consultation today and let the journey begin.
        </p>

        <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3">
          <button
            onClick={() => openModal()}
            className="flex items-center justify-center gap-2 rounded-full bg-orange-600 py-3.5 text-sm font-bold transition hover:bg-orange-700"
          >
            Get a Free Quote Now <span aria-hidden>→</span>
          </button>
          <a
            href={telHref}
            className="flex items-center justify-center gap-2 rounded-full bg-amber-400 py-3.5 text-sm font-bold text-neutral-900 transition hover:bg-amber-300"
          >
            Call Us Now at {siteConfig.phoneDisplay}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-3.5 text-sm font-bold text-white transition hover:brightness-95"
          >
            Chat With a Live Agent
          </a>
        </div>
      </div>
    </section>
  );
}
