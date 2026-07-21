"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 overflow-hidden bg-[#080808]">
      <Navbar onHome />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-700/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] sm:leading-[1.02] text-balance">
            We Help You Target the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              Right Region and Niche.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Sevencuts, driving organic growth and viral success through high-retention short form video.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
            <a
              href="#contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Start Growing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              View our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
