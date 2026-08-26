import Image from "next/image"
import { siteConfig } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative z-10 pt-4 sm:pt-8">
      <div className="grid items-center gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        <div className="relative z-10 max-w-xl">
          <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-foreground">{siteConfig.heading.line1}</span>
            <span className="mt-1 block text-primary drop-shadow-[0_0_25px_rgba(239,32,42,0.45)]">
              {siteConfig.heading.line2}
            </span>
          </h1>

          <p className="mt-5 max-w-xs text-base leading-relaxed text-foreground/80 text-pretty sm:max-w-md sm:text-lg">
            {siteConfig.description}
          </p>
        </div>

        <div className="relative -mb-14 -mt-16 sm:-mb-20 sm:-mt-24 lg:mb-0 lg:mt-0">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_60%_50%,rgba(239,32,42,0.28),transparent_70%)]"
          />
          <Image
            src="/images/hero-car.png"
            alt="Червоний спортивний автомобіль BMW у руху зі світловими слідами"
            width={1024}
            height={1024}
            priority
            className="ml-auto w-[115%] max-w-2xl select-none object-contain mix-blend-screen lg:w-full [mask-image:radial-gradient(closest-side,black_45%,transparent_92%)]"
          />
        </div>
      </div>
    </section>
  )
}
