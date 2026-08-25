import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/content/site";

type CtaBandProps = {
  title?: string;
  lede?: string;
  /** Service pages book against a different calendar to the header/hero. */
  bookingUrl?: string;
};

/**
 * Dark band. The footer below it is full accent, so this stays ink —
 * otherwise the two merge into a single slab of orange.
 */
export default function CtaBand({
  title = "See it running on your own books.",
  lede = "A 30-minute call. We'll look at how your finance workflow runs today and show you exactly what we'd automate first.",
  bookingUrl = site.bookingUrl,
}: CtaBandProps) {
  return (
    <section className="on-ink bg-ink py-24 md:py-32">
      <Container width="wide">
        <Reveal className="flex flex-col items-start gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[14ch] text-h2 text-white">{title}</h2>
            <p className="mt-7 max-w-prose text-lede font-normal text-white/65">
              {lede}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={bookingUrl} size="lg" wide>
              Book a demo
            </Button>
            <Button href="/contact" variant="outlineInverse" size="lg">
              Send a message
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
