import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { cn, shimmer, toBase64 } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function DeveloperProjectCard({
  img,
  location,
  logo,
  name,
  status,
}: {
  name: string
  status: string
  img: string
  location: string
  logo: string
}) {
  return (
    <Card className="md:w-[335px relative mb-4 h-[200px] w-full overflow-hidden rounded-xl text-b-accent">
      <Link href="/developers/1/projects/2" className="group">
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
          }}
        />{" "}
        <Image
          className="h-full w-full object-cover transition md:group-hover:scale-[1.05]"
          width={321}
          height={171}
          src={img}
          alt="Your alt text"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(335, 200)
          )}`}
          sizes="335px"
        />
        <div className="absolute inset-0">
          <Badge
            className={cn(
              status === "ongoing"
                ? "bg-b-border-ongoing"
                : "bg-b-border-completed",
              "absolute left-4 top-4 z-30 uppercase"
            )}
          >
            {status}
          </Badge>

          <div className="absolute inset-x-4 bottom-4 z-20">
            <div className="flex items-end justify-between">
              <div className="text-white">
                <h4
                  className="line-clamp-1 w-full text-base font-bold capitalize drop-shadow-md"
                  style={{ textShadow: "1px 1px 2px rgba(0, 0, 0,0.18)" }}
                >
                  {name}
                </h4>

                <div className="flex items-center gap-1 pt-1 text-sm text-[#E4E5EA] drop-shadow-md">
                  <MapPin className=" h-5 w-5 text-primary" strokeWidth="1.3" />{" "}
                  <span
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0,0.18)" }}
                  >
                    {location}
                  </span>
                </div>
              </div>

              <div>
                <Card className="size-[50px] md:size-[70px] overflow-hidden  border-none shadow">
                  <Image
                    src={logo}
                    alt={"project"}
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px] rounded-sm object-contain md:h-[50px] md:w-[50px]"
                    sizes="50px"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  )
}
