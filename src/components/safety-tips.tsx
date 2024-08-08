"use client"

import React from "react"
import { Info } from "lucide-react"

import { Card, CardContent, CardHeader } from "./ui/card"

const SafetyTipsCard = () => {
  const safetyTips = [
    "Do not make any inspection fee without seeing the agent and property.",
    "Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.",
    "Ensure you meet the Agent in an open location.",
    "The Agent does not represent PropertyPro and PropertyPro is not liable for any monetary transaction between you and the Agent.",
  ]

  return (
    <Card className="border-none bg-[#EFF5FD]">
      <CardHeader className="flex flex-row items-center gap-4">
        <h2 className="text-base font-semibold capitalize text-b-accent lg:text-lg">
          Safety Tips
        </h2>
        <Info className="inline-block h-5 w-5 text-b-accent" />
      </CardHeader>
      <CardContent>
        <ul className="ml-4 list-inside list-disc space-y-2 text-b-accent">
          {safetyTips.map((tip, index) => (
            <li className="text-sm font-light" key={index}>
              {tip}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default SafetyTipsCard
