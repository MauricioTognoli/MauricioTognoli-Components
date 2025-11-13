"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Monitor,
  Laptop,
  Tablet,
  Smartphone,
  Github,
  Lock,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useThemeLang } from "@/context/ThemeLangContext";

const translations = {
  es: {
    preview: "Vista previa",
    code: "Código",
    lockedView: "Vista móvil bloqueada",
    seeCodeTitle: "¿Querés ver el código de este componente?",
    seeCodeText:
      "Explorá el repositorio completo en GitHub para ver cómo está construido este componente y aprender más sobre su estructura.",
    seeOnGithub: "Ver en GitHub",
    email: "tognolimauricio@gmail.com",
  },
  en: {
    preview: "Preview",
    code: "Code",
    lockedView: "Mobile view locked",
    seeCodeTitle: "Want to see this component’s code?",
    seeCodeText:
      "Check out the full repository on GitHub to see how this component is built and learn more about its structure.",
    seeOnGithub: "View on GitHub",
    email: "tognolimauricio@gmail.com",
  },
};

interface ComponentShowcaseProps {
  viewportSize?: string;
  title?: string;
  githubUrl?: string;
  children: React.ReactNode;
}

export function ComponentShowcase({
  viewportSize = "100%",
  title,
  githubUrl = "https://github.com/mauriciotognoli/components",
  children,
}: ComponentShowcaseProps) {
  const [currentViewport, setCurrentViewport] = useState(viewportSize);
  const [showCode, setShowCode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { language } = useThemeLang();
  const t = translations[language];

  const viewports = [
    { label: "Full", value: "100%", icon: <Monitor size={16} /> },
    { label: "Laptop", value: "1024px", icon: <Laptop size={16} /> },
    { label: "Tablet", value: "768px", icon: <Tablet size={16} /> },
    { label: "Mobile", value: "375px", icon: <Smartphone size={16} /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 640;
      setIsMobile(mobile);
      if (mobile) setCurrentViewport("375px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-8">
      {title && (
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
          <div className="h-1 w-16 mx-auto bg-primary rounded-full" />
        </div>
      )}

      <Card className="p-1 mb-10 relative overflow-hidden border border-border shadow-inner rounded-xl">
        {/* Header consola */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-b from-background/90 to-muted relative">
          {/* Botones estilo macOS */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/70"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/70"></span>
            <span className="h-3 w-3 rounded-full bg-green-500/70"></span>
          </div>

          {/* Email */}
          <Link
            href={`mailto:${t.email}`}
            className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 text-sm font-medium text-muted-foreground bg-muted/70 px-4 py-1.5 rounded-full border border-border shadow-sm hover:bg-primary/10 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Mail size={18} />
            <span className="tracking-tight">{t.email}</span>
          </Link>

          {/* Controles */}
          <div className="flex items-center gap-3">
            {/* Controles de viewport */}
            {!isMobile ? (
              <div className="hidden sm:flex items-center gap-1">
                {viewports.map((vp) => (
                  <Button
                    key={vp.value}
                    size="icon"
                    variant={currentViewport === vp.value ? "default" : "ghost"}
                    onClick={() => setCurrentViewport(vp.value)}
                    className="h-8 w-8"
                    title={vp.label}
                  >
                    {vp.icon}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="flex items-center w-min gap-2 text-xs text-muted-foreground">
                <Lock size={25} className="text-primary" />
                <span>{t.lockedView}</span>
              </div>
            )}

            {/* Switch Code/Preview */}
            <div className="flex items-center gap-2">
              <Label htmlFor="code-switch" className="text-xs font-medium">
                {t.preview}
              </Label>
              <Switch
                id="code-switch"
                checked={showCode}
                onCheckedChange={setShowCode}
              />
              <Label htmlFor="code-switch" className="text-xs font-medium">
                {t.code}
              </Label>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 min-h-[400px] bg-background overflow-hidden rounded-b-lg">
          <div
            className={`transition-all duration-500 ease-in-out border border-border rounded-lg overflow-hidden flex justify-center bg-card shadow-inner ${
              showCode ? "blur-sm pointer-events-none" : ""
            }`}
            style={{
              width: "100%",
              maxWidth: isMobile ? "375px" : currentViewport,
              transition: "max-width 0.4s ease-in-out",
            }}
          >
            <div className="w-full">{children}</div>
          </div>

          {/* Overlay del código */}
          {showCode && (
            <div className="absolute inset-0 backdrop-blur-md bg-background/80 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
              <h3 className="text-lg font-semibold mb-3">{t.seeCodeTitle}</h3>
              <p className="text-sm text-muted-foreground mb-5 max-w-sm">
                {t.seeCodeText}
              </p>
              <Button
                onClick={() => window.open(githubUrl, "_blank")}
                className="flex items-center gap-2 bg-primary hover:bg-primary/80"
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
