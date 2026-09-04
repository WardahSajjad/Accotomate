import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoLightbox from "@/components/ui/VideoLightbox";

const highlights = [
  {
    title: "A £20K bill is due next week?",
    body: "You know before it hits your cash.",
  },
  {
    title: "Payroll just crossed 35% of revenue?",
    body: "You know as soon as it crosses your limit.",
  },
  {
    title: "This month’s revenue is falling behind target?",
    body: "You know while there’s still time to catch up.",
  },
];

export default function ProductShowcase() {
  return (
    <Section tone="subtle" space="loose" id="how-it-looks">
      <Container width="wide">
        <SectionHeading
          eyebrow="Stay Ahead"
          title="What if your books told you when it happened?"
          lede="We automate the day-to-day recording of income and expenses, keeping your numbers current as the business moves. Your alerts are built around the numbers, percentages and limits that matter most to you, bringing anything that needs your attention straight to your WhatsApp or email."
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
                <p className="text-h4 mt-1.5 text-[1.2375rem] leading-relaxed text-ink-muted">
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
