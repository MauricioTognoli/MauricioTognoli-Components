import React from "react"

interface PageHeaderProps {
  title: string
  subtitle: string
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="text-center flex flex-col justify-center items-center flex-1 space-y-6 min-h-screen h-screen">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">{title}</h1>
      <div className="h-1 sm:h-2 w-32 sm:w-40 md:w-60 mx-auto bg-orange-400 rounded-full" />
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  )
}
