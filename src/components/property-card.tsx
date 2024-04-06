import React from "react"
import Image from "next/image"
import Link from "next/link"

import { formatToGhsCurrency, shimmer, toBase64 } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function PropertyCard({
  amenities,
  images,
  location,
  price,
  title,
  id,
}: PropertyListing) {
  return (
    <Card className="relative h-full rounded-2xl border-none shadow-none">
      <CardHeader className="h-[192px] overflow-hidden rounded-2xl p-0">
        {/* Render EmblaCarousel with provided options and data */}
        <Link href={`/${id}`} className="block no-underline">
          <Image
            className="h-[192px] object-cover"
            width={256}
            height={192}
            src={images[0]}
            alt={title}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(256, 192)
            )}`}
            priority
            sizes="256px"
          />
        </Link>
      </CardHeader>
      {/* Render card content */}
      <CardContent className="p-0">
        <div className="relative pt-4">
          <Link href={`/${id}`} className="absolute inset-0" />
          <CardTitle className="line-clamp-1 text-xs font-bold text-primary md:text-sm">
            {title}
          </CardTitle>
          <div>
            <h3 className="mb-1 mt-[10px] text-base font-bold leading-[19px] text-b-accent md:text-[19px]">
              {formatToGhsCurrency.format(+price)}
            </h3>
            <span className="text-sm capitalize text-b-muted">{location}</span>
            <div className="mt-1 flex items-center text-sm text-b-muted">
              {amenities.beds} Beds{" "}
              <Icons.dot className="h-[12px] w-[12px] text-b-accent" />{" "}
              {amenities.baths} Baths{" "}
              <Icons.dot className="h-[12px] w-[12px] text-b-accent" />{" "}
              {amenities.sqft} sqft
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
