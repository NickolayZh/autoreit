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

        <div className="relative -mb-8 -mt-6 sm:-mb-12 sm:-mt-10 lg:-mr-10 lg:mb-0 lg:mt-0 xl:-mr-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_55%_50%,rgba(239,32,42,0.3),transparent_72%)]"
          />
          <Image
            src="/images/hero-car.png"
            alt="Червоний спортивний автомобіль BMW M4 у руху зі червоними світловими слідами"
            width={1160}
            height={912}
            priority
            className="ml-auto w-[118%] max-w-none select-none object-contain mix-blend-screen lg:w-[108%] [mask-image:radial-gradient(farthest-side_at_50%_50%,black_30%,transparent_90%)]"
          />
        </div>
      </div>
    </section>
  )
}
