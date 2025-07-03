"use client"

import { useRouter } from "next/navigation"
import HomeSection from "@/components/organisms/HomeSection"

export default function HomePage() {
  const router = useRouter()

  const handleStartPractice = () => {
    router.push("/mode")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <HomeSection onStartPractice={handleStartPractice} />
    </div>
  )
}