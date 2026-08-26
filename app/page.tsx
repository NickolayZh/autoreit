import { Benefits } from "@/components/benefits"
import { ContactCard } from "@/components/contact-card"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SocialLinks } from "@/components/social-links"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* red speed-light atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[80vh] bg-[radial-gradient(90%_60%_at_75%_18%,rgba(239,32,42,0.22),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 h-[28rem] w-[42rem] rotate-[-14deg] bg-[repeating-linear-gradient(100deg,rgba(239,32,42,0.4)_0px,rgba(239,32,42,0.4)_2px,transparent_2px,transparent_28px)] opacity-50 blur-[3px] [mask-image:radial-gradient(closest-side,black_20%,transparent_85%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SiteHeader />
        <Hero />
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
          <SocialLinks />
          <ContactCard />
          <Benefits />
        </div>
        <SiteFooter />
      </div>
    </main>
  )
}
