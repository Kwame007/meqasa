import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// import { Inter as FontSans } from "next/font/google"
// import localFont from "next/font/local"

// // Google font
// // Variable font recommended
// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// // Local font
// export const fontMuli = localFont({
//   src: [
//     {
//       path: "../Muli/Muli-ExtraLight.ttf",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../Muli/Muli-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../Muli/Muli-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../Muli/Muli-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../Muli/Muli-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../Muli/Muli-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../Muli/Muli-Black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
// })
