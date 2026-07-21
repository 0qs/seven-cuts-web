"use client";

import { motion } from "framer-motion";
import { Check, Minus, ArrowRight } from "lucide-react";

type Cell = boolean | string;

const PLANS = [
  { key: "starter", name: "Starter", price: "$1,350", badge: null, cta: "Get started" },
  { key: "growth", name: "Growth", price: "$1,800", badge: "⭐ Best Value", cta: "Get started" },
  { key: "custom", name: "Custom", price: "Let's talk", badge: null, cta: "Contact us" },
] as const;

const ROWS: { label: string; starter: Cell; growth: Cell; custom: Cell }[] = [
  { label: "Content Pieces", starter: "30 / month", growth: "46 / month", custom: "Flexible" },
  { label: "Talking-Head Reels", starter: "7", growth: "10", custom: "Flexible" },
  { label: "Info Text Reels", starter: "18", growth: "30", custom: "Flexible" },
  { label: "Carousel Posts", starter: "5", growth: "6", custom: "Flexible" },
  { label: "Content Calendar", starter: true, growth: true, custom: true },
  { label: "Script Writing", starter: true, growth: true, custom: true },
  { label: "Fine-Tuned Editing", starter: true, growth: true, custom: true },
  { label: "Publishing for Target Region & Niche", starter: false, growth: true, custom: true },
  { label: "Dedicated iPhone for Publishing", starter: false, growth: true, custom: true },
  { label: "Growth Strategy", starter: false, growth: true, custom: true },
  { label: "24/7 Marketing Consulting", starter: false, growth: true, custom: true },
];

function Cell({ value }: { value: Cell }) {
  if (value === true) {
    return <Check className="w-4 h-4 text-orange-400 mx-auto" />;
  }
  if (value === false) {
    return <Minus className="w-4 h-4 mx-auto text-zinc-600" />;
  }
  return <span className="text-sm font-medium text-white">{value}</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="pt-12 pb-24 px-6 md:px-12 bg-[#080808] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Pricing</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Simple pricing.</h2>
            <p className="text-zinc-500 max-w-sm">No hidden fees. Pick the plan that fits your growth stage.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-white/8 bg-[#111]"
        >
          <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[34%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="align-bottom p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Items</p>
                </th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.key}
                    className={`align-top p-5 sm:p-7 border-l border-white/8 ${plan.key === "growth" ? "bg-white/[0.04]" : ""
                      }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{plan.name}</p>
                      {plan.badge && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white text-[10px] font-semibold tracking-wide shadow-lg whitespace-nowrap">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-end gap-1 mb-5">
                      {plan.key === "custom" ? (
                        <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                          {plan.price}
                        </span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold tracking-tight text-white">{plan.price}</span>
                          <span className="mb-0.5 text-sm text-zinc-500">/mo</span>
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${plan.key === "growth"
                          ? "bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:opacity-90"
                          : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                        }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "" : "bg-white/[0.015]"}>
                  <td className="p-4 sm:p-5 text-sm text-zinc-400 border-t border-white/8">{row.label}</td>
                  <td className="p-4 sm:p-5 text-center border-t border-l border-white/8">
                    <Cell value={row.starter} />
                  </td>
                  <td className="p-4 sm:p-5 text-center border-t border-l border-white/8 bg-white/[0.04]">
                    <Cell value={row.growth} />
                  </td>
                  <td className="p-4 sm:p-5 text-center border-t border-l border-white/8">
                    <Cell value={row.custom} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
