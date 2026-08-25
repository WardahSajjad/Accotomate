import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import FeatureGrid, { type FeatureItem } from "@/components/ui/FeatureGrid";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsBand from "@/components/ui/StatsBand";
import { site } from "@/content/site";

const features: FeatureItem[] = [
  {
    title: "End-to-end automation",
    body: "Transaction recording, bank reconciliations and financial reporting run without manual entry — hours back every week.",
  },
  {
    title: "Real-time financial insight",
    body: "Cloud-based systems keep your numbers current, so decisions are made on this week's data rather than last month's.",
  },
  {
    title: "Bills and invoice categorisation",
    body: "Bills and invoices are tracked and categorised automatically, keeping the ledger accurate and transparent.",
  },
  {
    title: "Invoice and payment management",
    body: "Creation, tracking and payment of invoices is automated to protect cash flow and keep payments on time.",
  },
  {
    title: "Payroll integration",
    body: "Payroll connects straight into your bookkeeping platform for automated salary calculations, deductions and reporting.",
  },
  {
    title: "Tax-ready records",
    body: "Records stay organised and compliant all year, so submissions and audits stop being a scramble.",
  },
  {
    title: "Custom workflows",
    body: "Automation is shaped around how your business actually works, not a template you have to bend to fit.",
  },
  {
    title: "Error detection",
    body: "Checks catch and correct anomalies as they happen, rather than surfacing them at year end.",
  },
];

const qualifies = [
  {
    title: "Small to medium-sized businesses",
    body: "Teams that have outgrown spreadsheets and want their finance workflow to keep pace.",
  },
  {
    title: "Cloud accounting users",
    body: "Already on QuickBooks, Xero, FreshBooks or Sage — we build on what you have rather than replacing it.",
  },
  {
    title: "Companies wanting automation",
    body: "Where data entry, invoicing and reporting still eat hours that should go somewhere better.",
  },
  {
    title: "Firms focused on scaling",
    body: "Founders who would rather hand bookkeeping over entirely and spend the time on growth.",
  },
];

export default function Bookkeeping() {
  return (
    <>
      <PageHero
        eyebrow="Tech-Driven Bookkeeping"
        title="Books that close themselves"
        lede="We replace manual bookkeeping with intelligent, automated workflows — built for accuracy and speed, and integrated with the accounting software you already run."
        primaryCta={{ label: "Get started", href: site.bookingUrlServices }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
        // image={{
        //   src: "/images/services/bookkeeping.png",
        //   alt: "Illustration of a bookkeeping workflow: a clipboard of records, a calculator and a person reviewing figures on a phone.",
        // }}
      />

      <FeatureGrid
        eyebrow="What's included"
        title="Every part of the bookkeeping cycle, automated"
        lede="Start with the piece that hurts most, or hand over the whole cycle."
        items={features}
      />

      <Section tone="subtle" space="loose">
        <Container width="wide">
          <SectionHeading
            eyebrow="Who it's for"
            title="Is this a fit for your business?"
            lede="Our bookkeeping service suits teams that want automation and clean integration with cloud accounting — not a bigger back office."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {qualifies.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="flex h-full flex-col rounded-md border border-line bg-surface p-8"
              >
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <StatsBand
        eyebrow="Quantifiable results"
        title="What clients see after switching"
        tone="surface"
      />

      <CtaBand
        title="Hand over the bookkeeping."
        lede="Book a 30-minute call and we'll show you exactly which parts of your cycle we'd automate first."
        bookingUrl={site.bookingUrlServices}
      />
    </>
  );
}
