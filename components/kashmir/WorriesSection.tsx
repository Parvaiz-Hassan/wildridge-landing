import { worries } from "@/data/worries";

export default function WorriesSection() {
  return (
    <section className="bg-neutral-950 px-4 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
          The Problem
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-extrabold sm:text-4xl">
          Planning A Kashmir Trip? These Worries Might Sound Familiar.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400 sm:text-base">
          Whether it&apos;s your first time or not, Kashmir planning can feel confusing.
          You&apos;re not alone.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {worries.map((w, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-neutral-900 p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                ✕
              </div>
              <h3 className="text-sm font-bold text-amber-400">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
