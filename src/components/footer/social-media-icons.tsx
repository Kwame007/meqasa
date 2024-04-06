import Link from "next/link"

import { Icons } from "@/components/icons"

export function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <Icons.facebook className="h-4 w-4 text-gray-400 transition hover:text-primary" />
      </Link>
      <Link href="/">
        <Icons.twitter className="h-4 w-4 text-gray-400 transition hover:text-primary" />
      </Link>
      <Link href="/">
        <Icons.instagram className="h-4 w-4 text-gray-400 transition hover:text-primary" />
      </Link>
      <Link href="/">
        <Icons.youtube className="h-4 w-4 text-gray-400 transition hover:text-primary" />{" "}
      </Link>
    </div>
  )
}
