"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-16 lg:px-32 overflow-hidden bg-transparent"
      style={{ scrollMarginTop: "80px" , width: "100vw"}}
    >
      {/* 🌀 Animated background glow */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-[var(--accent1)] opacity-10 rounded-full blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-10 z-10"
      >
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="relative text-4xl md:text-5xl font-bold text-[var(--text)]"
        >
          About Me
          <span className="absolute left-1/2 -bottom-3 w-20 h-[3px] bg-[var(--accent1)] rounded-full transform -translate-x-1/2"></span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-[var(--muted)] text-lg md:text-xl leading-relaxed tracking-wide max-w-3xl"
        >
          I’m a full-stack developer passionate about building seamless,
          high-performance web applications. My journey began with curiosity
          about how the internet works, and since then, I’ve been creating
          projects that merge great user experiences with scalable backend
          systems.
          <br />
          <br />
          I enjoy solving meaningful problems through code, continuously
          learning, and contributing to impactful digital products. As I grow in
          tech, I’m transitioning into Artificial Intelligence — aspiring to
          build intelligent systems that solve real-world problems, enhance user
          experiences, and automate complex processes through machine learning
          and deep learning.
        </motion.p>
      </motion.div>
     
    </section>
  );
};

export default About;

