import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import FeatureGrid, { type FeatureItem } from "@/components/ui/FeatureGrid";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoLightbox from "@/components/ui/VideoLightbox";
import { site } from "@/content/site";

const capabilities: FeatureItem[] = [
  {
    title: "Financial data consolidation",
    body: "Transactions, balances and ledgers pulled into one structured sheet instead of a folder of exports.",
  },
  {
    title: "Ledger reconciliations",
    body: "Ledgers reconcile against source data automatically, with exceptions surfaced rather than buried.",
  },
  {
    title: "Scheduled bank reconciliations",
    body: "Reconciliation runs on a schedule you set, so the position is current when you look at it.",
  },
  {
    title: "Budgeting and forecasting",
    body: "Budget and forecast models update themselves as actuals land, keeping projections honest.",
  },
  {
    title: "Ad-hoc management reports",
    body: "Custom report templates that rebuild on new data — no reformatting, no stale figures.",
  },
  {
    title: "AP/AR tracking",
    body: "Payables and receivables ageing stays live, so nothing slips past its due date unnoticed.",
  },
  {
    title: "Real-time insight",
    body: "Cash flow, profitability and outstanding liabilities visible the moment the data changes.",
  },
  {
    title: "Ongoing optimisation",
    body: "We keep tuning the workflows as your reporting needs change. It isn't a build-and-leave.",
  },
];

const steps = [
  {
    number: "01",
    title: "Map your ledger",
    body: "We build a template that matches your chart of accounts and entry structure — once.",
  },
  {
    number: "02",
    title: "Upload in bulk",
    body: "A month of journal entries posts from that template in a single action, not line by line.",
  },
  {
    number: "03",
    title: "Stays in sync",
    body: "Scheduled refreshes keep QuickBooks and Sheets aligned, with exceptions flagged for review.",
  },
];

export default function Quickbooks() {
  return (
    <>
      <PageHero
        eyebrow="Financial Workflow Automation"
        title="QuickBooks and Sheets, always in sync"
        lede="No manual exports, no outdated reports. Transactions, balances, AP/AR ageing and reconciliations flow into structured spreadsheets automatically — and stay current."
        primaryCta={{ label: "Get started", href: site.bookingUrlServices }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
        // media={
        //   <div>
        //     <VideoLightbox
        //       videoId="L61p2uyiMSo"
        //       poster="/images/video/webimg.jpg"
        //       posterAlt="The Accotomate Journal Entry Integration open in Google Sheets, showing posted journal entries and the template upload panel."
        //       label="Watch the integration demo"
        //     />
        //     <p className="label mt-4 text-ink-soft">
        //       Live client account — press play
        //     </p>
        //   </div>
        // }
      />

      <Section tone="subtle" space="loose">
        <Container width="wide">
          <SectionHeading
            eyebrow="How the integration works"
            title="Three steps, then it runs itself"
            lede="We work inside the QuickBooks account and Google Workspace you already have. Nothing to migrate."
          />

          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <li key={step.number} className="h-full">
                <Reveal
                  delay={index * 90}
                  className="flex h-full flex-col border-t-2 border-accent pt-6"
                >
                  <span className="label text-accent">{step.number}</span>
                  <h3 className="mt-4 text-h3 text-ink">{step.title}</h3>
                  <p className="mt-3 font-normal leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Capabilities"
        title="What we automate"
        lede="Custom report templates update as new data flows in, giving you accurate forecasting and analysis without the manual rebuild."
        items={capabilities}
      />

      <CtaBand
        title="Stop exporting spreadsheets by hand."
        lede="Book a 30-minute call and we'll map your QuickBooks reporting workflow and show you what we'd sync first."
        bookingUrl={site.bookingUrlServices}
      />
    </>
  );
}
