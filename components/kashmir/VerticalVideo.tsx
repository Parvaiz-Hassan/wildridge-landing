"use client";

import { useRef, useState } from "react";

// Click-to-play inline video, self-hosted (not a YouTube embed) so there is
// zero player chrome — a YouTube iframe keeps some tap-to-pause behavior
// even with controls=0, but a plain <video controls={false}> element has
// none at all. 4:5 aspect ratio (not a full vertical 9:16 sliver) so it
// reads as a proper-sized block on a phone screen instead of a narrow strip.
//
// Tapping anywhere on the video toggles play/pause — a small play icon when
// stopped, a small pause icon while playing — since there's no native
// control bar to fall back on.
export default function VerticalVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      // .play() is called from this same click handler so the browser
      // treats it as a user gesture and allows sound.
      video.play();
      setPlaying(true);
    }
  }

  return (
    <div
      className={`relative aspect-4/5 w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800 shadow-xl ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        controls={false}
        disablePictureInPicture
        loop
        className="absolute inset-0 h-full w-full object-cover"
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="group absolute inset-0 flex h-full w-full items-center justify-center"
      >
        {/* Dark tint only while stopped, so the video isn't dimmed once playing */}
        {!playing && <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />}

        {/*
          Size is set with inline styles (not Tailwind's h-8/w-8) and
          flexShrink: 0 is forced — this button sits inside a flex row, and
          if the fixed-size utility classes ever fail to apply (stale CSS
          cache, a partially-pasted file, etc.) a flex child with no
          explicit size silently stretches to fill the row's full height,
          which is exactly the tall-pill-instead-of-a-circle bug this
          guards against.
        */}
        <span
          style={{ width: 32, height: 32, flexShrink: 0 }}
          className={`relative flex items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-105 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {playing ? (
            // Stop icon — perfectly centered square (6,6 to 18,18 in a 24x24 box).
            <svg style={{ width: 14, height: 14 }} className="text-orange-600" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="6" width="12" height="12" rx="1.5" />
            </svg>
          ) : (
            // Play icon — a symmetric triangle centered on the box (no manual
            // offset), so it lines up with the stop icon above in the exact
            // same spot.
            <svg style={{ width: 14, height: 14 }} className="text-orange-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 6.5v11l9-5.5z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
