import React from "react"
import Image, { StaticImageData } from "next/image"

import { cn, shimmer, toBase64 } from "@/lib/utils"

type PropType = {
  selected: boolean
  img: string | StaticImageData
  onClick?: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, img } = props

  return (
    <div className="h-full w-full">
      <button onClick={onClick} type="button" className="w-full">
        <Image
          alt="test"
          src={img}
          width={256}
          height={130}
          className="h-[130px] w-full cursor-pointer object-cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(256, 130)
          )}`}
          sizes="256px"
          priority
        />
      </button>
    </div>
  )
}
