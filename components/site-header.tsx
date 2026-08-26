import Image from "next/image"
import { siteConfig } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="relative z-20 flex flex-col gap-4 pt-6 sm:pt-8">
      <div className="flex items-start justify-between gap-4">
        <div className="relative h-20 w-24 overflow-hidden sm:h-24 sm:w-28 lg:h-28 lg:w-32">
          <Image
            src="/images/auto-reit-logo.png"
            alt={`Логотип ${siteConfig.brand}`}
            width={456}
            height={402}
            priority
            className="absolute left-1/2 top-1/2 w-[125%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain mix-blend-screen"
          />
        </div>
      </div>

      <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm font-medium tracking-wide text-foreground sm:text-base lg:text-lg">
        {siteConfig.tagline.map((item, i) => (
          <li key={item} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden className="size-1.5 rounded-full bg-primary" />}
            {item}
          </li>
        ))}
      </ul>
    </header>
  )
}
