"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

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
      style={{ scrollMarginTop: "80px", width: "100vw", paddingTop: "20px" }}
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
          style={{
            paddingInline: "20px",
          }}
          variants={fadeUp}
          className="text-[var(--muted)] text-lg md:text-xl leading-relaxed tracking-wide max-w-3xl px-[20px]"
        >
          I’m a CS student and Full Stack Engineer passionate about building
          intelligent, high-performance web applications. My journey started
          with a deep curiosity about how technology connects people through the
          web, and over time, that curiosity evolved into a mission to create
          systems that are both smart and seamless.
          <br />
          <br />
          I specialize in bridging the frontend, backend, and the emerging world
          of AI. I love solving meaningful problems through clean, scalable code
          while continuously learning and experimenting with new technologies.
          <br />
          <br />
          As I grow in tech, I’m transitioning into Artificial Intelligence,
          aspiring to become a Full Stack AI Engineer who builds intelligent
          systems that enhance user experiences, solve real-world challenges,
          and automate complex processes using machine learning and deep
          learning.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
