"use client"

import React from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()

  // Check if on root page
  const isRootPage = pathName === "/"

  return (
    <div
      className={cn(
        isRootPage ? "lg:container" : "lg:mx-auto lg:max-w-[1140px]"
      )}
    >
      {children}
    </div>
  )
}
