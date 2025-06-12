'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// TypingText Component
function TypingText({ text, speed = 50, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState('');
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
      onComplete?.(); // Call the next step
    }
  }, [index, text, speed, onComplete]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      {displayed}
      {!isDone && <span className="inline-block w-[1ch]">{showCursor ? '|' : ''}</span>}
    </span>
  );
}

// Main Hero Section
export default function HeroSection() {
  const [step, setStep] = useState(1);

  return (
    <section
      id="home"
      style={{
        paddingTop: "60px",
        paddingInline: "20px"
      }}
      className="min-h-screen flex items-center justify-center px-4 py-20 sm:py-32 bg-[#0B0B0F] text-[#E6E6E6]"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* Left Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
              style={{
              fontSize: "30px"
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#9CA3AF]"
          >
            {step >= 1 && (
              <TypingText
                text="Hi, I’m Abdulsalam Akinyoola"
                speed={60}
                onComplete={() => setStep(2)}
              />
            )}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
               style={{
              marginTop: "10px",
              fontSize: "26px"
            }}
            className="text-xl sm:text-2xl text-[#8A63F7] font-semibold mb-6"
          >
            {step >= 2 && (
              <TypingText
                text="A Full-stack Developer"
                speed={60}
                onComplete={() => setStep(3)}
              />
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base md:text-lg text-[#9CA3AF] max-w-lg mb-6"
            style={{
              marginTop: "10px",
              fontSize: "20px"
            }}
          >
            {step >= 3 && (
              <TypingText
                text="Passionate about building fast, scalable, and user-friendly digital experiences. I love crafting solutions that bridge business goals with seamless tech."
                speed={25}
              />
            )}
          </motion.p>

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link href="#contact">
                <button
                  style={{
                    marginTop: "10px",
                    backgroundColor: '#8A63F7',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                  }}
                  className="hover:bg-[#6C4BD1] transition duration-300"
                >
                  Contact Me
                </button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#8A63F7]"
        >
          <Image
            src="/profile.jpg"
            alt="Abdulsalam Akinyoola"
            width={400}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
