"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiPrisma, SiTailwindcss,
  SiGit, SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 bg-gray-100 dark:bg-[#0F0F13] text-gray-900 dark:text-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              className="bg-white dark:bg-[#1C1C22] border border-gray-200 dark:border-gray-800 rounded-lg py-4 px-3 flex flex-col items-center justify-center text-center font-medium shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="w-8 h-8 mb-2 text-[#8A63F7]" />
              {name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
