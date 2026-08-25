import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Problem from "@/components/home/Problem";
import ProductShowcase from "@/components/home/ProductShowcase";
import ServiceGrid from "@/components/home/ServiceGrid";
import TeamBand from "@/components/home/TeamBand";
import Testimonials from "@/components/home/Testimonials";
import TrustStrip from "@/components/home/TrustStrip";
import CtaBand from "@/components/ui/CtaBand";
import Marquee from "@/components/ui/Marquee";
import StatsBand from "@/components/ui/StatsBand";

export const metadata: Metadata = {
  title: "Accotomate — Tech-driven bookkeeping for growing businesses",
  description:
    "Accountants and developers who automate data entry, reconciliations and month-end reporting across QuickBooks, Xero, Sage and FreshBooks.",
  alternates: { canonical: "/" },
};

const marqueeItems = [
  "QuickBooks",
  "Xero",
  "Sage",
  "FreshBooks",
  "Google Sheets",
  "VAT",
  "PAYE",
  "Corporation Tax",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} className="mt-20 md:mt-28" />
      <TrustStrip />
      <Problem />
      <ServiceGrid />
      <ProductShowcase />
      <TeamBand />
      <StatsBand />
      <HowItWorks />
      <Testimonials />
      <CtaBand />
    </>
  );
}
