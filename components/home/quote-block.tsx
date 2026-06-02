import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function QuoteBlock() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="font-serif text-5xl leading-none text-[var(--gold)]/30 select-none sm:text-7xl">&ldquo;</span>
          <p className="font-serif text-xl font-medium leading-snug tracking-tight text-foreground/90 -mt-2 sm:text-2xl lg:text-3xl xl:text-4xl">
            Выиграли арбитражный спор, который три других юриста считали безнадёжным. 230 миллионов рублей в нашу пользу.
          </p>
          <div className="mt-10 flex items-center justify-center gap-5">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[var(--gold)]/40" />
            <p className="text-sm text-muted-foreground">
              Анна Д. — финансовый директор, торговая компания
            </p>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[var(--gold)]/40" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
