import { siteConfig } from "@/config/site"

import { Separator } from "../ui/separator"
import { PriceInput } from "./custom-price-input"

// options for land
export function LandFilterOptions() {
  return (
    <div className="flex items-end justify-center gap-2 py-1">
      <PriceInput
        title="Price range"
        unit="GH₵"
        placeholder={{ min: "Min.price", max: "Max.price" }}
        className="h-[20px] border-none px-5 py-0 text-white"
        range={siteConfig.priceRange}
      />
      <Separator orientation="vertical" className="h-[20px] bg-[#9A9EB5]" />
      <PriceInput
        title="Area range"
        unit="m²"
        placeholder={{ min: "Min.area", max: "Max.area" }}
        className="h-[20px] border-none px-5 py-0 text-white"
        range={siteConfig.priceRange}
      />
    </div>
  )
}
