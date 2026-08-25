import type { Metadata } from "next";

import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Accotomate about automating your bookkeeping, or open a support ticket with our team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
