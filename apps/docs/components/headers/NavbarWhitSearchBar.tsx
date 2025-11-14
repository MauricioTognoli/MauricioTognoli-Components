"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MenuIcon,
  X,
  Bell,
  SearchIcon,
  UserRound,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/analytics", label: "Analytics" },
];

export default function NavbarWithSearchBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative">
      {/* ----------- NAV WRAPPER (Container Query Enabled) ----------- */}
      <nav
        className="
          bg-neutral-900 border-b border-gray-800 text-gray-200
          px-4 py-2.5 flex items-center justify-between 
          @container  /* <--- container queries activados */
        "
      >
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Mobile menu button (hidden when container is wide enough) */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setMobileOpen((s) => !s);
              setSearchOpen(false);
            }}
            className="
              p-1 rounded hover:bg-gray-800 transition
              cq-lg:hidden  /* <--- esconder en contenedor ancho */
            "
          >
            {mobileOpen ? <X /> : <MenuIcon />}
          </button>

          <div className="flex flex-row gap-20 items-center">
            {/* Logo */}
            <Link href="/" aria-label="Go to the homepage" className="flex items-center">
              <Image
                src="/logo-mt.png"
                alt="Site logo"
                width={62}
                height={45}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Links (hidden until container is wide enough) */}
            <div className="hidden cq-lg:flex gap-8 text-md font-medium">
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
        </div>

        {/* ----------- Right buttons ----------- */}
        <div className="flex items-center gap-3">
          {/* Mobile search button */}
          <button
            aria-label={searchOpen ? "Close search bar" : "Open search bar"}
            aria-expanded={searchOpen}
            aria-controls="mobile-search-bar"
            onClick={() => {
              setSearchOpen((s) => !s);
              setMobileOpen(false);
            }}
            className="
              p-1 rounded hover:bg-gray-800 transition
              cq-lg:hidden
            "
          >
            <SearchIcon size={26} strokeWidth={2.5} />
          </button>

          {/* Desktop search (visible only when container is wide enough) */}
          <div
            className="
              hidden cq-lg:flex items-center 
              bg-neutral-800 rounded-md px-3 py-1.5 
              w-48 md:w-56 xl:w-64
              focus-within:ring-2 focus-within:ring-orange-400
            "
          >
            <SearchIcon size={20} className="text-gray-400 mr-2" />
            <input
              id="desktop-search"
              type="text"
              placeholder="Search..."
              aria-label="Search content"
              className="bg-transparent text-gray-200 placeholder-neutral-500 focus:outline-none w-full text-sm"
            />
          </div>

          {/* Notifications */}
          <Link
            href="/notifications"
            aria-label="View notifications"
            className="hover:text-orange-400 transition-colors"
          >
            <Bell size={26} strokeWidth={2.5} />
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            aria-label="User profile"
            className="bg-gray-500 text-black rounded-full w-9 h-9 cq-lg:w-10 cq-lg:h-10 flex items-center justify-center hover:opacity-90 transition"
          >
            <UserRound size={22} />
          </Link>
        </div>
      </nav>

      {/* ----------- MOBILE SEARCH BAR (container hides on large) ----------- */}
      <div
        id="mobile-search-bar"
        className={`
          cq-lg:hidden 
          bg-neutral-900 border-b border-gray-800 
          transition-[max-height,opacity,visibility] duration-300 ease-in-out overflow-hidden 
          ${searchOpen ? "max-h-20 opacity-100 visible" : "max-h-0 opacity-0 invisible"}
        `}
        aria-hidden={!searchOpen}
      >
        <div className="flex items-center bg-neutral-800 rounded-full px-3 py-2 mx-4 mt-2 mb-3 focus-within:ring-2 focus-within:ring-orange-400">
          <SearchIcon size={20} className="text-gray-400 mr-2" />
          <input
            id="mobile-search"
            type="text"
            placeholder="Search..."
            aria-label="Search content"
            className="bg-transparent text-gray-200 placeholder-neutral-500 focus:outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* ----------- MOBILE MENU DROPDOWN ----------- */}
      <div
        id="mobile-menu"
        className={`
          cq-lg:hidden bg-neutral-900 border-b border-gray-800 
          transition-[max-height,opacity,visibility] duration-300 ease-in-out 
          ${mobileOpen ? "max-h-60 opacity-100 visible" : "max-h-0 opacity-0 invisible"}
        `}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 pt-3 pb-4 flex flex-col gap-3">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium ml-4 hover:text-orange-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ----------- OVERLAY ----------- */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 cq-lg:hidden transition-opacity duration-300"
        />
      )}
    </header>
  );
}
