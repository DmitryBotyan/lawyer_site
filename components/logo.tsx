import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label={site.legalName}
    >
      <span className="font-serif text-base tracking-[0.2em] text-foreground">
        {site.name}
      </span>
      <span className="h-3.5 w-px bg-border" aria-hidden />
      <span className="text-[0.6rem] tracking-[0.18em] text-[var(--gold)]/70">
        Legal
      </span>
    </Link>
  );
}
