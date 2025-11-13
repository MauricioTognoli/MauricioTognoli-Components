"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  Moon,
  Sun,
  ChevronDown,
  Menu,
  X,
  Languages,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { layoutData } from "@/data/layoutData";
import { useThemeLang } from "@/context/ThemeLangContext";

export const Navbar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useThemeLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { logo, navLinks, dropdown, socialLinks } = layoutData;
  const links = navLinks[language];
  const drop = dropdown[language];

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="h-4 w-4" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 md:grid md:grid-cols-3 md:items-center flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Links desktop (centro) */}
        <nav className="hidden md:flex justify-center items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "hover:bg-accent hover:text-primary dark:hover:bg-input/50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu.Root onOpenChange={(open) => setIsDropdownOpen(open)}>
            <DropdownMenu.Trigger asChild>
              <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50 transition-all">
                {drop.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="backdrop-blur rounded-md shadow-md p-2 mt-1 min-w-[150px] z-50"
                sideOffset={5}
              >
                {drop.items.map((item) => (
                  <DropdownMenu.Item asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-2 py-1 text-center rounded transition-colors ${
                        pathname === item.href
                          ? "text-primary font-bold"
                          : "hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>

        {/* Botones redes + tema + idioma (derecha) */}
        <div className="hidden md:flex justify-end items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent hover:text-primary"
              onClick={() => window.open(link.url, "_blank")}
            >
              {getSocialIcon(link.icon)}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="p-2 hover:text-primary bg-transparent"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="p-2 hover:text-primary bg-transparent"
            onClick={toggleLanguage}
            title={
              language === "es" ? "Switch to English" : "Cambiar a Español"
            }
          >
            <Languages className="h-4 w-4" />
            <span className="ml-1 text-xs">{language.toUpperCase()}</span>
          </Button>
        </div>

        {/* Botón menú hamburguesa mobile */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 text-foreground focus:outline-none"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileDropdownOpen(false);
          }}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="backdrop-blur border-t border-border/40 py-4 px-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-sm font-medium transition-colors ${
                pathname === link.href ? "text-primary" : "hover:text-primary"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown mobile */}
          <div>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors"
            >
              {drop.label}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ml-3 mt-2 flex flex-col gap-2 ${
                mobileDropdownOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {drop.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Redes sociales + botones */}
          <div className="flex gap-3 mt-3">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="sm"
                className="bg-transparent flex-1"
                onClick={() => window.open(link.url, "_blank")}
              >
                {getSocialIcon(link.icon)}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="p-2 flex-1"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="p-2 flex-1"
              onClick={toggleLanguage}
            >
              <Languages className="h-4 w-4" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
