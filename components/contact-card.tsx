import { Clock, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function ContactCard() {
  const { phone } = siteConfig

  return (
    <section className="relative z-10 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex items-center gap-5 sm:gap-6">
        <span
          aria-hidden
          className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary shadow-[0_0_30px_-6px_rgba(239,32,42,0.7)] sm:size-20"
        >
          <Phone className="size-7 sm:size-9" strokeWidth={2.25} />
        </span>

        <div className="min-w-0">
          <p className="text-sm text-muted-foreground sm:text-base">{phone.question}</p>
          <a
            href={phone.href}
            className="mt-1 block text-2xl font-extrabold tracking-tight text-card-foreground transition-colors hover:text-primary sm:text-3xl lg:text-4xl"
          >
            {phone.label}
          </a>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
            <Clock aria-hidden className="size-4 shrink-0 sm:size-5" />
            {phone.hours}
          </p>
        </div>
      </div>
    </section>
  )
}
