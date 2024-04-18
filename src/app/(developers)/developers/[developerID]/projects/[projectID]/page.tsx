import Image from "next/image"
import site1 from "@/../public/plans/site-plan-1.jpeg"
import site2 from "@/../public/plans/site-plan-2.jpeg"
import site3 from "@/../public/plans/site-plan-3.jpeg"
import { Dot, MapPin, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AvailableUnitsCarousel } from "@/components/available-unit"
import { Breadcrumbs } from "@/components/bread-crumbs"
import { ClientContactForm } from "@/components/client-contact-form"
import ContactFixed from "@/components/contact-fixed"
import { Icons } from "@/components/icons"
import { ProjectMap } from "@/components/project-map"
import { FloorPlanCarousel } from "@/app/(developers)/components/floor-plan-carousel"
import { ProjectCarousel } from "@/app/(developers)/components/projects-carousel"
import { SitePlanCarousel } from "@/app/(developers)/components/site-plan-carousel"
import { Test } from "@/app/(developers)/components/test"
import { PropertyDescription } from "@/app/[propertyID]/components/project-description"
import { PropertyAmenities } from "@/app/[propertyID]/components/property-amenities"
import { PropertyDetails } from "@/app/[propertyID]/components/property-details"
import { PropertyVideo } from "@/app/[propertyID]/components/property-video"
import { ImageGrid } from "@/app/[propertyID]/image-grid"

const images = [
  "https://images.unsplash.com/photo-1560448076-213180fe7d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1629236714692-9dddb8ebe990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1629079447841-d04df9ee2d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
  "https://images.unsplash.com/photo-1426122402199-be02db90eb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://meqasa.com/uploads/imgs/d52c496a97da371356bc55226b8d7191",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/89b6788694260dbab70fb86c07fa191e",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/19f62b0e238ee390d36267588610a977",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/d66b9dd853b1e1b64e730cdda4e56041",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/d81dc409ebcdff464d661eefaebe2c19",
  "https://dve7rykno93gs.cloudfront.net/uploads/imgs/bed858dd5424c4d2ca5815f03cf5f94e",
]
const ts = {
  name: "Quao Property",
  phone: "0542345649",
  email: "quaoproperty@gmail.com",
  logo: "https://meqasa.com/uploads/imgs/f01176b82b54c77ae93f6076c886d073",
}
const unit = {
  title: "9 Bedrooms Furnished House For Sale at Adjiriganor",
  price: "12775000",
  type: "sale",
  location: "Adjiringanor",
  images: [
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/22916503",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/22916502",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/22916504",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/22916505",
    "https://dve7rykno93gs.cloudfront.net/temp/temp/22916500",
  ],
  amenities: {
    beds: "9",
    baths: "10",
    garage: "5",
    sqft: "3800",
  },
  desc: "fully furnished living room and fitted kitchen with oven/microwave/cooker/double door fridge freezer/blender/cooking utensils/plates and cutlery setBalcony Fitted wardrobes Hot Water available in bathrooms and kitchen 247 Water supply Security entry doors Air condition in all areas including bedrooms and living room Communal Swimming pool 247 security services Outdoor playgrounds for children fully furnished living room and fitted kitchen with oven/microwave/cooker/double door fridge freezer/blender/cooking utensils/plates and cutlery setBalcony Fitted wardrobes Hot Water available in bathrooms and kitchen 247 Water supply Security entry doors Air condition in all areas including bedrooms and living room Communal Swimming pool 247 security services Outdoor playgrounds for children",
  categories: [
    {
      label: "House for sale",
      href: "https://meqasa.com/house-for-sale-in-ghana",
    },
    {
      label: "Apartment for sale in Adjiriganor Area",
      href: "https://meqasa.com/apartments-for-rent-in-Airport%20Residential%20Area",
    },
  ],
  negotiable: true,
  furnished: true,
  address: "Airport Residential Area",
  reference: "298947",
  id: "2",
  amenity: {
    ac: true,
    microwave: true,
    pool: true,
    cooker: true,
    internet: true,
    security: true,
    washer: true,
    cable: true,
    gen: true,
    garage: true,
    fridge: true,
    water: true,
  },
  agent: {
    name: "DE TELLE COMPANY LTD.",
    phone: "0242345649",
    email: "detelle@gmail.com",
    logo: "https://meqasa.com/fascimos/somics/2145993801",
  },
  viewCount: 1500,
}

