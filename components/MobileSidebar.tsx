'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
   { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      {open ? (
          <button
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
                 className="text-muted-foreground hover:text-primary transition-all"
              >
                <X className="w-6 h-6" />
              </button>
      ): (
         <button
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="text-muted-foreground hover:text-primary transition-all"
      >
        <Menu className="w-6 h-6" />
      </button>
      )}
     

      {/* Sidebar + Dimmed Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim Background */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: '10%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                paddingBlock: "20px",
                paddingInline: "20px"
              }}
              className="fixed top-[60px] right-[20px] h-[100vh] w-[80%] bg-gradient-to-br from-[#121212] via-[#1F1F2F] to-[#3D3D70] dark:from-[#0b0b20] dark:via-[#1F1F2F] dark:to-[#121212] shadow-lg z-40"
            >
            

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-primary"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
