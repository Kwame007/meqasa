import Image from "next/image"
import Link from "next/link"

import { Breadcrumbs } from "@/components/bread-crumbs"
import Filter from "@/app/(developers)/components/developer-filter"

import DeveloperProjectCard from "../components/developer-project-card"

const devLogos = [
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1510531704",
    label: "Requs",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1993021403",
    label: "Rosgy",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1779655485",
    label: "Nilla Tells Group",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/702648907",
    label: "Nilla Tells Group",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1374038365",
    label: "ExpatGH",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1027762878",
    label: "Aenes",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/143613684",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1258582779",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/2012158449",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1498153523",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1510531704",
    label: "Requs",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1993021403",
    label: "Rosgy",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1779655485",
    label: "Nilla Tells Group",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/702648907",
    label: "Nilla Tells Group",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1374038365",
    label: "ExpatGH",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1027762878",
    label: "Aenes",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/143613684",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1258582779",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/2012158449",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1498153523",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1510531704",
    label: "Requs",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1993021403",
    label: "Rosgy",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1779655485",
    label: "Nilla Tells Group",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/702648907",
    label: "Nilla Tells Group",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1374038365",
    label: "ExpatGH",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1027762878",
    label: "Aenes",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/143613684",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1258582779",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/2012158449",
    label: "Med property",
    href: "agent-name",
  },
  {
    src: "https://dve7rykno93gs.cloudfront.net/fascimos/somics/1498153523",
    label: "Med property",
    href: "agent-name",
  },
]
const loc = [
  "Shiashie",
  "Cantonments",
  "Accra-Tema Motoway",
  "Accra",
  "Adenta",
  "Oyarifa",
  "East Legon Hills",
  "Airport Residential",
  "Ringway Estates",
  "Ridge",
  "Sakumono",
  "Trassaco",
]

