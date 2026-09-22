import ImgPlaceholder from "./ImgPlaceholder";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "9+", label: "Years Guiding Kashmir Trips" },
  { value: "1,200+", label: "Families & Couples Hosted" },
  { value: "4.9★", label: "Average Traveller Rating" },
];

export default function AboutSection() {
  return (
    <section className="bg-neutral-950 px-4 py-14 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500">About Us</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl">
            Easy Trips. Real Local Knowledge. Unforgettable Memories.
          </h2>
          <p className="mt-4 text-lg font-semibold italic text-orange-400">
            &ldquo;We don&apos;t sell packages — we plan trips the way we&apos;d
            plan one for our own family.&rdquo;
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
            {siteConfig.brand} was built by people who grew up in the valley and
            got tired of watching visitors get shortchanged by agencies that
            never set foot here. Every driver, hotel, and route on this page has
            been personally checked by our team — not picked off a broker&apos;s list.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-xl font-extrabold text-orange-500 sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-neutral-500 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ImgPlaceholder
          label="Founder / team photo in Kashmir, portrait orientation"
          className="aspect-4/5 w-full rounded-3xl"
        />
      </div>
    </section>
  );
}
