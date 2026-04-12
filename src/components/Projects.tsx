"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "EcoWave Branding",
    category: "Brand Identity",
    description: "A complete overhaul for a sustainable tech company, bringing their vision of a greener future into focus with modern design.",
    color: "bg-emerald-400/20",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "NexGen Platform",
    category: "Web App Dev",
    description: "A sleek, dark-mode focused financial dashboard designed for high-frequency traders and data analysts.",
    color: "bg-blue-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Loom Interiors",
    category: "E-Commerce",
    description: "Premium digital storefront with immersive product 3D viewers and a friction-free checkout flow.",
    color: "bg-orange-400/20",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop",
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-4 bg-zinc-50 border-t border-zinc-200/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Selected Work</h2>
          <p className="text-lg text-zinc-500">A look at some of our recent digital and creative partnerships.</p>
        </div>

        <div className="grid gap-16 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${project.color} blur-[80px] mix-blend-multiply rounded-full opacity-60 transition-opacity group-hover:opacity-100`}></div>
                
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-zinc-200/50 shadow-2xl bg-white isolate">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/60 border border-white/60 shadow-sm px-4 py-2 rounded-full text-sm font-medium text-zinc-800">
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{project.title}</h3>
                <p className="text-lg text-zinc-500 leading-relaxed max-w-md">{project.description}</p>
                <div className="pt-4">
                  <span className="inline-flex font-semibold text-zinc-900 border-b border-zinc-900 pb-1 cursor-pointer hover:text-zinc-600 hover:border-zinc-500 transition-colors">
                    View case study
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
