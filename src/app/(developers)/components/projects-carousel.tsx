"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Breadcrumbs } from "@/components/bread-crumbs"
// import { ThumbnailCarousel } from "@/components/carousel/thumbnail-carousel"
import { Icons } from "@/components/icons"

const images = [
  "https://images.unsplash.com/photo-1560448076-213180fe7d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1629236714692-9dddb8ebe990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1629079447841-d04df9ee2d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
  "https://images.unsplash.com/photo-1426122402199-be02db90eb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://meqasa.com/uploads/imgs/d52c496a97da371356bc55226b8d7191",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/89b6788694260dbab70fb86c07fa191e",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/19f62b0e238ee390d36267588610a977",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/d66b9dd853b1e1b64e730cdda4e56041",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/d81dc409ebcdff464d661eefaebe2c19",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/bed858dd5424c4d2ca5815f03cf5f94e",
]

const slides = images.map((img, i) => (
  // <div key={i} className="h-full  w-full min-w-full flex-1">
  <CarouselItem key={i}>
    <div className="p-0">
      <Card className="rounded-none border-0">
        <CardContent className="flex h-[250px] items-center justify-center p-0 lg:h-[457px]">
          <Image
            alt="test"
            src={img}
            width={1800}
            height={457}
            className="h-full w-full object-cover"
          />
        </CardContent>
      </Card>
    </div>
  </CarouselItem>
  // </div>
))

export function ProjectCarousel() {
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
    <Carousel className="w-full max-w-full" setApi={setApi}>
      <CarouselContent>{slides}</CarouselContent>
      <CarouselPrevious className="left-3/4  top-3/4 z-20 hidden h-12 w-12 translate-y-6 bg-white lg:flex" />
      <CarouselNext className="right-60 top-3/4 z-20 hidden h-12 w-12 translate-y-6 bg-white lg:flex" />
      <Button
        className="absolute right-[305px] top-[80.5%] z-20 hidden h-12 w-12 rounded-full bg-white text-b-accent hover:bg-white/90 lg:flex"
        size="icon"
      >
        <Icons.expand className="h-4 w-4" />
      </Button>
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-8 lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.1) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 py-2 text-center text-sm text-muted-foreground text-white lg:hidden">
        Slide {current} of {count}
      </div>
    </Carousel>
  )
}
