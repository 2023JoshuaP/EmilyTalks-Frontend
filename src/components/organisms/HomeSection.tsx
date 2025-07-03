"use client"

import Image from "next/image"
import { Info, Settings } from "lucide-react"
import Button from "@/components/atoms/Button"
import IconButton from "@/components/atoms/IconButton"

interface HomeSectionProps {
  onStartPractice: () => void
}

export default function HomeSection({ onStartPractice }: HomeSectionProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image src="/frog-mascot.png" alt="EmilyTalks Mascot" width={48} height={48} className="rounded-full" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">EmilyTalks</h2>
            <p className="text-sm text-gray-600">Learn English</p>
          </div>
        </div>
        <IconButton size="sm">
          <Info className="w-5 h-5" />
        </IconButton>
      </div>

      <Button onClick={onStartPractice} className="w-full mb-6">
        Iniciar práctica
      </Button>

      <IconButton className="absolute bottom-4 left-4" size="sm">
        <Settings className="w-5 h-5" />
      </IconButton>
    </div>
  )
}