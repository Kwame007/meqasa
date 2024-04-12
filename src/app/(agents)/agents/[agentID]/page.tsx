import {
  Building,
  FacebookIcon,
  InstagramIcon,
  Share2,
  TwitterIcon,
  YoutubeIcon
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ClientContactForm } from "@/components/client-contact-form"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { API_ENDPOINT } from "@/lib/utils"

// import { AgentProfileCard } from "@/components/agent/AgentProfileCard"
// import { ClientContactForm } from "@/components/developer/FormCard"

import { AgentPropertyCard } from "../../components/agent-property-card"
import { PropertyCard } from "../../components/property-card"

const properties = [
  {
    src: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "for rent",
    href: "/1",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "for sale",
    href: "/2",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "for rent",
    href: "/3",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "for sale",
    href: "/4",
  },
  {
    src: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "for rent",
    href: "/5",
  },
  {
    src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "for sale",
    href: "/6",
  },
]

async function getAllAgents(): Promise<AgentType[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/agents`, {
      next: {
        // revalidate after every hour
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
    }

    const agents = (await response.json()) as AgentType[]

    return agents
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

async function getAgent(agentID: string): Promise<AgentType> {
  try {
    const response = await fetch(`${API_ENDPOINT}/agents/${agentID}`, {
      next: {
        // revalidate after every hour
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
    }

    const agent = await response.json()
    return agent
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

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

type Params = {
  params: {
    agentID: string
  }
}

export async function generateStaticParams() {
  const agentsData: Promise<AgentType[]> = getAllAgents()
  const agents = await agentsData

  return agents.map((agent) => ({
    // always a string
    agentID: agent.id,
  }))
}

export default async function page({ params: { agentID } }: Params) {
  const agent = await getAgent(agentID)

  return (
    <div>
      <header className="h-[225px] gap-3 border-t-2 border-[#FD5372] md:flex md:h-[525px]">
        <div className="relative isolate flex h-full items-center justify-center shadow-sm md:w-[650px]">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="aspect-square rounded-md border bg-white p-4 shadow-sm">
            <Image
              alt="name"
              src="https://meqasa.com/fascimos/somics/72228706"
              width={50}
              height={50}
              className="h-[100px] w-[100px] object-cover"
            />
          </div>
        </div>
        <div className="hidden h-full w-full grid-cols-3 grid-rows-2 gap-1 md:grid">
          {properties.map((x, i) => (
            <PropertyCard key={i} {...x} />
          ))}
        </div>
      </header>
      <div className="px-3 pt-20 md:container md:px-0 ">
        <section className="grid md:grid-cols-[736px,1fr] md:gap-8">
          <div>
            <div className="text-b-accent">
              <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:gap-0">
                <div>
                  <h1 className="relative text-[23px] font-bold leading-5 text-b-accent md:leading-8">
                    Kenneth Earlvin Ofori
                    <Badge className="absolute -right-32  -top-2 inline-block bg-green-500 uppercase text-white">
                      verified agent
                    </Badge>
                  </h1>
                  <p className="text-l mt-2 flex items-center gap-2 text-b-muted">
                    <Icons.location className="h-4 w-4 text-b-primary" />{" "}
                    Trinity Junction, East Legon
                  </p>
                  <p className="text-l  mt-2 flex items-center gap-2 text-b-muted">
                    <Building className="h-4 w-4 text-b-primary" />
                    Sompa Properties
                  </p>
                </div>
                <Button size="icon" variant="outline">
                  <Share2 className="h-5 w-5 text-b-muted" />
                </Button>
              </div>
              <div className="my-8 flex max-w-full items-center gap-6 md:gap-3">
                <Link href="/">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href="/">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href="/">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="/">
                  <YoutubeIcon className="h-6 w-6" />{" "}
                </Link>
              </div>
              <div className="mb-10 grid grid-cols-3 divide-x border-y border-gray-100 px-2 py-8">
                <div>
                  <p className="font-semibold capitalize md:text-lg">
                    commission
                  </p>
                </div>
                <div>
                  <p className="text-center font-semibold capitalize md:text-lg">
                    rental :{" "}
                    <span className="font-medium text-b-muted">10%</span>
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="text-center font-semibold capitalize md:text-lg">
                    sale : <span className="font-medium text-b-muted">2%</span>
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="mb-4 text-xl font-semibold">About Kenneth</h2>
                <p className="text-b-muted">
                  {" "}
                  THE WHITE GROUP COMPANY LTD began operations in 2005. We are
                  well known for our distinguished leadership in real estate
                  development, sale, rental as well as property management. At
                  The White Group we believe everything is possible in achieving
                  success. We have so far provided and developed areas for
                  residential and commercial purposes in Ghana. We promise to
                  establish and maintain integrity through outlines of
                  communication. Our goal is to exhibit a positive attitude and
                  associate with others who share the same principle. Our
                  superior advantage is based on superior quality, information,
                  luxury, security and perfection is the hallmark of our
                  company. Our experience at The White Group Company is
                  indisputable, from design cutting edge facilities created in
                  collaboration with some of the world&apos;s most renowned
                  architects to the flawless interior design exclusively for our
                  clients. We are committed to providing unparalleled quality
                  service with the highest degree of professionalism. At The
                  White Group, we offer a specialized suite of realty services
                  to cater to the demands of our clients. Our service listings
                  include; Property rentals, land sales/leasing, properties
                  sales, property management, development [commercial real
                  estate], renovations, property listings, concierge services.
                </p>
              </div>
              <div className="mb-10 border-b border-gray-100 pb-8">
                <p className="text-lg font-semibold capitalize">
                  Experience :{" "}
                  <span className="inline-block font-medium lowercase text-b-muted">
                    13 years
                  </span>
                </p>
              </div>
              <h4 className="mb-6 text-lg font-bold text-b-accent">
                Listings By Broll Ghana LTD (786)
              </h4>
            </div>
            {Array.from({ length: 10 }).map((_, index) => (
              <AgentPropertyCard key={index} />
            ))}
          </div>
          {/* Vertical form */}
          <aside className="relative mb-5 pb-8 md:mb-0">
            <ClientContactForm data={data?.agent} />
          </aside>
        </section>
      </div>
    </div>
  )
}
