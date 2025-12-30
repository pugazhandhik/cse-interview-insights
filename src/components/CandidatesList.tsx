import { ChevronUp } from "lucide-react";
import { CandidateCard } from "./CandidateCard";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Candidate {
  id: string;
  name: string;
  avatar: string;
  score: number;
  status: "approved" | "rejected";
}

interface CandidatesListProps {
  candidates: Candidate[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function CandidatesList({ 
  candidates, 
  selectedId, 
  onSelect,
  className 
}: CandidatesListProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={cn("bg-sidebar/90 text-sidebar-foreground rounded-xl overflow-hidden", className)}>
      <button 
        className="w-full flex items-center justify-between p-4 hover:bg-sidebar-accent/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-heading font-semibold text-white">All Candidates</h3>
        <ChevronUp className={cn(
          "w-5 h-5 transition-transform duration-200",
          !isExpanded && "rotate-180"
        )} />
      </button>

      {isExpanded && (
        <div className="px-2 pb-2 space-y-1 max-h-80 overflow-y-auto">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              name={candidate.name}
              avatar={candidate.avatar}
              score={candidate.score}
              status={candidate.status}
              active={candidate.id === selectedId}
              onClick={() => onSelect?.(candidate.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
