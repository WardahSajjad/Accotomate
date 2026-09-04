export type Stat = {
  value: string;
  label: string;
};

/**
 * These figures previously lived hardcoded in two separate components
 * (Features and Bookkeeping), where they could drift apart. Change them here.
 */
export const stats: Stat[] = [
  { value: "Today", label: "You know where the business stands. Books stay current throughout the month instead of becoming something you catch up on later." },
  { value: "When it Happens", label: "You know when a number needs attention. Cash drops, spending crosses a limit or invoices age too far — you get notified by WhatsApp or email." },
  { value: "Without the Manual Work", label: "The repetitive stuff gets done automatically. Late fees, bulk updates, repeat transactions and other rule-based finance work happen without someone doing them one by one." },
  { value: "Before the Deadline", label: "Your records are already in order. Clean books throughout the year mean less chasing when VAT, tax and year-end deadlines arrive." },
];
