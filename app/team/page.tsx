import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { TeamCard } from "@/components/team-card";
import { CtaSection } from "@/components/cta-section";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Команда",
  description: "Юристы и адвокаты компании «Аурум» с многолетним опытом.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader

        title="Эксперты, которым доверяют сложные дела"
        description="Партнёры и юристы с многолетней практикой. За каждым делом — личная ответственность."
        crumbs={[{ label: "Главная", href: "/" }, { label: "Команда" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          {/* Mobile: horizontal snap scroll */}
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:hidden">
            {team.map((m) => (
              <div key={m.slug} className="w-[82vw] shrink-0 snap-start">
                <TeamCard member={m} />
              </div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden gap-px border border-border bg-border sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 80} className="contents">
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
