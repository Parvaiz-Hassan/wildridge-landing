import type { Metadata } from "next";
import KashmirLandingPage from "@/components/kashmir/KashmirLandingPage";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages | Wild Ridge Adventure",
  description:
    "Private-cab Kashmir tour packages covering Srinagar, Gulmarg, Pahalgam & Sonmarg. Transparent pricing, verified drivers, 24/7 support. Get a free quote today.",
};

// The root of this subdomain (kashmirpackages.wildridgeadventure.com) shows
// the same Kashmir landing page as /kashmir-packages, so ad traffic lands
// correctly whichever URL you use in your Meta/Google campaigns.
export default function Home() {
  return <KashmirLandingPage />;
}
