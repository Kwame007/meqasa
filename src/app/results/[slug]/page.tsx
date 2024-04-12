import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/bread-crumbs"
import { PaginationDemo } from "@/components/pagination"
import { AdvanceSearchFilter } from "@/app/results/components/advance-search-filter"
import { FeaturedPropertyVariantCard } from "@/app/results/components/featured-variant-card"
import { PremiumPropertyCard } from "@/app/results/components/premium-card"
import { PremiumPlusPropertyCard } from "@/app/results/components/premium-plus-card"

import { CarouselPlugin } from "../components/premium-properties-carousel"

export default function ResultsPage() {
  return (
    <>
      <header>
        <Card className="relative hidden h-[320px] border-none shadow-none md:block">
          <Link
            href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
            target="_blank"
            rel="noreferrer"
            className=" "
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
      </header>
      <AdvanceSearchFilter />
      <div className="mt-6 gap-8 md:container md:flex">
        <aside className="hidden md:flex md:flex-col md:gap-3">
          <div className="">
            <ul className="w-max text-xs">
              <li className="mb-2">
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  House
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Apartments
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Office space
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Townhouses
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Warehouses
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Shops
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Commercial
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Retail
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Land
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                <Link
                  className="flex h-8 items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-none"
                  href="#"
                >
                  Guest houses
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <section>
          <aside className="px-4 md:px-0">
            <Breadcrumbs
              segments={[
                {
                  title: "Home",
                  href: "/",
                },
                {
                  title: `results`,
                  href: `/`,
                },
              ]}
            />
            <h1 className="mt-2 text-lg font-bold leading-6 text-b-accent md:text-xl">
              Property for sale in east legon
            </h1>
            <p className="mt-3 text-sm text-b-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              adipisci ullam deserunt est dolorem impedit ratione, ut blanditiis
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              adipisci ullam deserunt est dolorem impedit ratione, ut blanditiis
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              adipisci ullam deserunt est dolorem impedit ratione, ut blanditiis
            </p>
          </aside>

          <div className="mt-12 grid grid-cols-1 gap-8 px-4 md:grid-cols-[736px,1fr] md:px-0">
            <div>
              <aside>
                <Card className="relative h-[200px] w-full overflow-hidden border-0 md:h-[436px]">
                  <Link
                    href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="Luxury Real Estate Property"
                      src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=3434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fill
                      sizes=""
                      className="object-cover"
                      priority // Load this image with priority for faster rendering.
                    />
                  </Link>
                </Card>
              </aside>

              <section className="my-12">
                <CarouselPlugin>
                  <PremiumPlusPropertyCard />
                </CarouselPlugin>
              </section>

              <section className="pb-4">
                {" "}
                <FeaturedPropertyVariantCard />
              </section>

              <PremiumPropertyCard />
              <PremiumPropertyCard />
              <PremiumPropertyCard />
              <PremiumPropertyCard />

              <aside className="mb-8">
                <Card className="relative h-[100px] w-full overflow-hidden md:h-[250px]">
                  <Link
                    href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="Luxury Real Estate Property"
                      src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=3434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fill
                      sizes=""
                      className="object-cover"
                      priority // Load this image with priority for faster rendering.
                    />
                  </Link>
                </Card>
              </aside>

              <PremiumPropertyCard />
              <PremiumPropertyCard />
              <PremiumPropertyCard />
              <PremiumPropertyCard />

              <aside className="mb-8">
                <Card className="relative h-[100px] w-full overflow-hidden md:h-[250px]">
                  <Link
                    href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="Luxury Real Estate Property"
                      src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=3434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fill
                      sizes=""
                      className="object-cover"
                      priority // Load this image with priority for faster rendering.
                    />
                  </Link>
                </Card>
              </aside>

              <PremiumPropertyCard />
              <PremiumPropertyCard />
              <PremiumPropertyCard />
              <div className="mb-8">
                <PaginationDemo />
              </div>
            </div>
            <aside className="hidden md:flex md:flex-col md:gap-5">
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/1713849001"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/1445555057"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/1447715867"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/1893463354"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/1002474762"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/229025697"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
              <Card className="relative h-[450px] w-[225px] overflow-hidden">
                <Link
                  href="https://meqasa.com/follow-ad-1883?u=https://oneelm.quaorealty.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    alt="Luxury Real Estate Property"
                    src="https://dve7rykno93gs.cloudfront.net/pieoq/2008395566"
                    fill
                    sizes=""
                    className="object-contain"
                    priority // Load this image with priority for faster rendering.
                  />
                </Link>
              </Card>
            </aside>
          </div>
        </section>
      </div>
    </>
  )
}
