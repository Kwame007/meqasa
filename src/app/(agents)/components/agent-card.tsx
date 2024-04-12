"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"

import { shimmer, toBase64 } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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

export function AgentCard({
  description,
  id,
  isVerified,
  listings,
  location,
  logo,
  name,
  socials,
  website,
}: AgentType) {
  console.log(logo)
  return (
    <Card className="overflow-hidden rounded-xl border text-b-accent md:p-3">
      <CardContent className="flex gap-3 p-0 md:gap-6">
        <CardHeader className="w-full max-w-[120px] p-0">
          <div className="h-[100px] w-full overflow-hidden rounded-xl shadow-sm md:max-h-[157px] md:border">
            <Link href={`agents/${id}`}>
              <Image
                className="h-full w-full object-cover"
                width={170}
                height={100}
                src={logo as string}
                alt={`${name} logo`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(554, 272)
                )}`}
                sizes="120px"
              />
            </Link>
          </div>
        </CardHeader>
        <div className="grow">
          <Link href={`agents/${id}`}>
            <h3 className="mb-1.5 text-base font-bold md:text-lg">{name}</h3>
          </Link>
          <p className="mb-2 flex w-full items-center gap-2 text-sm">
            <Icons.location className=" h-4 w-4 text-primary" />
            <span className="line-clamp-1 text-b-muted">{location}</span>
          </p>
          <div className="mb-4 flex items-center text-sm">
            <p>{listings} listings</p>
          </div>
          <p className="line-clamp-2 hidden text-sm text-b-muted md:block">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-4 hidden h-fit items-center justify-between p-0 md:flex">
        <div className="flex max-w-full items-center gap-3 md:justify-between">
          <Link href="/">
            <FacebookIcon className="h-5 w-5 text-b-muted transition md:hover:text-primary" />
          </Link>
          <Link href="/">
            <InstagramIcon className="h-5 w-5 text-b-muted transition md:hover:text-primary" />
          </Link>
          <Link href="/">
            <TwitterIcon className="h-5 w-5 text-b-muted transition md:hover:text-primary" />
          </Link>
          <Link href="/">
            <YoutubeIcon className="h-6 w-6 text-b-muted transition md:hover:text-primary" />{" "}
          </Link>
        </div>
        <ContactModal data={data?.agent}>
          <Button size="sm" className="rounded-sm font-semibold">
            Contact agent
          </Button>
        </ContactModal>
      </CardFooter>
    </Card>
  )
}
