"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function PropertyCard({
  src,
  type,
  href,
}: {
  src: string
  type: string
  href: string
}) {
  return (
    <Card className="relative w-full rounded-none border-none">
      <CardContent className="h-full p-0">
        <Link href={href} className="block h-full w-full">
          <Image
            src={src}
            alt="property"
            width={350}
            height={200}
            className="h-full w-full object-cover"
          />
        </Link>
      </CardContent>
      <Badge className="absolute left-4 top-4 z-30 h-6 bg-b-accent uppercase">
        {type}
      </Badge>
    </Card>
  )
}
