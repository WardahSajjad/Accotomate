import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { servicesNav, site } from "@/content/site";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  );
}

const columns = [
  {
    heading: "Services",
    links: servicesNav.map((item) => ({
      label: item.title,
      href: item.path,
      external: false,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about", external: false },
      { label: "Contact", href: "/contact", external: false },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Support ticket", href: "/contact", external: false },
      { label: "Book a demo", href: site.bookingUrl, external: true },
    ],
  },
  {
    heading: "Legal",
    links: [{ label: "Privacy Policy", href: "/privacypolicy", external: false }],
  },
];

/**
 * Full-bleed accent footer — the reference site puts its entire footer on the
 * primary accent colour. Ink on accent keeps contrast at 6.7:1.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-accent bg-accent pt-20 md:pt-28">
      <Container width="wide">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div className="max-w-[380px]">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Accotomate home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white">
                <Image
                  src="/images/logo/5.png"
                  alt=""
                  width={199}
                  height={210}
                  className="h-7 w-auto"
                />
              </span>
              <span className="text-[1.25rem] font-bold tracking-[-0.03em] text-ink">
                accotomate
              </span>
            </Link>

            <p className="mt-7 max-w-[34ch] text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
              Bookkeeping that runs itself.
            </p>

            <div className="mt-8 flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="label text-ink transition-opacity hover:opacity-65"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="label text-ink transition-opacity hover:opacity-65"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accotomate on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-pill border border-line-onAccent text-ink transition-colors hover:bg-ink hover:text-accent"
              >
                <LinkedInIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Accotomate on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-pill border border-line-onAccent text-ink transition-colors hover:bg-ink hover:text-accent"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="label text-ink/55">{column.heading}</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-65"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-65"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line-onAccent py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink/60">
            &copy; {year} Accotomate
          </p>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink/60">
            Registered in the United Kingdom
          </p>
        </div>
      </Container>
    </footer>
  );
}
