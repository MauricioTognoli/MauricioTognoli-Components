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

export function SocialGridMobile({ profile, links, className }: SocialGridProps) {
  const githubHref = links.github ?? "#";
  const linkedinHref = links.linkedin ?? "#";
  const twitterHref = links.twitter ?? "#";
  const instagramHref = links.instagram ?? "#";
  const emailHref = links.email ? `mailto:${links.email}` : "#";

  return (
    <section
      aria-label="Social links"
      className={`w-full flex justify-center items-center py-8 p-4 rounded-3xl${className ? ` ${className}` : ""}`}
    >
      <div className="flex flex-col gap-4 w-full max-w-sm">

        {/* Profile Info */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 flex flex-col relative overflow-hidden group border border-neutral-800">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-violet-500/40"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-violet-500/50 flex-shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.avatarAlt ?? profile.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{profile.name}</h2>
              <p className="text-violet-400 font-medium text-sm mt-1">{profile.role}</p>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">{profile.bio}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          {/* LinkedIn – full width */}
          <a
            href={linkedinHref}
            target={links.linkedin ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="col-span-2"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#0077b5] rounded-3xl p-5 flex items-center justify-between group shadow-[0_0_30px_rgba(0,119,181,0.2)] relative overflow-hidden"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                  <Linkedin size={28} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-blue-100 text-xs font-medium mb-0.5">Let&apos;s connect</p>
                  <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                </div>
              </div>
              <ArrowUpRight
                size={24}
                aria-hidden="true"
                className="text-white relative z-10 opacity-70"
              />
            </motion.div>
          </a>

          {/* GitHub */}
          <a
            href={githubHref}
            target={links.github ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#18181b] rounded-3xl p-5 flex flex-col justify-between items-center gap-3 border border-neutral-800 h-full"
            >
              <Github size={36} className="text-white" aria-hidden="true" />
              <div className="text-center">
                <span className="text-neutral-400 text-xs font-medium block">Follow on</span>
                <h3 className="text-lg font-bold text-white">GitHub</h3>
              </div>
            </motion.div>
          </a>

          {/* Twitter */}
          <a
            href={twitterHref}
            target={links.twitter ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label="Twitter / X profile"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-black rounded-3xl p-5 flex flex-col justify-between items-center gap-3 border border-neutral-800 h-full"
            >
              <Twitter size={36} className="text-white" aria-hidden="true" />
              <div className="text-center">
                <span className="text-neutral-400 text-xs font-medium block">Follow on</span>
                <h3 className="text-lg font-bold text-white">Twitter</h3>
              </div>
            </motion.div>
          </a>

          {/* Instagram – full width */}
          <a
            href={instagramHref}
            target={links.instagram ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="col-span-2"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-5 flex items-center justify-between group overflow-hidden relative"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-xl">
                  <Instagram size={28} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">Instagram</h3>
              </div>
              <div
                aria-hidden="true"
                className="relative z-10 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </motion.div>
          </a>

          {/* Email – full width */}
          <a
            href={emailHref}
            aria-label="Send me an email"
            className="col-span-2"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-neutral-800 rounded-3xl p-4 flex items-center justify-center gap-3 border border-neutral-700"
            >
              <Mail size={24} className="text-white" aria-hidden="true" />
              <span className="text-white font-bold text-lg">Hire Me</span>
            </motion.div>
          </a>

        </div>
      </div>
    </section>
  );
}
