
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function page() {
  return (
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
        <div className="container grid grid-cols-1 px-4 py-8 text-b-accent md:px-0">
          <div className="">
            <div className="mx-auto max-w-[672px] text-center">
              <h1 className="mb-6 border-b pb-5 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-3xl md:font-extrabold">
                Frequently asked questions
              </h1>
              <p className="mt-4 leading-6 text-b-muted">
                Have a different question and can’t find the answer you’re
                looking for? Reach out to our support team by sending us an
                email and we’ll get back to you as soon as we can.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <Accordion
              type="single"
              collapsible
              className="grid w-full grid-cols-1 gap-8 md:grid-cols-2"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  Can I find properties outside of Accra on meQasa.com?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Absolutely! Our search portal features thousands of properties
                  for rent and sale in Accra and beyond. You can find a house,
                  apartment or commercial property in some of the other regions
                  of Ghana including in major cities like Kumasi and Takoradi.
                  Simply select the region and locality you are interested in
                  from the filter options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  Does your website offer land for purchase?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  No, we do not. We focus on real estate and have thousands of
                  amazing residential and commercial properties for rent and
                  purchase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  What is the Reference Number/Ref No.?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Every property listing on our website has a Reference Number,
                  found at the very end of the description box. This number
                  serves as an easy way for you to identify specific properties
                  that you want to return to, show someone else or refer to when
                  you call in with questions. From our home page you can simply
                  enter the Ref No. and hit enter to go directly to its property
                  page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  This website is amazing! How can I stay active with meQasa?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  meQasa aims to make your property search experience as smooth
                  and enjoyable as possible, not only via this website but also
                  with our stellar offline customer support line, mobile
                  application, highly read blog, e-newsletter and engaging
                  social media presence on Facebook, Twitter, Instagram and
                  LinkedIn. Whether you are just beginning to think about
                  renting/buying property, have just started your process, have
                  been unsuccessful using other websites, are helping friends
                  and family with their search, are a professional in the
                  industry or simply love all things related to real estate, you
                  should definitely stay in the loop with us! Like and follow us
                  today. If you have feedback, we appreciate that too. You can
                  tell us your thoughts here.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  How do I sign up for an agent account on meQasa?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  All you need is an email account.
                  <span className="block py-1 pl-6">
                    <ul className="list-disc">
                      <li>
                        Click on Sign up at the top right corner of the page.
                      </li>
                      <li>Choose "Register to list properties".</li>
                      <li> Select the account type you would like to use.</li>
                      <li> Provide your phone number. </li>
                      <li> Accept the terms of use. </li>
                    </ul>
                  </span>
                  Once you have signed up, one of our sales executives will
                  contact you to discuss account plan options and charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  How do I Log in and Log out of my account?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  <span className="block py-1 pl-6">
                    <ul className="list-disc">
                      <li>
                        To log in to your account, simply click on Log in at the
                        top right area of the page and enter your log in details
                        or select the email service you used to create your
                        account.{" "}
                      </li>
                      <li>
                        {" "}
                        To log out of your account, simply click the Log out
                        link at the top left corner of the page.{" "}
                      </li>
                    </ul>
                  </span>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  How do I change my account details?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Your can edit your details under your Profile tab on your
                  dashboard page.
                  <span className="block py-1 pl-6">
                    <ul className="list-disc">
                      <li>
                        Log in or click Logged in as [Your Name] at the top left
                        area of the page .{" "}
                      </li>
                      <li>
                        {" "}
                        To log out of your account, simply click the Log out
                        link at the top left corner of the page .{" "}
                      </li>
                    </ul>
                  </span>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  What Does "Verified Agent" Mean?{" "}
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  A verified agent has furnished meQasa with additional proof of
                  their identity as a real estate professional. The Verified
                  Agent symbol signals credibility of the verified agent and
                  should reassure most property seekers they are dealing with a
                  professional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  How Does meQasa Verify Agents/Agencies?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  To verify an agent, we request their
                  <span className="block py-1 pl-6">
                    <ul className="list-disc">
                      <li>
                        Valid Driver's License, Passport or National ID card
                        bearing the same name as the one indicated on meqasa.com
                        account.
                      </li>
                    </ul>
                  </span>
                  And to verify an agency, we request one of the following which
                  bears the business name on their meqasa.com account:
                  <span className="block py-1 pl-6">
                    <ul className="list-disc">
                      <li>Certificate to Commence Business. </li>
                      <li>Business Incorporation Certificate. </li>
                    </ul>
                  </span>
                  On meQasa a Certificate of Commencement or Incorporation earns
                  the "verified plus" badge: Verified plus badge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  Why do we Verify Agents/Agencies?{" "}
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Verification entails transparency and communicates the
                  credibility of agents and agencies on our platform. Property
                  seekers can feel confident going into transactions with meQasa
                  verified agents, as they are more likely to be legitimate and
                  trustworthy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  I need a place to rent for just a few months. Do you have such
                  options available?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Short stays are not the easiest to come by in Ghana and are
                  often gone before they can be listed online. However when we
                  do have some available, you can find them by selecting "1-to-6
                  months" from the "Rent period" drop-down menu on the search
                  results page or be sure to go to the "Short Lease" tab when
                  you start your search from the meQasa home page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  I'm finding a lot of amazing houses and apartments and want to
                  save them for later review. Is that possible?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Definitely! You can favourite properties that you like in
                  order to return to them easily. If you see a house, apartment
                  or office you are interested in just click the star icon and
                  it will save. On property results, the star is near the bottom
                  right corner of the result. On property pages the star is
                  below the photos display. You may be prompted to create or log
                  in to your personal account.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  {" "}
                  I'm not a fan of working with agents due to past experience.
                  Can't I just deal with the homeowner?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  We understand your frustration. The house hunting process can
                  be a stressful one. We do have a number of properties listed
                  and managed by homeowners themselves but the truth is most
                  times they enlist agents to assist them in finding a tenant
                  faster. We try to work with the best real estate agents out
                  there and offer them training so they can serve you in the
                  best way possible. If you ever have an issue working with an
                  agent managing a property listed on our website, please let us
                  know.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="gap-6 text-justify text-base font-semibold">
                  Its amazing that the website offers so many property options
                  to home seekers but I'd like my properties to be seen more
                  prominently. How can I make that happen?
                </AccordionTrigger>
                <AccordionContent className="mt-4 leading-6 text-b-muted">
                  Amidst thousands of houses, apartments and office listings
                  from several different real estate agents, developers and
                  homeowners, you are right, it can be a struggle to have your
                  listings stand out. To assist your sales potential we do offer
                  advertising in 4 forms:
                  <span className="block py-1 pl-6">
                    <ul className="list-disc">
                      <li>
                        {" "}
                        <span className="text-sm font-bold">
                          Property of the Month Feature:
                        </span>{" "}
                        Boost visibility of your listing and help it stand out
                        to serious home seekers ready to buy now. Your listing
                        will appear on our homepage.{" "}
                      </li>
                      <li>
                        <span className="text-sm font-bold">Top Ads:</span>{" "}
                        Secure for your listing the top position of property
                        search results in its given locality.
                      </li>
                      <li>
                        <span className="text-sm font-bold">Bump Ups: </span>{" "}
                        Automatically refresh the listing for your available
                        property periodically so it appears among the first
                        recently updated listings.
                      </li>
                      <li>
                        <span className="text-sm font-bold">
                          Featured Property:{" "}
                        </span>{" "}
                        As part of our "Agent List Feature" offer, you get to
                        select one of your listings to be featured on the meQasa
                        homepage.{" "}
                      </li>
                    </ul>
                  </span>
                  Learn more about our advertising offers for real estate
                  professionals and other advertising options. know.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(20%+3rem)] aspect-[1155/678] w-[56.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="mt-8 md:mt-20">
            <p className="text-sm leading-6">
              <span className="font-bold">Disclaimer: </span> meQasa.com uses
              the various documents required from agencies and agents (Business
              Incorporation Certificates, Certificate to Commence Business,
              Driver's License, Passport or National ID card) to verify that our
              agents are who they say they are. However, it is the
              responsibility of the authorities that issue these documents to
              validate them. meQasa only uses these documents to support the
              credibility of our agents to reassure seekers the agents have
              proven by the documents issued to them that they are legitimate.
              Verification does not constitute an endorsement of an agent nor
              does it provide a guarantee of the agent's/agency's business
              practices. Always satisfy yourself that the person/persons you
              contract with is/are professional and ethical before paying out
              any money.
            </p>
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
  )
}
