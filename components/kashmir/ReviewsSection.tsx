"use client";

import { useState } from "react";
import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";

const PAGE_SIZE = 8;

export default function ReviewsSection() {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  const shown = reviews.slice(0, visible);
  const hasMore = visible < reviews.length;

  return (
    <section className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              Real Feedback From Real Travellers
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              We&apos;re proud of the trips we&apos;ve run — read what travellers who booked
              with us actually have to say.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 self-start sm:self-auto">
            <span className="text-3xl font-extrabold text-neutral-900">{avg}</span>
            <div>
              <div className="text-amber-400">★★★★★</div>
              <p className="text-xs text-neutral-500">{reviews.length} reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, reviews.length))}
              className="rounded-full border border-neutral-300 px-8 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
