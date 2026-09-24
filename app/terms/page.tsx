import { siteConfig, telHref, waHref } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy | " + siteConfig.brand };

const h2 = "mt-10 text-lg font-bold text-neutral-900 sm:text-xl";
const p = "mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base";
const ul = "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-base";

export default function PrivacyPage() {
  return (
    <main className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-[1150px]">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500">Last updated: 24 September 2026</p>

        <p className={p}>
          This policy explains what information {siteConfig.brand} collects
          when you visit {siteConfig.domain} or submit a quote request, why
          we collect it, and how it&apos;s used, stored, and protected. By
          using this website or submitting your details through our quote
          form, you agree to the practices described here.
        </p>

        <h2 className={h2}>1. Information We Collect Directly From You</h2>
        <p className={p}>
          When you submit the &ldquo;Get a Free Quote&rdquo; form (on the
          popup or the Contact page), we collect:
        </p>
        <ul className={ul}>
          <li>Your full name</li>
          <li>Your phone number</li>
          <li>Your intended arrival date</li>
          <li>Number of travellers</li>
          <li>Any additional message you choose to include</li>
        </ul>
        <p className={p}>
          If you contact us directly by phone, WhatsApp, or email instead of
          the form, we collect whatever details you share with us in that
          conversation (e.g. your phone number via WhatsApp/caller ID, or
          your email address if you write to us).
        </p>

        <h2 className={h2}>2. Information Collected Automatically</h2>
        <p className={p}>
          Like most websites, this site uses cookies and similar tracking
          technologies, loaded through Google Tag Manager, to understand
          traffic and measure how well our advertising campaigns are
          performing. Depending on the tags configured in our Tag Manager
          container, this can include:
        </p>
        <ul className={ul}>
          <li>Google Ads and/or Meta (Facebook/Instagram) Pixel conversion tracking — so we know when an ad led to a quote request</li>
          <li>Basic analytics data — pages viewed, general device/browser type, and approximate location (e.g. city-level, from IP address)</li>
        </ul>
        <p className={p}>
          This data is used in aggregate to improve our advertising and this
          website — it is not used to build a detailed personal profile
          beyond standard ad-platform analytics. You can control cookies
          through your browser settings at any time; note that some site
          features may not work as expected with cookies disabled.
        </p>

        <h2 className={h2}>3. How We Use Your Information</h2>
        <ul className={ul}>
          <li>To contact you about your quote request — by phone, WhatsApp, or email</li>
          <li>To plan and confirm your itinerary if you choose to book with us</li>
          <li>To send trip-related communication (confirmations, changes, reminders) before and during your trip</li>
          <li>To measure and improve our Google/Meta ad campaigns (in aggregate, via the tracking described above)</li>
        </ul>
        <p className={p}>
          We do not use your phone number or email for marketing you did not
          ask for beyond following up on the quote you requested.
        </p>

        <h2 className={h2}>4. How We Share Your Information</h2>
        <p className={p}>
          We do not sell your personal information. We share it only in the
          following situations:
        </p>
        <ul className={ul}>
          <li>
            With local operators involved in fulfilling a confirmed booking —
            for example, a hotel or cab operator on your itinerary needs your
            name and travel dates to prepare for your stay.
          </li>
          <li>
            With service providers who help us run this website and email
            (e.g. our hosting and email-delivery provider) — solely to
            deliver the quote request to our team.
          </li>
          <li>
            With Google and Meta, in the limited, aggregated form described
            in Section 2, for ad measurement — not your name, phone number,
            or message content.
          </li>
          <li>If required by law, or to protect the rights, safety, or property of {siteConfig.brand} or others.</li>
        </ul>

        <h2 className={h2}>5. Data Retention</h2>
        <p className={p}>
          We retain quote and booking details for as long as reasonably
          necessary to respond to your enquiry, deliver a booked trip, and
          meet our own record-keeping and tax obligations. If you&apos;d like
          us to delete your details sooner, contact us using the details
          below and we&apos;ll action it, except where we&apos;re required to
          retain records by law.
        </p>

        <h2 className={h2}>6. Your Rights</h2>
        <p className={p}>You can ask us at any time to:</p>
        <ul className={ul}>
          <li>Tell you what personal information we hold about you</li>
          <li>Correct inaccurate details</li>
          <li>Delete your details, where we&apos;re not legally required to keep them</li>
        </ul>
        <p className={p}>
          To make a request, email{" "}
          <a href={`mailto:${siteConfig.emailTo}`} className="text-orange-600 underline">
            {siteConfig.emailTo}
          </a>{" "}
          — we&apos;ll respond within a reasonable time.
        </p>

        <h2 className={h2}>7. Data Security</h2>
        <p className={p}>
          Quote form submissions are sent over an encrypted (HTTPS)
          connection and delivered to our team&apos;s email inbox. We take
          reasonable steps to protect your information, but no method of
          transmission or storage is 100% secure, and we can&apos;t guarantee
          absolute security.
        </p>

        <h2 className={h2}>8. Children&apos;s Privacy</h2>
        <p className={p}>
          This website and our services are intended for adults planning
          travel. We do not knowingly collect personal information from
          children.
        </p>

        <h2 className={h2}>9. Changes to This Policy</h2>
        <p className={p}>
          We may update this policy occasionally to reflect changes in our
          practices or the tools we use. The &ldquo;Last updated&rdquo; date
          at the top of this page always reflects the current version.
        </p>

        <h2 className={h2}>10. Contact Us</h2>
        <p className={p}>
          Questions about this policy, or about your data? Reach us at{" "}
          <a href={`mailto:${siteConfig.emailTo}`} className="text-orange-600 underline">
            {siteConfig.emailTo}
          </a>
          , by phone at{" "}
          <a href={telHref} className="text-orange-600 underline">
            {siteConfig.phoneDisplay}
          </a>
          , or on{" "}
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </main>
  );
}
