"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">{children}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 hidden h-12 w-12 bg-white md:flex" />
      <CarouselNext className="right-5 hidden h-12 w-12 justify-center bg-white md:flex" />
    </Carousel>
  )
}
