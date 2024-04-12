// components/ScrollLink.tsx
import React, { PropsWithChildren } from "react"
import Link, { LinkProps } from "next/link"

// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>
type ScrollLinkProps = AnchorProps & LinkProps
// component definition
export const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId) as HTMLElement
    window.scrollTo({
      top: elem?.getBoundingClientRect().top + window.scrollY + -260,
      behavior: "smooth",
    })
  }
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}
