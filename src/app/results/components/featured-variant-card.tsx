"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { shimmer, toBase64 } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function FeaturedPropertyVariantCard() {
  return (
    <Card className="relative mb-4 h-[321px] w-full overflow-hidden rounded-2xl text-b-accent border-none">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "linear-gradient( rgba(0,0,0,0.1), rgba(0,0,0,0.8))",
        }}
      />
      <CardContent className="p-0">
        <Image
          className=" h-[321px] rounded-2xl object-cover"
          width={1028}
          height={321}
          src="https://images.unsplash.com/photo-1694032593958-2d018f015a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
          alt="Your alt text"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(728, 321)
          )}`}
          sizes="728px"
        />

        <div className=" absolute inset-0 rounded-2xl">
          <Badge className="absolute left-4 top-4 z-30 bg-b-border-ongoing uppercase">
            Ongoing
          </Badge>

          <div className="absolute inset-x-4 bottom-4 z-20">
            <div className="flex items-end justify-between">
              <div className="text-white">
                <h2 className=" md:text-xl font-bold">
                  <Link href="/developer/project/2" className="">
                    The Lennox Development Project
                  </Link>
                </h2>

                <div className="flex items-center text-sm md:text-base gap-1 pt-2 text-[#E4E5EA]">
                  <span>Airport Residential</span>
                  <Icons.dot />
                  <span>Accra</span>
                </div>
                <div className="text-sm md:text-base text-[#E4E5EA]">
                  <p>1,2,3 Bedrooms</p>
                </div>
                <Button className="mt-3">View project</Button>
              </div>
              <div className="flex items-end">
                <Image
                  src="https://dve7rykno93gs.cloudfront.net/fascimos/somics/1263632747"
                  alt={"project"}
                  width={100}
                  height={100}
                  className="h-14 w-14 md:h-auto md:w-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
