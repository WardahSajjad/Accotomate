import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  inverse = false,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "label mb-6 inline-block rounded-pill border px-4 py-2",
            inverse
              ? "border-line-inverse text-white/80"
              : "border-line-strong text-ink",
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <Heading
        className={cn(
          Heading === "h1" ? "text-display" : "text-h2",
          inverse && "text-white",
          align === "center" && "max-w-[18ch]",
        )}
      >
        {title}
      </Heading>

      {lede ? (
        <p
          className={cn(
            "mt-7 max-w-prose text-lede font-normal",
            inverse ? "text-white/70" : "text-ink-muted",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
