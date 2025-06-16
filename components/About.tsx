"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      style={{
        paddingInline: "30px",
        paddingBlock: "15px",
      }}
      className="w-full py-20 px-4 md:px-10 lg:px-20 bg-transparent"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="mx-auto max-w-[800px] flex flex-col gap-6 text-center"
        style={{
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#E6E6E6] dark:text-[#E6E6E6]"
          style={{
            fontSize: "30px",
          }}
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#9CA3AF] dark:text-[#9CA3AF] text-base md:text-lg leading-relaxed"
        >
          I'm a full-stack developer with a passion for crafting seamless and
          high-performance web applications. My journey began with a curiosity
          for how things work on the internet, and since then, I've been
          building projects that blend great user experiences with scalable
          backend systems. I enjoy solving real problems through code,
          continuously learning, and contributing to impactful digital products.
          <br />
          <br />
          As I grow in the tech space, I'm transitioning into the field of
          Artificial Intelligence as an aspiring AI Engineer. I'm passionate
          about building intelligent systems that solve real-world problems,
          enhance user experiences, and automate complex processes through
          machine learning, deep learning, and data-driven decision-making
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
