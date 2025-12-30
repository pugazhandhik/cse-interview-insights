import { Volume2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  candidateName: string;
  candidateRole: string;
  currentQuestion: string;
  questionNumber: number;
  currentTime: string;
  totalTime: string;
  progress: number;
  className?: string;
}

export function VideoPlayer({
  candidateName,
  candidateRole,
  currentQuestion,
  questionNumber,
  currentTime,
  totalTime,
  progress,
  className
}: VideoPlayerProps) {
  return (
    <div className={cn(
      "relative bg-gradient-to-br from-sidebar to-sidebar/90 rounded-2xl overflow-hidden aspect-video",
      className
    )}>
      {/* Video Background (Mock) */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/30">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
          alt="Candidate Interview"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Candidate Info */}
      <div className="absolute top-4 left-4 text-white">
        <h3 className="font-heading font-semibold text-lg">{candidateName}</h3>
        <p className="text-sm text-white/70">{candidateRole}</p>
      </div>

      {/* Current Question */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 max-w-xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          <span className="text-xs text-white/70">Question {questionNumber}</span>
        </div>
        <p className="text-sm text-white">{currentQuestion}</p>
      </div>

      {/* Audio Visualization */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        {[40, 70, 50, 80, 60, 90, 45].map((height, i) => (
          <div 
            key={i}
            className="w-1 bg-primary rounded-full transition-all duration-300"
            style={{ 
              height: `${height * 0.4}px`,
              opacity: 0.5 + (height / 200)
            }}
          />
        ))}
      </div>

      {/* Subtitle */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
        <p className="text-sm text-white text-center max-w-md">
          I'm extremely ambitious person which motivates me in my professional life.
        </p>
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80 font-mono">
            {currentTime}/{totalTime}
          </span>
          <div className="flex items-center gap-3">
            <button className="text-white/80 hover:text-white transition-colors">
              <Volume2 className="w-5 h-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
