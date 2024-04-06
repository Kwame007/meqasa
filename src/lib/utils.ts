import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formatter for currency to GHS (Ghanaian Cedi)
export function createNumberFormatter(
  locale?: string,
  config?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat(locale, config)
}

// Formatter for currency to GHS (Ghanaian Cedi)
export const formatToGhsCurrency = createNumberFormatter("en-GH", {
  style: "currency",
  currency: "GHS",
  useGrouping: true,
  maximumSignificantDigits: 3,
  notation: "compact",
})

// Constant for the API endpoint
export const API_ENDPOINT = "https://cuddly-meme-git-main-kwame007.vercel.app"

export const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str)

// get featured properties

export async function getFeaturedProperties(): Promise<
  FeaturedPropertiesType[]
> {
  try {
    const res = await fetch(`${API_ENDPOINT}/projects`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return await res.json()
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

// get blog posts
export async function getLatestBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_ENDPOINT}/blogs`, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return await res.json()
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

export async function getBannerAds(): Promise<BannerAdType[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/banners`, {
      next: {
        // revalidate after every hour
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.statusText}`)
    }

    const bannerAds = await response.json()

    return bannerAds
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

// Query function to fetch latest property listings
export async function getLatestListings(): Promise<PropertyListing[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/listing?_start=0&_limit=10`)

    if (!response.ok) {
      throw new Error("Failed to fetch latest listings")
    }

    const listings = (await response.json()) as PropertyListing[]
    return listings
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

/**
 * Formats a number or a string representation of a number into a Cedis currency format.
 *
 * @param number - The number or string representation of a number to format.
 * @param locale - An optional parameter specifying the locale for formatting.
 * @param opt - An optional parameter specifying custom formatting options.
 * @returns A string representing the formatted number in Cedis currency format.
 */

export function formatNumberToCedis(
  number: number | string,
  locale?: string | string[] | undefined,
  opt?: Intl.NumberFormatOptions | undefined
): string {
  // Convert string to number if it's a string
  const numberValue = typeof number === "string" ? +number : number

  try {
    // Check if the number is a string containing commas
    if (typeof number === "string" && number.includes(",")) {
      const parsedNumber = parseCommaSeparatedNumber(number)
      return formatNumber(parsedNumber, locale, opt)
    } else {
      return formatNumber(numberValue, locale, opt)
    }
  } catch (error) {
    console.error("An error occurred while formatting the number:", error)
    return "Error: Invalid input"
  }
}

/**
 * Removes commas and parses a comma-separated number string into a numeric value.
 *
 * @param number - The comma-separated number string.
 * @returns A numeric value without commas.
 */
export function parseCommaSeparatedNumber(number: string): number {
  const formattedNumber = +number.replace(/,/g, "")
  // +number.split(",").join("")
  return formattedNumber
}

/**
 * Formats a number using the provided locale and options.
 *
 * @param number - The number to format.
 * @param locale - The locale for formatting.
 * @param opt - Custom formatting options.
 * @returns A string representing the formatted number.
 */
export function formatNumber(
  number: number,
  locale?: string | string[] | undefined,
  opt?: Intl.NumberFormatOptions | undefined
): string {
  return new Intl.NumberFormat(locale, opt).format(number)
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}
