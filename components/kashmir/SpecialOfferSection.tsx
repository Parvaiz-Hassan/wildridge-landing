"use client";

import { useQuoteModal } from "./QuoteModalProvider";

export default function SpecialOfferSection() {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-gradient-to-br from-orange-600 via-red-600 to-rose-700 px-4 py-12 text-center text-white sm:py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-white/80">
          Limited-Time Offer
        </p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">Free 15-Minute Trip Call</h2>
        <p className="mt-2 text-sm text-white/80 sm:text-base">
          <span className="line-through">Usually ₹499</span> — free this week for
          anyone planning a Kashmir trip in the next 3 months.
        </p>
        <p className="mx-auto mt-3 max-w-md text-xs text-white/70 sm:text-sm">
          No sales pitch. Just a real conversation with a local coordinator about
          dates, budget, and what actually fits your trip.
        </p>
        <button
          onClick={openModal}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-orange-700 shadow-lg transition hover:bg-orange-50 sm:text-base"
        >
          Book My Free Call <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
