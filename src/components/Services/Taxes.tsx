import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import FeatureGrid, { type FeatureItem } from "@/components/ui/FeatureGrid";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const taxes: FeatureItem[] = [
  {
    title: "VAT",
    body: "Registration, scheme selection and quarterly returns filed under Making Tax Digital, with the records to back them up.",
  },
  {
    title: "Corporation Tax",
    body: "CT600 preparation and filing, with computations reconciled to your statutory accounts.",
  },
  {
    title: "Income Tax",
    body: "Self Assessment for directors and sole traders, prepared from books that are already clean.",
  },
  {
    title: "PAYE and payroll",
    body: "RTI submissions, payslips and year-end reporting, integrated with your bookkeeping rather than bolted on.",
  },
];

const promises = [
  "No missed deadlines",
  "Error-free submissions",
  "Simplified tax rules",
  "Tailored tax savings",
  "Hassle-free HMRC audits",
  "Support when you need it",
];

function Tick() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent">
      <path
        d="M2.5 8.5 6 12l7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Taxes() {
  return (
    <>
      <PageHero
        eyebrow="UK Taxes"
        title="Filed accurately, filed on time"
        lede="VAT, Corporation Tax, Income Tax and PAYE handled by qualified UK accountants. We take on the compliance calendar so you can stop watching it."
        primaryCta={{ label: "Get started", href: site.bookingUrlServices }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
        image={{
          src: "/images/services/tax.jpg",
          alt: "Illustration of tax preparation: a person completing a tax return beside a calculator, calendar and correspondence.",
        }}
      />

      <FeatureGrid
        eyebrow="What we handle"
        title="The full UK compliance calendar"
        lede="Because we already keep the books, the filings are built from records that are current and reconciled."
        items={taxes}
        columns={2}
      />

      <Section tone="subtle" space="loose">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <SectionHeading
              eyebrow="What you get"
              title="Compliance that stops being your problem"
              lede="Tax work goes wrong when the underlying records are messy. We fix the records first, then the filings take care of themselves."
            />

            <Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {promises.map((promise) => (
                  <li
                    key={promise}
                    className="flex gap-3 text-[0.9375rem] font-medium text-ink"
                  >
                    <Tick />
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Get the filings off your desk."
        lede="Book a 30-minute call and we'll review your current compliance position and deadlines."
        bookingUrl={site.bookingUrlServices}
      />
    </>
  );
}
