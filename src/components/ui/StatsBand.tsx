import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/content/stats";

type StatsBandProps = {
  eyebrow?: string;
  title?: string;
  lede?: string;
  tone?: "surface" | "subtle";
};

export default function StatsBand({
  eyebrow = "Results",
  title = "What changes once it's automated",
  lede = "Typical outcomes for clients who move their bookkeeping onto our automated workflows.",
  tone = "subtle",
}: StatsBandProps) {
  return (
    <Section tone={tone} space="loose">
      <Container width="wide">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lede={lede}
          align="center"
          className="mx-auto"
        />

        <dl className="mt-16 grid gap-px overflow-hidden rounded-md bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.value}
              delay={index * 70}
              className="flex h-full flex-col bg-surface p-8"
            >
              <dt className="order-2 mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                {stat.label}
              </dt>
              <dd className="order-1 text-stat text-ink">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
