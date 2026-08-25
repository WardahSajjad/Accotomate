import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const pains = [
  {
    title: "Hours lost to re-keying",
    body: "Bills, invoices and journal entries typed in by hand — the same numbers, twice, into two systems.",
  },
  {
    title: "Reports out of date on arrival",
    body: "By the time the export is formatted and the figures are checked, the month has already moved on.",
  },
  {
    title: "Mistakes found at year end",
    body: "A miscoded transaction in March surfaces in the year-end review, when fixing it costs the most.",
  },
];

export default function Problem() {
  return (
    <Section tone="ink" space="loose">
      <Container width="wide">
        <Reveal>
          <h2 className="max-w-[18ch] text-h2 text-white">
            Manual data entry.
            <br />
            Month-end scramble.
            <br />
            <span className="text-accent">Errors you find in April.</span>
          </h2>

          <p className="mt-8 max-w-prose text-lede text-white/70">
            Most finance teams aren&rsquo;t short on expertise. They&rsquo;re short on
            hours. The work that eats the week is precisely the work a machine
            should be doing.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md bg-line-inverse md:grid-cols-3">
          {pains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 80} className="h-full">
              <div className="h-full bg-ink p-8">
                <h3 className="text-h3 text-white">{pain.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/60">
                  {pain.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
