"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type VideoLightboxProps = {
  videoId: string;
  poster: string;
  posterAlt: string;
  /** Rendered under the play button as the accessible label. */
  label?: string;
  className?: string;
};

/**
 * Poster image that opens a YouTube embed in a modal.
 *
 * The iframe is only mounted once the user opts in, so nothing is requested
 * from YouTube on page load. Uses youtube-nocookie, which is the only origin
 * allowed by frame-src in next.config.js.
 */
export default function VideoLightbox({
  videoId,
  poster,
  posterAlt,
  label = "Play the demo",
  className,
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full overflow-hidden rounded-md border border-line bg-surface shadow-pop",
          className,
        )}
      >
        <Image
          src={poster}
          alt={posterAlt}
          width={1600}
          height={711}
          className="h-auto w-full"
          sizes="(min-width: 992px) 60vw, 100vw"
        />

        <span className="absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors duration-200 group-hover:bg-ink/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink shadow-pop transition-transform duration-200 group-hover:scale-105">
            <svg viewBox="0 0 16 18" aria-hidden="true" className="ml-1 h-5 w-5 fill-current">
              <path d="M15.5 8.134a1 1 0 0 1 0 1.732l-13.5 7.794A1 1 0 0 1 .5 16.794V1.206A1 1 0 0 1 2 .34l13.5 7.794Z" />
            </svg>
          </span>
        </span>

        <span className="sr-only">{label}</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 md:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[1000px]"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute -top-11 right-0 flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              Close
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              </svg>
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
