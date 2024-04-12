"use client"

import React from "react"
import Image from "next/image"
// Import your icons here
import icon0 from "@/../public/icons/aircon@3x.webp"
import icon1 from "@/../public/icons/balcony@3x.webp"
import icon2 from "@/../public/icons/dryer@3x.webp"
import icon3 from "@/../public/icons/fibre_ready@3x.webp"
import icon4 from "@/../public/icons/fridge@3x.j.webp"
import icon5 from "@/../public/icons/garden@3x.png"
import icon6 from "@/../public/icons/generator@3x.webp"
import icon7 from "@/../public/icons/heater@3x.png"
import icon8 from "@/../public/icons/maid_room@3x.webp"
import icon9 from "@/../public/icons/pool@3x.webp"

const amenities = [
  { icon: icon0, label: "Air conditioning" },
  { icon: icon1, label: "Terrace" },
  { icon: icon2, label: "Washing machine" },
  { icon: icon3, label: "Internet" },
  { icon: icon4, label: "Fridge" },
  { icon: icon5, label: "Garden" },
  { icon: icon6, label: "Generator" },
  { icon: icon7, label: "Microwave" },
  { icon: icon8, label: "Maid's quarters" },
  { icon: icon9, label: "Swimming pool" },
]

export function PropertyAmenities({ cols }: { cols?: string }) {
  return (
    <div className="text-b-accent">
      <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-8`}>
        {amenities
          .filter((amenity) => amenity.label) // Filter out falsy labels
          .map((amenity, index) => (
            <div key={index} className="flex items-center gap-1">
              <Image
                alt="icon"
                src={amenity.icon}
                className="h-6 w-6 object-cover"
              />
              <p className="font-medium">{amenity.label}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
