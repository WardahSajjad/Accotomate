import type { Metadata } from "next";

import Taxes from "@/components/Services/Taxes";

export const metadata: Metadata = {
  title: "UK Tax Services",
  description:
    "VAT, Corporation Tax, Income Tax and PAYE prepared and filed by qualified UK accountants, from books that are already reconciled.",
  alternates: { canonical: "/taxes" },
};

export default function TaxesPage() {
  return <Taxes />;
}
