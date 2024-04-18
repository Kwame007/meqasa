"use client"

import React from "react"
import Image from "next/image"

import { shimmer, toBase64 } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
// import { ThumbnailCarousel } from "@/components/carousel/thumbnail-carousel"
import { Icons } from "@/components/icons"
import { Thumbnail } from "@/components/thumbnail"
import { Camera, ImageIcon } from "lucide-react"

// Reusable component for each image container
function ImageContainer({
  src,
  images,
  index,
}: {
  src: string
  images: string[]
  index: number
}) {
  return (
    <Card className="overflow-hidden rounded-2xl border-none shadow-md">
      <Thumbnail images={images}>
        <Image
          alt="test"
          src={src}
          width={1200}
          height={200}
          className="h-full w-full cursor-pointer object-cover transition-all duration-200 ease-in md:hover:scale-105"
          sizes="237px"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(554, 272)
          )}`}
        />
      </Thumbnail>
    </Card>
  )
}

export function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="grid h-96 grid-cols-2 grid-rows-2 gap-3 md:grid-cols-3">
      <Card className="relative col-start-1 col-end-3 overflow-hidden rounded-2xl border-none shadow-md  md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3">
        {/* Button with photo number */}
        <div className="absolute bottom-2 left-4 z-20">
          <Thumbnail images={images}>
            <Button className="flex w-fit items-center gap-2 bg-background font-semibold text-b-accent hover:bg-b-accent hover:text-accent">
              <Camera className="h-5 w-5" strokeWidth="1.3"/> {images.length} photos
            </Button>
          </Thumbnail>
        </div>
        <Thumbnail images={images}>
          <Image
            alt="test"
            src={images[1]}
            width={1200}
            height={200}
            className="h-full w-full cursor-pointer object-cover transition-all duration-200 ease-in md:hover:scale-105"
            sizes="487px"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(554, 272)
            )}`}
          />
        </Thumbnail>
      </Card>

      {/* Reusable ImageContainer components */}
      <ImageContainer src={images[2]} images={images} index={2} />
      <ImageContainer src={images[3]} images={images} index={3} />
    </div>
  )
}
