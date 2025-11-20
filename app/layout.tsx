// app/layout.tsx
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulsalam Akinyoola | Full-Stack Engineer Portfolio",
  description:
    "Portfolio of Abdulsalam Akinyoola, Full-Stack Engineer specializing in Next.js, Node.js, and MongoDB.",
  keywords:
    "Full-Stack Engineer, Web Developer, Next.js, Node.js, React, MongoDB, Portfolio, Freelance Developer, Nigeria",
  authors: [{ name: "Abdulsalam Akinyoola" }],
  creator: "Abdulsalam Akinyoola",
  openGraph: {
    title: "Abdulsalam Akinyoola | Full-Stack Engineer Portfolio",
    description:
      "Discover the professional portfolio of Abdulsalam Akinyoola, a Full-Stack Engineer with expertise in modern web development and freelance solutions.",
    url: "https://abdulsalamakinyoola.vercel.app",
    siteName: "Abdulsalam Akinyoola Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://abdulsalamakinyoola.vercel.app/profile_og.png?v=2",
        width: 1200,
        height: 630,
        alt: "Abdulsalam Akinyoola Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsalam Akinyoola | Full-Stack Engineer Portfolio",
    description:
      "Explore the portfolio of Abdulsalam Akinyoola, a Full-Stack Engineer proficient in Next.js, Node.js, React, and modern web technologies.",
    images: ["https://abdulsalamakinyoola.vercel.app/profile_og.png?v=2"],
    site: "@Abdulsalamdev",
    creator: "@Abdulsalamdev",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body
          className={`${outfit.variable} min-h-screen font-outfit transition-colors duration-300`}
        >
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </body>
      </ThemeProvider>
    </html>
  );
}
