import { siteConfig, telHref, waHref } from "@/lib/site-config";

export const metadata = { title: "Terms & Conditions | " + siteConfig.brand };

const h2 = "mt-10 text-lg font-bold text-neutral-900 sm:text-xl";
const p = "mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base";
const ul = "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-base";

export default function TermsPage() {
  return (
    <main className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-[1150px]">
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
          Legal
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-neutral-500">Last updated: 24 September 2026</p>

        <p className={p}>
          These Terms &amp; Conditions govern every trip, quote, and booking
          arranged through {siteConfig.brand} ({siteConfig.domain}), including
          enquiries submitted through this website&apos;s quote form, phone,
          or WhatsApp. By requesting a quote, making a booking, or travelling
          with us, you agree to the terms below. Please read them before
          confirming any booking.
        </p>

        <h2 className={h2}>1. Who We Are</h2>
        <p className={p}>
          {siteConfig.brand} is a Kashmir- and Ladakh-based trip planning
          service. We design itineraries and arrange travel services —
          accommodation, private cabs, permits, and local activities — on
          your behalf, working with registered local hotels, transporters,
          and activity operators across the Kashmir and Ladakh region. We act
          as your local trip coordinator; some services on your itinerary are
          delivered directly by these third-party operators (see Section 8).
        </p>

        <h2 className={h2}>2. Quotes &amp; Bookings</h2>
        <p className={p}>
          Any price, itinerary, or availability shared with you — including
          the packages listed on this website — is indicative until
          confirmed in writing (email or WhatsApp) and secured with the
          advance payment described below. A booking is only confirmed once:
        </p>
        <ul className={ul}>
          <li>You&apos;ve received a written confirmation from our team, and</li>
          <li>The advance payment (or full payment, where applicable) has been received.</li>
        </ul>
        <p className={p}>
          Verbal quotes, WhatsApp chats, or this website&apos;s quote form are
          the starting point for planning your trip — not a confirmed
          booking on their own.
        </p>

        <h2 className={h2}>3. Pricing</h2>
        <p className={p}>
          Prices shown on this website (including the &ldquo;Get a Free
          Quote&rdquo; estimates) are indicative and can vary based on travel
          dates, season, hotel/room category, group size, and availability at
          the time of confirmation. Government taxes, entry fees, and permit
          charges (where applicable) are quoted separately unless explicitly
          stated as included. We&apos;ll always confirm final pricing in
          writing before you pay.
        </p>

        <h2 className={h2}>4. Payment Terms</h2>
        <ul className={ul}>
          <li>
            A minimum advance of 25–30% of the total package cost is
            generally required to confirm a booking (the exact figure is
            confirmed per itinerary, especially during peak season).
          </li>
          <li>The remaining balance is due before or at the start of the trip, as agreed at confirmation.</li>
          <li>
            Payments can be made via bank transfer, UPI, or another method
            we&apos;ll share with you directly — we do not process card
            payments through this website.
          </li>
        </ul>

        <h2 className={h2}>5. Cancellation &amp; Refund Policy</h2>
        <p className={p}>
          Because hotels, cabs, and permits are booked on your behalf ahead
          of your trip, cancellations are subject to the following (measured
          from your scheduled arrival date):
        </p>
        <ul className={ul}>
          <li>15+ days before arrival: advance refunded, minus any non-recoverable third-party charges (e.g. pre-paid permits or peak-season hotel deposits).</li>
          <li>7–14 days before arrival: 50% of the advance is refundable.</li>
          <li>Less than 7 days before arrival, or a no-show: the advance is non-refundable.</li>
        </ul>
        <p className={p}>
          Date changes (rather than cancellations) are accommodated where
          possible, subject to hotel and cab availability on the new dates.
          Refunds, where applicable, are processed within 7–10 business days
          to the original payment method.
        </p>

        <h2 className={h2}>6. Itinerary Changes &amp; Circumstances Beyond Our Control</h2>
        <p className={p}>
          Kashmir and Ladakh itineraries can be affected by weather, road and
          pass closures (Zojila, Sonmarg, and similar routes are seasonal),
          landslides, local administrative restrictions, or other
          circumstances outside our control. In such cases, we&apos;ll always
          try to offer a reasonable alternative (an alternate route, a
          substitute activity, or a rescheduled day), but we are not liable
          for delays, missed connections, or changes caused by such events.
          Any additional costs arising from these situations (e.g. an
          unplanned extra night due to a closed pass) are the
          traveller&apos;s responsibility.
        </p>

        <h2 className={h2}>7. Traveller Responsibilities</h2>
        <ul className={ul}>
          <li>Carry a valid government-issued photo ID for the entire trip — required at hotel check-ins and permit checkpoints.</li>
          <li>Certain areas (parts of Ladakh, and occasionally specific Kashmir routes) require an Inner Line Permit or similar authorization — we&apos;ll guide you on this, but the responsibility to carry valid documents rests with you.</li>
          <li>Disclose any medical conditions relevant to high-altitude travel (particularly for Ladakh) before booking.</li>
          <li>Personal belongings remain your responsibility throughout the trip; we recommend travel insurance for high-value items and trip interruption cover.</li>
        </ul>

        <h2 className={h2}>8. Third-Party Services</h2>
        <p className={p}>
          Hotels, homestays, houseboats, private cab operators, and activity
          providers (e.g. gondola rides, shikara rides, trekking guides) used
          on your itinerary are independent, registered local businesses. We
          select and vet them carefully, but they operate under their own
          terms, house rules, and cancellation policies where applicable. We
          are not liable for service issues that are outside our direct
          control once you are in the care of a third-party operator (for
          example, a hotel&apos;s internal maintenance issue).
        </p>

        <h2 className={h2}>9. Limitation of Liability</h2>
        <p className={p}>
          {siteConfig.brand} is not liable for injury, loss, delay, or
          expense caused by war, civil unrest, strikes, weather, natural
          disaster, government action, mechanical breakdown, or any other
          event beyond our reasonable control. Our liability, where it does
          arise from our own error, is limited to the value of the specific
          service booked with us.
        </p>

        <h2 className={h2}>10. Governing Law</h2>
        <p className={p}>
          These terms are governed by the laws of India. Any dispute arising
          from a booking with {siteConfig.brand} is subject to the
          jurisdiction of the courts in Jammu &amp; Kashmir.
        </p>

        <h2 className={h2}>11. Changes to These Terms</h2>
        <p className={p}>
          We may update these terms from time to time to reflect changes in
          our services or policies; the &ldquo;Last updated&rdquo; date at the
          top of this page always reflects the latest version. Terms agreed
          at the time of your booking confirmation are the ones that apply to
          your trip.
        </p>

        <h2 className={h2}>12. Contact Us</h2>
        <p className={p}>
          Questions about these terms, or about a specific booking? Reach us
          at{" "}
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
