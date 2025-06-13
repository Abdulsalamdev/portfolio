// 'use client'
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// app/layout.tsx
export const metadata = {
  title: 'Silent Architect | Full-Stack Developer Portfolio',
  description: 'A portfolio by Abdulsalam Akinyoola – Full-Stack Developer skilled in Next.js, Node.js, MongoDB.',
  keywords: 'Full-Stack Developer, Next.js, Portfolio, JavaScript, MongoDB, Node.js, Freelance Developer, Nigeria',
  authors: [{ name: 'Abdulsalam Akinyoola' }],
  creator: 'Abdulsalam Akinyoola',
  openGraph: {
    title: 'Silent Architect | Full-Stack Developer Portfolio',
    description: 'Check out the portfolio of Abdulsalam Akinyoola — developer and freelancer for hire.',
    url: 'https://yourdomain.com',
    siteName: 'Silent Architect Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silent Architect | Full-Stack Developer Portfolio',
    description: 'Built with Next.js, Node.js, and MongoDB.',
    site: '@yourTwitterHandle',
  },
}


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
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
