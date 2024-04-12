"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DialogTrigger } from "@/components/ui/dialog-edited"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FullscreenModal } from "@/components/custom-modal"
import { PriceInput } from "@/components/filter/custom-price-input"
import { Icons } from "@/components/icons"

export function SearchFilter() {
  const navigate = useRouter()
  const newLocal =
    "relative mt-3 hidden h-[60px] w-full items-center rounded-xl bg-white shadow-sm lg:flex"
  return (
    <div>
      {/* seo text */}
      <h1 className="sr-only mb-4 text-center text-3xl font-extrabold text-b-accent">
        Ghana&apos;s Smarter Property Search
      </h1>
      <Card
        className="mx-auto my-0 h-fit w-full rounded-2xl  border-0 p-2 lg:max-w-[928px] lg:p-3"
        style={{ background: "rgba(11,17,52,.65)" }}
      >
        <Tabs defaultValue="buy" className="w-full">
          <div className=" mx-auto my-0 w-4/5 lg:max-w-[460px]">
            <TabsList className="grid h-fit w-full grid-cols-3 bg-white p-1.5 text-b-accent">
              <TabsTrigger
                value="buy"
                className="font-bold data-[state=active]:bg-primary data-[state=active]:text-white lg:text-base"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger
                value="rent"
                className="font-bold data-[state=active]:bg-primary data-[state=active]:text-white lg:text-base"
              >
                Rent
              </TabsTrigger>
              <TabsTrigger
                value="land"
                className="font-bold data-[state=active]:bg-primary data-[state=active]:text-white lg:text-base"
              >
                Land
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="lg:hidden">
            <FullscreenModal>
              <DialogTrigger className="w-full">
                <div
                  className="mt-2 flex h-[60px] items-center gap-6 rounded-xl bg-white p-2 lg:hidden"
                  role="button"
                  tabIndex={0}
                >
                  <Icons.search fill="#1b235a" />
                  <p className="text-slate-400">
                    Search for an MRT, project, or area
                  </p>
                </div>
              </DialogTrigger>
            </FullscreenModal>
          </div>

          <TabsContent value="buy">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault()
                navigate.push("/results/1")
              }}
            >
              <Input
                type="radio"
                value="sale"
                name="sale"
                className="hidden"
                checked
                readOnly
              />
              <div className={newLocal}>
                <Label htmlFor="query" className="sr-only">
                  search
                </Label>
                <Icons.search className="absolute left-4" fill="#1b235a" />
                <Input
                  id="query"
                  name="search"
                  placeholder="Search for location"
                  className="h-full rounded-xl border-none py-4 pl-[52px] pr-4 text-base font-light text-b-accent shadow-none lg:rounded-l-xl  lg:rounded-r-none "
                />
                <Button
                  size="lg"
                  type="submit"
                  className="my-1.5 mr-1.5 hidden  rounded-lg bg-primary font-bold  lg:block"
                >
                  Search
                </Button>
              </div>
              <div className="relative mx-auto mt-3 hidden max-w-max items-end justify-center gap-2 py-1 lg:flex">
                <Select name="type">
                  <SelectTrigger className="h- h-5 min-w-fit cursor-pointer rounded-lg border-none bg-transparent py-0 text-base font-semibold text-white">
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {siteConfig.propertyType.map(({ value, label }) => (
                        <SelectItem value={value} key={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#9A9EB5]"
                />
                <Select name="bed">
                  <SelectTrigger className="h-5 cursor-pointer rounded-lg border-none bg-transparent py-0 text-base font-semibold text-white">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {siteConfig.propertyBed.map(({ value, label }) => (
                        <SelectItem value={value} key={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#9A9EB5]"
                />

                <PriceInput
                  title="Price range"
                  unit="GH₵"
                  placeholder={{ min: "Min.price", max: "Max.price" }}
                  className="h-[20px] border-none px-5 py-0 text-white"
                />
              </div>
            </form>
          </TabsContent>
          <TabsContent value="rent">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault()
                navigate.push("/results/1")
              }}
            >
              <Input
                type="radio"
                value="rent"
                name="rent"
                className="hidden"
                checked
                readOnly
              />
              <div className="relative mt-3 hidden h-[60px] w-full items-center rounded-xl bg-white shadow-sm lg:flex">
                <Label htmlFor="query" className="sr-only">
                  search
                </Label>
                <Icons.search className="absolute left-4" fill="#1b235a" />
                <Input
                  id="query"
                  name="search"
                  placeholder="Search for location"
                  className="h-full rounded-xl border-none py-4 pl-[52px] pr-4 text-base font-light text-b-accent shadow-none lg:rounded-l-xl  lg:rounded-r-none "
                />
                <Button
                  type="submit"
                  className="my-1.5 mr-1.5 hidden h-12 w-[115px] rounded-lg bg-primary font-bold  lg:block"
                >
                  Search
                </Button>
              </div>
              <div className="relative mx-auto mt-3 hidden max-w-max items-end justify-center gap-2 py-1  lg:flex">
                <Select name="type">
                  <SelectTrigger className="h-5 min-w-fit max-w-fit cursor-pointer rounded-lg border-none bg-transparent py-0 text-base font-semibold text-white">
                    <SelectValue placeholder="Property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {siteConfig.propertyType.map(({ value, label }) => (
                        <SelectItem value={value} key={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#9A9EB5]"
                />
                <Select name="bed">
                  <SelectTrigger className="h-5 min-w-fit max-w-fit cursor-pointer rounded-lg border-none bg-transparent py-0 text-base font-semibold text-white">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {siteConfig.propertyBed.map(({ value, label }) => (
                        <SelectItem value={value} key={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#9A9EB5]"
                />

                <PriceInput
                  title="Price range"
                  unit="GH₵"
                  placeholder={{ min: "Min.price", max: "Max.price" }}
                  className="h-[20px] border-none px-5 py-0 text-white"
                />

                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#9A9EB5]"
                />

                <Popover>
                  <PopoverTrigger className="h- flex min-w-fit max-w-fit cursor-pointer items-center justify-between rounded-lg text-base font-semibold text-white">
                    More filters <Icons.filter className="ml-2 h-5 w-5" />
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-4">
                    <div className="mb-4 grid grid-cols-2 items-center gap-2">
                      <Select name="period">
                        <SelectTrigger className="h-11 min-w-fit font-semibold text-b-accent">
                          <SelectValue placeholder="Rent period" />
                        </SelectTrigger>
                        <SelectContent className="text-b-accent">
                          <SelectGroup>
                            {[
                              { label: "Daily", value: "day" },
                              { label: "Weekly", value: "week" },
                              { label: "Up to 6 months", value: "month" },
                              { label: "12 months plus", value: "year" },
                            ].map((str, i) => (
                              <SelectItem
                                value={str.value}
                                className="py-1.5 hover:text-b-accent"
                                key={i}
                              >
                                {str.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <Select name="sort">
                        <SelectTrigger className="h-11 min-w-full font-semibold text-b-accent">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent className="border-none text-b-accent shadow-spread">
                          <SelectGroup>
                            {[
                              { label: "New to old", value: "new" },
                              { label: "Old to new", value: "old" },
                              { label: "Lower to higher", value: "low" },
                              { label: "Higher to lower", value: "high" },
                            ].map((str, i) => (
                              <SelectItem
                                value={str.value}
                                className="py-1.5 hover:text-b-accent"
                                key={i}
                              >
                                {str.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="border-b pb-4 ">
                      <RadioGroup
                        defaultValue="1"
                        name="beds"
                        className="flex flex-wrap items-center"
                      >
                        <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                          <RadioGroupItem value="1" id="r1" />
                          <Label
                            htmlFor="r1"
                            className="cursor-pointer text-xs"
                          >
                            1 Bedroom
                          </Label>
                        </div>
                        <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                          <RadioGroupItem value="2" id="r2" />
                          <Label
                            htmlFor="r2"
                            className="cursor-pointer text-xs"
                          >
                            2 Bedrooms
                          </Label>
                        </div>
                        <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                          <RadioGroupItem value="3" id="r3" />
                          <Label
                            htmlFor="r3"
                            className="cursor-pointer text-xs"
                          >
                            3 Bedrooms
                          </Label>
                        </div>
                        <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                          <RadioGroupItem value="4" id="r4" />
                          <Label
                            htmlFor="r4"
                            className="cursor-pointer text-xs"
                          >
                            4 Bedrooms
                          </Label>
                        </div>
                        <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                          <RadioGroupItem value="5" id="r5" />
                          <Label
                            htmlFor="r5"
                            className="cursor-pointer text-xs"
                          >
                            5 Bedrooms
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-start justify-between pt-8 text-sm font-semibold text-b-accent">
                      <span>Only show...</span>
                      <div>
                        <div className="mb-2 flex items-center space-x-2">
                          <Checkbox
                            id="furnished"
                            name="furn"
                            className="data-[state=checked]:border-0 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                          />
                          <label
                            htmlFor="furnished"
                            className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Furnished Properties
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="owner"
                            name="own"
                            className="data-[state=checked]:border-0 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                          />
                          <label
                            htmlFor="owner"
                            className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            For by Owner
                          </label>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="land">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault()
                navigate.push("/results/1")
              }}
            >
              <Input
                type="radio"
                value="land"
                name="land"
                className="hidden"
                checked
                readOnly
              />
              <div className="relative mt-3 hidden h-[60px] w-full items-center rounded-xl bg-white shadow-sm lg:flex">
                <Label htmlFor="query" className="sr-only">
                  search
                </Label>
                <Icons.search className="absolute left-4" fill="#1b235a" />
                <Input
                  id="query"
                  name="search"
                  placeholder="Search for location"
                  className="h-full rounded-xl border-none py-4 pl-[52px] pr-4 text-base font-light text-b-accent shadow-none lg:rounded-l-xl  lg:rounded-r-none "
                />
                <Button
                  type="submit"
                  className="my-1.5 mr-1.5 hidden h-12 w-[115px] rounded-lg bg-primary font-bold  lg:block"
                >
                  Search
                </Button>
              </div>
              <div className="relative mx-auto mt-3 hidden max-w-max items-end justify-center gap-2 py-1  lg:flex">
                <PriceInput
                  title="Price range"
                  unit="GH₵"
                  placeholder={{ min: "Min.price", max: "Max.price" }}
                  className="h-[20px] border-none px-5 py-0 text-white"
                />
                <Separator
                  orientation="vertical"
                  className="h-[20px] bg-[#9A9EB5]"
                />
                <PriceInput
                  title="Area range"
                  unit="m²"
                  placeholder={{ min: "Min.area", max: "Max.area" }}
                  className="h-[20px] border-none px-5 py-0 text-white"
                />
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
