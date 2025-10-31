// "use client";

// import { motion } from "framer-motion";
// import {
//   SiHtml5,
//   SiCss3,
//   SiTailwindcss,
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiGit,
//   SiGithub,
//   SiPostman,
//   SiFigma,
// } from "react-icons/si";
// import React from "react";
// import { useTheme } from "next-themes";

// const skills = [
//   { name: "HTML", icon: <SiHtml5 className="text-[#e34c26]" /> },
//   { name: "CSS", icon: <SiCss3 className="text-[#264de4]" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
//   { name: "JavaScript", icon: <SiJavascript className="text-[#f0db4f]" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-[#007acc]" /> },
//   { name: "React", icon: <SiReact className="text-[#61dafb]" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-[#E6E6E6]" /> },
//   { name: "Node.js", icon: <SiNodedotjs className="text-[#3c873a]" /> },
//   { name: "Express.js", icon: <SiExpress className="text-[#E6E6E6]" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
//   { name: "Git", icon: <SiGit className="text-[#f1502f]" /> },
//   { name: "GitHub", icon: <SiGithub className="text-[#E6E6E6]" /> },
//   { name: "Postman", icon: <SiPostman className="text-[#ff6c37]" /> },
//   { name: "Figma", icon: <SiFigma className="text-[#a259ff]" /> },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Skills = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section
//       id="skills"
//       className="w-[100vw] py-24 px-4 md:px-10 lg:px-20 bg-transparent flex justify-center items-center"
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }} // ✅ triggers once on first scroll into view
//         className="max-w-6xl text-center flex flex-col items-center gap-6"
//       >
//         {/* Title */}
//         <motion.h2
//           variants={fadeUp}
//           className={`text-3xl md:text-4xl font-bold ${
//             isDark ? "text-[#E6E6E6]" : "text-gray-900"
//           }`}
//         >
//           My <span className="text-[#8A63F7]">Skills</span>
//         </motion.h2>

//         {/* Subtitle */}
//         <motion.p
//           variants={fadeUp}
//           className={`text-base md:text-lg max-w-2xl leading-relaxed mb-10 ${
//             isDark ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           A collection of technologies and tools I use to design, build, and
//           deliver seamless digital experiences.
//         </motion.p>

//         {/* Skills Grid */}
//         <motion.div
//           variants={containerVariants}
//           className="flex flex-wrap justify-center gap-6 md:gap-10"
//         >
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               whileHover={{
//                 scale: 1.08,
//                 rotate: 2,
//                 boxShadow:
//                   "0 0 20px rgba(138,99,247,0.6), 0 0 10px rgba(138,99,247,0.3)",
//               }}
//               whileTap={{ scale: 0.96 }}
//               className={`relative w-[110px] h-[110px] sm:w-[120px] sm:h-[120px]
//                 flex flex-col items-center justify-center rounded-2xl
//                 transition-all duration-300 group overflow-hidden
//                 border ${
//                   isDark ? "border-[#2A2A35]" : "border-gray-300"
//                 } ${isDark
//                   ? "bg-gradient-to-br from-[#14141A] to-[#0E0E12]"
//                   : "bg-gradient-to-br from-[#ffffff] to-[#f1f3f9]"
//                 } shadow-sm hover:shadow-lg`}
//             >
//               {/* Glow Border */}
//               <div
//                 className="absolute inset-0 rounded-2xl p-[2px]
//                 bg-gradient-to-br from-[#8A63F7] to-[#4F46E5]
//                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               />

//               {/* Inner Content */}
//               <div className="relative z-10 flex flex-col items-center justify-center gap-3">
//                 {/* Floating Icon */}
//                 <motion.div
//                   animate={{ y: [0, -6, 0] }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: i * 0.1,
//                   }}
//                   className="text-4xl"
//                 >
//                   {skill.icon}
//                 </motion.div>

//                 {/* Skill name */}
//                 <p
//                   className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
//                     isDark ? "text-gray-300" : "text-gray-800"
//                   }`}
//                 >
//                   {skill.name}
//                 </p>
//               </div>

//               {/* ✅ Hover BG Effect for Light Mode */}
//               {!isDark && (
//                 <div
//                   className="absolute inset-0 bg-[#f8f6ff]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{ mixBlendMode: "soft-light" }}
//                 />
//               )}
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-[#e34c26]" /> },
  { name: "CSS", icon: <SiCss3 className="text-[#264de4]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f0db4f]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#007acc]" /> },
  { name: "React", icon: <SiReact className="text-[#61dafb]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#E6E6E6]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#3c873a]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#E6E6E6]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Git", icon: <SiGit className="text-[#f1502f]" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#E6E6E6]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#ff6c37]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#a259ff]" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after client mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className="w-[100vw] py-24 px-4 md:px-10 lg:px-20 bg-transparent flex justify-center items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl text-center flex flex-col items-center gap-6"
      >
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className={`text-3xl md:text-4xl font-bold ${
            isDark ? "text-[#E6E6E6]" : "text-gray-900"
          }`}
        >
          My <span className="text-[#8A63F7]">Skills</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className={`text-base md:text-lg max-w-2xl leading-relaxed mb-10 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A collection of technologies and tools I use to design, build, and
          deliver seamless digital experiences.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow:
                  "0 0 20px rgba(138,99,247,0.6), 0 0 10px rgba(138,99,247,0.3)",
              }}
              whileTap={{ scale: 0.96 }}
              className={`relative w-[110px] h-[110px] sm:w-[120px] sm:h-[120px]
                flex flex-col items-center justify-center rounded-2xl
                transition-all duration-300 group overflow-hidden
                border ${isDark ? "border-[#2A2A35]" : "border-gray-300"} ${
                isDark
                  ? "bg-gradient-to-br from-[#14141A] to-[#0E0E12]"
                  : "bg-gradient-to-br from-[#ffffff] to-[#f1f3f9]"
              } shadow-sm hover:shadow-lg`}
            >
              {/* Glow Border */}
              <div
                className="absolute inset-0 rounded-2xl p-[2px]
                  bg-gradient-to-br from-[#8A63F7] to-[#4F46E5]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Inner Content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                  className="text-4xl"
                >
                  {skill.icon}
                </motion.div>
                <p
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {skill.name}
                </p>
              </div>

              {!isDark && (
                <div
                  className="absolute inset-0 bg-[#f8f6ff]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ mixBlendMode: "soft-light" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
