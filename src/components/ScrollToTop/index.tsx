"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-white shadow-pop transition-all duration-200 hover:bg-accent hover:text-ink",
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
        <path d="M10 16V4m0 0L4.5 9.5M10 4l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
