import Link from "next/link";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { team } from "@/lib/content";

export function TeamPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading title="Вашим делом займётся партнёр" />
          <Link
            href="/team"
            className="hidden shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Вся команда
          </Link>
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:hidden">
          {team.slice(0, 3).map((m) => (
            <div key={m.slug} className="w-[82vw] shrink-0 snap-start">
              <TeamCard member={m} />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="mt-10 hidden gap-px border border-border bg-border sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {team.slice(0, 3).map((m, i) => (
            <Reveal key={m.slug} delay={i * 70} className="contents">
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
