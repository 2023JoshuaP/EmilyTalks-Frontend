import Progress from "@/components/atoms/Progress"

export default function ScoreSummary() {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <div className="space-y-4">
        <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Resumen de práctica</span>
        </div>

        <div className="flex justify-center space-x-8">
          <Progress value={90} color="green" />
          <Progress value={10} color="red" />
        </div>
      </div>
    </div>
  )
}