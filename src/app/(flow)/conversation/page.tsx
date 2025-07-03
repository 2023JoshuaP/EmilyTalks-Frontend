"use client"

import { useRouter } from "next/navigation"
import ConversationPanel from "@/components/organisms/ConversationPanel"

export default function ConversationPage() {
  const router = useRouter()

  const handleEndConversation = () => {
    router.push("/report")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <ConversationPanel onEndConversation={handleEndConversation} />
    </div>
  )
}