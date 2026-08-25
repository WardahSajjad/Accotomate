import type { Metadata } from "next";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { servicesNav } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-28 md:py-40">
      <Container width="narrow">
        <p className="label text-accent">Error 404</p>

        <h1 className="mt-5 text-display text-ink">Page not found.</h1>

        <p className="mt-6 max-w-prose text-lede text-ink-muted">
          The page you were looking for has been moved, renamed, or never
          existed. Here&rsquo;s the way back.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <h2 className="label text-ink-soft">Services</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {servicesNav.map((item) => (
              <li key={item.path}>
                <Button href={item.path} variant="outline" size="md">
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
