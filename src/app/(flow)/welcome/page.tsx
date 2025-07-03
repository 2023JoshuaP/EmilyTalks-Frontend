"use client"

import { useRouter } from "next/navigation"
import WelcomeCard from "@/components/organisms/WelcomeCard"

export default function WelcomePage() {
  const router = useRouter()

  const handleRegister = () => {
    router.push("/register")
  }

  const handleLogin = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <WelcomeCard onRegister={handleRegister} onLogin={handleLogin} />
    </div>
  )
}