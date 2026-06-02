import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { GoldGrain } from "@/components/gold-grain";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden border-b border-border text-center">
      <GoldGrain />
      <Container className="relative flex flex-col items-center gap-6">
        <span
          className="font-num text-[var(--gold)]/20 leading-none select-none"
          style={{ fontSize: "clamp(8rem, 22vw, 18rem)", fontWeight: 300 }}
          aria-hidden
        >
          404
        </span>

        <div className="-mt-6 flex flex-col items-center gap-4">
          <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Страница не найдена
          </h1>
          <p className="max-w-md text-base text-muted-foreground">
            Возможно, страница была удалена или вы перешли по неверной ссылке.
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="gold" size="lg">
            <Link href="/">На главную</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacts">Написать нам</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
