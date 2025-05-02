import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
} 

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
        <button
        className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50",
            {
            "bg-red-600 text-white hover:bg-red-700": variant === "default",
            "bg-red-700 text-white hover:bg-red-600": variant === "destructive",
            "border border-zinc-800 bg-black hover:bg-zinc-900 hover:text-white": variant === "outline",
            "bg-zinc-800 text-white hover:bg-zinc-900": variant === "secondary",
            "hover:bg-zinc-900 hover:text-white": variant === "ghost",
            "text-red-600 underline-offset-4 hover:underline": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
            },
            className,
        )}
        ref={ref}
        {...props}
        />
    )
    },
)
Button.displayName = "Button"

export { Button }
