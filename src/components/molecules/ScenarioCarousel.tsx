"use client"

import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import IconButton from "@/components/atoms/IconButton"
import Button from "@/components/atoms/Button"

interface ScenarioCarouselProps {
  onStartPractice: () => void
}

export default function ScenarioCarousel({ onStartPractice }: ScenarioCarouselProps) {
  return (
    <div className="w-full max-w-md space-y-8">
      <h1 className="text-2xl font-bold text-center text-gray-800">Elige tu escenario</h1>

      <div className="flex items-center justify-center space-x-8">
        <IconButton>
          <ChevronLeft className="w-6 h-6" />
        </IconButton>

        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <ShoppingCart className="w-12 h-12 text-green-600" />
        </div>

        <IconButton>
          <ChevronRight className="w-6 h-6" />
        </IconButton>
      </div>

      <Button onClick={onStartPractice} className="w-full">
        Iniciar práctica
      </Button>
    </div>
  )
}