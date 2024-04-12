"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/icons"
import MyComponent from "@/components/map"

export function ProjectMap() {
  return (
    <Card className="w-full overflow-hidden border-0 shadow-none md:border md:shadow-sm rounded-xl">
      <CardContent className="p-0">
        <Tabs defaultValue="school" className="w-full">
          <TabsList className="flex h-20 w-full rounded-none bg-transparent md:h-[113px] md:border-b">
            <TabsTrigger
              value="school"
              className="transition-border group flex  w-full justify-center bg-transparent p-0 duration-500 ease-linear data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              <div className="flex w-full flex-col items-center">
                <Icons.school
                  className="h-5 w-5 text-[#b5b8c9] group-data-[state=active]:text-blue-600 md:h-[36px] md:w-[36px]"
                  stroke-width="1."
                />
                <p className="mt-1 font-semibold text-[#b5b8c9] group-hover:text-blue-600 group-data-[state=active]:text-blue-600 md:text-base">
                  Schools
                </p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="bank"
              className="group  w-full bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-center">
                <Icons.bank
                  className="h-5 w-5 text-[#b5b8c9] group-data-[state=active]:text-blue-600 md:h-[36px] md:w-[36px]"
                  stroke-width="1.3"
                />
                <p className="mt-1 font-semibold text-[#b5b8c9] group-hover:text-blue-600 group-data-[state=active]:text-blue-600 md:text-base">
                  Banks
                </p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="hospital"
              className="group w-full bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-center text-b-accent">
                <Icons.health
                  className="h-5 w-5 text-[#b5b8c9] group-data-[state=active]:text-blue-600 md:h-[36px] md:w-[36px]"
                  stroke-width="1.3"
                />
                <p className="mt-1 font-semibold text-[#b5b8c9] group-hover:text-blue-600 group-data-[state=active]:text-blue-600 md:text-base">
                  Hospitals
                </p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="store"
              className="group w-full bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-center">
                <Icons.store
                  className="h-5 w-5 text-[#b5b8c9] group-data-[state=active]:text-blue-600 md:h-[36px] md:w-[36px]"
                  stroke-width="1.3"
                />
                <p className="mt-1 font-semibold text-[#b5b8c9] group-hover:text-blue-600 group-data-[state=active]:text-blue-600 md:text-base">
                  Stores
                </p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="airport"
              className="group w-full bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              <div className="flex flex-col items-center">
                <Icons.airport
                  className="h-5 w-5 text-[#b5b8c9] group-data-[state=active]:text-blue-600 md:h-[36px] md:w-[36px]"
                  stroke-width="1.3"
                />
                <p className="mt-1 font-semibold text-[#b5b8c9] group-hover:text-blue-600 group-data-[state=active]:text-blue-600 md:text-base">
                  Airports
                </p>
              </div>
            </TabsTrigger>
          </TabsList>
          <div className="flex h-full flex-col md:h-[489px] md:flex-row md:overflow-hidden">
            <div className="hidden min-w-[400px] overflow-scroll md:block">
              <TabsContent value="school" className="hidden md:block">
                <div className="h-full overflow-scroll">
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>286 m</p>
                      <p className="flex h-full items-center whitespace-nowrap">
                        <Icons.person
                          className="h-3 w-3 "
                          fill="rgb(251 146 60)"
                        />{" "}
                        4 min (284 m)
                      </p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p className="font-medium">
                        Safari International School{" "}
                      </p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>350 m</p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p className="font-medium">
                        Little Explorers Montessori Plus
                      </p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>500 m</p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p className="font-medium">Morning Star School</p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>1k</p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>286 m</p>
                      <p className="flex h-full items-center whitespace-nowrap">
                        <Icons.person
                          className="h-3 w-3"
                          fill="rgb(251 146 60)"
                        />{" "}
                        4 min (284 m)
                      </p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>286 m</p>
                      <p className="flex h-full items-center whitespace-nowrap">
                        <Icons.person
                          className="h-3 w-3"
                          fill="rgb(251 146 60)"
                        />{" "}
                        4 min (284 m)
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="store" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="border-none">
                  <CardContent className="h-fit p-0">
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="bank" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="border-none">
                  <CardContent className="h-fit p-0">
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="hospital" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="border-none">
                  <CardContent className="h-fit p-0">
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p>Association International School</p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p>Association International School</p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p>Association International School</p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p>Association International School</p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p>Association International School</p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="airport" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="border-none">
                  <CardContent className="h-fit p-0">
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
            <Card className="md relative mt-0.5 h-[278px] grow overflow-hidden rounded-xl border bg-slate-300 md:mt-0 md:h-full md:rounded-none md:border-0">
              <MyComponent />
            </Card>

            <div className="mt-1 block overflow-scroll md:hidden">
              <TabsContent value="school" className="">
                <Card className="rounded-xl md:border-none">
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p>Association International School</p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>286 m</p>
                      <p className="flex h-full items-center whitespace-nowrap">
                        <Icons.person
                          className="h-3 w-3"
                          fill="rgb(251 146 60)"
                        />{" "}
                        4 min (284 m)
                      </p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p>Safari International School </p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>350 m</p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p>Little Explorers Montessori Plus</p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>500 m</p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p>Morning Star School</p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>1k</p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p>Association International School</p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>286 m</p>
                      <p className="flex h-full items-center whitespace-nowrap">
                        <Icons.person
                          className="h-3 w-3"
                          fill="rgb(251 146 60)"
                        />{" "}
                        4 min (284 m)
                      </p>
                    </div>
                  </div>
                  <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                    <div className="mb-1 flex items-center justify-between">
                      <p>Association International School</p>
                    </div>
                    <div className="text-right text-sm text-b-muted">
                      <p>286 m</p>
                      <p className="flex h-full items-center whitespace-nowrap">
                        <Icons.person
                          className="h-3 w-3"
                          fill="rgb(251 146 60)"
                        />{" "}
                        4 min (284 m)
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="store" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="rounded-xl md:border-none">
                  <CardContent className="h-fit p-0">
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="bank" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="rounded-xl md:border-none">
                  <CardContent className="h-fit p-0">
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="hospital" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="rounded-xl md:border-none">
                  <CardContent className="h-fit p-0">
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="font-medium">
                          Association International School
                        </p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="font-medium">
                          Association International School
                        </p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="font-medium">
                          Association International School
                        </p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="font-medium">
                          Association International School
                        </p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                    <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="font-medium">
                          Association International School
                        </p>
                      </div>
                      <div className="text-right text-sm text-b-muted">
                        <p>286 m</p>
                        <p className="flex h-full items-center whitespace-nowrap">
                          <Icons.person
                            className="h-3 w-3"
                            fill="rgb(251 146 60)"
                          />{" "}
                          4 min (284 m)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="airport" className="overflow-scroll md:max-h-full max-h-[400px]">
                <Card className="rounded-xl md:border-none">
                  <CardContent className="h-fit p-0">
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                    <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
                      <p className="font-medium">
                        Association International School
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function Content() {
  return (
    <div className="mt-1 block overflow-scroll md:hidden">
      <TabsContent value="school" className="">
        <Card className="rounded-xl md:border-none">
          <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="text-right text-sm text-b-muted">
              <p>286 m</p>
              <p className="flex h-full items-center whitespace-nowrap">
                <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                min (284 m)
              </p>
            </div>
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-medium">Safari International School </p>
            </div>
            <div className="text-right text-sm text-b-muted">
              <p>350 m</p>
            </div>
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-medium">Little Explorers Montessori Plus</p>
            </div>
            <div className="text-right text-sm text-b-muted">
              <p>500 m</p>
            </div>
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-medium">Morning Star School</p>
            </div>
            <div className="text-right text-sm text-b-muted">
              <p>1k</p>
            </div>
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="text-right text-sm text-b-muted">
              <p>286 m</p>
              <p className="flex h-full items-center whitespace-nowrap">
                <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                min (284 m)
              </p>
            </div>
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
            <div className="mb-1 flex items-center justify-between">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="text-right text-sm text-b-muted">
              <p>286 m</p>
              <p className="flex h-full items-center whitespace-nowrap">
                <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                min (284 m)
              </p>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="store" className="overflow-scroll md:max-h-full max-h-[400px]">
        <Card className="rounded-xl md:border-none">
          <CardContent className="h-fit p-0">
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="bank" className="overflow-scroll md:max-h-full max-h-[400px]">
        <Card className="rounded-xl md:border-none">
          <CardContent className="h-fit p-0">
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="hospital" className="overflow-scroll md:max-h-full max-h-[400px]">
        <Card className="rounded-xl md:border-none">
          <CardContent className="h-fit p-0">
            <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-medium">Association International School</p>
              </div>
              <div className="text-right text-sm text-b-muted">
                <p>286 m</p>
                <p className="flex h-full items-center whitespace-nowrap">
                  <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                  min (284 m)
                </p>
              </div>
            </div>
            <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-medium">Association International School</p>
              </div>
              <div className="text-right text-sm text-b-muted">
                <p>286 m</p>
                <p className="flex h-full items-center whitespace-nowrap">
                  <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                  min (284 m)
                </p>
              </div>
            </div>
            <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-medium">Association International School</p>
              </div>
              <div className="text-right text-sm text-b-muted">
                <p>286 m</p>
                <p className="flex h-full items-center whitespace-nowrap">
                  <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                  min (284 m)
                </p>
              </div>
            </div>
            <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-medium">Association International School</p>
              </div>
              <div className="text-right text-sm text-b-muted">
                <p>286 m</p>
                <p className="flex h-full items-center whitespace-nowrap">
                  <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                  min (284 m)
                </p>
              </div>
            </div>
            <div className="flex h-full w-full cursor-pointer items-center justify-between border-b px-4 py-5 text-start text-b-accent">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-medium">Association International School</p>
              </div>
              <div className="text-right text-sm text-b-muted">
                <p>286 m</p>
                <p className="flex h-full items-center whitespace-nowrap">
                  <Icons.person className="h-3 w-3" fill="rgb(251 146 60)" /> 4
                  min (284 m)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="airport" className="overflow-scroll md:max-h-full max-h-[400px]">
        <Card className="rounded-xl md:border-none">
          <CardContent className="h-fit p-0">
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
            <div className="h-full w-full cursor-pointer items-center border-b px-4 py-5 text-start text-b-accent">
              <p className="font-medium">Association International School</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  )
}
