import React from "react"
import Link from "next/link"

export default function MarketNews({ index }: { index: number }) {
  return (
    <div className="mt-6 grid grid-cols-[min-content_minmax(0,1fr)] gap-[42px]">
      <p className="text-[23px] font-extrabold leading-8 text-[#9a9eb5] opacity-50">
        {`0${index + 1}`}
      </p>
      <div className="text-b-muted">
        <Link
          href={`/blog/20/${index + 2}`}
          className="line-clamp-2 text-[15px] font-bold leading-[22px] text-b-accent"
        >
          How to Set and Achieve Professional Goals for 2023 How to Set and
          Achieve Professional Goals for 2023
        </Link>
        <p className="mt-2 text-xs">Jan 23,2023</p>
      </div>
    </div>
  )
}
