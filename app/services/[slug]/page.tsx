import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-form";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Услуга не найдена" };
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader

        title={service.title}
        description={service.short}
        crumbs={[
          { label: "Главная", href: "/" },
          { label: "Практики", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                <Icon name={service.icon} className="size-7" />
              </span>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium tracking-tight">
                Что мы делаем
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card/40 p-4"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span className="text-sm leading-relaxed text-foreground/90">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium tracking-tight">
                Результаты по практике
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.cases.map((c) => (
                  <div key={c.title} className="card-gold rounded-xl bg-card/60 p-6">
                    <p className="text-sm text-muted-foreground">{c.title}</p>
                    <p className="mt-2 font-serif text-lg font-medium text-gold-gradient">
                      {c.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button asChild variant="goldOutline">
                <Link href="/services">
                  Все практики
                </Link>
              </Button>
            </div>
          </div>

          <aside className="border-t border-border pt-8 lg:sticky lg:top-28 lg:border-0 lg:pt-0">
            <div className="border border-border bg-card p-6 sm:p-8">
              <p className="text-sm text-gold">
                {service.price}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight">
                Обсудим вашу ситуацию
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Оставьте заявку — партнёр практики оценит перспективы бесплатно.
              </p>
              <div className="mt-6">
                <LeadForm compact />
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {others.length > 0 && (
        <section className="border-t border-border py-16 sm:py-20">
          <Container>
            <h2 className="mb-10 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Другие практики
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card-gold group flex items-center gap-4 rounded-xl bg-card/60 p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-gold/25 bg-gold/5 text-gold">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="font-medium text-foreground transition-colors group-hover:text-gold">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
