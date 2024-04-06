export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Meqasa.com",
  description: "Welcome to meQasa ghana's number one property website",
  mainNav: [
    {
      href: "/properties-for-rent-in-ghana",
      title: "For Rent",
      links: [
        {
          href: "/apartments-for-rent-in-Accra",
          label: "Apartments For Rent",
        },
        {
          href: "/houses-for-rent-in-ghana",
          label: "Houses For Sale in Ghana",
        },
        {
          href: "/offices-for-rent-in-Accra",
          label: "Office Spaces",
        },
        {
          href: "/houses-for-rent-in-Accra",
          label: "Houses For Rent in Ghana",
        },
        {
          href: "/rented-properties",
          label: "Rented Properties",
        },
      ],
    },
    {
      href: "/properties-for-rent-in-ghana",
      title: "For Sale",
      links: [
        {
          href: "/apartments-for-sale-in-Accra",
          label: "Apartment For Sale",
        },
        {
          href: "/houses-for-sale-in-ghana",
          label: "Houses For sale",
        },
        {
          href: "/offices-for-sale-in-Accra",
          label: "Office Spaces",
        },
        {
          href: "/rented-properties",
          label: "Sold Properties",
        },
      ],
    },
    {
      href: "/developments",
      title: "Development",
    },
    {
      href: "/agents",
      title: "Agents",
    },
    {
      href: "/developers",
      title: "Developers",
    },
    {
      href: "https://blog.meqasa.com/",
      title: "Blog",
      links: [
        {
          href: "/blog/category/press-and-events/",
          label: "Press & Events",
        },
        {
          href: "/blog/category/real-estate-news/",
          label: "Real Estate News",
        },
        {
          href: "/blog/category/living-in-neighbourhood-series/",
          label: "Living In...",
        },
      ],
    },
    {
      href: "https://blog.meqasa.com/category/tips-and-advice/",
      title: "Advice",
      links: [
        {
          href: "https://blog.meqasa.com/category/tips-and-advice/",
          label: "Real Estate Advice & Tips",
        },
        {
          href: "/accra-housing-guide",
          label: "Meqasa Accra Housing Guide",
        },
        {
          href: "/real-estate-report",
          label: "Real Estate Report 2020",
        },
      ],
    },
    {
      href: "/lands-for-sale-in-ghana",
      title: "Land",
    },
  ],
  propertyType: [
    { label: "Property type", value: "all" },
    { label: "House", value: "house" },
    { label: "Apartment", value: "apartment" },
    { label: "Townhouse", value: "townhouse" },
    { label: "Office", value: "office" },
    { label: "Commercial space", value: "commercial" },
    { label: "Warehouse", value: "warehouse" },
    { label: "Guest house", value: "guest" },
    { label: "Shop", value: "shop" },
    { label: "Retail", value: "retail" },
    { label: "Beach house", value: "beach" },
  ],
  propertyBed: [
    { label: "Bedrooms", value: "bed" },
    { label: "1 Bed", value: "1" },
    { label: "2 Beds", value: "2" },
    { label: "3 Beds", value: "3" },
    { label: "4 Beds", value: "4" },
    { label: "5+ Beds", value: "5" },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  popularLocations: [
    "Greater Accra",
    "Western",
    "Eastern",
    "Ashanti",
    "Central",
    "Northern",
  ],
  footerNavCompany: [
    {
      title: "company",
      links: [
        { label: "about us", link: "/about-us" },
        { label: "FAQ", link: "/faq" },
        { label: " work with us", link: "/work-with-us" },
        { label: "feedback", link: "/feedback" },
        { label: "housing guide", link: "/guide" },
        { label: "real estate guide 2020", link: "/real-estate-report" },
        {
          label: "advertise with us",
          link: "/plans",
        },
        { label: " terms of use", link: "/terms-of-use" },
      ],
    },
  ],
  footerContact: {
    title: "contact",
    links: [
      { label: "info@meqasa.com", link: "#" },
      { label: "+233 506 866 060", link: "#" },
    ],
  },
  footerNav: [
    {
      title: "Houses For Rent",
      links: [
        {
          label: "Houses for rent in Accra",
          link: "/houses-for-rent-in-Accra",
        },
        {
          label: " Houses for rent in East Legon",
          link: "/houses-for-rent-in-East Legon",
        },
        {
          label: " Houses for rent in Cantonments",
          link: "/houses-for-rent-in-Cantonments",
        },
        {
          label: "Houses for rent in Spintex",
          link: "/houses-for-rent-in-Spintex",
        },
        {
          label: "Houses for rent in Dworwulu",
          link: "/houses-for-rent-in-Dworwulu",
        },
        {
          label: "Houses for rent in Airport Hills",
          link: "/houses-for-rent-in-Airport Hills",
        },
        { label: "Houses for sale in Airport Area", link: "Airport Area" },
        {
          label: " Houses for rent in Labone",
          link: "/houses-for-rent-in-Labone",
        },
        { label: " Houses for rent in Tema", link: "/houses-for-rent-in-Tema" },
      ],
    },
    {
      title: "Houses For Sale",
      links: [
        {
          label: "Houses for sale in Accra",
          link: "/houses-for-sale-in-Accra",
        },
        {
          label: " Houses for sale in Kasoa",
          link: "/houses-for-sale-in-Kasoa",
        },
        { label: " Houses for sale in Tema", link: "/houses-for-sale-in-Tema" },
        {
          label: "Houses for sale in Kwabenya",
          link: "/houses-for-sale-in-Kwabenya",
        },
        {
          label: "Houses for sale in East Legon",
          link: "/houses-for-sale-in-East Legon",
        },
        {
          label: "Houses for sale in Adjiringanor",
          link: "/houses-for-sale-in-Adjirigonor",
        },
        {
          label: "Houses for sale in Airport Area",
          link: "/houses-for-sale-in-Airport Area",
        },
        {
          label: " Houses for sale in Airport Hills",
          link: "/houses-for-sale-in-Airport Hills",
        },
        {
          label: " Houses for sale in Spintex Road",
          link: "/houses-for-sale-in-Spintex Road",
        },
      ],
    },
    {
      title: "Apartments For Sale",
      links: [
        {
          label: "Apartments for sale in Ridge",
          link: "/apartments-for-sale-in-Ridge",
        },
        {
          label: "Apartments for sale in Dzorwulu",
          link: "/apartments-for-sale-in-Dzorwulu",
        },
        {
          label: "Apartments for sale in Spintex Road",
          link: "/apartments-for-sale-in-Spintex Road",
        },
        {
          label: "Apartments for sale in Osu",
          link: "/apartments-for-sale-in-Osu",
        },
        {
          label: "Apartments for sale in Tema",
          link: "/apartments-for-sale-in-Tema",
        },
        {
          label: "Apartments for sale in Cantonments",
          link: "/apartments-for-sale-in-Cantonments",
        },
        {
          label: "Apartments for sale in Labone",
          link: "/apartments-for-sale-in-Labone",
        },
        {
          label: "Apartments for sale in Airport Area",
          link: "/apartments-for-sale-in-Airport Area",
        },
        {
          label: "Apartments for sale in East Legon",
          link: "/apartments-for-sale-in-East Legon",
        },
      ],
    },
    {
      title: "Apartments For Rent",
      links: [
        {
          label: "Apartments for rent in Dzorwulu",
          link: "/apartments-for-rent-in-Dzorwulu",
        },
        {
          label: "Apartments for rent in Tema",
          link: "/apartments-for-rent-in-Tema",
        },
        {
          label: "Apartments for rent in Spintex Road",
          link: "/apartments-for-rent-in-Spintex Road",
        },
        {
          label: "Apartments for rent in Osu",
          link: "/apartments-for-rent-in-Osu",
        },
        {
          label: "Apartments for rent in Ridge",
          link: "/apartments-for-rent-in-Ridge",
        },
        {
          label: "Apartments for rent in Cantonments",
          link: "/apartments-for-rent-in-Cantonments",
        },
        {
          label: "Apartments for rent in Airport Area",
          link: "/apartments-for-rent-in-Airport Area",
        },
        {
          label: "Apartments for rent in Labone",
          link: "/apartments-for-rent-in-Labone",
        },
        {
          label: "Apartments for rent in East Legon",
          link: "/apartments-for-rent-in-East Legon",
        },
      ],
    },
    {
      title: "Office Spaces For Rent",
      links: [
        {
          label: "Office spaces for rent in Accra",
          link: "/offices-for-rent-in-Accra",
        },
        {
          label: "Office spaces for rent in Cantonments",
          link: "/offices-for-rent-in-Cantonments",
        },
        {
          label: "Office spaces for rent in Airport Area",
          link: "/offices-for-rent-in-Airport Area",
        },
        {
          label: "Office spaces for rent in Tema",
          link: "/offices-for-rent-in-Tema",
        },
        {
          label: "Office spaces for rent in East Legon",
          link: "/offices-for-rent-in-East Legon",
        },
        {
          label: "Office spaces for rent in Tesano",
          link: "/offices-for-rent-in-Tesano",
        },
        {
          label: "Office spaces for rent in Spintex Road",
          link: "/offices-for-rent-in-Spintex Road",
        },
        {
          label: "Office spaces for rent in Dzorwulu",
          link: "/offices-for-rent-in-Dzorwulu",
        },
        {
          label: "Office spaces for rent in Osu",
          link: "/offices-for-rent-in-Osu",
        },
      ],
    },
    {
      title: "For Sale",
      links: [
        { label: "Apartment For sale", link: "/apartment-for-sale-in-Accra" },
        { label: "Townhouses For sale", link: "/townhouses-for-sale-in-Accra" },
        { label: "Warehouses For sale", link: "/warehouses-for-sale-in-Accra" },
        {
          label: "Commercial Spaces For sale",
          link: "/commercial-space-for-sale-in-Accra",
        },
        { label: "Shops For sale", link: "/shops-for-sale-in-Accra" },
      ],
    },
    {
      title: "For Rent",
      links: [
        {
          label: "Retail Spaces For rent",
          link: "/retail-space-for-rent-in-Accra",
        },
        { label: "Land For rent", link: "/land-for-rent-in-Accra" },
        {
          label: "Guest Houses For rent",
          link: "/guest-houses-for-rent-in-Accra",
        },
        {
          label: "Office Spaces For rent",
          link: "/office-space-for-rent-in-Accra",
        },
        { label: "Townhouses For rent", link: "/townhouses-for-rent-in-Accra" },
      ],
    },
    {
      title: "Discover",
      links: [
        {
          label: "Shops For Sale",
          link: "/shops-for-sale-in-Accra",
        },
        {
          label: "Commercial Spaces For Sale",
          link: "/commercial-space-for-sale-in-Accra",
        },
        {
          label: "Retail Spaces For Sale",
          link: "/retail-space-for-sale-in-Accra",
        },
        { label: "Land For Sale", link: "/land-for-sale-in-Accra" },
        {
          label: "Guest Houses For Sale",
          link: "/guest-house-for-sale-in-Accra",
        },
      ],
    },
  ],
}
