import React, { useContext } from "react"
import { useClickOutside } from "@mantine/hooks"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDownIcon } from "lucide-react"

const PriceSelectContext = React.createContext<{
  // title: { min: string; max: string }
  minPrice: string
  maxPrice: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setMinPrice: React.Dispatch<React.SetStateAction<string>>
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>
  // setTitle: React.Dispatch<React.SetStateAction<{ min: string; max: string }>>
}>({
  // title: { min: "", max: "" },
  isOpen: false,
  maxPrice: "",
  minPrice: "",
  setMinPrice: () => {},
  setMaxPrice: () => {},
  // setTitle: () => {},
  setIsOpen: () => {}, // Provide a default function for setIsOpen
})

function PriceSelect({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [minPrice, setMinPrice] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState("")
  // const [title, setTitle] = React.useState({ min: "", max: "" })
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
      <div className=" relative w-max min-w-max max-w-[200px]" ref={ref}>
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
        "flex w-fit cursor-pointer items-center justify-center rounded-md border bg-transparent  px-3 py-2 text-sm font-semibold leading-[22px] text-b-accent outline-none hover:bg-transparent",
        className
      )}
      onClick={(e) => {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }}
    >
      <span className="line-clamp-1 select-none text-inherit">{priceText}</span>
      <ChevronDownIcon
        className="ml-1 h-5 w-4 text-b-muted transition"
      />
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
}: {
  placeholder: { min: string; max: string }
  unit: string
}) => {
  const { maxPrice, minPrice, setMaxPrice, setMinPrice } =
    useContext(PriceSelectContext)

  // handle min-price change
  function handleMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
    setMinPrice(e.target.value)
  }

  // handle max-price change
  function handleMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
    setMaxPrice(e.target.value)
  }

  return (
    <div className="flex items-center gap-3">
      <div>
        <Label htmlFor="minPrice" className="flex">
          <span className="flex items-center rounded-l-md border border-r-0 bg-[#f8f8f8] px-2 text-xs text-b-accent">
            {unit}
          </span>
          <Input
            id="minPrice"
            name="min"
            className="h-[42px] w-[112px] rounded-md rounded-l-none shadow-none"
            placeholder={placeholder.min}
            value={minPrice}
            onChange={handleMinPrice}
          />
        </Label>
      </div>
      <div className="h-[1px] w-1.5 bg-b-accent">&nbsp;</div>
      <div>
        <Label htmlFor="maxPrice" className="flex">
          <span className="flex items-center rounded-l-md border border-r-0 bg-[#f8f8f8] px-2 text-xs text-b-accent">
            {unit}
          </span>
          <Input
            id="maxPrice"
            name="max"
            className="h-[42px] w-[112px] rounded-md rounded-l-none shadow-none"
            placeholder={placeholder.max}
            value={maxPrice}
            onChange={handleMaxPrice}
          />
        </Label>
      </div>
    </div>
  )
}

PriceSelect.Trigger = Trigger
PriceSelect.Portal = Portal
PriceSelect.Content = Content

export function Price({
  title,
  placeholder,
  unit,
  className,
}: {
  placeholder: { min: string; max: string }
  unit: string
  title: string
  className?: string
}) {
  return (
    <PriceSelect>
      <PriceSelect.Trigger title={title} unit={unit} className={className} />
      <PriceSelect.Portal>
        <PriceSelect.Content placeholder={placeholder} unit={unit} />
      </PriceSelect.Portal>
    </PriceSelect>
  )
}
