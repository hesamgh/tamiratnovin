import { cn } from "@/lib/utils";
import { PhoneCall } from "lucide-react";

interface MobileCallIconProps {
  className?: string;
  iconClassName?: string;
  boxed?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-7 w-7", icon: "h-3.5 w-3.5" },
  md: { box: "h-8 w-8", icon: "h-4 w-4" },
  lg: { box: "h-10 w-10", icon: "h-5 w-5" },
} as const;

export function MobileCallIcon({
  className,
  iconClassName,
  boxed = false,
  size = "md",
}: MobileCallIconProps) {
  const s = sizeMap[size];

  if (boxed) {
    return (
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-white/20 shadow-inner",
          s.box,
          className
        )}
      >
        <PhoneCall className={cn(s.icon, iconClassName)} strokeWidth={2.25} />
      </span>
    );
  }

  return (
    <PhoneCall
      className={cn(s.icon, "shrink-0", className, iconClassName)}
      strokeWidth={2.25}
    />
  );
}
