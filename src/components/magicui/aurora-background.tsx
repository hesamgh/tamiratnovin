import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -left-[15%] -top-[25%] h-[55%] w-[55%] rounded-full bg-primary/25 blur-[100px] motion-safe:animate-aurora-1" />
      <div className="absolute -bottom-[20%] -right-[10%] h-[50%] w-[45%] rounded-full bg-accent/20 blur-[90px] motion-safe:animate-aurora-2" />
      <div className="absolute left-[30%] top-[40%] h-[35%] w-[40%] rounded-full bg-blue-400/15 blur-[80px] motion-safe:animate-aurora-3" />
    </div>
  );
}
