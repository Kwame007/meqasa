"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

// custom props
type SliderProps = {
  rangeColor: [string, string, string]
}

const SliderTenure = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[#E9E9E9]">
      <SliderPrimitive.Range
        className="absolute h-full"
        style={{
          background: " linear-gradient(to right, #ffb0ce, #ff70a6, #ff609c",
        }}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-transparent bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      <div className="mx-auto mt-[3px] h-2 max-w-[8px] rounded-full bg-[#ff609c]" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
SliderTenure.displayName = SliderPrimitive.Root.displayName

export { SliderTenure }
