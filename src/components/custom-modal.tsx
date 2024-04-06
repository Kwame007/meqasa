import { useRouter } from "next/navigation"
import React from "react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { siteConfig } from "@/config/site"

import { Sheet, SheetContent, SheetHeader } from "./ui/sheet"

export const FullscreenModal = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigate = useRouter()
  return (
    <Sheet>
      {children}
      <SheetContent
        className="flex h-full w-[100vw] flex-col border-none p-0 text-b-accent lg:hidden"
        side="left"
      >
        <SheetHeader className="border-b shadow-sm">
          <div className="flex w-full justify-between py-3 pl-3">
            <span className="text-base font-semibold text-b-accent">
              Filters
            </span>
          </div>
        </SheetHeader>

        <div className="relative h-full px-3 py-4 ">
          <Tabs defaultValue="sale" className="w-full">
            <TabsList className="h-11 w-full justify-evenly">
              <TabsTrigger
                value="sale"
                className="h-full w-full font-bold data-[state=active]:bg-b-primary data-[state=active]:text-white"
              >
                For Sale
              </TabsTrigger>
              <TabsTrigger
                value="rent"
                className="h-full w-full font-bold data-[state=active]:bg-b-primary data-[state=active]:text-white"
              >
                For rent
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sale">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault()
                  navigate.push("/results/1")
                }}
              >
                <div className="mt-10 grid h-full grid-flow-row gap-6">
                  <Input
                    type="radio"
                    value="sale"
                    name="sale"
                    className="sr-only"
                    checked
                  />
                  <div>
                    <p className="mb-3 text-base font-semibold">Location</p>
                    <div className="relative h-full">
                      <Icons.search
                        className="absolute left-3 top-3.5 h-4 w-4"
                        fill="#787D9B"
                      />{" "}
                      <Input
                        type="search"
                        name="search"
                        placeholder="Search location"
                        className="h-11 border-none bg-[#F3F4F6] pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      <Select name="type">
                        <SelectTrigger className="h-11">
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

                      <Select name="bed">
                        <SelectTrigger className="h-11">
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
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      <Input className="h-11" value="Min. price" name="min" />
                      <Input className="h-11" value="Max. price" name="max" />
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1">
                      <Select name="dir">
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="date">New to old</SelectItem>
                            <SelectItem value="date2">Old to new</SelectItem>
                            <SelectItem value="low">Low to high</SelectItem>
                            <SelectItem value="high">High to low</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1">
                      <Select name="period">
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Rent period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="dayrent">Daily</SelectItem>
                            <SelectItem value="weekrent">Weekly</SelectItem>
                            <SelectItem value="shortrent">
                              1 to 6 months
                            </SelectItem>
                            <SelectItem value="longrent">
                              12, 24 months
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="furnish"
                          name="furnished"
                          value="furnished"
                          className="data-[state=checked]:border-none data-[state=checked]:bg-b-primary data-[state=checked]:text-primary-foreground"
                        />
                        <label
                          htmlFor="furnish"
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Fully furnished
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="owners"
                          name="owner"
                          value="owner"
                          className="data-[state=checked]:border-none data-[state=checked]:bg-b-primary data-[state=checked]:text-primary-foreground"
                        />
                        <label
                          htmlFor="owners"
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          By owner
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="complete"
                          name="complete"
                          value="complete"
                          className="data-[state=checked]:border-none data-[state=checked]:bg-b-primary data-[state=checked]:text-primary-foreground"
                        />
                        <label
                          htmlFor="complete"
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Completed property
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" fixed inset-x-3 bottom-3">
                  <footer className="space-y-3 py-4">
                    <hr className="border border-gray-100" />

                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        type="submit"
                        variant="destructive"
                        className="w-full self-start bg-b-primary font-semibold"
                      >
                        <span className="ml-4 lg:hidden lg:inline-block">
                          Search
                        </span>
                      </Button>
                    </div>
                  </footer>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="rent">
              <form action="" className="relative">
                <div className="mt-10 grid h-full grid-flow-row gap-6">
                  <Input
                    type="radio"
                    value="rent"
                    name="rent"
                    className="sr-only"
                    checked
                  />
                  <div>
                    <p className="mb-3 text-base font-semibold">Location</p>
                    <div className="relative h-full">
                      <Icons.search
                        className="absolute left-3 top-3.5 h-4 w-4"
                        fill="#787D9B"
                      />{" "}
                      <Input
                        type="search"
                        name="search"
                        placeholder="Search location"
                        className="h-11 border-none bg-[#F3F4F6] pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      <Select name="type">
                        <SelectTrigger className="h-11">
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

                      <Select name="bed">
                        <SelectTrigger className="h-11">
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
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      <Input className="h-11" value="Min. price" name="min" />
                      <Input className="h-11" value="Max. price" name="max" />
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1">
                      <Select name="dir">
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="date">New to old</SelectItem>
                            <SelectItem value="date2">Old to new</SelectItem>
                            <SelectItem value="low">Low to high</SelectItem>
                            <SelectItem value="high">High to low</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-1">
                      <Select name="period">
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Rent period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="dayrent">Daily</SelectItem>
                            <SelectItem value="weekrent">Weekly</SelectItem>
                            <SelectItem value="shortrent">
                              1 to 6 months
                            </SelectItem>
                            <SelectItem value="longrent">
                              12, 24 months
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="furnish"
                          name="furnished"
                          value="furnished"
                          className="data-[state=checked]:border-none data-[state=checked]:bg-b-primary data-[state=checked]:text-primary-foreground"
                        />
                        <label
                          htmlFor="furnish"
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Fully furnished
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="owners"
                          name="owner"
                          value="owner"
                          className="data-[state=checked]:border-none data-[state=checked]:bg-b-primary data-[state=checked]:text-primary-foreground"
                        />
                        <label
                          htmlFor="owners"
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          By owner
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="complete"
                          name="complete"
                          value="complete"
                          className="data-[state=checked]:border-none data-[state=checked]:bg-b-primary data-[state=checked]:text-primary-foreground"
                        />
                        <label
                          htmlFor="complete"
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Completed property
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" fixed inset-x-3 bottom-3">
                  <footer className="space-y-3 py-4">
                    <hr className="border border-gray-100" />

                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        type="submit"
                        variant="destructive"
                        className="w-full self-start bg-b-primary font-semibold"
                      >
                        <span className="ml-4 lg:hidden lg:inline-block">
                          Search
                        </span>
                      </Button>
                    </div>
                  </footer>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}
