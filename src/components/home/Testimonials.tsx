import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <Section tone="surface" space="loose">
      <Container width="wide">
        <SectionHeading
          eyebrow="Clients"
          title="What founders say after the switch"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 80}
              className="flex h-full flex-col rounded-md border border-line bg-surface p-8 md:p-9"
            >
              <blockquote className="flex flex-1 flex-col">
                <p className="flex-1 text-[1.0625rem] leading-relaxed text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <footer className="mt-8 border-t border-line pt-6">
                  <span className="block font-semibold text-ink">
                    {testimonial.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-muted">
                    {testimonial.role}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
