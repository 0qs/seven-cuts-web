"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const GRID_VIDEOS = [
  "/video/VIDEO-2026-04-14-20-41-27.mp4",
  "/video/VIDEO-2026-04-14-20-41-43.mp4",
  "/video/VIDEO-2026-04-14-20-41-37.mp4",
  "/video/VIDEO-2026-04-14-20-41-40.mp4",
  "/video/VIDEO-2026-04-14-20-41-41.mp4",
  "/video/VIDEO-2026-04-14-20-41-30.mp4",
];

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07 }}
      className="group relative rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer ring-1 ring-white/5 hover:ring-white/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[9/16]">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"} flex items-center justify-center`}>
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pt-12 pb-24 px-6 md:px-12 bg-[#080808] border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Portfolio</h2>
            <p className="text-zinc-500 max-w-sm">Hover to preview. A selection of cuts we&apos;re proud of.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GRID_VIDEOS.map((src, i) => (
            <VideoCard key={i} src={src} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
