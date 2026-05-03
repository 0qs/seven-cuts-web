import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Hero />
      <Stats />
      <Projects />
      <Process />
      <Pricing />
      <Contact />
    </main>
  );
}
