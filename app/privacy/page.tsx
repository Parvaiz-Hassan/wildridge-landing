import { siteConfig, telHref, waHref } from "@/lib/site-config";
import LeadForm from "@/components/kashmir/LeadForm";

export const metadata = { title: "Contact Us | " + siteConfig.brand };

export default function ContactPage() {
  return (
    <main>
      {/* ---- Hero ---- */}
      <section className="bg-neutral-950 px-4 py-16 text-center text-white sm:py-20">
        <img
          src="/images/logo-light.svg"
          alt={siteConfig.brand}
          className="mx-auto mb-6 h-12 w-auto sm:h-14"
        />
        <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
          Get In Touch
        </p>
        <h1 className="mx-auto mt-2 max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl">
          Let&apos;s Plan Your Kashmir Trip
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-400 sm:text-base">
          Call, WhatsApp, or send us your travel dates below — a real trip
          coordinator gets back to you, not a call center script.
        </p>
      </section>

      {/* ---- Contact details + form ---- */}
      <section className="bg-neutral-50 px-4 py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1150px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: contact details */}
          <div>
            <h2 className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">
              Contact Details
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
              Prefer to talk it through first? Reach us directly — we
              typically reply within the hour during business hours.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📞
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Call Us</p>
                  <a href={telHref} className="text-sm text-neutral-600 hover:text-orange-600">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25d366]/10 text-lg text-[#25d366]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25d366]">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.87 9.87 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">WhatsApp</p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-orange-600"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Email</p>
                  <a
                    href={`mailto:${siteConfig.emailTo}`}
                    className="text-sm text-neutral-600 hover:text-orange-600"
                  >
                    {siteConfig.emailTo}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📍
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Based In</p>
                  {/* TODO: replace with your exact office address once finalized */}
                  <p className="text-sm text-neutral-600">Srinagar, Jammu &amp; Kashmir, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  🕒
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Business Hours</p>
                  {/* TODO: confirm actual hours */}
                  <p className="text-sm text-neutral-600">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: same lead-capture form used on the popup */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
