"use client";

import { motion } from "framer-motion";
import { Check, Minus, ArrowRight, Sparkles } from "lucide-react";

type PlanKey = "starter" | "growth" | "custom";

const PLANS: {
  key: PlanKey;
  name: string;
  price: string;
  subtitle: string;
  highlight: boolean;
  custom: boolean;
  badge?: string;
  cta: string;
}[] = [
  {
    key: "starter",
    name: "Starter",
    price: "$1,350",
    subtitle: "For getting started",
    highlight: false,
    custom: false,
    cta: "Get started",
  },
  {
    key: "growth",
    name: "Growth",
    price: "$1,800",
    subtitle: "Explosive Marketing",
    highlight: true,
    custom: false,
    badge: "⭐ Best Value",
    cta: "Get started",
  },
  {
    key: "custom",
    name: "Custom",
    price: "Let's talk",
    subtitle: "Tailored to you",
    highlight: false,
    custom: true,
    cta: "Contact us",
  },
];

// A feature row: quantity rows show a value per plan; the rest are yes/no.
const ROWS: {
  label: string;
  starter: boolean | string;
  growth: boolean | string;
  custom: boolean | string;
}[] = [
  { label: "content pieces / month", starter: "30", growth: "46", custom: "Flexible" },
  { label: "", starter: "1 post / day", growth: "2-3 posts / day", custom: "Flexible posting" },
  { label: "talking-head reels", starter: "7", growth: "10", custom: "Flexible" },
  { label: "info text reels", starter: "18", growth: "30", custom: "Flexible" },
  { label: "carousel posts", starter: "5", growth: "6", custom: "Flexible" },
  { label: "Content calendar", starter: true, growth: true, custom: true },
  { label: "Script writing", starter: true, growth: true, custom: true },
  { label: "Fine-tuned editing", starter: true, growth: true, custom: true },
  { label: "Publishing for target region & niche", starter: false, growth: true, custom: true },
  { label: "Dedicated iPhone for publishing", starter: false, growth: true, custom: true },
  { label: "Growth strategy", starter: false, growth: true, custom: true },
  { label: "24/7 marketing consulting", starter: false, growth: true, custom: true },
];

// Custom plan gets a descriptive pitch instead of the itemized breakdown.
const CUSTOM_FEATURES = [
  "Services tailored to your exact requirements",
  "Flexible deliverables on request",
  "Customized strategy & execution",
  "Scalable resources based on your needs",
];

function planFeatures(key: PlanKey) {
  if (key === "custom") {
    return CUSTOM_FEATURES.map((text) => ({ included: true, text }));
  }
  return ROWS.map((row) => {
    const value = row[key];
    if (typeof value === "string") {
      return { included: true, text: `${value} ${row.label}` };
    }
    return { included: value, text: row.label };
  });
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Find the Plan That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              Fits You Best.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-4 items-stretch">
          {PLANS.map((plan, index) => {
            const features = planFeatures(plan.key);
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col gap-7 ${plan.highlight
                    ? "bg-white text-zinc-900 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                    : plan.custom
                      ? "bg-[#111] border border-white/8 overflow-hidden"
                      : "bg-[#111] border border-white/8"
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white text-xs font-semibold tracking-wide shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {plan.custom && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-orange-400/50 via-purple-500/50 to-transparent" />
                )}

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {plan.custom && <Sparkles className="w-3.5 h-3.5 text-orange-400" />}
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
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
                  <p className="text-sm text-zinc-500">
                    {plan.subtitle}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-zinc-900" : plan.custom ? "text-purple-400" : "text-orange-400"
                          }`} />
                      ) : (
                        <Minus className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-zinc-300" : "text-zinc-700"
                          }`} />
                      )}
                      <span className={`text-sm leading-snug ${!feature.included
                          ? plan.highlight ? "text-zinc-400 line-through" : "text-zinc-600 line-through"
                          : plan.highlight ? "text-zinc-700" : "text-zinc-400"
                        }`}>
                        {feature.text}
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
