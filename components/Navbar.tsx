"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MobileSidebar } from "./MobileSidebar";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 z-50 w-full backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      style={{
        paddingInline: "30px",
        paddingBlock: "15px",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="text-lg font-semibold text-primary">
          Silent Architect
        </Link>

        {/* Desktop Navigation */}
        <div
          className="flex gap-[20px]"
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle Button */}
           
        <MobileSidebar />
      </nav>
    </header>
  );
}
