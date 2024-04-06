import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

export default function PropertyGuide({
  datePosted,
  href,
  poster,
  title,
}: BlogPost) {
  return (
    <article className="grid gap-[48px] border-b pb-4 text-b-accent last:border-b-0 lg:grid-cols-[minmax(0,1fr)_192px] lg:border-0">
      <div>
        <Link href={href}>
          <h3 className="text-sm font-bold lg:text-base">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-5 text-b-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illo rerum, reprehenderit quia consequuntur praesentium quidem,
            neque vero accusantium nam facilis maxime, necessitatibus id sequi
            doloribus facere aut omnis odit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident illo rerum, reprehenderit
            quia consequuntur praesentium quidem, neque vero accusantium nam
            facilis maxime, necessitatibus id sequi doloribus facere aut omnis
            odit!
          </p>
          <span className="mt-4 block text-xs text-b-muted">{datePosted}</span>
        </Link>
      </div>
      <div className="hidden lg:block  lg:w-full lg:overflow-hidden lg:rounded-2xl">
        <Card className="overflow-hidden border-none lg:h-[144px] lg:rounded-2xl">
          <CardContent className="p-0">
            <Link href={href}>
              <Image
                src={poster}
                alt="blog"
                width={192}
                height={144}
                className="block h-full w-full object-cover"
              />
            </Link>
          </CardContent>
        </Card>
      </div>
    </article>
  )
}
