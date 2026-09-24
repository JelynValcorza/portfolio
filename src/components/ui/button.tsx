import * as React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        variant === "outline" &&
          "border border-border bg-transparent hover:bg-muted text-foreground",
        variant === "ghost" && "hover:bg-muted text-foreground",
        variant === "secondary" && "bg-muted text-foreground hover:bg-muted/80",
        size === "sm" && "h-8 px-3 text-xs rounded-lg gap-1.5",
        size === "md" && "h-10 px-4 text-sm rounded-xl gap-2",
        size === "lg" && "h-12 px-6 text-base rounded-xl gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
