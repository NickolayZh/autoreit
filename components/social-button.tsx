import Image from "next/image"
import type { Social } from "@/lib/site"

export function SocialButton({ social }: { social: Social }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:py-8"
      style={{
        boxShadow: `inset 0 0 0 1px ${social.glow}, 0 0 24px -8px ${social.glow}`,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ boxShadow: `0 0 40px -6px ${social.glow}` }}
      />
      <Image
        src={social.icon || "/placeholder.svg"}
        alt=""
        width={56}
        height={56}
        className="size-11 object-contain sm:size-14"
      />
      <span className="text-base font-bold text-card-foreground sm:text-lg">{social.name}</span>
    </a>
  )
}
