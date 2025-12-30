import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  text: string;
}

interface QuestionListProps {
  questions: Question[];
  currentQuestion?: number;
  className?: string;
}

export function QuestionList({ questions, currentQuestion = 1, className }: QuestionListProps) {
  return (
    <div className={cn("bg-card rounded-xl p-5 animate-fade-in", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-semibold text-lg">Question List</h3>
        <button className="text-primary hover:text-primary/80 transition-colors">
          <Info className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-1 max-h-64 overflow-y-auto pr-2">
        {questions.map((question) => (
          <div key={question.id} className="question-item">
            <div className={cn(
              "question-number",
              question.id === currentQuestion 
                ? "bg-primary text-primary-foreground" 
                : question.id < currentQuestion
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
            )}>
              {question.id}
            </div>
            <p className={cn(
              "text-sm leading-relaxed",
              question.id === currentQuestion 
                ? "text-foreground font-medium" 
                : "text-muted-foreground"
            )}>
              {question.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
