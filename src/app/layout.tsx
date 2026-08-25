import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import "../styles/index.css";

// Stand-ins for the reference site's licensed Raptortext / Raptormono pair:
// a squarish grotesque for display, a technical mono for labels and UI.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.accotomate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accotomate — Tech-driven bookkeeping for growing businesses",
    template: "%s | Accotomate",
  },
  description:
    "Accountants and developers automating the bookkeeping that slows you down. Automated data entry, reconciliations and reporting across QuickBooks, Xero, Sage and FreshBooks — plus UK tax compliance.",
  keywords: [
    "bookkeeping automation",
    "QuickBooks automation",
    "outsourced accountants",
    "UK tax compliance",
    "Xero bookkeeping",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Accotomate",
    title: "Accotomate — Tech-driven bookkeeping for growing businesses",
    description:
      "Automated data entry, reconciliations and reporting across QuickBooks, Xero, Sage and FreshBooks — plus UK tax compliance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accotomate — Tech-driven bookkeeping for growing businesses",
    description:
      "Automated data entry, reconciliations and reporting across QuickBooks, Xero, Sage and FreshBooks — plus UK tax compliance.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo/5.png", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-surface">
        {/* Scroll reveals defer opacity via JS; without it, show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;animation:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-accent focus:px-5 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
