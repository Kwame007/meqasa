"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logoMin from "@/../public/meqasa-logo-minimize.png"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { NavigationStatus } from "./navigation-status"

export default function StickyNavigation() {
  useEffect(() => {
    const primary = document.querySelector(".primary-header")
    const secondary = document.querySelector(".sticky-nav")

    const watcher = document.createElement("div")
    watcher.setAttribute("data-scroll-watch", "")
    primary?.after(watcher)

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        secondary?.classList.toggle("md:flex", !entries[0].isIntersecting)
      },
      { rootMargin: "50px 0px 0px 0px" }
    )

    observer.observe(watcher)
  }, [])

  // create navigation link
  const navLink = siteConfig.mainNav.map((link, i) => {
    const navTitle = link.links?.map(
      (item: { href: string; label: string }) => {
        return item
      }
    )

    if (navTitle) {
      return (
        <NavigationMenu key={i}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-bold text-b-accent">
                {link.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[500px] md:grid-cols-1  lg:w-max">
                  {navTitle.map((link, i) => (
                    <ListItem key={i} title={link.label} href={link.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )
    } else {
      return (
        <NavigationMenu key={i}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent font-bold text-b-accent"
                  )}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )
    }
  })

  return (
    <div className=" insert-x-0 sticky-nav fixed top-0 z-50  hidden h-[60px] w-full animate-slide  items-center gap-8 border-b bg-background px-6 md:gap-10">
      <Link href="/" className="flex items-center">
        <Image alt="logo" src={logoMin} className="h-full w-8 object-contain" />
      </Link>
      <div className="flex grow items-center text-b-accent hover:text-b-accent">
        <div className="flex grow">{navLink}</div>
        <NavigationStatus status={true} />
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-normal leading-none text-b-accent">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
