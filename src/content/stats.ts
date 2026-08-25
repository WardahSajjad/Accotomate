export type Stat = {
  value: string;
  label: string;
};

/**
 * These figures previously lived hardcoded in two separate components
 * (Features and Bookkeeping), where they could drift apart. Change them here.
 */
export const stats: Stat[] = [
  { value: "60%", label: "less time spent on bookkeeping" },
  { value: "99.9%", label: "accuracy rate across processed entries" },
  { value: "50%", label: "faster financial reporting" },
  { value: "30%", label: "saved on manual bookkeeping overhead" },
];
