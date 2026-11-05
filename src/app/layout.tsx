import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0F0D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siddhantgupta.dev"),
  title: "Siddhant Gupta | Full Stack Developer",
  description:
    "Portfolio of Siddhant Gupta — Full Stack Developer specializing in React, Next.js, Node.js, distributed systems, backend engineering, and AI-powered applications.",
  keywords: [
    "Siddhant Gupta",
    "Full Stack Developer",
    "Backend Engineering",
    "Distributed Systems",
    "AI Applications",
    "Next.js",
    "React",
    "Node.js",
    "LangGraph",
    "Redis",
    "PostgreSQL",
    "Bhopal",
  ],
  authors: [{ name: "Siddhant Gupta", url: "https://github.com/siddhant1232" }],
  creator: "Siddhant Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddhantgupta.dev",
    title: "Siddhant Gupta | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, distributed systems, backend engineering, and AI-powered applications.",
    siteName: "Siddhant Gupta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddhant Gupta — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Gupta | Full Stack Developer",
    description: "Full Stack Developer — React, Next.js, Node.js, Distributed Systems, AI Applications.",
    creator: "@siddhant62632",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body
        className="antialiased"
        style={{
          backgroundColor: "#0D0F0D",
          color: "#E8E0D0",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
