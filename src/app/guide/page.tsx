import Image from "next/image"
import Link from "next/link"
import table from "@/../public/table3.png"

import { Card, CardContent } from "@/components/ui/card"

export default function Guide() {
  return (
    <div className="container my-10 scroll-smooth rounded-2xl border p-4">
      <div className="">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="mt-4 w-full max-w-full rounded-md"
          src="https://meqasa.com/assets2/images/aerial2.jpg"
          alt=""
        />
      </div>
      <div className="mt-8 flex">
        <div className="sticky top-[500px] min-w-[500px]">
          <Card className="w-[350px]">
            <CardContent className="p-4">
              <ul>
                <li className="mb-4 max-h-full">
                  <a href="#overview">Introduction</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#overview">Overview</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#house-hunting">House Hunting in Ghana</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#players">The Players</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#process">Process</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#rent-or-buy">To Rent or To Buy? That is The Question</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#property-tax">A Clear view of Property Taxes</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#rating-zone">Designated Rating Zone</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#payment">Paying For Your Home</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#paying-cash">Paying Cash</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#paying-loan">Taking out a Loan/Mortgage</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#insurance">Insuring Your Home</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#landlords-tenants">Dealing with LandLords Or Tenants</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#note-landlords">A Note to LandLords</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#note-tenants">A Note to LandLords</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#land">Land : Acquisition, Registration, and Everything in Between</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#selling-letting">Selling & Letting Property</a>
                </li>
                <li className="mb-4 max-h-full">
                  <a href="#paying-loan">!8 Questions to Answer Before You Start Your Home Search</a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grow">
          <div id="overview">
            <div className="lg:col-start-2 lg:pr-4">
              <div className="lg:max-w-full">
                <p className="text-base font-semibold leading-7 text-b-primary">
                  Housing Guide
                </p>
                <h1 className="mb-6 mt-2 text-xl font-bold leading-tight tracking-tighter text-b-accent md:text-3xl md:font-extrabold">
                  <a name="overview"> OVERVIEW</a>
                </h1>
                <p className="mt-6 leading-8 text-b-muted">
                  Ghana currently has a social housing problem, with a deficit
                  of 1.7 million units, and counting. Ideally, spreading it over
                  a 10-year period, a minimum of 170,000 housing units would
                  have to be built annually to solve the issue [Source:
                  GhanaNewsAgency.org] This would require a public-private
                  partnership to address, since the government alone cannot
                  erase this deficit and, therefore, welcomes any initiative
                  from private entities to complement their efforts.The
                  Borteyman and Kpone Housing projects are two of six projects
                  across the country the government is pursuing to provide just
                  about 5,000 of affordable one and two bedroom houses for
                  public sector workers. The other projects are in Tamale
                  (Northern Region), Koforidua (Eastern Region), Asokore Mampong
                  (Ashanti Region) and Wa (Upper West Region).This deficit,
                  however, may not really be as severe as portrayed. There are
                  thousands of homes up for sale and rent that are uninhabited
                  and which would greatly reduce the housing problem if they
                  were occupied. The main reason they remain unoccupied is price
                  and ease of finding them.There are a lot of beautiful
                  habitable properties on the market whose price deters
                  potential tenants. Some of such houses are justifiably
                  expensive if you take into consideration the cost of materials
                  used in their construction, but a majority of them are high
                  priced simply because they are located in “prime locations” or
                  the owners were told they stood to make more profit if they
                  sold or rented at such a price. There is an amazing
                  opportunity for private investors to provide affordable
                  housing options.
                </p>
              </div>
            </div>
          </div>

          <div className=" ">
            <div>
              <a href="#test"></a>
            </div>
            <div className="lg:col-start-2 lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                  HOUSE HUNTING IN GHANA
                </h2>

                <div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-b-accent">
                    The Players and Process
                  </h3>
                  <p className="mt-6">
                    If you are in the market to purchase a home or are looking
                    to rent, the search for a home in Ghana is a tasking yet
                    thrilling process that requires a level of commitment from
                    you if you are to find a place you are happy with. There are
                    primarily four methods of going about searching for
                    accommodation -- working directly with a selected estate
                    agent and communicating your criteria so (s)he searches on
                    your behalf; approaching a homeowner directly; speaking with
                    a developer; or taking control of such a major decision with
                    an online search using a real estate marketplace like
                    meQasa.com. Before you get started you are going to need to
                    settle on a budget range as well as a list of what you seek
                    in a home. These questions should help you out.
                  </p>
                </div>
                <div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-b-accent underline">
                    The Players
                  </h3>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Homeowners/Landlords
                    </span>
                    <p className="mt-4 text-sm leading-6">
                      Some people exclaim in frustration at having to work with
                      a real estate agent to secure accommodation and seek to
                      approach a homeowner/landlord directly. That is a
                      possibility, but most times, it is hard to get in touch
                      with these homeowners who may not be readily available at
                      the property to conduct showings and answer face-to-face
                      questions on a daily basis. They find it more convenient
                      for a real estate agent to serve as an intermediary and
                      therefore task one or more of them to assist finding a
                      tenant or buyer.
                    </p>
                  </div>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Developers
                    </span>
                    <p className="mt-4 text-sm leading-6">
                      If you want to buy property and live in a planned and
                      structured community, you might want to look to real
                      estate developers. Developments tend to have the same home
                      design across board however, meaning you have limited
                      choice in the style of home. You can also work with a
                      developer to build you a home to your specifications. The
                      advantage of finding a house via a developer is that they
                      are very organised and many work with banks to be able to
                      offer you help with financing options like mortgages. Some
                      developers also try to sell their properties online via
                      real estate marketplaces like meQasa.com.
                    </p>
                  </div>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Online Property Search Portals
                    </span>
                    <p className="mt-4 text-sm leading-6">
                      There are a few other web-based real estate marketplaces
                      though we cannot vouch for their product or level of
                      service. Our renowned online housing search platform -
                      meQasa.com - makes your house-hunting the easiest
                      possible. Offering a safe and secure network backed by
                      strong offline customer support, there isn’t a better
                      website on which to conduct your search. With a beautiful
                      user interface that is simple, user-friendly and
                      exhaustive in offerings, you can search for property
                      anywhere in Accra and beyond. You can use our filter
                      function to narrow down to exactly the kind of housing you
                      seek, be it a studio rental in the heart of the city or a
                      4 bedroom house with a pool away from the hustle and
                      bustle. Once you settle on certain properties that
                      interest you, you can immediately reach out to the
                      managing real estate agent or owner whose information is
                      listed. You can also create a seeker account to save your
                      favourite properties as you search. meQasa is not a real
                      estate agency and we, currently do not have any
                      agents/brokers under our employment. Our platform allows
                      real estate agents, owners (landlords or landladies &
                      their representatives) and developers to list a wide range
                      of available properties so you can easily find amazing
                      options online. We work with a network of trusted agents
                      whom we assist with training programs to better help them
                      help you find quality, secure and trouble-free housing.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-b-accent underline">
                    The Process
                  </h3>

                  <p className="mt-4 text-sm leading-6">
                    House hunting is an adventure. From the moment you decide to
                    move, you are launched into a world of decisions,
                    evaluations, excitement and even frustration at times.
                    Whichever method you select to go about finding a home, none
                    is perfect. Both agents and landlords/home sellers can be
                    time-wasting.You may see a property you love online that,
                    all of a sudden, is no longer available when you speak with
                    the agent. You may get fed up with paying registration fees
                    every time you go to view a property. If this is your first
                    time looking for a home or buying property in Ghana, these
                    tips will give you an idea of what to expect. As you narrow
                    down your list of likely homes and go on showings, it is
                    important to also use a house hunting checklist to help you
                    know what to look for in your perfect home and decide if it
                    is right for you.
                  </p>

                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      A Note for Expatriates
                    </span>
                    <p className="mt-4 text-sm leading-6">
                      For foreigners moving to or newly arriving in Ghana,
                      definitely finding a great place to call home is one of
                      the first and most important items on your to-do list.
                      Where you select will affect your experience during your
                      stay no matter how short or long. There is no doubt you
                      will find that the real estate and housing industry in
                      Ghana is quite different with some challenges presented by
                      lack in regulation and minimum standards. This will be a
                      great learning experience for you, so be ready to be
                      flexible and utilise the pointers offered in this guide.
                    </p>
                    <p className="mt-4 text-sm leading-6">
                      The growing expatriate population has translated into more
                      high-end/luxury apartments, townhouses and homes that
                      feature amenities that foreigners are used to. Such demand
                      reflects in costs that may be rather shocking. You will
                      find the majority of property listed in US dollars. In
                      that vein, Accra’s residential rental costs almost mirror
                      that of large cities in the US and Europe, with renters
                      paying anywhere between $1,500 - $6,000 or more depending
                      on if it is a stand-alone house or a located within a
                      gated community offering security, or upscale apartment
                      with a swimming pool and other great amenities. Read more
                      in the HOUSING COSTS section.
                    </p>
                    <p className="mt-4 text-sm leading-6">
                      Most expats are posted to Ghana for a few years on work
                      assignment in which case renting would be the way to go.
                      It is not unheard of though to consider purchasing
                      property especially if you see yourself creating a life in
                      Ghana or are married to a citizen. Some consider buying a
                      home as an investment property with goals of renting it
                      out or flipping it later for profit. Not sure which is
                      best for you? Read this to help you decide.
                    </p>
                  </div>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Housing Costs
                    </span>
                    <p className="mt-4 text-sm leading-6">
                      We get asked a lot what the average price of the homes on
                      our website is. That’s an incredibly tough question. Homes
                      in Accra - whether for rent or sale - span a vast range in
                      cost with more modest property renting for as low under
                      GHS 1,000 (even GHS 100 for single room accommodation) and
                      others on the opposite end of the spectrum, for a couple
                      thousands of dollars. On the sale side, you can find
                      decent homes selling for about GHS 100,000 and more
                      extravagant options with a price tag of a million dollars.
                    </p>
                    <p className="mt-4 text-sm leading-6">
                      The costs boil down to factors such as size, location,
                      type of property, whether it is furnished or not and
                      amenities in and around the home and community in which it
                      is located. If you go for a house further away from the
                      city centre, that does not come with much, then of course
                      it will cost you much less than renting/buying in Accra’s
                      prime areas like Cantonments, Airport Residential, Labone,
                      Ridge, Dzorwulu, Abelenkpe, Osu or East Legon. Many of the
                      available housing options in these areas come complete
                      with coveted amenities like laundry facilities, constant
                      water and power supply, security personnel, manicured
                      lawns and gardens, swimming pools and more, accounting for
                      the cost. Most of the short-term and serviced housing
                      which have higher rent costs are also in these areas.
                    </p>
                    <p className="mt-4 text-sm leading-6">
                      There is opportunity for owners of vacant homes to make
                      money, if they would consult experts like professional
                      valuers or meQasa on setting realistic prices for property
                      listings. In developed markets, it’s easy to search comp
                      sales and rentals (Comps, or comparables, are regarded as
                      the single-best tool in determining a home&apos;s value),
                      and this helps control or set real estate prices as agents
                      can refer to them in pricing listings. This is currently
                      not the case in Ghana.
                    </p>
                    <p className="mt-4 text-sm leading-6">
                      This infographic offers a snapshot of some average rent
                      costs in Accra to give you an idea per what you seek:
                    </p>
                    <figure className="pt-4">
                      <Image
                        src="https://meqasa.com/assets2/images/INFOGRAPHIC_Accra.jpg"
                        alt="Costs"
                        width={1000}
                        height={1000}
                        className="h-auto w-auto rounded-lg"
                      />
                    </figure>
                    <p className="mt-4 text-sm leading-6">
                      There are some rather nice yet not as expensive options in
                      neighbourhoods like Spintex, Achimota, Ashaley Botwe,
                      Adenta, Dansoman and Tema, to name just a few. Of course
                      you can luck out and get very reasonably priced property
                      in prime areas as well. As a serious home seeker, its
                      smart to take advantage of tools like meQasa Property
                      Alerts where you can receive custom notifications on
                      properties matching your precise search preferences.
                    </p>
                  </div>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Other Expenses
                    </span>
                    <p className="mt-4 text-sm leading-6">
                      If you decide on a single family house, though the rent
                      may seem cheaper, you must take into account the
                      possibility of being responsible for caring for your own
                      yard/gardens, arranging weekly garbage collection and tank
                      water replenishment, maybe even buying a generator. This
                      is where the agreement with the landlord becomes very
                      important because if all these are offered in a listing,
                      then you can take joy in them being off your plate. Ensure
                      that you review your lease very carefully and do not sign
                      until you are sure of these. Gated communities have
                      service charges to cover such services.
                    </p>
                    <p className="mt-4 text-sm leading-6">
                      Of course, outside of the rent/house purchase cost, there
                      are bills to be paid for utilities. Here are some pointers
                      on keeping electricity bills at bay.
                    </p>
                  </div>
                </div>
              </div>
              <div id="#test" className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    TO RENT OR TO BUY? THAT IS THE QUESTION
                  </h2>
                  <p className="mt-6">
                    Maybe you already know what’s right for you - renting or
                    purchasing a place - or maybe you’re trying to figure out
                    the best option. Either way, we seek to give you good
                    information on both options so that you are better informed
                    to decide.
                  </p>

                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Renting may be best if you :
                    </span>

                    <ul className="mt-4 list-disc text-sm leading-6">
                      <li>
                        Plan to move around or travel often and don&apos;t want
                        to be tied to one location.
                      </li>
                      <li>
                        Can&apos;t afford the potential maintenance costs that
                        come with ownership (repairs, lawn care, etc.).
                      </li>
                      <li>Are saving for the future.</li>
                      <li>
                        There’s some other investment you feel your money would
                        be better used for. Especially, if this investment is
                        guaranteed to bring you very good returns quicker than
                        investing in a house would.
                      </li>
                      <li>
                        For some reason, believe owning your house is too risky
                        a venture for you, especially, in the event of a tragedy
                        (fire, flood, earthquake). Generally, it is not, but
                        there have been a few unlucky ones too.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      Buying may be best if you :
                    </span>

                    <ul className="mt-4 list-disc text-sm leading-6">
                      <li>Plan to stay in one location for a while.</li>
                      <li>Want to build equity over the long-term.</li>
                      <li>Have funds for a down payment and closing costs.</li>
                      <li>
                        Want the potential of making money from renting it out.
                        And also saving the money you’d otherwise have spent
                        paying rent.
                      </li>
                      <li>
                        Can afford the maintenance costs that come with owning
                        (repairs, lawn care, etc). Real estate almost always
                        appreciating in value and is known as the only sure way
                        to true wealth.
                      </li>
                    </ul>
                  </div>
                  <p className="mt-6">
                    In the end, for most people, it comes down to budget: if
                    there is enough money for purchasing the property then that
                    makes the buying decision for them. The practise of taking
                    out mortgages on property is still relatively new and will
                    not be likely to occur to the average Ghanaian as one of
                    their first options.
                  </p>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    A CLEAR VIEW OF PROPERTY TAXES
                  </h2>
                  <p className="mt-6">
                    Property tax is a levy on property that the owner is
                    required to pay. In Ghana, property tax is collected
                    annually by the Internal Revenue Service (IRS) and the
                    amount collected is determined by the Domestic Tax Revenue
                    Service. The amount to be paid by homeowners depends on the
                    value of the property and is also affected by the
                    neighbourhood the property is located in. Upper class
                    residential areas (Class 1s) attract heftier property tax
                    burdens than those on the lower class end of the spectrum
                    (Class 3s). In Accra, rates are on the higher side in
                    comparison to the other regions, and only go as low as 0.5%.
                    The below zone classification system provided by the Accra
                    Metropolitan Assembly provides guidance on how to calculate
                    property tax rates.
                  </p>
                  <figure className="pt-4">
                    <Image
                      src={table}
                      alt="Costs"
                      className="rounded- h-auto w-full"
                    />
                  </figure>
                  <div>
                    <span className="my-6 block text-base font-semibold tracking-tight text-b-accent">
                      The designated rating zones are as follows:
                    </span>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 1A :
                      </span>
                      <p className="mt-2 text-sm ">
                        Achimota Forest Residential, Roman Ridge, Airport West,
                        East Legon, Ambassadorial Enclave, Ridge.
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 1B :
                      </span>
                      <p className="mt-2 text-sm ">
                        Abelenkpe, Dworwulu, North Dworwulu, East Legon
                        Extention, West Legon, Ringway Estates, Nyaniba,
                        Tesano-1, Zoti
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 2A :
                      </span>
                      <p className="mt-2 text-sm ">
                        South Odorkor, Dansoman, SSNIT, Addogon, New Dansoman
                        Estates, Latebiokorshie, Candle Factory, Mamprobi, Kanda
                        Estates, Dansoman Estates, Nima, AkuffoAddo, Asylum
                        Down, Naaflajo, GREDA Estates, New Achimota.
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 2B :
                      </span>
                      <p className="mt-2 text-sm ">
                        Kwashieman North, Sakaman-Busia, Abofu New Dansoman,
                        Mataheko, Osofo Dadzie, West Abbosey Okai, Dansoman
                        Sahara, North Alajo, Adabraka, Tesano-2, Kaneshie,
                        Borabora Estates, Awudome Estates, North Kaneshie,
                        Abeka, Fadama, Apenkwa, North Kaneshie Estates–CFC,
                        Akweteman.
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 3A :
                      </span>
                      <p className="mt-2 text-sm ">
                        Kwashibu, Kwashiman, North Odorkor, Odorkor Old Town,
                        Kwashieman Old Town, Odorkor, Stanley Owusu, Banana Inn,
                        KorleGonno, MamprobiSempey, Maamobi, Old Dansoman,
                        Kotobabi Police Station, Kpehe, Alajo, Kotobabi, James
                        Town, Manhean, Alogboshie, AbekaLapaz, Bubiashie/New
                        Fadama, Kisseman/Christian Village.
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 3B :
                      </span>
                      <p className="mt-2 text-sm ">
                        AbosseyOkai, Sukura, Russia, Sabon Zongo, Town Council
                        Line, Mamponse, Tunga, Nima, Accra New-Town, Shiashie
                        Village, Darkuman, Bawleshie Mempeasem, Anumle, North
                        Abeka, Old Bubiashie, NiiBoyeman/Achimota.
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Residential Class 3C :
                      </span>
                      <p className="mt-2 text-sm ">
                        Chorkor, Mpoase, Gbegbeise, Shiabu, Luga, Osu
                        Amanfo/Alata.
                      </p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Commercial Class 1 :
                      </span>
                      <p className="mt-2 text-sm ">CBD and Extended CBD</p>
                    </div>
                    <div>
                      <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                        Commercial Class 2 :
                      </span>
                      <p className="mt-2 text-sm ">
                        Extended Central Business District including Tudu, Osu
                        Amantra, Osu Anorho, CDC, Kuku Hill, Airport West,
                        Switch Back Road, Roman Ridge, Airport By-Pass, Police
                        Quarters, and DVLA.
                      </p>
                    </div>

                    <p className="mt-4 text-sm ">
                      Data Source:
                      <Link
                        className="cursor-pointer pl-2 text-b-primary"
                        href={
                          "  http://ghanahouseplans.com/gh/property-taxes-in-the-greater-accra-area.html"
                        }
                      >
                        http://ghanahouseplans.com/gh/property-taxes-in-the-greater-accra-area.html
                      </Link>
                    </p>
                    <p className="mt-6 text-sm ">
                      In addition, money made on rental of properties are also
                      taxed. The Government of Ghana has authorised payment by
                      property owners of 8% on the gross income received during
                      any given year.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    PAYING FOR YOUR HOME
                  </h2>
                  <p className="mt-6">
                    Accommodation in Accra is a huge investment, whether you are
                    just renting the home or actually buying it. With regards to
                    rent, though the law stipulates that upfront rent payments
                    should not exceed a six-month lump sum, many landlords who
                    rent out their homes take advantage of a legal loophole to
                    avoid paying any heed to this and the law is not enforced.
                    It is almost accepted as standard to pay 12 to 24 months of
                    rent before one is allowed to move in. Very few homeowners
                    offer month-to-month payment of rent but you may find such
                    payment arrangements for the more expensive, high end
                    apartments and homes with high rent tags. Unless you have a
                    huge chunk saved up or have a benefactor, you might have to
                    consider taking out a home loan.
                  </p>
                  <p className="mt-6">
                    Paying for housing in the capital is not cheap. Some people
                    already have the full sum of money available to cover the
                    asking price for the house. Some others have rich associates
                    and family on whom they can rely on for financial help in
                    acquiring the house and for the rest, financial institutions
                    have home loans and mortgages.
                  </p>
                  <p className="mt-6">
                    Let&apos;s explore the benefits of paying for the house up
                    front versus taking a loan from a financial institution:
                  </p>

                  <div>
                    <span className="my-6 block text-base font-semibold tracking-tight text-b-accent">
                      Paying Cash
                    </span>
                    <div>
                      <ol className="list-decimal space-y-3">
                        <li>
                          Removes the hassle of getting a loan/mortgage. Most
                          financial institutions have a whole list of
                          requirements they expect loan/mortgage applicants to
                          meet before they decide if the applicant is worthy of
                          a loan. Because of this, they are likely to request
                          lots of documentation even from applicants with stable
                          earnings and other positive traits. While this may be
                          a wise step on the part of the bank or other financial
                          institution, it can mean more time and frustration for
                          loan or mortgage applicants. In the meantime, other
                          interested buyers may buy the property while the
                          background and eligibility checks are going on.
                        </li>
                        <li>
                          Gives you eligibility for a better deal. Paying cash
                          makes you a more appealing buyer and puts you in a
                          better position to strike a bargain. The sooner the
                          seller receives their money, the sooner they can make
                          use of it and move on.
                        </li>
                        <li>
                          Removes worries about loan repayments.
                          Mortgages/housing loans represent the largest single
                          bill most people have to pay on a monthly basis. This
                          could quickly become the biggest burden if incomes
                          drop due to unfortunate events. Not only is the
                          average person today unlikely to remain in the same
                          place for 15-20 years (roughly the period it takes for
                          most mortgage repayments), but some people often
                          refinance their mortgages when interest rates fall,
                          which can extend their loan obligations further into
                          the future. In Ghana, home loans come with hefty
                          interest rates as compared to in developed markets.
                          Inflation is also likely to affect the value owed to
                          the bank. If peace of mind is important to you, paying
                          cash for your home can be a smart move. If you are
                          approaching retirement, you wouldn&apos;t want to
                          leave huge debts for your dependants.
                        </li>
                        <li>
                          The loan acquisition process can be time-consuming,
                          and uncertain too. In case an applicant is turned
                          down, the deal will fall through and the sellers will
                          have to start the whole process of finding a qualified
                          buyer all over again. Being ready to pay cash not only
                          gives the seller more confidence in you, making them
                          eager to close the deal, but you are also a more
                          competitive buyer if you are ready to pay immediately.
                          In the case where the seller has multiple bids, having
                          cash upfront means you can be first to close.
                        </li>
                      </ol>
                      <p className="mt-2 text-sm ">
                        <span className="font-extrabold">NB : </span> Make sure
                        if you have an arrangement to pay a property seller
                        cash, you keep a paper trail of receipts for your
                        records.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="my-6 block text-base font-semibold tracking-tight text-b-accent">
                      Taking Out a Loan/Mortgage
                    </span>
                    <div>
                      <ol className="list-decimal space-y-3">
                        <li>
                          Potential profit gain. Buying a house with borrowed
                          money, puts you in a position to get higher returns.
                          If for instance, you took out a loan to buy a house
                          for GH¢250,000, and during the period of your
                          repayment, the house increases in value and is now
                          worth GH¢400,000, you can imagine the percentage of
                          profit you would have made in securing the house with
                          borrowed money. On the other hand, if the house
                          depreciates (which rarely happens), you may lose a
                          percentage of your investment, which would not have
                          been so bad had you paid cash.
                        </li>
                        <li>
                          You’ll be freeing up chunks of your money. In most
                          cases, the money needed to buy a home outright
                          represents most of your savings, and going through
                          with it directly flouts one of the basic rules of
                          personal finance: diversification. Putting your cash
                          in other investments that offer regular returns on
                          investment than residential real estate, may be a
                          better idea. With this knowledge, it is best to think
                          of your home as a place to live in lieu of an
                          investment.
                        </li>
                        <li>
                          You decline the chance to back out quickly. Liquidity
                          refers to how quickly you can get your cash out of an
                          investment if you ever need to. In the case where you
                          pay cash for the house, you would need months at least
                          to get your money back if you decided to sell. Some
                          financial institutions may be willing to let you off
                          your financial obligations to them and repossess the
                          house, making its sale or disposal their
                          responsibility while you are free to move on to other
                          things.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full ">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    INSURING YOUR HOME
                  </h2>
                  <p className="mt-6">
                    Real estate is costly and undoubtedly one of the largest
                    income investments anyone could make. Once one moves into a
                    residential rental property or purchases a home, it is
                    advisable to get domestic insurance (homeowner or renter’s)
                    to cover the property and all the belongings within it, in
                    the event of anything unfortunate. These are what the 3 main
                    classes of insurance cover:
                  </p>
                  <ul className="ml-10 mt-3 list-disc">
                    <li>
                      Fire & Allied Perils -- the building & it&apos;s fixtures
                      & fittings eg. Roofing sheets, bath tubs, sinks. Inclusive
                      of natural & artificial disasters such as floods or
                      falling objects from the sky, lightning and explosion.
                      Additional perils that are also covered include impact,
                      aircraft, wind storm, flood, bursting pipes, earthquakes,
                      riots and strikes.
                    </li>
                    <li>Burglary -- the contents eg. clothes, appliances</li>
                    <li>Burglary -- the contents eg. clothes, appliances</li>
                  </ul>
                  <p className="mt-6">
                    In Ghana, there are a number of insurance companies that
                    offer homeowner’s and renter’s insurance. Homeowner’s
                    insurance covers the building(s) that are in the property
                    owner’s name as well as all of its contents. Renter’s
                    insurance covers the renter’s items (clothing, furniture,
                    gadgets, etc) as declared, but not the property.
                  </p>
                  <p className="mt-6">
                    Any interested person can apply for homeowner or renter’s
                    insurance -- an annual premium paid that does not carry over
                    from year to year but is renewable annually. They can select
                    which perils the insurance will cover, whether just fire,
                    flood, burglary, third party liability, or have a
                    comprehensive plan that insures all property regardless of
                    the cause of loss. When one has insurance they can have
                    their property and items reinstated (i.e. receive a lump sum
                    on the value of the lost property at the time of the
                    incident, taking into account the fact that property
                    appreciates) or they may be replaced (i.e. receive a lump
                    sum on the exact value of the lost property at the time of
                    application). Reinstatement of course, attracts high
                    premiums. The application process is rather simple and fast.
                    Insurance is based on utmost good faith. This simply means,
                    the insured (owner) is honest in the stated values of the
                    property and its contents to the insurer (company). Some
                    people under insure their property by stating lower values
                    to escape higher premiums.
                  </p>
                  <p className="mt-6">
                    Do you have the phone number for Ghana Fire Service handy?{" "}
                    <Link
                      className="cursor-pointer pl-2 text-b-primary"
                      href={
                        "https://meqasa.com/blog/handy-phone-numbers-every-home-should-have/"
                      }
                    >
                      {" "}
                      See our list of handy emergency phone numbers every home
                      should have.
                    </Link>{" "}
                    We suggest you print it and put it on your fridge.
                  </p>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    DEALING WITH A LANDLORD OR TENANT
                  </h2>
                  <p className="mt-6">
                    Renting a property requires some level of interaction with
                    the owner of the property, who becomes your
                    landlord/landlady once the tenancy agreement is signed. Very
                    good tenancy agreements spell out exactly what the terms of
                    the relationship are, detailing who is responsible for what.
                    It&apos;s advisable to read your rent agreement thoroughly.
                    Here are some of the rights and responsibilities of the
                    landlord/landlady-tenant relationship:
                  </p>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      A Note to Landlords
                    </span>

                    <p className="mt-6">
                      If you have property you are renting out, it is in your
                      interest to maintain very good relationships with your
                      tenants once the lease agreement is signed. However, you
                      should not be so eager to rent out your property that you
                      neglect to do your homework on the prospective tenant.
                      Inasmuch as a thorough background check is a great
                      challenge in Ghana (you can’t credibly check things like
                      credit score, etc.), here are a few things you should try
                      to find out before taking on a tenant:
                    </p>
                    <ol className="list-decimal">
                      <p className="my-6 block text-base font-semibold tracking-tight text-b-accent">
                        Employment:
                      </p>
                      <li>
                        Are they gainfully employed? Is it permanent or
                        temporary? (In case you’re considering renewing their
                        tenancy)
                      </li>
                      <li>
                        Is it a legally recognised and accepted profession you
                        are comfortable being associated with?
                      </li>
                    </ol>
                    <p className="mt-6">
                      As a landlord, you have the final say in who gets to be
                      your tenant, so you can be open about your expectations
                      which normally would be included in the tenancy agreement.
                      Let the prospective tenant be aware of the things you
                      would not like in your home, like loud noise at odd hours,
                      religious practices that may inconvenience neighbours and
                      not being prompt on bill payments. Once you’re certain
                      they meet all your criteria, or at least are people you
                      would feel comfortable having occupy your property, you
                      can go ahead and enter into a lease agreement with them.
                    </p>
                    <p className="mt-6">
                      Be sure to allow the tenant to use or enjoy the property
                      in peace with as little disturbance as possible. Promptly
                      repair all damage to the property resulting from wear and
                      tear or from natural causes. The tenant only pays for this
                      if the damage is due to their own actions or neglect. Give
                      prior notice to the tenant and agree on a convenient time
                      when you or workers on your behalf will enter the
                      premises, where need be.
                    </p>
                  </div>
                  <div>
                    <span className="mt-8 block text-base font-semibold tracking-tight text-b-accent">
                      A Note to Tenants
                    </span>

                    <p className="mt-6">
                      As a tenant, you are expected to maintain the property as
                      the actual owner of the property would. Though some duties
                      are yours exclusively, there are also some situations
                      where you need to defer to the landlord or have them
                      handle the situation altogether. Landlords may need access
                      to the property to inspect it and conduct repairs from
                      time to time, but they are required to do this at a time
                      you have both agreed on (usually noted in your tenancy
                      agreement ) prior to their coming. Otherwise, they are
                      obligated to by law to let you live in your home without
                      unnecessary interference. You, on the other hand must keep
                      the peace in the neighbourhood and not disturb other
                      tenants or neighbours with unsavoury behaviour.
                    </p>

                    <p className="my-6 block text-base font-semibold tracking-tight text-b-accent">
                      Repairs:
                    </p>

                    <p className="mt-6">
                      Landlords are responsible for most repairs to permanent
                      parts of the structure of the property, like the roof,
                      walls, gutters and drains. She/he is also responsible for
                      keeping the water tank (if included) in good enough
                      condition to serve its proper purpose. You, as the tenant
                      also have a responsibility to repair the non-permanent
                      parts of the house, like replacing burnt out light bulbs,
                      filling your gas cylinder, fixing interior decor and
                      maintaining the garden or yard, without expecting to be
                      reimbursed by the landlord.
                    </p>
                    <p className="mt-6">
                      Both you and your landlord must follow the provisions of
                      the tenancy agreement and not violate any of them. (S)he
                      must also follow the provisions of the agreement in the
                      event you are in breach of it and intends to evict you.
                      However, the provisions must not be in breach of the
                      nation’s laws regarding tenancy.Your rent can be
                      increased, but discussions concerning such increase should
                      be had ideally at least two months before your lease is
                      up.
                    </p>
                    <p className="mt-6">
                      Outside of the agreements, rights and responsibilities,
                      maintaining very cordial relations with your landlord is
                      always a great thing. It reduces the chances of friction
                      between you and makes both your lives easier.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    LAND: ACQUISITION, REGISTRATION AND EVERYTHING IN BETWEEN
                  </h2>
                  <p className="mt-6">
                    Land is a highly coveted property in Ghana with several
                    people seeking to purchase a parcel, be it to develop
                    residential or commercial buildings. This high demand for
                    land is not just from locals, even some expatriates seek to
                    be land owners in Ghana and to own one of the only assets
                    that appreciates with time. In Ghana, lands are attained as
                    leasehold property, meaning ownership is for a limited
                    timeframe (50 years for expatriates and 99 years for
                    citizens). The process of trying to acquire private land
                    from an individual is a rather tricky one, seeing as there
                    is no set standard admitted by the Ghana Lands Commission.
                    People must take precautions to implement their own checks
                    and balances to make sure a seller indeed owns the land, in
                    order to avoid future land dispute ordeals. Woes of a
                    landowner having sold the same area of land to multiple
                    people is one that is heard far too often.
                  </p>
                  <div>
                    <p className="mt-6">
                      There are four types of land in Ghana:
                    </p>

                    <ol className="ml-10 list-disc">
                      <li>Government land</li>
                      <li>Vested land</li>
                      <li>Customary/stool land</li>
                      <li>Family/private land</li>
                    </ol>
                    <p className="mt-6">
                      If you approach a private land seller who is interested in
                      selling off his/her land to you, find out all you can
                      about this seller and his business. Be sure to check with
                      the Lands Commission to validate from their records if
                      this person truly owns the piece of land you are
                      interested in buying. It’s also advisable to check with
                      government land overseers to ensure the land has not been
                      taped for future national development projects. It is not
                      unheard of for people to post a notice of inquiry in the
                      newspapers to ask if there is anyone who has that
                      particular land piece registered to their name. At the
                      same time, request that the seller provides you a
                      certified site plan demarcating the precise location of
                      the land including its coordinates. He/She should have had
                      a professional surveyor to do this and you are advised to
                      also work with one to double-check everything. No money
                      should have exchanged hands yet for the purchase of the
                      land up to this juncture.
                    </p>
                    <p className="mt-6">
                      If you feel quite assured at this point, then you can
                      negotiate on sales terms with the seller and when you
                      comfortably reach an agreement, then work with your lawyer
                      to draft a purchase and ownership transfer contract/Deed
                      of Conveyance which both you and the seller will sign.
                      Once that is done and you make payment, you are now the
                      legal owner of the land. You need to make multiple copies
                      of the indenture (your ownership agreements, lease details
                      detailing parties to the transaction, witnesses, price
                      paid and ground rent) and have them endorsed by a land
                      lawyer who also professionally stamps them. Each copy
                      should have a land surveyor certified site plan attached.
                    </p>
                    <p className="mt-6">
                      To complete the process, you need to register the land and
                      deed with the Lands Commission and attain the title
                      certificate to prove ownership. Land registration is the
                      recording of rights and interest in land as evidenced by
                      documentation so that your right to ownership is
                      established and protected. Registering your land reduces
                      litigation issues and renders your documents admissible in
                      court. You should also obtain a tax clearance certificate
                      at Internal Revenue Service.
                    </p>
                    <div>
                      <p className="mb-2 mt-6">
                        You may contact the Ghana Lands Commission:
                      </p>
                      <p className="mb-2 text-sm">
                        {" "}
                        <span className="font-bold"> Tel : </span>024 032 0119 /
                        020 876 0311
                      </p>
                      <p className="text-sm">
                        <span className="font-bold"> Address : </span>Second
                        Circular Rd, Cantonments Accra (adjacent Cantonments
                        Post Office)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    SELLING & LETTING PROPERTY
                  </h2>
                  <p className="mt-6">
                    As a property owner, at some point, you might want to cash
                    in on your possession by selling or renting out your real
                    estate. Before you do this, it’s a good idea to hire a
                    professional building surveyor to make sure the construction
                    and condition of your house does not present any hidden
                    problems that will be worrisome to would-be buyers and
                    renters.
                  </p>
                  <p className="mt-6">
                    meQasa helps with tips on how to price your property to sell
                    quickly and still be profitable. You can also implement tips
                    on how to increase the value of your home before selling or
                    renting it out. Once you have the basics covered and are
                    certain which way to go, you need to make your intention
                    known to potential clients. This can be done in different
                    ways (majority of home owners defer to the services of
                    professional real estate agents):
                  </p>
                  <div className="mt-6">
                    <ol className="ml-10 list-decimal space-y-4">
                      <li>
                        Word of mouth: This is the oldest means of marketing. It
                        starts out slow, by informing family and friends and
                        encouraging them to tell others about your available
                        property for sale or rent, in hopes that the news
                        eventually reaches interested buyers or renters. Unless
                        your family is connected to a network that is great at
                        spreading the word or your asking price is significantly
                        lower than the standard market price, you’re very likely
                        in for a long wait.
                      </li>
                      <li>
                        Traditional & Digital Marketing: Posters/billboards
                        involve quite a bit of money, since printing does not
                        come cheap. You may also need to pay people to place
                        your designed ads in various vantage areas where they
                        are likely to get maximum visibility. Additionally, you
                        could advertise online and take advantage of the most
                        far-reaching and one of the cheapest methods of reaching
                        potential clients. Real estate search portals like
                        meQasa.com offer you the chance to market your property,
                        making it easy to get your property before interested
                        buyers and thus, quickly close a deal. You get access to
                        a dashboard from where you can manage your properties
                        and leads and easily communicate with them till it is
                        time to close the deal. You do need to periodically
                        return to see the interest your ad has generated and
                        call back the leads the site has collected for you to
                        quickly close your sale.
                      </li>
                      <li>
                        Using a real estate agent/agency: This is usually the
                        way to go if you want to focus on other things while the
                        advertising of your property is going on. Hiring a
                        professional agent takes some of the headache that come
                        with representing your own property. You no longer need
                        to worry about receiving calls at odd hours from
                        interested buyers; handling long questions from people
                        who may eventually not buy; having to avail yourself to
                        show the property to potential tenants/buyers;
                        interviewing and rejecting potential tenants who do not
                        match your ideal tenant criteria, etc. All of these will
                        be handled by the agent for a fee of typically 5% of the
                        total value of the sale or 10% of rent lump sum, or as
                        otherwise agreed between you. Hiring an agent/agency
                        comes with the following benefits:
                        <ul className="ml-10 mt-6 list-disc space-y-3">
                          <li>
                            All marketing costs are borne by the agent/agency.
                            This covers billboards, posters, social media
                            advertisements, real estate marketplace advertising
                            and monitoring.They will handle all interactions
                            with prospective clients both online and offline and
                            only bring you in when they have found a
                            satisfactory client who is prepared to make a move.
                          </li>
                          <li>
                            The agent/agency ideally has a professional edge and
                            knowledge of the industry and is therefore in a
                            better position to communicate the best features of
                            your house and neighbourhood to get a client
                            interested in owning or renting it.
                          </li>
                          <li>
                            Customer-handling and negotiation skills are an
                            added bonus when you use the services of a
                            professional real estate agent. Their experience
                            handling multiple types of clients in their past
                            transactions makes them more capable of handling
                            objections and quickly identifying serious leads
                            that have a stronger likelihood of buying or renting
                            the property.
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <p className="mt-6">
                      If you approach a private land seller who is interested in
                      selling off his/her land to you, find out all you can
                      about this seller and his business. Be sure to check with
                      the Lands Commission to validate from their records if
                      this person truly owns the piece of land you are
                      interested in buying. It’s also advisable to check with
                      government land overseers to ensure the land has not been
                      taped for future national development projects. It is not
                      unheard of for people to post a notice of inquiry in the
                      newspapers to ask if there is anyone who has that
                      particular land piece registered to their name. At the
                      same time, request that the seller provides you a
                      certified site plan demarcating the precise location of
                      the land including its coordinates. He/She should have had
                      a professional surveyor to do this and you are advised to
                      also work with one to double-check everything. No money
                      should have exchanged hands yet for the purchase of the
                      land up to this juncture.
                    </p>
                    <p className="mt-6">
                      If you feel quite assured at this point, then you can
                      negotiate on sales terms with the seller and when you
                      comfortably reach an agreement, then work with your lawyer
                      to draft a purchase and ownership transfer contract/Deed
                      of Conveyance which both you and the seller will sign.
                      Once that is done and you make payment, you are now the
                      legal owner of the land. You need to make multiple copies
                      of the indenture (your ownership agreements, lease details
                      detailing parties to the transaction, witnesses, price
                      paid and ground rent) and have them endorsed by a land
                      lawyer who also professionally stamps them. Each copy
                      should have a land surveyor certified site plan attached.
                    </p>
                    <p className="mt-6">
                      To complete the process, you need to register the land and
                      deed with the Lands Commission and attain the title
                      certificate to prove ownership. Land registration is the
                      recording of rights and interest in land as evidenced by
                      documentation so that your right to ownership is
                      established and protected. Registering your land reduces
                      litigation issues and renders your documents admissible in
                      court. You should also obtain a tax clearance certificate
                      at Internal Revenue Service.
                    </p>
                    <div>
                      <p className="mb-2 mt-6">
                        You may contact the Ghana Lands Commission:
                      </p>
                      <p className="mb-2 text-sm">
                        {" "}
                        <span className="font-bold"> Tel : </span>024 032 0119 /
                        020 876 0311
                      </p>
                      <p className="text-sm">
                        <span className="font-bold"> Address : </span>Second
                        Circular Rd, Cantonments Accra (adjacent Cantonments
                        Post Office)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-b-muted lg:max-w-full">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-b-accent">
                    18 QUESTIONS TO ANSWER BEFORE YOU START YOUR HOME SEARCH
                  </h2>
                  <p className="mt-6">
                    Finding your next home - one that you will love - requires
                    some groundwork from you. It’s necessary to be honest with
                    yourself about certain things and make some decisions even
                    before you log into meQasa.com. Once you have gone through
                    these questions, which will help paint the picture of what
                    you seek in a home, you’ll be ready to take off and are more
                    likely to pick effectively, having set your criteria.
                  </p>

                  <div className="mt-6">
                    <ol className="ml-10 list-decimal space-y-4">
                      <li>How much can you afford?</li>
                      <li>
                        How long are you seeking accommodation for? (a few
                        months or years)
                      </li>
                      <li>How many bedrooms and bathrooms do you need?</li>
                      <li>
                        Do you need a fully furnished, unfurnished or
                        semi-furnished place?
                      </li>
                      <li>How much square footage do you need?</li>
                      <li>
                        Is living in the city centre important? Or do you prefer
                        to be in a more suburban and quiet area?
                      </li>
                      <li>What neighbourhoods would you prefer to live in?</li>
                      <li>
                        Which neighbourhoods would you absolutely not consider
                        living in?
                      </li>
                      <li>
                        Do you have a car for daily commute? (this affects
                        whether living close to main streets matter)
                      </li>
                      <li>
                        Do the neighbourhoods you like offer great amenities
                        that are important to you? (e.g. supermarkets and other
                        shops closeby, good transportation links, well-lit
                        streets, etc)
                      </li>
                      <li>
                        If looking to purchase from a developer, are they
                        registered members of the Ghana Real Estate Developers
                        Association?
                      </li>
                      <li>Will you need a roommate to help split expenses?</li>
                      <li>
                        What are your must-haves in a place versus your desired
                        amenities but ones that you can do without?
                      </li>
                      <li>
                        Do you prefer an apartment or a self-compound detached
                        house?
                      </li>
                      <li>Do you have a pet/pets?</li>
                      <li>
                        Do you have needs that require you to be on the ground
                        floor? (e.g. hip or leg problems)
                      </li>
                      <li>
                        Do you foresee having a live-in househelp? (if so, you
                        would need a room for him/her)
                      </li>
                    </ol>
                    <p className="mt-6">
                      With regards to neighbourhoods, you may refer to our
                      LIVING IN: Accra neighbourhood profiles for insight into
                      various areas in the capital and what they have to offer.
                    </p>

                    <p className="mt-6 border-t border-red-200 pt-3 text-sm leading-6">
                      Still have a few questions about finding accommodation or
                      living in Accra? We’re here to help make your residential
                      experience as smooth as can be so{" "}
                      <Link
                        href="/contact-us"
                        className="font-semibold text-b-primary no-underline"
                      >
                        {" "}
                        give us a call or send us an email
                      </Link>{" "}
                      and let’s get you on your way to happy home life!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
