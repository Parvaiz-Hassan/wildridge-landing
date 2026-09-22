import { siteConfig, telHref, waHref } from "@/lib/site-config";

export const metadata = { title: "Contact Us | " + siteConfig.brand };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-neutral-800">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-4 text-sm text-neutral-600">Call: {siteConfig.phoneDisplay}</p>
      <p className="mt-1 text-sm text-neutral-600">Email: {siteConfig.emailTo}</p>
      <div className="mt-6 flex gap-3">
        <a href={telHref} className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white">
          Call Now
        </a>
        <a href={waHref} className="rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white">
          WhatsApp
        </a>
      </div>
    </main>
  );
}
