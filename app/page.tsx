import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/Project";
import Experience from "@/components/ExperienceSection";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";


export const metadata: Metadata = {
  title: "Abdulsalam Akinyoola | Portfolio",
  description:
    "I'm a full-stack developer building modern web apps for people and businesses around the world.",
};

export default function HomePage() {
  return (
<main
  className="min-h-screen transition-colors duration-300 scroll-smooth bg-[var(--bg)] text-[var(--text)] overflow-x-hidden"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <ProjectsSection />
    <Experience />
    <Services />
    <ContactForm />
  </div>
</main>

  );
}
