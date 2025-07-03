"use client"

import { useRouter } from "next/navigation"
import PracticeSelector from "@/components/organisms/PracticeSelector"

export default function ModePage() {
  const router = useRouter()

  const handleSelectMode = (mode: "free" | "topic") => {
    if (mode === "free") {
      router.push("/scenario")
    } else {
      router.push("/topic")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <PracticeSelector type="mode" onSelectMode={handleSelectMode} />
    </div>
  )
}