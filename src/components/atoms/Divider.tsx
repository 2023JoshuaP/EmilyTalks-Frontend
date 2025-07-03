import { cn } from "@/lib/utils"

interface DividerProps {
  className?: string
}

export default function Divider({ className }: DividerProps) {
  return <div className={cn("w-4/5 h-px bg-blue-300 mx-auto", className)} />
}