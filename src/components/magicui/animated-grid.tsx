import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  className?: string;
}

export function AnimatedGrid({ className }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]",
        className
      )}
    >
      <div className="absolute inset-0 motion-safe:animate-grid-drift">
        <svg className="h-[200%] w-[200%] -translate-x-1/4 -translate-y-1/4 opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="novin-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/40"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#novin-grid)" />
        </svg>
      </div>
    </div>
  );
}
