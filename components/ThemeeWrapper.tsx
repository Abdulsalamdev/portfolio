// components/ThemeWrapper.tsx
'use client'

import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'

const ThemeWrapper = () => {
  const { theme } = useTheme()

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: 50,
        // backgroundColor: theme === "dark" ? "#1F1F23" : "#E5E7EB",
        padding: "10px",
        borderRadius: "9999px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      }}
    >
      <ThemeToggle />
    </div>
  )
}

export default ThemeWrapper
