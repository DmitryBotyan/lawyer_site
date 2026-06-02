import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading title="Шесть причин доверить дело нам" />

        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 60}
              className="flex flex-col gap-4 bg-card p-8"
            >
              <Icon name={a.icon} className="size-5 text-[var(--gold)]" />
              <h3 className="font-medium tracking-tight">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
