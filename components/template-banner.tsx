import Link from "next/link";

export function TemplateBanner() {
  return (
    <div className="relative z-50 flex items-center justify-center gap-3 border-b border-gold/20 bg-background px-4 py-2.5 text-center text-xs text-muted-foreground">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40" aria-hidden />
      <span>
        Готовый шаблон для юридической компании —{" "}
        <Link
          href="https://botyan.dev"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-gold underline-offset-4 transition-opacity hover:opacity-75 hover:underline"
        >
          botyan.dev
        </Link>
      </span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40" aria-hidden />
    </div>
  );
}
