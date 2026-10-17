import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#2563eb",
  colorTo = "#f97316",
  ...props
}: AnimatedGradientTextProps) {
  return (
    <div
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-[var(--color-from)] text-transparent animate-gradient",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
