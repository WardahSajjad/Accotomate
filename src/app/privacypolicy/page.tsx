import type { Metadata } from "next";

import PrivacyPolicy from "@/components/Privacypolicy/privacypolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Accotomate collects, uses and protects your information.",
  alternates: { canonical: "/privacypolicy" },
};

export default function PrivacypolicyPage() {
  return <PrivacyPolicy />;
}
