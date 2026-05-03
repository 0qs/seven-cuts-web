"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-20 overflow-hidden bg-[#080808]">
      {/* Nav */}
      <div className="absolute top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between z-20">
        <Image src="/logo.png" alt="Seven Cuts Media" width={120} height={40} className="object-contain brightness-0 invert" priority />
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Work</button>
          <button onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Process</button>
          <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Pricing</button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-700/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            TikTok · Reels · Shorts
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance">
            Visual stories that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              captivate.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            Get organic growth through short-formed contents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Start Growing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              View our work
            </button>
          </div>
        </motion.div>

        {/* Video #1 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-shrink-0 w-full max-w-[260px] md:max-w-[300px] relative"
        >
          <div className="absolute -inset-8 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <video
              src="/video/VIDEO-2026-04-14-20-36-27.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full block"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white">
                Featured
              </div>
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white/70">
                #1
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
