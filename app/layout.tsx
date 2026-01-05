import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Arckonix — AI Construction Intelligence",
  description:
    "AI-powered construction intelligence platform that analyzes plans, generates takeoffs, and automates estimating workflows. Transform drawings into actionable bid data.",
  keywords:
    "AI construction, estimating, takeoff, construction plans, bid automation, construction intelligence, plan analysis",
  authors: [{ name: "Arckonix" }],
  creator: "Arckonix",
  publisher: "Arckonix",
  openGraph: {
    title: "Arckonix — AI Construction Intelligence",
    description:
      "AI-powered construction intelligence platform that analyzes plans, generates takeoffs, and automates estimating workflows.",
    url: "https://arckonix.com",
    siteName: "Arckonix",
    images: [
      {
        url: "/arckonix-logo.png",
        width: 1200,
        height: 630,
        alt: "Arckonix Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arckonix — AI Construction Intelligence",
    description:
      "AI-powered construction intelligence platform that analyzes plans, generates takeoffs, and automates estimating workflows.",
    images: ["/arckonix-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/arckonix-logo.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
