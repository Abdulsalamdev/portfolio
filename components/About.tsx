"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id=""
      className="flex items-center justify-center py-20 px-4 sm:px-8 bg-white dark:bg-[#0B0B0F] text-gray-800 dark:text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>

        <p className="text-base sm:text-lg mb-6">
          I am a creative full-stack developer with over three years of experience building responsive and scalable web applications.
          <br />
          I believe programming is not just about writing code, but building solutions to real-world problems.
        </p>

        <p className="text-base sm:text-lg mb-6">
          My goal is to continuously create methods and systems that improve service delivery and help businesses and organizations meet their goals.
          I'm always learning and growing.
        </p>

        <div className="flex justify-center gap-8 mb-6 text-lg">
          <div>
            <span className="font-bold text-[#8A63F7]">03+</span>
            <p>Years Experience</p>
          </div>
          <div>
            <span className="font-bold text-[#8A63F7]">25+</span>
            <p>Completed Projects</p>
          </div>
          <div>
            <span className="font-bold text-[#8A63F7]">06+</span>
            <p>Clients Worked With</p>
          </div>
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-block bg-[#8A63F7] hover:bg-[#6C4BD1] text-white font-medium py-2 px-6 rounded-full transition duration-300"
        >
          My Resume
        </Link>
      </motion.div>
    </section>
  );
}
