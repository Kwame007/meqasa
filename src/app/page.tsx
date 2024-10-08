import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { API_ENDPOINT } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card"
import { AgentLogoCarousel } from "@/components/agent-logo-carousel"
import BannerGroup from "@/components/banner-group"
import FeaturedProjectsCarousel from "@/components/featured-projects-carousel"
import FeaturedProperty from "@/components/featured-property"
import { SearchFilter } from "@/components/filter/search-filter"
import { LayoutGrid } from "@/components/layout-grid"
import MarketNews from "@/components/market-news"
import { MobileAppBanner } from "@/components/mobile-app-banner"
import PropertyGuide from "@/components/property-guide"
import PropertyListings from "@/components/property-listings"
import RecommendedLocation from "@/components/recommended-location"

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
]

async function getAgentsLogos(): Promise<AgentLogo[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/agencies`, {
      next: {
        // revalidate after every hour
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
    }

    const logos = (await response.json()) as AgentLogo[]

    return logos
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

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
  const agentsLogos = await getAgentsLogos()
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

      <aside className=" relative z-40 mt-8 px-3 md:-mt-24">
        <SearchFilter />
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
      </aside>
      <section className="my-16 hidden w-full px-3 lg:block">
        {/* @ts-ignore */}
        {/* <AgentLogoCarousel agentLogos={agentsLogos} /> */}
        <InfiniteMovingCards
          items={agentsLogos}
          direction="right"
          speed="slow"
        />
      </section>
      <div className="mt-8 flex px-0 lg:mx-auto lg:max-w-[1400px] lg:gap-8">
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
          {/* <BannerGroup /> */}
          <LayoutGrid
            cards={[
              {
                id: 1,
                content: <div>test</div>,
                className: "",
                thumbnail:
                  "https://dve7rykno93gs.cloudfront.net/pieoq/1072750400.webp",
              },
              {
                id: 2,
                content: <div>test</div>,
                className: "",
                thumbnail:
                  "https://dve7rykno93gs.cloudfront.net/pieoq/1027645745.webp",
              },
              {
                id: 3,
                content: <div>test</div>,
                className: "",
                thumbnail:
                  "https://dve7rykno93gs.cloudfront.net/pieoq/1093075785.webp",
              },
            ]}
          />

          <section className="mt-8 border-b lg:mt-20 lg:border-0">
            <div className="mb-8 flex items-center justify-between px-4 lg:p-0 lg:pb-4">
              <h2 className="text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
                Featured Projects
              </h2>
              <Link href="/developments" className="font-bold text-b-blue">
                See all
              </Link>
            </div>
            <FeaturedProjectsCarousel featuredProperties={featuredProperties} delay={5000}/>
            <div className="my-10 md:my-20"/>
            <FeaturedProjectsCarousel featuredProperties={featuredProperties} delay={7000}/>
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

          <section className="mt-16 bg-slate-50 lg:py-10">
            <div className="px-0 lg:mx-auto lg:max-w-[1400px]">
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
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/436366937"
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
