import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Статья не найдена" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader

        title={post.title}
        crumbs={[
          { label: "Главная", href: "/" },
          { label: "Блог", href: "/blog" },
          { label: post.category },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="outline" className="border-gold/25 bg-gold/5 text-gold">
              {post.category}
            </Badge>
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />{post.readTime}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-foreground/90">
            <p className="font-serif text-xl italic leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12">
            <Button asChild variant="goldOutline">
              <Link href="/blog">
                Все статьи
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {more.length > 0 && (
        <section className="border-t border-border py-16 sm:py-20">
          <Container>
            <h2 className="mb-10 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Читайте также
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-gold group flex h-full flex-col gap-3 rounded-xl bg-card/60 p-6">
                  <Badge variant="outline" className="w-fit border-gold/25 bg-gold/5 text-xs text-gold">
                    {p.category}
                  </Badge>
                  <h3 className="font-serif text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <span className="mt-auto text-xs text-muted-foreground">{formatDate(p.date)}</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
