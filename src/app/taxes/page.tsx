import Breadcrumb from "@/components/Common/Breadcrumb";
import UKTax from "@/components/Services/Taxes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK-Tax| Accotomate",
  description: "This is the UK-Tax page for Accotomate.",
  // other metadata
};

const QuickbooksPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="UK Tax Services"
        description="Stay compliant with UK tax laws through expert bookkeeping and accounting services. We offer tailored solutions for VAT, Corporation Tax, Income Tax, and PAYE, ensuring accurate filing and timely submissions. Let us handle your tax obligations, so you can focus on growing your business."
      />

      <UKTax />
    </>
  );
};

export default QuickbooksPage;
