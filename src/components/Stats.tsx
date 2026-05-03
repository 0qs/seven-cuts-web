"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "1M+", label: "Views Generated" },
  { value: "30+", label: "Videos / Month" },
  { value: "3", label: "Platforms Covered" },
  { value: "24/7", label: "Marketing Support" },
];

export default function Stats() {
  return (
    <section className="border-t border-white/5 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-zinc-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
