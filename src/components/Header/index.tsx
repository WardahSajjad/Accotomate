"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { primaryNav, servicesNav, site } from "@/content/site";
import { cn } from "@/lib/cn";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5 transition-transform duration-200", className)}
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A floating accent-coloured pill, mirroring the reference site's nav
 * (`.nav_wrapper` sits on --primary--yellow with a 0.5rem radius).
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      setServicesOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="on-accent sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div className="mx-auto w-full max-w-[1400px] rounded-lg bg-accent">
        <div className="flex items-center justify-between gap-6 px-4 py-3 md:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Accotomate home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white">
              <Image
                src="/images/logo/5.png"
                alt=""
                width={199}
                height={210}
                priority
                className="h-6 w-auto"
              />
            </span>
            <span className="text-[1.125rem] font-bold tracking-[-0.03em] text-ink">
              accotomate
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                className="label flex items-center gap-2 text-ink transition-opacity hover:opacity-70"
              >
                Services
                <ChevronDown className={servicesOpen ? "rotate-180" : undefined} />
              </button>

              {servicesOpen ? (
                <div className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-4">
                  <div className="animate-fade-up overflow-hidden rounded-lg bg-accent shadow-pop">
                    {servicesNav.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block border-b border-line-onAccent px-5 py-4 transition-colors last:border-b-0 hover:bg-ink/10"
                      >
                        <span className="label block text-ink">{item.title}</span>
                        <span className="mt-1.5 block font-mono text-[0.75rem] leading-snug text-ink/60">
                          {item.blurb}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {primaryNav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "label text-ink transition-opacity hover:opacity-70",
                  isActive(item.path) && "underline underline-offset-4",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex items-center rounded-pill bg-ink px-6 py-3 text-white transition-colors hover:bg-ink/85"
            >
              Book a demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-6 bg-current transition-all duration-300",
                  mobileOpen ? "top-[7px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] block h-[2px] w-6 bg-current transition-opacity duration-200",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-6 bg-current transition-all duration-300",
                  mobileOpen ? "top-[7px] -rotate-45" : "top-[14px]",
                )}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        <div id="mobile-nav" hidden={!mobileOpen} className="lg:hidden">
          <nav
            className="border-t border-line-onAccent px-4 py-5 md:px-6"
            aria-label="Mobile"
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink/50">
              Services
            </p>
            <div className="mb-5 mt-3 flex flex-col">
              {servicesNav.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="label border-b border-line-onAccent py-3 text-ink"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col">
              {primaryNav.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="label border-b border-line-onAccent py-3 text-ink"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-5 flex w-full items-center justify-center rounded-pill bg-ink px-6 py-4 text-white"
            >
              Book a demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
