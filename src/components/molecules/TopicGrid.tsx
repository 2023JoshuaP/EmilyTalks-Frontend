"use client"

import Button from "@/components/atoms/Button"

interface TopicGridProps {
  onSelectTopic: () => void
}

export default function TopicGrid({ onSelectTopic }: TopicGridProps) {
  const topics = Array.from({ length: 9 }, (_, i) => `Tema ${i + 1}`)

  return (
    <div className="w-full max-w-lg space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Selecciona el tema que quieras practicar</h1>

      <div className="grid grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <span className="text-sm text-gray-500">{topic}</span>
          </div>
        ))}
      </div>

      <Button onClick={onSelectTopic} className="w-full">
        Selecciona entre varios temas para practicar
      </Button>
    </div>
  )
}