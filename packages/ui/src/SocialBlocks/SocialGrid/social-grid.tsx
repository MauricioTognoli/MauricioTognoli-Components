"use client";

import React from "react";
import { SocialGridDesktop } from "./social-grid-desktop";
import { SocialGridMobile } from "./social-grid-mobile";
import type { SocialGridProps } from "./types";

/**
 * Responsive Social Grid Bento component.
 * Renders the desktop bento layout on md+ screens and the mobile stack on smaller screens.
 *
 * @example
 * <SocialGrid
 *   profile={{ name: "Your Name", role: "Developer", bio: "...", avatarUrl: "..." }}
 *   links={{ github: "https://github.com/you", linkedin: "...", email: "you@example.com" }}
 * />
 */
export function SocialGrid({ profile, links, className }: SocialGridProps) {
  return (
    <>
      <div className="hidden md:block">
        <SocialGridDesktop profile={profile} links={links} className={className} />
      </div>
      <div className="block md:hidden">
        <SocialGridMobile profile={profile} links={links} className={className} />
      </div>
    </>
  );
}
