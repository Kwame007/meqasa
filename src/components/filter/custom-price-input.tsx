import React, { useContext } from "react"
import { useClickOutside } from "@mantine/hooks"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PriceSelectContext = React.createContext<{
  minPrice: string
  maxPrice: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setMinPrice: React.Dispatch<React.SetStateAction<string>>
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>
}>({
  isOpen: false,
  maxPrice: "",
  minPrice: "",
  setMinPrice: () => {},
  setMaxPrice: () => {},
  setIsOpen: () => {}, // Provide a default
})

function PriceSelect({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [minPrice, setMinPrice] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState("")

  const ref = useClickOutside(() => setIsOpen(false), ["mouseup", "touchend"])

  return (
    <PriceSelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        maxPrice,
        minPrice,
        setMaxPrice,
        setMinPrice,
      }}
    >
      <div
        className=" relative min-w-[200px] max-w-[200px] font-medium"
        ref={ref}
      >
        {children}
      </div>
    </PriceSelectContext.Provider>
  )
}

const Trigger = ({
  title,
  unit,
  className,
}: {
  title: string
  unit: string
  className?: string
}) => {
  const { isOpen, setIsOpen, minPrice, maxPrice } =
    useContext(PriceSelectContext)

  const priceText = minPrice
    ? maxPrice
      ? `${unit}${minPrice} to ${unit}${maxPrice}`
      : `${unit}${minPrice}+`
    : maxPrice
    ? `up to ${unit}${maxPrice}`
    : title

  return (
    <Button
      className={cn(
        "flex h-11 min-w-fit max-w-fit cursor-pointer items-center justify-between rounded-lg border bg-transparent p-[10px] text-base font-medium leading-[22px] text-b-accent outline-none hover:bg-transparent",
        className
      )}
      onClick={(e) => {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }}
    >
      <span className="line-clamp-1 select-none text-inherit">{priceText}</span>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </Button>
  )
}

const Portal = ({ children }: { children: React.ReactElement }) => {
  const { isOpen } = useContext(PriceSelectContext)

  return (
    <div
      className="absolute right-0 top-[calc(100%+13px)] z-40 max-h-[300px] overflow-scroll rounded-[4px] bg-white p-3 shadow-spread data-[open='true']:block data-[open='false']:hidden"
      data-open={isOpen}
    >
      {children}
    </div>
  )
}

const Content = ({
  unit,
  placeholder,
  range,
}: {
  placeholder: { min: string; max: string }
  unit: string
  range: { value: string; label: string }[]
}) => {
  const {setMaxPrice, setMinPrice } =
    useContext(PriceSelectContext)

  // handle min-price change
  // function handleMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
  //   setMinPrice(e.target.value)
  // }

  // handle max-price change
  // function handleMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
  //   setMaxPrice(e.target.value)
  // }

  return (
    <div className="flex items-center gap-3">
      <div>
        <Label htmlFor="minPrice" className="flex">
          <span className="flex items-center rounded-l-md border border-r-0 bg-[#f8f8f8] px-2 text-xs text-b-accent">
            {unit}
          </span>
          {/* <Input
            id="minPrice"
            name="min"
            className="h-[42px] w-[112px] rounded-md rounded-l-none shadow-none"
            placeholder={placeholder.min}
            value={minPrice}
            onChange={handleMinPrice}
          /> */}
          <Select onValueChange={(value) => setMinPrice(value)}>
            <SelectTrigger className="w-[180px] rounded-l-none border-l-0">
              <SelectValue placeholder={placeholder.min} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {range.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
      </div>
      <div className="h-[1px] w-1.5 bg-b-accent">&nbsp;</div>
      <div>
        <Label htmlFor="maxPrice" className="flex">
          <span className="flex items-center rounded-l-md border border-r-0 bg-[#f8f8f8] px-2 text-xs text-b-accent">
            {unit}
          </span>
          {/* <Input
            id="maxPrice"
            name="max"
            className="h-[42px] w-[112px] rounded-md rounded-l-none shadow-none"
            placeholder={placeholder.max}
            value={maxPrice}
            onChange={handleMaxPrice}
          /> */}
          <Select onValueChange={(value) => setMaxPrice(value)}>
            <SelectTrigger className="w-[180px] rounded-l-none border-l-0">
              <SelectValue placeholder={placeholder.max} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {range.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
      </div>
    </div>
  )
}

PriceSelect.Trigger = Trigger
PriceSelect.Portal = Portal
PriceSelect.Content = Content

export function PriceInput({
  title,
  placeholder,
  unit,
  className,
  range,
}: {
  placeholder: { min: string; max: string }
  unit: string
  title: string
  className?: string
  range: { value: string; label: string }[]
}) {
  return (
    <PriceSelect>
      <PriceSelect.Trigger title={title} unit={unit} className={className} />
      <PriceSelect.Portal>
        <PriceSelect.Content
          placeholder={placeholder}
          unit={unit}
          range={range}
        />
      </PriceSelect.Portal>
    </PriceSelect>
  )
}
