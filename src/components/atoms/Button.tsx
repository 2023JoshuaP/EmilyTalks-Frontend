import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link"
  children: ReactNode
}

export default function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    link: "text-blue-600 hover:text-blue-800 underline bg-transparent p-0 focus:ring-blue-500",
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}