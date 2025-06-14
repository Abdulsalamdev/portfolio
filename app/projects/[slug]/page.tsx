// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { projects } from '@/data/project'
import { FaGithub } from 'react-icons/fa'
import { SiNetlify, SiVercel } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

type PageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
 const { slug } =  await params
  // const project = projects.find(p => p.slug === params.slug)
  const project = projects.find(p => p.slug === slug)

  console.log(project)
  console.log("Params:", slug) 

  if (!project) return notFound()

  return (
    <section
      style={{
        padding: '80px 20px',
        background: '#0B0B0F',
        color: '#E6E6E6',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '800px', marginInline: 'auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          {project.title}
        </h1>
        <p style={{ color: '#9CA3AF', marginBottom: '8px' }}>{project.category}</p>

        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          style={{ borderRadius: '12px', marginBottom: '20px', width: '100%', objectFit: 'cover' }}
        />

        <p style={{ marginBottom: '24px', fontSize: '16px', lineHeight: '1.6' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#6C4BD1',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {project.liveUrl.includes('vercel') ? <SiVercel size={18} /> : <SiNetlify size={18} />}
              View Live
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#1F1F23',
                color: '#E6E6E6',
                padding: '10px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              <FaGithub size={18} />
              View Code
            </a>
          )}
        </div>

        <Link
          href="/#projects"
          style={{
            display: 'inline-block',
            color: '#8A63F7',
            fontWeight: 500,
            textDecoration: 'underline',
          }}
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  )
}
