import { getBannerAds } from "@/lib/utils"

import BannerCard from "./banner-card"

export default async function BannerGroup() {
  const banners = await getBannerAds()

  return (
    <section className="grid items-center gap-8">
      <div className="grid grid-cols-[1px_1fr_1fr_4px] gap-3.5 overflow-x-scroll py-4 lg:grid-cols-2 lg:gap-8 lg:p-0">
        <div className="w-1 lg:hidden" />
        {banners.map((banner) => (
          <BannerCard {...banner} key={banner.href} />
        ))}
        <div className="w-1 lg:hidden" />
      </div>
    </section>
  )
}
