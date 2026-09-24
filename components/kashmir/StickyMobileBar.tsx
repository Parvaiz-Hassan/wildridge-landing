"use client";

import { telHref, waHref } from "@/lib/site-config";
import { useQuoteModal } from "./QuoteModalProvider";

// Small conversion-rate booster for ad traffic: keeps Call / WhatsApp /
// Quote one thumb-tap away on mobile without needing to scroll. Not part
// of the original 15-section brief — remove this file and its import in
// page.tsx if you'd rather not have it.
export default function StickyMobileBar() {
  const { openModal } = useQuoteModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-neutral-950/95 backdrop-blur sm:hidden">
      <a href={telHref} className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-white">
        <span className="text-base">📞</span>
        <span className="text-[10px] font-semibold">Call</span>
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-0.5 border-x border-white/10 py-2.5 text-white"
      >
        <span className="text-base">💬</span>
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
      <button
        onClick={() => openModal()}
        className="flex flex-1 flex-col items-center gap-0.5 bg-orange-600 py-2.5 text-white"
      >
        <span className="text-base">📝</span>
        <span className="text-[10px] font-semibold">Free Quote</span>
      </button>
    </div>
  );
}
