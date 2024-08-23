import * as React from "react"
import Link from "next/link"

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
import {motion, useScroll, useTransform } from "framer-motion"
interface MainNavProps {
  items: (
    | {
        href: string
        title: string
        links: {
          href: string
          label: string
        }[]
      }
    | {
        href: string
        title: string
        links?: string
      }
  )[]
}

export function MainNav({ items }: MainNavProps) {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
  );
  const height = useTransform(scrollYProgress, [0, 100], [120, 60]);
console.log(scrollYProgress)
console.log(background)
console.log(height)
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
                <ul className="grid w-[200px] p-2 md:w-[500px] lg:w-max  lg:grid-cols-1">
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
    <motion.div className="primary-header hidden h-[60px] w-full items-center justify-center text-blue-950 lg:flex">
      {navLink}
    </motion.div>
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
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
