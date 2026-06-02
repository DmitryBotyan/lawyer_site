export const site = {
  name: "АУРУМ",
  legalName: 'Юридическая компания «Аурум»',
  tagline: "юридическая защита высшей пробы",
  description:
    "Юридическая компания «Аурум» — сопровождение бизнеса, арбитраж, корпоративное и налоговое право. 18 лет практики, более 1200 выигранных дел.",
  phone: "+7 (495) 120-45-67",
  phoneHref: "tel:+74951204567",
  email: "office@aurum-legal.ru",
  emailHref: "mailto:office@aurum-legal.ru",
  address: "Москва, Пресненская наб., 12, башня «Федерация», 41 этаж",
  workHours: "Пн–Пт 09:00–20:00",
  socials: [
    { label: "Telegram", href: "https://t.me/" },
    { label: "WhatsApp", href: "https://wa.me/74951204567" },
    { label: "VK", href: "https://vk.com/" },
  ],
} as const;

export const nav = [
  { label: "Главная", href: "/" },
  { label: "Практики", href: "/services" },
  { label: "О компании", href: "/about" },
  { label: "Команда", href: "/team" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
] as const;
