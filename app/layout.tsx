import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Bharghav Janapareddi | Automotive Design Engineer & AI for Digital Production",
  description: "Premium portfolio of an automotive design engineer and AI-driven production specialist.",
  keywords: ["automotive engineering", "AI", "digital production", "manufacturing", "CAD", "BIW", "DFMEA"],
  authors: [{ name: "Bharghav Janapareddi" }],
  openGraph: {
    title: "Bharghav Janapareddi | Automotive Design Engineer & AI for Digital Production",
    description: "Premium portfolio of an automotive design engineer and AI-driven production specialist.",
    type: "website",
  },
  generator: "senotron",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased bg-slate-50 text-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
