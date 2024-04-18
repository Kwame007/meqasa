"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

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

export function AgentLogoCarousel({ agentLogos }: { agentLogos: AgentLogo[] }) {
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
        {agentLogos.map((logo, index) => (
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
