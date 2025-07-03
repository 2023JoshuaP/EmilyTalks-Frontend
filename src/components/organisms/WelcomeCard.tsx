"use client"

import Image from "next/image"
import Button from "@/components/atoms/Button"
import Divider from "@/components/atoms/Divider"

interface WelcomeCardProps {
  onRegister: () => void
  onLogin: () => void
}

export default function WelcomeCard({ onRegister, onLogin }: WelcomeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="flex items-center space-x-6 mb-8">
        <div className="w-45 h-45 relative flex-shrink-0">
          <Image src="/frog-mascot.png" alt="EmilyTalks Mascot" width={180} height={180} className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EmilyTalks</h1>
          <p className="text-lg text-gray-600">Learn English</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <Button onClick={onRegister} className="w-full">
          Registrarse
        </Button>
        <Button onClick={onLogin} variant="secondary" className="w-full">
          Login
        </Button>
      </div>

      <Divider />
    </div>
  )
}