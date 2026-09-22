import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Terms & Conditions | " + siteConfig.brand };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-neutral-800">
      <h1 className="text-2xl font-bold">Terms & Conditions</h1>
      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
        Placeholder page. Replace this text with {siteConfig.brand}&apos;s actual
        booking terms, payment schedule, and cancellation policy before this
        page goes live to ad traffic.
      </p>
    </main>
  );
}
