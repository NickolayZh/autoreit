import Image from "next/image"
import { siteConfig } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="relative z-20 flex flex-col gap-4 pt-6 sm:pt-8">
      <div className="flex items-start justify-between gap-4">
        <Image
          src="/images/logo.png"
          alt={`Логотип ${siteConfig.brand}`}
          width={512}
          height={512}
          priority
          className="h-24 w-24 scale-110 object-contain mix-blend-screen sm:h-28 sm:w-28 lg:h-32 lg:w-32 [mask-image:radial-gradient(closest-side,black_72%,transparent_98%)]"
        />
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
