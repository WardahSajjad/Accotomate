import type { Metadata } from "next";

import Quickbooks from "@/components/Services/Quickbooks";

export const metadata: Metadata = {
  title: "Financial Workflow Automation",
  description:
    "Real-time sync between QuickBooks and Google Sheets — consolidated data, scheduled reconciliations, AP/AR tracking and reports that refresh themselves.",
  alternates: { canonical: "/quickbooks" },
};

export default function QuickbooksPage() {
  return <Quickbooks />;
}
