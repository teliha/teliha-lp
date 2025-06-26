import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "../hooks/use-language"

export const metadata: Metadata = {
  title: "Teliha Limited",
  description: "Revolutionizing value transfer through blockchain technology",
  generator: "v0.dev",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
