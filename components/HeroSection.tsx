"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// TypingText Component
function TypingText({
  text,
  speed = 40,
  onComplete,
}: {
  text: string;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsDone(true);
      onComplete?.();
    }
  }, [index, text, speed, onComplete]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      {displayed}
      {!isDone && <span className="inline-block w-[1ch]">{showCursor ? "|" : ""}</span>}
    </span>
  );
}

// Main Hero Section
export default function HeroSection() {
  const [step, setStep] = useState(1);

  return (
    <section
      id="home"
      style={{ paddingTop: "60px", paddingInline: "20px", width: "100vw" }}
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 py-24 sm:py-32 bg-[var(--bg)] text-[var(--text)] overflow-hidden"
    >
      {/* 🔮 Subtle Animated Background Blob */}
      <motion.div
        className="absolute w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-[var(--accent1)] rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: "15%", right: "10%", zIndex: 0 }}
      />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 z-10 relative">
        {/* Left Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "30px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--muted)]"
          >
            {step >= 1 && (
              <TypingText text="Hi, I’m Abdulsalam Akinyoola" speed={40} onComplete={() => setStep(2)} />
            )}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ marginTop: "10px", fontSize: "26px" }}
            className="text-xl sm:text-2xl text-[var(--accent1)] font-semibold mb-8"
          >
            {step >= 2 && (
              <TypingText text="A Full-stack Developer" speed={40} onComplete={() => setStep(3)} />
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-[var(--muted)] max-w-lg mb-8"
            style={{ marginTop: "10px", fontSize: "20px" }}
          >
            {step >= 3 && (
              <TypingText
                text="Passionate about building fast, scalable, and user-friendly digital experiences. I love crafting solutions that bridge business goals with seamless tech."
                speed={20}
              />
            )}
          </motion.p>

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center md:justify-start mt-6"
            >
              <Link href="#contact">
                <button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "var(--accent1)",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "1rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                  className="hover:bg-[var(--accent2)] hover:scale-105 transition transform duration-300 w-full sm:w-auto"
                >
                  Contact Me
                </button>
              </Link>
              <a
                style={{
                  marginTop: "10px",
                  backgroundColor: "var(--accent1)",
                  color: "#ffffff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
                href="/resume.pdf"
                download
                className="hover:bg-[var(--accent2)] hover:scale-105 transition transform duration-300 w-full sm:w-auto"
              >
                Download CV
              </a>
            </motion.div>
          )}
        </div>

        {/* Right Image (Floating + Hover Animation) */}
       <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{
            delay: 0.4,
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          whileHover={{ scale: 1.05 }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[var(--accent1)] shadow-[0_0_25px_rgba(138,99,247,0.4)]"
        >
          <Image
            src="/profile.jpg"
            alt="Portrait of Abdulsalam Akinyoola, full-stack developer"
            width={400}
            height={400}
            sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 256px"
            className="object-cover w-full h-full"
            priority
            quality={90}
          />
        </motion.div>
      </div>

        </section>
  );
}


