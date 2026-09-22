"use client";

import { before, after } from "@/data/why-us";
import { siteConfig } from "@/lib/site-config";
import { useQuoteModal } from "./QuoteModalProvider";

export default function WhyUsSection() {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-neutral-950 px-4 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
          Why Other Agencies Hate Us
        </p>
        <h2 className="mx-auto mt-2 max-w-xl text-2xl font-extrabold sm:text-4xl">
          See Why {siteConfig.brand} Stands Out
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-red-400">
              Before, With Other Agencies
            </h3>
            <ul className="space-y-3">
              {before.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-0.5 text-red-400">✕</span> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-green-400">
              After, With {siteConfig.brand}
            </h3>
            <ul className="space-y-3">
              {after.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-0.5 text-green-400">✓</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={openModal}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-3.5 text-sm font-bold transition hover:bg-orange-700"
        >
          Get a Free Quote Now <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
