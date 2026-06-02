import { Container } from "@/components/container";

const items = ["Право-300", "Коммерсантъ", "Best Lawyers", "Pravo.ru", "ФПА РФ", "Forbes"];

export function LogosBand() {
  return (
    <section className="border-b border-border py-6">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((name) => (
          <span key={name} className="font-serif text-sm text-muted-foreground/50 transition-colors hover:text-muted-foreground">
            {name}
          </span>
        ))}
      </Container>
    </section>
  );
}
