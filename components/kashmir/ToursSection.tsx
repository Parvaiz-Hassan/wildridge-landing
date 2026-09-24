"use client";

import { tours } from "@/data/tours";
import { useQuoteModal } from "./QuoteModalProvider";

export default function ToursSection() {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-neutral-950 px-4 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
          Our Packages
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-extrabold sm:text-4xl">
          Six Kashmir Tours, Built Around How People Actually Travel
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400 sm:text-base">
          Pick a starting point — every itinerary can be adjusted to your dates,
          budget, and pace.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <div
              key={t.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              <div className="relative">
                <img src={t.image} alt={t.title} className="aspect-4/3 w-full object-cover" />
                {t.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-orange-600 px-3 py-1 text-[11px] font-bold">
                    {t.tag}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold">{t.title}</h3>
                <p className="mt-1 text-xs text-neutral-400">{t.duration}</p>
                <p className="mt-1 text-xs text-neutral-500">{t.route}</p>

                <ul className="mt-3 space-y-1">
                  {t.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <span className="text-orange-500">✓</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-white">
                    ₹{t.priceDiscounted.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-neutral-500 line-through">
                    ₹{t.priceOriginal.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-neutral-500">/ person</span>
                </div>

                <button
                  onClick={() => openModal(t.title)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-orange-600 py-2.5 text-sm font-bold transition hover:bg-orange-700"
                >
                  📞 Request Callback
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
