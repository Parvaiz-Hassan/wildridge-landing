import { realProblems } from "@/data/real-problems";
import ImgPlaceholder from "./ImgPlaceholder";

export default function RealProblemsSection() {
  return (
    <section className="bg-neutral-950 px-4 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold sm:text-4xl">
            <span className="text-red-500">Problems</span> They Don&apos;t Tell You About
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400 sm:text-base">
            Real issues Kashmir tourists run into with the wrong agency — and
            exactly how we plan around each one.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {realProblems.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:flex-row sm:items-center sm:p-5"
            >
              <img
  src={p.image}
  alt={p.title}
  className="h-40 w-full shrink-0 rounded-xl object-cover sm:h-28 sm:w-40"
/>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-orange-500">
                  {p.number}
                </p>
                <h3 className="mt-1 text-base font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
