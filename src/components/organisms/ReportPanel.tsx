"use client"

import Button from "@/components/atoms/Button"
import ScoreSummary from "@/components/molecules/ScoreSummary"

interface ReportPanelProps {
  onRepeatPractice: () => void
  onBackToHome: () => void
}

export default function ReportPanel({ onRepeatPractice, onBackToHome }: ReportPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Aquí está tu reporte final</h1>

      <ScoreSummary />

      <div className="space-y-4 mt-8">
        <Button onClick={onRepeatPractice} className="w-full">
          Repetir práctica
        </Button>
        <Button onClick={onBackToHome} variant="secondary" className="w-full">
          Volver a inicio
        </Button>
      </div>
    </div>
  )
}