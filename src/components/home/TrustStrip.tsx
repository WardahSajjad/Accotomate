import Container from "@/components/ui/Container";
import { clients } from "@/content/clients";

export default function TrustStrip() {
  return (
    <div className="border-b border-line bg-surface-subtle py-10">
      <Container width="wide">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          <p className="label text-ink-soft">
            Trusted by finance teams at
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <li
                key={client}
                className="text-lg font-semibold tracking-[-0.02em] text-ink/70"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
