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
    <Card className="relative h-full w-[192px] rounded-lg rounded-b-none bg-transparent border-0 shadow-none lg:w-full lg:rounded-t-2xl">
      <Link href={`/${id}`} className="absolute inset-0 block" />
      <CardHeader className="overflow-hidden rounded-2xl p-0 lg:mb-6 lg:h-fit">
        <Image
          alt={title}
          src={img}
          width={200}
          height={200}
          className="h-[150px] w-full rounded-lg object-cover lg:h-[169px] lg:rounded-2xl"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(256, 169)
          )}`}
          sizes="256px"
        />
      </CardHeader>
      <CardContent className="mt-3 p-0 lg:m-0">
        <div>
          <CardTitle className="line-clamp-1 text-sm font-bold text-b-primary">
            {title}
          </CardTitle>
          <div>
            <span className="text-sm capitalize text-b-muted lg:text-base">
              {location}
            </span>
            <div className="mt-1 flex items-center text-sm text-b-muted lg:text-base">
              {bedText}{" "}
              <Icons.dot className="h-2 w-2 text-b-muted lg:h-4 lg:w-4" />{" "}
              {bathText}{" "}
              <Icons.dot className="h-2 w-2 text-b-muted lg:h-4 lg:w-4" />{" "}
              {sqftText}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
