"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define theme type constants
const THEME_LIGHT = "light"
const THEME_DARK = "dark"

// Define the available theme types
type ThemeType = typeof THEME_LIGHT | typeof THEME_DARK

// Define the context type
type ThemeContextType = {
    theme: ThemeType
    toggleTheme: () => void
    setTheme: (theme: ThemeType) => void
}

// Create the context with a default value to avoid undefined checks
const defaultContextValue: ThemeContextType = {
    theme: THEME_LIGHT,
    toggleTheme: () => {},
    setTheme: () => {},
}

// Create the context
const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

// Class to handle theme logic
class ThemeManager {
    theme: ThemeType
    setThemeState: React.Dispatch<React.SetStateAction<ThemeType>>

    constructor(initialTheme: ThemeType, setThemeState: React.Dispatch<React.SetStateAction<ThemeType>>) {
        this.theme = initialTheme
        this.setThemeState = setThemeState
    }

    // Method to toggle between light and dark themes
    toggleTheme() {
        const newTheme = this.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
        this.setTheme(newTheme)
    }

    // Method to set a specific theme
    setTheme(newTheme: ThemeType) {
        this.theme = newTheme
        this.setThemeState(newTheme)

        // Next.js safe client-side only operations
        if (typeof window !== 'undefined') {
            // Save to localStorage
            localStorage.setItem("theme", newTheme)

            // Update document classes
            document.documentElement.classList.remove(THEME_DARK, THEME_LIGHT)
            document.documentElement.classList.add(newTheme)

            // For Tailwind dark mode compatibility
            if (newTheme === THEME_DARK) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }
}

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State for current theme
    const [theme, setTheme] = useState<ThemeType>(THEME_LIGHT)
    const [mounted, setMounted] = useState(false)

    // Create a ThemeManager instance
    const themeManager = new ThemeManager(theme, setTheme)

    // Effect to initialize theme - only runs on the client
    useEffect(() => {
        setMounted(true)
        
        // These operations now only happen on the client side
        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem("theme") as ThemeType | null

        // Check system preference if no saved theme
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        // Set initial theme
        const initialTheme = savedTheme || (prefersDark ? THEME_DARK : THEME_LIGHT)
        themeManager.setTheme(initialTheme)
    }, [])

    // Context value
    const contextValue = {
        theme,
        toggleTheme: () => themeManager.toggleTheme(),
        setTheme: (newTheme: ThemeType) => themeManager.setTheme(newTheme),
    }

    // Prevent rendering until client-side hydration is complete
    // This prevents hydration mismatch errors
    if (!mounted) {
        return <>{children}</>
    }

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

// Custom hook to use the context
export const useTheme = () => {
    const context = useContext(ThemeContext)
    return context
}