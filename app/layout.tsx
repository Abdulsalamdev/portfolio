import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silent Architect | Portfolio",
  description:
    "Silent Architect is a full-stack developer building modern web apps and solutions for people and businesses globally.",
  keywords: [
    "Silent Architect",
    "Full-stack Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ],
  creator: "Silent Architect",
  authors: [{ name: "Silent Architect", url: "https://your-portfolio-url.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-[#0B0B0F] dark:text-[#E6E6E6] font-outfit`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
