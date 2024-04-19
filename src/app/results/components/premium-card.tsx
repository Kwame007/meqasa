"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Tooltip } from "@radix-ui/react-tooltip"
import { Camera, Dot, Heart, Phone } from "lucide-react"

import { cn, shimmer, toBase64 } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ContactModal from "@/components/contact-modal"
import { Icons } from "@/components/icons"

const data = {
  title:
    "Executive 3 Bedroom fully furnished Apartment For Rent At Airport Residential at @villagioresidence",
  price: "50500",
  type: "rent",
  location: "Airport Residential Area",
  images: [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3277&q=80",
    "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/27843100",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/27843101",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/27843104",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/27843108",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/27843109",
  ],
  amenities: {
    beds: "3",
    baths: "3",
    sqft: "3500",
  },
  desc: "fully furnished living room and fitted kitchen with oven/microwave/cooker/double door fridge freezer/blender/cooking utensils/plates and cutlery setBalcony Fitted wardrobes Hot Water available in bathrooms and kitchen 247 Water supply Security entry doors Air condition in all areas including bedrooms and living room Communal Swimming pool 247 security services Outdoor playgrounds for children fully furnished living room and fitted kitchen with oven/microwave/cooker/double door fridge freezer/blender/cooking utensils/plates and cutlery setBalcony Fitted wardrobes Hot Water available in bathrooms and kitchen 247 Water supply Security entry doors Air condition in all areas including bedrooms and living room Communal Swimming pool 247 security services Outdoor playgrounds for children",
  categories: [
    {
      label: "Apartment for Rent",
      href: "https://meqasa.com/apartments-for-rent-in-ghana",
    },
    {
      label: "Apartment for Rent in Airport Residential Area",
      href: "https://meqasa.com/apartments-for-rent-in-Airport%20Residential%20Area",
    },
  ],
  negotiable: true,
  furnished: true,
  address: "Airport Residential Area",
  reference: "298947",
  id: "3",
  amenity: {
    ac: true,
    microwave: true,
    pool: true,
    cooker: true,
    internet: true,
    security: true,
    washer: true,
    cable: true,
    gen: true,
    garage: true,
    fridge: true,
    water: true,
  },
  agent: {
    name: "ALFREDO PROPERTIES",
    phone: "0243256738",
    email: "alfredoproperties@gmail.com",
    logo: "https://meqasa.com/fascimos/somics/539218271",
  },
  viewCount: 500,
}

export function PremiumPropertyCard() {
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <Card className="mb-8 flex flex-col gap-4 rounded-2xl border-0 text-b-accent shadow lg:flex-row lg:border lg:border-[##fea3b1] lg:p-4 lg:shadow-sm">
      <CardHeader className="min-w-[256px] p-0">
        <div className="relative min-h-[202px] min-w-[256px] rounded-2xl">
          <Link href="/3" className="absolute inset-0 z-10">
            <Image
              className="h-[202px] w-full rounded-t-2xl  object-cover lg:rounded-2xl"
              width={256}
              height={202}
              src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=3267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              Premium
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
            <Button className="absolute bottom-4 right-4 h-6 w-12 bg-white p-0 text-xs uppercase shadow-none hover:bg-white">
              <Camera
                className="mr-1 h-5 w-5 text-b-accent"
                strokeWidth="1.3"
              />
              <p className="font-bold text-b-accent">10</p>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between px-4 pb-4 lg:p-0">
        <h3 className="font-bold lg:text-lg ">
          <Link href="/3">
            1 Bedroom Furnished Apartment For Rent At East Legon
          </Link>
        </h3>
        <div className="flex h-fit items-center gap-2 pt-3">
          <p className="text-base font-semibold">
            GHS 27,500{" "}
            <span className="text-sm font-normal text-b-muted">/month</span>
          </p>
          <Dot className="h-4 w-4" />
          <Badge className="bg-[#21c55d] uppercase">verified agent</Badge>
        </div>
        <p className="line-clamp-2 pt-3 text-sm text-b-muted">
          The Signature Apartments is strategically situated in the heartof
          Accra at Tetteh Quarshie with easy Tetteh Quarshie heart of Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Possimus, qui
          eaque rem quae perspiciatis aliquid exercitationem ipsam ullam fuga
          porro. Facere enim ut, veritatis eum illo sint fuga nesciunt quisquam.
        </p>
        <div className="flex items-center gap-1 pt-2 text-sm">
          <span>2 Beds</span>
          <Dot className="h-4 w-4" />
          <span>2 Baths</span>
          <Dot className="h-4 w-4" />
          <span>3 Parking</span>
          <Dot className="h-4 w-4" />
          <span>300 m²</span>
        </div>

        <CardFooter className="mt-3 flex items-center justify-between p-0 ">
          <div className="flex items-center gap-2">
            <Avatar className="flex h-11 w-11 items-center rounded-full text-b-accent shadow-sm">
              <AvatarImage
                src="https://dve7rykno93gs.cloudfront.net/uploads/imgs/7270c01718abf4e0ee2e712a4ea81144"
                className="rounded-full border border-gray-50 object-contain"
              />
              <AvatarFallback className="flex h-11 w-11 items-center justify-center rounded-full border bg-slate-50 text-sm font-bold text-inherit">
                WD
              </AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <span className="line-clamp-1 w-fit text-left text-sm text-b-muted">
                      Updated today
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> Updated Today 23rd september 2023</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ContactModal data={data?.agent}>
              <Button
                variant="secondary"
                className="flex items-center gap-1.5  font-semibold text-b-accent"
                size="sm"
              >
                <Phone className="h-4 w-4" />
                {/* Contact agent */}
              </Button>
            </ContactModal>
            <div>
              <Link
                href="/2"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "w-32 font-semibold"
                )}
              >
                View details
              </Link>
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
