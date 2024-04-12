interface DeveloperLayoutProps {
  children: React.ReactNode
}

export default async function DeveloperLayout({
  children,
}: DeveloperLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
