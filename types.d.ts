// Banner ad with source, description, and link.
type BannerAdType = { src: string; desc: string; href: string }

// Neighborhood details with location, source, and link.
type RecommendedLocationType = { location: string; src: string; href: string }

// Featured project details with project name, images, location, status, unit types, description, logo, and link.
type FeaturedPropertiesType = {
  project: string
  images: string[]
  location: {
    city: string
    state: string
  }
  status: string
  unitTypes: number[]
  description: string
  logo: string
  href: string
}

// Blog post details including title, author, poster, company, datePosted, and link.
type BlogPost = {
  title: string
  author: string
  poster: string
  company: string
  datePosted: string
  href: string
}

// Define the shape of properties expected by the PropertyCard component
type PropertyCardProps = {
  children: React.ReactNode
  height?: string
  width?: string
  images: string[]
  imgHeight?: string
  shadow?: boolean
  roundedTop?: boolean
  href: string
  sizes?: string
}

// agent logos
 type AgentLogo = {
  src: string
  label: string
}

// developers
type DeveloperType = {
  name: string
  location: string
  units: string | number[]
  projects: ProjectsType
  description: string
  logo: string
  cover: string
  website: string
  socials: {
    facebook: boolean
    twitter: boolean
    instagram: boolean
    linkedin: true
    youtube: true
  }
  id: string
  developer: {
    name: string
    phone: string
    email: string
    logo: string
  }
}

// agents
type AgentType = {
  name: string
  location: string
  listings: string
  isVerified: boolean
  description: string
  logo?: string
  socials: {
    facebook: boolean
    twitter: boolean
    instagram: boolean
    linkedin: boolean
  }
  id: string
  website?: string
}

// projects
type ProjectsType = {
  currentProjects: {
    name: string
    image: string
    status: string
    id: string
  }[]
  completedProjects: {
    name: string
    image: string
    status: string
    id: string
  }[]
  units: PropertyListing[]
}

// Property listing details including title, price, location, images, amenities, description, and more.
type PropertyListing = {
  title: string
  projectName?: string
  type: string
  price: string
  location: string
  images: string[]
  amenities: {
    beds: string
    baths: string
    sqft: string
  }
  desc: string
  categories?: {
    label: string
    href: string
  }[]
  negotiable?: boolean
  isDeveloper?: boolean
  furnished?: boolean
  fullyFurnished?: boolean
  balcony?: boolean
  address?: string
  neighborhood?: string
  reference?: string
  id: string
  amenity: {
    // Various property amenities.
    ac?: boolean
    microwave?: boolean
    internet?: boolean
    fans?: boolean
    terrace?: boolean
    pool?: boolean
    cooker?: boolean
    garden?: boolean
    security?: boolean
    washer?: boolean
    cable?: boolean
    gen?: boolean
    garage?: boolean
    cabinets?: boolean
    water?: boolean
  }
  viewCount: number
  agent: { name: string; phone: string; email: string; logo: string }
  developer: { name: string; phone: string; email: string; logo: string }
}

// Amenity data with optional beds, baths, garage, and sqft details.
type AmenityData = {
  beds?: string
  baths?: string
  garage?: string
  sqft?: string
  // Add more amenities as needed
}

// agent logos
type AgentsCarouselProps = {
  data: AgentLogo[]
}


// Amenity data with optional beds, baths, garage, and sqft details.
 type AmenityData = {
  beds?: string
  baths?: string
  garage?: string
  sqft?: string
  // Add more amenities as needed
}

// Badges with optional properties like fullyFurnished, balcony, neighborhood, etc.
 type Badges = {
  fullyFurnished?: string | boolean
  balcony?: string | boolean
  neighborhood?: string | boolean
  furnished?: string | boolean
  address?: string | boolean
  isDeveloper?: string | boolean
}

// Property mapping with various properties and their corresponding display values.
 type PropertyMapping = {
  [index: string]:
    | string
    | ((value: string) => string)
    | ((value: boolean) => string)
  fullyFurnished: string
  balcony: string
  neighborhood: (value: string) => string
  furnished: string
  address: (value: string) => string
}

// Define the props for the carousel component
type CarouselPropsType = {
  slides: React.JSX.Element[] | undefined
  options?: OptionsTypeWithIndicatorsAndControls
  width?: string
  height?: string
}

// Define the type for the previous and next button components
type PrevNextPropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

// Define the types for UsePrevNextButtonsType hook
interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}
