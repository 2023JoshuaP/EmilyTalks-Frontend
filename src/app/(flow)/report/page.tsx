"use client"

import { useRouter } from "next/navigation"
import ReportPanel from "@/components/organisms/ReportPanel"

export default function ReportPage() {
  const router = useRouter()

  const handleRepeatPractice = () => {
    router.push("/mode")
  }

  const handleBackToHome = () => {
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <ReportPanel onRepeatPractice={handleRepeatPractice} onBackToHome={handleBackToHome} />
    </div>
  )
}