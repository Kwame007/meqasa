import React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DetailsPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {children}
      <SpeedInsights />
    </div>
  )
}
