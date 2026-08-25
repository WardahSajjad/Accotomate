import Link from "next/link";

import { cn } from "@/lib/cn";

type Variant =
  | "primary"
  | "ink"
  | "outline"
  | "outlineInverse"
  | "outlineInk";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  /** Reference site uses very wide primary CTAs (min-width 20rem). */
  wide?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  // Ink on accent is 6.7:1. White on accent is 2.5:1 and fails AA.
  primary: "bg-accent text-ink hover:bg-accent-hover",
  ink: "bg-ink text-white hover:bg-ink/90",
  outline: "border border-line-strong text-ink hover:bg-surface-stone",
  outlineInverse: "border border-line-inverse text-white hover:bg-white/10",
  outlineInk: "border border-line-onAccent text-ink hover:bg-ink/10",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.75rem]",
  md: "px-7 py-3.5 text-[0.8125rem]",
  lg: "px-9 py-5 text-[0.875rem]",
};

const base =
  "label inline-flex items-center justify-center gap-3 rounded-pill text-center transition-colors duration-200";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  wide = false,
  className,
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    wide && "w-full sm:w-auto sm:min-w-[16rem]",
    className,
  );
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
