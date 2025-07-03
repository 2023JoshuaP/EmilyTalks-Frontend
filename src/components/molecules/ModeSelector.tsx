"use client"

import Button from "@/components/atoms/Button"

interface ModeSelectorProps {
  onSelectMode: (mode: "free" | "topic") => void
}

export default function ModeSelector({ onSelectMode }: ModeSelectorProps) {
  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Selecciona tu modo de práctica</h1>

      <div className="space-y-4">
        <Button onClick={() => onSelectMode("free")} className="w-full">
          Modo Libre
        </Button>
        <Button onClick={() => onSelectMode("topic")} className="w-full">
          Tema Específico
        </Button>
      </div>
    </div>
  )
}