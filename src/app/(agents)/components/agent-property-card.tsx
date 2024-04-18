"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Camera, Clock, Dot, Heart, ImageIcon } from "lucide-react"

import { shimmer, toBase64 } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function AgentPropertyCard() {
  const [isFavorite, setIsFavorite] = React.useState(false)
  return (
    <Card className="mb-8 flex w-full flex-col gap-4 overflow-hidden rounded-xl border-0 text-b-accent shadow md:flex-row md:rounded-2xl md:border md:p-3 md:shadow-sm">
      <CardHeader className="relative p-0 md:min-w-[256px]">
        <div className="relative min-h-[202px] min-w-[256px] rounded-2xl">
          <Link href="/2" className="absolute inset-0 z-10">
            <Image
              className="h-[202px] w-full rounded-t-md object-cover md:rounded-xl"
              width={256}
              height={202}
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
              alt="Your alt text"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(256, 202)
              )}`}
              sizes="256px"
            />
          </Link>
          <div className=" absolute inset-0 rounded-2xl">
            <Badge className="absolute left-4 top-4 z-30 h-6 bg-b-accent uppercase">
              For sale
            </Badge>

            <Button
              size="icon"
              className="absolute right-4 top-4 z-30 bg-white text-[10px] uppercase shadow-none transition hover:bg-white"
              onClick={() => setIsFavorite((prev) => !prev)}
            >
              {isFavorite ? (
                <Icons.heartFilled className="h-5 w-5 text-[#E11D47]" />
              ) : (
                <Heart className="h-5 w-5 text-[#E11D47]" strokeWidth="1.3" />
              )}
            </Button>
            <Badge className="absolute bottom-4 right-4 z-20 bg-white uppercase  hover:bg-white">
              <Camera
                className="mr-1 h-5 w-5 text-b-accent"
                strokeWidth="1.3"
              />
              <p className="font-bold text-b-accent">10</p>
            </Badge>
          </div>
        </div>
      </CardHeader>
      <div className=" flex flex-col justify-between p-3 pt-0 md:p-0">
        <Link href="/2" className="relative z-10">
          <h3 className="font-bold">
            1 Bedroom Furnished Apartment For Rent At East Legon
          </h3>
        </Link>
        <p className="pt-3 font-semibold">
          GH₵27,500{" "}
          <span className="text-sm font-normal text-b-muted">/ month</span>
        </p>
        <p className="line-clamp-2 pt-3 text-sm text-b-muted">
          The Signature Apartments is strategically situated in the heartof
          Accra at Tetteh Quarshie with easy Tetteh Quarshie heart of Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Possimus, qui
          eaque rem quae perspiciatis aliquid exercitationem ipsam ullam fuga
          porro. Facere enim ut, veritatis eum illo sint fuga nesciunt quisquam.
        </p>

        <div className="flex items-center gap-1 py-2 text-sm">
          <span>2 Beds</span>
          <Dot className="h-4 w-4" />
          <span>2 Baths</span>
          <Dot className="h-4 w-4" />
          <span>3 Parking</span>
          <Dot className="h-4 w-4" />
          <span>300 m²</span>
        </div>
        <div className="flex items-center gap-2 text-b-muted">
          <Clock className="h-5 w-5" strokeWidth="1.3" />
          <span className="text-sm">Updated Today</span>
        </div>
      </div>
    </Card>
  )
}
