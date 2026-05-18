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
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">About Us</button>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Portfolio</button>
          <button onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Workflow</button>
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

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-8 text-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02] text-balance">
            Visual stories that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              captivate.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            The premier short form video agency driving organic growth and viral success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
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
      </div>
    </section>
  );
}
