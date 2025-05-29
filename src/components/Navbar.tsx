"use client";

const THEME_LIGHT = "light"
const THEME_DARK = "dark"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

class NavItem {
    constructor(
    public label: string,
    public href: string,
    public active = false,
    ) {}

    render() {
    return (
        <Link
        href={this.href}
        className={`px-4 py-2 hover:text-red-500 transition-colors ${this.active ? "font-bold" : ""}`}
        >
        {this.label}
        </Link>
    )
    }
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

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

  // Create NavItem instances using object-oriented programming
    const navItems = [
    new NavItem("HOME", "/"),
    new NavItem("ABOUT MY", "/about"),
    new NavItem("RESUME", "/resume"),
    new NavItem("MY SERVICES", "/services"),
    new NavItem("CONTACT ME", "/contact"),
    ]

    return (
    <header className="bg-white dark:bg-black text-black dark:text-white py-4 px-6 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <section className="max-w-screen-xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <span className="bg-red-600 p-2">
                    <span className="text-white">&lt;/&gt;</span>
                </span>
                <span className="text-xl font-bold">Juan Desing</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className=" md:flex items-center space-x-2">
                {navItems.map((item) => (
                    <span key={item.href}>{item.render()}</span>
                ))}

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="ml-4 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
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
                    className="mr-4 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    aria-label={getAriaLabel()}
                >
                    {getThemeIcon()}
                </button>

                <button
                    className="text-black dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </section>

       {/* Mobile Navigation Menu */}
        {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white dark:bg-black z-50 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
            <section className="max-w-screen-xl mx-auto py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
                <Link
                key={item.href}
                href={item.href}
                className="px-6 py-2 hover:text-red-500 transition-colors"
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