export default function page() {
  const developments = [
    {
      name: "Cantonments City Tower",
      status: "completed",
      img: "https://images.prismic.io/99-content/0fa751aa-4189-4c19-b2f3-8241bf42ed02_altura.jpg?auto=compress,format&width=512",
      location: "Cantonments",
      logo: "https://meqasa.com/uploads/imgs/77f6b723e76645fb2b9314493c988ea2",
    },
    {
      name: "pwc Tower",
      status: "completed",
      img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3265&q=80",
      location: "Cantonments",
      logo: "https://meqasa.com/uploads/imgs/c4085edb510333529100aefe69f2e93b",
    },
    {
      name: "oko beachview",
      status: "ongoing",
      img: "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      location: "Osu",
      logo: "https://meqasa.com/uploads/imgs/c91e664662452e3d8045a4aab77fbcd8",
    },
    {
      name: "Paradise Estate",
      status: "ongoing",
      img: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3421&q=80",
      location: "East Legon Hills",
      logo: "https://meqasa.com/uploads/imgs/bad5eded523f5e4695f26059d038f332",
    },
    {
      name: "Oyarifa Park",
      status: "completed",
      img: "https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      location: "Oyarifa",
      logo: "https://meqasa.com/uploads/imgs/e276c38f2f370d659be950b847148af6",
    },
    {
      name: "LibiPrime",
      status: "completed",
      img: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      location: "Tema",
      logo: "https://meqasa.com/uploads/imgs/c91e664662452e3d8045a4aab77fbcd8",
    },
    {
      name: "The Essence ",
      status: "completed",
      img: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3348&q=80",
      location: "Airport City",
      logo: "https://meqasa.com/uploads/imgs/e276c38f2f370d659be950b847148af6",
    },
    {
      name: "The Pavilion",
      status: "completed",
      img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      location: "Cantonments",
      logo: "https://meqasa.com/uploads/imgs/7270c01718abf4e0ee2e712a4ea81144",
    },
    {
      name: "Harmonia Residence",
      status: "ongoing",
      img: "https://images.unsplash.com/photo-1633683914992-ded93eb8b18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3286&q=80",
      location: "Airport West",
      logo: "https://meqasa.com/uploads/imgs/77f6b723e76645fb2b9314493c988ea2",
    },
    {
      name: "THE PRECINCT                                            ",
      status: "ongoing",
      img: "https://images.unsplash.com/photo-1626222628055-fb92dd194160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3348&q=80",
      location: "Trasacco",
      logo: "https://meqasa.com/uploads/imgs/7270c01718abf4e0ee2e712a4ea81144",
    },
    {
      name: "THE RHOMBUS",
      status: "completed",
      img: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3281&q=80",
      location: "Kanda",
      logo: "https://meqasa.com/uploads/imgs/c4085edb510333529100aefe69f2e93b",
    },
    {
      name: "EMBASSY GARDENS ",
      status: "completed",
      img: "https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      location: "Cantonments",
      logo: "https://meqasa.com/uploads/imgs/c91e664662452e3d8045a4aab77fbcd8",
    },
  ]
  return (
    <>
      <div className="relative hidden h-[320px] lg:block">
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
      </div>

      <div className=" mt-2 px-3 lg:container ">
        <div className=" mt-24 text-b-accent lg:mt-8">
          <Breadcrumbs
            segments={[
              {
                title: "Home",
                href: "/",
              },
              {
                title: `developments`,
                href: `/developments`,
              },
            ]}
          />
          <h1 className="mt-3 text-xl font-bold leading-tight tracking-tighter text-b-accent lg:text-[28px] lg:font-extrabold">
            Developments For Sale In Ghana
          </h1>
          <p className="mt-2 font-light">
            Ghana keeps on growing in economics and supply of real estate
            assets. This is making Ghana one of Africa&apos;s most interesting
            markets for investors. The following are some of the Estate
            Developers in Accra and on meqasa.com, some of whom are the top real
            estate companies in Ghana.
          </p>
        </div>
        <div className="mt-6 items-center overflow-scroll hover:text-b-accent lg:flex">
          <ul className="flex h-full w-max items-center gap-2 text-xs">
            {loc.map((str, i) => (
              <li className="mb-2" key={i}>
                <Link
                  className="flex h-8 w-max items-center rounded-sm bg-[#F0F6FF] px-2 text-[10px] font-bold uppercase text-slate-500 shadow-sm"
                  href="#"
                >
                  {str}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Filter />
        <section className="mt-6 rounded-lg lg:border lg:p-8 ">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
            {developments.map((project, i) => (
              <DeveloperProjectCard key={i} {...project} />
            ))}
          </div>
        </section>
        <aside className="pb-8 pt-6 text-sm text-b-accent lg:py-10">
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">
              Developments For Sale In Ghana
            </h3>
            <p className="leading-6 text-b-muted">
              Kumasi, Takoradi and Tema boast of being the leading Real Estate
              Development cities in Ghana. However, Accra tends to play a major
              role with residential apartments and major estates. Accra has
              somehow attracted the top Real Estate Developers in Ghana like
              Clifton Homes, Devtraco Limited, Denya Developers, Regimanuel
              Estates, and more. The quality of construction in real estate has
              improved in recent times. People are now willing to pay for
              quality in high-demand areas like East Legon, Adjiringanor,
              Airport Residential Area and Ogbojo.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">
              Real Estate Companies Selling Lands in Ghana
            </h3>
            <p className="leading-6 text-b-muted">
              The top real estate companies selling land in Ghana include TDC
              land, Appolonia City, Properties Portfolio and Redrow Ghana. Other
              property developers to look out for are luxury real estate
              developers in Ghana.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">
              Advantages of Dealing with a Real Estate Development Company
            </h3>
            <div className="pl-4 pt-2">
              <span className="font-semibold">Finance:</span>
              <p className="leading-6 text-b-muted">
                You save a significant amount of money when you select one of
                the leading real estate developers in Ghana. The transaction
                includes VAT which is paid by the developer. Usually, most of
                these properties are first initialized with a 10 percent
                down-payment before everything is completed.
              </p>
            </div>
            <div className="pl-4 pt-2">
              <span className="font-semibold">Customization:</span>
              <p className="leading-6 text-b-muted">
                With a development property, you have the power to choose
                different designs,layout, size and finishes before they are even
                built for you. You may have to glance through their portfolio to
                select the right design, location and price before the project
                starts. Or you have the choice to select an already built
                apartment or house.
              </p>
            </div>
            <div className="pl-4 pt-2">
              <span className="font-semibold">Comfort:</span>
              <p className="leading-6 text-b-muted">
                Developed estates typically have security, good road
                infrastructure, utilities and other amenities that make life
                easy. You are less likely to have to worry about bad roads or
                disturbances in your community.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
