"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { API_ENDPOINT } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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

export async function AgentLogoCarousel() {
  const agentsLogos = await getAgentsLogos()

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {agentsLogos.map((logo, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/12">
            <div className="p-1">
              <Card className=" rounded-xl">
                <CardContent className="flex aspect-square items-center justify-center overflow-hidden p-4 ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Image
                          alt={logo.label}
                          src={logo.src}
                          width={100}
                          height={50}
                          className="h-full w-full object-cover"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="z-20">{logo.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  )
}
