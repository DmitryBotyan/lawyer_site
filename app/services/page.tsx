import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Практики и услуги",
  description:
    "Юридические услуги «Аурум»: корпоративное право, арбитраж, банкротство, налоги, недвижимость и уголовно-правовая защита бизнеса.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader

        title="Юридические услуги для бизнеса и собственников"
        description="Полный спектр правовой поддержки — от точечной консультации до комплексного сопровождения."
        crumbs={[{ label: "Главная", href: "/" }, { label: "Практики" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
