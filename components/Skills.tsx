'use client'

import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiFigma, SiGit, SiGithub, 
} from 'react-icons/si'
import React from 'react'

const skills = [
  { name: 'HTML', icon: <SiHtml5 className="text-[#e34c26]" /> },
  { name: 'CSS', icon: <SiCss3 className="text-[#264de4]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#f0db4f]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#007acc]" /> },
  { name: 'React', icon: <SiReact className="text-[#61dafb]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-[#E6E6E6]" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#3c873a]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-[#E6E6E6]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'Git', icon: <SiGit className="text-[#f1502f]" /> },
  { name: 'GitHub', icon: <SiGithub className="text-[#E6E6E6]" /> },
  { name: 'Postman', icon: <SiPostman className="text-[#ff6c37]" /> },
  { name: 'Figma', icon: <SiFigma className="text-[#a259ff]" /> },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 md:px-10 lg:px-20 bg-transparent"
    style={{
       paddingInline: "30px",
       paddingBlock: "15px",
        maxWidth: "1200px",
         marginInline: "auto",
    }}>
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#E6E6E6] mb-10"
          style={{
            fontSize: "30px",
            paddingBottom: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              className="w-[120px] h-[120px] bg-[#14141A] flex flex-col items-center justify-center gap-3 p-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#8A63F7]/30"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm text-[#9CA3AF]">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
