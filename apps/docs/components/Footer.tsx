"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useThemeLang } from "@/context/ThemeLangContext";

export default function Footer() {
  const { language } = useThemeLang();

  return (
    <footer className="border-t border-border/40 bg-muted/50 py-12 mt-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
        {/* Texto principal traducido */}
        <p className="text-muted-foreground text-sm sm:text-base">
          {language === "es"
            ? "© 2025 Mauricio Tognoli — Todos los derechos reservados."
            : "© 2025 Mauricio Tognoli — All rights reserved."}
        </p>

        {/* Iconos sociales */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/MauricioTognoli"
            target="_blank"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mauricio-tognoli"
            target="_blank"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>

          <Link
            href="mailto:tognolimauricio@gmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
