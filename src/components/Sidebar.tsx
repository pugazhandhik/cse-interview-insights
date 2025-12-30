import { 
  LayoutGrid, 
  MessageSquare, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", active: false },
  { icon: MessageSquare, label: "Messages", active: true },
  { icon: FileText, label: "Reports", active: false },
  { icon: Users, label: "Candidates", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn(
      "flex flex-col w-16 bg-sidebar text-sidebar-foreground",
      className
    )}>
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-heading font-bold text-lg">AI</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center py-4 gap-2">
        <span className="text-xs text-sidebar-foreground/50 mb-2">Menu</span>
        {navItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
              item.active 
                ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center py-4 gap-2 border-t border-sidebar-border">
        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-sidebar-accent/50 transition-colors">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
