import { Feature } from "@/types/feature";
import { Book, FileText, Zap } from "lucide-react"; // Importing icons from lucide-react

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Book size={40} color="#fa8705" />, // Using a Book icon for bookkeeping
    title: "Tech-Driven Bookkeeping",
    paragraph:
      "Our end-to-end bookkeeping automation service eliminates the need for manual data entry. From seamlessly processing bills, invoices, and journal entries to ensuring flawless integration with QuickBooks, Xero, Sage, and FreshBooks.",
    link: "/bookkeeping",
  },

  {
    id: 3,
    icon: <Zap size={40} color="#fa8705" />, // Using a Zap icon for automation
    title: "Financial Workflow Automation",
    paragraph:
      "Optimize your financial management with our QuickBooks-Google Sheets Automation powered by G-Accon. This integration enables seamless real-time data syncing, automated financial reports, and streamlined workflows between QuickBooks and Google Sheets. ",
    link: "/quickbooks",
  },
  {
    id: 2,
    icon: <FileText size={40} color="#fa8705" />, // Using a FileText icon for taxes
    title: "UK Taxes",
    paragraph:
      "Stay compliant with UK tax laws through expert bookkeeping and accounting services. We offer tailored solutions for VAT, Corporation Tax, Income Tax, and PAYE, ensuring accurate filing and timely submissions.",
    link: "/taxes",
  },
  // Add more features as needed
];

export default featuresData;
