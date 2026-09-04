import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoLightbox from "@/components/ui/VideoLightbox";

const highlights = [
  {
    title: "Marketing expense crosses 20% of revenue limit?",
    body: "You get notified.",
  },
  {
    title: "Cash drops below £50K?",
    body: "You get notified.",
  },
  {
    title: "£30K becomes 30+ days overdue?",
    body: "You get notified.",
  },
];

export default function ProductShowcase() {
  return (
    <Section tone="subtle" space="loose" id="how-it-looks">
      <Container width="wide">
        <SectionHeading
          eyebrow="See it working"
          title="What if your books told you when it happened?"
          lede="We set the numbers that matter to you and automatically let you know when something needs your attention."
        />

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
          {/* <Reveal>
            <VideoLightbox
              videoId="L61p2uyiMSo"
              poster="/images/video/webimg.jpg"
              posterAlt="The Accotomate Journal Entry Integration open in Google Sheets, showing a month of posted journal entries alongside the template upload panel."
              label="Watch the integration demo"
            />
            <p className="mt-4 text-sm text-ink-soft">
              Journal Entry Integration — bulk upload from template, posted to
              QuickBooks.
            </p>
          </Reveal> */}

          <div className="flex flex-col gap-8">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
