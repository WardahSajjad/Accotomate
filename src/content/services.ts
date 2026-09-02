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
    title: "Bookkeeping that stays current",
    summary:
      "Your books stay clean and current as the month moves, so youre not waiting until month-end to understand where the business stands.",
    points: [
      "Transactions captured & categorised in real time",
      "Banks reconciled and books kept current",
      "Clean, tax-ready records year-round",
    ],
    href: "/bookkeeping",
    image: "/images/services/bookkeeping.png",
    imageAlt:
      "Illustration of a bookkeeping workflow: a clipboard of records, a calculator and a person reviewing figures on a phone.",
  },
  {
    id: "automation",
    title: "Numbers that come to you",
    summary:
      "We send automatic WhatsApp or email notifications when the numbers and thresholds that matter to your business need your attention.",
    points: [
      "Cash & spending threshold alerts",
      "30+ day overdue customer alerts",
      "Payroll exceeded the set limit",
    ],
    
    href: "/quickbooks",
    image: "/images/video/webimg.jpg",
    imageAlt:
      "The Accotomate Journal Entry Integration open in Google Sheets, showing posted journal entries and the template upload panel.",
  },
   {
    id: "outsourcing",
    title: "Custom Finance Automation",
    summary:
      "We build custom automations for repetitive finance tasks your accounting software still leaves your team doing manually.",
    points: [
      "Send payment reminders automatically",
      "Update hundreds of records at once",
      "Move data between systems automatically",
    ],
    href: "/contact",
    image: "/images/about/about1.jpg",
    imageAlt:
      "Illustration of accountants reviewing financial reports, receipts and charts together.",
  },
  {
    id: "tax",
    title: "UK Tax & Compliance",
    summary:
      "Your tax and compliance stay connected to the books we already maintain, keeping records organised and deadlines easier to manage throughout the year.",
    points: [
      "VAT returns & compliance",
      "Corporation Tax & year-end accounts",
      "PAYE & ongoing tax support",
    ],
    href: "/taxes",
    image: "/images/services/tax.jpg",
    imageAlt:
      "Illustration of tax preparation: a person completing a tax return beside a calculator, calendar and correspondence.",
  },
 
];
