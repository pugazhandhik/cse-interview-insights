import { cn } from "@/lib/utils";

interface CandidateCardProps {
  name: string;
  avatar: string;
  score: number;
  status: "approved" | "rejected";
  active?: boolean;
  onClick?: () => void;
}

export function CandidateCard({ 
  name, 
  avatar, 
  score, 
  status, 
  active = false,
  onClick 
}: CandidateCardProps) {
  const progressWidth = `${score}%`;
  const progressColor = status === "approved" ? "bg-primary" : "bg-warning";

  return (
    <div 
      className={cn("candidate-card", active && "active")}
      onClick={onClick}
    >
      <img 
        src={avatar} 
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">{name}</h4>
        <span className={cn(
          "status-badge",
          status === "approved" ? "status-approved" : "status-rejected"
        )}>
          {status === "approved" ? "Approved" : "Rejected"}
        </span>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm font-medium">
          <span className="text-foreground">{score}</span>
          <span className="text-muted-foreground">/100</span>
        </span>
        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full transition-all duration-500", progressColor)}
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </div>
  );
}
