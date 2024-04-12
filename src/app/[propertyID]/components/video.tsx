"use client"

import React from "react"
import ReactPlayer from "react-player/lazy"

// Define the video URL as a prop for reusability
const videoUrl = "https://www.youtube.com/watch?v=WJ-phLEDMPc"

// VideoPlayer component
export function VideoPlayer() {
  return (
    // Lazy load the YouTube player
    <ReactPlayer
      url={videoUrl} // Use the videoUrl prop
      controls={true}
      width={"100%"}
      height={"300px"}
    />
  )
}
