import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  /** "narrow" for prose-led sections, "wide" for grids and product visuals. */
  width?: "narrow" | "default" | "wide";
  className?: string;
};

const widths = {
  narrow: "max-w-[760px]",
  default: "max-w-[1180px]",
  wide: "max-w-[1320px]",
};

export default function Container({
  children,
  width = "default",
  className,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-8", widths[width], className)}>
      {children}
    </div>
  );
}
