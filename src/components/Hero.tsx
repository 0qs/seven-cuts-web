"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16 overflow-hidden text-center">
      {/* Nav Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/logo.png"
          alt="Seven Cuts Media"
          width={140}
          height={90}
          className="object-contain"
          priority
        />
      </div>
      {/* Soft colorful glows */}
      <div className="absolute inset-0 pointer-events-none -translate-y-1/4">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/20 blur-[120px] rounded-full mix-blend-multiply opacity-70"></div>
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400/20 blur-[100px] rounded-full mix-blend-multiply opacity-50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 text-balance">
          Visual stories that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">captivate.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto text-balance">
          Sevencuts crafts premium digital experiences and sales-driven media that elevate your brand to the next level.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all bg-zinc-900 rounded-full hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/20 overflow-hidden">
            <span className="absolute inset-0 w-full h-full border border-white/20 rounded-full pointer-events-none"></span>
            Ready to collaborate?
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="px-8 py-4 font-medium text-zinc-700 transition-colors bg-white/50 backdrop-blur-md border border-zinc-200 rounded-full hover:bg-white shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]">
            View our work
          </button>
        </div>
      </motion.div>
    </section>
  );
}
