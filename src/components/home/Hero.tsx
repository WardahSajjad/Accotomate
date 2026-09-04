import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="bg-surface pt-16 md:pt-24 lg:pt-28">
      <Container width="wide">
        <div className="animate-fade-up">
          <span className="label inline-block rounded-pill border border-line-strong px-4 py-2 text-ink">
            Bookkeeping · Automation · UK Tax
          </span>

          <h1 className="mt-8 max-w-[14ch] text-display text-ink">
            Bookkeeping, but fast.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <p className="max-w-prose text-lede font-normal text-ink-muted">
              Know the numbers that matter before they become problems. We
              combine expert bookkeeping with automated financial alerts, so you
              know when cash drops, spending crosses a limit, invoices stay
              unpaid, or bills are coming due — without waiting for month-end,
              chasing your team, or opening your laptop.
            </p>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={site.bookingUrl} size="lg" wide>
                Book a demo
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* The real product screenshot, full width and cropped into a band. */}
      <div className="mt-16 md:mt-20"></div>
    </section>
  );
}
