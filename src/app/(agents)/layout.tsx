interface AgentLayoutProps {
  children: React.ReactNode
}

export default async function AgentLayout({ children }: AgentLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
