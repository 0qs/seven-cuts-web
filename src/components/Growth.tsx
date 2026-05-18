"use client";

import { motion } from "framer-motion";

const BARS = [
  { label: "Month 1", height: 28, gradient: false },
  { label: "Month 2", height: 52, gradient: false },
  { label: "Month 3", height: 90, gradient: true },
  { label: "Month 4", height: 128, gradient: true },
];

const METRICS = [
  { value: "10K+", label: "New Fans/Month" },
  { value: "98%", label: "Real Engagement" },
  { value: "5x", label: "ROI Average" },
];

export default function Growth() {
  return (
    <section className="pt-12 pb-24 px-6 md:px-12 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-5">
              Explosive Growth
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Get More Appointments With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Explosive Marketing
              </span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              No bots. No fake followers. Just <strong className="text-white font-semibold">real, organic growth</strong> that brings genuine fans who{" "}
              <em>actually want</em> to see your content. As a specialized short form video agency, we use targeted strategies to attract the right audience, people who engage, tip, and subscribe month after month.
            </p>
          </motion.div>

          {/* Right — growth card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#111] border border-white/8 rounded-2xl p-8"
          >
            <p className="text-sm text-zinc-500 mb-2">Average Creator Growth</p>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 leading-none mb-1">
              +340%
            </p>
            <p className="text-sm text-zinc-500 mb-8">in first 90 days</p>

            {/* Bar chart */}
            <div className="flex items-end gap-3 mb-3" style={{ height: 128 }}>
              {BARS.map((bar, i) => (
                <div key={bar.label} className="flex-1 flex flex-col items-center justify-end gap-1.5">
                  <motion.div
                    className={`w-full rounded-t-lg ${bar.gradient
                      ? "bg-gradient-to-t from-indigo-600 to-purple-500"
                      : "bg-zinc-700"
                      }`}
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mb-2">
              {BARS.map((bar) => (
                <div key={bar.label} className="flex-1 text-center">
                  <span className="text-[10px] text-zinc-500">{bar.label}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/8 pt-6 mt-2 grid grid-cols-3 gap-4">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="text-center"
                >
                  <p className="text-xl font-bold text-white">{m.value}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
