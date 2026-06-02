import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading title="Нам доверяют то, что важнее всего" />
        <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80} className="flex flex-col gap-5 bg-card p-8">
              <p className="flex-1 font-serif text-sm italic leading-relaxed text-foreground/80">
                {t.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium">{t.author}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
