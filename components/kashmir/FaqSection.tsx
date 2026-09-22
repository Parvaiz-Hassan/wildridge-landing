"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600">FAQ</p>
          <h2 className="mt-2 text-2xl font-extrabold text-neutral-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-neutral-500 sm:text-base">
            Everything you need to know before you book.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-neutral-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 bg-neutral-50 px-5 py-4 text-left text-sm font-semibold text-neutral-900"
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <span className={`shrink-0 text-orange-600 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-200 px-5 py-4 text-sm leading-relaxed text-neutral-600">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
