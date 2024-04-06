import React from "react"
import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"

import { UserAvatar } from "./UserAvatar"

interface NavStatusProps {
  status: boolean
}

interface LoginLinkProps {
  href: string
  label: string
}

function LoginLink({ href, label }: LoginLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={buttonVariants({
          size: "default",
          variant: "ghost",
          // className: "font-extrabold",
        })}
      >
        {label}
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  )
}

export function NavigationStatus({ status }: NavStatusProps) {
  const renderLoginLinks = () => (
    <ul className="flex items-center space-x-1">
      <LoginLink href="/login" label="Login" />
      <LoginLink href="/sign-up" label="Sign Up" />
    </ul>
  )

  const renderUserDashboard = () => (
    <div className="flex items-center gap-4 space-x-1">
      <Button
        variant="ghost"
        className=" text-sm font-bold text-inherit hover:text-b-accent"
      >
        Go to dashboard
      </Button>
      <UserAvatar />
    </div>
  )

  return (
    <div>
      <div className="flex items-center gap-4 space-x-1">
        {status ? renderUserDashboard() : renderLoginLinks()}
        <Button>List property</Button>
      </div>
    </div>
  )
}
