import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Juan Manuel Cabrera — Product Designer (UI/UX & Research)",
  description:
    "Portafolio de Juan Manuel Cabrera, Product Designer especializado en investigación con usuarios, pruebas de usabilidad y diseño de interfaces en fintech, movilidad urbana y cultura.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className="apple-body">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
