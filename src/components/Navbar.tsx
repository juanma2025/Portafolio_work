"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// Clase para representar un elemento de navegación
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

  // Crear instancias de NavItem usando programación orientada a objetos
    const navItems = [
    new NavItem("HOME", "/"),
    new NavItem("ABOUT MY", "/about"),
    new NavItem("RESUME", "/resume"),
    new NavItem("MY SERVICES", "/services"),
    new NavItem("CONTACT ME", "/contact"),
    ]

    return (
    <header className="bg-black text-white py-4 px-6 border-b border-zinc-800">
        <section className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
            <span className="border border-red-600 p-1">
            <span className="bg-red-600 p-1">
                <span className="text-white">&lt;/&gt;</span>
            </span>
            </span>
            <span className="text-xl font-bold">Juan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
            <span key={item.href}>{item.render()}</span>
            ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </section>

      {/* Mobile Navigation Menu */}
        {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-black z-50 border-b border-zinc-800">
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
