import type { Metadata } from "next";

import Bookkeeping from "@/components/Services/Bookkeeping";

export const metadata: Metadata = {
  title: "Tech-Driven Bookkeeping",
  description:
    "Automated transaction recording, bank reconciliation, invoicing and payroll integration across QuickBooks, Xero, Sage and FreshBooks.",
  alternates: { canonical: "/bookkeeping" },
};

export default function BookkeepingPage() {
  return <Bookkeeping />;
}
