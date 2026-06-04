import Image from "next/image";
import Link from "next/link";

const SECTIONS = [
  { label: "About Us", id: "about" },
  { label: "Portfolio", id: "projects" },
  { label: "Workflow", id: "process" },
  { label: "Pricing", id: "pricing" },
];

export default function Navbar({ onHome = false }: { onHome?: boolean }) {
  // On the home page, link to in-page anchors for smooth scrolling.
  // From other pages, link back to the home page anchors.
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <div className="absolute top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between z-20">
      <Link href="/" aria-label="Seven Cuts Media home">
        <Image
          src="/logo.png"
          alt="Seven Cuts Media"
          width={120}
          height={40}
          className="object-contain brightness-0 invert"
          priority
        />
      </Link>
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
    </div>
  );
}
