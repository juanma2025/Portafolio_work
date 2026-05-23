import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/context/ThemeContext"

export const metadata: Metadata = {
  title: "Portfolio Desing | Juan Manuel",
  description: "Portfolio personal de Juan Manuel, desarrollador web frontend",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
      >

        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

