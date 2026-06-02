import Link from "next/link";
import { Phone } from "lucide-react";

import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-5">
            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Бесплатная оценка перспектив дела
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Опишите ситуацию — партнёр компании изучит её и честно оценит
              шансы. Без шаблонных ответов.
            </p>
            <a
              href={site.phoneHref}
              className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-3.5 text-[var(--gold)]" />
              {site.phone}
            </a>
            <Link
              href="/about"
              className="w-fit text-sm text-[var(--gold)] underline-offset-4 hover:underline"
            >
              Почему выбирают нас
            </Link>
          </div>

          <div className="border border-border p-6 sm:p-8">
            <LeadForm compact />
          </div>
        </div>
      </Container>
    </section>
  );
}
