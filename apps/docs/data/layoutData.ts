export interface NavLink {
  label: string;
  href: string;
}

export interface DropdownLink extends NavLink {}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin";
}

export interface LayoutData {
  logo: {
    src: string;
    alt: string;
  };
  navLinks: {
    [key: string]: NavLink[];
  };
  dropdown: {
    [key: string]: {
      label: string;
      items: DropdownLink[];
    };
  };
  socialLinks: SocialLink[];
}

export const layoutData: LayoutData = {
  logo: {
    src: "/logo-mt.png",
    alt: "Logo Mauricio Tognoli",
  },
  navLinks: {
    es: [
      { label: "Inicio", href: "/" },
      { label: "Sobre mí", href: "/about" },
    ],
    en: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ],
  },
  dropdown: {
    es: {
      label: "Componentes",
      items: [
        { label: "Navbar", href: "/navbars" },
      ],
    },
    en: {
      label: "Components",
      items: [
        { label: "Navbar", href: "/navbars" },
      ],
    },
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/MauricioTognoli",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mauricio-tognoli",
      icon: "linkedin",
    },
  ],
};
