"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import meqasaMobileLogo from "@/../public/meqasa-logo-mobile.png"
import {
  BugIcon,
  HomeIcon,
  NewspaperIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import { NavItem } from "@/types/nav"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

interface MainNavProps {
  items?: NavItem[]
}

const navItems: NavItem[] = [
  { title: "properties", href: "/properties" },
  { title: "agents", href: "/agents" },
  { title: "developers", href: "/developers" },
  { title: "blog", href: "/blog" },
  { title: "report", href: "/report" },
]

// const profileMenu = [
//   { path: "/profile", name: "Profile" },
//   { path: "mailto:me@bawuahboakye.com", name: "Help" },
// ]

const navMenus = [
  {
    path: "/properties",
    name: "Properties",
    Icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    path: "/agents",
    name: "Agents",
    Icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    path: "/developers",
    name: "Developers",
    Icon: <Icons.blocks className="h-5 w-5" />,
  },
  {
    path: "/blogs",
    name: "Blog",
    Icon: <NewspaperIcon className="h-5 w-5" />,
  },
  {
    path: "/land",
    name: "Land",
    Icon: <Icons.land className="h-5 w-5" />,
  },
  {
    path: "/report",
    name: "Report",
    Icon: <BugIcon className="h-5 w-5" />,
  },
  {
    path: "/account",
    name: "Account",
    Icon: <SettingsIcon className="h-5 w-5" />,
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  // onOpenChange
  function handleOnOpenChange() {
    setOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b border-gray-100 bg-white py-4 pl-4 pr-6 md:hidden">
      <div className="flex w-fit items-center">
        <div className="md:flex  md:items-center md:space-x-6">
          <span>
            <Link
              prefetch
              href="/"
              className="text-lg font-black uppercase text-slate-950"
            >
              <Image
                width={100}
                height={100}
                alt="logo"
                src={meqasaMobileLogo}
                className="h-auto w-[150px]"
              />
            </Link>
          </span>
        </div>
      </div>
      <Sheet open={open} onOpenChange={handleOnOpenChange}>
        <SheetTrigger className="md:hidden">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent
          className="flex h-full w-[100vw] flex-col border-none md:hidden"
          side="left"
        >
          <SheetHeader>
            <div className="-ml-5 -mt-3 flex w-full justify-between">
              <span>
                <Link
                  prefetch
                  href="/"
                  className="text-lg font-black uppercase text-slate-950"
                  onClick={handleOnOpenChange}
                >
                  <Image
                    width={100}
                    height={100}
                    alt="logo"
                    src={meqasaMobileLogo}
                    className="h-auto w-[150px]"
                  />
                </Link>
              </span>
            </div>
          </SheetHeader>
          <div className="my-10 flex-1">
            <NavigationMenu className="w-full max-w-none justify-start">
              <div className="relative w-full">
                <NavigationMenuList className="flex flex-col items-stretch space-x-0 space-y-1">
                  {navMenus?.map(({ path, Icon, name }, index) => {
                    const isActive = pathname.startsWith(path)
                    return (
                      <NavigationMenuItem key={index} className="">
                        <NavigationMenuLink>
                          <Link
                            prefetch
                            href={path}
                            className={
                              isActive
                                ? "flex items-center rounded-md bg-gray-100 px-5 py-3 text-base font-semibold text-b-accent"
                                : "flex items-center rounded-md px-5 py-3 text-base font-semibold text-gray-400 transition hover:text-b-accent"
                            }
                            onClick={handleOnOpenChange}
                          >
                            {Icon}
                            <span className="ml-4">{name}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </div>
            </NavigationMenu>
          </div>
          <footer className="space-y-3 py-4">
            <hr className="border border-gray-100" />

            <div className="grid grid-cols-1 gap-3">
              {/* <form action="/logout" method="post"> */}
              <Button
                variant="destructive"
                className="w-full self-start bg-b-primary font-semibold"
              >
                <Icons.list className="h-5 w-5" />
                <span className="ml-4 md:hidden lg:inline-block">
                  List property
                </span>
              </Button>
              {/* </form> */}
            </div>
          </footer>
        </SheetContent>
      </Sheet>
    </header>
  )
}
