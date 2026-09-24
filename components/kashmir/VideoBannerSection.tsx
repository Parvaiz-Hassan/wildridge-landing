"use client";

import { siteConfig } from "@/lib/site-config";
import { useQuoteModal } from "./QuoteModalProvider";
import VerticalVideo from "./VerticalVideo";

export default function VideoBannerSection() {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl bg-neutral-950 px-6 py-10 text-center text-white sm:flex-row sm:gap-12 sm:px-12 sm:text-left">
        <div className="shrink-0">
          <VerticalVideo videoId={siteConfig.heroVideoId} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
            See It Before You Book
          </p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            What A Wild Ridge Adventure Trip Actually Looks Like
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
            Real footage from real trips — the drives, the stays, the moments our
            travellers talk about afterward. No stock clips, no exaggeration.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold transition hover:bg-orange-700"
          >
            Get a Free Quote Now <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
