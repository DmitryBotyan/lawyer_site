import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Контакты юридической компании «Аурум»: ${site.phone}, ${site.email}.`,
};

const faq = [
  {
    q: "Сколько стоит первая консультация?",
    a: "Первичная оценка перспектив дела — бесплатно. Мы честно скажем, есть ли смысл идти дальше, и предложим план действий со стоимостью.",
  },
  {
    q: "Как быстро вы отвечаете на обращение?",
    a: "На заявки с сайта перезваниваем в течение часа в рабочее время. По срочным делам возможен выезд в день обращения.",
  },
  {
    q: "Работаете ли вы в других регионах?",
    a: "Да. Мы ведём дела по всей России и сопровождаем процессы в судах всех инстанций, включая Верховный суд РФ.",
  },
  {
    q: "Как фиксируется стоимость услуг?",
    a: "Стоимость закрепляется в договоре до начала работы. Никаких скрытых платежей — вы всегда понимаете, за что платите.",
  },
];

const contactCards = [
  { icon: Phone, label: "Телефон", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Почта", value: site.email, href: site.emailHref },
  { icon: MessageCircle, label: "Мессенджеры", value: "Telegram · WhatsApp", href: site.socials[0].href },
  { icon: Clock, label: "Часы работы", value: site.workHours, href: undefined },
];

export default function ContactsPage() {
  return (
    <>
      <PageHeader

        title="Расскажите о вашей ситуации"
        description="Оставьте заявку или свяжитесь удобным способом. Партнёр оценит перспективы бесплатно."
        crumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((c) => {
                const Inner = (
                  <>
                    <span className="grid size-11 place-items-center rounded-lg border border-gold/25 bg-gold/5 text-gold">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      
                      <p className="mt-1 font-medium text-foreground">{c.value}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="card-gold flex flex-col gap-3 rounded-xl bg-card/60 p-6">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="card-gold flex flex-col gap-3 rounded-xl bg-card/60 p-6">
                    {Inner}
                  </div>
                );
              })}
            </div>

            <div className="card-gold flex items-start gap-4 rounded-xl bg-card/60 p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-gold/25 bg-gold/5 text-gold">
                <MapPin className="size-5" />
              </span>
              <p className="font-medium leading-relaxed text-foreground">{site.address}</p>
            </div>

            <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-xl border border-border bg-card/40">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.82 0.07 86 / 0.18) 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden
              />
              <div className="relative flex flex-col items-center gap-2 text-center">
                <MapPin className="size-8 text-gold" />
                <p className="text-sm text-muted-foreground">Москва-Сити, башня «Федерация»</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-card/60 p-7 sm:p-9">
            <h2 className="font-serif text-2xl font-medium tracking-tight">Оставить заявку</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Заполните форму — перезвоним в течение часа в рабочее время.
            </p>
            <div className="mt-7">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium hover:text-gold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
}
