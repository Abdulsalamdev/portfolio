"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      {open ? (
        <button
          onClick={() => setOpen(false)}
          aria-label="Close Menu"
          className="text-[var(--muted)] hover:text-[var(--accent1)] transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="text-[var(--muted)] hover:text-[var(--accent1)] transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <div onClick={() => setOpen(false)}>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}

              className="fixed inset-0 bg-black z-30"
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: "10%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                paddingBlock: "20px",
                paddingInline: "20px",
              }}
              className="fixed top-[60px] right-[20px] h-[100vh] w-[80%] bg-[var(--bg)] text-[var(--text)] shadow-xl z-40 border-l border-[var(--muted)] transition-colors duration-300"

            >
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-[var(--muted)] hover:text-[var(--accent1)] transition-colors"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
