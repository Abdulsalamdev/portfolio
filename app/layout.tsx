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
  title: "Abdulsalam Akinyoola | Full-Stack Developer Portfolio",
  description:
    "A portfolio by Abdulsalam Akinyoola – Full-Stack Developer skilled in Next.js, Node.js, MongoDB.",
  keywords:
    "Full-Stack Developer, Next.js, Portfolio, JavaScript, MongoDB, Node.js, Freelance Developer, Nigeria",
  authors: [{ name: "Abdulsalam Akinyoola" }],
  creator: "Abdulsalam Akinyoola",
  openGraph: {
    title: "Abdulsalam Akinyoola | Full-Stack Developer Portfolio",
    description:
      "Check out the portfolio of Abdulsalam Akinyoola — developer and freelancer for hire.",
    url: "https://abdulsalamakinyoola.vercel.app",
    siteName: "Abdulsalam Akinyoola Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsalam Akinyoola | Full-Stack Developer Portfolio",
    description: "Built with Next.js, Node.js, and MongoDB.",
    site: "@Abdulsalamdevv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} min-h-screen font-outfit transition-colors duration-300`}
      >
        {/* ✅ Fix: attribute="data-theme" for CSS variable system */}
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
