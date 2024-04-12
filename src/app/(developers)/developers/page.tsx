import { API_ENDPOINT } from "@/lib/utils"

import { DeveloperCard } from "../components/developer-card"
import SearchInput from "@/components/search"

const developers = [
  {
    id: 1,
    name: "sweet home",
  },
  {
    id: 2,
    name: "white group",
  },
  {
    id: 3,
    name: "farwin properties",
  },
  {
    id: 4,
    name: "gulf edge",
  },
  {
    id: 5,
    name: "picasso",
  },
  {
    id: 6,
    name: "de telle",
  },
]

async function getAllDevelopers(): Promise<DeveloperType[]> {
  try {
    const response = await fetch(`${API_ENDPOINT}/developers`, {
      next: {
        // revalidate after every hour
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
    }

    const locations = await response.json()
    return locations
  } catch (error: any) {
    throw new Error(`Failed to parse response: ${error.message}`)
  }
}

export default async function DevelopersPage() {
  const developers = await getAllDevelopers()

  return (
    <div className="mt-6 grid px-3 md:container md:grid-cols-[736px,1fr] md:gap-8">
      <div>
        <header className="mb-8 text-b-accent">
          <h1 className="mb-2 text-lg font-bold leading-tight tracking-tighter text-b-accent md:text-xl">
            Find a Developer
          </h1>
          <div className="w-full">
            <SearchInput data={developers} path="/developers" />
          </div>
        </header>
        <hr className="my-8" />
        <section className="mb-8">
          <h2 className="my-8 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-[28px] md:font-extrabold">
            Featured Developers
          </h2>
          <div className="flex flex-col gap-8">
            {developers.map((developer, i) => (
              <DeveloperCard key={i} {...developer} />
            ))}
          </div>
        </section>
      </div>

      {/* Vertical form */}
      <aside className="sr-only rounded-md border"></aside>
    </div>
  )
}
