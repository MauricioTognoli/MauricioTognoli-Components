"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import type { SocialGridProps } from "./types";

export function SocialGridDesktop({ profile, links, className }: SocialGridProps) {
  const githubHref = links.github ?? "#";
  const linkedinHref = links.linkedin ?? "#";
  const twitterHref = links.twitter ?? "#";
  const instagramHref = links.instagram ?? "#";
  const emailHref = links.email ? `mailto:${links.email}` : "#";

  return (
    <section
      aria-label="Social links"
      className={`w-full flex justify-center items-center py-10 p-6 rounded-3xl${className ? ` ${className}` : ""}`}
    >
      <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-4xl w-full h-[500px]">

        {/* Profile Info – 2 cols × 2 rows */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="col-span-2 row-span-2 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-neutral-800"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-violet-500/40"
          />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-violet-500/50 flex-shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.avatarAlt ?? profile.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {profile.name}
              </h2>
              <p className="text-violet-400 font-medium">{profile.role}</p>
            </div>
          </div>
          <div className="relative z-10 mt-6">
            <p className="text-neutral-300 text-lg leading-relaxed">{profile.bio}</p>
          </div>
        </motion.div>

        {/* GitHub – 1 col × 1 row */}
        <a
          href={githubHref}
          target={links.github ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="col-span-1 row-span-1"
        >
          <motion.div
            whileHover={{ scale: 0.95, rotate: -2 }}
            className="w-full h-full bg-[#18181b] rounded-3xl p-6 flex flex-col justify-between group border border-neutral-800 hover:border-neutral-600 transition-colors relative overflow-hidden"
          >
            <div className="flex justify-between items-start text-white relative z-10">
              <Github size={32} aria-hidden="true" />
              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300"
              />
            </div>
            <div className="relative z-10">
              <span className="text-neutral-400 text-sm font-medium">Follow on</span>
              <h3 className="text-xl font-bold text-white">GitHub</h3>
            </div>
            <Github
              size={120}
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 text-neutral-800 opacity-50 group-hover:text-neutral-700 transition-colors duration-500"
            />
          </motion.div>
        </a>

        {/* LinkedIn – 1 col × 2 rows */}
        <a
          href={linkedinHref}
          target={links.linkedin ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="col-span-1 row-span-2"
        >
          <motion.div
            whileHover={{ scale: 0.95, y: -4 }}
            className="w-full h-full bg-[#0077b5] rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden shadow-[0_0_40px_rgba(0,119,181,0.3)] hover:shadow-[0_0_60px_rgba(0,119,181,0.5)] transition-shadow"
          >
            <div className="flex justify-between items-start text-white relative z-10">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Linkedin size={36} aria-hidden="true" />
              </div>
              <ArrowUpRight
                size={24}
                aria-hidden="true"
                className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300"
              />
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-blue-100 text-sm font-medium mb-1">Let&apos;s connect</p>
              <h3 className="text-2xl font-bold text-white">LinkedIn</h3>
            </div>
          </motion.div>
        </a>

        {/* Twitter – 1 col × 1 row */}
        <a
          href={twitterHref}
          target={links.twitter ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label="Twitter / X profile"
          className="col-span-1 row-span-1"
        >
          <motion.div
            whileHover={{ scale: 0.95, rotate: 2 }}
            className="w-full h-full bg-black rounded-3xl p-6 flex flex-col justify-between group border border-neutral-800 hover:border-neutral-600 transition-colors"
          >
            <div className="flex justify-between items-start text-white">
              <Twitter size={32} aria-hidden="true" />
              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300"
              />
            </div>
            <div>
              <span className="text-neutral-400 text-sm font-medium">Follow on</span>
              <h3 className="text-xl font-bold text-white">Twitter</h3>
            </div>
          </motion.div>
        </a>

        {/* Instagram – 2 cols × 1 row */}
        <a
          href={instagramHref}
          target={links.instagram ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="col-span-2 row-span-1"
        >
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-6 flex items-center justify-between group overflow-hidden relative"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"
            />
            <div className="relative z-10 flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm shadow-xl">
                <Instagram size={40} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Instagram</h3>
                <p className="text-white/80 font-medium">Behind the scenes &amp; lifestyle</p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="relative z-10 h-12 w-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors"
            >
              <ArrowUpRight size={24} className="text-white" />
            </div>
          </motion.div>
        </a>

        {/* Email – 1 col × 1 row */}
        <a
          href={emailHref}
          aria-label="Send me an email"
          className="col-span-1 row-span-1"
        >
          <motion.div
            whileHover={{ scale: 0.95 }}
            className="w-full h-full bg-neutral-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center group border border-neutral-700 hover:bg-neutral-700 transition-colors"
          >
            <Mail
              size={32}
              aria-hidden="true"
              className="text-white mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-white font-bold">Hire Me</span>
          </motion.div>
        </a>

      </div>
    </section>
  );
}
