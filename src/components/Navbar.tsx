"use client";

const THEME_LIGHT = "light"
const THEME_DARK = "dark"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

  // Function to toggle between light and dark themes
    const toggleTheme = () => {
    setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT)
    }

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
    return theme === THEME_DARK ? "Switch to Light Mode" : "Switch to Dark Mode"
    }

    const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT MY", href: "/about" },
    { label: "RESUME", href: "/resume" },
    { label: "MY SERVICES", href: "/services" },
    { label: "CONTACT ME", href: "/contact" },
    ]

    return (
    <header className="site-header">
        <section className="site-header__inner">
            <Link href="/" className="flex items-center gap-2 brand-link">
                <span className="bg-red-600 p-2 brand-mark">
                    <span className="text-white">&lt;/&gt;</span>
                </span>
                <span className="text-xl font-bold brand-name">Juan Desing</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Main menu">
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
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </section>

       {/* Mobile Navigation Menu */}
        {isMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile menu">
            <section className="mobile-nav__inner">
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
            </section>
        </nav>
        )}
    </header>
    )
}
