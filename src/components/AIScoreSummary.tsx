import { Info, Check, X } from "lucide-react";
import { ScoreRing } from "./ScoreRing";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface AIScoreSummaryProps {
  score: number;
  description: string;
  className?: string;
}

export function AIScoreSummary({ score, description, className }: AIScoreSummaryProps) {
  const navigate = useNavigate();

  return (
    <div className={cn("bg-card rounded-xl p-5 animate-fade-in", className)}>
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-primary" />
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="text-5xl font-heading font-bold text-primary mb-2">{score}%</span>
        <h3 className="font-heading font-semibold text-lg mb-2">AI Video Score Summary</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex gap-2 w-full mb-3">
          <Button 
            variant="outline" 
            className="flex-1 gap-2"
            onClick={() => navigate("/results")}
          >
            <Check className="w-4 h-4" />
            Shortlist
          </Button>
          <Button variant="outline" className="flex-1 gap-2 text-destructive border-destructive/30 hover:bg-destructive/10">
            <X className="w-4 h-4" />
            Reject
          </Button>
        </div>

        <Button 
          className="w-full"
          onClick={() => navigate("/results")}
        >
          Hire Talent
        </Button>
      </div>
    </div>
  );
}
