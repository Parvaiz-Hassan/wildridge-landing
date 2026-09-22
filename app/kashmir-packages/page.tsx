import type { Metadata } from "next";
import KashmirLandingPage from "@/components/kashmir/KashmirLandingPage";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages | Wild Ridge Adventure",
  description:
    "Private-cab Kashmir tour packages covering Srinagar, Gulmarg, Pahalgam & Sonmarg. Transparent pricing, verified drivers, 24/7 support. Get a free quote today.",
};

export default function Page() {
  return <KashmirLandingPage />;
}
