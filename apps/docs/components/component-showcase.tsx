"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Monitor, Smartphone, Github, Mail } from "lucide-react";
import Link from "next/link";
import { useThemeLang } from "@/context/ThemeLangContext";

const translations = {
  es: {
    preview: "Vista previa",
    code: "Código",
    seeCodeTitle: "¿Querés ver el código de este componente?",
    seeCodeText:
      "Explorá el repositorio completo en GitHub para ver cómo está construido este componente y aprender más sobre su estructura.",
    seeOnGithub: "Ver en GitHub",
    email: "tognolimauricio@gmail.com",
  },
  en: {
    preview: "Preview",
    code: "Code",
    seeCodeTitle: "Want to see this component’s code?",
    seeCodeText:
      "Check out the full repository on GitHub to see how this component is built and learn more about its structure.",
    seeOnGithub: "View on GitHub",
    email: "tognolimauricio@gmail.com",
  },
};

interface ComponentShowcaseProps {
  title?: string;
  githubUrl?: string;
  DesktopComponent: React.ReactNode;
  MobileComponent: React.ReactNode;
}

export function ComponentShowcase({
  title,
  githubUrl,
  DesktopComponent,
  MobileComponent,
}: ComponentShowcaseProps) {
  const [showCode, setShowCode] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { language } = useThemeLang();
  const t = translations[language];

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1024; // sm breakpoint
      setIsSmallScreen(isSmall);
      if (isSmall) setIsMobileView(true); // forzamos mobile real
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const viewports = [
    { label: "Desktop", value: false, icon: <Monitor size={20} /> },
    { label: "Mobile/Tablet", value: true, icon: <Smartphone size={20} /> },
  ];

  return (
    <div className="space-y-12">
      {title && (
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">{title}</h2>
          <div className="h-1.5 w-20 mx-auto bg-primary rounded-full" />
        </div>
      )}

      <Card className="relative overflow-hidden border border-border rounded-2xl shadow-lg p-2 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-border bg-background relative">
          {/* MacOS style buttons */}
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full bg-red-500/80"></span>
            <span className="h-4 w-4 rounded-full bg-yellow-500/80"></span>
            <span className="h-4 w-4 rounded-full bg-green-500/80"></span>
          </div>

          {/* Email */}
          <Link
            href={`mailto:${t.email}`}
            className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2 text-sm font-medium text-muted-foreground bg-muted/70 px-4 py-1.5 rounded-full border border-border shadow-sm hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Mail size={18} />
            <span className="tracking-tight">{t.email}</span>
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Viewport buttons (disabled on mobile real) */}
            {!isSmallScreen && (
              <div className="flex items-center gap-2">
                {viewports.map((vp) => (
                  <Button
                    key={vp.label}
                    size="icon"
                    variant={isMobileView === vp.value ? "default" : "ghost"}
                    onClick={() => setIsMobileView(vp.value)}
                    className="h-10 w-10"
                    title={vp.label}
                  >
                    {vp.icon}
                  </Button>
                ))}
              </div>
            )}

            {/* Switch Code/Preview */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Label htmlFor="code-switch" className="text-sm font-medium">{t.preview}</Label>
              <Switch
                id="code-switch"
                checked={showCode}
                onCheckedChange={setShowCode}
              />
              <Label htmlFor="code-switch" className="text-sm font-medium">{t.code}</Label>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[600px] bg-background overflow-hidden rounded-b-2xl">
          <div
            className={`transition-all duration-500 text-gray-200 ease-in-out overflow-hidden flex justify-center bg-card  ${showCode ? "blur-sm pointer-events-none" : ""}`}
            style={{
              width: "100%",
              maxWidth: isMobileView ? "500px" : "1400px", 
              margin: "0 auto",
              padding: isMobileView ? "0" : "2rem",
            }}
          >
            {isMobileView ? MobileComponent : DesktopComponent}
          </div>

          {/* Code overlay */}
          {showCode && (
            <div className="absolute inset-0 backdrop-blur-md bg-background/80 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fadeIn">
              <h3 className="text-2xl font-semibold mb-4">{t.seeCodeTitle}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">{t.seeCodeText}</p>
              <Button
                onClick={() => window.open(githubUrl, "_blank")}
                className="flex items-center gap-2 sm:gap-3 bg-primary hover:bg-primary/80 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
              >
                <Github size={18} />
                {t.seeOnGithub}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
