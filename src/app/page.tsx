import Hero from "@/components/Hero";
import FeaturedVideo from "@/components/FeaturedVideo";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Growth from "@/components/Growth";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Hero />
      <FeaturedVideo />
      <Stats />
      <WhyUs />
      <Growth />
      <Projects />
      <Process />
      <Pricing />
      <Contact />
    </main>
  );
}
