import Breadcrumb from "@/components/Common/Breadcrumb";
import QuickBooksAutomationPage from "@/components/Services/Quickbooks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quickbooks| Accotomate",
  description: "This is the Quickbooks page for Accotomate.",
  // other metadata
};

const QuickbooksPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="QuickBooks Workflow Automation"
        description="Optimize your financial management with our QuickBooks-Google Sheets Automation powered by G-Accon. This integration enables seamless real-time data syncing, automated financial reports, and streamlined workflows between QuickBooks and Google Sheets."
      /> */}

      <QuickBooksAutomationPage />
    </>
  );
};

export default QuickbooksPage;
