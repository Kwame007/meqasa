"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "./ui/card"

export default function BannerCard({ desc, href, src }: BannerAdType) {
  return (
    <Card
      className="relative h-[200px] min-w-[320px] overflow-hidden rounded-xl border-0 lg:h-[436px] lg:max-h-[436px] lg:max-w-[546px]"
      key={href}
    >
      <CardContent className="p-0">
        {/* Render a link to the provided URL */}
        <Link href={href} target="_blank" rel="noreferrer">
          <Image
            alt="ad"
            width={1320}
            height={1200}
            src={src}
            className="h-fit w-full object-contain"
            sizes="(min-width: 1200px) 546px, 46.82vw, (min-width: 320px) calc(50vw - 32px), 314px"
            // placeholder="blur"
            // blurDataURL={`data:image/svg+xml;base64,${toBase64(
            //   shimmer(height, width)
            // )}`}
            // priority
          />
        </Link>
      </CardContent>
    </Card>
  )
}
