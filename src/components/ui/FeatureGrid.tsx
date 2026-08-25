import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export type FeatureItem = {
  title: string;
  body: string;
};

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  items: FeatureItem[];
  columns?: 2 | 3;
  tone?: "surface" | "subtle";
};

export default function FeatureGrid({
  eyebrow,
  title,
  lede,
  items,
  columns = 3,
  tone = "surface",
}: FeatureGridProps) {
  return (
    <Section tone={tone} space="loose">
      <Container width="wide">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

        <div
          className={`mt-16 grid gap-px overflow-hidden rounded-md bg-line sm:grid-cols-2 ${
            columns === 3 ? "lg:grid-cols-3" : ""
          }`}
        >
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 60}
              className="flex h-full flex-col bg-surface p-8"
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
  );
}
