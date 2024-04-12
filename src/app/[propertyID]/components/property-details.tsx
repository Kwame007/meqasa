import React from "react"
import { PaperclipIcon } from "lucide-react"

// Define an array of project details
const propertyDetails = [
  { title: "Project Types", value: "Apartment" },
  { title: "Number of Parking Space", value: "90" },
  { title: "Neighborhood", value: "Airport Residential" },
  { title: "Number of Buildings", value: "1" },
  { title: "Unit Types", value: "1 Bed, 2 Beds, 3 Beds" },
  { title: "Status", value: "Ongoing" },
  { title: "Region", value: "Greater Accra" },
  { title: "Parking Types", value: "Basement / Underground" },
  { title: "Date Updated", value: "6 months ago" },
]

/**
 * Renders the property details component.
 *
 * @return {JSX.Element} The property details component
 */
export function PropertyDetails() {
  return (
    <div className="text-b-accent">
      {/* <div className="grid md:grid-cols-2 gap-8">
        {propertyDetails.map((detail) => (
          <div
            className="flex h-full items-center justify-between border-b pb-4"
            key={detail.title}
          >
            <span className=" text-base font-normal text-b-muted">
              {detail.title}
            </span>
            <span className="font-normal">{detail.value}</span>
          </div>
        ))}
      </div> */}
      <div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {propertyDetails.map((detail) => (
              <div
                className="py-6 grid grid-cols-2 items-center justify-between sm:gap-4 sm:px-0"
                key={detail.title}
              >
                <dt className="font-medium leading-6 text-b-accent ">
                  {detail.title}
                </dt>
                <dd className="mt-1 leading-6 text-b-muted  sm:mt-0 flex justify-end">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
