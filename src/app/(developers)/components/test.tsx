"use client"

import React from "react"
import { useWindowScroll } from "@mantine/hooks"
import { Home, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

import { ScrollLink } from "./scroll-link"

export function Test() {
  // get window scroll height
  const [scroll, _] = useWindowScroll()

  return (
    <Card
      className={cn(
        scroll.y >= 754
          ? "fixed inset-x-3 bottom-20 z-30 rounded-full shadow lg:inset-x-0 lg:top-[60px] lg:rounded-none lg:border-b lg:border-t-0 lg:shadow-none"
          : "rounded-none border-y",
        "flex animate-slide items-center overflow-hidden bg-white transition-all duration-500 ease-in lg:h-16"
      )}
    >
      <div className="flex h-16 items-center justify-between overflow-scroll px-3 lg:container lg:px-0">
        <div className="container flex items-center gap-3 p-0 lg:gap-8">
          <div className="border-r pr-8 capitalize">
            <ScrollLink
              href="#floor-plan"
              className="flex w-20 flex-col items-center lg:w-full lg:flex-row lg:gap-1"
            >
              <Icons.floorPlan className="h-5 w-5" strokeWidth="1.3" />
              <p className="text-sm font-medium text-b-blue lg:text-base">
                Floor Plan
              </p>
            </ScrollLink>
          </div>
          <div className="flex items-center gap-2 border-r pr-8 capitalize">
            <ScrollLink
              href="#site-plan"
              className="flex w-20 flex-col items-center lg:w-full lg:flex-row lg:gap-1"
            >
              <Icons.sitePlan
                className="h-5 w-5 text-b-blue"
                strokeWidth="1.3"
              />
              <p className="text-sm font-medium text-b-blue lg:text-base">
                Site Plan
              </p>
            </ScrollLink>
          </div>
          <div className="flex items-center gap-2 border-r pr-8 capitalize">
            <ScrollLink
              href="#location"
              className="flex w-20 flex-col items-center lg:w-full lg:flex-row lg:gap-1"
            >
              <MapPin className="h-5 w-5 text-b-blue" strokeWidth="1.3" />
              <p className="text-sm font-medium text-b-blue lg:text-base">
                Location
              </p>
            </ScrollLink>
          </div>
          <div className="flex items-center gap-2 capitalize">
            <ScrollLink
              href="#units"
              className="flex w-28 flex-col items-center  lg:w-full lg:flex-row lg:gap-1"
            >
              <Home className="h-5 w-5 text-b-blue" strokeWidth="1.3" />
              <p className="text-sm font-medium text-b-blue lg:text-base">
                Available units
              </p>
            </ScrollLink>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className={cn(
                scroll.y >= 754 ? "opacity-100" : "opacity-0",
                "hidden w-80 rounded-lg bg-b-accent font-semibold transition-all  duration-300 ease-in hover:bg-b-accent lg:block"
              )}
            >
              Get Project Brochure
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-b-accent">
                Brochure Request
              </DialogTitle>
              <DialogDescription>
                Enter email to get brochure. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="items-center">
                <Label htmlFor="email" className="mb-4 block text-b-accent">
                  Email
                </Label>
                <Input
                  id="email"
                  value="test@gmail.com"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  )
}
