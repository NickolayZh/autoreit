import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground sm:text-base">
      <p>
        © 2024 <span className="font-semibold text-primary">{siteConfig.brand}</span>. Усі права захищено.
      </p>
    </footer>
  )
}
