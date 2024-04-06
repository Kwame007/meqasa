"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export function UserAvatar() {
  return (
    <div>
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link
            href="#"
            className="flex h-full items-center justify-center space-x-1"
          >
            <Avatar className="flex h-[35px] w-[35px] items-center rounded-full text-b-accent shadow-spread">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full"
              />
              <AvatarFallback className="flex h-[35px] w-[35px] items-center justify-center rounded-full border bg-slate-50 text-sm font-bold text-inherit">
                US
              </AvatarFallback>
            </Avatar>
            {/* <Icons.chevronDown className="h-5 w-5 text-inherit" /> */}
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuGroup>
            <DropdownMenuItem className="gap-2 py-2 font-semibold">
              <Link href="#" className="flex items-center gap-2">
                <Icons.user className="h-4 w-4" />
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 py-2 font-semibold">
              <Link href="#" className="flex items-center gap-2">
                <Icons.home className="h-4 w-4" />
                Saved Properties
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 py-2 font-semibold">
              <Link href="#" className="flex items-center gap-2">
                <Icons.star className="h-4 w-4" />
                Favorites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 py-2 font-semibold">
              <Link href="#" className="flex items-center gap-2">
                <Icons.logout className="h-4 w-4" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-xs font-bold">
            Logged in as: @kwa
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
