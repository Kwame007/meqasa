"use client"

import React, { useContext } from "react"
import { useClickOutside } from "@mantine/hooks"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Icons } from "@/components/icons"

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
      <div className="relative min-w-max max-w-[200px]" ref={ref}>
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
        "flex h-[46px] w-full cursor-pointer items-center justify-center rounded-lg border  bg-transparent p-[10px] text-base font-normal leading-[22px] text-b-accent outline-none hover:bg-transparent",
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
      <Icons.chevronDown
        className={cn(isOpen && "-rotate-180", "ml-1 h-5 w-4 transition")}
      />
    </Button>
  )
}

const Portal = ({ children, width }: CustomSelectType) => {
  const { isOpen } = useContext(CustomSelectContext)

  return (
    <div
      className={cn(
        width ? `w-[${width}]` : "w-[200px]",
        "absolute right-0 top-[calc(100%+13px)] z-40 max-h-[300px] overflow-scroll rounded-[4px] bg-white shadow-spread data-[open='true']:block data-[open='false']:hidden"
      )}
      data-open={isOpen}
    >
      {children}
    </div>
  )
}

const List = ({ children }: CustomSelectType) => {
  return <ul>{children}</ul>
}

const Item = ({ options }: { options: SelectProps }) => {
  const { title, setTitle } = useContext(CustomSelectContext)
  return (
    <RadioGroup defaultValue={title.value} className="gap-0">
      {options.map((item) => (
        <li key={item.label}>
          <label
            className="flex cursor-pointer items-center  space-x-2 border-b border-[#F3F4F6] px-2.5 py-3.5 hover:bg-[#f8f8fa]"
            htmlFor={item.value}
          >
            <RadioGroupItem
              value={item.value}
              id={item.value}
              onClick={() => setTitle(item)}
            />
            <Label
              htmlFor={item.value}
              className="w-full cursor-pointer text-sm font-medium capitalize leading-none text-b-accent peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              {item.label}
            </Label>
          </label>
        </li>
      ))}
    </RadioGroup>
  )
}

CustomSelect.Trigger = Trigger
CustomSelect.Portal = Portal
CustomSelect.List = List
CustomSelect.Item = Item

export function CustomInputSelect({
  className,
  placeholder,
  options,
  width,
}: {
  className?: string
  width?: "full"
  placeholder: string
  options: SelectProps
}) {
  return (
    <CustomSelect>
      <CustomSelect.Trigger placeholder={placeholder} className={className} />
      <CustomSelect.Portal width={width}>
        <CustomSelect.List>
          <CustomSelect.Item options={options} />
        </CustomSelect.List>
      </CustomSelect.Portal>
    </CustomSelect>
  )
}
