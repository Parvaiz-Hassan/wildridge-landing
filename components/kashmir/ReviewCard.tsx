"use client";

import { useState } from "react";
import type { Review } from "@/data/reviews";

function Stars({ n }: { n: number }) {
  return (
    <span className="text-amber-400" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-neutral-600">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 140;

  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-neutral-900 p-4">
      <div className="mb-2 flex items-center gap-1 text-sm">
        <Stars n={review.rating} />
        <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
          </svg>
        </span>
      </div>

      <p className={`flex-1 text-sm leading-relaxed text-neutral-300 ${!expanded && isLong ? "line-clamp-4" : ""}`}>
        {review.text}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 self-start text-xs font-semibold text-orange-500 hover:text-orange-400"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
        <div>
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-[11px] text-neutral-500">
            {review.location} · {review.tour}
          </p>
        </div>
        <span className="text-[11px] text-neutral-500">{review.date}</span>
      </div>
    </div>
  );
}
