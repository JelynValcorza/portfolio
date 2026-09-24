import * as React from "react";
import { cn } from "@/src/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "primary";
}

export function Badge({
  className,
  variant = "secondary",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-muted text-muted-foreground",
        variant === "outline" &&
          "border border-border text-foreground bg-transparent",
        variant === "primary" && "bg-primary/10 text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
