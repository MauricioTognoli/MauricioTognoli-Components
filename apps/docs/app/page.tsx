"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MailIcon } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { useThemeLang } from "@/context/ThemeLangContext";

export default function HomePage() {
  const { language } = useThemeLang();
  const t = siteContent[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center flex flex-col justify-center h-screen ">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo-mt.png"
            alt="Mauricio Tognoli Logo"
            width={150}
            height={150}
            className="mx-auto mb-6 w-32 sm:w-40 md:w-48"
          />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Mauricio<span className="text-primary">Tognoli</span> components
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 px-2">
            {t.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {t.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-16 px-4 flex items-center min-h-[80vh]">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
            {t.featuredComponentsTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.featuredComponents.map((component, index) => {
              const isComingSoon = component.href === "#";

              const CardContent = (
                <Card
                  key={index}
                  className={`relative p-4 bg-card/50 backdrop-blur hover:scale-[1.02] transition-all overflow-hidden ${
                    isComingSoon
                      ? "cursor-not-allowed opacity-70"
                      : "cursor-pointer"
                  }`}
                >
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={component.image}
                      alt={component.title}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        isComingSoon
                          ? "opacity-60 blur-sm"
                          : "opacity-90 hover:opacity-100"
                      }`}
                    />
                    {isComingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <span className="text-primary text-sm sm:text-base font-medium">
                          {language === "es" ? "Próximamente" : "Coming Soon"}
                        </span>
                      </div>
                    )}
                  </div>

                  <h4 className="font-semibold text-lg">{component.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {component.description}
                  </p>
                </Card>
              );

              return isComingSoon ? (
                <div key={index}>{CardContent}</div>
              ) : (
                <Link key={index} href={component.href} className="block">
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-neutral-100 dark:bg-neutral-800 flex items-center min-h-[80vh]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t.aboutTitle}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
            {t.aboutText}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="mailto:tognolimauricio@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              {language === "es" ? "Contacto" : "Contact"}
            </Link>

            <Link
              href="https://portfolio-mauriciotognoli.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              {language === "es" ? "Ver Portfolio" : "View Portfolio"}
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-neutral-100 dark:bg-neutral-800 flex items-center min-h-[80vh]">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
            {t.processTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center bg-card/50 backdrop-blur"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">{t.ctaTitle}</h3>
          <Link href="mailto:tognolimauricio@gmail.com">
            <Button size="lg" className="rounded-xl">
              <MailIcon className="mr-2" />
              {t.ctaButton}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
