import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/Project";
import Experience from "@/components/ExperienceSection";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Silent Architect | Portfolio",
  description: "I'm a full-stack developer building modern web apps for people and businesses around the world.",
};

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#E6E6E6] transition-colors duration-300 scroll-smooth">
      <Navbar />
       <Hero />
       <About />
       <Skills />
       <ProjectsSection />
       <Experience />
       <Services />
    </main>
  );
}
