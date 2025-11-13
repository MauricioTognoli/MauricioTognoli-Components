import React from "react"

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="container mx-auto px-4 py-10 flex-1 flex flex-col gap-10">
        {children}
      </div>
    </div>
  )
}
