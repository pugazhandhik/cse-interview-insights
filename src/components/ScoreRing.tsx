import { cn } from "@/lib/utils";

interface ScoreRingProps {
  score: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  showPercentage?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { diameter: 60, strokeWidth: 5, fontSize: "text-sm" },
  md: { diameter: 80, strokeWidth: 6, fontSize: "text-lg" },
  lg: { diameter: 120, strokeWidth: 8, fontSize: "text-3xl" },
};

export function ScoreRing({ 
  score, 
  size = "md", 
  label, 
  showPercentage = true,
  className 
}: ScoreRingProps) {
  const config = sizeConfig[size];
  const radius = (config.diameter - config.strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "stroke-score-excellent";
    if (score >= 65) return "stroke-score-good";
    if (score >= 50) return "stroke-score-average";
    return "stroke-score-poor";
  };

  const getTextColor = (score: number) => {
    if (score >= 80) return "text-score-excellent";
    if (score >= 65) return "text-score-good";
    if (score >= 50) return "text-score-average";
    return "text-score-poor";
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="score-ring" style={{ width: config.diameter, height: config.diameter }}>
        <svg width={config.diameter} height={config.diameter}>
          {/* Background circle */}
          <circle
            cx={config.diameter / 2}
            cy={config.diameter / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={config.strokeWidth}
            className="text-muted"
          />
          {/* Progress circle */}
          <circle
            cx={config.diameter / 2}
            cy={config.diameter / 2}
            r={radius}
            fill="none"
            strokeWidth={config.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={cn("score-ring-circle", getScoreColor(score))}
          />
        </svg>
        {showPercentage && (
          <span className={cn(
            "absolute font-heading font-semibold",
            config.fontSize,
            getTextColor(score)
          )}>
            {score}%
          </span>
        )}
      </div>
      {label && (
        <span className="text-xs text-muted-foreground text-center max-w-20">
          {label}
        </span>
      )}
    </div>
  );
}
