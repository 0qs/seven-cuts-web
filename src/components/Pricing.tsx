"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const SHARED_FEATURES = [
  "Content calendar",
  "Proven viral video structure",
  "Fine-tuned editing",
  "Publishing for specific target region & niche",
];

const PLANS = [
  {
    name: "Starter",
    price: "$1,000",
    subtitle: "15 videos / month",
    features: SHARED_FEATURES,
    highlight: false,
    custom: false,
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "$1,350",
    subtitle: "Up to 30 videos / month",
    features: [...SHARED_FEATURES, "24/7 marketing consulting"],
    highlight: true,
    custom: false,
    cta: "Get started",
  },
  {
    name: "Custom",
    price: "Let's talk",
    subtitle: "Tailored",
    features: [
      "Services tailored to exact requirements",
      "Flexible deliverables upon request",
      "Customized strategy & execution",
      "Scalable resources based on needs",
    ],
    highlight: false,
    custom: true,
    cta: "Contact us",
  },
];

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

        <div className="grid md:grid-cols-3 gap-4">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-7 ${plan.highlight
                  ? "bg-white text-zinc-900 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                  : plan.custom
                    ? "bg-[#111] border border-white/8 overflow-hidden"
                    : "bg-[#111] border border-white/8"
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white text-xs font-semibold tracking-wide shadow-lg">
                  Most popular
                </div>
              )}

              {plan.custom && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-orange-400/50 via-purple-500/50 to-transparent" />
              )}

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {plan.custom && <Sparkles className="w-3.5 h-3.5 text-orange-400" />}
                  <p className={`text-xs font-semibold uppercase tracking-widest ${plan.highlight ? "text-zinc-500" : "text-zinc-500"}`}>
                    {plan.name}
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <span className={`font-bold tracking-tight leading-none ${plan.custom
                      ? "text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500"
                      : `text-4xl ${plan.highlight ? "text-zinc-900" : "text-white"}`
                    }`}>
                    {plan.price}
                  </span>
                  {!plan.custom && (
                    <span className={`mb-1 text-sm ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>/mo</span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlight ? "text-zinc-500" : "text-zinc-500"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-zinc-900" : plan.custom ? "text-purple-400" : "text-orange-400"
                      }`} />
                    <span className={`text-sm leading-snug ${plan.highlight ? "text-zinc-700" : "text-zinc-400"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`group inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.highlight
                    ? "bg-zinc-900 text-white hover:bg-zinc-800"
                    : plan.custom
                      ? "bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
