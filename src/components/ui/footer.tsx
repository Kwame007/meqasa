"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { FooterSpoiler } from "@/components/footer/footer-spoiler"
import { SocialMediaIcons } from "@/components/footer/social-media-icons"
import { Icons } from "@/components/icons"

import EmailSubscription from "../footer/email-subscription"
import { Button, buttonVariants } from "./button"

export default function Footer() {
  return (
    <footer className="bg-b-secondary text-white">
      <EmailSubscription />
      <aside className="bg-b-secondary py-8 text-white md:py-20">
        <div className="px-4 md:container md:p-0">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {siteConfig.footerNav.map((link, index) => (
              <FooterSpoiler {...link} key={index} />
            ))}
          </div>
          <Separator className="my-8" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {siteConfig.footerNavCompany.map((link, index) => (
              <FooterSpoiler {...link} key={index} />
            ))}
            <div className="max-w-[256px] text-white">
              <h6 className="mb-1 line-clamp-1 text-sm font-bold capitalize">
                {siteConfig.footerContact.title}
              </h6>
              <div className="flex items-center gap-4">
                <Icons.mail className="h-4 w-4 text-gray-400" />
                <Link
                  href={siteConfig.footerContact.links[0].link}
                  className="block h-5 text-xs font-normal capitalize leading-5 no-underline hover:font-semibold"
                >
                  {siteConfig.footerContact.links[0].label}
                </Link>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex items-center justify-between">
            <SocialMediaIcons />
            <Button
              className={cn(
                buttonVariants({
                  size: "sm",
                }),
                "flex items-end gap-2 "
              )}
            >
              Back to top <Icons.chevronUp className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-4 text-xs font-normal leading-6">
            © 2024 meQasa – Real Estate Marketplace
          </p>
        </div>
      </aside>
    </footer>
  )
}
