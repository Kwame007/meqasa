import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const data = [
  {
    lease: " daily",
    price: "12,000",
    duration: "day",
    isActive: false,
  },
  {
    lease: " weekly",
    price: "12,000",
    duration: "week",
    isActive: false,
  },
  {
    lease: " 3 months",
    price: "12,000",
    duration: "month",
    isActive: false,
  },
  {
    lease: " 6 months",
    price: "10,000",
    duration: "month",
    isActive: false,
  },
  {
    lease: " 12 months",
    price: "8,000",
    duration: "month",
    isActive: true,
  },
  {
    lease: " 24 months",
    price: "6,000",
    duration: "month",
    isActive: true,
  },
]

function LeaseOptionCard({
  lease,
  monthlyRent,
  duration,
  isActive,
}: {
  lease: string
  monthlyRent: string
  duration: string
  isActive: boolean
}) {
  const currencySymbol = "GH₵"

  return (
    <Card
      className={cn(
        isActive
          ? "border-[#ffa1ae] opacity-100"
          : "opacity-50 border-0 shadow-none ",
        "h-[97px] rounded-[8px] p-3 "
      )}
    >
      <span className="text-xs font-semibold capitalize text-b-muted">
        {lease}
      </span>
      <p className="text-[13px] md:text-sm font-semibold text-b-accent">
        {isActive ? ` ${currencySymbol} ${monthlyRent}` : "Unavailable"}
      </p>
      <span className="text-xs font-semibold text-b-muted">per {duration}</span>
    </Card>
  )
}

// Render lease options component
export default function LeaseOptions() {
  return (
    <aside className="mt-8 px-4 md:mt-20 md:px-0">
      <Card className="flex w-full flex-col items-start gap-5 rounded-xl bg-[#fff1f3] px-6 py-4 text-b-accent md:flex-row border-[#ffa1ae]">
        <Badge className="bg-primary text-[10px] md:text-xs uppercase">
          Available Lease options
        </Badge>
        <div className="grid grow grid-cols-3 gap-4 md:gap-3">
          {data.map((obj, i) => (
            <LeaseOptionCard
              lease={obj.lease}
              monthlyRent={obj.price}
              duration={obj.duration}
              isActive={obj.isActive}
              key={i}
            />
          ))}
        </div>
      </Card>
    </aside>
  )
}
