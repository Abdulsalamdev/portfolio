'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed / Remote',
    period: 'Jan 2024 – Present',
    description:
      'Built modern websites and fullstack applications for personal projects and freelance clients using technologies like React, Node.js, MongoDB, and Next.js.',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub / Various Repos',
    period: 'Feb 2024 – May 2024',
    description:
      'Contributed to open source projects focused on REST APIs and frontend UI components. Fixed bugs, improved docs, and added features.',
    stack: ['JavaScript', 'Node.js', 'Git', 'Markdown'],
  },
  {
    role: 'Tech Team Member — Developer Club FUTA',
    company: 'FUTA Campus',
    period: 'Nov 2023 – Present',
    description:
      'Collaborated with student developers to build internal tools and organize weekly dev sessions.',
    stack: ['GitHub', 'HTML', 'Tailwind CSS', 'React'],
  },
  {
    role: 'CS101 Group Project — Attendance Management App',
    company: 'Federal University of Technology, Akure',
    period: 'Apr 2024',
    description:
      'Led a 4-person team to build a Node.js + MongoDB attendance web app. Handled backend logic, APIs, and database setup.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: '80px 20px',
        background: '#0B0B0F',
        color: '#E6E6E6',
        minHeight: '100vh',
      }}
    >
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
              style={{
                background: '#1F1F23',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
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
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>{exp.role}</h3>
                <span style={{ fontSize: '14px', color: '#9CA3AF' }}>{exp.period}</span>
              </div>
              <p style={{ color: '#9CA3AF', fontStyle: 'italic', marginBottom: '10px' }}>
                {exp.company}
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
                {exp.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#6C4BD1',
                      color: '#fff',
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
