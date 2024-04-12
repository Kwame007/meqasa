import React from "react"
import Image from "next/image"
import Link from "next/link"

import { API_ENDPOINT, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumbs } from "@/components/bread-crumbs"
import { ClientContactForm } from "@/components/client-contact-form"
import { Icons } from "@/components/icons"
import { PropertyUnitCard } from "@/components/property-unit-card"
import Testimonials from "@/app/(developers)/components/testimonial-card"

async function getAllDevelopers(): Promise<DeveloperType[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/developers`, {
      next: {
        // revalidate after every hour
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
    }

    const developers = (await response.json()) as DeveloperType[]

    return developers
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

type Params = {
  params: {
    developerID: string
  }
}

export async function generateStaticParams() {
  const developersData: Promise<DeveloperType[]> = getAllDevelopers()
  const developers = await developersData

  return developers.map((developer) => ({
    // always a string
    developerID: developer.id,
  }))
}

export default async function page({ params: { developerID } }: Params) {
  async function getAllDeveloper(): Promise<DeveloperType> {
    try {
      const response = await fetch(
        `${API_ENDPOINT}/developers/${developerID}`,
        {
          next: {
            // revalidate after every hour
            revalidate: 60,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
      }

      const developer = (await response.json()) as DeveloperType

      return developer
    } catch (error: any) {
      throw new Error(`Failed to parse response: ${error.message}`)
    }
  }

  const developer = await getAllDeveloper()

  return (
    <>
      <div className="relative max-h-[457px] w-full overflow-hidden">
        <div className="flex h-full w-full">
          <div className="h-full w-full min-w-full flex-1">
            <Image
              alt={`${developer.name} cover photo`}
              src={developer.cover}
              width={1800}
              height={457}
              className="h-[250px] w-full object-cover lg:h-full"
            />
          </div>
        </div>

        <div className="absolute inset-0 z-20 px-3 lg:container lg:px-0">
          {/* developer info */}
          <div className="absolute bottom-6 z-10 flex items-end gap-3 lg:gap-6">
            <Card className=" flex max-h-[180px] w-[115px] min-w-[115px] items-center rounded-lg border-0 bg-white lg:min-h-[180px] lg:w-[180px]">
              {" "}
              <Image
                alt={`${developer.name} logo`}
                src={developer.logo}
                width={180}
                height={180}
                className="h-[115px] max-h-[180px] w-full rounded-sm object-contain lg:h-auto"
              />
            </Card>
            <div className="flex grow items-center justify-between">
              <div className="grid">
                <h1 className="mb-1 text-base font-extrabold text-white lg:text-2xl lg:font-bold">
                  {developer.name}
                </h1>

                <div className="mt-1">
                  <span className="flex items-center gap-2 text-sm text-white">
                    <Icons.verified className="inline-block h-4 w-5 text-white lg:h-5 lg:w-5" />{" "}
                    active on meqasa
                  </span>
                  <span className="mt-1 flex items-center gap-2 text-end text-xs text-b-primary lg:text-sm">
                    {" "}
                    <Icons.location className="inline-block h-4 w-5 lg:h-5 lg:w-5" />{" "}
                    {developer.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </div>

      {/* main page */}
      <div className="grid grid-cols-1 gap-8 px-3 transition-all duration-300 ease-in lg:container lg:mt-6 lg:grid-cols-[736px,1fr] lg:px-0">
        <div className="h-full">
          <div className="my-6 text-white">
            <Breadcrumbs
              segments={[
                {
                  title: "Home",
                  href: "/",
                },
                {
                  title: `developers`,
                  href: `/developers`,
                },
                {
                  title: `Goldkey Properties`,
                  href: `/developers/1`,
                },
              ]}
            />
          </div>
          <TabsDemo {...developer.projects} />
          <hr className="my-8" />
          <section className="text-b-accent lg:mt-20">
            <h3 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              About {developer.name}
            </h3>

            <p className="mb-3 leading-7 text-b-muted">
              {developer.description}
            </p>
          </section>
          <aside>
            <Card className="w-fit rounded-xl border-orange-400 p-3 text-b-accent">
              <h4 className="font-semibold">Address</h4>
              <p className="flex items-center">
                <Icons.location className="mr-2 w-4 text-b-primary" /> Kanda
                Estates, Ghana
              </p>
            </Card>
          </aside>
          <section className="my-8 text-b-accent lg:mt-20">
            <h5 className="mb-4 font-semibold capitalize text-inherit lg:text-xl lg:font-bold">
              What clients are saying about {developer.name}
            </h5>
            <Testimonials />
          </section>
        </div>
        <aside className="relative h-full py-6 lg:p-0">
          <ClientContactForm data={developer.developer} />
        </aside>
      </div>
    </>
  )
}

function TabsDemo({ completedProjects, currentProjects, units }: ProjectsType) {
  return (
    <Tabs defaultValue="current" className="w-full">
      <TabsList className="grid h-[60px] w-full grid-cols-3 px-2">
        <TabsTrigger
          value="current"
          className="group h-11 text-sm data-[state=active]:text-b-accent"
        >
          Current Projects{" "}
          <span className="ml-2 hidden h-6 w-6 items-center justify-center rounded-lg bg-primary font-semibold text-white opacity-0 shadow-subtle transition-opacity duration-200 ease-in group-data-[state=active]:opacity-100 lg:flex">
            {currentProjects.length}
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="available"
          className="group h-11 text-sm data-[state=active]:text-b-accent"
        >
          Available Units{" "}
          <span className="ml-2 hidden h-6 w-6 items-center justify-center rounded-lg bg-primary font-semibold text-white opacity-0 shadow-subtle transition-opacity duration-200 ease-in group-data-[state=active]:opacity-100 lg:flex">
            {units.length}
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="group h-11 text-sm data-[state=active]:text-b-accent"
        >
          Past Projects{" "}
          <span className="ml-2 hidden h-6 w-6 items-center justify-center rounded-lg bg-primary font-semibold text-white opacity-0 shadow-subtle transition-opacity duration-200 ease-in group-data-[state=active]:opacity-100 lg:flex">
            {completedProjects.length}
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="current" className="mt-8">
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          {currentProjects?.map((project, i: number) => (
            <React.Fragment key={i}>
              <ProjectCard
                name={project.name}
                status={project.status}
                src={project.image}
              />
            </React.Fragment>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="available" className="mt-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          {units.map((unit, i) => (
            <React.Fragment key={i}>
              <PropertyUnitCard {...unit} />
            </React.Fragment>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="past" className="mt-8">
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          {completedProjects.map((project, i) => (
            <React.Fragment key={i}>
              <ProjectCard
                name={project.name}
                status={project.status}
                src={project.image}
              />
            </React.Fragment>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ProjectCard({
  name,
  src,
  status,
}: {
  name: string
  src: string
  status: string
}) {
  return (
    <Card className="group relative overflow-hidden rounded-xl border-0 bg-transparent">
      <Link href={"1/projects/1"}>
        <Image
          alt="test"
          src={src}
          width={200}
          height={200}
          className="h-[180px] w-full rounded-lg object-cover transition lg:h-[254px] lg:group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 z-20 lg:bottom-6 lg:left-6">
          <Badge
            className={cn(
              status === "completed"
                ? "bg-b-border-completed"
                : "bg-b-border-ongoing",
              "uppercase "
            )}
          >
            {status}
          </Badge>
          <h4 className="mt-1 line-clamp-1 font-bold text-white lg:text-xl">
            {name}
          </h4>
        </span>
        {/* overlay */}
        <div
          className="absolute inset-0 z-10 overflow-hidden rounded-lg transition group-hover:scale-105"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </Link>
    </Card>
  )
}
