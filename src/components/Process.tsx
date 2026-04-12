"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Briefing and Strategy Alignment",
    description: "Understanding your product, audience, and business goals",
  },
  {
    title: "Content Planning and Research",
    description: "Analyzing trends, competitors, and defining content pillars",
  },
  {
    title: "Creative Concept and Direction",
    description: "Developing a clear content style and visual direction",
  },
  {
    title: "Editing and Post-Production",
    description: "Fast-paced edits with hooks, captions, and retention-focused visuals",
  },
  {
    title: "Content Publishing",
    description: "Scheduling and publishing content across TikTok, Reels, and Shorts at optimal times, publishing with a specific device to reach target audience",
  },
  {
    title: "Ongoing Content Creation and Optimization",
    description: "Consistent output with performance refinement based on data",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-4 bg-[#f8f8f5]">
      <div className="max-w-4xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">How we work</h2>
          <p className="text-lg text-zinc-500">A proven process from first brief to lasting growth.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number bubble — centered on the line */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 text-white text-sm font-bold flex items-center justify-center shadow-md md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                  {index + 1}
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 bg-white border border-zinc-200/70 rounded-2xl px-7 py-6 shadow-sm md:w-[44%] md:flex-none ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