export default async function page() {
  return (
    <div>
      <div className="px-3 py-4 lg:container lg:px-0">
        <Breadcrumbs
          segments={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: `developers`,
              href: `/developers`,
            },
            {
              title: `Goldkey Properties`,
              href: `/developers/1`,
            },
            {
              title: `One Elm`,
              href: `/developers/1/projects/1`,
            },
          ]}
        />
      </div>
      <ProjectCarousel />
      <div>
        <div className="h-fit w-full bg-inherit">
          <div className="relative z-10 flex items-end gap-3 p-3 lg:container lg:-top-14 lg:gap-8 lg:px-0">
            <Card className="h-[115px] w-[115px] overflow-hidden rounded-xl lg:h-[180px] lg:w-[180px]">
              {" "}
              <Image
                alt="test"
                src="https://meqasa.com/uploads/imgs/f01176b82b54c77ae93f6076c886d073"
                width={180}
                height={180}
                className="h-auto w-full rounded-md object-cover"
              />
            </Card>
            <div className="flex grow items-center justify-between">
              <div className="grid">
                <span className="mb-1 text-base font-extrabold text-b-accent lg:text-xl lg:font-bold">
                  Quao Realty
                </span>
                <div>
                  <Badge className="bg-primary uppercase">As Developer</Badge>
                </div>
                <div className="mt-3">
                  <span className="flex items-center gap-2 text-sm font-normal text-b-muted">
                    <ShieldCheck
                      className="h-5 w-5 text-green-600"
                      strokeWidth="1.3"
                    />{" "}
                    active on meqasa
                  </span>
                  <span className="mt-1 flex items-center gap-2 text-end text-xs font-medium text-b-blue lg:text-sm">
                    {" "}
                    <MapPin className="h-4 w-5" strokeWidth="1.3" /> Airport
                    Residential, AC
                  </span>
                </div>
              </div>
              <Button className="hidden rounded-md bg-b-accent font-semibold hover:bg-b-accent lg:block">
                Get Brochure
              </Button>
            </div>
          </div>
          <Test />
        </div>
      </div>

      <div className="mt-6 grid gap-8 px-3 pb-3 transition-all duration-300 ease-in lg:container lg:grid-cols-[736px,1fr] lg:p-0">
        <div>
          <div className="text-b-accent">
            <span className="text-base font-semibold">Project Highlight</span>
            <div className="item-center mb-1 mt-3 flex h-full gap-4">
              <h1 className="text-3xl font-extrabold text-inherit">One Elm</h1>
              <div className="flex items-center">
                <Badge className="bg-b-border-ongoing uppercase">ongoing</Badge>
              </div>
            </div>
            <div className="mb-2 text-sm">
              <span className="flex items-center font-light text-inherit">
                Apartment <Dot className="h-4 w-4" />{" "}
                <span className=" uppercase">1 BDR, 2 BDR, 3 BDR</span>
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-end text-xs font-medium text-b-blue lg:text-sm">
              {" "}
              <MapPin className="h-5 w-5" strokeWidth="1.3" /> Airport
              Residential, AC
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-[16px] border border-orange-300 p-3 text-b-accent shadow-sm">
            <div>
              <div className="mb-3">
                <span className="text-sm font-semibold capitalize text-inherit lg:text-base">
                  price range
                </span>
                <span className="text-xs tracking-wide"> (minimum)</span>
              </div>

              <span className="text-xl font-extrabold text-inherit lg:text-2xl lg:font-bold">
                GH₵ 1,380,000
              </span>
            </div>
            <div>
              <div className="mb-3">
                <span className="text-sm font-semibold capitalize text-inherit lg:text-base">
                  price range
                </span>
                <span className="text-xs tracking-wide"> (maximum)</span>
              </div>

              <span className="text-xl font-extrabold text-inherit lg:text-2xl lg:font-bold">
                GH₵ 10,380,000
              </span>
            </div>
          </div>

          <section className="mt-8 text-b-accent lg:mt-20 lg:px-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Description
            </h2>
            <PropertyDescription
              description="One Elm, located in an intimate enclave at the heart of Accra’s most
          distinguished and elegant area: Airport Residential. Far more than
          just a building, this development is defined by boldness,
          sophisticated pursuits with blended contemporary architectural style
          with minimalist designs to offer elevated living. Welcome to the
          statement of Airport Residential."
            />
          </section>

          <aside className="mt-8 text-b-accent lg:p-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Explore more
            </h2>
            <ImageGrid images={images} />
          </aside>

          <section className="mt-20 text-b-accent">
            <h2 className="mb-6 text-2xl font-bold capitalize text-inherit">
              Details
            </h2>
            <PropertyDetails />
          </section>

          <section className="mt-8 text-b-accent lg:mt-20 lg:px-0">
            <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
              Amenities
            </h2>
            <PropertyAmenities cols="3" />
          </section>
        </div>

        <aside className="relative mt-8">
          <ClientContactForm data={ts} />
        </aside>
      </div>

      <section className="mt-8 px-3 text-b-accent lg:container lg:mt-20 lg:px-0">
        <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
          {" Project video"}
        </h2>
        <Card className="flex h-[250px] overflow-hidden rounded-xl border-orange-300 lg:h-[400px]">
          <div className="grow p-4"></div>
        </Card>
      </section>

      <section
        className="mt-8 text-b-accent lg:container lg:mt-20 lg:px-0"
        id="site-plan"
      >
        <h2 className="mb-6 px-3 text-xl font-bold capitalize text-inherit lg:p-0 lg:text-2xl">
          Site plans for One Elm
        </h2>
        <SitePlanCarousel images={[site1, site2, site3]} />
      </section>

      <section
        className="mt-8 px-3 text-b-accent lg:container lg:mt-20 lg:px-0"
        id="floor-plan"
      >
        <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
          Floor Plans for One Elm
        </h2>
        <FloorPlanCarousel />
      </section>

      <section
        className="mt-8 px-3 text-b-accent lg:container lg:mt-20 lg:px-0"
        id="location"
      >
        <h2 className="mb-6 text-xl font-bold capitalize text-inherit lg:text-2xl">
          Nearby Location
        </h2>

        <ProjectMap />
      </section>

      <section className=" mt-20 bg-[#F8F8FA] lg:p-6">
        <div className="px-3 lg:container">
          <ClientContactForm isVertical data={ts} offset={true} />
        </div>
      </section>

      <section
        className="my-8 text-b-accent lg:container lg:my-20 lg:px-0"
        id="units"
      >
        <h2 className="mb-6 px-3 text-xl font-bold capitalize text-inherit lg:px-0 lg:text-2xl">
          Available units
        </h2>

        <AvailableUnitsCarousel
          developer={{
            name: "",
            phone: "",
            email: "",
            logo: "",
          }}
          {...unit}
        />
      </section>
      <ContactFixed />
    </div>
  )
}
