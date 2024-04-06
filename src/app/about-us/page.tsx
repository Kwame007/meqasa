import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart } from "lucide-react"

import { shimmer, toBase64 } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="bg-muted-100 min-h-full">
          <div className="my-8 flex flex-col gap-8 p-4 md:container md:flex-row">
            <div className="w-full">
              <h1 className="mb-6 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-3xl md:font-extrabold">
                About Us
              </h1>

              <p className="mb-6 text-b-muted">
                meQasa helps you find residential and commercial property to
                rent or buy in Ghana. Our website features thousands of options
                in the capital of Accra, Tema, and the other regions, whether
                you are looking to buy or rent a new home or office space.
                meQasa is your total solutions partner as you go through your
                property search, offering countless housing alternatives as well
                as offline support and expert advice on the real estate industry
                in Ghana.
              </p>

              <h2 className="mb-6 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-[24px] md:font-bold">
                Our Mission
              </h2>

              <p className="mb-6 text-b-muted">
                We collaborate with brokers, owners, and tenants to create
                complete and dynamic property profiles. We advertise online all
                adequately profiled properties that are vacant. meQasa
                facilitates communication and meetings between prospective
                tenants and owners or their representatives.
              </p>

              <h2 className="mb-6 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-[24px] md:font-bold">
                Our Vision
              </h2>

              <p className="text-b-muted">
                meQasa is working toward an efficient housing search experience
                in Africa primarily for prospective tenants. We aspire to be the
                source of reliable information on housing in Africa.
              </p>
            </div>
            <aside className="pt-3 md:px-0">
              <h3 className="mb-6 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-[20px] md:font-bold">
                Featured properties
              </h3>{" "}
              {Array.from({ length: 4 }).map((_, i) => (
                <React.Fragment key={i}>
                  <Card className="mb-6 rounded-xl border-0 shadow md:w-[500px] md:border  md:shadow-sm">
                    <CardContent className="flex flex-col items-start gap-4 p-0 md:flex-row md:p-3">
                      <div className="relative min-h-[110px] w-full rounded-xl md:min-w-[150px]">
                        <Link href="/3" className="absolute inset-0 z-10">
                          <Image
                            className="h-[110px] w-full  rounded-xl object-cover"
                            width={150}
                            height={130}
                            src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=3267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Your alt text"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                              shimmer(150, 130)
                            )}`}
                            sizes="150px"
                          />
                        </Link>
                      </div>
                      <div className="line-clamp-3  grid min-h-[110px]  px-3 pb-3 text-b-accent md:p-0">
                        <h4 className="text-base font-bold">
                          East legon American house{" "}
                        </h4>
                        <p className="line-clamp-3 text-sm font-light text-b-accent">
                          Plots are locate in Prampram which is in about 6–8
                          minutes’ Lorem ipsum dolor sit amet Lorem ipsum dolor
                          sit amet Lorem ipsum dolor sit amet.
                        </p>
                        <div className="flex items-center gap-1 pt-2 text-sm text-b-muted">
                          <span>2 Beds</span>
                          <Icons.dot />
                          <span>2 Baths</span>
                          <Icons.dot />
                          <span>3 Parking</span>
                          <Icons.dot />
                          <span>300 m²</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </React.Fragment>
              ))}
            </aside>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
