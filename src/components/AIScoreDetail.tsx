import { ScoreRing } from "./ScoreRing";
import { cn } from "@/lib/utils";

interface ScoreCategory {
  label: string;
  score: number;
}

interface AIScoreDetailProps {
  categories: ScoreCategory[];
  className?: string;
}

export function AIScoreDetail({ categories, className }: AIScoreDetailProps) {
  return (
    <div className={cn("bg-card rounded-xl p-5 animate-fade-in", className)}>
      <h3 className="font-heading font-semibold text-lg mb-4">AI Video Score Detail</h3>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <ScoreRing 
            key={index}
            score={category.score}
            label={category.label}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
}
