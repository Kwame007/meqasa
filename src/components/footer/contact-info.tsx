import Link from "next/link"

export function ContactInfo({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode
  label: string
  link: string
}) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <Link
        href={link}
        className="block h-5 text-xs font-normal capitalize leading-5 no-underline hover:font-semibold"
      >
        {label}
      </Link>
    </div>
  )
}
