import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: "sm" | "md" | "lg"
}

export default function IconButton({ children, size = "md", className, ...props }: IconButtonProps) {
  const sizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  }

  return (
    <button
      className={cn(
        "rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}