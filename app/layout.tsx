import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AUTO_REIT — Зв'яжіться з нами",
  description:
    "AUTO_REIT — надійно, швидко, вигідно. Слідкуйте за нашими новинами, акціями та новими надходженнями автомобілів у соцмережах.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`bg-background ${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
