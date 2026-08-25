import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "We map what's manual",
    body: "A short review of how finance actually runs today — which entries are typed by hand, where reports come from, what breaks at month-end.",
  },
  {
    number: "02",
    title: "We build and run in parallel",
    body: "We connect your workflows, migrate the history, and run the automation alongside your existing process until the numbers agree.",
  },
  {
    number: "03",
    title: "You get your week back",
    body: "The books close themselves. We handle exceptions, filings and reporting, and you get a finance function that keeps pace with the business.",
  },
];

export default function HowItWorks() {
  return (
    <Section tone="surface" space="loose">
      <Container width="wide">
        <SectionHeading
          eyebrow="How it works"
          title="Live in weeks, not quarters"
          lede="No rip-and-replace. We work inside the accounting software you already use, so nothing stops while we build."
        />

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.number} className="h-full">
              <Reveal
                delay={index * 90}
                className="flex h-full flex-col border-t-2 border-accent pt-6"
              >
                <span className="text-[0.8125rem] font-bold tabular-nums tracking-[0.08em] text-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 text-h3 text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
