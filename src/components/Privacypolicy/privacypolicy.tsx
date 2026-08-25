import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/content/site";

type Block = {
  heading: string;
  body?: string;
  items?: string[];
};

const blocks: Block[] = [
  {
    heading: "Introduction",
    body: "At Accotomate, your privacy matters to us. This policy explains how we collect, use and safeguard your information when you visit our website, use our services, or get in touch. By using this site, you agree to the terms set out below.",
  },
  {
    heading: "1. Information we collect",
    items: [
      "Personal information — name, email address, phone number, business name and anything else you provide when contacting us or signing up.",
      "Technical information — IP address, browser type, operating system and similar details collected through cookies and analytics.",
      "Financial information — the limited details required for invoicing or payment processing if you engage our services.",
    ],
  },
  {
    heading: "2. How we use your information",
    items: [
      "Providing and improving our bookkeeping, automation and tax services.",
      "Responding to your enquiries and communicating about our work.",
      "Processing payments securely and managing your account.",
      "Sending updates or promotional material, only where you have consented.",
      "Analysing website usage to improve the experience.",
    ],
  },
  {
    heading: "3. Sharing your information",
    body: "We will never sell or rent your personal information. We may share data with trusted third-party providers for payment processing, email delivery or analytics; to comply with legal obligations; or to protect our rights, safety or property.",
  },
  {
    heading: "4. Data security",
    body: "We use encryption and secure servers to protect your data. No system is entirely foolproof, so we cannot guarantee absolute security, but we take the obligation seriously.",
  },
  {
    heading: "5. Cookies and tracking",
    body: "This website uses cookies to improve functionality and understand site traffic. You can manage cookie preferences through your browser settings.",
  },
  {
    heading: "6. Your rights",
    items: [
      "Access, update or delete your personal information.",
      "Opt out of marketing communications.",
      "Restrict or object to certain processing activities.",
    ],
  },
  {
    heading: "7. Third-party links",
    body: "Our website may link to third-party sites. We are not responsible for their privacy practices, and we recommend reviewing their policies directly.",
  },
  {
    heading: "8. Updates to this policy",
    body: "We may update this policy from time to time. Any changes will be posted on this page with a revised effective date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <section className="border-b border-line bg-surface py-20 md:py-24">
        <Container width="narrow">
          <p className="label text-accent">Legal</p>
          <h1 className="mt-5 text-h2 text-ink">Privacy Policy</h1>
          <p className="mt-5 text-lede text-ink-muted">
            How Accotomate collects, uses and protects your information.
          </p>
        </Container>
      </section>

      <Section tone="surface" space="default">
        <Container width="narrow">
          <div className="flex flex-col gap-12">
            {blocks.map((block) => (
              <div key={block.heading}>
                <h2 className="text-h3 text-ink">{block.heading}</h2>

                {block.body ? (
                  <p className="mt-4 text-body text-ink-muted">{block.body}</p>
                ) : null}

                {block.items ? (
                  <ul className="mt-4 flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-line pl-4 text-body text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="rounded-md border border-line bg-surface-subtle p-8">
              <h2 className="text-h3 text-ink">Contact us</h2>
              <p className="mt-4 text-body text-ink-muted">
                For questions about this policy, or to exercise any of the rights
                above, email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline underline-offset-4"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
