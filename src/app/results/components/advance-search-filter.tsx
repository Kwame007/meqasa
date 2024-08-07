"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
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
import { FullscreenModal } from "@/components/custom-modal"
import { Icons } from "@/components/icons"
import { Price } from "@/app/results/components/price-select"

const options = [
  { label: "Property type", value: "all" },
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Townhouse", value: "townhouse" },
  { label: "Office", value: "office" },
  { label: "Commercial space", value: "commercial" },
  { label: "Warehouse", value: "warehouse" },
  { label: "Guest house", value: "guest" },
  { label: "Shop", value: "shop" },
  { label: "Retail", value: "retail" },
  { label: "Beach house", value: "beach" },
]
const options2 = [
  { label: "Beds", value: "bed" },
  { label: "1 Bed", value: "1" },
  { label: "2 Beds", value: "2" },
  { label: "3 Beds", value: "3" },
  { label: "4 Beds", value: "4" },
  { label: "5+ Beds", value: "5" },
]
const options5 = [
  { label: "Baths", value: "bath" },
  { label: "1 Bath", value: "1 b" },
  { label: "2 Baths", value: "2 b" },
  { label: "3 Baths", value: "3 b" },
  { label: "4 Baths", value: "4 b" },
  { label: "5+ Baths", value: "5 b" },
]
const options3 = [
  { label: "For sale", value: "sale" },
  { label: "For rent", value: "rent" },
]

export function AdvanceSearchFilter() {
  return (
    <>
      <Card className="sticky top-[60px] z-50 hidden h-16 items-center border-b rounded-none px-6 shadow-none md:flex">
        <aside className="w-full">
          <form
            action=""
            className="h-[46px] w-full "
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "4fr repeat(6,max-content)",
            }}
          >
            <div className="flex h-[46px]">
              <Select name="category" defaultValue="sale">
                <SelectTrigger className=" w-28 rounded-r-none border-r-0 font-semibold text-b-accent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {options3.map(({ value, label }) => (
                      <SelectItem value={value} key={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="relative w-full">
                <Icons.search className="absolute left-2 top-3 h-5 w-5 text-b-accent" />
                <Input
                  type="search"
                  name="search"
                  placeholder="Search location"
                  className=" rounded-l-none py-4 pl-10"
                />
              </div>
            </div>
            <Select name="type">
              <SelectTrigger className="font-semibold text-b-accent">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map(({ value, label }) => (
                    <SelectItem value={value} key={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select name="bed">
              <SelectTrigger className="font-semibold text-b-accent">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options2.map(({ value, label }) => (
                    <SelectItem value={value} key={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <Select name="bath">
              <SelectTrigger className="font-semibold text-b-accent">
                <SelectValue placeholder="Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options5.map(({ value, label }) => (
                    <SelectItem value={value} key={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select> */}

            <Price
              title="Price range"
              unit="GH₵"
              placeholder={{ min: "Min.price", max: "Max.price" }}
            />
            <Popover>
              <PopoverTrigger className="flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 h-10 text-sm font-semibold text-b-accent">
                More filters <Icons.filter className=" h-5 w-5" />
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-4">
                <div className="mb-4 grid grid-cols-2 items-center gap-2">
                  <Select name="period">
                    <SelectTrigger className="min-w-fit font-semibold text-b-accent">
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
                    <SelectTrigger className="min-w-full font-semibold text-b-accent">
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
                      <Label htmlFor="r1" className="cursor-pointer text-xs">
                        1 Bedroom
                      </Label>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                      <RadioGroupItem value="2" id="r2" />
                      <Label htmlFor="r2" className="cursor-pointer text-xs">
                        2 Bedrooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                      <RadioGroupItem value="3" id="r3" />
                      <Label htmlFor="r3" className="cursor-pointer text-xs">
                        3 Bedrooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                      <RadioGroupItem value="4" id="r4" />
                      <Label htmlFor="r4" className="cursor-pointer text-xs">
                        4 Bedrooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-1 rounded-full border px-2 py-1.5 ">
                      <RadioGroupItem value="5" id="r5" />
                      <Label htmlFor="r5" className="cursor-pointer text-xs">
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
                        className="data-[state=checked]:border-0 data-[state=checked]:bg-b-primary data-[state=checked]:text-white"
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
                        className="data-[state=checked]:border-0 data-[state=checked]:bg-b-primary data-[state=checked]:text-white"
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

            <Button type="submit" className="w-full rounded-md font-semibold ">
              Update search
            </Button>
          </form>
        </aside>
      </Card>

      <Card className="sticky top-[51px] z-40 p-4 md:hidden rounded-none border-0 border-b">
        <FullscreenModal>
          <DialogTrigger className="w-full">
            <div
              className="flex items-center gap-6 rounded-lg bg-[#F3F4F6] p-2"
              role="button"
              tabIndex={0}
            >
              <Icons.search className="w-5" fill="#1b235a" />
              <p className="text-sm text-slate-400">
                Search for an MRT, project, or area
              </p>
            </div>
          </DialogTrigger>
        </FullscreenModal>

        <div className="mt-3">
          <div className="my-3 grid grid-cols-2 items-center gap-3">
            <FullscreenModal>
              <DialogTrigger
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "flex w-full items-center gap-2 text-b-accent"
                )}
              >
                Show Filters <Icons.filter className="w-5" />
              </DialogTrigger>
            </FullscreenModal>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Ref. Search</Button>
              </DialogTrigger>
              <DialogContent className="text-b-accent sm:max-w-[425px]">
                <form action="">
                  <DialogHeader className="mb-4 text-justify">
                    <DialogTitle>Search by reference</DialogTitle>
                    <DialogDescription>
                      Search property by their reference number.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="ref" className="sr-only text-right">
                        reference number
                      </Label>
                      <Input
                        id="ref"
                        value="7677688"
                        name="reference"
                        placeholder="Search by Reference No."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="font-semibold">
                      Search
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <p className="text-sm font-medium text-b-muted">2,000 listings</p>
          </div>
        </div>
      </Card>
    </>
  )
}
