"use client"

import Image from "next/image"
import Link from "next/link"
import meqasaDesktopLogo from "@/../public/meqasa-logo-desktop.png"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-navigation"
import { NavigationStatus } from "@/components/navigation-status"
import StickyNavigation from "@/components/sticky-navigation"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background lg:static ">
      <div className="hidden  h-16 items-center bg-[#262636] px-6 lg:flex">
        <span>
          {/* Contact Email */}
          <ContactInfo
            icon={<Icons.mail className="h-5 w-5 text-gray-400" />}
            text="info@meqasa.com"
          />
        </span>
        {/* Navigation Status */}
        <div className="flex flex-1 items-center justify-end space-x-4 text-white">
          <NavigationStatus status={false} />
        </div>
      </div>

      {/* Logo and Banner */}
      <div className="container hidden items-center justify-center gap-8 p-1 lg:flex">
        {/* Logo */}
        <div className="w-full max-w-[300px]">
          <Link href="/">
            <Image
              alt="Meqasa logo"
              src={meqasaDesktopLogo}
              className="h-auto w-full object-contain"
              sizes="(min-width: 800px) 370px, calc(49.17vw - 14px)"
            />
          </Link>
        </div>

        {/* Inline Banner */}
        <div
          style={{
            position: "relative",
            height: "90px",
            minWidth: "728px",
          }}
        >
          <Image
            alt="developer ad"
            src="https://dve7rykno93gs.cloudfront.net/pieoq/1467979242.webp"
            fill
            sizes="(min-width: 1280px) 728px, (min-width: 900px) calc(90.56vw - 413px), calc(56vw - 111px)"
            style={{
              objectFit: "contain", // cover, contain, none
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#F8F8F8] lg:container">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav />
      </div>
      <StickyNavigation />
    </header>
  )
}

// Component for rendering contact information
function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-sm font-semibold text-white">{text}</span>
    </div>
  )
}
