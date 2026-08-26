import { Award, ChevronRight, Gauge, Handshake, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/lib/site"

const icons = {
  shield: ShieldCheck,
  gauge: Gauge,
  award: Award,
  handshake: Handshake,
} as const

export function Benefits() {
  return (
    <section aria-label="Наші переваги" className="relative z-10 rounded-2xl border border-border bg-card">
      <ul className="divide-y divide-border lg:grid lg:grid-cols-2 lg:divide-y-0">
        {siteConfig.benefits.map((benefit, i) => {
          const Icon = icons[benefit.icon as keyof typeof icons]
          return (
            <li
              key={benefit.title}
              className={[
                "flex items-center gap-4 p-5 sm:gap-5 sm:p-6",
                i % 2 === 1 ? "lg:border-l lg:border-border" : "",
                i > 1 ? "lg:border-t lg:border-border" : "",
              ].join(" ")}
            >
              <Icon aria-hidden className="size-9 shrink-0 text-primary sm:size-11" strokeWidth={1.75} />
              <div className="min-w-0 flex-1">
                <h2 className="text-base font-bold text-card-foreground sm:text-lg">{benefit.title}</h2>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground sm:text-base">{benefit.text}</p>
              </div>
              <ChevronRight aria-hidden className="size-5 shrink-0 text-primary sm:size-6" />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
