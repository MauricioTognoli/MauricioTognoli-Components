"use client";

import { useEffect } from "react";
import { useThemeLang } from "@/context/ThemeLangContext";
import { ComponentShowcase } from "@/components/component-showcase";
import { socialBlocksData } from "@/data/socialBlocksData";
import { SocialGridDesktop, SocialGridMobile } from "@repo/ui";
import type { ProfileData, SocialLinks } from "@repo/ui";

const PROFILE: ProfileData = {
  name: "Mauricio Tognoli",
  role: "Frontend Developer",
  bio: "Crafting modern web experiences with React, Next.js, and a touch of magic. Building intuitive interfaces for the future.",
  avatarUrl: "https://avatars.githubusercontent.com/u/10433246?v=4",
};

const LINKS: SocialLinks = {
  github: "https://github.com/MauricioTognoli",
  linkedin: "https://www.linkedin.com/in/mauricio-tognoli",
  twitter: "#",
  instagram: "#",
  email: "contact@example.com",
};

export default function SocialBlocksPage() {
  const { language } = useThemeLang();
  const t = socialBlocksData[language] || socialBlocksData.en;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

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
        <section id="social-grid" className="space-y-10 pb-20">
          <div className="w-full">
            <ComponentShowcase
              title={t.showcase1}
              githubUrl="https://github.com/MauricioTognoli/MauricioTognoli-Components/tree/main/packages/ui/src/SocialBlocks/SocialGrid"
              DesktopComponent={
                <SocialGridDesktop profile={PROFILE} links={LINKS} />
              }
              MobileComponent={
                <SocialGridMobile profile={PROFILE} links={LINKS} />
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
