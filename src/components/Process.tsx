"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Briefing & Strategy",
    description: "Understanding your product, audience, and business goals to align on direction.",
  },
  {
    title: "Content Planning",
    description: "Analyzing trends, competitors, and defining content pillars that resonate.",
  },
  {
    title: "Creative Direction",
    description: "Developing a clear content style and visual identity for your brand.",
  },
  {
    title: "Editing & Post-Production",
    description: "Fast-paced edits with hooks, captions, and retention-focused visuals.",
  },
  {
    title: "Publishing",
    description: "Scheduling across TikTok, Reels, and Shorts at optimal times for your target audience.",
  },
  {
    title: "Optimization",
    description: "Consistent output with performance refinement based on real data.",
  },
];

export default function Process() {
  return (
    <section id="process" className="pt-12 pb-24 px-6 md:px-12 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Workflow</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our workflow.</h2>
            <p className="text-zinc-500 max-w-sm">From first brief to lasting growth — every step counts.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors duration-300 group"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-purple-500 leading-none flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
