import { siteConfig, telHref, waHref } from "@/lib/site-config";

// A real, separate page (not just a state inside the popup) so that a
// normal page load happens here — this is what GTM's Page View trigger
// picks up to fire Google Ads / Meta conversion tags. In Google Tag
// Manager, add a trigger: "Page Path equals /thank-you/" and attach your
// conversion tags to it.
export const metadata = { title: "Thank You | " + siteConfig.brand };

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4 py-20 text-center text-white">
      <img
        src="/images/logo-light.svg"
        alt={siteConfig.brand}
        className="mb-6 h-12 w-auto"
      />

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600/15 text-3xl">
        ✅
      </div>

      <h1 className="mt-6 max-w-md text-2xl font-extrabold sm:text-3xl">
        Thank You — Your Request Is In!
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400 sm:text-base">
        One of our trip coordinators will call or message you shortly with a
        custom Kashmir itinerary. If it&apos;s urgent, reach us directly below.
      </p>

      <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Chat with Us on WhatsApp
        </a>
        <a
          href={telHref}
          className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
        >
          Call Us Now at {siteConfig.phoneDisplay}
        </a>
      </div>

      <a
        href="/"
        className="mt-10 text-xs font-medium text-neutral-500 underline underline-offset-2 hover:text-neutral-300"
      >
        ← Back to the homepage
      </a>
    </main>
  );
}
