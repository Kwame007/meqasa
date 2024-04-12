"use client"

import React from "react"

export function PropertyDescription({ description }: { description: string }) {
  return (
    <>
      <p className="mb-3 line-clamp-[10] text-b-muted leading-7">
        {description}
      </p>
    </>
  )
}
