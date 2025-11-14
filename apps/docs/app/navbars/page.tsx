"use client";

import { useState } from "react";
import { useThemeLang } from "@/context/ThemeLangContext";
import { ComponentShowcase } from "@/components/component-showcase";
import { navbarsData } from "@/data/navbarsData";
import NavbarDesktop from "@/components/headers/NavbarWhitSearchBar/NavbarDesktop";
import NavbarMobile from "@/components/headers/NavbarWhitSearchBar/NavbarMobile";

export default function NavbarsPage() {
  const { language } = useThemeLang();
  const t = navbarsData[language];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="container mx-auto px-4 py-10 flex-1 flex flex-col gap-10">
        {/* Header */}
        <header className="h-screen min-h-screen text-center flex flex-col justify-center items-center flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            {t.title}
          </h1>
          <div className="h-1 sm:h-2 w-32 sm:w-40 md:w-48 mx-auto bg-primary rounded-full" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            {t.description}
          </p>
        </header>

        {/* Component Showcase Section */}
        <section className="space-y-10 pb-20">
          <div className="w-full">
            <ComponentShowcase
              title={t.showcase1}
              githubUrl="https://github.com/mauriciotognoli/components/tree/main/navbar-with-searchbar"
            
              DesktopComponent={<NavbarDesktop />}
              MobileComponent={<NavbarMobile />}/>
          </div>
        </section>
      </div>
    </div>
  );
}
