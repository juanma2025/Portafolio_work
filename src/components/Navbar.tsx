"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, Download } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

const THEME_DARK = "dark"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Currículum", href: "/resume" },
  { label: "Contacto", href: "/contacto" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/#proyectos") return pathname.startsWith("/proyectos")
    if (href === "/sobre-mi")
      return pathname === "/sobre-mi" || pathname === "/about"
    if (href === "/contacto")
      return pathname === "/contacto" || pathname === "/contact"
    return pathname === href
  }

  const ariaThemeLabel =
    theme === THEME_DARK ? "Cambiar a modo claro" : "Cambiar a modo oscuro"

  return (
    <header className="apple-header-wrap">
      <div className="apple-navbar">
        <Link href="/" className="apple-brand">
          <span className="apple-brand__name">Juan Manuel</span>
          <span className="apple-brand__role">Product Designer</span>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="apple-nav-desktop" aria-label="Menú principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`apple-nav-link ${
                isLinkActive(item.href) ? "apple-nav-link--active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="apple-nav-actions">
          <a
            href="/CV_Juan_Manuel_Cabrera_Product_Designer.pdf"
            download
            className="apple-cv-pill"
          >
            <Download size={14} />
            <span>Descargar CV</span>
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="apple-icon-btn"
            aria-label={ariaThemeLabel}
          >
            {theme === THEME_DARK ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            className="apple-icon-btn apple-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menú"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable con glassmorphism */}
      {isMenuOpen && (
        <nav className="apple-mobile-menu" aria-label="Menú móvil">
          <div className="apple-mobile-menu__inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`apple-mobile-link ${
                  isLinkActive(item.href) ? "apple-mobile-link--active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/CV_Juan_Manuel_Cabrera_Product_Designer.pdf"
              download
              className="apple-mobile-cv"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={15} />
              <span>Descargar CV</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
