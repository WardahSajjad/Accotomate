import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function TeamBand() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container width="wide">
        <Reveal className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/video/video.jpg"
            alt="The Accotomate team reviewing a client's books together."
            width={1540}
            height={800}
            className="h-[380px] w-full object-cover md:h-[520px]"
            sizes="100vw"
          />

          {/* Ink scrim keeps the copy readable over the photograph. */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

          <div className="absolute inset-0 flex items-end p-8 md:p-14">
            <div className="max-w-[46ch]">
              <span className="label inline-block rounded-pill border border-line-inverse px-4 py-2 text-white/85">
                Accountants + developers
              </span>

              <h2 className="mt-6 text-h2 text-white">
                A finance team that ships software.
              </h2>

              <p className="mt-5 font-normal leading-relaxed text-white/70">
                Qualified UK accountants who know your ledger, working alongside
                developers who can change how it behaves. Most engagements start
                with one painful workflow and grow from there.
              </p>

              <div className="mt-8">
                <Button href="/about" variant="outlineInverse" size="lg">
                  About Accotomate
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
