import Link from "next/link";

import { Icon } from "@/components/icon";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-lift group flex h-full min-h-[220px] flex-col gap-6 border-0 bg-card p-7 hover:bg-card/80"
    >
      <Icon name={service.icon} className="size-5 text-[var(--gold)]" />

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-serif text-xl font-medium tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.short}
        </p>
      </div>

      <div className="border-t border-border pt-4">
        <span className="text-xs text-[var(--gold)]">{service.price}</span>
      </div>
    </Link>
  );
}
