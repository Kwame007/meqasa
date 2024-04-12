"use client"

import React from "react"

// import ReactPlayer from "react-player/lazy"

import { Card } from "@/components/ui/card"

// Define the video URL as a prop for reusability
const videoUrl = "https://www.youtube.com/watch?v=WJ-phLEDMPc"

// VideoPlayer component
export function PropertyVideo() {
  return (
    // Lazy load the YouTube player
    <Card className="aspect-video h-fit overflow-hidden rounded-xl border md:aspect-auto">
      {/* <ReactPlayer
        url={videoUrl} // Use the videoUrl prop
        controls={true}
        width={"100%"}
        height={"420px"}
      /> */}
    </Card>
  )
}
