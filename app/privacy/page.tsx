import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy | " + siteConfig.brand };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-neutral-800">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
        Placeholder page. Replace this text with how {siteConfig.brand} collects,
        stores, and uses the details submitted through the quote form
        (name, phone, travel dates) before this page goes live to ad traffic —
        required for Meta/Google ad compliance.
      </p>
    </main>
  );
}
