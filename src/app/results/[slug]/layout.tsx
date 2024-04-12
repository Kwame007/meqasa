interface ResultsLayoutProps {
  children: React.ReactNode
}

export default async function ResultsLayout({ children }: ResultsLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
