"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, SearchIcon, UserRound } from "lucide-react";

export const NAV_LINKS = [
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
  { href: "#", label: "Analytics" },
];

export default function NavbarDesktop() {
  return (
    <header className="relative w-full">
      <nav className="bg-neutral-900 border-b border-gray-800 text-gray-200 px-4 py-2.5 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="#" aria-label="Go to the homepage" className="flex items-center">
            <Image
              src="/logo-mt.png"
              alt="Site logo"
              width={62}
              height={45}
              className="object-contain"
              priority
            />
          </Link>

          {/* Links */}
          <div className="flex gap-8 text-md font-medium">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-orange-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop search */}
          <div className="flex items-center bg-neutral-800 rounded-md px-3 py-1.5 w-64 focus-within:ring-2 focus-within:ring-orange-400">
            <SearchIcon size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search content"
              className="bg-transparent text-gray-200 placeholder-neutral-500 focus:outline-none w-full text-sm"
            />
          </div>

          {/* Notifications */}
          <Link
            href="#"
            aria-label="View notifications"
            className="hover:text-orange-400 transition-colors"
          >
            <Bell size={26} strokeWidth={2.5} />
          </Link>

          {/* Profile */}
          <Link
            href="#"
            aria-label="User profile"
            className="bg-gray-500 text-black rounded-full w-10 h-10 flex items-center justify-center hover:opacity-90 transition"
          >
            <UserRound size={22} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
