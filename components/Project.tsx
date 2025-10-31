'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { projects } from '@/data/project'
import { FaGithub } from 'react-icons/fa'
import { SiNetlify, SiVercel } from 'react-icons/si'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const filters = ['all', 'frontend', 'backend', 'fullstack'] as const

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('all')
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section
      id="projects"
      style={{
        padding: '80px 20px',
        width: '100vw',
        background: isDarkMode ? '#0B0B0F' : '#F9FAFB',
        color: isDarkMode ? '#E6E6E6' : '#1A1A1F',
        transition: 'background 0.4s ease, color 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '40px',
            textAlign: 'center',
            color: isDarkMode ? '#E6E6E6' : '#1A1A1F',
          }}
        >
          Projects
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 16px',
                backgroundColor:
                  activeFilter === filter
                    ? '#6C4BD1'
                    : isDarkMode
                    ? '#1F1F23'
                    : '#E5E7EB',
                color: isDarkMode
                  ? '#E6E6E6'
                  : activeFilter === filter
                  ? '#fff'
                  : '#1A1A1F',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '14px',
                transition: 'all 0.3s ease',
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center',
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                backgroundColor: isDarkMode ? '#23232A' : '#F1F1F1',
                boxShadow: isDarkMode
                  ? '0 0 20px rgba(138,99,247,0.3)'
                  : '0 0 12px rgba(108,75,209,0.25)',
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.15,
                type: 'spring',
              }}
              viewport={{ once: true }}
              style={{
                width: '100%',
                maxWidth: '350px',
                backgroundColor: isDarkMode ? '#1A1A1F' : '#FFFFFF',
                padding: '16px',
                borderRadius: '12px',
                boxShadow: isDarkMode
                  ? '0 2px 10px rgba(0,0,0,0.3)'
                  : '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition:
                  'box-shadow 0.3s ease, background-color 0.3s ease, transform 0.2s ease',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={350}
                  height={200}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '12px',
                  }}
                />
              </motion.div>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: isDarkMode ? '#F4B400' : '#6C4BD1',
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: isDarkMode ? '#9CA3AF' : '#4B5563',
                  marginBottom: '12px',
                  textTransform: 'capitalize',
                }}
              >
                {project.category}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginTop: '12px',
                }}
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#8A63F7',
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    {project.liveUrl.includes('vercel') ? (
                      <SiVercel size={16} />
                    ) : (
                      <SiNetlify size={16} />
                    )}
                    View Live
                  </a>
                )}

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#8A63F7',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  <FaGithub size={16} />
                  View Code
                </a>

                <Link
                  href={`/projects/${project.slug}`}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#6C4BD1',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  View Details <HiOutlineArrowNarrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
