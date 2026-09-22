import { steps } from "@/data/how-it-works";

export default function HowItWorksSection() {
  return (
    <section className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
          Simple Process
        </p>
        <h2 className="mx-auto mt-2 max-w-xl text-2xl font-extrabold text-neutral-900 sm:text-4xl">
          How It Works
        </h2>

        <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center px-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-xl font-extrabold text-white shadow-md">
                {i + 1}
              </div>
              <h3 className="mt-4 text-sm font-bold text-neutral-900">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">{s.desc}</p>

              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden text-2xl text-orange-300 lg:absolute lg:right-[-1.25rem] lg:top-6 lg:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
