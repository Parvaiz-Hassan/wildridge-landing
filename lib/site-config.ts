// ---------------------------------------------------------------------------
// Central place to edit brand details, contact numbers and tracking IDs.
// Update the placeholders below once — every section on the page reads
// from here, so you never have to hunt through components to change a
// phone number or swap the WhatsApp link.
// ---------------------------------------------------------------------------

export const siteConfig = {
  brand: "Wild Ridge Adventure",
  domain: "wildridgeadventure.com",

  // TODO: replace with the real business number (10 digits, no spaces)
  phoneDisplay: "+91 60056 58040",
  phoneRaw: "916005658040", // used for tel: and wa.me links — country code + number, no + or spaces

  whatsappMessage:
    "Hi Wild Ridge Adventure, I'm planning a Kashmir trip and I'd like to know more about your packages.",

  // Mail routing — you told us: SMTP send via Hostinger Titan Mail
  emailFrom: "admin@wildridgeadventure.com",
  emailTo: "wildridgeadventure@gmail.com",

  // TODO: replace with the real YouTube video ID for the vertical hero reel
  // (the part after "v=" or after "youtu.be/")
  heroVideoId: "HYuFgV13yCk",

  // TODO: swap for your GTM container once created
  gtmId: "GTM-5B8NPR6M",

  // TODO: replace with the live Google Business Profile review link once
  // reviews are collected and you're ready to point "Load More" / footer
  // links at your real profile
  googleReviewsUrl: "https://g.page/r/REPLACE_WITH_YOUR_PLACE_ID/review",

  // Where the "Get a Free Quote" popup submits its lead. This page is a
  // static export with no server of its own, so the form posts to a small
  // PHP script you upload to your existing Hostinger hosting (same place
  // your WordPress site + Titan SMTP already live). See
  // /hostinger-mailer/README.md in this project for the ready-to-upload
  // script and setup steps.
  leadEndpoint: "https://wildridgeadventure.com/api/send-lead.php",
};

export const telHref = `tel:+${siteConfig.phoneRaw}`;
export const waHref = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
