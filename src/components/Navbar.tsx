"use client";

const THEME_DARK = "dark"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const pathname = usePathname()

  // Function to get the appropriate icon based on current theme
    const getThemeIcon = () => {
    return theme === THEME_DARK ? (
        <Sun size={20} className="text-yellow-400" />
    ) : (
        <Moon size={20} className="text-zinc-800" />
    )
    }

  // Function to get the appropriate aria-label text
    const getAriaLabel = () => {
    return theme === THEME_DARK ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    }

    const navItems = [
    { label: "INICIO", href: "/" },
    { label: "SOBRE MÍ", href: "/about" },
    { label: "CURRÍCULUM", href: "/resume" },
    { label: "SERVICIOS", href: "/services" },
    { label: "CONTACTO", href: "/contact" },
    ]

    return (
    <header className="site-header">
        <div className="site-header__inner">
            <Link href="/" className="flex items-center gap-2 brand-link">
                <span className="bg-red-600 p-2 brand-mark">
                    <span className="text-white">&lt;/&gt;</span>
                </span>
                <span className="text-xl font-bold brand-name">Juan Design</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Menú principal">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-link ${pathname === item.href ? "nav-link--active" : ""}`}
                    >
                        {item.label}
                    </Link>
                ))}

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                    aria-label={getAriaLabel()}
                >
                    {getThemeIcon()}
                </button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden items-center">
                {/* Theme Toggle Button on mobile */}
                <button
                    onClick={toggleTheme}
                    className="theme-toggle mobile-theme-toggle"
                    aria-label={getAriaLabel()}
                >
                    {getThemeIcon()}
                </button>

                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Alternar menú"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

       {/* Mobile Navigation Menu */}
        {isMenuOpen && (
        <nav className="mobile-nav" aria-label="Menú móvil">
            <div className="mobile-nav__inner">
            {navItems.map((item) => (
                <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav__link ${pathname === item.href ? "mobile-nav__link--active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
                >
                {item.label}
                </Link>
            ))}
            </div>
        </nav>
        )}
    </header>
    )
}
