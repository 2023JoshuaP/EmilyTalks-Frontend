"use client"

import { useRouter } from "next/navigation"
import PracticeSelector from "@/components/organisms/PracticeSelector"

export default function TopicPage() {
  const router = useRouter()

  const handleSelectTopic = () => {
    router.push("/conversation")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <PracticeSelector type="topic" onSelectTopic={handleSelectTopic} />
    </div>
  )
}