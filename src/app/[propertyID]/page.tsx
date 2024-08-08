import Image from "next/image"
import Link from "next/link"
import insightFloor from "@/../public/icons/insights_floorarea@3x.webp"
import insightPrice from "@/../public/icons/insights_price@3x.webp"
import noListings from "@/../public/nearby-listing-intro.webp"
import plan4 from "@/../public/plans/plan-4.webp"
import {
  Bath,
  BedIcon,
  Heart,
  LightbulbIcon,
  ParkingSquare,
  Square,
} from "lucide-react"

import {
  API_ENDPOINT,
  cn,
  createNumberFormatter,
  formatToGhsCurrency,
} from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Breadcrumbs } from "@/components/bread-crumbs"
import { ClientContactForm } from "@/components/client-contact-form"
import ContactFixed from "@/components/contact-fixed"
import { DynamicCarousel } from "@/components/DynamicCarousel"
import { Icons } from "@/components/icons"
import { PropertyUnitCard } from "@/components/property-unit-card"
import SafetyTipsCard from "@/components/safety-tips"
import LeaseOptions from "@/app/[propertyID]/components/lease-options"
import MortgageCalculator from "@/app/[propertyID]/components/mortgage-calculator"
import { PropertyDescription } from "@/app/[propertyID]/components/project-description"
import { PropertyAmenities } from "@/app/[propertyID]/components/property-amenities"
import { PropertyDetails } from "@/app/[propertyID]/components/property-details"
import { ImageGrid } from "@/app/[propertyID]/image-grid"

import { LoadingSkeleton } from "./components/loading-skeleton"

// Constants for styles and dimensions
const BADGE_CLASS = " bg-[#F0F6FF] shadow-sm uppercase text-blue-500 max-w-full"

