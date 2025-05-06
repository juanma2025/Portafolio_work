"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeContextType = {
    theme: "dark" | "light"
    toggleTheme: () => void
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

class ThemeManager {
    theme: "dark" | "light"
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>

    constructor(initialTheme: "dark" | "light", setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>) {
    this.theme = initialTheme
    this.setTheme = setTheme
    }

    toggleTheme() {
    const newTheme = this.theme === "dark" ? "light" : "dark"
    this.setTheme(newTheme)

    // Guardar en localStorage
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
    }
}


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<"dark" | "light">("light")


    const themeManager = new ThemeManager(theme, setTheme)


    useEffect(() => {

    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null


    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)


    if (initialTheme === "dark") {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
    }, [])

    const contextValue = {
    theme,
    toggleTheme: () => themeManager.toggleTheme(),
    }

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}


export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
