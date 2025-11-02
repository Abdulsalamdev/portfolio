"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";
import { useTheme } from "@/components/ThemeProvider";

interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
}

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: isDark ? "#0B0B0F" : "#F9FAFB",
        color: isDark ? "#E6E6E6" : "#1F2937",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Title & Category */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 0 }}>
            {project.title}
          </h1>
          <p
            style={{
              color: isDark ? "#9CA3AF" : "#4B5563",
              textTransform: "capitalize",
            }}
          >
            {project.category}
          </p>
        </div>

        {/* Image or Placeholder */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={450}
            style={{
              width: "100%",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "16px",
              background: isDark
                ? "linear-gradient(135deg, #1F1F1F, #2E2E2E)"
                : "linear-gradient(135deg, #E5E7EB, #F9FAFB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isDark ? "#9CA3AF" : "#6B7280",
              fontSize: "16px",
              fontWeight: 500,
              border: `1px solid ${isDark ? "#374151" : "#D1D5DB"}`,
            }}
          >
            No image available
          </div>
        )}

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.7",
            color: isDark ? "#E6E6E6" : "#1F2937",
          }}
        >
          {project.description}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {/* Conditionally render Live URL */}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 16px",
                backgroundColor: "#6C4BD1",
                color: "#fff",
                borderRadius: "12px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              {project.liveUrl.includes("vercel") ? <SiVercel /> : <SiNetlify />}
              <span>View Live</span>
            </a>
          )}

          {/* Conditionally render Code URL */}
          {project.codeUrl && project.codeUrl !== "#" && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 16px",
                backgroundColor: isDark ? "#1E293B" : "#E5E7EB",
                color: isDark ? "#E5E7EB" : "#1F2937",
                borderRadius: "12px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          )}

          {/* If neither link exists */}
          {!project.liveUrl && !project.codeUrl && (
            <span
              style={{
                fontSize: "14px",
                color: isDark ? "#9CA3AF" : "#4B5563",
                fontStyle: "italic",
              }}
            >
              No live preview or code available
            </span>
          )}
        </div>

        {/* Back Link */}
        <Link
          href="/#projects"
          style={{
            color: "#6C4BD1",
            fontWeight: 500,
            textDecoration: "underline",
            marginTop: "24px",
          }}
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
