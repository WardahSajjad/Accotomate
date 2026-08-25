import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { site } from "@/content/site";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section tone="surface" space="loose" id="contact">
      <Container width="wide">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="label text-accent">Contact</p>
            <h1 className="mt-5 text-h2 text-ink">Tell us what&rsquo;s slowing you down</h1>
            <p className="mt-5 text-lede text-ink-muted">
              Whether it&rsquo;s a support question or a first conversation about
              automating your books, this reaches the team directly.
            </p>

            <dl className="mt-10 flex flex-col gap-6 border-t border-line pt-8">
              <div>
                <dt className="label text-ink-soft">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-body font-medium text-ink underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="label text-ink-soft">Phone</dt>
                <dd className="mt-2">
                  <a
                    href={site.phoneHref}
                    className="text-body font-medium text-ink underline underline-offset-4"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="label text-ink-soft">Prefer to talk?</dt>
                <dd className="mt-2">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body font-medium text-ink underline underline-offset-4"
                  >
                    Book a 30-minute demo
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-md border border-line bg-surface-subtle p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
