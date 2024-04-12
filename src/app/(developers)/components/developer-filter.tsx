"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Icons } from "../../../components/icons"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"

const options = [
  { label: "house", value: "house" },
  { label: "apartment", value: "apartment" },
  { label: "townhouse", value: "townhouse" },
  { label: "office", value: "office" },
  { label: "commercial space", value: "commercial" },
  { label: "warehouse", value: "warehouse" },
  { label: "guest house", value: "guest" },
  { label: "shop", value: "shop" },
  { label: "retail", value: "retail" },
  { label: "beach house", value: "beach" },
]
const options2 = [
  { label: "1 Bed", value: "1" },
  { label: "2 Beds", value: "2" },
  { label: "3 Beds", value: "3" },
  { label: "4 Beds", value: "4" },
  { label: "5+ Beds", value: "5" },
]

export default function Filter() {
  return (
    <>
      <div className="mt-8 h-20 rounded-md bg-[rgba(166,174,216,0.5)] px-6 hidden  md:flex items-center w-full">
        <form
          action=""
          className="grid w-full"
          style={{
            gap: "12px",
            alignItems: "center",
            gridTemplateColumns:
              "repeat(2,max-content) 4fr repeat(3,max-content)",
          }}
        >
          <Select name="category">
            <SelectTrigger className="h-[40px] min-w-[150px] max-w-fit border-0 bg-white font-medium text-b-accent">
              <SelectValue placeholder="Sale" />
            </SelectTrigger>
            <SelectContent className="border-none text-b-accent shadow-spread">
              <SelectGroup>
                <SelectItem
                  value="sale"
                  defaultChecked
                  className="py-1.5 hover:text-b-accent"
                >
                  Sale
                </SelectItem>
                <SelectItem value="rent" className="py-1.5 hover:text-b-accent">
                  Rent
                </SelectItem>
                <SelectItem
                  value="pre-sale"
                  className="py-1.5 hover:text-b-accent"
                >
                  Pre-selling/Off-plan sale
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select name="type">
            <SelectTrigger className="h-[40px] min-w-[150px] max-w-fit border-0 bg-white font-medium text-b-accent ">
              <SelectValue placeholder="Property Type" className="capitalize" />
            </SelectTrigger>
            <SelectContent className="max-h-52 w-[200px] overflow-scroll border-none p-0 shadow-sm">
              <SelectGroup>
                {options.map((opt, i) => (
                  <SelectItem
                    value={opt.value}
                    key={i}
                    className="py-1.5 capitalize hover:text-b-accent"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="relative w-full">
            <Input
              type="search"
              name="search"
              placeholder="Search location..."
              className="h-[40px] border-0  p-[10px]  shadow-none"
            />
          </div>
          <div className="relative w-full">
            <Input
              type="number"
              name="max"
              placeholder="Max.price"
              className="h-11 w-[150px]  p-[10px]"
            />
          </div>
          <Select name="bed">
            <SelectTrigger className="h-11 min-w-[150px] max-w-fit bg-white font-medium text-b-accent">
              <SelectValue placeholder="Bed" />
            </SelectTrigger>
            <SelectContent className="max-h-52 w-[200px] overflow-scroll border-none p-0">
              <SelectGroup>
                {options2.map((opt, i) => (
                  <SelectItem
                    value={opt.value}
                    key={i}
                    className="py-1.5 hover:text-b-accent"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            className="font-bold"
          >
            Search
          </Button>
        </form>
      </div>
      <div className=" p-3 border-b shadow-sm bg-white  fixed top-[51px] inset-x-0 z-50 md:hidden">
        <Dialog>
          <DialogTrigger className="w-full">
            <div
              className="flex h-11 items-center gap-3 rounded-lg bg-[#F3F4F6] p-2 md:hidden"
              role="button"
              tabIndex={0}
            >
              <Icons.search className="w-5" fill="#1b235a" />
              <p className="text-slate-400 text-sm">Search location...</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <form action="">
              <div className="mt-5">
                <Input
                  type="search"
                  name="search"
                  placeholder="Search location..."
                  className="h-11 p-[10px]"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Select name="category">
                  <SelectTrigger className="h-11 w-full bg-white font-medium text-b-accent">
                    <SelectValue placeholder="Sale" />
                  </SelectTrigger>
                  <SelectContent className="border-none text-b-accent">
                    <SelectGroup>
                      <SelectItem
                        value="sale"
                        defaultChecked
                        className="py-1.5 hover:text-b-accent"
                      >
                        Sale
                      </SelectItem>
                      <SelectItem
                        value="rent"
                        className="py-1.5 hover:text-b-accent"
                      >
                        Rent
                      </SelectItem>
                      <SelectItem
                        value="pre-sale"
                        className="py-1.5 hover:text-b-accent"
                      >
                        Pre-selling/Off-plan sale
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select name="type">
                  <SelectTrigger className="h-11 w-full  bg-white font-medium text-b-accent ">
                    <SelectValue
                      placeholder="Property Type"
                      className="capitalize"
                    />
                  </SelectTrigger>
                  <SelectContent className="max-h-52 w-[200px] overflow-scroll border-none p-0 shadow-sm">
                    <SelectGroup>
                      {options.map((opt, i) => (
                        <SelectItem
                          value={opt.value}
                          key={i}
                          className="py-1.5 capitalize hover:text-b-accent"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4">
                <Input
                  type="number"
                  name="max"
                  placeholder="Max.price"
                  className="h-11 w-full p-[10px]"
                />
              </div>
              <div className="mt-4">
                <Select name="bed">
                  <SelectTrigger className="h-11 w-full bg-white font-medium text-b-accent">
                    <SelectValue placeholder="Bed" />
                  </SelectTrigger>
                  <SelectContent className="max-h-52 w-full overflow-scroll border-none p-0">
                    <SelectGroup>
                      {options2.map((opt, i) => (
                        <SelectItem
                          value={opt.value}
                          key={i}
                          className="py-1.5 hover:text-b-accent"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="mt-4 w-full bg-primary font-bold"
              >
                Search
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
