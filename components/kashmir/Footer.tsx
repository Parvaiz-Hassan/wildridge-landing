import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-10 text-neutral-400">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="text-base font-extrabold text-white">
            WILD RIDGE <span className="text-orange-500">ADVENTURE</span>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500">
            Locally run Kashmir & Ladakh trip planning — private cabs, handpicked
            stays, and honest pricing from people who live in the valley.
          </p>
        </div>

        <div className="my-6 h-px bg-white/10" />

        <p className="mx-auto max-w-3xl text-center text-[11px] leading-relaxed text-neutral-600">
          {siteConfig.brand} arranges travel services across Kashmir on behalf of
          registered local operators. Prices shown are indicative and subject to
          change based on season, availability, and group size. Please read our
          Terms & Conditions and Cancellation Policy before booking. We are not
          liable for delays or closures caused by weather, road conditions, or
          circumstances beyond our control.
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
