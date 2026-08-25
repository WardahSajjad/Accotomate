import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  className?: string;
};

/**
 * Accent-coloured scrolling band of uppercase monospace text — the reference
 * site's `.section_text-marquee`, which sits on its primary accent colour.
 *
 * The track is duplicated and translated -50%, so the loop is seamless. The
 * duplicate is aria-hidden so screen readers hear the list once.
 */
export default function Marquee({ items, className }: MarqueeProps) {
  const track = (
    <ul className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="label-lg flex items-center gap-10 px-5 text-ink">
          <span>{item}</span>
          <span aria-hidden="true" className="text-ink/40">
            /
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-line-onAccent bg-accent py-5",
        className,
      )}
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {track}
        <div aria-hidden="true" className="flex">
          {track}
        </div>
      </div>
    </div>
  );
}
