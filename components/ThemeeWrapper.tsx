"use client";

import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

export default function ThemeWrapper() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 50,
        padding: "10px",
        borderRadius: "9999px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        backgroundColor: theme === "dark" ? "#1F1F23" : "#E5E7EB",
        transition: "background 0.3s",
      }}
    >
      <ThemeToggle />
    </div>
  );
}
