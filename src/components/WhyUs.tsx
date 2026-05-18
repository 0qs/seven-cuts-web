"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Star, Zap } from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "Targeted Audience",
    description: "We reach real fans actively looking for content like yours",
  },
  {
    icon: TrendingUp,
    title: "High-Traffic Exposure",
    description: "Get featured on platforms with millions of daily visitors",
  },
  {
    icon: Star,
    title: "Proven Growth Strategies",
    description: "Battle-tested methods that consistently deliver results",
  },
  {
    icon: Zap,
    title: "Round-the-Clock Promotion",
    description: "Your content gets pushed 24/7, even while you sleep",
  },
];

const SERVICES = [
  "High-Retention Video Editing",
  "Proven CTA",
  "Content Ideation",
  "Content Planning",
  "Content Distribution",
];

export default function WhyUs() {
  return (
    <section id="about" className="pt-12 pb-24 px-6 md:px-12 bg-[#080808] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Built to grow you.</h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 max-w-2xl"
        >
          <p className="text-zinc-300 text-lg leading-relaxed">
            Sevencuts is a short-form content agency based in Indonesia. Our team brings years of industry expertise in viral content.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            We have managed numerous content creators and businesses, and now we are excited to invite you to join us on our journey.
          </p>
        </motion.div>

        {/* Services tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">Our services</p>
          <div className="flex flex-wrap gap-3">
            {SERVICES.map((service, i) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/15 to-purple-600/15 border border-orange-500/20 text-zinc-300"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Why us cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-5 bg-[#111] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-900/30">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{reason.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
