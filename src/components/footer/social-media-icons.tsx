import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import { Icons } from "@/components/icons"

export function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <Facebook
          className="h-5 w-5 text-gray-400 transition hover:text-primary"
          strokeWidth="1.3"
        />
      </Link>
      <Link href="/">
        <Twitter
          className="h-5 w-5 text-gray-400 transition hover:text-primary"
          strokeWidth="1.3"
        />
      </Link>
      <Link href="/">
        <Instagram
          className="h-5 w-5 text-gray-400 transition hover:text-primary"
          strokeWidth="1.3"
        />
      </Link>
      <Link href="/">
        <Youtube
          className="h-5 w-5 text-gray-400 transition hover:text-primary"
          strokeWidth="1.3"
        />{" "}
      </Link>
    </div>
  )
}
