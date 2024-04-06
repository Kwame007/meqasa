import Image from "next/image"
import Link from "next/link"

import { cn, shimmer, toBase64 } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default async function FeaturedProperty({
  property,
}: {
  property: FeaturedPropertiesType
}) {
  const { images, location, status, unitTypes, description, logo, href } =
    property

  return (
    <Card className="relative min-w-[320px] overflow-hidden rounded-2xl border-0 shadow">
      <CardHeader className="h-[162px] overflow-hidden p-0 lg:h-[272px]">
        <Link href={`/developers/1/projects/1`} className="block no-underline">
          <Image
            className="object-cover"
            width={554}
            height={272}
            src={images[0]}
            alt={property.project}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(554, 272)
            )}`}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
            sizes="554px"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative">
          <Link href="/2" className="block">
            <div className="grid grid-cols-[minmax(0,1fr)_max-content] lg:gap-3">
              <div className="">
                <CardTitle className="text-base font-bold leading-5 text-b-accent lg:text-[23px] lg:leading-8">
                  {property.project}
                </CardTitle>
                <div className="flex items-center gap-[5px] text-xs font-medium leading-6 text-b-muted lg:text-sm lg:leading-8">
                  <span>{location.city}</span>
                  <Icons.dot className="h-[15px] w-[15px] text-b-muted-dark" />
                  <span>{location.state}</span>
                </div>
                <div className="mt-1 flex items-center gap-[5px] font-medium leading-5 text-b-muted">
                  <Badge
                    className={cn(
                      status === "ongoing"
                        ? "bg-b-border-ongoing"
                        : "bg-b-border-completed",
                      "uppercase"
                    )}
                  >
                    {status}
                  </Badge>
                  <Icons.dot className="h-[13px] w-[15px] text-b-accent" />
                  <span className="text-sm text-b-accent lg:text-base">
                    {unitTypes.join(", ")} Bedrooms
                  </span>
                </div>
                <div className="relative mt-2 hidden lg:grid lg:grid-cols-[minmax(0,1fr)_max-content]">
                  <p className="mt-2 line-clamp-2 w-full text-b-accent">
                    {description}
                  </p>
                </div>
              </div>
              <div>
                <Card className="size-[50px] lg:size-[70px] overflow-hidden  border-none shadow">
                  <Image
                    src={logo}
                    alt={property.project}
                    width={70}
                    height={0}
                    className="h-[50px] w-[50px] rounded-sm object-contain lg:h-[70px] lg:w-[70px]"
                    sizes="70px"
                  />
                </Card>
              </div>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
