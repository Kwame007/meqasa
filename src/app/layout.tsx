import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/font"

import "./globals.css"

import { cn } from "@/lib/utils"
import Footer from "@/components/ui/footer"
import { SiteHeader } from "@/components/site-header"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // inter
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <div className="flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
