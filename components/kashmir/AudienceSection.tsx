import { audience } from "@/data/audience";

export default function AudienceSection() {
  return (
    <section className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
          Become One Of Our 5-Star Reviews
        </p>
        <h2 className="mx-auto mt-2 max-w-xl text-2xl font-extrabold text-neutral-900 sm:text-4xl">
          Planning Your Kashmir Adventure? We Can Help.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <h3 className="text-sm font-bold text-neutral-900">{a.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
