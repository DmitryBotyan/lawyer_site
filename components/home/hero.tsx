import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/stat-counter";
import { GoldGrain } from "@/components/gold-grain";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col border-b border-border overflow-hidden">
      <GoldGrain />
      <Container className="flex flex-1 flex-col justify-center py-20">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-serif text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Защита высшей
            <br />
            <span className="text-[var(--gold)]">пробы</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Сопровождаем бизнес, выигрываем арбитражные споры
            и защищаем активы. Беремся за дело, когда видим путь к победе.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild variant="gold" size="xl">
              <Link href="/contacts">
                Получить консультацию
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/services">Практики</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 animate-fade-up [animation-delay:150ms]">
          {stats.map((s, i) => (
            <StatCounter
              key={s.label}
              count={s.count}
              decimals={s.decimals}
              suffix={s.suffix}
              label={s.label}
              duration={1600 + i * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
