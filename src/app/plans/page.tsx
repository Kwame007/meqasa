import { CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
]

export default function Example() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="bg-white">
        <div className="relative isolate  lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h1 className="mb-6 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-3xl md:font-extrabold">
                Advertising Options with meQasa
              </h1>

              <p className="mt-6 text-b-muted">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
                et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                laborum.
              </p>
            </div>
            <div>
              <div className="mx-auto mt-16 max-w-2xl rounded-xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-xl font-bold tracking-tight text-b-accent">
                    Web Banner Advertisement Options
                  </h3>
                  <p className="mt-6 hidden text-base leading-7 text-b-muted md:block">
                    Lorem ipsum dolor sit amet consect etur adipisicing elit.
                    Itaque amet indis perferendis blanditiis repellendus etur
                    quidem assumenda.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                      What’s included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-b-muted sm:grid-cols-2 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <Badge
                        className="rounded-full text-sm capitalize text-b-accent"
                        variant={"secondary"}
                      >
                        monthly
                      </Badge>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-b-accent">
                          ₵2,000
                        </span>
                        <span className="hidden text-sm font-semibold leading-6 tracking-wide text-b-muted md:block">
                          GHS
                        </span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-b-primary"
                      >
                        Buy plan
                      </a>
                      <p className="mt-6 text-xs leading-5 text-b-muted">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-16 max-w-2xl rounded-xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-xl font-bold tracking-tight text-b-accent">
                    Advertise in the meQasa Newsletter
                  </h3>
                  <p className="mt-6 hidden text-base leading-7 text-b-muted md:block">
                    Lorem ipsum dolor sit amet consect etur adipisicing elit.
                    Itaque amet indis perferendis blanditiis repellendus etur
                    quidem assumenda.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                      What’s included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-b-muted sm:grid-cols-2 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <Badge
                        className="rounded-full text-sm capitalize text-b-accent"
                        variant={"secondary"}
                      >
                        monthly
                      </Badge>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-b-accent">
                          ₵1000
                        </span>
                        <span className="hidden text-sm font-semibold leading-6 tracking-wide text-b-muted md:block">
                          GHS
                        </span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-b-primary"
                      >
                        Buy plan
                      </a>
                      <p className="mt-6 text-xs leading-5 text-b-muted">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-16 max-w-2xl rounded-xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-xl font-bold tracking-tight text-b-accent">
                    Advertising Opportunities for meQasa Agents
                  </h3>
                  <p className="mt-6 hidden text-base leading-7 text-b-muted md:block">
                    Lorem ipsum dolor sit amet consect etur adipisicing elit.
                    Itaque amet indis perferendis blanditiis repellendus etur
                    quidem assumenda.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                      What’s included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-b-muted sm:grid-cols-2 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <Badge
                        className="rounded-full text-sm capitalize text-b-accent"
                        variant={"secondary"}
                      >
                        monthly
                      </Badge>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-b-accent">
                          ₵2,500
                        </span>
                        <span className="hidden text-sm font-semibold leading-6 tracking-wide text-b-muted md:block">
                          GHS
                        </span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-b-primary"
                      >
                        Buy plan
                      </a>
                      <p className="mt-6 text-xs leading-5 text-b-muted">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
