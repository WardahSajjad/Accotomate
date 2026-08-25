import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoLightbox from "@/components/ui/VideoLightbox";

const highlights = [
  {
    title: "Journal entries, uploaded in bulk",
    body: "Templates map your ledger structure once. After that, a month of entries posts in a single upload instead of line by line.",
  },
  {
    title: "Your data, in a sheet you control",
    body: "Everything lands in Google Sheets, so your team keeps working in a tool they already know — no new software to learn.",
  },
  {
    title: "Two-way, and always current",
    body: "Changes flow back into QuickBooks on a schedule. Reports stop being snapshots and start being live.",
  },
];

export default function ProductShowcase() {
  return (
    <Section tone="subtle" space="loose" id="how-it-looks">
      <Container width="wide">
        <SectionHeading
          eyebrow="See it working"
          title="This is the actual integration, running on a client's books"
          lede="Not a mockup. Our Journal Entry Integration posting a month of entries straight into Google Sheets from QuickBooks."
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
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
