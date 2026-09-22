"use client";

import { useState } from "react";

// Click-to-play inline video, no lightbox/popup — swaps its own thumbnail
// for a playing YouTube iframe in place. Vertical (9:16) aspect ratio.
export default function VerticalVideo({
  videoId,
  className = "",
}: {
  videoId: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative aspect-9/16 w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800 shadow-xl ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
          title="Wild Ridge Adventure — Kashmir trip preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="group absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-105">
              <svg className="ml-1 h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
