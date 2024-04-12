"use client"

import React from "react"
import Image from "next/image"
import plan1 from "@/../public/plans/plan-1.webp"
import plan2 from "@/../public/plans/plan-2.webp"
import plan3 from "@/../public/plans/plan-3.webp"
import plan4 from "@/../public/plans/plan-4.webp"
import plan5 from "@/../public/plans/plan-5.webp"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ThumbnailCarousel } from "@/components/carousel/thumbnail-carousel"
import { Icons } from "@/components/icons"

export function FloorPlanCarousel() {
  const [current, setCurrent] = React.useState(plan1)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const filterBy = [
    { label: "All", value: "all" },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5+", value: 5 },
  ]

  const plans = [plan1, plan2, plan3, plan4, plan5]
  const data = [
    {
      label: "B6aDP",
      size: "1,012 sqft / 94 sqm",
      bed: "1",
      bath: "1",
    },
    {
      label: "B6aDP",
      size: "1,012 sqft / 94 sqm",
      bed: "2",
      bath: "1",
    },
    {
      label: "B6aDP",
      size: "1,012 sqft / 94 sqm",
      bed: "3",
      bath: "3",
    },
    {
      label: "B6aDP",
      size: "1,012 sqft / 94 sqm",
      bed: "4",
      bath: "4",
    },
    {
      label: "B6aDP",
      size: "1,012 sqft / 94 sqm",
      bed: "5",
      bath: "6",
    },
  ]
  return (
    <Card className="overflow-hidden rounded-xl">
      <div className="flex flex-col gap-3  md:h-[500px]  md:flex-row">
        <div className="overflow-scroll  border-b md:w-[400px] md:border-r">
          <Tabs defaultValue="type" className="w-full ">
            <TabsList className="flex h-full w-full justify-start gap-1 rounded-none border-b border-b-border p-2">
              <TabsTrigger
                value="type"
                className="w-full text-b-muted data-[state=active]:text-b-blue md:w-32"
              >
                <div className="flex w-fit flex-col items-center">
                  <Icons.floor
                    className="h-5 w-5 md:h-8 md:w-8"
                    strokeWidth="1.3"
                  />
                  <p className="font-semibold text-inherit md:text-base">
                    By type
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="bed"
                className="w-full text-b-muted data-[state=active]:text-b-blue md:w-32"
              >
                <div className="flex w-fit flex-col items-center">
                  <Icons.bed
                    className="h-5 w-5 md:h-8 md:w-8"
                    strokeWidth="1.3"
                  />
                  <p className="font-semibold text-inherit md:text-base">
                    By bed
                  </p>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="bed" className="overflow-scroll">
              <Card className="border-none">
                <CardHeader className="">
                  <div className="grid grid-cols-6 items-center justify-center [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg [&>*:nth-child(2)]:border-x-0 [&>*:nth-child(4)]:border-x-0 [&>*:nth-child(6)]:border-l-0">
                    {filterBy.map((value, i) => (
                      <Button
                        className={buttonVariants({
                          variant: "outline",
                          className:
                            "h-14 cursor-pointer rounded-none bg-transparent font-semibold text-b-accent ",
                        })}
                        data-value={value.value}
                        key={i}
                      >
                        {value.label}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="mt-4 h-fit p-0">
                  {data.map((plan, index) =>
                    isDesktop ? (
                      <Button
                        className="grid h-full w-full cursor-pointer grid-cols-1 items-center justify-start rounded-none border-x-0 border-b border-t-0 py-3 text-start text-b-accent"
                        variant="outline"
                        onClick={() => setCurrent(plans[index])}
                        key={index}
                      >
                        <span className="text-base font-extrabold ">
                          {plan.label}
                        </span>
                        <p>{plan.size}</p>
                        <p className="flex items-center text-sm font-normal text-b-muted">
                          {plan.bed} Beds <Icons.dot className="h-4 w-4" />{" "}
                          <span className="">{plan.bath} Baths</span>
                        </p>
                      </Button>
                    ) : (
                      // <ThumbnailCarousel images={plans} index={index}>
                      <Button
                        className="grid h-full w-full cursor-pointer grid-cols-1 items-center justify-start rounded-none border-x-0 border-b border-t-0 py-3 text-start text-b-accent"
                        variant="outline"
                        onClick={() => setCurrent(plans[index])}
                        key={index}
                      >
                        <span className="text-base font-extrabold ">
                          {plan.label}
                        </span>
                        <p>{plan.size}</p>
                        <p className="flex items-center text-sm font-normal text-b-muted">
                          {plan.bed} Beds <Icons.dot className="h-4 w-4" />{" "}
                          <span className="">{plan.bath} Baths</span>
                        </p>
                      </Button>
                      // </ThumbnailCarousel>
                    )
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="type" className="-z-10 overflow-scroll">
              <Card className="border-none">
                <CardContent className="mt-4 h-fit p-0">
                  {data.map((plan, index) =>
                    isDesktop ? (
                      <Button
                        className="last:b grid h-full w-full cursor-pointer grid-cols-1 items-center justify-start rounded-none border-x-0 border-b border-t-0 py-3 text-start text-b-accent"
                        variant="outline"
                        onClick={() => setCurrent(plans[index])}
                        key={index}
                      >
                        <span className="text-base font-extrabold ">
                          {plan.label}
                        </span>
                        <p>{plan.size}</p>
                        <p className="flex items-center text-sm font-normal text-b-muted">
                          {plan.bed} Beds <Icons.dot className="h-4 w-4" />{" "}
                          <span className="">{plan.bath} Baths</span>
                        </p>
                      </Button>
                    ) : (
                      // <ThumbnailCarousel images={plans} index={index}>
                      <Button
                        className="grid h-full w-full cursor-pointer grid-cols-1 items-center justify-start rounded-none border-x-0 border-b border-t-0 py-3 text-start text-b-accent"
                        variant="outline"
                        onClick={() => setCurrent(plans[index])}
                        key={index}
                      >
                        <span className="text-base font-extrabold ">
                          {plan.label}
                        </span>
                        <p>{plan.size}</p>
                        <p className="flex items-center text-sm font-normal text-b-muted">
                          {plan.bed} Beds <Icons.dot className="h-4 w-4" />{" "}
                          <span className="">{plan.bath} Baths</span>
                        </p>
                      </Button>
                      // </ThumbnailCarousel>
                    )
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="hidden p-4 md:block md:grow">
          <Image
            alt="floor plan"
            src={current}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </Card>
  )
}
