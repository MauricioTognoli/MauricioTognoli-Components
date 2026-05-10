"use client";

import React from "react";
import { SocialGrid } from "./social-grid";
import type { ProfileData, SocialLinks } from "./types";

const MOCK_PROFILE: ProfileData = {
  name: "Your Name",
  role: "Frontend Developer",
  bio: "Crafting modern web experiences with React, Next.js, and a touch of magic. Building intuitive interfaces for the future.",
  avatarUrl: "https://avatars.githubusercontent.com/u/10433246?v=4",
  avatarAlt: "Profile avatar",
};

const MOCK_LINKS: SocialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  email: "hello@example.com",
};

export function SocialGridDemo() {
  return (
    <div className="bg-neutral-950 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <SocialGrid profile={MOCK_PROFILE} links={MOCK_LINKS} />
      </div>
    </div>
  );
}
