import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { API_ENDPOINT, cn } from "@/lib/utils"

import { AgentCard } from "../components/agent-card"
import SearchInput from "../components/search"

const agents = [
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

export default async function AgentsPage() {
  async function getAllAgents(): Promise<AgentType[]> {
    try {
      const response = await fetch(`${API_ENDPOINT}/agents`, {
        next: {
          // revalidate after every hour
          revalidate: 60,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch agent logos: ${response.statusText}`)
      }

      const agents = (await response.json()) as AgentType[]

      return agents
    } catch (error: any) {
      throw new Error(`Failed to parse response: ${error.message}`)
    }
  }
  const agents = await getAllAgents()
  return (
    <div className="mt-6 grid gap-8 px-3 transition-all duration-300 ease-in md:container md:grid-cols-[736px,1fr] md:p-0">
      <div>
        <section className="mb-8 text-b-accent">
          <h3 className="mb-2 text-lg font-bold leading-tight tracking-tighter text-b-accent md:text-xl">
            Find an Agent
          </h3>

          <SearchInput data={agents} path="/agents" />
        </section>
        <aside className="my-12">
          <div className="flex w-full flex-col items-start justify-center gap-4 rounded-lg bg-[#d7e9ff] p-4 md:justify-between">
            <h4 className="font-bold text-b-accent md:text-lg">
              Real Estate Agents and Brokers on meQasa
            </h4>
            <p className="text-sm text-b-muted">
              We work with a growing list of professional agents to offer you
              fantastic property options so you can{" "}
              <a
                href="/properties-for-sale"
                className="font-medium text-b-blue"
              >
                find that dream home.
              </a>{" "}
              We also assist our{" "}
              <a href="/agents" className="font-medium text-b-blue">
                agents
              </a>{" "}
              in their profession with valuable{" "}
              <a href="/tips-and-insights" className="font-medium text-b-blue">
                insights and tips.
              </a>
            </p>
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "p-0 text-sm font-medium text-b-blue"
              )}
            >
              Join the real estate professionals on meQasa
            </Link>
          </div>
        </aside>

        <section className="mb-8">
          <h4 className="mb-3 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-[28px] md:font-extrabold">
            Featured Agents
          </h4>
          <div className="flex flex-col gap-8">
            {agents.map((agent, i) => (
              <AgentCard key={i} {...agent} />
            ))}
          </div>
        </section>
      </div>

      {/* Vertical form */}
      <aside className="h-fit rounded-xl border p-4 text-b-accent shadow-sm">
        <h3 className=" mb-2 font-bold md:mb-3 md:text-lg">
          {" "}
          Agents Frequently Asked Questions
        </h3>

        <div className="mb-5">
          <h5 className=" pb-0 text-base font-semibold text-b-muted-dark">
            Why do I need an Agent?
          </h5>
          <ol className="list-decimal">
            <li className="ml-5 mt-2 text-sm text-b-muted">
              <a href="/blog" className="text-b-blue">
                Agents are connected to professional
              </a>{" "}
              networks and numerous list of properties.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              Agents are experienced with detailed information about
              Geographical areas, their culture and other personal neighbourhood
              information not gotten from the internet.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              Agents are marketers and salespersons. They have credible sources
              of information to get your listing or provide you with the right
              source of buyers or sellers.
            </li>
          </ol>
        </div>

        <div className="mb-5">
          <h5 className=" pb-0 text-base font-semibold text-b-muted-dark">
            Why do some Agents Charge Registration fees?
          </h5>
          <ol className="list-decimal">
            <li className="ml-5 mt-2 text-sm text-b-muted ">
              <span className="font-semibold">Agent Commitment fee:</span> Most
              Agents or Brokers charge commitment fees to enable them to see how
              serious clients are and also to bind them to the buyer or the
              seller. This makes both parties committed and also prevent the
              buyer or seller from contacting other Realtor or Agent.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              <span className="font-semibold">Agent Transport Fee:</span>{" "}
              Sometimes these fees are termed as Transport fees to enable them
              to roam with you the buyer or potential tenant to the various
              property locations.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              <span className="font-semibold">Agent Consultation Fee:</span>{" "}
              Some elite or professional agents term these charge are
              Consultation fee.
            </li>
          </ol>
        </div>

        <div className="mb-5">
          <h5 className=" pb-0 text-base font-semibold text-b-muted-dark">
            What are the qualities of a great Agent, Realtor or Associate
            Broker?
          </h5>
          <ol className="list-decimal">
            <li className="ml-5 mt-2 text-sm text-b-muted ">
              <span className="font-semibold"> Knowledge of the Locality:</span>{" "}
              <a href="/blog" className="text-b-blue">
                Most great Agents are profoundly knowledgeable
              </a>{" "}
              about the neighborhoods and vicinity with experience in customer
              service and Geographical locations.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              <span className="font-semibold">
                Attention to Detailed Information:
              </span>{" "}
              A great Agent also has the patience to listen to clients needs and
              takes notes of information to arrive at the perfect suitable
              property for a client. Read more Agent Qualities from the above
              link.
            </li>
          </ol>
        </div>

        <div className="mb-5">
          <h5 className=" pb-0 text-base font-semibold text-b-muted-dark">
            What is an Agent average salary{" "}
          </h5>
          <ol className="list-decimal">
            <li className="ml-5 mt-2 text-sm text-b-muted ">
              <a href="/blog" className="text-b-blue">
                According to 1salary.com
              </a>{" "}
              , the median annual Agent salary is $40,140, as of June 28, 2017.
              However calculating your monthly income as an Agent will depend on
              the total number of closed deals from clients, multiplied by the
              rate per charge to clients.
            </li>
          </ol>
        </div>

        <div className="mb-5">
          <h5 className=" pb-0 text-base font-semibold text-b-muted-dark">
            How do you become a successful and credible Agent, Broker, Associate
            Broker or Realtor?{" "}
          </h5>
          <ol className="list-decimal">
            <li className="ml-5 mt-2 text-sm text-b-muted ">
              Collaborate or partner with other colleagues, associates and
              co-workers to gain maximum impact on clients as in being able to
              supply every demand as requested.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              For as low as $50 a month you can list your properties on meqasa
              and gain more leads.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              Send stories to reporters or blog about your properties with paid
              services or free services like blogger to boost your image.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              Search for investors and vendors for leads.
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              Don&apos;t disapprove or turn down any deal{" "}
            </li>
            <li className="ml-5 mt-2 text-sm text-b-muted">
              Always maintain connections and relationships with old clients and
              referrals.{" "}
            </li>
          </ol>
        </div>
      </aside>
    </div>
  )
}
