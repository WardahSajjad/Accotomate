import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Illustration — constrained and set on a tinted panel. */
  image?: { src: string; alt: string };
  /** Arbitrary right-column media (screenshot, video). Takes precedence. */
  media?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lede,
  primaryCta,
  secondaryCta,
  image,
  media,
}: PageHeroProps) {
  const hasMedia = Boolean(media || image);

  return (
    <section className="border-b border-line bg-surface py-16 md:py-20 lg:py-24">
      <Container width="wide">
        <div
          className={
            hasMedia
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16"
              : "max-w-[820px]"
          }
        >
          <div className="animate-fade-up">
            <span className="label inline-block rounded-pill border border-line-strong px-4 py-2 text-ink">
              {eyebrow}
            </span>

            <h1 className="mt-7 text-display text-ink">{title}</h1>

            <p className="mt-6 max-w-prose text-lede font-normal text-ink-muted">
              {lede}
            </p>

            {primaryCta || secondaryCta ? (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta ? (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="outline" size="lg">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          {media ? (
            <div className="animate-fade-up animate-delay-2">{media}</div>
          ) : image ? (
            <div className="animate-fade-up animate-delay-2">
              {/* The Storyset illustrations are green, outside the navy/orange
                  palette. A tinted panel makes that read as deliberate. */}
              <div className="flex items-center justify-center rounded-xl border border-line bg-surface-stone p-8 md:p-10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={520}
                  height={520}
                  priority
                  className="h-auto w-full max-w-[420px]"
                  sizes="(min-width: 992px) 40vw, 80vw"
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
