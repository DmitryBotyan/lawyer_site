import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/cta-section";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Блог",
  description: "Юридический блог компании «Аурум»: разборы практики и советы для бизнеса.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader

        title="Право простыми словами"
        description="Разборы практики, актуальные изменения законодательства и советы для бизнеса."
        crumbs={[{ label: "Главная", href: "/" }, { label: "Блог" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="card-lift card-gold group grid gap-8 overflow-hidden bg-card p-6 sm:p-8 lg:grid-cols-2 lg:p-10"
            >
              <div className="relative flex min-h-40 items-center justify-center overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-gold/10 via-transparent to-transparent sm:min-h-56">
                <div className="glow-gold pointer-events-none absolute inset-0" aria-hidden />
                <span className="font-serif text-7xl font-semibold text-gold-gradient opacity-80">А</span>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  <Badge className="border-gold/25 bg-gold/10 text-gold" variant="outline">
                    {featured.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{formatDate(featured.date)}</span>
                </div>
                <h2 className="font-serif text-2xl font-medium leading-tight tracking-tight transition-colors group-hover:text-gold sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Читать статью
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="card-gold group flex h-full flex-col gap-4 rounded-xl bg-card/60 p-7"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-gold/25 bg-gold/5 text-xs text-gold">
                      {p.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />{p.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-auto border-t border-border pt-4 text-xs text-muted-foreground">
                    {formatDate(p.date)}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
