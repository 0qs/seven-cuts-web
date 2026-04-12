import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f5]">
      <Hero />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
