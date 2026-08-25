import { cn } from "@/lib/cn";

type Row = {
  date: string;
  description: string;
  amount: string;
  status: "matched" | "posted" | "review";
};

const rows: Row[] = [
  { date: "31 Mar", description: "Stripe payout", amount: "£12,480.00", status: "matched" },
  { date: "31 Mar", description: "AWS — invoice 4471", amount: "£1,204.16", status: "matched" },
  { date: "30 Mar", description: "Payroll — March", amount: "£38,900.00", status: "posted" },
  { date: "30 Mar", description: "Office rent", amount: "£2,750.00", status: "matched" },
  { date: "29 Mar", description: "Supplier — Fazal & Co", amount: "£860.40", status: "review" },
];

const statusStyles: Record<Row["status"], string> = {
  matched: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  posted: "bg-surface-sunken text-ink-muted ring-line-strong",
  review: "bg-accent-soft text-accent-hover ring-accent/30",
};

const statusLabel: Record<Row["status"], string> = {
  matched: "Auto-matched",
  posted: "Posted",
  review: "Review",
};

/**
 * A representative product view, built in markup rather than shipped as a
 * screenshot — it stays sharp at any density and needs no image budget.
 * Decorative: the surrounding section carries the meaning in real text.
 */
export default function SyncMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full select-none overflow-hidden rounded-md border border-line bg-surface shadow-pop",
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-4 border-b border-line bg-surface-subtle px-5 py-3.5">
        <div className="flex items-center gap-2.5 text-[0.8125rem] font-semibold text-ink">
          <span>QuickBooks</span>
          <svg viewBox="0 0 24 12" className="h-3 w-6 text-accent" fill="none">
            <path
              d="M0 6h20m0 0-5-4.5M20 6l-5 4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Google Sheets</span>
        </div>
        <span className="flex items-center gap-1.5 text-[0.75rem] font-medium text-ink-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Synced
        </span>
      </div>

      {/* Ledger */}
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
            <th scope="col" className="px-5 py-2.5 font-semibold">Date</th>
            <th scope="col" className="px-2 py-2.5 font-semibold">Description</th>
            <th scope="col" className="px-2 py-2.5 text-right font-semibold">Amount</th>
            <th scope="col" className="px-5 py-2.5 text-right font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.description} className="border-t border-line">
              <td className="whitespace-nowrap px-5 py-3 text-[0.8125rem] tabular-nums text-ink-muted">
                {row.date}
              </td>
              <td className="px-2 py-3 text-[0.8125rem] font-medium text-ink">
                {row.description}
              </td>
              <td className="whitespace-nowrap px-2 py-3 text-right text-[0.8125rem] tabular-nums text-ink">
                {row.amount}
              </td>
              <td className="px-5 py-3 text-right">
                <span
                  className={cn(
                    "inline-flex rounded-sm px-2 py-0.5 text-[0.6875rem] font-semibold ring-1 ring-inset",
                    statusStyles[row.status],
                  )}
                >
                  {statusLabel[row.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface-subtle px-5 py-3.5 text-[0.75rem] text-ink-muted">
        <span>
          <strong className="font-semibold tabular-nums text-ink">128</strong> transactions
          matched automatically
        </span>
        <span>
          <strong className="font-semibold tabular-nums text-ink">1</strong> needs review
        </span>
      </div>
    </div>
  );
}
