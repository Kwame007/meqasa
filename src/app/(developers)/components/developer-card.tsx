"use client"

import {
  Dot,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import ContactModal from "@/components/contact-modal"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { shimmer, toBase64 } from "@/lib/utils"

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

export function DeveloperCard({
  cover,
  description,
  id,
  location,
  logo,
  name,
  projects,
  socials,
  units,
  website,
}: DeveloperType) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border-0 text-b-accent shadow md:border md:p-3 md:shadow-sm">
      <CardContent className=" flex flex-col gap-3 p-0 md:flex-row">
        <div className="flex w-full flex-col md:min-w-[200px] md:max-w-[200px]">
          <div className="w-full rounded-md">
            <Link href={`developers/${id}`}>
              <Image
                className="h-[150px] w-full rounded-xl object-cover md:h-full"
                width={200}
                height={100}
                src={cover}
                alt={`${name} cover image`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(200, 150)
                )}`}
                sizes="120px"
              />
            </Link>
          </div>
          <div className="mt-3 flex w-full items-center gap-3 p-3 text-b-muted md:p-0">
            {socials.facebook && (
              <Link href="/">
                <FacebookIcon className="h-5 w-5 transition md:hover:text-primary" strokeWidth="1.3" />
              </Link>
            )}
            {socials.instagram && (
              <Link href="/">
                <InstagramIcon className="h-5 w-5 transition md:hover:text-primary" strokeWidth="1.3"/>
              </Link>
            )}
            {socials.twitter && (
              <Link href="/">
                <TwitterIcon className="h-5 w-5 transition md:hover:text-primary" strokeWidth="1.3"/>
              </Link>
            )}
            {socials.linkedin && (
              <Link href="/">
                <LinkedinIcon className="h-5 w-5 transition md:hover:text-primary" strokeWidth="1.3"/>
              </Link>
            )}
            {socials.youtube && (
              <Link href="/">
                <YoutubeIcon className="h-5 w-5 transition md:hover:text-primary" strokeWidth="1.3"/>{" "}
              </Link>
            )}
          </div>
        </div>
        <div className="grow p-3 pt-0 ">
          <div className="flex">
            <div className="grow">
              <Link href={`developers/${id}`}>
                <h3 className="mb-1.5 text-base font-bold md:text-lg">
                  {name}
                </h3>
              </Link>
              <div className="mb-1.5 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" strokeWidth="1.3"/>{" "}
                <p className="line-clamp-1 text-sm text-b-muted">{location}</p>
              </div>
              <div className="mb-2 flex items-center gap-1.5 text-sm font-medium md:text-base">
                <span>{units.length} units</span>
                <Dot />
                <span>{"1"} projects</span>
              </div>
            </div>
            <div className="max-h-[60px] w-full max-w-[60px] overflow-hidden rounded-md border shadow-sm">
              <div className="h-full w-full">
                <Image
                  className="h-full w-full rounded-sm object-contain"
                  width={170}
                  height={100}
                  src={logo}
                  alt={`${name} logo`}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(100, 88)
                  )}`}
                  sizes="120px"
                />
              </div>
            </div>
          </div>
          <p className="line-clamp-2 text-sm text-b-muted">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-3 p-3">
        <div className="flex h-fit w-full items-end justify-end">
          <ContactModal data={data?.agent}>
            <Button className="w-full">Contact agent</Button>
          </ContactModal>
        </div>
      </CardFooter>
    </Card>
  )
}
