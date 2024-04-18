"use client"

import React from "react"
import Image from "next/image"

import { cn, shimmer, toBase64 } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Thumbnail } from "./thumbnail"

interface CarouselProps {
  isDeveloper?: boolean
  images?: string[]
}

export function DynamicCarousel({ isDeveloper, images }: CarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Create slide elements from the images
  const slides = images?.map((img, i) => (
    <CarouselItem
      key={i}
      className={cn(isDeveloper ? "pl-0 lg:basis-96 lg:pl-4" : "pl-0", "")}
    >
      <div>
        <Card className="h-[280px] rounded-none border-0 shadow-none lg:max-h-[400px] lg:min-h-[400px]">
          <CardContent className="flex items-center justify-center p-0">
            <Thumbnail images={images}>
              <Image
                alt="test"
                src={img}
                width={1800}
                height={420}
                className="h-[400px] w-full cursor-pointer object-cover"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(400, 420)
                )}`}
                sizes="400px"
                priority
              />
            </Thumbnail>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))

  return (
    <div
      className={cn(
        isDeveloper
          ? "border-b-2 border-orange-400 bg-slate-50 "
          : "flex justify-center border-b-2 border-orange-400 lg:bg-b-secondary",
        "relative h-[280px] w-full overflow-hidden lg:max-h-[400px] lg:min-h-[400px]"
      )}
    >
      <Carousel
        className={cn(
          isDeveloper ? "w-full max-w-full" : "max-w-xl",
          "lg:max-h-[400px] lg:min-h-[400px]"
        )}
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>{slides}</CarouselContent>
        <CarouselPrevious
          className={cn(
            isDeveloper ? "left-12 hidden lg:flex" : "-left-20",
            " h-12 w-12 bg-white"
          )}
        />
        <CarouselNext
          className={cn(
            isDeveloper ? "right-12 hidden lg:flex" : "-right-20",
            "h-12 w-12 bg-white"
          )}
        />
      </Carousel>
      <div className="absolute inset-x-2 bottom-2 z-20 py-2 text-center text-sm text-white lg:hidden">
        Slide {current} of {count}
      </div>
    </div>
  )
}
