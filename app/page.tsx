import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Silent Architect | Portfolio",
  description: "I'm a full-stack developer building modern web apps for people and businesses around the world.",
};

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-[#0B0B0F] text-gray-900 dark:text-[#E6E6E6] transition-colors duration-300 scroll-smooth">
      <Navbar />
       <Hero />
       {/* <About /> */}
       {/* <Skills /> */}

      <section id="projects" className="pt-24">
        {/* <ProjectsSection /> */}
      </section>

      <section id="experience" className="pt-24">
        {/* <ExperienceSection /> */}
      </section>

      <section id="services" className="pt-24">
        {/* <ServicesSection /> */}
      </section>

      <section id="contact" className="pt-24 pb-16">
        {/* <ContactSection /> */}
      </section>

      {/* <Footer /> */}
    </main>
  );
}
