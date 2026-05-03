"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#0d0d0d] border-t border-white/5 pt-12 pb-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Get in touch</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
            Let&apos;s build something remarkable.
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            Reach out to discuss your next project, or just to say hi.
          </p>

          <a
            href="https://wa.me/6281413402943"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-semibold text-white transition-all bg-[#25D366] rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact Us
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-zinc-600">
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
