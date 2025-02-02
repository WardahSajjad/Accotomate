import { Feature } from "@/types/feature";
import { Book, FileText, Zap } from "lucide-react"; // Importing icons from lucide-react

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Book size={40} color="#fa8705" />, // Using a Book icon for bookkeeping
    title: "Tech-Driven Bookkeeping",
    paragraph:
      "Revolutionize your bookkeeping with innovative technology. Our automated solutions integrate seamlessly with QuickBooks and Google Sheets, simplifying your financial data management, improving accuracy, and providing actionable insights in real-time—helping your business stay ahead.",
    link: "/bookkeeping",
  },
  {
    id: 2,
    icon: <FileText size={40} color="#fa8705" />, // Using a FileText icon for taxes
    title: "UK Taxes",
    paragraph:
      "Stay compliant with UK tax laws through expert bookkeeping and accounting services. We offer tailored solutions for VAT, Corporation Tax, Income Tax, and PAYE, ensuring accurate filing and timely submissions. Let us handle your tax obligations, so you can focus on growing your business.",
    link: "/taxes",
  },
  {
    id: 3,
    icon: <Zap size={40} color="#fa8705" />, // Using a Zap icon for automation
    title: "QuickBooks-Google Sheets Automation",
    paragraph:
      "Optimize your financial management with our QuickBooks-Google Sheets Automation powered by G-Accon. This integration enables seamless real-time data syncing, automated financial reports, and streamlined workflows between QuickBooks and Google Sheets.",
    link: "/quickbooks",
  },
  // Add more features as needed
];

export default featuresData;
