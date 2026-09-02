import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const pains = [
  {
    title: "You crossed the budget days ago",
    body: "Marketing reached 27% of revenue before anyone noticed it had crossed your 20% limit.",
  },
  {
    title: "£30K has been sitting unpaid",
    body: "£30K in customer invoices has now been outstanding for 30+ days. You needed to know sooner.",
  },
  {
    title: "Cash dropped below your limit",
    body: "You wanted to keep £50K in the bank. Your balance crossed that limit days ago.",
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
            Your books can be perfectly accurate and still be too late to help you make the decision.
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
