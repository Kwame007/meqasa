"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { shimmer, toBase64 } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Icons } from "@/components/icons"

export function AvailableUnitsCarousel({
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
    <Carousel
      className="w-full max-w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-[220px] md:basis-[256px]">
            <Card className="relative rounded-none border-none bg-transparent shadow-none">
              <Link href={`/${id}`} className="absolute inset-0 block" />

              <CardHeader className="p-0">
                <Image
                  alt={title}
                  src={img}
                  width={200}
                  height={200}
                  className="h-[150px] w-full rounded-[16px] object-cover md:h-[169px]"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(256, 192)
                  )}`}
                  sizes="256px"
                />
              </CardHeader>
              <CardContent className="p-0">
                <div className="pt-4">
                  <CardTitle className="line-clamp-1 text-sm font-bold text-b-primary">
                    {title}
                  </CardTitle>
                  <div className="text-sm">
                    <span className="capitalize text-b-muted">
                      {location}
                    </span>
                    <div className="mt-1 flex items-center text-b-muted">
                      {bedText}{" "}
                      <Icons.dot className="h-[15px] w-[15px] text-b-muted" />{" "}
                      {bathText}{" "}
                      <Icons.dot className="h-[15px] w-[15px] text-b-muted" />{" "}
                      {sqftText}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden h-11 w-11 items-center justify-center text-b-accent shadow-md md:flex" />
      <CarouselNext className="hidden h-11 w-11 items-center justify-center text-b-accent shadow-md md:flex" />
    </Carousel>
  )
}
