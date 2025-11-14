export const navbarsData = {
  en: {
    title: "Navbars",
    description:
      "Explore different navbar styles built with React, Tailwind CSS, and shadcn/ui.",
    navbar1: "Simple Navbar",
    navbar2: "Centered Navbar",
    navbar3: "Navbar with Search",
    showcase1: "Navbar with Search",
    showcase2: "Navbar 2",
    categories: {
      basic: "Basic",
      layout: "Layout",
      feature: "Feature",
    },
  },
  es: {
    title: "Navbars",
    description:
      "Explora diferentes estilos de barras de navegación creadas con React, Tailwind CSS y shadcn/ui.",
    navbar1: "Barra de navegación simple",
    navbar2: "Barra de navegación centrada",
    navbar3: "Barra con buscador",
    showcase1: "Navbar con buscador",
    showcase2: "Navbar 2",
    categories: {
      basic: "Básico",
      layout: "Diseño",
      feature: "Funcionalidad",
    },
  },
};

export type NavbarLangKey = keyof typeof navbarsData;
