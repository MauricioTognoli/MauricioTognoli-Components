import { Sparkles, Code2, Cpu, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface FeaturedComponent {
  title: string;
  image: string;
  href: string;
  description: string;
}

export interface SiteContent {
  title: string;
  subtitle: string;
  description: string;
  aboutTitle: string;
  aboutText: string;
  techStack: string;
  featuredComponentsTitle: string;
  featuredComponents: FeaturedComponent[];
  processTitle: string;
  processSteps: ProcessStep[];
  ctaTitle: string;
  ctaButton: string;
  technologies: string[];
}

export const siteContent: Record<string, SiteContent> = {
  es: {
    title: "Componentes de Mauricio Tognoli",
    subtitle: "Una colección curada de componentes React modernos",
    description:
      "Componentes diseñados para crear interfaces pulidas y experiencias web fluidas. Cada detalle busca aportar ese toque mágico que transforma el diseño en interacción.",
    aboutTitle: "Sobre mí",
    aboutText:
  "Soy un desarrollador frontend enfocado en crear experiencias digitales atractivas y eficientes. Me especializo en React, Next.js y Tailwind CSS, combinando diseño funcional con código limpio. Disfruto transformar ideas en interfaces intuitivas que conectan con los usuarios y reflejan atención al detalle."
,
    techStack: "Stack Tecnológico",
    featuredComponentsTitle: "Componentes Destacados",
    featuredComponents: [
      {
        title: "Navbar Moderna",
        image: "/navbar-preview.png",
        href: "/navbars",
        description:
          "Navegación adaptable con menús desplegables, íconos y cambio de tema.",
      },
      {
        title: "Dashboard Card",
        image: "/navbar-preview.png",
        href: "#",
        description:
          "Diseños de tarjetas personalizables para dashboards y paneles de usuario.",
      },
      {
        title: "Botones UI",
        image: "/navbar-preview.png",
        href: "#",
        description:
          "Botones animados con diferentes variantes y estilos accesibles.",
      },
    ],
    processTitle: "Mi Proceso de Desarrollo",
    processSteps: [
      {
        icon: Sparkles,
        title: "Diseño UI",
        text: "Empiezo con una visión clara del diseño, manteniendo equilibrio entre estética y usabilidad.",
      },
      {
        icon: Code2,
        title: "Desarrollo",
        text: "Escribo código limpio y modular usando las mejores prácticas en React y TypeScript.",
      },
      {
        icon: Cpu,
        title: "Optimización",
        text: "Cuido el rendimiento y la accesibilidad en cada componente, priorizando la experiencia del usuario.",
      },
      {
        icon: Rocket,
        title: "Entrega",
        text: "Creo experiencias que se ven y se sienten profesionales, con animaciones suaves y consistentes.",
      },
    ],
    ctaTitle: "¿Querés colaborar?",
    ctaButton: "Construyamos algo juntos",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Figma",
    ],
  },

  en: {
    title: "Mauricio Tognoli Components",
    subtitle: "A curated collection of modern React components",
    description:
      "Components crafted to build polished interfaces and seamless web experiences. Every detail adds a touch of magic that turns design into interaction.",
    aboutTitle: "About Me",
    aboutText:
      "I’m a frontend developer specialized in React, Next.js, and Tailwind CSS. I’m passionate about clean, functional UI design.",
    techStack: "Tech Stack",
    featuredComponentsTitle: "Featured Components",
    featuredComponents: [
      {
        title: "Modern Navbar",
        image: "/navbar-preview.png",
        href: "/navbars",
        description:
          "Responsive navigation with dropdown menus, icons, and theme switcher.",
      },
      {
        title: "Dashboard Card",
        image: "/navbar-preview.png",
        href: "#",
        description:
          "Customizable card layouts for dashboards and user panels.",
      },
      {
        title: "UI Buttons",
        image: "/navbar-preview.png",
        href: "#",
        description:
          "Animated buttons with accessible, elegant variants and styles.",
      },
    ],
    processTitle: "My Development Process",
    processSteps: [
      {
        icon: Sparkles,
        title: "UI Design",
        text: "I start with a clear vision of the design, balancing aesthetics and usability.",
      },
      {
        icon: Code2,
        title: "Development",
        text: "I write clean, modular code following React and TypeScript best practices.",
      },
      {
        icon: Cpu,
        title: "Optimization",
        text: "I focus on performance and accessibility in every component, prioritizing user experience.",
      },
      {
        icon: Rocket,
        title: "Delivery",
        text: "I create professional, smooth, and consistent experiences with elegant animations.",
      },
    ],
    ctaTitle: "Want to collaborate?",
    ctaButton: "Let's build something together",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Figma",
    ],
  },
};
