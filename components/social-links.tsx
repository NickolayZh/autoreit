import { siteConfig } from "@/lib/site"
import { SocialButton } from "@/components/social-button"

export function SocialLinks() {
  return (
    <nav aria-label="Соціальні мережі" className="relative z-10">
      {/* mobile/tablet: 3 + 2 layout on a 6-column grid, desktop: single row of 5 */}
      <ul className="grid grid-cols-6 gap-3 sm:gap-4 lg:grid-cols-5">
        {siteConfig.socials.map((social, i) => (
          <li key={social.name} className={i < 3 ? "col-span-2 lg:col-span-1" : "col-span-3 lg:col-span-1"}>
            <SocialButton social={social} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
