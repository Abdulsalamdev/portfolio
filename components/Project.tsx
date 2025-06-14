'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/project'
import { FaGithub } from 'react-icons/fa'
import { SiNetlify, SiVercel } from 'react-icons/si'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const filters = ['all', 'frontend', 'backend', 'fullstack'] as const

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section
      id="projects"
      style={{
        padding: "80px 20px",
        background: "#0B0B0F",
        color: "#E6E6E6"
      }}
    >
      <div style={{ maxWidth: "1200px", marginInline: "auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "40px",
            textAlign: "center"
          }}
        >
          Projects
        </h2>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "40px",
            flexWrap: "wrap"
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "8px 16px",
                backgroundColor: activeFilter === filter ? "#6C4BD1" : "#1F1F23",
                color: "#E6E6E6",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "14px",
                transition: "all 0.3s ease"
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center"
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                maxWidth: "350px",
                backgroundColor: "#1A1A1F",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
              }}
            >
              {/* Image */}
              {/* <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px"
                }}
              /> */}

              {/* Title */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "8px"
                }}
              >
                {project.title}
              </h3>

              {/* Category */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#9CA3AF",
                  marginBottom: "12px",
                  textTransform: "capitalize"
                }}
              >
                {project.category}
              </p>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "12px"
                }}
              >
                {/* Live */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#8A63F7",
                      fontSize: "14px",
                      textDecoration: "none"
                    }}
                  >
                    {project.liveUrl.includes("vercel") ? (
                      <SiVercel size={16} />
                    ) : (
                      <SiNetlify size={16} />
                    )}
                    View Live
                  </a>
                )}

                {/* Code */}
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#8A63F7",
                    fontSize: "14px",
                    textDecoration: "none"
                  }}
                >
                  <FaGithub size={16} />
                  View Code
                </a>

                {/* Details Button */}
                <Link
                  href={`/projects/${project.slug}`}
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#6C4BD1",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }}
                >
                  View Details <HiOutlineArrowNarrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
