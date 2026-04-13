"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-400 py-32 px-4 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto space-y-32">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Let's build something remarkable.
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Reach out to discuss your next project, or just to say hi.
          </p>

          <a 
            href="mailto:hello@sevencutsmedia.com"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-black transition-all bg-white rounded-full hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
          >
            hello@sevencutsmedia.com
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 text-sm">
          <p>© {new Date().getFullYear()} Seven Cuts Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
