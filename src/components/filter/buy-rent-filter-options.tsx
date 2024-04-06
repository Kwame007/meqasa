import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { PriceInput } from "@/components/filter/custom-price-input"
import { CustomInputSelect } from "@/components/filter/custom-select"

// options for buy & rent
export function BuyRentFilterOptions({ isRentOpt }: { isRentOpt?: boolean }) {
  return (
    <div className="relative flex items-end justify-center gap-2 py-1">
      <CustomInputSelect
        placeholder="Property type"
        options={siteConfig.propertyType}
        className="h-[20px] border-none px-5 py-0 text-white"
      />
      <Separator orientation="vertical" className="h-[20px] bg-[#9A9EB5]" />
      <CustomInputSelect
        placeholder="Bedrooms"
        options={siteConfig.propertyBed}
        className="h-[20px] border-none px-5 py-0 text-white"
      />
      <Separator orientation="vertical" className="h-[20px] bg-[#9A9EB5]" />

      <PriceInput
        title="Price range"
        unit="GH₵"
        placeholder={{ min: "Min.price", max: "Max.price" }}
        className="h-[20px] border-none px-5 py-0 text-white"
      />
      {isRentOpt && (
        <>
          <Separator orientation="vertical" className="h-[20px] bg-[#9A9EB5]" />
          <div>
           
          </div>
        </>
      )}
    </div>
  )
}
