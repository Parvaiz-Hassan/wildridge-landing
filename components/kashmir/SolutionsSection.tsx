import { solutions } from "@/data/solutions";

export default function SolutionsSection() {
  return (
    <section className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
          The Solution
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-extrabold text-neutral-900 sm:text-4xl">
          We&apos;ve Thought Of Everything, So You Don&apos;t Have To
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500 sm:text-base">
          Here&apos;s how we make your Kashmir trip stress-free, smooth, and unforgettable.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg sm:p-6"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-2xl shadow-md shadow-orange-900/10 transition group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-sm font-bold text-neutral-900 sm:text-base">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
