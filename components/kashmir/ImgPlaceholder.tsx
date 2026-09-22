// Lightweight stand-in for real photography. No external image is loaded —
// keeps the page fast until you drop your own photos in. Replace usages by
// swapping in a plain <img src="/images/..." /> once you have assets;
// the `label` text tells you exactly what photo belongs there.
export default function ImgPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`img-placeholder flex items-center justify-center border border-dashed border-white/15 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 text-center ${className}`}
    >
      <div className="px-3">
        <svg
          className="mx-auto mb-2 h-7 w-7 text-white/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 17l5-5 3 3 5-6 5 5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="8" r="1.5" />
          <rect x="2.5" y="4" width="19" height="16" rx="2" />
        </svg>
        <p className="text-[11px] font-medium leading-snug text-white/50">{label}</p>
      </div>
    </div>
  );
}
