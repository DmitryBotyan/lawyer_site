import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading title="От первого звонка до результата" />

        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70} className="flex flex-col gap-4 bg-card p-8">
              <span
                className="font-num leading-none text-[var(--gold)]/40"
                style={{ fontSize: "3rem", fontWeight: 500 }}
              >
                {p.step}
              </span>
              <h3 className="font-medium tracking-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
