"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Tooltip } from "@radix-ui/react-tooltip"
import { Dot, Heart, Phone } from "lucide-react"

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

export function PremiumPlusPropertyCard() {
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <Card className="mb-8 flex h-fit min-w-[256px] flex-col gap-4 rounded-2xl border-none text-b-accent shadow">
      <CardHeader className="p-0">
        <div className="relative min-w-[256px] rounded-2xl lg:min-h-[202px]">
          <Link href="/2" className="absolute inset-0 z-10"></Link>
          <Image
            className="h-[202px] w-full rounded-t-2xl object-cover lg:h-[279px] lg:rounded-none lg:rounded-t-2xl"
            width={1028}
            height={279}
            src="https://images.unsplash.com/photo-1648366320948-8d34e24a341e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Your alt text"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(728, 279)
            )}`}
            sizes="728px"
          />
          <div className=" absolute inset-0 rounded-2xl ">
            <Badge className="absolute left-4 top-4 z-20 bg-primary uppercase">
              Premium Plus
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
          </div>
        </div>
      </CardHeader>
      <CardContent className=" flex flex-col items-start p-0 px-4">
        <h3 className="font-extrabold lg:text-lg ">
          <Link
            href="/2"
            title=" 1 Bedroom Furnished Apartment For Rent At East Legon"
          >
            1 Bedroom Furnished Apartment For Rent At East Legon
          </Link>
        </h3>
        <div className="flex items-center pt-2 font-light">
          <span>2 Beds</span>
          <Dot className="h-4 w-4" />
          <span>2 Baths</span>
          <Dot className="h-4 w-4" />
          <span>3 Parking</span>
          <Dot className="h-4 w-4" />
          <span>300 m²</span>
        </div>
        <div className="flex h-fit items-center gap-2 pt-3">
          <p className="text-base font-bold">
            GHS 27,500{" "}
            <span className="text-sm font-normal text-b-muted">/month</span>
          </p>
          {/* <Dot className="h-4 w-4" />
          <Badge className="bg-[#21c55d] uppercase">verified agent</Badge> */}
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2 p-4">
        <>
          <Avatar className="flex items-center rounded-full border text-b-accent shadow">
            <AvatarImage
              src="https://dve7rykno93gs.cloudfront.net/uploads/imgs/7270c01718abf4e0ee2e712a4ea81144"
              className="rounded-full object-contain"
            />
            <AvatarFallback className="flex items-center justify-center rounded-full border bg-slate-50 text-sm font-bold text-inherit">
              WD
            </AvatarFallback>
          </Avatar>
        </>

        <div className="hidden lg:block">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <span className="line-clamp-1 w-44 text-center text-xs text-b-muted lg:text-sm">
                  Updated 2 days ago
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p> Updated Today 23rd september 2023</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex h-full grow justify-end">
          <div className="flex items-center gap-2">
            <ContactModal data={data?.agent}>
              <Button
                variant="secondary"
                size="icon"
                className="flex items-center gap-1.5  font-semibold text-b-accent"
              >
                <Phone className="h-4 w-5" />
                {/* Contact agent */}
              </Button>
            </ContactModal>
            <div>
              <Link
                href="/2"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-32 font-semibold"
                )}
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
