import { Badge } from "@/components/ui/badge";

// components/ui/TechBadge.jsx
export function TechBadge({ children, isDark, className = "", ...props }) {
  return (
    <span
      className={`
        font-label-mono text-body-lg uppercase tracking-tighter 
        border border-blue/30 px-2 py-0.5 rounded 
      
        ${isDark ? "text-black" : "text-blue-900"} 
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
