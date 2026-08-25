import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  /** Background band. Sections alternate to give the page rhythm. */
  tone?: "surface" | "subtle" | "ink" | "accent";
  /** Vertical rhythm. "tight" for strips, "loose" for the big set pieces. */
  space?: "tight" | "default" | "loose";
  id?: string;
  className?: string;
};

const tones = {
  surface: "bg-surface",
  subtle: "bg-surface-subtle",
  // `on-ink` flips the focus-ring offset so it stays visible on dark bands.
  ink: "bg-ink text-white/70 on-ink",
  accent: "bg-accent text-ink",
};

const spaces = {
  tight: "py-14 md:py-16",
  default: "py-20 md:py-28",
  loose: "py-24 md:py-36",
};

export default function Section({
  children,
  tone = "surface",
  space = "default",
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative", tones[tone], spaces[space], className)}
    >
      {children}
    </section>
  );
}
