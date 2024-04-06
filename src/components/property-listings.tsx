"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PropertyCard from "@/components/property-card"

export default function PropertyListings({
  listings,
}: {
  listings: PropertyListing[]
}) {
  return (
    <Carousel
      className="w-full max-w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {listings.map((listing: PropertyListing) => (
          <CarouselItem
            key={listing.id}
            className="basis-[220px] md:basis-[256px]"
          >
            <PropertyCard {...listing} key={listing.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-6 hidden h-11 w-11 items-center justify-center bg-white text-b-accent shadow-md md:flex " />
      <CarouselNext className="right-6 hidden h-11 w-11  items-center justify-center bg-white text-b-accent shadow-md md:flex" />
    </Carousel>
  )
}
