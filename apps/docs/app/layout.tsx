import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/context/Providers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MT Components | React + Tailwind UI Library",
  description:
    "Colección de componentes y experiencias UI creados por Mauricio Tognoli con React y Tailwind CSS. Diseñados para interfaces modernas, accesibles y escalables.",
  keywords: [
    "React components",
    "Tailwind CSS",
    "UI Library",
    "Mauricio Tognoli",
    "Next.js",
    "Frontend",
    "UI/UX",
  ],
  authors: [
    { name: "Mauricio Tognoli", url: "https://mt-components.vercel.app" },
  ],
  creator: "Mauricio Tognoli",
  publisher: "Mauricio Tognoli",
  applicationName: "MT Components",
  openGraph: {
    title: "MT Components | React + Tailwind UI Library",
    description:
      "Componentes reutilizables y pulidos creados con React y Tailwind CSS por Mauricio Tognoli.",
    url: "https://mt-components.vercel.app",
    siteName: "MT Components",
    images: [
      {
        url: "/banner-mt-components.svg",
        width: 1200,
        height: 630,
        alt: "MT Components Banner",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MT Components | React + Tailwind UI Library",
    description:
      "Explora componentes React diseñados con detalle y consistencia. Creados por Mauricio Tognoli.",
    images: ["/banner-mt-components.svg"],
    creator: "@mauriciotognoli",
  },
  metadataBase: new URL("https://mt-components.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF914D",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
