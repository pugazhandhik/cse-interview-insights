import { MoreHorizontal, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

interface TeamFeedbackProps {
  members: TeamMember[];
  className?: string;
}

export function TeamFeedback({ members, className }: TeamFeedbackProps) {
  return (
    <div className={cn("bg-card rounded-xl p-5 animate-fade-in", className)}>
      <div className="mb-4">
        <h3 className="font-heading font-semibold text-lg">Team Feedback</h3>
        <p className="text-sm text-muted-foreground">See the team feedback result</p>
      </div>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-3">
            <img 
              src={member.avatar}
              alt={member.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm truncate">{member.name}</h4>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground truncate">{member.role}</p>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={cn(
                      "w-3 h-3",
                      star <= member.rating 
                        ? "fill-warning text-warning" 
                        : "text-muted"
                    )}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  {member.rating}.0 Average
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
