'use client'

import { motion } from 'framer-motion'
import { useTheme } from "@/components/ThemeProvider";

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Upwork / Remote',
    period: '2025 – Present',
    description:
      'Providing fullstack development services on Upwork, building websites and web applications for clients using modern technologies.',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'AFEX Exchange Commodity',
    period: 'Jan 2023 – Dec 2024',
    description:
      'Worked on internal and personal projects as a full stack intern, building web apps with a focus on frontend and backend integration.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Backend Developer (Bootcamp)',
    company: 'FUTA / Backend Developer Bootcamp',
    period: 'Jun 2025 – Aug 2025',
    description:
      'Completed an intensive backend bootcamp focusing on system design, architecture, and building scalable backend solutions.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'System Design', 'REST APIs'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'TeliyTech',
    period: 'Sep 2025 – Present',
    description:
      'Building and maintaining fullstack web applications, collaborating on system design, and delivering scalable solutions for production.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'React', 'Tailwind CSS'],
  },
  {
    role: 'Full Stack Tutor',
    company: 'TeliyTech',
    period: 'Sep 2025 – Present',
    description:
      'Mentoring and tutoring students on fullstack development, covering frontend, backend, and deployment practices.',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
];


export default function ExperienceSection() {
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const styles = {
    section: {
      padding: '80px 20px',
      background: isDark ? '#0B0B0F' : '#F8F9FA',
      color: isDark ? '#E6E6E6' : '#1A1A1A',
      minHeight: '100vh',
      width: '100vw',
      transition: 'all 0.3s ease',
    },
    card: {
      background: isDark ? '#1F1F23' : '#FFFFFF',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: isDark
        ? '0 4px 12px rgba(0,0,0,0.1)'
        : '0 4px 12px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
    },
    chip: {
      backgroundColor: isDark ? '#6C4BD1' : '#E0D4FF',
      color: isDark ? '#fff' : '#3B2A86',
    },
  }

  return (
    <section id="experience" style={styles.section}>
      <div style={{ maxWidth: '1000px', marginInline: 'auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          Experience
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={styles.card}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  marginBottom: '8px',
                  gap: '8px',
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>
                  {exp.role}
                </h3>
                <span style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280' }}>
                  {exp.period}
                </span>
              </div>
              <p
                style={{
                  color: isDark ? '#9CA3AF' : '#6B7280',
                  fontStyle: 'italic',
                  marginBottom: '10px',
                }}
              >
                {exp.company}
              </p>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                {exp.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      ...styles.chip,
                      fontSize: '12px',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      fontWeight: '500',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
