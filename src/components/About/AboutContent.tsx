import Image from "next/image";

import Container from "@/components/ui/Container";
import CtaBand from "@/components/ui/CtaBand";
import FeatureGrid, { type FeatureItem } from "@/components/ui/FeatureGrid";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const principles: FeatureItem[] = [
  {
    title: "Efficiency through technology",
    body: "Automation, real-time reporting and AI-assisted checks, applied to the work that genuinely benefits from them.",
  },
  {
    title: "Seamless workflow integration",
    body: "We connect the tools you already run — QuickBooks, Xero, Sage, Google Sheets — rather than asking you to move.",
  },
  {
    title: "Client-centric service",
    body: "Solutions shaped around how your business works, priced so they make sense for a small finance team.",
  },
  {
    title: "Reliable tax compliance",
    body: "Accurate, timely UK submissions, with planning that looks further ahead than the next deadline.",
  },
];

const whyUs: FeatureItem[] = [
  {
    title: "Custom workflow automation",
    body: "Built around your processes and scaled as you grow, not forced into a fixed template.",
  },
  {
    title: "Deep QuickBooks integration",
    body: "Real-time synchronisation with the ledger, so the numbers you report are the numbers you have.",
  },
  {
    title: "Accuracy by design",
    body: "Automated checks catch anomalies as they occur rather than at year end, when they cost most to fix.",
  },
  {
    title: "Real-time financial insight",
    body: "Current data and automated reports, so decisions are made on this week's position.",
  },
  {
    title: "Cost and time efficiency",
    body: "Less manual work, lower overhead, and hours returned to the people running the business.",
  },
  {
    title: "Built to scale",
    body: "The same workflow that handles this year's volume handles next year's without a rebuild.",
  },
];

export default function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="About Accotomate"
        title="Accountants who write code"
        lede="We started Accotomate on a simple observation: the work that consumes a finance team's week is rarely the work that needs their judgement. So we automate the rest."
        primaryCta={{ label: "Work with us", href: "/contact" }}
        image={{
          src: "/images/about/about1.jpg",
          alt: "Illustration of accounting work: financial reports, a calculator, receipts and colleagues reviewing figures.",
        }}
      />

      <Section tone="surface" space="loose">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
            <SectionHeading eyebrow="Our story" title="Why we built this" />

            <Reveal className="flex flex-col gap-6 text-body text-ink-muted">
              <p>
                We&rsquo;re a team of accountants and developers with one clear aim:
                to automate the tedious, time-consuming and non-revenue-generating
                parts of bookkeeping. The idea came from watching traditional
                bookkeeping methods hold businesses back rather than support them.
              </p>
              <p>
                We work with small and medium-sized companies and firms running
                QuickBooks, Xero, FreshBooks and Sage. Our job is to deliver
                automation that streamlines financial workflows, removes manual
                inefficiency and cuts the error rate.
              </p>
              <p>
                From automated invoice processing to payroll integration and
                tax-ready records, we optimise every part of the financial
                workflow — so automation does the heavy lifting and you get on
                with growing the business.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink" space="loose">
        <Container width="wide">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="overflow-hidden rounded-md">
                <Image
                  src="/images/video/video.jpg"
                  alt="A team gathered around a laptop reviewing work together."
                  width={770}
                  height={400}
                  className="h-auto w-full"
                  sizes="(min-width: 992px) 45vw, 100vw"
                />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <SectionHeading
                eyebrow="How we work"
                title="Embedded, not outsourced"
                lede="You get qualified accountants who know your ledger and developers who can change how it behaves. Most engagements start with one painful workflow and grow from there."
                inverse
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Our agenda"
        title="What we hold ourselves to"
        lede="Accotomate was founded to change how financial management works for growing businesses — combining technology with professional expertise."
        items={principles}
        columns={2}
      />

      <FeatureGrid
        eyebrow="Why choose us"
        title="What you get working with us"
        items={whyUs}
        tone="subtle"
      />

      <CtaBand />
    </>
  );
}
