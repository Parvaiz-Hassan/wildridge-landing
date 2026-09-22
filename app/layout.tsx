import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.brand,
  description: "Kashmir & Ladakh tour packages by " + siteConfig.brand,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Tag Manager — replace siteConfig.gtmId in lib/site-config.ts,
            then this fires Meta Pixel + Google Ads conversion tags from GTM
            instead of hardcoding multiple scripts on the page. */}
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${siteConfig.gtmId}');
          `}
        </Script>
      </body>
    </html>
  );
}
