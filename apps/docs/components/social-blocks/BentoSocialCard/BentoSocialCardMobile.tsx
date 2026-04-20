"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BentoSocialCardMobile() {
  return (
    <div className="w-full flex justify-center items-center py-8 bg-neutral-950 p-4 rounded-3xl">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {/* Profile Info */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 flex flex-col relative overflow-hidden group border border-neutral-800"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/40" />
          
          <div className="relative z-10 flex flex-col items-center text-center gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 relative">
              <Image 
                src="https://avatars.githubusercontent.com/u/10433246?v=4" // Placeholder
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Mauricio Tognoli</h2>
              <p className="text-primary font-medium text-sm mt-1">Frontend Developer</p>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mt-2">
              Crafting modern web experiences with React, Next.js, and a touch of magic.
            </p>
          </div>
        </motion.div>

        {/* Grid for social icons */}
        <div className="grid grid-cols-2 gap-4">
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/mauricio-tognoli" target="_blank" className="col-span-2">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#0077b5] rounded-3xl p-5 flex items-center justify-between group shadow-[0_0_30px_rgba(0,119,181,0.2)] relative overflow-hidden"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                  <Linkedin size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-blue-100 text-xs font-medium mb-0.5">Let's connect</p>
                  <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                </div>
              </div>
              <ArrowUpRight size={24} className="text-white relative z-10 opacity-70" />
            </motion.div>
          </Link>

          {/* Github */}
          <Link href="https://github.com/MauricioTognoli" target="_blank">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#18181b] rounded-3xl p-5 flex flex-col justify-between items-center gap-3 border border-neutral-800"
            >
              <Github size={36} className="text-white" />
              <div className="text-center">
                <span className="text-neutral-400 text-xs font-medium block">Follow on</span>
                <h3 className="text-lg font-bold text-white">GitHub</h3>
              </div>
            </motion.div>
          </Link>

          {/* Twitter */}
          <Link href="#" target="_blank">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-black rounded-3xl p-5 flex flex-col justify-between items-center gap-3 border border-neutral-800"
            >
              <Twitter size={36} className="text-white" />
              <div className="text-center">
                <span className="text-neutral-400 text-xs font-medium block">Follow on</span>
                <h3 className="text-lg font-bold text-white">Twitter</h3>
              </div>
            </motion.div>
          </Link>

          {/* Instagram */}
          <Link href="#" className="col-span-2">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-5 flex items-center justify-between group overflow-hidden relative"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm shadow-xl">
                  <Instagram size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Instagram</h3>
                </div>
              </div>
              <div className="relative z-10 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Contact */}
          <Link href="mailto:contact@example.com" className="col-span-2">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="w-full bg-neutral-800 rounded-3xl p-4 flex items-center justify-center gap-3 border border-neutral-700 text-center"
            >
              <Mail size={24} className="text-white" />
              <span className="text-white font-bold text-lg">Hire Me</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
