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
    title: "Automatic payment reminders",
    body: "Still chasing overdue invoices manually? Reminders can go out automatically based on how long an invoice has been unpaid.",
  },
  {
    title: "Invoice creation at scale",
    body: "Creating the same invoices from orders, bookings or sales data? We can turn that data into invoices automatically and send them straight into QuickBooks/Xero.",
  },
  {
    title: "Late-payment fees",
    body: "When an invoice remains unpaid past the agreed date, the correct late fee can be calculated and added automatically based on your rules.",
  },
  {
    title: "Bulk customer, invoice & bill updates",
    body: "Change hundreds of customer records, invoices or bills in one go — without your team opening and updating them one by one.",
  },
  {
    title: "Automatic bank-feed clearing",
    body: "Repeat transactions are handled automatically, so your team only steps in when something looks different or needs a judgement call.",
  },
  {
    title: "Recurring transaction updates",
    body: "If your business uses hundreds of recurring invoice or bill templates, we can update, delete or recreate them in bulk when changes are needed.",
  },
  {
    title: "Data movement between systems",
    body: "Sales in one platform, expenses in another and accounting in QuickBooks or Xero? We connect them so data flows automatically and your records stay reconciled across systems.",
  },
  {
    title: "Scheduled data exports/imports",
    body: "Want a specific report updated in Google Sheets or Excel at 9am, or invoices pushed into QuickBooks at 12pm? We schedule those imports and exports to run automatically.",
  },
  {
    title: "Got the clumsiest workflow?",
    body: "Show us the finance task you’ve given up trying to automate — the one no off-the-shelf tool can handle. We’ll build the automation for it.",
  },
];

const steps = [
  {
    number: "01",
    title: "Show us how you do it today",
    body: "Walk us through the task your team keeps repeating — what starts it, what they do, and where the time gets lost.",
  },
  {
    number: "02",
    title: "We find the rules",
    body: "We identify the parts that follow the same pattern every time and separate them from the parts that still need human judgement.",
  },
  {
    number: "03",
    title: "We build it",
    body: "We build the automation around the systems you already use, test it properly, and leave your team to step in only where they actually need to.",
  },
];

export default function Quickbooks() {
  return (
    <>
      <PageHero
        eyebrow="Financial Workflow Automation"
        title="Your finance team shouldn’t spend hours doing what a rule can do automatically."
        lede="We build custom automations for the repetitive finance work your software still leaves behind — so your team spends less time repeating the same tasks and more time on the work that actually needs them."
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
            title="Bring us the repetitive task."
            lede="The payment reminders you send every Monday. The late fees someone calculates one invoice at a time. The customer records your team updates manually. The same bank transactions they keep clearing. The data they keep copying between systems. Show us the process — we’ll see what can be automated."
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
