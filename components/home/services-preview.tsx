import Link from "next/link";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/content";

export function ServicesPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading title="Направления нашей работы" />
          <Link
            href="/services"
            className="hidden shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Все услуги
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60} className="contents">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/services" className="text-sm text-[var(--gold)]">
            Все услуги
          </Link>
        </div>
      </Container>
    </section>
  );
}
