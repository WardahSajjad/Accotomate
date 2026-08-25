import type { Metadata } from "next";

import AboutContent from "@/components/About/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Accotomate is a team of accountants and developers automating the bookkeeping that holds growing businesses back.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
