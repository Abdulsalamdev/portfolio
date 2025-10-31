'use client'

import { notFound } from 'next/navigation'
import { projects } from '@/data/project'
import { useTheme } from 'next-themes'
import { FaGithub } from 'react-icons/fa'
import { SiNetlify, SiVercel } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

type Props = {
  params: { slug: string }
}

export default function ProjectDetails({ params }: Props) {

      const { slug } = params

  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const bgColor = isDark ? '#0B0B0F' : '#F9FAFB'
  const textColor = isDark ? '#E6E6E6' : '#1F2937'
  const subTextColor = isDark ? '#9CA3AF' : '#4B5563'

  return (
    <section style={{ padding: '80px 20px', background: bgColor, color: textColor, minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>{project.title}</h1>
        <p style={{ color: subTextColor, marginBottom: '8px' }}>{project.category}</p>
        <Image src={project.image} alt={project.title} width={800} height={400} style={{ width: '100%', borderRadius: '12px', marginBottom: '20px', objectFit: 'cover' }} />
        <p style={{ marginBottom: '24px', fontSize: '16px', lineHeight: '1.6', color: textColor }}>{project.description}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px', backgroundColor: '#6C4BD1', color: '#fff', borderRadius: '8px', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {project.liveUrl.includes('vercel') ? <SiVercel /> : <SiNetlify />}
              View Live
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px', backgroundColor: isDark ? '#1F1F23' : '#E5E7EB', color: isDark ? '#E6E6E6' : '#1F2937', borderRadius: '8px', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <FaGithub />
              View Code
            </a>
          )}
        </div>
        <Link href="/#projects" style={{ color: '#6C4BD1', fontWeight: 500, textDecoration: 'underline' }}>← Back to Projects</Link>
      </div>
    </section>
  )
}
