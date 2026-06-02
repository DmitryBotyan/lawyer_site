import Link from "next/link";

import { Container } from "@/components/container";
import { GoldGrain } from "@/components/gold-grain";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  description,
  crumbs,
}: {
  eyebrow?: string; // kept for compat, unused
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <GoldGrain />
      <Container className="relative py-14 sm:py-20">
        {crumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="opacity-30">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-foreground">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl animate-fade-up flex flex-col gap-4">
          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
