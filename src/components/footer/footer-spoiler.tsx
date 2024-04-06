import React from "react"
import Link from "next/link"

// TODO: BUILD CUSTOM SPOILER COMPONENT
export function FooterSpoiler({
  title,
  links,
  isSpoiler,
}: {
  title: string
  links: { label: string; link: string }[]
  isSpoiler?: boolean
}) {
  // Create sub-links
  const subLinks = links.map((link, i) => (
    <Link
      href={link.link}
      className="line-clamp-1 block h-[48px] text-xs font-normal capitalize leading-5 no-underline hover:font-semibold lg:h-5"
      key={i}
    >
      {link.label}
    </Link>
  ))
  return (
    <div className="max-w-[256px] text-white">
      <h6 className="line-clamp-1 py-[14.5px] text-sm font-bold capitalize lg:mb-1 lg:p-0">
        {title}
      </h6>
      <div>
        {/* show & hide more content */}
        {isSpoiler ? <div>{subLinks}</div> : <>{subLinks}</>}
      </div>
    </div>
  )
}
