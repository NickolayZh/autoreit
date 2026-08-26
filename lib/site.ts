export const siteConfig = {
  brand: "AUTO_REIT",
  tagline: ["Надійно", "Швидко", "Вигідно"],
  heading: {
    line1: "ЗВ'ЯЖІТЬСЯ",
    line2: "З НАМИ",
  },
  description:
    "Слідкуйте за нашими новинами, акціями та новими надходженнями автомобілів у зручних для вас соцмережах.",
  phone: {
    label: "+380 (93) 069 12 22",
    href: "tel:+380930691222",
    question: "Є питання?",
    hours: "Пн – Нд з 9:00 до 21:00",
  },
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/PLACEHOLDER",
      icon: "/brands/instagram.svg",
      glow: "rgba(225,48,108,0.55)",
    },
    {
      name: "Telegram",
      href: "https://t.me/PLACEHOLDER",
      icon: "/brands/telegram.svg",
      glow: "rgba(42,171,238,0.55)",
    },
    {
      name: "Viber",
      href: "https://invite.viber.com/PLACEHOLDER",
      icon: "/brands/viber.svg",
      glow: "rgba(126,76,232,0.55)",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@PLACEHOLDER",
      icon: "/brands/tiktok.svg",
      glow: "rgba(255,0,80,0.5)",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/PLACEHOLDER",
      icon: "/brands/facebook.svg",
      glow: "rgba(24,119,242,0.55)",
    },
  ],
  benefits: [
    {
      icon: "shield",
      title: "Надійність",
      text: "Працюємо чесно та прозоро",
    },
    {
      icon: "gauge",
      title: "Швидкість",
      text: "Швидке реагування на ваші запити",
    },
    {
      icon: "award",
      title: "Якість",
      text: "Тільки перевірені автомобілі",
    },
    {
      icon: "handshake",
      title: "Підтримка",
      text: "Завжди на зв'язку у зручних месенджерах",
    },
  ],
  footer: "© 2024 AUTO_REIT. Усі права захищено.",
} as const

export type Social = (typeof siteConfig.socials)[number]
export type Benefit = (typeof siteConfig.benefits)[number]
