"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 z-50 w-full backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300"
      style={{
        paddingInline: "30px",
        paddingBlock: "15px",
      }}
    >
      <nav
        className="flex justify-between items-center"
      >
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold text-[var(--accent1)] hover:text-[var(--accent2)] transition-colors"
        >
          Silent Architect
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent1)] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <MobileSidebar />
        </div>
      </nav>
    </header>
  );
}

