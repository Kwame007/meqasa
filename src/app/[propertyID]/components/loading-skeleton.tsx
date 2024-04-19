"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center space-x-0">
      <div className="container my-4 flex gap-5 px-0">
        <Skeleton className="h-5 w-20 rounded-sm" />
        <Skeleton className="h-5 w-20 rounded-sm" />
      </div>
      <div className="container mb-2 flex gap-5 px-0">
        <Skeleton className="h-6 w-[900px] rounded-sm" />
      </div>
      <Skeleton className="h-[400px] w-full rounded-none" />
      <div className="container my-5 px-0">
        <div className="flex gap-96">
          <div className="space-y-2 ">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
      <div className="container my-5 px-0">
        <div className="flex gap-4">
          <div className=" flex gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-14" />
          </div>
          <div className=" flex gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-14" />
          </div>
          <div className=" flex gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-14" />
          </div>
        </div>
      </div>
    </div>
  )
}
