// app/context/ThemeLangContext.tsx
"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";
type Language = "en" | "es";

interface ThemeLangContextProps {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const ThemeLangContext = createContext<ThemeLangContextProps | undefined>(undefined);

export const ThemeLangProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("es");
  const [mounted, setMounted] = useState(false); // para evitar "flash" en SSR -> renderizar hasta montar

  useEffect(() => {
    // se ejecuta solo en cliente
    try {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      const storedLang = localStorage.getItem("language") as Language | null;

      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
        const systemTheme: Theme = prefersDark ? "dark" : "light";
        setTheme(systemTheme);
        document.documentElement.classList.toggle("dark", prefersDark);
      }

      if (storedLang) {
        setLanguage(storedLang);
        document.documentElement.lang = storedLang;
      } else {
        const browserLang = navigator.language.startsWith("es") ? "es" : "en";
        setLanguage(browserLang);
        document.documentElement.lang = browserLang;
      }
    } catch (e) {
      // fallback silencioso en entornos donde localStorage no exista
      console.warn("ThemeLangProvider init error:", e);
    } finally {
      setMounted(true);
    }
  }, []);

  // sincronizaciones
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("language", language);
    } catch {}
    document.documentElement.lang = language;
  }, [language, mounted]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);
  const toggleLanguage = useCallback(() => setLanguage((l) => (l === "es" ? "en" : "es")), []);

  // opcional: si aún no se montó, no renderices children para evitar mismatch SSR/CSR
  if (!mounted) return null;

  return (
    <ThemeLangContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeLangContext.Provider>
  );
};

export const useThemeLang = () => {
  const context = useContext(ThemeLangContext);
  if (!context) throw new Error("useThemeLang must be used within a ThemeLangProvider");
  return context;
};
