import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Юридическая защита бизнеса и собственников с 2008 года.
            </p>
            <div className="flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Навигация
            </p>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Практики
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Контакты
            </p>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-foreground">
                  <Phone className="size-3.5 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-2 transition-colors hover:text-foreground">
                  <Mail className="size-3.5 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-3.5 shrink-0 text-gold" />
                {site.workHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {site.legalName}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="#" className="transition-colors hover:text-foreground">Политика конфиденциальности</Link>
            <Link href="#" className="transition-colors hover:text-foreground">Публичная оферта</Link>
            <span className="hidden sm:block h-3 w-px bg-border" aria-hidden />
            <a
              href="https://botyan.dev"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground/50 transition-colors hover:text-gold"
            >
              botyan.dev
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
