import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

function Tick() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="mt-[0.35rem] h-3.5 w-3.5 shrink-0 text-accent"
    >
      <path
        d="M2.5 8.5 6 12l7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceGrid() {
  return (
    <Section id="services" tone="surface" space="loose">
      <Container width="wide">
        <SectionHeading
          eyebrow="What we do"
          title="Four ways we take the slow out of finance."
          lede="Start with one, or hand over the lot. Every engagement is built on the accounting software you already use."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-200 hover:border-ink/30"
              >
                <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface-stone">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={640}
                    height={400}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8 md:p-9">
                  <h3 className="text-h3 text-ink">{service.title}</h3>

                  <p className="mt-4 font-normal leading-relaxed text-ink-muted">
                    {service.summary}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 font-mono text-[0.8125rem] leading-snug text-ink-muted"
                      >
                        <Tick />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="label mt-8 inline-flex items-center gap-3 text-ink">
                    Learn more
                    <svg
                      viewBox="0 0 20 12"
                      aria-hidden="true"
                      className="h-3 w-5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                    >
                      <path
                        d="M0 6h17m0 0-5-5m5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
