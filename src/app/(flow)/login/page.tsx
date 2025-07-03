"use client"

import { useRouter } from "next/navigation"
import AuthForm from "@/components/molecules/AuthForm"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push("/home")
  }

  const handleToggle = () => {
    router.push("/register")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <AuthForm type="login" onSubmit={handleSubmit} onToggle={handleToggle} />
      </div>
    </div>
  )
}