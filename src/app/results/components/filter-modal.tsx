import React, { useContext } from "react"
import { useClickOutside } from "@mantine/hooks"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import Box from "./Box"
import { CustomSelect2 } from "@/app/results/components/custom-select"

type SelectProps = { label: string; value: string }[]
type CustomSelectType = { children: React.ReactNode; width?: "full" }

const CustomSelectContext = React.createContext<{
  title: {
    label: string
    value: string
  }
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTitle: React.Dispatch<
    React.SetStateAction<{
      label: string
      value: string
    }>
  >
}>({
  title: {
    label: "",
    value: "",
  },
  isOpen: false,
  setIsOpen: () => {}, // Provide a default function for setIsOpen
  setTitle: () => {},
})

function CustomSelect({ children }: CustomSelectType) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [title, setTitle] = React.useState({
    label: "",
    value: "",
  })

  const ref = useClickOutside(() => setIsOpen(false), ["mouseup", "touchend"])

  return (
    <CustomSelectContext.Provider
      value={{
        title,
        isOpen,
        setIsOpen,
        setTitle,
      }}
    >
      <div className=" relative w-max min-w-max max-w-[200px]" ref={ref}>
        {children}
      </div>
    </CustomSelectContext.Provider>
  )
}

const Trigger = ({
  placeholder,
  className,
}: {
  placeholder: string
  className?: string
}) => {
  const { isOpen, setIsOpen, title } = useContext(CustomSelectContext)

  const content = title.label ? title.label : placeholder

  return (
    <Button
      className={cn(
        "flex h-[46px] w-fit cursor-pointer items-center justify-center rounded-md border  bg-transparent p-[10px] text-base font-normal leading-[22px] text-b-accent outline-none hover:bg-transparent",
        className
      )}
      onClick={(e) => {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }}
    >
      <span className="line-clamp-1 select-none font-semibold text-inherit">
        {content}
      </span>
      <ChevronDownIcon
        className={cn(
          isOpen && "-rotate-180",
          "ml-1 h-5 w-4 text-inherit transition"
        )}
      />
    </Button>
  )
}

const Portal = ({ children, width }: CustomSelectType) => {
  const { isOpen } = useContext(CustomSelectContext)

  return (
    <div
      className="absolute right-0 top-[calc(100%+13px)] z-40 max-h-[300px] w-[400px] overflow-scroll rounded-[4px] bg-white shadow-spread data-[open='true']:block data-[open='false']:hidden"
      data-open={isOpen}
    >
      {children}
    </div>
  )
}

const Content = ({ children }: CustomSelectType) => {
  return <div className="p-3">{children}</div>
}

CustomSelect.Trigger = Trigger
CustomSelect.Portal = Portal
CustomSelect.Content = Content

export function Filter({
  className,
  placeholder,
  options,
  width,
  children,
}: {
  className?: string
  width?: "full"
  placeholder: string
  options: SelectProps
  children?: React.ReactNode
}) {
  return (
    <CustomSelect>
      <CustomSelect.Trigger placeholder={placeholder} className={className} />
      <CustomSelect.Portal width={width}>
        <CustomSelect.Content>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <SelectDemo />
              <SelectDemo1 />
              {/* <CustomSelect2
                placeholder="Rent period"
                options={[
                  { label: "Rent period", value: "beds" },
                  { label: "Daily", value: "day" },
                  { label: "Weekly", value: "week" },
                  { label: "Up to 6 months", value: "month" },
                  { label: "12 months plus", value: "year" },
                ]}
              /> */}
              {/* <CustomSelect2
                placeholder="Sort by"
                options={[
                  { label: "Sort by", value: "sort" },
                  { label: "New to old", value: "new" },
                  { label: "Old to new", value: "old" },
                  { label: "Lower to higher", value: "low" },
                  { label: "Higher to lower", value: "high" },
                ]}
              /> */}
            </div>

            <div className="border-b py-8 ">
              <RadioGroup
                defaultValue="1"
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
          </div>
          <div>
            <div className="flex items-start justify-between pt-8">
              <span>Only show...</span>
              <div>
                <div className="mb-2 flex items-center space-x-2">
                  <Checkbox id="furnished" />
                  <label
                    htmlFor="furnished"
                    className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Furnished Properties
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="owner" />
                  <label
                    htmlFor="owner"
                    className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    For by Owner
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CustomSelect.Content>
      </CustomSelect.Portal>
    </CustomSelect>
  )
}

function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="h-[40px] min-w-full max-w-fit font-medium text-b-accent shadow-none">
        <SelectValue placeholder="Rent period" />
      </SelectTrigger>
      <SelectContent className="border-none text-b-accent shadow-spread">
        <SelectGroup>
          {[
            // { label: "Rent period", value: "beds" },
            { label: "Daily", value: "day" },
            { label: "Weekly", value: "week" },
            { label: "Up to 6 months", value: "month" },
            { label: "12 months plus", value: "year" },
          ].map((str, i) => (
            <SelectItem
              value={str.value}
              defaultChecked={i === 0}
              className="py-1.5 hover:text-b-accent"
              key={i}
            >
              {str.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
function SelectDemo1() {
  return (
    <Select>
      <SelectTrigger className="h-[40px] min-w-full max-w-fit font-medium text-b-accent shadow-none">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="border-none text-b-accent shadow-spread">
        <SelectGroup>
          {[
            // { label: "Sort by", value: "sort" },
            { label: "New to old", value: "new" },
            { label: "Old to new", value: "old" },
            { label: "Lower to higher", value: "low" },
            { label: "Higher to lower", value: "high" },
          ].map((str, i) => (
            <SelectItem
              value={str.value}
              defaultChecked={i === 0}
              className="py-1.5 hover:text-b-accent"
              key={i}
            >
              {str.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
