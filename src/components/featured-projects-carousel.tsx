"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import FeaturedProperty from "./featured-property"

export default function FeaturedProjectsCarousel({
  featuredProperties,
  delay,
}: {
  featuredProperties: FeaturedPropertiesType[]
  delay: number
}) {
  const plugin = React.useRef(
    Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <div className="mb-4 overflow-y-hidden overflow-x-scroll ">
      <div className="">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-full rounded-lg md:border md:px-4 md:pb-6 md:pt-14"
        >
          <CarouselContent className="p-1 pt-4">
            {featuredProperties.map((featuredProperties, index) => (
              <CarouselItem
                key={index}
                className="basis-[350px] md:basis-[500px]"
              >
                <FeaturedProperty property={featuredProperties} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[980px] top-8 hidden h-11 w-11 md:flex" />
          <CarouselNext className="right-12 top-8 hidden h-11 w-11 md:flex" />
        </Carousel>
      </div>
    </div>
  )
}
