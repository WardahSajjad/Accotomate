"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger, in ms, for items revealed as a group. */
  delay?: number;
  className?: string;
};

/**
 * Scroll-triggered fade-up that is fail-safe by construction.
 *
 * Content renders VISIBLE. Only elements that start below the fold are
 * deferred, and only once we've confirmed IntersectionObserver exists. So if
 * JS never runs, never hydrates, or the observer never fires, everything is
 * still on screen — the animation is a progressive enhancement, not a gate.
 *
 * (An earlier version defaulted to opacity-0, which blanked whole sections
 * whenever the observer didn't fire.)
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Anything already on screen stays as it is — no flicker, no gate.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    setHidden(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHidden(false);
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);

    // Safety net: if the observer somehow never fires, show the content anyway.
    const failsafe = window.setTimeout(() => {
      setHidden(false);
      observer.disconnect();
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      style={delay && revealed ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        hidden && "opacity-0",
        revealed && "animate-fade-up",
        className,
      )}
    >
      {children}
    </div>
  );
}
