import React from "react"
import Image from "next/image"
import Link from "next/link"
import appstore from "@/../public/appstore.svg"
import playstore from "@/../public/playstore.svg"
import appSrc from "@/../public/ultra.png"

import { Card } from "@/components/ui/card"

// Component for banner
export function MobileAppBanner() {
  return (
    <Card className="my-12 flex h-[150px]  items-center justify-center rounded-none border-0 bg-b-blue-light px-4 text-b-accent lg:my-12 lg:h-[288px] lg:rounded-2xl lg:border">
      <div className="grid grid-cols-2 items-center justify-center">
        <div>
          <h4 className="text-lg font-extrabold text-inherit lg:text-[28px] lg:leading-[38.25px]">
            Do more on the app.
          </h4>
          <p className="text-sm text-inherit lg:mt-2 lg:text-base lg:font-bold lg:leading-7">
            Save your searches, track enquiries and more.
            <br />{" "}
            <span className="hidden lg:block">
              Available on iOS and Android
            </span>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-5">
            <AppStoreLink src={appstore} alt="seeker app" link="/" />
            <AppStoreLink src={playstore} alt="seeker app" link="/" />
          </div>
        </div>
        <div>
          <Image
            alt="mobile app mockup"
            src={appSrc}
            width={350}
            height={200}
            className="h-full w-full object-cover"
            sizes="350px ,200px"
          />
        </div>
      </div>
    </Card>
  )
}

// Component for rendering btn links
function AppStoreLink({
  src,
  alt,
  link,
}: {
  src: string
  alt: string
  link: string
}) {
  return (
    <Link href={link}>
      <div>
        <Image src={src} alt={alt} width={176} height={52} />
      </div>
    </Link>
  )
}
