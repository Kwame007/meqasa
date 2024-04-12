import React, { useCallback, useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Icons } from "@/components/icons"

// Define PropTypes for better type checking and documentation
type ThumbnailProps = {
  selected: boolean
  imgSrc: string | StaticImageData
  index: number
  onClick: () => void
}

type CarouselProps = {
  index: number
  children?: React.ReactNode
  images: string[] | StaticImageData[]
  options?: EmblaOptionsType
}

export function ThumbnailCarousel({
  index,
  children,
  images,
}: {
  index: number
  children?: React.ReactNode
  images: string[] | StaticImageData[]
}) {
  return (
    <Dialog>
      {/* TODO: manage trigger hover state individually */}
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="inset-0 max-w-full translate-x-0 translate-y-0 rounded-none border-0 bg-black p-0">
        <EmblaCarousel
          index={index}
          images={images}
          options={{ align: "start", containScroll: "trimSnaps" }}
        ></EmblaCarousel>
      </DialogContent>
    </Dialog>
  )
}

export const Thumb: React.FC<ThumbnailProps> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      // Use meaningful CSS class names for conditional classes
      className={cn(
        selected ? "selected" : "",
        index % 3 === 0 ? "index-multiple-of-3" : "",
        "ml-2 h-fit w-fit pt-1"
      )}
    >
      <Button
        onClick={onClick}
        className={cn(
          selected ? "border-2 border-pink-400" : "",
          "h-[120px] w-[155px] overflow-hidden rounded-xl bg-transparent p-0 hover:bg-transparent"
        )}
      >
        <Image
          alt="test"
          src={imgSrc}
          className="h-full w-full rounded-lg object-cover"
          width={1200}
          height={200}
        />
      </Button>
    </div>
  )
}

const EmblaCarousel: React.FC<CarouselProps> = (props) => {
  const { images, options, index } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slideNumber, setSlideNumber] = useState(1)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    // containScroll: "trimSnaps",
    align: "start",
  })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: false,
  })

  // Handle thumbnail click event
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  // Handle selection event
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on("select", onSelect)
    emblaMainApi.on("reInit", onSelect)

    // scroll to click image
    onThumbClick(index)
  }, [emblaMainApi, onSelect, onThumbClick, index])

  // Handle scrolling to previous slide
  const scrollPrev = React.useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])

  // Handle scrolling to next slide
  const scrollNext = React.useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  return (
    <div>
      {/* Top contents */}
      <div className="flex border-b-[#999999] text-[#999999]">
        <div className="flex items-center pb-1 md:gap-20 md:pt-3">
          <ul>
            <li className="p-4 md:px-4">1/10</li>
          </ul>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="mr-1 flex items-center gap-2 px-4 capitalize md:py-2"
            >
              <Icons.heart className="h-4 w-4" />
              favorite
            </Button>
            <Button
              variant="ghost"
              className="mr-1 flex items-center gap-2 px-4 capitalize md:py-2"
            >
              <Icons.share className="h-4 w-4" />
              share
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-full items-center justify-evenly md:flex-col">
        {/* Main image */}
        <div className="relative h-fit w-full p-1">
          <div className="mx-auto w-full overflow-hidden md:h-full md:max-w-[85%]">
            {/* Embla */}
            <div className="overflow-hidden" ref={emblaMainRef}>
              <div className="flex h-full touch-pan-y">
                {images?.map((img, index) => (
                  <div
                    className="flex min-w-0 shrink-0 grow-0 basis-full justify-center"
                    key={index}
                  >
                    <Image
                      alt="test"
                      src={img}
                      className="h-[262px] min-h-full object-cover shadow-md md:h-[500px] md:w-auto"
                      width={1200}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            className="absolute inset-y-1/2 left-2 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-transparent p-0 text-muted-foreground hover:bg-transparent  hover:text-b-accent md:left-8"
            onClick={scrollPrev}
          >
            <Icons.chevronLeft
              className="h-[24px] w-[24px] text-gray-400"
              strokeWidth="2"
            />
          </Button>
          <Button
            className="absolute inset-y-1/2 right-2 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-transparent  p-0 text-muted-foreground hover:bg-transparent hover:text-b-accent md:right-8"
            onClick={scrollNext}
          >
            <Icons.chevronRight
              className="h-[24px] w-[24px] text-gray-400"
              strokeWidth="2"
            />
          </Button>
        </div>

        {/* Thumbnail images */}
        <div className="hidden overflow-auto md:block">
          <div className="overflow-hidden" ref={emblaThumbsRef}>
            <div className="flex">
              {images?.map((img, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={img}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
