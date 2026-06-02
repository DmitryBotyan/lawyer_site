"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

export function LeadForm({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (name.length < 2) {
      toast.error("Укажите имя");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      toast.error("Укажите корректный номер телефона");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    form.reset();
    setTopic("");
    toast.success("Заявка отправлена", {
      description: "Перезвоним в течение часа в рабочее время.",
    });
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col gap-4", className)}>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Имя</Label>
          <Input id="name" name="name" placeholder="Как к вам обращаться" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="topic">Вопрос</Label>
        <Select value={topic} onValueChange={setTopic}>
          <SelectTrigger id="topic" className="w-full">
            <SelectValue placeholder="Выберите направление" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {s.title}
              </SelectItem>
            ))}
            <SelectItem value="other">Другое</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="topic" value={topic} />
      </div>

      {!compact && (
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Кратко о ситуации</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Опишите вопрос — это поможет подготовиться к консультации"
          />
        </div>
      )}

      <Button type="submit" variant="gold" size="xl" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Отправляем…
          </>
        ) : (
          "Получить консультацию"
        )}
      </Button>

      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 text-gold" />
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  );
}
