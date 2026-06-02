import type { Metadata } from "next";
import { Target, Eye, Gem, Scale, Handshake, TrendingUp } from "lucide-react";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { stats } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "О компании",
  description: "О юридической компании «Аурум»: 18 лет практики, ценности и принципы работы.",
};

const values = [
  {
    icon: Scale,
    title: "Принципиальность",
    text: "Беремся за дело, только когда видим реальную перспективу. Честная оценка важнее красивого обещания.",
  },
  {
    icon: Handshake,
    title: "Партнёрство",
    text: "Мы на стороне клиента всегда. Ваши интересы — наши интересы, без конфликта и компромиссов.",
  },
  {
    icon: Gem,
    title: "Качество высшей пробы",
    text: "Глубокая проработка каждого дела. Мы не делаем «на скорую руку» — только эталонно.",
  },
];

const milestones = [
  { year: "2008", text: "Основание компании тремя партнёрами с опытом в крупном бизнесе." },
  { year: "2013", text: "Первое дело федерального масштаба — защита холдинга в споре на 1,2 млрд ₽." },
  { year: "2017", text: "Запуск практик банкротства и налогового права. Рост команды до 20 юристов." },
  { year: "2021", text: "Включение в рейтинг «Право-300» сразу по четырём практикам." },
  { year: "2026", text: "Более 1200 выигранных дел и 9,4 млрд ₽ защищённых активов клиентов." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader

        title={
          <>
            Защищаем бизнес так,
            <br /> как защищали бы свой
          </>
        }
        description={`${site.legalName} — команда юристов, для которых результат клиента важнее процесса.`}
        crumbs={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-5">
            <SectionHeading title={
              <><span className="font-num" style={{ fontWeight: 500 }}>18</span> лет на стороне предпринимателей</>
            } />
            <p className="leading-relaxed text-muted-foreground">
              Компания «Аурум» появилась в 2008 году, когда трое юристов из крупного бизнеса
              решили создать бутиковую практику без конвейера и формализма. Сегодня это команда
              экспертов, сопровождающая компании федерального уровня.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              За каждым делом стоит партнёр с личной ответственностью. Мы не берёмся за всё
              подряд — выбираем дела, в которых можем добиться результата.
            </p>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-px border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-8 flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-num text-[var(--gold)] leading-none"
                    style={{ fontSize: "2.5rem", fontWeight: 300 }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "0.8rem", fontWeight: 400 }}
                  >
                    {s.suffix}
                  </span>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30 py-16 sm:py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-gold/20 bg-background/50 p-8">
            <Target className="size-9 text-gold" />
            <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight">Миссия</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Дать бизнесу уверенность в правовой защите — чтобы предприниматель занимался делом,
              а не тревожился о рисках.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-gold/20 bg-background/50 p-8">
            <Eye className="size-9 text-gold" />
            <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight">Видение</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Стать эталоном юридической практики, где репутация измеряется выигранными делами
              и доверием клиентов.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading align="center" title="Принципы, которым мы не изменяем" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="card-gold flex flex-col gap-4 rounded-xl bg-card/60 p-8">
                <span className="grid size-12 place-items-center rounded-lg border border-gold/25 bg-gold/5 text-gold">
                  <v.icon className="size-6" />
                </span>
                <h3 className="font-serif text-xl font-medium tracking-tight">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <SectionHeading title="Ключевые вехи" />
          <div className="mt-14 flex flex-col">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 70} className="flex gap-6 border-l border-border pb-10 pl-8 last:pb-0 sm:gap-10">
                <div className="relative">
                  <span className="absolute -left-[2.6rem] top-1 grid size-7 place-items-center rounded-full border border-gold/40 bg-background">
                    <span className="size-2 rounded-full bg-gold" />
                  </span>
                  <span
                    className="font-num text-[var(--gold)]"
                    style={{ fontSize: "2rem", fontWeight: 500 }}
                  >{m.year}</span>
                </div>
                <p className="flex-1 pt-1 leading-relaxed text-muted-foreground">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card/30 py-14">
        <Container className="flex flex-col items-center gap-3 text-center">
          <TrendingUp className="size-8 text-gold" />
          <p className="max-w-2xl font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl">
            «Аурум» входит в рейтинги «Право-300» и «Коммерсантъ» по шести практикам
            и рекомендована Forbes.
          </p>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
