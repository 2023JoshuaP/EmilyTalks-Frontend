import { cn } from "@/lib/utils"

interface ProgressProps {
  value: number
  label?: string
  size?: "sm" | "md" | "lg"
  color?: "green" | "red"
}

export default function Progress({ value, label, size = "md", color = "green" }: ProgressProps) {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  }

  const colors = {
    green: "text-green-500",
    red: "text-red-500",
  }

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className={cn("relative", sizes[size])}>
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={cn("transition-all duration-300", colors[color])}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("text-lg font-bold", colors[color])}>{value}%</span>
        </div>
      </div>
      {label && <span className="mt-2 text-sm text-gray-600">{label}</span>}
    </div>
  )
}