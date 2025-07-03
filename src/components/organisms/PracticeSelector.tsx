import ModeSelector from "@/components/molecules/ModeSelector"
import TopicGrid from "@/components/molecules/TopicGrid"
import ScenarioCarousel from "@/components/molecules/ScenarioCarousel"

interface PracticeSelectorProps {
  type: "mode" | "topic" | "scenario"
  onSelectMode?: (mode: "free" | "topic") => void
  onSelectTopic?: () => void
  onStartPractice?: () => void
}

export default function PracticeSelector({
  type,
  onSelectMode,
  onSelectTopic,
  onStartPractice,
}: PracticeSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
      {type === "mode" && onSelectMode && <ModeSelector onSelectMode={onSelectMode} />}
      {type === "topic" && onSelectTopic && <TopicGrid onSelectTopic={onSelectTopic} />}
      {type === "scenario" && onStartPractice && <ScenarioCarousel onStartPractice={onStartPractice} />}
    </div>
  )
}