export default async function Page({
  params,
}: {
  params: { propertyID: string }
}) {
  async function getPropertyDetails(id: string): Promise<PropertyListing[]> {
    try {
      const response = await fetch(`${API_ENDPOINT}/listing?id=${id}`, {
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }

      return await response.json()
    } catch (error: any) {
      throw new Error("Error")
    }
  }

  async function getSimilarListings(id: string): Promise<PropertyListing[]> {
    try {
      const formattedLocation = propertyDetails.location.replaceAll(" ", "%20")
      const url = `${API_ENDPOINT}/listing?location=${formattedLocation}&id_ne=${id}&_start=1`

      // Fetch data from the specified URL with revalidation every 3600 seconds (1 hour).
      const response = await fetch(url, {
        next: {
          revalidate: 3600,
        },
      })
      if (!response.ok) {
        throw new Error("Failed to fetch similar listings")
      }

      return await response.json()
    } catch (error: any) {
      throw new Error("Error")
    }
  }
  const [propertyDetails] = await getPropertyDetails(params.propertyID)

  //TODO: STREAM SIMILAR LISTINGS WITH SUSPENSE
  const similarListings = await getSimilarListings(params.propertyID)

  const content = similarListings.map((property) => (
    <PropertyUnitCard key={property.id} {...property} />
  ))

  // Amenities data
  const amenitiesData: AmenityData = propertyDetails?.amenities

  // Badges data
  const badgesData = {
    fullyFurnished: propertyDetails?.fullyFurnished,
    balcony: propertyDetails?.balcony,
    neighborhood: propertyDetails?.neighborhood,
    furnished: propertyDetails?.furnished,
    address: propertyDetails?.address,
    isDeveloper: propertyDetails?.isDeveloper,
  }

  // Define a mapping object for properties and their labels
  const propertyMappingsData = {
    fullyFurnished: "fully furnished",
    balcony: "balcony",
    neighborhood: (value: string) => value, // Use the actual neighborhood value
    furnished: "furnished",
    address: (value: string) => (propertyDetails.isDeveloper ? value : ""), // Display address only if not a developer
  }

  // category data
  const categoryData = {
    isDeveloper: propertyDetails?.isDeveloper,
    categories: propertyDetails?.categories,
    projectName: propertyDetails?.projectName,
  }

  return (
    <div>
      <header className="text-b-accent">
        <div className="container mt-4 hidden px-0 lg:block">
          <Breadcrumbs
            segments={[
              {
                title: "Home",
                href: "/",
              },
              {
                title: `Property-id-${params.propertyID}`,
                href: `/${params.propertyID}`,
              },
            ]}
          />
          <h1 className="my-2 text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
            {/* {propertyDetails?.title} */}
            Three Bedroom Luxury Home for Sale at East Legon Hills
          </h1>
        </div>
        <DynamicCarousel
          isDeveloper={propertyDetails?.isDeveloper}
          images={propertyDetails?.images}
        />
      </header>

      <div className="grid text-b-accent  lg:container lg:mt-6 lg:grid-cols-[2fr,1fr] lg:gap-8 lg:px-0">
        <div className="p-4 lg:hidden">
          <h2 className="text-[19px] font-bold lg:text-2xl">
            {propertyDetails?.title}
          </h2>
        </div>
        <div>
          <div className="px-4 lg:flex lg:items-start lg:justify-between lg:px-0">
            <div>
              <div className="item-center my-4 flex h-full gap-2 lg:mb-2 lg:mt-3 lg:justify-start">
                <div className="flex items-center">
                  <h2 className="text-[23px] font-bold lg:text-3xl">
                    {formatToGhsCurrency.format(7100000)}
                  </h2>
                  {"rent" === "rent" && (
                    <span className="ml-1 font-normal text-b-muted lg:text-xl">
                      /month
                    </span>
                  )}
                </div>

                <Badge className="h-fit bg-[#21c55d]  uppercase">
                  verified
                </Badge>
                {true && (
                  <Badge className="h-fit bg-primary uppercase">
                    Negotiable
                  </Badge>
                )}
              </div>

              <div className="mb-5 flex items-center justify-start gap-2 lg:mb-6">
                {Object.entries(amenitiesData).map(
                  ([key, value]) =>
                    value && (
                      <span key={key} className="flex items-center font-normal">
                        {getAmenityIcon(key)} {value} {getAmenityLabel(key)}
                      </span>
                    )
                )}
              </div>

              <div className="flex-wra flex items-center gap-2">
                {generateBadges(badgesData, propertyMappingsData)}
              </div>
            </div>
            <Button
              size="sm"
              className="hidden w-fit items-center gap-2 justify-self-end bg-b-accent px-2 text-xs hover:bg-b-accent lg:flex"
            >
              <Heart className="h-5 w-5" strokeWidth="1.3" /> Add to favorite
            </Button>
          </div>
          <aside>
            {propertyDetails?.viewCount > 1000 && (
              <div className="mt-8 flex items-center gap-8 border-y px-4 py-3 text-xs lg:px-0 lg:py-10 lg:text-base">
                <div>
                  <Icons.trend />
                </div>
                <div>
                  <p className="text-b-accent lg:font-semibold">
                    This property is popular
                  </p>
                  <p className="text-b-accent">
                    <span>{`It's been viewed ${createNumberFormatter().format(
                      propertyDetails?.viewCount
                    )} times.`}</span>
                    <span className="lg:font-semibold">
                      {" "}
                      Contact agent before it&apos;s gone!
                    </span>
                  </p>
                </div>
              </div>
            )}
          </aside>

          <aside className="px-4 lg:px-0">
            <Card className="mt-6 flex items-start justify-between gap-5 rounded-xl border-orange-200 px-4 py-6 text-b-accent lg:w-fit lg:px-6 lg:py-4">
              <Badge className="bg-orange-500 uppercase">
                {categoryData.isDeveloper ? "Project name" : "Categories"}
              </Badge>
              <div>
                {categoryData.isDeveloper ? (
                  <p className="font-semibold">{categoryData.projectName}</p>
                ) : (
                  categoryData.categories?.map((cat) => (
                    <Link
                      href={cat?.href}
                      className="block text-sm text-blue-500"
                      key={cat.href}
                    >
                      {cat?.label}
                    </Link>
                  ))
                )}
              </div>
            </Card>
          </aside>

          <section className="mt-8 px-4 text-b-accent lg:mt-20 lg:px-0">
            <SafetyTipsCard />
          </section>
          <section className="mt-8 px-4 text-b-accent lg:mt-20 lg:px-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Description
            </h2>
            <PropertyDescription description={propertyDetails.desc} />
          </section>

          <aside className="mt-8 border-y lg:mt-6 lg:border-none">
            {propertyDetails?.agent && (
              <div className="items-center px-4 py-6 lg:flex lg:gap-3 lg:p-0">
                <p className=" line-clamp-1 text-sm text-b-muted-dark lg:text-base lg:font-medium">
                  Listed by{" "}
                  <Link
                    href="/"
                    className="underline decoration-slate-300  decoration-dashed underline-offset-4 transition-colors hover:text-blue-500 hover:decoration-blue-500"
                  >
                    <span className="">{propertyDetails?.agent.name}</span>
                  </Link>
                </p>
              </div>
            )}
          </aside>

          <aside className=" mt-8 px-4 text-b-accent lg:p-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Explore more
            </h2>
            <ImageGrid images={propertyDetails.images} />
          </aside>

          <aside className="mt-16 border-y">
            <div className="items-center gap-8 p-4 lg:flex lg:px-0 lg:py-10">
              <div className="flex h-[66px] w-full items-center justify-center gap-4 rounded-lg bg-[#d7e9ff] px-4 lg:justify-between">
                <div className="hidden rounded-full bg-[#1e65ff] p-1 lg:block">
                  <Heart className="h-5 w-5 text-[#d7e9ff]" strokeWidth="1.3" />
                </div>
                <p className="text lg:font- w-full">
                  Like this property? Add as favorites and compare listings
                </p>
              </div>
            </div>
          </aside>

          <section className="mt-8 px-4 text-b-accent lg:mt-20 lg:px-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              {propertyDetails?.agent ? " Property video" : " Project video"}
            </h2>
            <Card className="flex h-[250px] overflow-hidden rounded-xl border-orange-300 lg:h-[400px]">
              <div className="grow p-4">
                {/* <Image
                  alt="floor plan"
                  src={plan4}
                  className="h-full w-full object-contain"
                /> */}
              </div>
            </Card>
          </section>

          <section className="mt-8 px-4 text-b-accent lg:mt-20 lg:px-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Details
            </h2>
            <PropertyDetails />
          </section>

          <LeaseOptions />

          <section className="mt-8 px-4 text-b-accent lg:mt-20 lg:px-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Amenities
            </h2>
            <PropertyAmenities cols="4" />
          </section>

          <section className="mt-8 px-4 text-b-accent lg:mt-20 lg:px-0">
            {propertyDetails.isDeveloper && (
              <>
                <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
                  Property Plan
                </h2>
                <Card className="flex h-[250px] overflow-hidden rounded-xl border-orange-300 lg:h-[400px]">
                  <div className="grow p-4">
                    <Image
                      alt="floor plan"
                      src={plan4}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Card>
              </>
            )}
          </section>

          <aside className="mt-16 border-y">
            <div className="px-4 py-8 lg:px-0">
              <div>
                <h3 className="mb-6 text-xl font-bold text-b-accent">
                  Property Insights
                </h3>
                <div className="flex items-center gap-6">
                  <Image
                    alt="icon"
                    src={insightPrice}
                    className="hidden h-8 w-8 object-cover lg:block"
                  />
                  <div>
                    <p className="font-light text-b-accent">
                      This property is priced{" "}
                      <span className="font-semibold">12% less</span> than the
                      average cost of one-bedroom rentals in Lakeside Estate.
                    </p>
                    <small className="text-sm text-b-muted-dark">
                      Avg. price: $3,200
                    </small>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <Image
                    alt="icon"
                    src={insightFloor}
                    className="hidden h-8 w-8 object-cover lg:block"
                  />
                  <div>
                    <p className="font-light text-b-accent">
                      This property measures{" "}
                      <span className="font-semibold">2% smaller</span> than the
                      average size of one-bedroom rentals in Lakeside Estate.
                    </p>
                    <small className="text-sm text-b-muted-dark">
                      Avg. size: 474 sqft
                    </small>
                  </div>
                </div>
              </div>
              <p className="mt-6 border-t border-border-b pt-3 text-xs text-b-muted-dark">
                The data presented reflects average rental prices and sizes for
                one-bedroom listings in Lakeside Estate as listed on meqasa.com.
              </p>
            </div>
          </aside>

          <aside className="mt-16 px-4 lg:hidden">
            {propertyDetails.type === "sale" && (
              <div className="mb-8 border-b border-border-b pb-8 lg:container lg:px-0">
                <h4 className="mb-6 text-xl font-bold text-b-accent">
                  Monthly mortgage
                </h4>
                <MortgageCalculator price={propertyDetails.price} />
              </div>
            )}
          </aside>
        </div>
        <aside className="relative h-full px-4 pb-1 pt-8 lg:px-0 lg:pt-0">
          <ClientContactForm
            data={propertyDetails?.agent || propertyDetails?.developer}
          />
        </aside>
      </div>

      <aside className="hidden px-0 py-8  lg:container lg:block">
        {propertyDetails.type === "sale" && (
          <>
            <h4 className="mb-6 text-xl font-bold text-b-accent">
              Monthly mortgage
            </h4>
            <MortgageCalculator price={propertyDetails.price} />
          </>
        )}
      </aside>

      <aside className="mt-8 hidden bg-slate-50 p-8 lg:block">
        <div className=" container">
          <ClientContactForm
            isVertical
            data={propertyDetails?.agent || propertyDetails?.developer}
          />
        </div>
      </aside>

      <section className="pt- my-6 grid max-w-full border-b-2 pb-4  lg:container lg:mb-0 lg:mt-16 lg:border-0">
        {similarListings.length !== 0 && (
          <div className="flex items-center justify-between px-4 lg:p-0 lg:pb-4">
            <h5 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
              Similar Listings
            </h5>
            <Link href="/blog" className="font-bold text-b-blue">
              See all
            </Link>
          </div>
        )}

        {similarListings.length > 2 ? (
          <div className="mt-8 overflow-x-scroll">
            <Carousel className="lg:mx-w-full w-full ">
              <CarouselContent>
                {similarListings.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-2/4 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <PropertyUnitCard {...item} key={item.id} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : (
          <div className="overflow-x-scroll">
            <div className="mt-8">
              <div className="overflow-x-scroll ">
                <div className="grid grid-cols-[4px_1fr_1fr_1fr_1fr_0px] gap-2 overflow-x-scroll lg:grid-cols-[256px_256px_256px_256px] lg:gap-8 lg:py-4">
                  <div className="w-1 lg:hidden" />
                  {similarListings.map((item) => (
                    <PropertyUnitCard {...item} key={item.id} />
                  ))}
                  <div className="w-1 lg:hidden" />
                </div>
              </div>
            </div>
          </div>
        )}

        {similarListings.length === 0 && (
          <div className="px-4 text-center  lg:max-w-lg lg:p-0">
            <h4 className="text-center text-lg font-semibold text-b-accent">
              Oh no, there are no more listings that match your criteria.
            </h4>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mb-4 block text-center text-b-blue"
              )}
            >
              Try checking out properties nearby?
            </Link>
            <>
              <Image
                src={noListings}
                alt="nothing found image"
                width={250}
                height={200}
                sizes="200px"
                className="mx-auto"
              />
            </>
          </div>
        )}
      </section>

      <ContactFixed />
    </div>
  )
}

// Get amenities icon
function getAmenityIcon(key: string) {
  switch (key) {
    case "beds":
      return (
        <BedIcon className="mr-1 h-5 w-5 text-[#787D9B]" strokeWidth="1.3" />
      )
    case "baths":
      return <Bath className="mr-1 h-5 w-5 text-[#787D9B]" strokeWidth="1.3" />
    case "garage":
      return (
        <ParkingSquare
          className="mr-1 h-5 w-5 text-[#787D9B]"
          strokeWidth="1.3"
        />
      )
    case "sqft":
      return (
        <Square className="mr-1 h-5 w-5 text-[#787D9B]" strokeWidth="1.3" />
      )
    // Add more cases for other amenities as needed
    default:
      return null // Return null if there's no matching icon
  }
}

// Get amenities by key
function getAmenityLabel(key: string) {
  switch (key) {
    case "beds":
      return "Beds"
    case "baths":
      return "Baths"
    case "garage":
      return "Parking"
    case "sqft":
      return "m²" // Square meters
    // Add more cases for other amenities as needed
    default:
      return "" // Return an empty string if there's no matching label
  }
}

//Function to generate badge component
function generateBadges(data: Badges, propertyMappings: PropertyMapping) {
  return Object.entries(data)
    .filter(([key, value]) => value && propertyMappings[key]) // Filter properties with truthy values
    .map(([key, value]) => {
      const mappingFunction = propertyMappings[key] as (value: string) => string
      return (
        <Badge key={key} className={BADGE_CLASS}>
          {typeof propertyMappings[key] === "function" ? (
            // @ts-ignore (error :type is not assignable to type )
            <>{mappingFunction(value)}</>
          ) : (
            <>{propertyMappings[key]}</>
          )}
        </Badge>
      )
    })
}
