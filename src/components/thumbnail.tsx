import React, { useCallback } from "react"
import Image, { StaticImageData } from "next/image"

import { cn, shimmer, toBase64 } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { Icons } from "./icons"
import { Thumb } from "./thumbnail-buttons"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function Thumbnail({
  children,
  images,
}: {
  children: React.ReactNode
  images: string[] | StaticImageData[]
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [thumbsApi, setThumbsApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !thumbsApi) return
      api.scrollTo(index)
      thumbsApi.scrollTo(index)
    },
    [api, thumbsApi]
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    setSelectedIndex(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setSelectedIndex(api.selectedScrollSnap())
      thumbsApi?.scrollTo(selectedIndex)
    })
  }, [api, thumbsApi, selectedIndex])

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bottom-0 left-0 top-0 z-50 flex w-full max-w-full translate-x-[-0%] translate-y-[-0%] flex-col rounded-none border-0 bg-black p-0 text-white sm:rounded-none lg:p-6 ">
        <div className="flex grow items-center justify-center">
          <Carousel
            setApi={setApi}
            className="mx-auto w-full max-w-full lg:max-w-2xl"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-0">
                    <Card className="rounded-none border-0">
                      <CardContent className="flex max-h-[300px] min-h-[300px] items-center justify-center p-0 lg:max-h-[400px] lg:min-h-[400px]">
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
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-52 hidden h-12 w-12 bg-white text-b-accent lg:flex" />
            <CarouselNext className="-right-52 hidden h-12 w-12 bg-white text-b-accent lg:flex" />
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </Carousel>
        </div>
        <div className="hidden text-white lg:flex lg:justify-center">
          <div className="w-fit max-w-full">
            <Carousel
              className="w-full max-w-full"
              opts={{ align: "center" }}
              setApi={setThumbsApi}
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index} className="basis-[200px] ">
                    <div>
                      <Card
                        className={cn(
                          index === selectedIndex
                            ? "border-[3px] border-red-600"
                            : "border-0",
                          "overflow-hidden"
                        )}
                      >
                        <CardContent className="flex h-[130px] w-full items-center justify-center p-0">
                          <Thumb
                            key={index}
                            img={img}
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="absolute left-6 top-6 flex items-center">
          <Button
            variant="ghost"
            className="mr-1 flex items-center gap-2 px-4 capitalize text-white md:py-2"
          >
            <Icons.heart className="h-4 w-4" />
            favorite
          </Button>
          <Button
            variant="ghost"
            className="mr-1 flex items-center gap-2 px-4 capitalize text-white md:py-2"
          >
            <Icons.share className="h-4 w-4" />
            share
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
