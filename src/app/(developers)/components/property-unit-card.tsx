"use client"

import Image from "next/image"
import Link from "next/link"

import { shimmer, toBase64 } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function PropertyUnitCard({
  id,
  amenities: { baths, beds, sqft },
  title,
  images,
  location,
}: PropertyListing) {
  const [img] = images

  const bedText = `${beds} Beds`
  const bathText = `${baths} Baths`
  const sqftText = `${sqft} sqft`

  return (
    <Card className="relative rounded-none bg-transparent shadow-none">
      <Link href={`/${id}`} className="absolute inset-0 block" />

      <CardHeader>
        <Image
          alt={title}
          src={img}
          width={200}
          height={200}
          className="h-[169px] w-full rounded-[16px] object-cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(554, 272)
          )}`}
          sizes="256px"
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className="pt-4">
          <CardTitle className="line-clamp-1 text-sm font-bold text-b-primary">
            {title}
          </CardTitle>
          <div>
            <span className="font-normal capitalize text-b-accent">
              {location}
            </span>
            <div className="mt-1 flex items-center font-normal text-b-accent">
              {bedText}{" "}
              <Icons.dot className="h-[15px] w-[15px] text-b-accent" />{" "}
              {bathText}{" "}
              <Icons.dot className="h-[15px] w-[15px] text-b-accent" />{" "}
              {sqftText}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
