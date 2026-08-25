export type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  href: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "bookkeeping",
    title: "Tech-Driven Bookkeeping",
    summary:
      "End-to-end automation for bills, invoices and journal entries, integrated with QuickBooks, Xero, Sage and FreshBooks.",
    points: [
      "Automated transaction capture",
      "Scheduled bank reconciliations",
      "Tax-ready records year round",
    ],
    href: "/bookkeeping",
    image: "/images/services/bookkeeping.png",
    imageAlt:
      "Illustration of a bookkeeping workflow: a clipboard of records, a calculator and a person reviewing figures on a phone.",
  },
  {
    id: "automation",
    title: "Financial Workflow Automation",
    summary:
      "Real-time sync between QuickBooks and Google Sheets, so reports build themselves instead of waiting on a manual export.",
    points: [
      "Live data, no manual exports",
      "Reports that refresh on a schedule",
      "AP/AR ageing at a glance",
    ],
    href: "/quickbooks",
    image: "/images/video/webimg.jpg",
    imageAlt:
      "The Accotomate Journal Entry Integration open in Google Sheets, showing posted journal entries and the template upload panel.",
  },
  {
    id: "tax",
    title: "UK Taxes",
    summary:
      "VAT, Corporation Tax, Income Tax and PAYE handled by accountants who file on time, every time.",
    points: [
      "No missed deadlines",
      "Error-free submissions",
      "HMRC audits handled",
    ],
    href: "/taxes",
    image: "/images/services/tax.jpg",
    imageAlt:
      "Illustration of tax preparation: a person completing a tax return beside a calculator, calendar and correspondence.",
  },
  {
    id: "outsourcing",
    title: "Outsourced Accountants",
    summary:
      "Qualified accountants embedded in your team at 60–70% of in-house cost — one fixed monthly fee, no payroll, insurance or pensions.",
    points: [
      "One fixed monthly cost",
      "No payroll or pension overhead",
      "Scale the team up or down",
    ],
    href: "/contact",
    image: "/images/about/about1.jpg",
    imageAlt:
      "Illustration of accountants reviewing financial reports, receipts and charts together.",
  },
];
