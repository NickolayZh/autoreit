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
      href: "https://www.instagram.com/_auto_reit_",
      icon: "/brands/instagram.svg",
      glow: "rgba(225,48,108,0.55)",
      external: true,
    },
    {
      name: "Telegram",
      href: "https://t.me/auto_reit",
      icon: "/brands/telegram.svg",
      glow: "rgba(42,171,238,0.55)",
      external: true,
    },
    {
      // Viber has no public profile URL — this deep-links a chat with the number.
      name: "Viber",
      href: "viber://chat?number=%2B380930691222",
      icon: "/brands/viber.svg",
      glow: "rgba(126,76,232,0.55)",
      external: false,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@autoreit",
      icon: "/brands/tiktok.svg",
      glow: "rgba(255,0,80,0.5)",
      external: true,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Auto-Reit/61592751527844/",
      icon: "/brands/facebook.svg",
      glow: "rgba(24,119,242,0.55)",
      external: true,
    },
  ],
  benefits: [
    {
      icon: "Car",
      title: "Купити авто",
      text: "Знайдіть своє авто у нас. ",
      text: "Широкий вибір автомобілів для будь-яких потреб та бюджету.",
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
