import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { API_ENDPOINT } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AgentLogoCarousel } from "@/components/agent-logo-carousel"
import BannerGroup from "@/components/banner-group"
import FeaturedProperty from "@/components/featured-property"
import { SearchFilter } from "@/components/filter/search-filter"
import MarketNews from "@/components/market-news"
import { MobileAppBanner } from "@/components/mobile-app-banner"
import PropertyGuide from "@/components/property-guide"
import PropertyListings from "@/components/property-listings"
import RecommendedLocation from "@/components/recommended-location"

async function getFeaturedProperties(): Promise<FeaturedPropertiesType[]> {
  try {
    const res = await fetch(`${API_ENDPOINT}/projects`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return await res.json()
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

async function getLatestBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_ENDPOINT}/blogs`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return await res.json()
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

async function getLatestListings(): Promise<PropertyListing[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/listing?_start=0&_limit=10`)

    if (!response.ok) {
      throw new Error("Failed to fetch latest listings")
    }

    const listings = (await response.json()) as PropertyListing[]
    return listings
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

async function getRecommendedLocations(): Promise<RecommendedLocationType[]> {
  try {
    const res = await fetch(`${API_ENDPOINT}/neighborhoods`)

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const locations = await res.json()
    return locations
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

export default async function Home() {
  const featuredProperties = await getFeaturedProperties()
  const blogs = await getLatestBlogs()
  const listings = await getLatestListings()
  const recommendedLocations = await getRecommendedLocations()

  return (
    <>
      <Card className="relative max-h-[70px] overflow-hidden rounded-none border-0 lg:hidden">
        <Image
          width={400}
          height={200}
          alt="ad"
          src="https://dve7rykno93gs.cloudfront.net/pieoq/1467979242.webp"
          sizes="100wv"
          className="w-full object-cover"
        />
      </Card>

      <Card className="relative hidden h-[320px] overflow-hidden rounded-none border-0 lg:block">
        <Link
          href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
          target="_blank"
          rel="noreferrer"
          className="relative block h-full w-full"
        >
          <Image
            alt="Luxury Real Estate Property"
            src="https://dve7rykno93gs.cloudfront.net/assets4/img/hero-image.jpg"
            fill
            sizes="100wv"
            className="object-cover"
            priority // Load this image with priority for faster rendering.
          />
        </Link>
      </Card>

      <aside className="mt-8 px-3">
        <div className="mx-auto my-3 hidden max-w-fit items-center gap-8 rounded-lg px-2 py-1.5 hover:text-b-accent lg:flex">
          {siteConfig.popularLocations.map((str, i) => (
            <Badge
              className="flex h-[25px]  items-center bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-sm"
              key={i}
            >
              <Link href={"/"}>{str}</Link>
            </Badge>
          ))}
        </div>

        <SearchFilter />
      </aside>
      <section className="mt-8 hidden w-full px-3 lg:block">
        {/* @ts-ignore */}
        <AgentLogoCarousel />
      </section>
      <div className="container mt-8 flex px-0 lg:gap-8">
        <section className="w-full lg:max-w-[1143px] ">
          <Card className="relative mx-3 h-[200px] overflow-hidden rounded-xl border-0  lg:hidden">
            <Link
              href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10 "
            >
              <Image
                alt="Luxury Real Estate Property"
                src="https://dve7rykno93gs.cloudfront.net/assets4/img/hero-image.jpg"
                fill
                sizes="calc(100vw - 32px)"
                className="object-cover"
                priority // Load this image with priority for faster rendering.
              />
            </Link>
          </Card>

          {/* @ts-ignore */}
          <BannerGroup />

          <section className="mt-8 border-b lg:mt-20 lg:border-0">
            <div className="px-4 lg:p-0">
              <h2 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
                Featured Properties
              </h2>
            </div>
            <div className="overflow-y-hidden overflow-x-scroll">
              <div className="mt-4 grid grid-flow-col grid-cols-[0px_1fr_1fr_1fr_1fr_4px] gap-3 overflow-x-scroll lg:mt-8 lg:grid-flow-row lg:grid-cols-[repeat(2,minmax(0,1fr))] lg:gap-8">
                <div className="mb-4 lg:hidden" />
                {featuredProperties.map((property) => (
                  <div className="mb-4 p-1.5" key={property.href}>
                    {/* @ts-ignore */}
                    <FeaturedProperty property={property} />
                  </div>
                ))}
                <div className="mb-4 w-1 lg:hidden" />
              </div>
            </div>
          </section>

          <section className="mt-8 grid border-b lg:mt-20 lg:grid-cols-[736px_minmax(0,1fr)] lg:gap-8 lg:border-0">
            <div>
              {" "}
              <div className="flex items-center justify-between px-4 lg:border-b lg:p-0 lg:pb-4">
                <h2 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
                  Property Guides & Insights
                </h2>
                <Link href="/blog" className="font-bold text-b-blue">
                  See all
                </Link>
              </div>
              <div className="lg: mt-6 grid gap-8 px-4 lg:px-0">
                {blogs.map((blog) => (
                  <React.Fragment key={blog.href}>
                    {/* @ts-ignore */}
                    <PropertyGuide {...blog} />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <aside className="hidden lg:block">
              <h3 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:mb-8 lg:text-[23px] lg:font-extrabold">
                Market News
              </h3>
              <div>
                {Array.from({ length: 3 }).map((item, index) => (
                  <React.Fragment key={index}>
                    <MarketNews index={index} />
                  </React.Fragment>
                ))}
              </div>
            </aside>
          </section>
          <section className="mt-8 w-full border-b pb-8 lg:mt-20 lg:border-0 lg:py-0 lg:pb-0 ">
            <div className="mb-8 flex items-center justify-between px-4 lg:p-0 lg:pb-4">
              <h2 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
                Latest Listings
              </h2>
              <Link href="/blog" className="font-bold text-b-blue">
                See all
              </Link>
            </div>
            {/* @ts-ignore */}
            <PropertyListings listings={listings} />
          </section>

          <section className="mt-16 bg-slate-50 py-8  lg:py-10">
            <div className="px-0 lg:container">
              <div className="grid grid-cols-[1fr_70px] items-center  justify-between gap-8 px-4 lg:p-0">
                <h2 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
                  Choice Neighborhoods
                </h2>
                <Link
                  href="/blog"
                  className="block justify-self-end font-bold text-b-blue"
                >
                  See all
                </Link>
              </div>
              <div className="hidden lg:block">
                <p className="max-w-[700px] text-b-accent">
                  These neighborhoods are highly desirable for business, living,
                  and pleasure. Find out why!
                </p>
              </div>

              <div className="mt-8">
                <div className="overflow-x-scroll ">
                  <div className="grid grid-cols-[0px_1fr_1fr_1fr_1fr_4px] gap-3 overflow-x-scroll py-4 lg:grid-cols-4 lg:gap-8">
                    <div className="w-1 lg:hidden" />
                    {recommendedLocations.map((item) => (
                      <RecommendedLocation {...item} key={item.href} />
                    ))}
                    <div className="w-1 lg:hidden" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="my-8 grid items-center gap-6 px-4 text-sm leading-6 text-b-muted lg:text-base">
            <>
              <div>
                <p>
                  MeQasa is the number one real estate website in Ghana with
                  over 40,000 properties listed from over 230 developers and
                  over 2500 agents. MeQasa plays a crucial role in Ghana&apos;s
                  real estate sector by offering property seekers more choice
                  and property sellers more leads than any other site.
                </p>
                <p>
                  Looking for{" "}
                  <Link
                    href="/property-for-sale-in-accra"
                    className="font-semibold text-b-blue no-underline"
                  >
                    properties for sale{" "}
                  </Link>
                  or{" "}
                  <Link
                    href="/property-for-rent-in-accra"
                    className="font-semibold text-b-blue no-underline"
                  >
                    properties for rent
                  </Link>
                  ? Whatever your property needs, you&apos;re on the right
                  website.
                </p>
                <p>
                  From{" "}
                  <Link
                    href="/house-for-sale-in-accra"
                    className="font-semibold text-b-blue no-underline"
                  >
                    houses in Accra{" "}
                  </Link>
                  to{" "}
                  <Link
                    href="/apartment-for-sale-in-east-legon"
                    className="font-semibold text-b-blue no-underline"
                  >
                    apartments in East Legon
                  </Link>
                  , houses in Spintex to beach houses in Takoradi, MeQasa has
                  the right property for you.
                </p>
              </div>
              <div>
                <p>
                  Ghana&apos;s real estate landscape has evolved into a vast and
                  exciting space over the last decade. While there is still a
                  large under-supply of housing as compared to the needs of the
                  population, Ghana&apos;s capital city Accra offers an
                  impressive range of property that spans across all property
                  types and prices.
                </p>
              </div>
            </>
          </aside>
          <MobileAppBanner />
        </section>
        <aside className="hidden w-[225px] lg:flex lg:flex-col lg:gap-6">
          {Array.from({ length: 7 }).map((_, index) => (
            <React.Fragment key={index}>
              <Card className="relative h-[450px] max-h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                  className="relative block h-full w-full"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/56799905"
                    fill
                    sizes="225px"
                    className="h-full w-full object-cover"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
            </React.Fragment>
          ))}
        </aside>
      </div>
    </>
  )
}
