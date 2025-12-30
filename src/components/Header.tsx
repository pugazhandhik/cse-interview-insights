import { ChevronLeft, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
  userName: string;
  userAvatar: string;
  className?: string;
}

export function Header({ title, subtitle, userName, userAvatar, className }: HeaderProps) {
  return (
    <header className={cn(
      "flex items-center justify-between h-16 px-6 bg-card border-b border-border",
      className
    )}>
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-heading font-semibold text-lg">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{userName}</span>
          <img 
            src={userAvatar}
            alt={userName}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-border"
          />
        </div>
      </div>
    </header>
  );
}
