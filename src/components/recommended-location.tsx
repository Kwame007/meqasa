import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecommendedLocation({
  href,
  location,
  src,
}: RecommendedLocationType) {
  return (
    <Card className="relative h-full min-w-[180px] overflow-hidden rounded-t-2xl border-0 bg-transparent shadow-none lg:w-full">
      <Link href={href}>
        <CardHeader className="overflow-hidden rounded-2xl p-0">
          <Image
            alt={"location"}
            src={src}
            width={200}
            height={200}
            className="h-[169px] w-full  object-cover"
          />
        </CardHeader>
        <CardContent className="p-0">
          <CardTitle className="mt-3 line-clamp-2 text-sm font-bold capitalize text-b-accent lg:text-lg">
            {location}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  )
}
