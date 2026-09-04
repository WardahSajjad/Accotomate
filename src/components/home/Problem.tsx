import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const pains = [
  {
    title: "Marketing crossed your 20% limit",
    body: "You planned to stop at 20%. You’re already at 27% and still spending. Every day you find out late is more budget already gone.",
  },
  {
    title: "£30K has been sitting unpaid",
    body: "£30K in customer invoices has now been outstanding for 30+ days. You needed to know sooner.",
  },
  {
    title: "Your margin dropped below 35%",
    body: "Sales still look strong, but you’re making less money on every one. The sooner you know, the sooner you can find out what’s eating into your profit.",
  },
];

export default function Problem() {
  return (
    <Section tone="ink" space="loose">
      <Container width="wide">
        <Reveal>
          <h2 className="max-w-[18ch] text-h2 text-white">
            The number was there.
            <br />
            <span className="text-accent">You just found out too late.</span>
          </h2>

          <p className="mt-3 max-w-prose text-lede text-white/70">
            Your books can be completely accurate and still leave you behind.
            When margins start falling, spending runs over budget or revenue
            slips off target, finding out at month&apos;s end means you&apos;ve lost the
            most valuable thing your numbers could have given you — time to act.
          </p>
        </Reveal>

        <div className="mt-5 grid gap-px overflow-hidden rounded-md bg-line-inverse md:grid-cols-3">
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
