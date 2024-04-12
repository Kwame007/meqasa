"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
// import { ThumbnailCarousel } from "@/components/carousel/thumbnail-carousel"
import { Icons } from "@/components/icons"

export function SitePlanCarousel({
  images,
}: {
  images: string[] | StaticImageData[]
}) {
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

  return (
    <Card className="flex h-[375px] flex-col items-center justify-center overflow-hidden rounded-none border-x-0 bg-b-secondary md:h-[500px] md:rounded-xl">
      <Carousel
        setApi={setApi}
        className="h-[375px] w-full md:h-[500px] md:max-w-xl"
      >
        <CarouselContent className="">
          {images.map((slide, index) => (
            // <ThumbnailCarousel index={index} images={images}>
            <>
              {/* <div className="max-w-xl  after:content-[' '] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[rgba(0,0,0,0.42)] to-transparent after:via-[#00000014] after:z-0"> */}
              <CarouselItem
                key={index}
                className="after:content-[' '] relative cursor-pointer to-transparent after:absolute after:inset-0 after:z-0 after:bg-gradient-to-t after:from-[rgba(0,0,0,0.76)] after:via-[#00000014]"
              >
                <Card className="h-full rounded-none border-none">
                  <CardContent className="flex h-[375px] w-full items-center justify-center rounded-none p-0 md:h-[500px]">
                    <Image
                      alt="test"
                      src={slide}
                      className=" h-[375px] object-cover md:h-[500px]"
                      width={1200}
                      height={200}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* </div> */}
            </>
            // </ThumbnailCarousel>
          ))}
        </CarouselContent>
        <CarouselPrevious className="group -left-20 h-11 w-11 bg-white" />
        <CarouselNext className="group -right-20 h-11 w-11 bg-white" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center justify-self-start py-2 text-center text-sm font-semibold text-white">
          <p>
            {" "}
            Slide {current} of {count}
          </p>
        </div>
        <div className="absolute left-2 top-0 py-2">
          {/* <ThumbnailCarousel images={images} index={0}> */}
          <>
            <Button className="grid w-auto cursor-pointer grid-flow-col items-center justify-center gap-1 rounded-full bg-[rgba(0,0,0,.7)] px-3 py-2 hover:bg-[rgba(0,0,0,.75)]">
              <Icons.grid className="h-4 w-4" strokeWidth="2.0" />
              <p className="text-xs font-bold">See all ( 3 )</p>
            </Button>
          </>
          {/* </ThumbnailCarousel> */}
        </div>
        <div className="absolute right-2 top-0 py-2">
          {/* <ThumbnailCarousel images={images} index={0}> */}
          <>
            <Button className="w-auto cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,.7)] px-3 py-2 hover:bg-[rgba(0,0,0,.75)]">
              <Icons.expand className="h-4 w-4" strokeWidth="2.0" />
            </Button>
          </>
          {/* </ThumbnailCarousel> */}
        </div>
      </Carousel>
    </Card>
  )
}
