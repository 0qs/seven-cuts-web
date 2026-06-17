"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { label: "About Us", id: "about" },
  { label: "Portfolio", id: "projects" },
  { label: "Workflow", id: "process" },
  { label: "Pricing", id: "pricing" },
];

export default function Navbar({ onHome = false }: { onHome?: boolean }) {
  const [open, setOpen] = useState(false);

  // On the home page, link to in-page anchors for smooth scrolling.
  // From other pages, link back to the home page anchors.
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const close = () => setOpen(false);

  return (
    <div className="absolute top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between z-30">
      <Link href="/" aria-label="Seven Cuts Media home" onClick={close}>
        <Image
          src="/logo.png"
          alt="Seven Cuts Media"
          width={120}
          height={40}
          className="object-contain brightness-0 invert"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={sectionHref(section.id)}
            className="hover:text-white transition-colors"
          >
            {section.label}
          </a>
        ))}
        <Link href="/articles" className="hover:text-white transition-colors">
          Articles
        </Link>
        <a
          href={sectionHref("contact")}
          className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-white"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 mx-6 mt-2 rounded-2xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md p-2 shadow-2xl">
          <nav className="flex flex-col">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={sectionHref(section.id)}
                onClick={close}
                className="px-4 py-3 rounded-xl text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                {section.label}
              </a>
            ))}
            <Link
              href="/articles"
              onClick={close}
              className="px-4 py-3 rounded-xl text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              Articles
            </Link>
            <a
              href={sectionHref("contact")}
              onClick={close}
              className="mt-1 px-4 py-3 rounded-xl bg-white text-black text-sm font-semibold text-center hover:bg-zinc-100 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
