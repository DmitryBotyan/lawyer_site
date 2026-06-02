import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={site.legalName}
    >
      <span
        className="relative grid size-10 place-items-center rounded-md border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent transition-colors group-hover:border-gold/70"
        aria-hidden
      >
        <span className="font-serif text-lg font-semibold leading-none text-gold-gradient">
          A
        </span>
        <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/5" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-lg font-semibold tracking-[0.18em] text-foreground">
            {site.name}
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
            legal company
          </span>
        </span>
      )}
    </Link>
  );
}
